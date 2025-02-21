import { Skeleton } from "./ui/skeleton";

export const TestimonialSkeleton = () => {
  return (
    <>
      <Skeleton className="w-full rounded-lg p-5 mb-5">
        <Skeleton className="h-5 w-full md:w-[600px] mb-7" />
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2  md:space-x-4">
            <Skeleton className="h-14 w-14 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-[100px] md:w-[250px]" />
              <Skeleton className="h-4 w-[70px] md:w-[200px]" />
            </div>
          </div>
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </Skeleton>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Skeleton className="w-full rounded-lg p-5">
          <Skeleton className="h-5 w-full md:w-[350px] mb-7" />
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2  md:space-x-4">
              <Skeleton className="h-14 w-14 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-[100px] md:w-[250px]" />
                <Skeleton className="h-4 w-[70px] md:w-[200px]" />
              </div>
            </div>
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg p-5">
          <Skeleton className="h-5 w-full md:w-[350px] mb-7" />
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2  md:space-x-4">
              <Skeleton className="h-14 w-14 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-[100px] md:w-[250px]" />
                <Skeleton className="h-4 w-[70px] md:w-[200px]" />
              </div>
            </div>
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
        </Skeleton>
      </div>
    </>
  );
};

export const ProjectSkeleton = () => {
  return (
    <section className="w-full overflow-hidden flex flex-col py-7 md:py-10 space-y-5 justify-center items-center">
      <div className="flex gap-5 -ml-15">
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
      </div>
      <div className="flex gap-5 -ml-30">
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
        <Skeleton className="w-[430px] h-[300px] rounded-lg" />
      </div>
    </section>
  );
};

export const PartnerListSkeleton = () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-5xl py-5 mx-auto gap-7 md:gap-14 md:py-16">
      <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-20 w-20 rounded-full" />
    </div>
  );
};

export const ProductLogoSkeleton = () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-5xl py-5 mx-auto gap-7 md:gap-9 md:py-16">
      <Skeleton className="h-10 w-28 rounded-lg" />
      <Skeleton className="h-10 w-28 rounded-lg" />
      <Skeleton className="h-10 w-28 rounded-lg" />
      <Skeleton className="h-10 w-28 rounded-lg" />
      <Skeleton className="h-10 w-28 rounded-lg" />
      <Skeleton className="h-10 w-28 rounded-lg" />
    </div>
  );
};

export const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 pt-5 md:pt-10 md:grid-cols-3 pb-14">
      <Skeleton className="p-3 w-full rounded-lg">
        <Skeleton className="w-full overflow-hidden h-60 rounded-lg" />
        <Skeleton className="h-5 w-1/2 rounded-lg my-3" />
        <Skeleton className="h-5 w-full rounded-lg mb-2" />
        <Skeleton className="h-5 w-2/3 rounded-lg" />
        <div className="flex items-center gap-2 mt-5">
          <Skeleton className="w-full h-10 rounded-lg" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
      </Skeleton>
      <Skeleton className="p-3 w-full rounded-lg">
        <Skeleton className="w-full overflow-hidden h-60 rounded-lg" />
        <Skeleton className="h-5 w-1/2 rounded-lg my-3" />
        <Skeleton className="h-5 w-full rounded-lg mb-2" />
        <Skeleton className="h-5 w-2/3 rounded-lg" />
        <div className="flex items-center gap-2 mt-5">
          <Skeleton className="w-full h-10 rounded-lg" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
      </Skeleton>
      <Skeleton className="p-3 w-full rounded-lg">
        <Skeleton className="w-full overflow-hidden h-60 rounded-lg" />
        <Skeleton className="h-5 w-1/2 rounded-lg my-3" />
        <Skeleton className="h-5 w-full rounded-lg mb-2" />
        <Skeleton className="h-5 w-2/3 rounded-lg" />
        <div className="flex items-center gap-2 mt-5">
          <Skeleton className="w-full h-10 rounded-lg" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
      </Skeleton>
      <Skeleton className="p-3 w-full rounded-lg">
        <Skeleton className="w-full overflow-hidden h-60 rounded-lg" />
        <Skeleton className="h-5 w-1/2 rounded-lg my-3" />
        <Skeleton className="h-5 w-full rounded-lg mb-2" />
        <Skeleton className="h-5 w-2/3 rounded-lg" />
        <div className="flex items-center gap-2 mt-5">
          <Skeleton className="w-full h-10 rounded-lg" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
      </Skeleton>
      <Skeleton className="p-3 w-full rounded-lg">
        <Skeleton className="w-full overflow-hidden h-60 rounded-lg" />
        <Skeleton className="h-5 w-1/2 rounded-lg my-3" />
        <Skeleton className="h-5 w-full rounded-lg mb-2" />
        <Skeleton className="h-5 w-2/3 rounded-lg" />
        <div className="flex items-center gap-2 mt-5">
          <Skeleton className="w-full h-10 rounded-lg" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
      </Skeleton>
      <Skeleton className="p-3 w-full rounded-lg">
        <Skeleton className="w-full overflow-hidden h-60 rounded-lg" />
        <Skeleton className="h-5 w-1/2 rounded-lg my-3" />
        <Skeleton className="h-5 w-full rounded-lg mb-2" />
        <Skeleton className="h-5 w-2/3 rounded-lg" />
        <div className="flex items-center gap-2 mt-5">
          <Skeleton className="w-full h-10 rounded-lg" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
      </Skeleton>
    </div>
  );
};

export const ServiceSkeleton = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-5 md:grid-cols-3">
      <Skeleton className="w-full py-3 px-5 space-y-2 rounded-lg">
        <div className="flex items-center space-x-2 ">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-2/3 h-4" />
        </div>
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-1/2 h-3" />
      </Skeleton>
      <Skeleton className="w-full py-3 px-5 space-y-2 rounded-lg">
        <div className="flex items-center space-x-2 ">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-2/3 h-4" />
        </div>
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-1/2 h-3" />
      </Skeleton>
      <Skeleton className="w-full py-3 px-5 space-y-2 rounded-lg">
        <div className="flex items-center space-x-2 ">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-2/3 h-4" />
        </div>
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-1/2 h-3" />
      </Skeleton>
      <Skeleton className="w-full py-3 px-5 space-y-2 rounded-lg">
        <div className="flex items-center space-x-2 ">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-2/3 h-4" />
        </div>
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-1/2 h-3" />
      </Skeleton>
      <Skeleton className="w-full py-3 px-5 space-y-2 rounded-lg">
        <div className="flex items-center space-x-2 ">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-2/3 h-4" />
        </div>
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-1/2 h-3" />
      </Skeleton>
      <Skeleton className="w-full py-3 px-5 space-y-2 rounded-lg">
        <div className="flex items-center space-x-2 ">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-2/3 h-4" />
        </div>
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-1/2 h-3" />
      </Skeleton>
    </div>
  );
};

export const PricingSkeleton = () => {
  return (
    <div className="grid mx-auto w-full max-w-5xl grid-cols-2 gap-3 mt-5 md:mt-8">
      <Skeleton className="p-5 rounded-2xl space-y-3">
        <Skeleton className="w-2/3 h-6 rounded-lg" />
        <Skeleton className="w-1/3 h-3 rounded-lg" />
        <div className="py-5 space-y-3">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="w-full h-3 rounded-lg" />
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="w-full h-3 rounded-lg" />
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="w-full h-3 rounded-lg" />
          </div>
        </div>
        <Skeleton className="w-full h-10 rounded-lg" />
      </Skeleton>
      <Skeleton className="p-5 rounded-2xl space-y-3">
        <Skeleton className="w-2/3 h-6 rounded-lg" />
        <Skeleton className="w-1/3 h-3 rounded-lg" />
        <div className="py-5 space-y-3">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="w-full h-3 rounded-lg" />
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="w-full h-3 rounded-lg" />
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="w-full h-3 rounded-lg" />
          </div>
        </div>
        <Skeleton className="w-full h-10 rounded-lg" />
      </Skeleton>
    </div>
  );
};
