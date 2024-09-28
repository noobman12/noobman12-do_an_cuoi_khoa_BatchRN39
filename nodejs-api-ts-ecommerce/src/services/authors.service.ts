import createError from "http-errors";
// Kết nối trực tiếp với Database
import Author from "../models/author.model";
import { ObjectId } from "mongoose";

type TAuthor = {
  _id: ObjectId;
  image: String;
  first_name: String;
  last_name: String;
  birthDate: Date;
  nationality: String;
  bio: String;
};

// Lấy tất cả record
const findAll = async () => {
  /**
   * SELECT * FROM brands
   */
  const authors = await Author.find();
  //console.log('<<=== 🚀 brands ===>>',brands);
  return authors;
};

// Tìm 1 record theo ID
const findById = async (id: string) => {
  //Đi tìm 1 cái khớp id
  /**
   * SELECT * FROM brands WHERE id = ''
   */
  const author = await Author.findById(id);

  /* Bắt lỗi khi ko tìm thấy thông tin */
  if (!author) {
    throw createError(400, "Author Not Found");
  }

  return author;
};

const createRecord = async (payload: TAuthor) => {
  console.log("<<=== 🚀 payload ===>>", payload);

  const author = await Author.create(payload);

  console.log("<<=== 🚀 create author ===>>", author);

  //Trả lại record vừa thêm mới
  return author;
};

const updateById = async (id: string, payload: TAuthor) => {
  //b1.Kiểm tra sự tồn tại của danh mục có id này
  const author = await Author.findByIdAndUpdate(id, payload, {
    new: true, // nó trả về record sau khi update
  });
  console.log("<<=== 🚀 author ===>>", author);

  /* Bắt lỗi khi ko tìm thấy thông tin */
  if (!author) {
    throw createError(400, "author Not Found");
  }

  //Return về record vừa đc update
  return author;
};

const deleteById = async (id: string) => {
  //b1 Kiểm tra xem tồn tại author có id
  const author = await Author.findByIdAndDelete(id);

  if (!author) {
    throw createError(400, "Author Not Found");
  }

  //Return về record vừa xóa
  return author;
};

export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
};
