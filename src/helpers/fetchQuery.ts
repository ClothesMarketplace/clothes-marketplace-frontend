export interface Query {
  BrandId?: string;
  CategoryId?: string;
  ColorId?: string;
  ProductSizeId?: string;
  MinPrice?: number;
  MaxPrice?: number;
  SearchQuery?: string;
  PageNumber?: number;
  PageSize?: number;
  SortBy?: string;
  SortDirection?: string;
}

interface GetProductsQueryType {
  (query: Query): string;
}

export const getProductsQuery: GetProductsQueryType = (query) => {
  const { PageNumber = 1, PageSize = 40 } = query;

  let params = `products?PageNumber=${PageNumber}&PageSize=${PageSize}`;

  for (const property in query) {
    console.log(`${property}:${query[property as keyof typeof query]}`);

    if (
      property !== "PageNumber" &&
      property !== "PageSize" &&
      query[property as keyof typeof query]
    ) {
      params = params.concat(
        `&${property}=${query[property as keyof typeof query]}`
      );
    }
  }

  console.log(params);

  return params;
};
