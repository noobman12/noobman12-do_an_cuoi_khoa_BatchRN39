import jwt from "jsonwebtoken";
import { globalConfig } from "../constants/configs";
import { ObjectId } from "mongoose";
import createError from "http-errors";

interface ITokenPayload {
  _id: ObjectId | string;
  email: string;
  role?: string;
}

export const createAccessToken = (payload: ITokenPayload): string => {
  //sign payload with secret key.
  return jwt.sign(payload, globalConfig.JWT_SECRET_KEY as string, {
    expiresIn: "7days",
  });
};

export const createRefreshToken = (payload: ITokenPayload): string => {
  return jwt.sign(payload, globalConfig.JWT_SECRET_KEY as string, {
    expiresIn: "30days",
  });
};

export const getTokens = (user: ITokenPayload) => {
  const payload = {
    ...user,
    _id: user._id.toString(),
  };
  const access_token = createAccessToken(payload);
  const refresh_token = createRefreshToken(payload);
  return { access_token, refresh_token };
};

export const verifyToken = (token: string): ITokenPayload | null => {
  //xác minh token đúng với key
  try {
    const decoded = jwt.verify(
      token,
      globalConfig.JWT_SECRET_KEY as string
    ) as ITokenPayload;

    return decoded;
  } catch (error) {
    return null;
  }
};

export const refreshTokens = (
  refreshToken: string
): { access_token: string; refresh_token: string } | null => {
  const payload = verifyToken(refreshToken);
  if (!payload) return null;
  return getTokens(payload);
};

export const refreshTokenHelper = async (user: any) => {
  if (!user) {
    throw createError(401, "User not found");
  }

  const tokens = getTokens({
    _id: user._id,
    email: user.email,
  });

  return tokens;
};
