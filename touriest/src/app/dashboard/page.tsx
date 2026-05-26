"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

export default function DashboardPage() {

  const router =
    useRouter();

  const { user } =
    useAuthStore();

  useEffect(() => {

    const token =
      localStorage.getItem(
        "token"
      );

    if (!token) {

      router.push("/login");
    }

  }, [router]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-6">

        Dashboard 🚀

      </h1>

      <div className="bg-white rounded-[32px] p-10 shadow-sm">

        <h2 className="text-3xl font-bold mb-4">

          Welcome,
          {" "}
          {user?.name}

        </h2>

        <p className="text-gray-500 text-lg">

          Role:
          {" "}
          {user?.role}

        </p>

      </div>

    </main>
  );
}