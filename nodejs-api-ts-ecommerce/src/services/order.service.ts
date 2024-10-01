import createError from "http-errors";
import Order from "../models/order.model";
import { IOrder } from "../types/modeltypes";
import Customer from "../models/customer.model";
import { parseQuery } from "../helpers/filterHelpers";
import { sendEmailToCustomer } from "../helpers/mailer";

const findAll = async (query: any) => {
  const filters = parseQuery(query);
  const limit = filters.limit;
  const page = filters.page;

  const orders = await Order.find(filters.objectOrderFilters)
    .select("-__v -id")
    .populate({
      path: "customer",
      match: filters.objectCustomerFilters, // không khớp thì customer null
    })

    .sort(filters.objSort)
    .skip(filters.offset)
    .limit(limit)
    .lean({ virtuals: true });

  const ordersWithConditions = orders.filter((order) => order.customer);

  const totalRecords = ordersWithConditions.length;

  return {
    orders_list: ordersWithConditions,
    sorts: filters.objSort,
    filters: {},
    pagination: {
      page,
      limit,
      totalPages: Math.ceil(totalRecords / limit),
      totalRecords,
    },
  };
};

const findById = async (id: string) => {
  const order = await Order.findById(id)
    .populate("customer", "-__v -password")
    .populate("order_items.product", "product_name gift photos")
    .lean({ virtuals: true });
  if (!order) {
    throw createError(400, "Order Not Found");
  }

  return order;
};

const createRecord = async (payload: any, customerLogined: any) => {
  let orderPayload;

  // Khách đã login
  if (customerLogined && customerLogined._id) {
    // Sử dụng thông tin khách hàng đã có
    orderPayload = {
      customer: customerLogined._id,
      payment_type: payload.payment_type,
      street:
        payload.customer?.street || customerLogined.address?.street || null,
      city: payload.customer?.city || customerLogined.address?.city || null,
      postalCode:
        payload.customer?.postalCode ||
        customerLogined.address?.postalCode ||
        null,
      order_note: payload.order_note,
      order_items: payload.order_items,
    };

    // Nếu khách hàng muốn cập nhật thông tin giao hàng
    if (payload.customer) {
      orderPayload.street = payload.customer.street || orderPayload.street;
      orderPayload.city = payload.customer.city || orderPayload.city;
      orderPayload.postalCode =
        payload.customer.postalCode || orderPayload.postalCode;
    }

    const order = await Order.create(orderPayload);

    if (order) {
      console.log("Tạo đơn thành công", customerLogined.email);
      await sendEmailToCustomer(
        customerLogined.email,
        "Xác nhận đặt hàng",
        "Cảm ơn bạn đã đặt hàng!"
      );

      return order;
    }
  } else {
    // Khách hàng chưa tồn tại, yêu cầu thông tin giao hàng
    if (!payload.customer) {
      throw createError(400, "Thông tin khách hàng không hợp lệ");
    }

    // Tạo khách hàng mới
    const customer = await Customer.create(payload.customer);

    // Tạo đơn hàng
    orderPayload = {
      customer: customer._id,
      payment_type: payload.payment_type,
      street: customer.address ? customer.address.street : null,
      city: customer.address ? customer.address.city : null,
      postalCode: customer.address ? customer.address.postalCode : null,
      order_note: payload.order_note,
      order_items: payload.order_items,
    };

    const order = await Order.create(orderPayload);

    if (order) {
      console.log("Tạo đơn thành công", customer.email);
      await sendEmailToCustomer(
        customer.email,
        "Xác nhận đặt hàng",
        "Cảm ơn bạn đã đặt hàng!"
      );
    }

    return order;
  }
};

const updateById = async (id: string, payload: IOrder) => {
  const order = await Order.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!order) {
    throw createError(400, "Order Not Found");
  }
  return order;
};

const deleteById = async (id: string) => {
  const order = await Order.findByIdAndDelete(id);

  if (!order) {
    throw createError(400, "Order Not Found");
  }
  return order;
};

export default {
  findAll,
  findById,
  createRecord,
  updateById,
  deleteById,
};
