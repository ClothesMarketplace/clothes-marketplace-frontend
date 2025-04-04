interface Category {
  id: string;
  name: string;
}

export interface CategoriesState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
}

export type GetCategoriesResponse = Category[];
