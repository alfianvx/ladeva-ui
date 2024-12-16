import { http } from "@/lib/http";

export const getFaqs = async (): Promise<TFaqResponse> => {
  return await http.get("/faq").then((res) => res.data);
};
