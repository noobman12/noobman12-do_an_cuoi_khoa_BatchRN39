import createError from "http-errors";
// Kết nối trực tiếp với Database
import Supplier from "../models/supplier";
import { ObjectId } from "mongoose";
import { ISupplier } from "../types/models";

type TSupplier = ISupplier;

// Lấy tất cả record
const findAll = async () => {
  /**
   * SELECT * FROM brands
   */
  const suppliers = await Supplier.find();
  //console.log('<<=== 🚀 brands ===>>',brands);
  return suppliers;
};

// Tìm 1 record theo ID
const findById = async (id: string) => {
  //Đi tìm 1 cái khớp id
  /**
   * SELECT * FROM brands WHERE id = ''
   */
  const supplier = await Supplier.findById(id);

  /* Bắt lỗi khi ko tìm thấy thông tin */
  if (!supplier) {
    throw createError(400, "Supplier Not Found");
  }

  return supplier;
};

const createRecord = async (payload: TSupplier) => {
  console.log("<<=== 🚀 payload ===>>", payload);

  const supplier = await Supplier.create(payload);

  console.log("<<=== 🚀 create supplier ===>>", supplier);

  //Trả lại record vừa thêm mới
  return supplier;
};

const updateById = async (id: string, payload: TSupplier) => {
  //b1.Kiểm tra sự tồn tại của danh mục có id này
  const supplier = await Supplier.findByIdAndUpdate(id, payload, {
    new: true, // nó trả về record sau khi update
  });
  console.log("<<=== 🚀 supplier ===>>", supplier);

  /* Bắt lỗi khi ko tìm thấy thông tin */
  if (!supplier) {
    throw createError(400, "supplier Not Found");
  }

  //Return về record vừa đc update
  return supplier;
};

const deleteById = async (id: string) => {
  //b1 Kiểm tra xem tồn tại supplier có id
  const supplier = await Supplier.findByIdAndDelete(id);

  if (!supplier) {
    throw createError(400, "Supplier Not Found");
  }

  //Return về record vừa xóa
  return supplier;
};

export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
};
