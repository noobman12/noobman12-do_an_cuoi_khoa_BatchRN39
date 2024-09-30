import { Request, Response, NextFunction } from "express";
import authorsService from "../services/authors.service";

import { sendJsonSuccess } from "../helpers/responseHandler";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Lấy data từ lớp service
    const authors = await authorsService.findAll();
    //console.log('<<=== 🚀findAll authors  ===>>',authors);
    //Trả lại cho client
    // res.status(200).json({
    //   data: authors
    // })
    sendJsonSuccess(res, "success")(authors);
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    /**
     * SELECT * FROM authors WHERE id = ''
     */
    const author = await authorsService.findById(id);

    res.status(200).json({
      data: author,
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

    const author = await authorsService.createRecord(req.body);

    console.log("<<=== 🚀 author controller ===>>", author);

    res.status(201).json({
      data: author,
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const author = await authorsService.updateById(id, req.body);

    //Thành công
    res.status(200).json({
      data: author,
    });
  } catch (error) {
    //Chuyển lỗi qua cho handler error trong app.ts xử lý
    next(error);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const author = await authorsService.deleteById(id);

    res.status(200).json({
      //Trả về phần tử vừa được xóa
      data: author,
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
