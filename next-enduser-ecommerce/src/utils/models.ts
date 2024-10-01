export interface Product {
  image1: string;
  image2: string;
  book_name: string;
  category: string;
  price: number;
}

export interface ProductProps extends Product {
  width: number;
}
