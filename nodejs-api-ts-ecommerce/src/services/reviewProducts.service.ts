import createError from "http-errors";
// Kết nối trực tiếp với Database
import ReviewProduct from "../models/reviewProduct";
import { ObjectId } from "mongoose";
import { IReviewProduct } from "../types/models";

type TReviewProduct = IReviewProduct;

// Lấy tất cả record
const findAll = async () => {
  /**
   * SELECT * FROM brands
   */
  const reviewProduct = await ReviewProduct.find();
  //console.log('<<=== 🚀 brands ===>>',brands);
  return reviewProduct;
};

// Tìm 1 record theo ID
const findById = async (id: string) => {
  //Đi tìm 1 cái khớp id
  /**
   * SELECT * FROM brands WHERE id = ''
   */
  const reviewProduct = await ReviewProduct.findById(id);

  /* Bắt lỗi khi ko tìm thấy thông tin */
  if (!reviewProduct) {
    throw createError(400, "reviewProduct Not Found");
  }

  return reviewProduct;
};

const createRecord = async (payload: TReviewProduct) => {
  console.log("<<=== 🚀 payload ===>>", payload);

  const reviewProduct = await ReviewProduct.create(payload);

  console.log("<<=== 🚀 create product ===>>", reviewProduct);

  //Trả lại record vừa thêm mới
  return reviewProduct;
};

const updateById = async (id: string, payload: TReviewProduct) => {
  //b1.Kiểm tra sự tồn tại của danh mục có id này
  const reviewProduct = await ReviewProduct.findByIdAndUpdate(id, payload, {
    new: true, // nó trả về record sau khi update
  });
  console.log("<<=== 🚀 reviewProduct ===>>", reviewProduct);

  /* Bắt lỗi khi ko tìm thấy thông tin */
  if (!reviewProduct) {
    throw createError(400, "product Not Found");
  }

  //Return về record vừa đc update
  return reviewProduct;
};

const deleteById = async (id: string) => {
  //b1 Kiểm tra xem tồn tại product có id
  const reviewProduct = await ReviewProduct.findByIdAndDelete(id);

  if (!reviewProduct) {
    throw createError(400, "reviewProduct Not Found");
  }

  //Return về record vừa xóa
  return reviewProduct;
};

export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
};
