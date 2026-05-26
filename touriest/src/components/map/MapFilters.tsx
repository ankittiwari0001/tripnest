"use client";

import {
  MapPin,
  Hotel,
  UtensilsCrossed,
  Trees,
} from "lucide-react";

interface Props {

  selectedType:
    string;

  onChange: (
    type: string
  ) => void;
}

export default function MapFilters({

  selectedType,

  onChange,
}: Props) {

  return (

    <div className="absolute left-6 bottom-6 z-[999] bg-white/95 backdrop-blur-xl rounded-[36px] shadow-2xl p-6 w-[310px] border border-white/20">

      <div className="space-y-5">

        {/* EXPLORE */}

        <button

          onClick={() =>
            onChange("all")
          }

          className={`
            w-full rounded-3xl px-6 py-5
            flex items-center gap-5
            transition-all duration-300

            ${
              selectedType ===
              "all"

                ? "bg-black text-white shadow-2xl scale-[1.02]"

                : "bg-gray-100 hover:bg-gray-200"
            }
          `}
        >

          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">

            <MapPin size={26} />

          </div>

          <div className="text-left">

            <p className="font-black text-xl">

              Explore All

            </p>

          </div>

        </button>

        {/* HOTELS */}

        <button

          onClick={() =>
            onChange(
              "hotel"
            )
          }

          className={`
            w-full rounded-3xl px-5 py-4
            flex items-center gap-5
            transition-all duration-300

            ${
              selectedType ===
              "hotel"

                ? "bg-pink-500 text-white shadow-xl scale-[1.02]"

                : "hover:bg-gray-100"
            }
          `}
        >

          <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">

            <Hotel
              size={24}
              className="text-pink-500"
            />

          </div>

          <p className="font-bold text-xl">

            Hotels

          </p>

        </button>

        {/* RESTAURANTS */}

        <button

          onClick={() =>
            onChange(
              "restaurant"
            )
          }

          className={`
            w-full rounded-3xl px-5 py-4
            flex items-center gap-5
            transition-all duration-300

            ${
              selectedType ===
              "restaurant"

                ? "bg-yellow-500 text-white shadow-xl scale-[1.02]"

                : "hover:bg-gray-100"
            }
          `}
        >

          <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">

            <UtensilsCrossed
              size={24}
              className="text-yellow-600"
            />

          </div>

          <p className="font-bold text-xl">

            Restaurants

          </p>

        </button>

        {/* ATTRACTIONS */}

        <button

          onClick={() =>
            onChange(
              "attraction"
            )
          }

          className={`
            w-full rounded-3xl px-5 py-4
            flex items-center gap-5
            transition-all duration-300

            ${
              selectedType ===
              "attraction"

                ? "bg-green-500 text-white shadow-xl scale-[1.02]"

                : "hover:bg-gray-100"
            }
          `}
        >

          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

            <Trees
              size={24}
              className="text-green-600"
            />

          </div>

          <p className="font-bold text-xl">

            Attractions

          </p>

        </button>

      </div>

    </div>
  );
}