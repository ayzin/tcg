import { createContext, useContext, useState } from "react";
import { CardInfo } from "types/card";
import { CartProviderProps } from "types/cartContext";

type CardInfoContext = {
  cardsInfo: CardInfo[];
  setCardsInfo: any;
};

export const CardContext = createContext({} as CardInfoContext);
export function useCardContext() {
  return useContext(CardContext);
}

export function CardContextProvider({ children }: CartProviderProps) {
  const [cardsInfo, setCardsInfo] = useState<CardInfo[]>([]);

  return (
    <CardContext.Provider
      value={{
        cardsInfo,
        setCardsInfo
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
