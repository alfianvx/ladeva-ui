import { http } from "@/lib/http";

export const getTestimonials = async (): Promise<TTestimonialResponse> => {
  return await http
    .get("/testimonial", {
      headers: {
        "Cache-Control": "no-store",
        Pragma: "no-cache",
        Expires: "0",
      },
      // next: { revalidate: 0 }, // Paksa data di-refresh setiap request
    })
    .then((res) => res.data);
};
