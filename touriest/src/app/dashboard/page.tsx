"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import {
  Heart,
  MapPinned,
  Route,
  ArrowRight,
} from "lucide-react";
import SavedPlacesGrid from "@/components/dashboard/SavedPlacesGrid";

import Link from "next/link";

import { useAuthStore } from "@/store/authStore";
import useSavedPlaces
from "@/hooks/useSavedPlaces";

export default function DashboardPage() {
  const router = useRouter();

  const {
  savedPlaces,
  hydrated,
} = useSavedPlaces();

  const {
    user,
    token,
  } = useAuthStore();

  useEffect(() => {
    if (!token) {
      router.replace(
        "/auth/login"
      );
    }
  }, [token, router]);

 if (!user || !hydrated) {
  return null;
}

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-50
        via-white
        to-blue-50
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
        "
      >
        {/* HERO */}

        <div
          className="
            rounded-[40px]
            overflow-hidden
            bg-gradient-to-r
            from-slate-950
            via-slate-900
            to-blue-950
            text-white
            p-10
            md:p-14
            mb-10
            relative
          "
        >
          <div
            className="
              absolute
              top-0
              right-0
              w-[300px]
              h-[300px]
              bg-blue-500/20
              blur-[120px]
            "
          />

          <div className="relative z-10">
            <p
              className="
                text-blue-400
                font-medium
              "
            >
              Welcome Back 👋
            </p>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-black
                mt-3
              "
            >
              {user.name}
            </h1>

            <p
              className="
                mt-4
                text-slate-300
                text-lg
              "
            >
              Manage your saved places,
              explore destinations and
              continue your journey with
              TripNest.
            </p>

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                bg-white/10
                border
                border-white/10
                rounded-full
                px-4
                py-2
              "
            >
              Role:
              {" "}
              {user.role}
            </div>
          </div>
        </div>

        {/* STATS */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mb-10
          "
        >
          {/* SAVED */}

          <div
            className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              border
              border-slate-200
            "
          >
            <Heart
              className="
                text-red-500
                mb-4
              "
              size={32}
            />

           <h3
  className="
    text-4xl
    font-black
  "
>
  {hydrated
    ? savedPlaces.length
    : "-"}
</h3>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Saved Places
            </p>
          </div>

          {/* CITIES */}

          <div
            className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              border
              border-slate-200
            "
          >
            <MapPinned
              className="
                text-blue-600
                mb-4
              "
              size={32}
            />

            <h3
              className="
                text-4xl
                font-black
              "
            >
              {hydrated
                ? savedPlaces.length
                : "-"}
            </h3>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Cities Explored
            </p>
          </div>

          {/* TRIPS */}

          <div
            className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              border
              border-slate-200
            "
          >
            <Route
              className="
                text-green-600
                mb-4
              "
              size={32}
            />

            <h3
              className="
                text-4xl
                font-black
              "
            >
              {hydrated
                ? savedPlaces.length
                : "-"}
            </h3>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Trips Planned
            </p>
          </div>
        </div>

        {/* QUICK ACTIONS */}

        <div
          className="
            bg-white
            rounded-[40px]
            p-10
            shadow-lg
            border
            border-slate-200
            mb-10
          "
        >
          <h2
            className="
              text-3xl
              font-black
              mb-8
            "
          >
            Quick Actions
          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              gap-6
            "
          >
            <Link
              href="/map"
              className="
                group
                bg-slate-950
                text-white
                rounded-[32px]
                p-8
                hover:scale-[1.02]
                transition-all
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Explore Map
              </h3>

              <p
                className="
                  text-slate-300
                  mt-3
                "
              >
                Discover nearby places,
                restaurants and hotels.
              </p>

              <ArrowRight
                className="
                  mt-6
                  group-hover:translate-x-2
                  transition-all
                "
              />
            </Link>

            <div
              className="
                bg-blue-50
                rounded-[32px]
                p-8
                border
                border-blue-100
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                AI Recommendations
              </h3>

              <p
                className="
                  text-slate-600
                  mt-3
                "
              >
                Coming soon. Personalized
                recommendations based on
                your saved places.
              </p>
            </div>
          </div>
        </div>



      <SavedPlacesGrid
        places={savedPlaces}
       />
        {/* USER INFO */}

        <div
          className="
            bg-white
            rounded-[40px]
            p-10
            shadow-lg
            border
            border-slate-200
          "
        >
          <h2
            className="
              text-3xl
              font-black
              mb-6
            "
          >
            Account Information
          </h2>

          <div className="space-y-4">
            <div>
              <span
                className="
                  text-slate-500
                "
              >
                Name
              </span>

              <p
                className="
                  text-xl
                  font-semibold
                "
              >
                {user.name}
              </p>
            </div>

            <div>
              <span
                className="
                  text-slate-500
                "
              >
                Email
              </span>

              <p
                className="
                  text-xl
                  font-semibold
                "
              >
                {user.email}
              </p>
            </div>

            <div>
              <span
                className="
                  text-slate-500
                "
              >
                Role
              </span>

              <p
                className="
                  text-xl
                  font-semibold
                "
              >
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}