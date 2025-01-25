import express from "express";
import {
  GetAll,
  Create,
  Delete,
  Update,
  GetSingle,
} from "../Controllers/auth.controller.js";

const router = express.Router();

router.get("/GetAll", GetAll);
router.post("/Create", Create);
router.delete("/Delete", Delete);
router.put("/Update", Update);
router.get("/GetSingle/:id", GetSingle);
