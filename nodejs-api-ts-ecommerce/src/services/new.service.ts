import News from "../models/news.model";
import { INews } from "../types/modeltypes";
import createError from "http-errors";
const createRecord = async (payload: INews) => {
  const news = new News(payload);
  return await news.save();
};

const findAll = async () => {
  return await News.find({});
};

const findById = async (id: string) => {
  const news = await News.findById(id, "-__v -id");
  // Check tồn tại
  if (!news) throw createError(400, "New not found");
  return news;
};

const updateById = async (id: string, payload: any) => {
  const news = await findById(id);
  Object.assign(news, payload);
  await news.save();
};

const deleteById = async (id: string) => {
  const news = await findById(id);
  await News.deleteOne({ _id: news._id });
  return news;
};

export default {
  createRecord,
  findAll,
  findById,
  updateById,
  deleteById,
};
