import { ReactNode } from "react";

export type CartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: string;
  quantity: number;
};

export type CartContext = {
  getCardCount: (id: string) => number;
  increaseCardCount: (id: string) => void;
  decreaseCardCount: (id: string) => void;
  removeCards: () => void;
  cartItemsCount: number;
  cartItems: CartItem[];
};
