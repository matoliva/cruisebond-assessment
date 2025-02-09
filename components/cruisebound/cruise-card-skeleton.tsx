import { Skeleton } from "@/components/ui/skeleton";

export const CruiseListSkeleton = () => {
  return (
    <div>
      {/* Cards List */}
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 bg-card rounded-lg border"
          >
            {/* Image Section */}
            <div className="relative w-full md:w-[280px] aspect-[4/3] md:h-[210px] flex-shrink-0">
              <Skeleton className="h-full w-full rounded-sm" />
              <div className="absolute top-4 left-4">
                <Skeleton className="h-6 w-32" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between py-2 space-y-4 md:space-y-0">
              {/* Top content */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
                  <Skeleton className="h-7 w-full md:w-64" />
                  <Skeleton className="h-12 w-24" />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-32" />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>

              {/* Bottom content */}
              <div className="flex items-center justify-between mt-4 md:mt-auto">
                <div className="space-y-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-7 w-20" />
                </div>
                <Skeleton className="h-10 w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
