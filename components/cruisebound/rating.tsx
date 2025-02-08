import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  reviews: number;
}

export function Rating({ rating, reviews }: RatingProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:gap-1 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        <span className="font-medium">{rating.toFixed(2)}</span>
      </div>
      <div>
        <span
          className={cn(
            "text-xs",
            reviews > 0 ? "text-gray-500" : "text-gray-400"
          )}
        >
          ({reviews} reviews)
        </span>
      </div>
    </div>
  );
}
