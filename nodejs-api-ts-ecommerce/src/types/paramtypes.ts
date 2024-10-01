export interface QueryParams {
  page?: string;
  limit?: string;
  order_status?: string;
  payment_type?: string;
  sort?: string;
  order?: string;
  phone?: string;
  keyword?: string;
}

export interface FilterOptions {
  objectCustomerFilters: any;
  objectOrderFilters: any;
  page: number;
  limit: number;
  offset: number;
  objSort: any;
}
