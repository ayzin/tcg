import { CardInfo } from "types/card";
import { ResponseData } from "types/common/response";
import { Search } from "types/common/search";
import axios from "utils/axios";

export const fetchCards = async (
  params: Search
): Promise<ResponseData<CardInfo[]>> => {
  return await axios.get(`/cards?page=${params?.page}&pageSize=${params?.pageSize}`);
};
