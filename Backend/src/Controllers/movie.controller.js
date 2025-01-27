import Movie from "../models/Movie.model.js";

//Posting of Movie :
export const Create = async (req, res) => {
  const { MovieName, director, description, releaseDate } = req.body;
  const { _id: userId } = req.user;
  try {
    if (!MovieName || !director || !description || !releaseDate) {
      return res
        .status(400)
        .json({ message: "No field can be empty", error: true });
    }

    const movie = new Movie({
      MovieName,
      director,
      description,
      releaseDate,
      userId,
    });

    await movie.save();

    res
      .status(200)
      .json({ message: "Movie has been created", error: false, data: movie });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};

//Updating Movie :
export const Update = async (req, res) => {
  const { id } = req.params;
  const { MovieName, director, description, releaseDate } = req.body;
  const { _id: userId } = req.user;
  try {
    if (!MovieName && !director && !description && !releaseDate) {
      return res
        .status(400)
        .json({ message: "No Changes required", error: true });
    }

    const movie = await Movie.findOne({ _id: id, userId });
    if (!movie) {
      return res
        .status(400)
        .json({ message: "No such Movie found", error: true });
    }

    if (MovieName) {
      movie.MovieName = MovieName;
    }

    if (director) {
      movie.director = director;
    }

    if (description) {
      movie.description = description;
    }

    if (releaseDate) {
      movie.releaseDate = releaseDate;
    }

    await movie.save();
    res.status(200).json({
      message: "Movie Updated Succesfully",
      data: movie,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};

//Delete :
export const Delete = async (req, res) => {
  const { _id: userId } = req.user;
  const { id } = req.params;
  try {
    const movie = await Movie.findOne({ userId, _id: id });

    if (!movie) {
      return res
        .status(500)
        .json({ message: "No such Movie exists", error: true });
    }

    await movie.deleteOne({ userId, _id: id });

    res
      .status(200)
      .json({ message: "Movie deleted Successfully", error: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};

// GetAll :
export const GetAll = async (req, res) => {
  const { _id: userId } = req.user;
  try {
    const movie = await Movie.find({ userId });

    res.status(200).json({
      message: "All The Movies are retrieved",
      error: false,
      data: movie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server issue", error: true });
  }
};

//GetSingle :
export const GetSingle = async (req, res) => {
  const { _id: userId } = req.user;
  const { id } = req.params;
  try {
    const movie = await Movie.find({ userId, _id: id });
    if (!movie) {
      return res
        .status(400)
        .json({ message: "No such movie exist", error: true });
    }
    res.status(200).json({
      message: "The Movie Retrieved",
      error: true,
      data: movie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server issue", error: true });
  }
};
