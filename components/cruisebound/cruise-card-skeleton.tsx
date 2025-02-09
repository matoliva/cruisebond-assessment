import { Skeleton } from "@/components/ui/skeleton";

export const CruiseListSkeleton = () => {
  return (
    <div className="min-h-screen max-w-7xl m-auto mt-30">
      <div className="flex flex-col gap-6">
        {/* Show multiple skeleton cards */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex gap-6 p-4 bg-card rounded-lg border">
            {/* Left: Image Section */}
            <div className="relative w-[280px] h-[210px] flex-shrink-0">
              <Skeleton className="h-full w-full rounded-tl-sm rounded-bl-sm" />
              <div className="absolute top-4 left-4">
                <Skeleton className="h-6 w-32" /> {/* Date badge */}
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="flex-1 flex flex-col justify-between py-2">
              {/* Top content */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <Skeleton className="h-7 w-64" /> {/* Title */}
                  <Skeleton className="h-12 w-24" /> {/* Cruise line logo */}
                </div>

                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-20" /> {/* Region */}
                  <Skeleton className="h-4 w-20" /> {/* Duration */}
                  <Skeleton className="h-4 w-32" /> {/* Rating */}
                </div>

                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>

              {/* Bottom content */}
              <div className="flex items-center justify-between mt-auto">
                <div className="space-y-1">
                  <Skeleton className="h-4 w-24" /> {/* Interior from */}
                  <Skeleton className="h-7 w-20" /> {/* Price */}
                </div>
                <Skeleton className="h-10 w-28" /> {/* See sailings button */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
