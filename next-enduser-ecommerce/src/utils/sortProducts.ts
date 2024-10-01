import { ProductProps } from "./models";

export const sortProducts = (products: ProductProps[], sortOption: string) => {
  switch (sortOption) {
    case "Alphabetically, A-Z":
      return products.sort((a, b) => a.book_name.localeCompare(b.book_name));
    case "Alphabetically, Z-A":
      return products.sort((a, b) => b.book_name.localeCompare(a.book_name));
    case "Price, high-to-low":
      return products.sort((a, b) => b.price - a.price);
    case "Price, low to high":
      return products.sort((a, b) => a.price - b.price);
    default:
      return products;
  }
};
