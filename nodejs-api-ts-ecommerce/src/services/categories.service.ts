import createError from "http-errors";
// Kết nối trực tiếp với Database
import Category from "../models/category.model"; 
import { ObjectId } from "mongoose";
import {ICategory} from "../types/models"

// Lấy tất cả record
const findAll = async () => {
    /**
     * SELECT * FROM brands
     */
    const category = await Category.find();
    //console.log('<<=== 🚀 brands ===>>',brands);
    return category;
  };
  
  // Tìm 1 record theo ID
  const findById = async (id: string) => {
    //Đi tìm 1 cái khớp id
    /**
     * SELECT * FROM brands WHERE id = ''
     */
    const category = await Category.findById(id);
  
    /* Bắt lỗi khi ko tìm thấy thông tin */
    if (!category) {
      throw createError(400, "Category Not Found");
    }
  
    return category;
  };
  
  const createRecord = async (payload: ICategory) => {
    console.log("<<=== 🚀 payload ===>>", payload);
  
    const category = await Category.create(payload);
  
    console.log("<<=== 🚀 create Category ===>>", category);
  
    //Trả lại record vừa thêm mới
    return category;
  };
  
  const updateById = async (id: string, payload: ICategory) => {
    //b1.Kiểm tra sự tồn tại của danh mục có id này
    const category = await Category.findByIdAndUpdate(id, payload, {
      new: true, // nó trả về record sau khi update
    });
    console.log("<<=== 🚀 category ===>>", category);
  
    /* Bắt lỗi khi ko tìm thấy thông tin */
    if (!category) {
      throw createError(400, "Category Not Found");
    }
  
    //Return về record vừa đc update
    return category;
  };
  
  const deleteById = async (id: string) => {
    //b1 Kiểm tra xem tồn tại author có id
    const category = await Category.findByIdAndDelete(id);
  
    if (!category) {
      throw createError(400, "Category Not Found");
    }
  
    //Return về record vừa xóa
    return category;
  };
  
  export default {
    findAll,
    findById,
    createRecord,
    updateById,
    deleteById,
  };
 