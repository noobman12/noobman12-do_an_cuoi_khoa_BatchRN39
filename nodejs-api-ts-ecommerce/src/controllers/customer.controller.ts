import customerService from "../services/customer.service";
import { Request, Response, NextFunction } from "express";
import { sendJsonSuccess, sendJsonErrors } from "../helpers/responseHandle";
import { refreshTokenHelper, refreshTokens } from "../helpers/tokenHelper";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customers = await customerService.findAll();

    sendJsonSuccess(res)(customers);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const customer = await customerService.findById(id);
    sendJsonSuccess(res)(customer);
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
    const customer = await customerService.createRecord(req.body);
    sendJsonSuccess(res)(customer);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const customer = await customerService.updateById(id, req.body);
    sendJsonSuccess(res)(customer);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const customer = await customerService.deleteById(id);
    sendJsonSuccess(res)(customer);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const profile = async (req: Request, res: Response, next: NextFunction) => {
  //res.locals lưu trữ thông tin customer đã được xác thực
  try {
    const { _id } = res.locals.customer;
    const result = await customerService.getProfile(_id);
    sendJsonSuccess(res)(result);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const tokens = await customerService.login(email, password);
    sendJsonSuccess(res)({
      message: "Login successful",
      data: tokens,
    });
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

//Middleware
const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = res.locals.customer;
    const tokens = await refreshTokenHelper(customer);
    sendJsonSuccess(res)(tokens);
  } catch (error) {
    next(error);
  }
};
// tạo token mới từ refreshToken
const refreshTokenHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { refresh_token } = req.body;
  const newTokens = refreshTokens(refresh_token);

  if (newTokens) {
    res.json(newTokens);
  } else {
    res.status(401).json({ message: "Invalid refresh token" });
  }
};
export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
  profile,
  login,
  refreshToken,
  refreshTokenHandler,
};
