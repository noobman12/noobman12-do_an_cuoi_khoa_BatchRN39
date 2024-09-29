import { Request, Response, NextFunction } from "express";
import writerService from "../services/writer.service";
import { sendJsonErrors, sendJsonSuccess } from "../helpers/responseHandle";
import { write } from "fs";

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const writer = await writerService.createRecord(req.body);
    sendJsonSuccess(res)(writer);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const writer = await writerService.findAll();
    sendJsonSuccess(res)(writer);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const writer = await writerService.findById(id);
    sendJsonSuccess(res)(writer);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const writer = await writerService.updateById(id, req.body);
    sendJsonSuccess(res)(writer);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const writer = await writerService.deleteById(id);
    sendJsonSuccess(res)(writer);
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
