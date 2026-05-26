"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export default function RegisterPage() {

  const router =
    useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleRegister(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await fetch(
        "/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
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

      toast.success(
        "Account created 🚀"
      );

      router.push("/login");

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

          Create Account 🚀

        </h1>

        <form
          onSubmit={
            handleRegister
          }
          className="space-y-6"
        >

          <input
            type="text"

            required

            placeholder="Name"

            value={name}

            onChange={(e) =>
              setName(
                e.target.value
              )
            }

            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <input
            type="email"

            required

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <input
            type="password"

            required

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }

            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <button
            type="submit"

            disabled={loading}

            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
          >

            {loading
              ? "Creating..."
              : "Register"}

          </button>

        </form>

      </div>

    </main>
  );
}