import { Request, Response, NextFunction } from "express";
import ordersService from "../services/order.service";
import { sendJsonSuccess, sendJsonErrors } from "../helpers/responseHandle";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await ordersService.findAll(req.query);
    sendJsonSuccess(res)(orders);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const order = await ordersService.findById(id);

    sendJsonSuccess(res)(order);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await ordersService.createRecord(
      req.body,
      res.locals.customer
    );

    sendJsonSuccess(res)(order);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const order = await ordersService.updateById(id, req.body);

    sendJsonSuccess(res)(order);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const order = await ordersService.deleteById(id);

    sendJsonSuccess(res)(order);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
};
