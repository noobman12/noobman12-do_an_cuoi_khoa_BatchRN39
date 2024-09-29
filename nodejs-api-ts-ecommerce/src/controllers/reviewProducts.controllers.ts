import { Request, Response, NextFunction } from "express";
import reviewProductsService from "../services/reviewProducts.service";

import { sendJsonSuccess } from "../helpers/responseHandler";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Lấy data từ lớp service
    const reviewProducts = await reviewProductsService.findAll();
    //console.log('<<=== 🚀findAll reviewProducts  ===>>',reviewProducts);
    //Trả lại cho client
    // res.status(200).json({
    //   data: reviewProducts
    // })
    sendJsonSuccess(res, "success")(reviewProducts);
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    /**
     * SELECT * FROM reviewProducts WHERE id = ''
     */
    const reviewProduct = await reviewProductsService.findById(id);

    res.status(200).json({
      data: reviewProduct,
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

    const reviewProduct = await reviewProductsService.createRecord(req.body);

    console.log("<<=== 🚀 reviewProduct controller ===>>", reviewProduct);

    res.status(201).json({
      data: reviewProduct,
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const reviewProduct = await reviewProductsService.updateById(id, req.body);

    //Thành công
    res.status(200).json({
      data: reviewProduct,
    });
  } catch (error) {
    //Chuyển lỗi qua cho handler error trong app.ts xử lý
    next(error);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const reviewProduct = await reviewProductsService.deleteById(id);

    res.status(200).json({
      //Trả về phần tử vừa được xóa
      data: reviewProduct,
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
