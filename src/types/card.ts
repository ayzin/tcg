import { Legalities, Set } from "./set";

export type CardInfo = {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Abilities[];
  attacks: Attacks[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: CardImages;
  tcgplayer: TcgPlayer;
  cardmarket: CardMarket;
};

export type Abilities = {
  name: string;
  text: string;
  type: string;
};

export type Attacks = {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
};

export type Weakness = {
  type: string;
  value: string;
};

export type CardImages = {
  small: string;
  large: string;
};

export type TcgPlayer = {
  url: string;
  updatedAt: string | Date;
  prices: TcgPlayerPrice;
};

export type TcgPlayerPrice = {
  normal: Price;
  reverseHolofoil: Price;
};
export type Price = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
};

export type CardMarket = {
  url: string;
  updatedAt: string | Date;
  prices: CardPrice;
};

export type CardPrice = {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
};
