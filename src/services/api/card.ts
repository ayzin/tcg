import { CardInfo } from "types/card";
import { ResponseData } from "types/common/response";
import { Search } from "types/common/search";
import { Set } from "types/set";
import axios from "utils/axios";

export const fetchCards = async (
  params: Search
): Promise<ResponseData<CardInfo[]>> => {
  let query = '';

  if(params?.name) {
    query = query + `name:${params?.name}* `
  }
  if(params?.type) {
    query = query + `types:${params?.type} `
  }

  if(params?.setId) {
    query = query + `set.id:${params?.setId} `
  }

  if(params?.rarity) {
    query = query + `rarity:"${params?.rarity}" `
  }

  return await axios.get(
    `/cards?page=${params?.page}&pageSize=${params?.pageSize}&q=${query}`
  );
};

export const fetchType = async (): Promise<ResponseData<string[]>> => {
  return await axios.get(`/types`);
};

export const fetchSets = async (): Promise<ResponseData<Set[]>> => {
  return await axios.get(`/sets`);
};

export const fetchRarities = async (): Promise<ResponseData<string[]>> => {
  return await axios.get(`/rarities`);
};
