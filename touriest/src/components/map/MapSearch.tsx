"use client";

import {
  Search,
} from "lucide-react";

interface Props {

  value: string;

  onChange: (
    value: string
  ) => void;
}

export default function MapSearch({

  value,

  onChange,
}: Props) {

  return (

    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[999] w-full max-w-2xl px-6">

      <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/20 px-6 py-5 flex items-center gap-4">

        {/* ICON */}

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">

          <Search size={20} />

        </div>

        {/* INPUT */}

        <input

          type="text"

          placeholder="Search hotels, cafes, attractions..."

          value={value}

          onChange={(event) =>
            onChange(
              event.target.value
            )
          }

          className="
            w-full
            bg-transparent
            outline-none
            text-lg
            placeholder:text-gray-400
            font-medium
          "
        />

      </div>

    </div>
  );
}