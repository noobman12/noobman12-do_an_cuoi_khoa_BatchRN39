import { Request, Response, NextFunction } from "express";
import suppliersService from "../services/suppliers.service";

import { sendJsonSuccess } from "../helpers/responseHandler";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Lấy data từ lớp service
    const suppliers = await suppliersService.findAll();
    //console.log('<<=== 🚀findAll suppliers  ===>>',suppliers);
    //Trả lại cho client
    // res.status(200).json({
    //   data: suppliers
    // })
    sendJsonSuccess(res, "success")(suppliers);
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    /**
     * SELECT * FROM suppliers WHERE id = ''
     */
    const supplier = await suppliersService.findById(id);

    res.status(200).json({
      data: supplier,
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

    const supplier = await suppliersService.createRecord(req.body);

    console.log("<<=== 🚀 supplier controller ===>>", supplier);

    res.status(201).json({
      data: supplier,
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const supplier = await suppliersService.updateById(id, req.body);

    //Thành công
    res.status(200).json({
      data: supplier,
    });
  } catch (error) {
    //Chuyển lỗi qua cho handler error trong app.ts xử lý
    next(error);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const supplier = await suppliersService.deleteById(id);

    res.status(200).json({
      //Trả về phần tử vừa được xóa
      data: supplier,
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
