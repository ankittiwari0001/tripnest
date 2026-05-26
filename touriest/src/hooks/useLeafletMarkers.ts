"use client";

import {
  useEffect,
  RefObject,
} from "react";

import type {
  Map as LeafletMap,
  Marker,
} from "leaflet";

import type * as Leaflet from "leaflet";

import type {
  ExtendedPlace,
} from "@/types/place";

import {
  createMarkerIcon,
} from "@/utils/markerIcons";

interface Props {

  mapRef:
    RefObject<LeafletMap | null>;

  markersRef:
    RefObject<Marker[]>;

  places:
    ExtendedPlace[];

  onSelectPlace: (
    place: ExtendedPlace
  ) => void;
}

export default function useLeafletMarkers({

  mapRef,

  markersRef,

  places,

  onSelectPlace,
}: Props) {

  useEffect(() => {

    async function renderMarkers() {

      const map =
        mapRef.current;

      if (!map) {
        return;
      }

      try {

        /* IMPORT LEAFLET */

        const leaflet =
          await import(
            "leaflet"
          );

        const L =
          leaflet.default;

        /* REMOVE OLD */

        markersRef.current.forEach(
          (marker) => {

            try {

              map.removeLayer(
                marker
              );

            } catch (error) {

              console.error(
                "Marker remove error:",
                error
              );
            }
          }
        );

        markersRef.current = [];

        /* NO PLACES */

        if (
          places.length === 0
        ) {

          return;
        }

        /* BOUNDS */

        const bounds:
          Leaflet.LatLngExpression[] = [];

        /* ADD MARKERS */

        for (const place of places) {

          try {

            if (

              typeof place.lat !==
                "number" ||

              typeof place.lon !==
                "number"
            ) {

              continue;
            }

            const type =

              place.tags
                .tourism ||

              place.tags
                .amenity ||

              "";

            const spec =
              createMarkerIcon(type);

            const marker =
              L.marker(
                [
                  place.lat,
                  place.lon,
                ],
                {
                  icon:
                    L.divIcon(spec),
                }
              )

                .addTo(map)

                .on(
                  "click",
                  () => {

                    onSelectPlace(
                      place
                    );
                  }
                );

            markersRef.current.push(
              marker
            );

            bounds.push([
              place.lat,
              place.lon,
            ]);

          } catch (error) {

            console.error(
              "Marker render error:",
              error
            );
          }
        }

        /* FIT BOUNDS */

        if (
          bounds.length > 0
        ) {

          map.fitBounds(
            L.latLngBounds(
              bounds
            ),
            {
              padding: [
                80,
                80,
              ],
            }
          );
        }

      } catch (error) {

        console.error(
          "Leaflet markers error:",
          error
        );
      }
    }

    renderMarkers();

  }, [
    places,
    mapRef,
    markersRef,
    onSelectPlace,
  ]);
}