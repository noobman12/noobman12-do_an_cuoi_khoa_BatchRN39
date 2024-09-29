import Writer from "../models/writer.model";
import { IWriter } from "../types/modeltypes";
import createError from "http-errors";
const createRecord = async (payload: IWriter) => {
  const writer = new Writer(payload);
  return await writer.save();
};

const findAll = async () => {
  return await Writer.find({});
};

const findById = async (id: string) => {
  const writer = await Writer.findById(id, "-__v -id");
  // Check tồn tại
  if (!writer) throw createError(400, "Writer not found");
  return writer;
};

const updateById = async (id: string, payload: any) => {
  const writer = await findById(id);
  Object.assign(writer, payload);
  await writer.save();
};

const deleteById = async (id: string) => {
  const writer = await findById(id);
  await Writer.deleteOne({ _id: writer._id });
  return writer;
};

export default {
  createRecord,
  findAll,
  findById,
  updateById,
  deleteById,
};
