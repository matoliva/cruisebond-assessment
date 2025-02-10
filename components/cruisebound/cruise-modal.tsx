"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { formatDateRange } from "@/utils/formatDateRange";
import { cn } from "@/lib/utils";
import { Cruise } from "@/types/sailings";
import { Ship } from "lucide-react";
import { SailingRating } from "./sailing-card";

interface CruiseModalProps {
  cruise: Cruise;
  isOpen: boolean;
  onClose: () => void;
}

export const CruiseModal = ({ cruise, isOpen, onClose }: CruiseModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[90vh] sm:h-auto overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl font-semibold line-clamp-2">
            {cruise.name}
          </DialogTitle>
        </DialogHeader>

        {/* Main Image - Reduced height on mobile */}
        <div className="relative h-[150px] sm:h-[200px] -mt-2 rounded-md overflow-hidden">
          <Image
            src={cruise.ship.image}
            alt={cruise.name}
            fill
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 600px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 sm:bottom-4 left-4 text-white">
            <p className="text-xs sm:text-sm">
              {formatDateRange(cruise.departureDate, cruise.returnDate)}
            </p>
          </div>
        </div>

        {/* Content in scrollable container */}
        <div className="space-y-4 overflow-y-auto">
          {/* Ship Info and Rating - Stacked on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 sm:py-4 border-b gap-2">
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <span className="font-medium">{cruise.ship.line.name}</span>
              </div>
              <SailingRating
                rating={cruise.ship.rating}
                reviews={cruise.ship.reviews}
              />
            </div>
            <div className="relative h-6 sm:h-8 w-20 sm:w-24">
              <Image
                src={cruise.ship.line.logo}
                alt={`${cruise.ship.line.name} logo`}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          </div>

          {/* Duration and Region */}
          <div className="flex items-center gap-4 text-sm sm:text-base text-muted-foreground">
            <span>{cruise.duration} nights</span>
            <span>{cruise.region}</span>
          </div>

          {/* Itinerary - Compact on mobile */}
          <div className="space-y-2">
            <h3 className="font-medium">Full Itinerary</h3>
            <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-4">
              {cruise.itinerary.map((port, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-2 p-1 sm:p-2 rounded-md text-sm sm:text-base",
                    index === 0 && "bg-blue-50 dark:bg-blue-950"
                  )}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium">{index + 1}</span>
                  </div>
                  <span>{port}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price and Book - Fixed at bottom on mobile */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t sticky bottom-0 bg-background">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Interior from
            </p>
            <p className="text-xl sm:text-2xl font-semibold">${cruise.price}</p>
          </div>
          <Button
            size="default"
            className="bg-blue-600 dark:text-white px-6 sm:px-8"
          >
            Book Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
