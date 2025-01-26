import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  MovieName: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
