import { Request, Response, NextFunction } from "express";
import productsController from "../services/products.service";

import { sendJsonSuccess } from "../helpers/responseHandler";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Lấy data từ lớp service
    const products = await productsController.findAll();
    //console.log('<<=== 🚀findAll products  ===>>',products);
    //Trả lại cho client
    // res.status(200).json({
    //   data: products
    // })
    sendJsonSuccess(res, "success")(products);
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    /**
     * SELECT * FROM products WHERE id = ''
     */
    const product = await productsController.findById(id);

    res.status(200).json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("<<=== 🚀 req.body ===>>", req.body);

    const product = await productsController.createRecord(req.body);

    console.log("<<=== 🚀 product controller ===>>", product);

    res.status(201).json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const product = await productsController.updateById(id, req.body);

    //Thành công
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    //Chuyển lỗi qua cho handler error trong app.ts xử lý
    next(error);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const product = await productsController.deleteById(id);

    res.status(200).json({
      //Trả về phần tử vừa được xóa
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
};
