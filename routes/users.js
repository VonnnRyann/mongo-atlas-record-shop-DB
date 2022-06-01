import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

export default router;
