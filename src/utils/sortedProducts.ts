interface IsortedProducts {
  categoryId: number | any;
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
