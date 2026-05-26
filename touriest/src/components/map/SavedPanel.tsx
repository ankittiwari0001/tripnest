"use client";

import type {
  ExtendedPlace,
} from "@/types/place";

interface Props {

  savedPlaces:
    ExtendedPlace[];

  onRemove: (
    place: ExtendedPlace
  ) => void;
}

export default function SavedPlacesPanel({

  savedPlaces,

  onRemove,
}: Props) {

  return (

    <div className="absolute right-6 top-24 z-[999] bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl p-5 w-[320px] border border-white/20">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-5">

        <h3 className="font-black text-xl">

          Saved Places

        </h3>

        <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">

          {savedPlaces.length}

        </div>

      </div>

      {/* EMPTY */}

      {savedPlaces.length === 0 && (

        <div className="text-center py-10">

          <p className="text-gray-400 text-sm">

            No saved places yet

          </p>

        </div>
      )}

      {/* LIST */}

      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">

        {savedPlaces.map(
          (place) => (

            <div

              key={place.id}

              className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-3xl p-3 flex items-center gap-4"
            >

              {/* IMAGE */}

              {/* eslint-disable-next-line @next/next/no-img-element */}

              <img

                src={
                  place.image
                }

                alt={
                  place.tags.name
                }

                className="w-16 h-16 rounded-2xl object-cover"
              />

              {/* INFO */}

              <div className="flex-1 min-w-0">

                <p className="font-bold truncate">

                  {place.tags.name}

                </p>

                <p className="text-xs text-gray-500 capitalize mt-1">

                  {

                    place.tags
                      .tourism ||

                    place.tags
                      .amenity
                  }

                </p>

              </div>

              {/* REMOVE */}

              <button

                onClick={() =>
                  onRemove(
                    place
                  )
                }

                className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
              >

                ❤️

              </button>

            </div>
          )
        )}

      </div>

    </div>
  );
}