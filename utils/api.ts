
const BASE_URL = 'https://fakestoreapi.com';

export const ENDPOINTS = {
ALL_PRODUCTS: `${BASE_URL}/products`,
  SINGLE_PRODUCT: (productId: number) => `${BASE_URL}/products/${productId}`,
};
