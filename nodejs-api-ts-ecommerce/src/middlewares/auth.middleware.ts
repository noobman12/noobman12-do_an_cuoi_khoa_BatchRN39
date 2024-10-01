import jwt, { JwtPayload } from "jsonwebtoken";
import Staff from "../models/staff.model";
import Customer from "../models/customer.model";
import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { globalConfig } from "../constants/configs";

interface DecodedJWT extends JwtPayload {
  _id?: string;
}

// xác thực token
export const authenticateToken = (userType: "staff" | "customer" | "order") => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return next(createError(401, "Unauthorized"));
    }

    try {
      const decoded = jwt.verify(
        token,
        globalConfig.JWT_SECRET_KEY as string
      ) as DecodedJWT;

      let user;
      if (userType === "staff") {
        user = await Staff.findById(decoded._id);
        if (!user) {
          return next(createError(401, "Unauthorized"));
        }
        res.locals.staff = user;
      } else if (userType === "customer") {
        user = await Customer.findById(decoded._id);
        if (!user) {
          return next(createError(401, "Unauthorized"));
        }
        res.locals.customer = user;
      }

      next();
    } catch (err) {
      return next(createError(403, "Forbidden"));
    }
  };
};

// Kiểm tra phân quyền của staff
export const authorize = (requiredPermissions: string[] = []) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.staff;

    if (!user) {
      return next(createError(401, "Unauthorized"));
    }

    // 1: Admin
    if (user.role === 1) {
      return next();
    }

    // Kiểm tra quyền
    const userPermissions = user.permissions || [];
    const hasPermission = requiredPermissions.every((permission) =>
      userPermissions.includes(permission)
    );

    if (!hasPermission) {
      return next(createError(403, "Forbidden"));
    }

    next();
  };
};
