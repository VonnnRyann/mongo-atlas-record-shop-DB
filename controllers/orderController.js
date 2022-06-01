import { OrderModel } from "../model/oderModel.js";

//get all orders
export const getOrders = async (req, res, next) => {
  try {
    const getOrders = await OrderModel.find();
    res.status(201).json(getOrders);
  } catch (error) {
    next(error);
  }
};

//get single order
export const getOrder = async (req, res, next) => {
  try {
    const getOrder = await OrderModel.findById(req.params.id);
    res.status(200).json(getOrder);
  } catch (error) {
    next(error);
  }
};

//delete order
export const deleteOrder = async (req, res, next) => {
  try {
    const deleteOrder = await OrderModel.findByIdAndDelete(req.params.id);
    res.status(201).json({ msg: "Order deleted!" });
  } catch (error) {
    next(error);
  }
};

//update
export const addOrder = async (req, res, next) => {
  try {
    const addOrder = new OrderModel(req.body);
    await addOrder.save();
    res.status(201).json(addOrder);
  } catch (error) {
    next(error);
  }
};

//update order
export const updateOrder = async (req, res, next) => {
  try {
    const updateOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updateOrder);
  } catch (error) {
    next(error);
  }
};
