import { http } from "@/lib/http";

export const getProducts = async (): Promise<TProductsResponse> => {
  return await http.get("/product").then((res) => res.data);
};

export const getProductBySlug = async (
  slug: string
): Promise<TProductResponse> => {
  return await http.get(`/product/slug/${slug}`).then((res) => res.data);
};
