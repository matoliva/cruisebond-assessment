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
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {cruise.name}
          </DialogTitle>
        </DialogHeader>

        {/* Main Image with Gradient Overlay */}
        <div className="relative h-[200px] -mt-2 rounded-md overflow-hidden">
          <Image
            src={cruise.ship.image}
            alt={cruise.name}
            fill
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 600px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">
              {formatDateRange(cruise.departureDate, cruise.returnDate)}
            </p>
          </div>
        </div>

        {/* Ship Info and Rating */}
        <div className="flex items-center justify-between py-4 border-b">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Ship className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{cruise.ship.line.name}</span>
            </div>
            <SailingRating rating={cruise.ship.rating} reviews={cruise.ship.reviews} />
          </div>
          <div className="relative h-8 w-24">
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
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>{cruise.duration} nights</span>
          <span>{cruise.region}</span>
        </div>

        {/* Itinerary */}
        <div className="space-y-2">
          <h3 className="font-medium">Full Itinerary</h3>
          <div className="space-y-2 mt-4">
            {cruise.itinerary.map((port, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-2 rounded-md",
                  index === 0 && "bg-blue-50 dark:bg-blue-950"
                )}
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-medium">{index + 1}</span>
                </div>
                <span>{port}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price and Book */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div>
            <p className="text-sm text-muted-foreground">Interior from</p>
            <p className="text-2xl font-semibold">${cruise.price}</p>
          </div>
          <Button size="lg" className="bg-blue-600 dark:text-white px-8">
            Book Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
