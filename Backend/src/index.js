import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./Routes/auth.Routes.js";
// import { crudRoutes } from "./Routes/auth.Routes.js";
import { connectDb } from "./lib/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Routes :
app.use("/api/auth", authRoutes);
// app.use("/api", crudRoutes);

app.listen(8000, () => {
  console.log("Server is running on PORT: 8000");
  connectDb();
});
