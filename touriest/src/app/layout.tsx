import "./globals.css";

import "leaflet/dist/leaflet.css";
import Navbar from "@/components/layout/Navbar";
import {
  Toaster,
} from "sonner";


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

        {/* TOAST (sonner) */}
   <Toaster
       position="top-right"
       richColors
       expand
       closeButton
      toastOptions={{
      style: {
        zIndex: 999999,
        marginTop: "90px",
      },
    }}
  />

      </body>

    </html>
  );
}