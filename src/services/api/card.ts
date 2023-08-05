import { ResponseData } from "types/common/response";
import axios from "utils/axios";

export const fetchCards = async (): Promise<
  ResponseData<any>
> => {
  return await axios.get(`/cards`);
};
