import createError from "http-errors";
import Customer from "../models/customer.model";
import { ICustomer } from "../types/modeltypes";
import { hashPassword, comparePassword } from "../helpers/passwordHelper";
import { getTokens } from "../helpers/tokenHelper";

const findAll = async () => {
  const customers = await Customer.find()
    .select("-__v -id")
    .lean({ virtuals: true });
  return customers;
};

const findById = async (id: string) => {
  const customer = await Customer.findById(id)
    .select("-__v -id")
    .lean({ virtuals: true });
  if (!customer) {
    throw createError(404, "Customer Not Found");
  }
  return customer;
};

const createRecord = async (payload: ICustomer) => {
  if (!payload.password) {
    throw createError(400, "Password is required");
  }

  const hashedPassword = await hashPassword(payload.password);

  const customerData = { ...payload, password: hashedPassword };
  const customer = await Customer.create(customerData);

  return customer;
};

const updateById = async (id: string, payload: ICustomer) => {
  const customer = await Customer.findByIdAndUpdate(id, payload, {
    new: true,
  })
    .select("-__v -id")
    .lean({ virtuals: true });

  if (!customer) {
    throw createError(404, "Customer Not Found");
  }

  return customer;
};

const deleteById = async (id: string) => {
  const customer = await Customer.findByIdAndDelete(id)
    .select("-__v -id")
    .lean({ virtuals: true });

  if (!customer) {
    throw createError(404, "Customer Not Found");
  }

  return customer;
};

const getProfile = async (id: string) => {
  const customer = await Customer.findOne({
    _id: id,
  }).select("-password -__v");

  if (!customer) {
    throw createError(404, "Customer Not Found");
  }
  return customer;
};

const login = async (email: string, password: string) => {
  const customer = await Customer.findOne({ email });
  if (!customer) {
    throw createError(401, "Invalid credentials");
  }

  if (!customer.password) {
    throw createError(401, "Invalid credentials");
  }

  const isValid = await comparePassword(password, customer.password);

  if (!isValid) {
    throw createError(401, "Invalid credentials");
  }

  const tokens = getTokens({
    _id: customer._id.toString(),
    email: customer.email,
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
