import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  record: {
    type: Number,
    required: true,
  },
});

export const OrderModel = mongoose.model("order", OrderSchema);
