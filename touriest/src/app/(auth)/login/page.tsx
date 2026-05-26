"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {

  const router =
    useRouter();

  const { login } =
    useAuthStore();

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await fetch(
        "/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {

        toast.error(
          data.message
        );

        return;
      }

      login(
        data.user,
        data.token
      );

      toast.success(
        "Login successful 🚀"
      );

      router.push("/");

    } catch (error) {

      toast.error(
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-[32px] shadow-xl p-10">

        <h1 className="text-4xl font-black text-center mb-8">

          Welcome Back 👋

        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"

              required

              value={email}

              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }

              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"

              placeholder="Enter email"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"

              required

              value={password}

              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }

              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"

              placeholder="Enter password"
            />

          </div>

          <button
            type="submit"

            disabled={loading}

            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition duration-300"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>

      </div>

    </main>
  );
}