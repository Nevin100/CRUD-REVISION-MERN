import Movie from "../models/Movie.model.js";

//Posting of Movie :
export const Create = async (req, res) => {
  const { MovieName, director, description, releaseDate } = req.body;
  const { user } = req.user;
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
      userId: user._id,
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
  const { id } = req.params.id;
  const { MovieName, director, description, releaseDate } = req.body;
  const { user } = req.user;
  try {
    if (!MovieName || !director || !description || !releaseDate) {
      return res
        .status(400)
        .json({ message: "No Changes required", error: true });
    }

    const movie = await Movie.findOne({ _id: id, userId: user._id });
    if (!movie) {
      return res
        .status(400)
        .json({ message: "No such Movie found", error: true });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};
