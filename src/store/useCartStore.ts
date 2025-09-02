import axios from "axios";
import { create } from "zustand";

type CartStore = {
  cartProducts: any[];
  orderId: number;
  fetchCartItems: (session: any) => void;
  handleDeleteCartItems: (
    session: any,
    SKU: string,
    order: number
  ) => void;
};

const useCartStore = create<CartStore>((set) => ({
  cartProducts: [],
  orderId: null,
  handleDeleteCartItems: async (session, SKU, order) => {
    try {
      await axios.delete(
        `https://apiecommerce.meucurso.com.br/BIPEStore/DeleteFromCart?OrderId=${order}&SKU=${SKU}`,
        { headers: { Authorization: `Bearer ${session?.user?.Token}` } }
      );
      const apiResponseData = JSON.parse(
        localStorage.getItem("apiResponseData")
      );

      if (apiResponseData && apiResponseData.Items) {
        apiResponseData.Items = apiResponseData.Items.filter(
          (item) => item.SKU !== SKU
        );

        if (apiResponseData.Items.length > 1) {
          localStorage.setItem(
            "apiResponseData",
            JSON.stringify(apiResponseData)
          );
        } else {
          localStorage.removeItem("apiResponseData");
        }
      }
      set((state) => ({
        cartProducts: state.cartProducts.filter(
          (product) => product.SKU !== SKU
        ),
      }));
    } catch (err) {}
  },
  fetchCartItems: async (session) => {
    try {
      if (session) {
        const response = await axios.get(
          `https://apiecommerce.meucurso.com.br/BIPEStore/GetLatestOrder?CustomerId=${session?.user?.CustomerId}`,
          { headers: { Authorization: `Bearer ${session?.user?.Token}` } }
        );

        set({ orderId: response.data.OrderId });
        const processedData = response.data.Items.map((item) => {
          if (item.OrderItemProductLevelId === 1) {
            const matchingItem = response.data.Items.find(
              (otherItem) =>
                otherItem.ParentOrderItemId === item.OrderItemId
            );
            if (matchingItem) {
              if (matchingItem.ProductGroupId === 3) {
                item.Price = matchingItem.Price;
              } else if (matchingItem.ProductGroupId === 2) {
                item.Price += matchingItem.Price;
              }
            }
          }
          return item;
        });

        set({
          cartProducts: processedData.filter(
            (item) => item.OrderItemProductLevelId === 1
          ),
        });
        const existingData = localStorage.getItem("apiResponseData");

        if (existingData) {
          return;
        } else {
          localStorage.setItem(
            "apiResponseData",
            JSON.stringify(response.data)
          );
        }
      }
    } catch (error) {}
  },
}));

export default useCartStore;
