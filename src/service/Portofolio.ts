import { http } from "@/lib/http";

export const getPortofolios = async (): Promise<TPortofolioResponse> => {
  return await http.get("/portofolio").then((res) => res.data);
};
