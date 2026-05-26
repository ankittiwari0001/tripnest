import mongoose,
{
  Schema,
} from "mongoose";

const HotelSchema =
  new Schema(

    {
      name: String,

      image: String,

      location: String,

      price: Number,

      rating: Number,

      category: String,

      coordinates: {

        type: {
          type: String,

          enum: ["Point"],

          default: "Point",
        },

        coordinates: {
          type: [Number],
        },
      },
    },

    {
      timestamps: true,
    }
  );

/* GEO INDEX */

HotelSchema.index({
  coordinates: "2dsphere",
});

export default
  mongoose.models.Hotel ||

  mongoose.model(
    "Hotel",
    HotelSchema
  );