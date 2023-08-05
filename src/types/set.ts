export type Set = {
  id: string;
  name: string;
  series: string;
  printedTotal: 185;
  total: 203;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string | Date;
  updatedAt: string | Date;
  images: SetImage;
};

export type SetImage = {
  symbol: string;
  logo: string;
};

export type Legalities = {
  unlimited: string;
  standard: string;
  expanded: string;
};
