import createError from "http-errors";
// Kết nối trực tiếp với Database
import Product from "../models/product.model";
import { ObjectId } from "mongoose";
import { IProduct } from "../types/models";

type TProduct = IProduct;

// Lấy tất cả record
const findAll = async () => {
  /**
   * SELECT * FROM brands
   */
  const products = await Product.find();
  //console.log('<<=== 🚀 brands ===>>',brands);
  return products;
};

// Tìm 1 record theo ID
const findById = async (id: string) => {
  //Đi tìm 1 cái khớp id
  /**
   * SELECT * FROM brands WHERE id = ''
   */
  const product = await Product.findById(id);

  /* Bắt lỗi khi ko tìm thấy thông tin */
  if (!product) {
    throw createError(400, "product Not Found");
  }

  return product;
};

const createRecord = async (payload: TProduct) => {
  console.log("<<=== 🚀 payload ===>>", payload);

  const product = await Product.create(payload);

  console.log("<<=== 🚀 create product ===>>", product);

  //Trả lại record vừa thêm mới
  return product;
};

const updateById = async (id: string, payload: TProduct) => {
  //b1.Kiểm tra sự tồn tại của danh mục có id này
  const product = await Product.findByIdAndUpdate(id, payload, {
    new: true, // nó trả về record sau khi update
  });
  console.log("<<=== 🚀 product ===>>", product);

  /* Bắt lỗi khi ko tìm thấy thông tin */
  if (!product) {
    throw createError(400, "product Not Found");
  }

  //Return về record vừa đc update
  return product;
};

const deleteById = async (id: string) => {
  //b1 Kiểm tra xem tồn tại product có id
  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    throw createError(400, "product Not Found");
  }

  //Return về record vừa xóa
  return product;
};

export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
};
