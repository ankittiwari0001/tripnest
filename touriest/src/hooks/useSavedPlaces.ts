"use client";

import {
  useEffect,
  useState,
} from "react";

import type {
  ExtendedPlace,
} from "@/types/place";

import {
  toast,
} from "sonner";

export default function useSavedPlaces() {

  /* INITIAL STATE */

  const [
    savedPlaces,
    setSavedPlaces,
  ] = useState<ExtendedPlace[]>(() => {

    /* SSR SAFE */

    if (
      typeof window ===
      "undefined"
    ) {

      return [];
    }

    try {

      const saved =
        window.localStorage.getItem(
          "savedPlaces"
        );

      return saved

        ? JSON.parse(saved)

        : [];

    } catch (error) {

      console.error(
        "Load saved places error:",
        error
      );

      return [];
    }
  });

  /* SAVE TO STORAGE */

  useEffect(() => {

    try {

      window.localStorage.setItem(

        "savedPlaces",

        JSON.stringify(
          savedPlaces
        )
      );

    } catch (error) {

      console.error(
        "Save localStorage error:",
        error
      );
    }

  }, [savedPlaces]);

  /* TOGGLE SAVE */

  function toggleSavePlace(
    place: ExtendedPlace
  ) {

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
  }

  /* CHECK SAVED */

  function isSaved(
    id: number
  ) {

    return savedPlaces.some(
      (place) =>
        place.id === id
    );
  }

  return {

    savedPlaces,

    toggleSavePlace,

    isSaved,
  };
}