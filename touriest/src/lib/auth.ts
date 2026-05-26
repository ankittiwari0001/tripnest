import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET!;

export interface JwtPayload {

  userId: string;

  role: string;
}

export function generateToken(
  userId: string,
  role: string
) {

  return jwt.sign(
    {
      userId,
      role,
    },

    JWT_SECRET,

    {
      expiresIn: "7d",
    }
  );
}

export function verifyToken(
  token: string
): JwtPayload | null {

  try {

    return jwt.verify(
      token,
      JWT_SECRET
    ) as JwtPayload;

  } catch (error) {

    return null;

  }
}