import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(500).json({ message: "Unauthorized- No Token", error: true });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(500).json({ message: "Unauthorized Token", error: true });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.status(500).json({ message: "No Such user exists", error: true });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(201).json({ message: "Internal Server issue", error: true });
  }
};

export { protectedRoute };
