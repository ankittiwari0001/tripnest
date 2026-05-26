import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";

import User from "@/models/User";

import { generateToken } from "@/lib/auth";

export async function POST(
  req: NextRequest
) {

  try {

    await connectDB();

    const body = await req.json();

    const {
      email,
      password,
    } = body;

    /* FIND USER */

    const user =
      await User.findOne({
        email,
      });

    if (!user) {

      return NextResponse.json(
        {
          success: false,
          message:
            "User not found",
        },

        {
          status: 404,
        }
      );
    }

    /* CHECK PASSWORD */

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid credentials",
        },

        {
          status: 401,
        }
      );
    }

    /* GENERATE TOKEN */

    const token =
      generateToken(
        user._id.toString(),
        user.role
      );

    return NextResponse.json(
      {
        success: true,
        message:
          "Login successful",

        token,

        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },

      {
        status: 200,
      }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Login failed",
      },

      {
        status: 500,
      }
    );

  }
}