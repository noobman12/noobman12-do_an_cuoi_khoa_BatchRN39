import { QueryParams, FilterOptions } from "../types/paramtypes";

export const parseQuery = (query: QueryParams): FilterOptions => {
  // Phân trang
  const page = query.page ? parseInt(query.page) : 1;
  const limit = query.limit ? parseInt(query.limit) : 10;
  const offset = (page - 1) * limit;

  // Sắp xếp
  const sortBy = query.sort || "createdAt";
  const orderBy = query.order === "ASC" ? 1 : -1;
  const objSort = { [sortBy]: orderBy }; // Đối tượng sắp xếp

  // Lọc
  let objectCustomerFilters: any = {};
  let objectOrderFilters: any = {};

  // Lọc theo số ĐT
  if (query.phone) {
    objectCustomerFilters.phone = new RegExp(query.phone, "i");
  }

  // Lọc theo Tên
  if (query.keyword) {
    objectCustomerFilters.$or = [
      { first_name: new RegExp(query.keyword, "i") },
      { last_name: new RegExp(query.keyword, "i") },
    ];
  }

  // Lọc theo order_status
  if (query.order_status && parseInt(query.order_status) !== 0) {
    objectOrderFilters.order_status = parseInt(query.order_status);
  }

  // Lọc theo payment_type
  if (query.payment_type && parseInt(query.payment_type) !== 0) {
    objectOrderFilters.payment_type = parseInt(query.payment_type);
  }

  return {
    objectCustomerFilters,
    objectOrderFilters,
    page,
    limit,
    offset,
    objSort,
  };
};
