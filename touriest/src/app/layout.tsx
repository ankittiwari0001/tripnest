import "./globals.css";

import { Toaster } from "react-hot-toast";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body className="bg-gray-50">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        {children}

        {/* TOAST */}
        <Toaster
          position="top-right"
        />

      </body>

    </html>
  );
}