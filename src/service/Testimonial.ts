import { http } from "@/lib/http";

export const getTestimonials = async (): Promise<TTestimonialResponse> => {
  return await http
    .get("/testimonial", {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
    .then((res) => res.data);
};
