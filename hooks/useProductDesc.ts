
import { useEffect, useState } from 'react';
import { ENDPOINTS } from 'utils/api';

const useProductDesc = (productId: number) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(ENDPOINTS.SINGLE_PRODUCT(productId));
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Something went wrong : ", error);
      }
    };

    getProduct();
  }, [productId]);

  return product;
};

export default useProductDesc;
