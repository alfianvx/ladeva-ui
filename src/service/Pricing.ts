import { http } from "@/lib/http";

export const getPricings = async (): Promise<TPricingResponse> => {
  return await http.get("/pricing").then((res) => res.data);
};
