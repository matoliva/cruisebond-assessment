"use client";

import * as React from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useMediaQuery from "@/hooks/useMediaQuery";

interface BreadcrumbResponsiveProps {
  items: string[];
  itemsToDisplay?: number;
}

export function BreadcrumbResponsive({
  items = [],
  itemsToDisplay = 3,
}: BreadcrumbResponsiveProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (items.length === 0) {
    return <div>
      <p className="text-sm text-gray-500">No itinerary available</p>
    </div>;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{items[0]}</BreadcrumbLink>
        </BreadcrumbItem>
        {items.length > itemsToDisplay ? (
          <>
            <BreadcrumbSeparator className="text-blue-500">
                <ArrowRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(1, -2).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href="#" scroll={false}>{item}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Itinerary</DrawerTitle>
                      <DrawerDescription>
                        Ports we will visit on this cruise
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {items.slice(1, -2).map((item, index) => (
                        <Link key={index} href="#" scroll={false} className="py-1 text-sm">
                          {item}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-blue-500">
                <ArrowRight />
            </BreadcrumbSeparator>
          </>
        ) : null}
        {items.slice(-itemsToDisplay + 1).map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item ? (
                <BreadcrumbLink
                  asChild
                  className="max-w-20 truncate md:max-w-none"
                >
                  <Link href="#" scroll={false}>{item}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                  {item}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.slice(-itemsToDisplay + 1).length - 1 && (
              <BreadcrumbSeparator className="text-blue-500">
              <ArrowRight />
          </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
