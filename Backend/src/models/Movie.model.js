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
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
