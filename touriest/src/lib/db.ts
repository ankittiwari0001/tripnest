import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI?.trim();

if (!MONGODB_URI) {

  throw new Error(
    "Please add MONGODB_URI"
  );
}

/* GLOBAL TYPE */

interface MongooseCache {
  conn: typeof mongoose | null;

  promise:
    | Promise<typeof mongoose>
    | null;
}

/* EXTEND GLOBAL */

declare global {

  // eslint-disable-next-line no-var
  var mongooseCache:
    | MongooseCache
    | undefined;
}

/* CACHE */

const cached: MongooseCache =
  global.mongooseCache || {
    conn: null,
    promise: null,
  };

global.mongooseCache =
  cached;

export async function connectDB() {

  try {

    /* RETURN EXISTING CONNECTION */

    if (cached.conn) {

      return cached.conn;
    }

    /* CREATE CONNECTION */

    if (!cached.promise) {

      cached.promise =
        mongoose.connect(
            MONGODB_URI!,
            {
              dbName: "tripnest-production",
            }
        );
    }

    /* WAIT FOR CONNECTION */

    cached.conn =
      await cached.promise;

    console.log(
      "✅ MongoDB Connected"
    );

    return cached.conn;

  } catch (error) {

    console.error(
      "❌ MongoDB Error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : String(error);

    throw new Error(
      `Database connection failed: ${message}`
    );
  }
}