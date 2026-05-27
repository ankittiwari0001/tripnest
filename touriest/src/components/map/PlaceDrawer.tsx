"use client";

import {
  X,
  Star,
  Heart,
  MapPin,
} from "lucide-react";

import type {
  ExtendedPlace,
} from "@/types/place";

interface Props {

  place:
    | ExtendedPlace
    | null;

  onClose: () => void;

  onSave: (
    place: ExtendedPlace
  ) => void;

  savedPlaces?:
    ExtendedPlace[];
}

export default function PlaceDrawer({

  place,

  onClose,

  onSave,

  savedPlaces = [],
}: Props) {

  /* DERIVED SAVE STATE */

  const isSaved =
    place
      ? savedPlaces.some(
          (p) =>
            p.id === place.id
        )
      : false;

  if (!place) {
    return null;
  }

  return (

    <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex justify-end">

      <div className="fixed right-0 top-0 h-full w-full sm:w-[500px] bg-white z-[9999] shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-500">

        {/* IMAGE */}

        <div className="relative h-[280px]">

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img

            src={place.image}

            alt={place.tags.name}

            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {/* CLOSE BUTTON */}

          <button

            onClick={onClose}

            className="absolute top-5 right-5 bg-white/90 backdrop-blur-md rounded-full p-2 hover:scale-110 transition duration-300"
          >

            <X size={20} />

          </button>

          {/* TITLE */}

          <div className="absolute bottom-6 left-6 text-white">

            <h2 className="text-4xl font-black">

              {place.tags.name}

            </h2>

            <p className="mt-2 text-white/80 capitalize">

              {
                place.tags.tourism ||

                place.tags.amenity
              }

            </p>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-6 space-y-6">

          {/* BADGES */}

          <div className="flex items-center gap-3 flex-wrap">

            <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">

              <Star size={14} />

              {place.rating || "4.5"}

            </div>

            <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">

              {place.budget || "₹₹"}

            </div>

            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

              ✨ AI Recommended

            </div>

          </div>

          {/* VIBE */}

          <div className="bg-gray-100 rounded-3xl p-5">

            <p className="text-sm font-semibold text-gray-500 mb-2">

              Travel Vibe

            </p>

            <p className="font-medium text-lg">

              {
                place.vibe ||

                "Luxury • Culture • Experience"
              }

            </p>

          </div>

          {/* SUMMARY */}

          <div>

            <h3 className="font-black text-xl mb-3">

              AI Travel Summary

            </h3>

            <p className="text-gray-600 leading-relaxed">

              {
                place.summary ||

                "A highly recommended destination loved by tourists for its atmosphere, location, and memorable experiences."
              }

            </p>

          </div>

          {/* RECOMMENDATIONS */}

          <div className="space-y-4">

            <h3 className="text-xl font-black">

              You May Also Like

            </h3>

            <div className="space-y-3">

              <div className="bg-gray-100 rounded-2xl p-4 hover:bg-gray-200 transition cursor-pointer">

                <p className="font-semibold">

                  🌅 Sunset Point

                </p>

                <p className="text-sm text-gray-500 mt-1">

                  Perfect evening destination nearby.

                </p>

              </div>

              <div className="bg-gray-100 rounded-2xl p-4 hover:bg-gray-200 transition cursor-pointer">

                <p className="font-semibold">

                  🍽 Goa Beach Cafe

                </p>

                <p className="text-sm text-gray-500 mt-1">

                  Popular seafood cafe with sunset vibes.

                </p>

              </div>

              <div className="bg-gray-100 rounded-2xl p-4 hover:bg-gray-200 transition cursor-pointer">

                <p className="font-semibold">

                  🎭 Old Goa Church

                </p>

                <p className="text-sm text-gray-500 mt-1">

                  Historic cultural attraction nearby.

                </p>

              </div>

            </div>

          </div>

          {/* ACTIONS */}

          <div className="grid grid-cols-2 gap-4 pt-2">

            {/* SAVE BUTTON */}

            <button

              onClick={() => {
                onSave(place);
              }}

              className={`
                rounded-2xl py-4 font-semibold
                flex items-center justify-center gap-2
                transition-all duration-300

                ${
                  isSaved

                    ? "bg-red-500 text-white scale-105 shadow-lg"

                    : "bg-black text-white hover:scale-[1.03]"
                }
              `}
            >

              {

                isSaved ? (

                  <>

                    <Heart
                      size={18}
                      fill="white"
                    />

                    Saved

                  </>

                ) : (

                  <>

                    <Heart size={18} />

                    Save

                  </>

                )
              }

            </button>

            {/* DIRECTIONS */}

            <button className="bg-blue-500 text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-300">

              <MapPin size={18} />

              Directions

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}