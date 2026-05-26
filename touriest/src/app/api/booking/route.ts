import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/db";

import Booking from "@/models/Booking";

import Hotel from "@/models/Hotel";

import { verifyToken } from "@/lib/auth";

export async function POST(
  req: NextRequest
) {

  try {

    await connectDB();

    const token =
      req.headers
        .get("authorization")
        ?.replace(
          "Bearer ",
          ""
        );

    if (!token) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Unauthorized",
        },

        {
          status: 401,
        }
      );
    }

    const decoded =
      verifyToken(token);

    if (!decoded) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid token",
        },

        {
          status: 401,
        }
      );
    }

    const body =
      await req.json();

    const {
      hotelId,
      checkIn,
      checkOut,
      guests,
    } = body;

    /* FIND HOTEL */

    const hotel =
      await Hotel.findById(
        hotelId
      );

    if (!hotel) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Hotel not found",
        },

        {
          status: 404,
        }
      );
    }

    /* TOTAL PRICE */

    const totalPrice =
      hotel.price * guests;

    /* CREATE BOOKING */

    const booking =
      await Booking.create({
        userId:
          decoded.userId,

        hotelId,

        checkIn,

        checkOut,

        guests,

        totalPrice,
      });

    return NextResponse.json(
      {
        success: true,

        message:
          "Booking successful 🚀",

        booking,
      },

      {
        status: 201,
      }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,

        message:
          "Booking failed",
      },

      {
        status: 500,
      }
    );

  }
}

/* GET USER BOOKINGS */

export async function GET(
  req: NextRequest
) {

  try {

    await connectDB();

    const token =
      req.headers
        .get("authorization")
        ?.replace(
          "Bearer ",
          ""
        );

    if (!token) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Unauthorized",
        },

        {
          status: 401,
        }
      );
    }

    const decoded =
      verifyToken(token);

    if (!decoded) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid token",
        },

        {
          status: 401,
        }
      );
    }

    const bookings =
      await Booking.find({
        userId:
          decoded.userId,
      })
        .populate("hotelId")
        .sort({
          createdAt: -1,
        });

    return NextResponse.json({

      success: true,

      bookings,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch bookings",
      },

      {
        status: 500,
      }
    );

  }
}