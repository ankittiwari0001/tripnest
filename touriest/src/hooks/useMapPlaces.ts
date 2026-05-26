"use client";

import {
  useEffect,
  useState,
} from "react";

import type {
  ExtendedPlace,
} from "@/types/place";

/* TYPES */

interface Props {
  lat: number;
  lng: number;
  type: string;
  searchQuery: string;
}

interface PlacesResponse {
  success?: boolean;
  elements: ExtendedPlace[];
}

export default function useMapPlaces({

  lat,

  lng,

  type,

  searchQuery,
}: Props) {

  /* STATES */

  const [
    places,
    setPlaces,
  ] = useState<
    ExtendedPlace[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  /* FETCH */

  useEffect(() => {

    async function fetchPlaces() {

      try {

        setLoading(true);

        setError("");

        const response =
          await fetch(
            `/api/nearby?lat=${lat}&lng=${lng}&type=${type}`
          );

        if (
          !response.ok
        ) {

          throw new Error(
            "Failed to fetch places"
          );
        }

        const data =
          (await response.json()) as PlacesResponse;

        const elements =
          data.elements || [];

        /* SEARCH FILTER */

        const filtered =
          elements.filter(
            (place) => {

              const text = `
                ${place.tags.name || ""}
                ${place.vibe || ""}
                ${place.summary || ""}
              `.toLowerCase();

              return text.includes(
                searchQuery.toLowerCase()
              );
            }
          );

        setPlaces(
          filtered
        );

      } catch (error) {

        console.error(
          "Places fetch error:",
          error
        );

        setError(
          "Unable to load nearby places"
        );

      } finally {

        setLoading(false);
      }
    }

    fetchPlaces();

  }, [
    lat,
    lng,
    type,
    searchQuery,
  ]);

  return {

    places,

    loading,

    error,
  };
}