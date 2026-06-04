"use client";

import type {
  ExtendedPlace,
} from "@/types/place";

// import {
//   DrawerHero,
//   DrawerTags,
//   DrawerSummary,
//   DrawerActions,
//   DrawerFooter,
// } from "./drawer";

import DrawerHero from "./drawer/DrawerHero";
import DrawerTags from "./drawer/DrawerTags";
import DrawerSummary from "./drawer/DrawerSummary";
import DrawerActions from "./drawer/DrawerActions";
import DrawerFooter from "./drawer/DrawerFooter";

interface Props {

  place:
    ExtendedPlace | null;

  open: boolean;

  onClose: () => void;

  onToggleSave: (
    place: ExtendedPlace
  ) => void;

  isSaved: boolean;
}

export default function PlaceDrawer({

  place,

  open,

  onClose,

  onToggleSave,

  isSaved,
}: Props) {

  if (
    !place ||
    !open
  ) {

    return null;
  }

  return (

    <>

      {/* BACKDROP */}

      <div

        onClick={onClose}

        className="
          fixed inset-0
          bg-black/40
          backdrop-blur-sm
          z-[9998]
        "
      />

      {/* DRAWER */}

      <div
        className="
          fixed
          right-0
          top-0
          h-full
          w-full
          sm:w-[520px]
          bg-white
          z-[9999]
          shadow-2xl
          overflow-y-auto
        "
      >

        <DrawerHero

          place={place}

          onClose={onClose}
        />

        <div className="p-6 sm:p-8">

          <DrawerTags
            vibe={place.vibe}
          />

          <DrawerSummary
            summary={
              place.summary
            }
          />

          <DrawerActions

            place={place}

            isSaved={
              isSaved
            }

            onToggleSave={
              onToggleSave
            }
          />

          <DrawerFooter />

        </div>

      </div>

    </>
  );
}