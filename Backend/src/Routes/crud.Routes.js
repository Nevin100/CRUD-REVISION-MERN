import express from "express";
import {
  GetAll,
  Create,
  Delete,
  Update,
  GetSingle,
} from "../Controllers/movie.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/GetAll", protectedRoute, GetAll);
router.post("/Create", protectedRoute, Create);
router.delete("/Delete/:id", protectedRoute, Delete);
router.put("/Update/:id", protectedRoute, Update);
router.get("/GetSingle/:id", protectedRoute, GetSingle);

export default router;
