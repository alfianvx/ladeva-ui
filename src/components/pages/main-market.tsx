import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Faq from "../faq";
import Closing from "../closing";
import ProductMarketList from "../template/product-market-list";

export default function MainMarket() {
  return (
    <main className="h-full">
      <div className="pt-48 pb-10 px-5">
        <h1 className="text-3xl font-bold text-center md:text-6xl">
          Ladeva
          <span className="ml-1 text-ladeva">Mart.</span>
        </h1>
        <p className="max-w-lg py-3 mx-auto text-sm text-center md:text-base md:py-5">
          not only making costum applications. we also make applications for the
          public that you might need.
        </p>
        <div className="max-w-6xl pt-10 mx-auto md:pt-20">
          <div className="flex items-center justify-end text-sm md:text-base">
            <span className="mr-3">short by :</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <ProductMarketList />
        </div>
      </div>
      <Faq />
      <Closing />
    </main>
  );
}
