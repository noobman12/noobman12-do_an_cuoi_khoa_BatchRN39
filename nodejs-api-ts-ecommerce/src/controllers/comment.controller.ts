import { Request, Response, NextFunction } from "express";
import commentService from "../services/comment.service";
import { sendJsonErrors, sendJsonSuccess } from "../helpers/responseHandle";

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment = await commentService.createRecord(req.body);
    sendJsonSuccess(res)(comment);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const comment = await commentService.findAll();
      sendJsonSuccess(res)(comment);
    } catch (error) {
      next(sendJsonErrors(res, error));
    }
  };

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const comment = await commentService.findById(id);
    sendJsonSuccess(res)(comment);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const comment = await commentService.updateById(id, req.body);
    sendJsonSuccess(res)(comment);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const comment = await commentService.deleteById(id);
    sendJsonSuccess(res)(comment);
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
