import { useEffect, useState } from 'react';
import { ENDPOINTS } from 'utils/api';

const useAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(ENDPOINTS.ALL_PRODUCTS);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Something went wrong : ", error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useAllProducts;
