import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";

import User from "@/models/User";

export async function POST(
  req: NextRequest
) {

  try {

    console.log(
      "MONGODB_URI:",
      process.env.MONGODB_URI
    );

    await connectDB();

    const body = await req.json();

    console.log(
      "BODY:",
      body
    );

    const {
      name,
      email,
      password,
    } = body;

    /* VALIDATION */

    if (
      !name ||
      !email ||
      !password
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "All fields are required",
        },

        {
          status: 400,
        }
      );
    }

    /* CHECK USER */

    const existingUser =
      await User.findOne({
        email,
      });

    if (existingUser) {

      return NextResponse.json(
        {
          success: false,
          message:
            "User already exists",
        },

        {
          status: 400,
        }
      );
    }

    /* HASH PASSWORD */

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    /* CREATE USER */

    const user =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
      });

    console.log(
      "USER CREATED"
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "User registered successfully",

        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
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
          "Registration failed",
      },

      {
        status: 500,
      }
    );

  }
}