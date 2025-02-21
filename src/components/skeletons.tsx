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
