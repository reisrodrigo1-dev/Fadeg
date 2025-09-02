import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useSession } from "next-auth/react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [localProducts, setLocalProducts] = useState<any>();
  const [orderId, setOrderId] = useState();

  const { data: session } = useSession();

  const fetchCartItems = useCallback(async () => {
    if (session) {
      try {
        const response = await axios.get(
          `https://apiecommerce.meucurso.com.br/BIPEStore/GetLatestOrder?CustomerId=${session?.user?.CustomerId}`,
          { headers: { Authorization: `Bearer ${session?.user?.Token}` } }
        );
        setOrderId(response.data.OrderId);
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

        setCartProducts(
          processedData.filter(
            (item) => item.OrderItemProductLevelId === 1
          )
        );

        const existingData = localStorage.getItem("apiResponseData");

        if (existingData) {
          return;
        } else {
          localStorage.setItem(
            "apiResponseData",
            JSON.stringify(response.data)
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      fetchCartItems();
    }
  }, [fetchCartItems, session]);

  const contextValue = useMemo(
    () => ({
      cartProducts,
      orderId,
      setCartProducts,
      fetchCartItems,
      localProducts,
      setLocalProducts,
    }),
    [
      cartProducts,
      orderId,
      setCartProducts,
      fetchCartItems,
      localProducts,
      setLocalProducts,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
