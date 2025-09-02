/* eslint-disable react-hooks/exhaustive-deps */
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";

interface ISortedProducts {
  categoryId: number;
  data: any;
}

export const sortedProducts = (categoryId, data) => {
  const products = data.filter((product) =>
    product.CategoryProducts.some(
      (category) => category.CategoryId === categoryId
    )
  );

  return products.sort((a, b) => {
    const orderA = a.CategoryProducts.find(
      (category) => category.CategoryId === categoryId
    )?.OrderInStore;
    const orderB = b.CategoryProducts.find(
      (category) => category.CategoryId === categoryId
    )?.OrderInStore;

    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB;
    } else {
      return 0;
    }
  });
};

export const useProductsWithOrder = (getProductsById, categoryId) => {
  const [products, setProducts] = useState<any>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await getProductsById(categoryId);
      const hasParentCategory = response.some((product) =>
        product.CategoryProducts.some(
          (category) => category.ParentCategoryId === categoryId
        )
      );

      if (hasParentCategory) {
        setProducts(response);
      } else {
        const sorted = sortedProducts(categoryId, response);
        setProducts(sorted);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
    }
  }, [categoryId]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, setProducts };
};
