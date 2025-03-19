export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface ProductsResponse {
  products: Product[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface ProductsState {
  products: Product[];
  selectedItem: Product | null;
  isLoading: boolean;
  error: string | null;
}