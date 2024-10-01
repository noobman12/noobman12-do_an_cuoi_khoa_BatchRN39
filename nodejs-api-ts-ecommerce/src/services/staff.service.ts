import createError from "http-errors";
import Staff from "../models/staff.model";
import { IStaff } from "../types/modeltypes";
import { hashPassword, comparePassword } from "../helpers/passwordHelper";
import { getTokens } from "../helpers/tokenHelper";

const findAll = async () => {
  const Staffs = await Staff.find().select("-__v -id").lean({ virtuals: true });
  return Staffs;
};

const findById = async (id: string) => {
  const staff = await Staff.findById(id)
    .select("-__v -id")
    .lean({ virtuals: true });
  if (!Staff) {
    throw createError(404, "Staff Not Found");
  }
  return staff;
};

const createRecord = async (payload: IStaff) => {
  if (!payload.password) {
    throw createError(400, "Password is required");
  }

  const hashedPassword = await hashPassword(payload.password);

  const StaffData = { ...payload, password: hashedPassword };
  const staff = await Staff.create(StaffData);

  return staff;
};

const updateById = async (id: string, payload: IStaff) => {
  const staff = await Staff.findByIdAndUpdate(id, payload, {
    new: true,
  })
    .select("-__v -id")
    .lean({ virtuals: true });

  if (!staff) {
    throw createError(404, "Staff Not Found");
  }

  return Staff;
};

const deleteById = async (id: string) => {
  const staff = await Staff.findByIdAndDelete(id)
    .select("-__v -id")
    .lean({ virtuals: true });

  if (!staff) {
    throw createError(404, "Staff Not Found");
  }

  return Staff;
};

const getProfile = async (id: string) => {
  const staff = await Staff.findOne({
    _id: id,
  }).select("-password -__v");

  if (!staff) {
    throw createError(404, "Staff Not Found");
  }
  return Staff;
};

const login = async (email: string, password: string) => {
  const staff = await Staff.findOne({ email });
  if (!staff) {
    throw createError(401, "Invalid credentials");
  }

  if (!staff.password) {
    throw createError(401, "Invalid credentials");
  }

  const isValid = await comparePassword(password, staff.password);

  if (!isValid) {
    throw createError(401, "Invalid credentials");
  }

  const tokens = getTokens({
    _id: staff._id.toString(),
    email: staff.email,
  });

  return tokens;
};

export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
  getProfile,
  login,
};
