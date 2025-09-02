/* eslint-disable react-hooks/exhaustive-deps */
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";

export const useProduct = (dataProduct) => {
  const [product, setProduct] = useState<any>([]);

  const fetchProduct = useCallback(async () => {
    await dataProduct
      .then((response) => setProduct(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { product, setProduct };
};
