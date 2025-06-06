import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utilis.js";

//SignUp Function
export const signUp = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Field is required", error: true });
    }
    //Checking whether the user already exist or not ?
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists", error: true });
    }

    // Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
    });

    if (newUser) {
      const token = generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        accessToken: token,
        message: "User Created Successfully",
        error: false,
        success: true,
      });
    } else {
      res.status(400).json({ message: "Invalid Data", error: true });
    }
  } catch (error) {
    res.status(5000).json({ message: "Internal Server issue", error: true });
    console.log(error);
  }
};

//Login Function  :
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Fields cant be empty" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({ message: "Invalid Password", error: true });
    }

    const token = generateToken(user._id, res);
    res.status(200).json({
      message: "Login Successfull",
      fullName: user.fullName,
      accessToken: token,
      email: user.email,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Issue", error: true });
  }
};

//LogOut Function :
export const logOut = (req, res) => {
  try {
    res.cookie("jwt", "");
    res.status(200).json({ message: "Logged Out successfull!", error: false });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};
