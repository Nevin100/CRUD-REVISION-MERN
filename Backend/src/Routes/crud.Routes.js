import express from "express";
import { getAll, Create, logOut } from "../Controllers/auth.controller.js";

const router = express.Router();

//Signup Router :
router.post("/signup", signUp);

//Login Router :
router.post("/login", login);

//Logout Router:
router.post("/logout", logOut);

export default router;
