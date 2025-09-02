/* eslint-disable react-hooks/exhaustive-deps */
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";

export const useProducts = (dataProducts) => {
  const [products, setProducts] = useState<any>([]);

  const fetchProducts = useCallback(async () => {
    await dataProducts
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, setProducts };
};
