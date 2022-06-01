import { RecordModel } from "../model/recordModel.js";

//get all orders
export const getRecords = async (req, res, next) => {
  try {
    const getRecords = await RecordModel.find();
    res.status(201).json(getRecords);
  } catch (error) {
    next(error);
  }
};

//get single order
export const getRecord = async (req, res, next) => {
  try {
    const getRecord = await RecordModel.findById(req.params.id);
    res.status(200).json(getRecord);
  } catch (error) {
    next(error);
  }
};

//delete order
export const deleteRecord = async (req, res, next) => {
  try {
    const deleteRecord = await RecordModel.findByIdAndDelete(req.params.id);
    res.status(201).json({ msg: "Record deleted!" });
  } catch (error) {
    next(error);
  }
};

//update
export const addRecord = async (req, res, next) => {
  try {
    const addRecord = new RecordModel(req.body);
    await addRecord.save();
    res.status(201).json(addRecord);
  } catch (error) {
    next(error);
  }
};

//update order
export const updateRecord = async (req, res, next) => {
  try {
    const updateRecord = await RecordModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updateRecord);
  } catch (error) {
    next(error);
  }
};
