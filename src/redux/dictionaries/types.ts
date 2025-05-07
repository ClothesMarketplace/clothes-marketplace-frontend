export interface DictionaryItem {
  id: string;
  name: string;
}

export interface DictionariesState {
  brands: DictionaryItem[];
  colors: DictionaryItem[];
  productConditions: DictionaryItem[];
  productSizes: DictionaryItem[];
  categories: DictionaryItem[];
  forWhom: DictionaryItem[];
  loading: boolean;
  error: string | null;
}
