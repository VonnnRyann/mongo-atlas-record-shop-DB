import express from "express";
import {
  addOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").get(getOrders).post(addOrder);
router.route("/:id").get(getOrder).delete(deleteOrder).put(updateOrder);

export default router;
