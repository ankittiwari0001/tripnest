import DynamicMap
from "@/components/map/DynamicMap";

export default function MapPage() {

  return (
    <main className="min-h-screen bg-gray-100">

      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-black mb-4">

            Smart Tourism Map 🗺

          </h1>

          <p className="text-emerald-100 text-xl">

            Explore nearby hotels and restaurants.

          </p>

        </div>

      </section>

      <DynamicMap />

    </main>
  );
}