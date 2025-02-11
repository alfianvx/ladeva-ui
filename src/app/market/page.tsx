import MainMarket from "@/components/pages/main-market";
import { getProducts } from "@/service/Product";

export default async function Page() {
  const products = await getProducts();
  return <MainMarket data={products.data} />;
}
