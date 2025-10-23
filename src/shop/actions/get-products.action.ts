import { cloudShopApi } from '@/api/cloudShopApi';
import type { ProductsResponse } from '@/interfaces/products.response';

interface Options {
  limit?: number | string;
  offset?: number | string;
  sizes?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export const getProductsAction = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset, category, sizes, minPrice, maxPrice, query } = options;

  const url = `/products/buscar`;
  const { data } = await cloudShopApi.get<ProductsResponse>(url, {
    params: {
      limit,
      offset,
      category,
      sizes,
      minPrice,
      maxPrice,
      q: query,
    },
  });

  const productsWithImageUrls = data.products.map((product) => ({
    ...product,   
  }));

  return {
    ...data,
    products: productsWithImageUrls,
  };
};
