import { http } from "@/lib/http";

export const getTestimonials = async (): Promise<TTestimonialResponse> => {
  return await http.get("/testimonial").then((res) => res.data);
};
