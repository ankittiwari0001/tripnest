"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";

import { toast } from "sonner";

import type {
  ExtendedPlace,
} from "@/types/place";

export default function useSavedPlaces() {

  /* HYDRATION STATE */

  const [
    hydrated,
    setHydrated,
  ] = useState(false);

  /* SAVED PLACES */

  const [
    savedPlaces,
    setSavedPlaces,
  ] = useState<
    ExtendedPlace[]
  >([]);

  /* LOAD FROM STORAGE */

  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(
          "savedPlaces"
        );

        if (saved) {
          setSavedPlaces(JSON.parse(saved));
        }
      } catch (error) {
        console.error(
          "[Saved Places Load Error]",
          error
        );
        toast.error(
          "Failed to load saved places"
        );
      } finally {
        setHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(t);
  }, []);

  /* SAVE TO STORAGE */

  useEffect(() => {

    if (!hydrated) {
      return;
    }

    try {

      window.localStorage.setItem(

        "savedPlaces",

        JSON.stringify(
          savedPlaces
        )
      );

    } catch (error) {

      console.error(
        "[Saved Places Save Error]",
        error
      );

      toast.error(
        "Failed to save places"
      );
    }

  }, [
    savedPlaces,
    hydrated,
  ]);

  /* CHECK SAVED */

  const isSaved =
    useCallback(

      (id: number) => {

        return savedPlaces.some(
          (place) =>
            place.id === id
        );
      },

      [savedPlaces]
    );

  /* TOGGLE SAVE */

  const toggleSavePlace =
    useCallback(

      (
        place: ExtendedPlace
      ) => {

        setSavedPlaces(
          (prev) => {

            const exists =
              prev.some(
                (p) =>
                  p.id === place.id
              );

            /* REMOVE */

            if (exists) {

              toast.success(
                "Removed from saved places"
              );

              return prev.filter(
                (p) =>
                  p.id !== place.id
              );
            }

            /* ADD */

            toast.success(
              "Place saved successfully ❤️"
            );

            return [
              ...prev,
              place,
            ];
          }
        );
      },

      []
    );

  return {

    hydrated,

    savedPlaces,

    toggleSavePlace,

    isSaved,
  };
}