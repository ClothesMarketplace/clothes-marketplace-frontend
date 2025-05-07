export interface Product {
  id: string;
  name: string;
  dollarPrice: number;
  urlMainImage: null | string;
  description: string;
  images: string[];
  brandId: string;
  categoryId: string;
  forWhomId: string;
  colorId: string;
  productSizeId: string;
  productConditionId: string;
  views?: number;
  interested?: number;
  offers?: number;
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
