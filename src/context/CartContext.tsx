import { createContext, useContext, useState } from "react";
import { CartContext, CartItem, CartProviderProps } from "types/cartContext";

const CartItemsConext = createContext({} as CartContext);

export function useCartContext() {
  return useContext(CartItemsConext);
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartItemsCount = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  function getCardCount(id: string) {
    return cartItems?.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCardCount(id: string) {
    setCartItems((currentItems) => {
      if (currentItems?.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((items) => {
          if (items.id === id) {
            return { ...items, quantity: items.quantity + 1 };
          } else {
            return items;
          }
        });
      }
    });
  }
  function decreaseCardCount(id: string) {
    setCartItems((currentItems) => {
      if (currentItems?.find((item) => item.id === id)?.quantity === 1) {
        return currentItems?.filter((item) => item.id !== id);
      } else {
        return currentItems.map((items) => {
          if (items.id === id) {
            return { ...items, quantity: items.quantity - 1 };
          } else {
            return items;
          }
        });
      }
    });
  }

  function removeCards() {
    setCartItems([]);
  }
  return (
    <CartItemsConext.Provider
      value={{
        getCardCount,
        increaseCardCount,
        decreaseCardCount,
        removeCards,
        cartItemsCount,
        cartItems,
      }}
    >
      {children}
    </CartItemsConext.Provider>
  );
}
