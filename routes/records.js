import express from "express";
import {
  addRecord,
  deleteRecord,
  getRecord,
  getRecords,
  updateRecord,
} from "../controllers/recordsControllers.js";

const router = express.Router();

router.route("/").get(getRecords).post(addRecord);
router.route("/:id").get(getRecord).delete(deleteRecord).put(updateRecord);

export default router;
