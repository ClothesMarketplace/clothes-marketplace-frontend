export interface Product {
  id: string;
  name: string;
  dollarPrice: number;
  urlMainImage: null | string;
}

export interface ProductsResponse {
  items: Product[];
  totalItems: number;
  skip: number;
  take: number;
}

export interface ProductsState {
  products: Product[];
  selectedItem: Product | null;
  isLoading: boolean;
  error: string | null;
}
