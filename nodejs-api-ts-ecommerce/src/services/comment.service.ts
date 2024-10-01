import Comment from "../models/comment";
import { IComment } from "../types/modeltypes";
import createError from "http-errors";
const createRecord = async (payload: IComment) => {
  const comment = new Comment(payload);
  return await comment.save();
};

const findAll = async () => {
  return await Comment.find({});
};

const findById = async (id: string) => {
  const comment = await Comment.findById(id, "-__v -id");
  // Check tồn tại
  if (!comment) throw createError(400, "Comment not found");
  return comment;
};

const updateById = async (id: string, payload: any) => {
  const comment = await findById(id);
  Object.assign(comment, payload);
  await comment.save();
};

const deleteById = async (id: string) => {
  const comment = await findById(id);
  await Comment.deleteOne({ _id: comment._id });
  return comment;
};

export default {
  createRecord,
  findAll,
  findById,
  updateById,
  deleteById,
};
