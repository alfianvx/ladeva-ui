import { http } from "@/lib/http";

export const getProducts = async (): Promise<TProductResponse> => {
  return await http.get("/product").then((res) => res.data);
};
