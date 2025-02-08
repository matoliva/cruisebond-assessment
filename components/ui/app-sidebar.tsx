"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";


export function AppSidebar() {
  return (
    <Sidebar className="w-64 border-r">
      <SidebarHeader className="p-4 border-b">
        <p className="text-sm text-muted-foreground text-center">
          <kbd className="px-2 py-1 text-xs rounded bg-muted">⌘</kbd> +{" "}
          <kbd className="px-2 py-1 text-xs rounded bg-muted">B</kbd> to
          show/hide sidebar
        </p>
      </SidebarHeader>

      <SidebarContent className="p-6">
        <SidebarGroup className="space-y-6">
          {/* Departure Port Filter */}
          <div>
            <h2 className="mb-2 text-lg font-medium">Departure port</h2>
            <Input type="text" placeholder="Any port" className="w-full" />
          </div>
        </SidebarGroup>

        <SidebarGroup className="mt-6 space-y-6">
          {/* Cruiseline Filter */}
          <div>
            <h2 className="mb-2 text-lg font-medium">Cruiseline</h2>
            <Input type="text" placeholder="Any ship" className="w-full" />
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <div
            className="flex flex-row items-center w-[43px] md:w-[48px]"
            data-cy="cruisebound-logo-svg"
          >
            <svg
              width="48"
              height="27"
              viewBox="0 0 48 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.5449 11.1743C31.9093 11.1763 34.5921 9.78391 37.2748 8.39151C39.9576 6.99911 42.6403 5.60671 48.0048 5.60874L48.0068 0.0350687C42.6423 0.0330383 39.9596 1.42544 37.2769 2.81784C34.5941 4.21024 31.9114 5.60264 26.5469 5.60061L26.5449 11.1743ZM26.5458 19.0765C31.9102 19.0785 34.593 17.6861 37.2757 16.2937C39.9584 14.9013 42.6412 13.5089 48.0056 13.5109L48.0077 7.93726C42.6432 7.93523 39.9605 9.32763 37.2777 10.72C34.595 12.1124 31.9123 13.5048 26.5478 13.5028L26.5458 19.0765ZM37.2689 24.1836C34.5861 25.576 31.9034 26.9684 26.5389 26.9664L26.541 21.3927C31.9054 21.3948 34.5882 20.0024 37.2709 18.61C39.9537 17.2176 42.6364 15.8252 48.0008 15.8272L47.9988 21.4008C42.6343 21.3988 39.9516 22.7912 37.2689 24.1836Z"
                fill="url(#paint0_linear_106_7284)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2695 11.1733C18.6339 11.1753 21.3167 9.78294 23.9994 8.39053C26.6822 6.99813 29.3649 5.60573 34.7294 5.60776L34.7314 0.0340922C29.3669 0.0320617 26.6842 1.42446 24.0015 2.81687C21.3187 4.20927 18.636 5.60167 13.2715 5.59964L13.2695 11.1733ZM13.2694 19.0757C18.6339 19.0778 21.3166 17.6854 23.9993 16.293C26.6821 14.9006 29.3648 13.5082 34.7293 13.5102L34.7313 7.93653C29.3669 7.9345 26.6841 9.3269 24.0014 10.7193C21.3186 12.1117 18.6359 13.5041 13.2714 13.5021L13.2694 19.0757ZM23.9935 24.1829C21.3107 25.5753 18.628 26.9677 13.2635 26.9657L13.2656 21.392C18.63 21.394 21.3128 20.0016 23.9955 18.6092C26.6783 17.2168 29.361 15.8244 34.7255 15.8265L34.7234 21.4001C29.359 21.3981 26.6762 22.7905 23.9935 24.1829Z"
                fill="url(#paint1_linear_106_7284)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00569763 11.1735C5.37015 11.1755 8.05289 9.78315 10.7356 8.39075C13.4184 6.99834 16.1011 5.60594 21.4656 5.60797L21.4676 0.0343057C16.1032 0.0322753 13.4204 1.42468 10.7377 2.81708C8.05494 4.20948 5.3722 5.60188 0.00774485 5.59985L0.00569763 11.1735ZM0.00667419 19.0751C5.37113 19.0771 8.05387 17.6847 10.7366 16.2923C13.4193 14.8999 16.1021 13.5075 21.4665 13.5095L21.4686 7.93586C16.1041 7.93383 13.4214 9.32623 10.7387 10.7186C8.05592 12.111 5.37318 13.5034 0.00872141 13.5014L0.00667419 19.0751ZM10.7298 24.1821C8.04707 25.5745 5.36433 26.9669 -0.000129021 26.9648L0.0019182 21.3912C5.36637 21.3932 8.04911 20.0008 10.7319 18.6084C13.4146 17.216 16.0973 15.8236 21.4618 15.8256L21.4597 21.3993C16.0953 21.3973 13.4125 22.7897 10.7298 24.1821Z"
                fill="url(#paint2_linear_106_7284)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_106_7284"
                  x1="29.0388"
                  y1="13.6625"
                  x2="48.1224"
                  y2="13.6613"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2F3DBE"></stop>
                  <stop offset="1" stopColor="#9766FF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_106_7284"
                  x1="13.2744"
                  y1="16.1829"
                  x2="34.8462"
                  y2="16.1815"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5404FF"></stop>
                  <stop offset="1" stopColor="#00C2FF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_106_7284"
                  x1="-0.000853278"
                  y1="15.471"
                  x2="21.5719"
                  y2="15.4696"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00F0FF"></stop>
                  <stop offset="1" stopColor="#00D1FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3
            className="headline-9 m-0 p-0 text-cruisebound-black-default font-bold text-2xl md:text-3.5xl"
            data-cy="cruiseboundLogoText"
          >
            Cruisebound
          </h3>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
