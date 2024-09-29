import { sendJsonErrors, sendJsonSuccess } from "../helpers/responseHandle";
import newService from "../services/new.service";
import { Request, Response, NextFunction } from "express";

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const news = await newService.createRecord(req.body);
    sendJsonSuccess(res)(news);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const news = await newService.findAll();
    sendJsonSuccess(res)(news);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const news = await newService.findById(id);
    sendJsonSuccess(res)(news);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const news = await newService.updateById(id, req.body);
    sendJsonSuccess(res)(news);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const news = await newService.deleteById(id);
    sendJsonSuccess(res)(news);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

export default {
  createRecord,
  findAll,
  findById,
  updateById,
  deleteById,
};
