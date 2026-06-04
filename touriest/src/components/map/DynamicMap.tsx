"use client";

import {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

import type {
  Map as LeafletMap,
  Marker,
} from "leaflet";

import {
  MapPin,
} from "lucide-react";

import type {
  ExtendedPlace,
} from "@/types/place";

import PlaceDrawer from "./PlaceDrawer";
import SavedPlacesPanel from "./SavedPanel";
import MapFilters from "./MapFilters";
import MapSearch from "./MapSearch";
import MapLoading from "./MapSpinner";
import MapError from "./MapError";
import MapEmpty from "./MapEmpty";

import useSavedPlaces
from "@/hooks/useSavedPlaces";

import useMapPlaces
from "@/hooks/useMapPlaces";

import useLeafletMarkers
from "@/hooks/useLeafletMarkers";

export default function DynamicMap() {

  /* STATES */

  const [
    searchQuery,
    setSearchQuery,
  ] = useState("");

  const [
    selectedType,
    setSelectedType,
  ] = useState("all");

  const [
    selectedPlace,
    setSelectedPlace,
  ] = useState<ExtendedPlace | null>(
    null
  );

  const [
    userLocation,
    setUserLocation,
  ] = useState({
    lat: 23.2599,
    lng: 77.4126,
  });

  /* SAVED PLACES */

  const {

    savedPlaces,

    toggleSavePlace,

  } = useSavedPlaces();

  /* FETCH PLACES */

  const {
    places,
    loading,
    error,
  } = useMapPlaces({

    lat:
      userLocation.lat,

    lng:
      userLocation.lng,

    type:
      selectedType,

    searchQuery,
  });

  /* REFS */

  const mapRef =
    useRef<LeafletMap | null>(
      null
    );

  const markersRef =
    useRef<Marker[]>([]);

  const debounceRef =
    useRef<number | null>(
      null
    );

  const mapContainerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  /* USER LOCATION */

  useEffect(() => {

    if (
      navigator.geolocation
    ) {

      navigator.geolocation.getCurrentPosition(

        (position) => {

          setUserLocation({

            lat:
              position.coords
                .latitude,

            lng:
              position.coords
                .longitude,
          });
        },

        (error) => {

          console.error(
            "Location error:",
            error
          );
        }
      );
    }

  }, []);

  /* INIT MAP */

  useEffect(() => {

    let isMounted = true;

    async function initMap() {

      if (
        !isMounted ||
        mapRef.current
      ) {
        return;
      }

     const L =
  await import("leaflet");


      if (!isMounted) {
        return;
      }

      const container =
        mapContainerRef.current;

      if (!container || !isMounted) {
        return;
      }

      /* FIX:
         REMOVE OLD LEAFLET INSTANCE
      */

      

      if (
        (
          container as HTMLElement & {
            _leaflet_id?: number;
          }
        )._leaflet_id
      ) {

        (
          container as HTMLElement & {
            _leaflet_id?: number;
          }
        )._leaflet_id = undefined;
      }

      /* CREATE MAP WITH CURRENT LOCATION */

      const map =
        L.map(
          container,
          {
            zoomControl: false,
          }
        ).setView(
          [
            userLocation.lat,
            userLocation.lng,
          ],
          15
        );

      if (!isMounted) {
        map.remove();
        return;
      }

      mapRef.current =
        map;

      /* TILE LAYER */

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            "&copy; OpenStreetMap &copy; CARTO",
        }
      ).addTo(map);

      /* USER ICON */

      const userIcon =
        L.divIcon({

          html: `
            <div
              style="
                width:24px;
                height:24px;
                background:#2563EB;
                border:4px solid white;
                border-radius:999px;
                box-shadow:0 0 20px rgba(37,99,235,.5);
              "
            ></div>
          `,

          className: "",

          iconSize: [24, 24],
        });

      /* USER MARKER */

      L.marker(
       [
        userLocation.lat,
       userLocation.lng,
  ],
        {
          icon: userIcon,
        }
      )
        .addTo(map)
        .bindPopup(
          "📍 Your Location"
        );

      /* MAP MOVE */

      map.on(
        "moveend",
        () => {

         if (
  debounceRef.current !== null
) {
  window.clearTimeout(
    debounceRef.current
  );
}

          debounceRef.current =
            window.setTimeout(
              () => {

                if (
                  !isMounted ||
                  !mapRef.current
                ) {
                  return;
                }

                const center =
                  mapRef.current.getCenter();

                setUserLocation({

                  lat:
                    center.lat,

                  lng:
                    center.lng,
                });

              },
              700
            );
        }
      );
    }

    initMap();

    return () => {

      isMounted = false;

      /* CLEAR TIMEOUT */

    if (
  debounceRef.current !== null
) {
  window.clearTimeout(
    debounceRef.current
  );
}

      /* REMOVE MAP */

      if (
        mapRef.current
      ) {

        mapRef.current.remove();

        mapRef.current =
          null;
      }

      markersRef.current = [];
    };

  }, []);

  /* UPDATE MAP CENTER */

  useEffect(() => {

    if (
      !mapRef.current
    ) {
      return;
    }

    const map =
      mapRef.current;

    const center =
      map.getCenter();

    const latDiff =
      Math.abs(
        center.lat -
        userLocation.lat
      );

    const lngDiff =
      Math.abs(
        center.lng -
        userLocation.lng
      );

    /* ONLY PAN IF SIGNIFICANTLY DIFFERENT */

    if (
      latDiff > 0.01 ||
      lngDiff > 0.01
    ) {

      map.setView(
        [
          userLocation.lat,
          userLocation.lng,
        ],
        map.getZoom(),
        {
          animate: true,
          duration: 0.5,
        }
      );
    }

  }, [userLocation]);

  /* HANDLE SELECT PLACE */

  const handleSelectPlace = useCallback(
    (place: ExtendedPlace) => {
      setSelectedPlace(place);
    },
    []
  );

  /* MARKERS */

  useLeafletMarkers({

    mapRef,

    markersRef,

    places,

    onSelectPlace:
      handleSelectPlace,
  });

  return (

    <section className="max-w-7xl mx-auto px-6 py-16">

  <div className="relative h-[100dvh] sm:h-[750px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-200">

        {/* MAP */}


        <div
          ref={mapContainerRef}
          className="absolute inset-0 z-0"
        />

          {loading && (
             <MapLoading />
           )}

        {/* TOP BAR */}

        <div className="absolute top-6 left-6 z-[999] bg-white/95 backdrop-blur-xl shadow-xl rounded-3xl px-6 py-4 flex items-center gap-6 border border-white/20">

          <div className="flex items-center gap-3">

            <MapPin
              className="text-blue-500"
              size={20}
            />

            <span className="font-semibold text-sm">

              AI Tourism Discovery

            </span>

          </div>

          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

        
        </div>

        {/* SEARCH */}

        <MapSearch

          value={
            searchQuery
          }

          onChange={
            setSearchQuery
          }
        />

        {/* FILTERS */}

        <MapFilters

          selectedType={
            selectedType
          }

          onChange={
            setSelectedType
          }
        />

      </div>

      {/* SAVED PLACES */}

      <SavedPlacesPanel

        savedPlaces={
          savedPlaces
        }

        onRemove={
          toggleSavePlace
        }
      />

       {loading && (

   <MapLoading />
       
       )}

      {error && (

    <MapError

      message={error}

     onRetry={() =>
        window.location.reload()
       }
     />
   )} 

     {!loading &&
           !error &&
       places.length === 0 && (
        <MapEmpty />
      )}


      {/* PLACE DRAWER */}

      <PlaceDrawer

        place={
          selectedPlace
        }

        open={
          selectedPlace !== null
        }

        onClose={() =>
          setSelectedPlace(
            null
          )
        }

        onToggleSave={
          toggleSavePlace
        }

        isSaved={
          selectedPlace
            ? savedPlaces.some(
                (p) =>
                  p.id === selectedPlace.id
              )
            : false
        }
      />

    </section>
  );
}