import express from "express";
import {
  GetAll,
  Create,
  Delete,
  Update,
  GetSingle,
} from "../Controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/GetAll", protectedRoute, GetAll);
router.post("/Create", protectedRoute, Create);
router.delete("/Delete", protectedRoute, Delete);
router.put("/Update", protectedRoute, Update);
router.get("/GetSingle/:id", protectedRoute, GetSingle);
