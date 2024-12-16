import { http } from "@/lib/http";

export const getServices = async (): Promise<TServiceResponse> => {
  return await http.get("/service").then((res) => res.data);
};
