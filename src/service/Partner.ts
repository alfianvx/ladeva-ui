import { http } from "@/lib/http";

export const getPartners = async (): Promise<TPartnerResponse> => {
  return await http.get("/client").then((res) => res.data);
};
