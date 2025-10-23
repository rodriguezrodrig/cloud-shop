import { cloudShopApi } from '@/api/cloudShopApi';
import type { ProductImageResponse } from '@/interfaces/products.response';

interface Options {
  productId: number | string;  
}

export const getProductImageAction = async (
  options: Options
): Promise<ProductImageResponse> => {
  const { productId } = options;

  const url = `/products/getProductImage/${productId}`;
  const { data } = await cloudShopApi.get<ProductImageResponse>(url);

  return {
    ...data
  };
};
