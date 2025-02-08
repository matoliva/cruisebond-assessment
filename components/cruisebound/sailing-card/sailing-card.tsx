import { BreadcrumbResponsive } from "@/components/ui/breadcrumb-responsive";
import { Button } from "@/components/ui/button";

import {
  SailingContent,
  SailingImageWrapper,
  SailingShipInfo,
  SailingFooter,
  SailingPrice,
  SailingRegion,
  SailingTitle,
} from "@/components/cruisebound/sailing-card";

import { Rating } from "../rating";

import { formatDateRange } from "@/lib/utils";

interface SailingCardProps {
  className?: string;
  cruise: Cruise;
}

export const SailingCard = ({ cruise }: SailingCardProps) => {
  return (
    <div className="border rounded-lg shadow-sm transition duration-200 cursor-pointer w-full max-h-200">
      <div className="flex">
        <div>
          <SailingImageWrapper
            image={cruise.ship?.image}
            date={formatDateRange(cruise.departureDate, cruise.returnDate)}
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:gap-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4">
            <div className="flex-4">
              <SailingContent>
                <SailingTitle title={cruise.name} />
                <div className="flex items-center gap-3 text-muted-foreground">
                  <SailingRegion
                    region={cruise.region}
                    duration={cruise.duration}
                  />
                  <Rating
                    rating={cruise.ship.rating}
                    reviews={cruise.ship.reviews}
                  />
                </div>
                <div>
                  <BreadcrumbResponsive items={cruise.itinerary} />
                </div>
              </SailingContent>
            </div>
            <div className="flex-1">
              <SailingShipInfo
                logo={cruise.ship.line.logo}
                name={cruise.ship.name}
              />
            </div>
          </div>
          <SailingFooter>
            <SailingPrice amount={cruise.price} />
            <Button className="bg-blue-600 dark:text-white">See sailings</Button>
          </SailingFooter>
        </div>
      </div>
    </div>
  );
};
