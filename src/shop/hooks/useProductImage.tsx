import { useQuery } from '@tanstack/react-query';
//import { useParams } from 'react-router';

import { getProductImageAction } from '../actions/get-product-image.action';

export const useProductImage = (productId: number) => {
  //const { productId } = useParams();

  return useQuery({
    queryKey: [
      `productImage/${productId}`,
      { productId },
    ],
    queryFn: () =>
      getProductImageAction({
        productId      
      }),
    staleTime: 1000 * 60 * 5,
    retry: false,
    retryDelay: 1,
  });
};
