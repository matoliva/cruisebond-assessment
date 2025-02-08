import { ModeToggle } from "../ui/mode-toggle";
import { SidebarCustomTrigger } from "../ui/sidebar-trigger";
import { CompanyLogo } from "./company-logo";

export const CruiseHeader = () => {
  return (
    <header className="flex justify-between items-center mb-4 py-4">
      <SidebarCustomTrigger />
      <div>
        <CompanyLogo />
        <h3
          className="headline-9 m-0 p-0 text-cruisebound-black-default font-bold text-2xl md:text-3.5xl"
          data-cy="cruiseboundLogoText"
        >
          Cruisebound
        </h3>
      </div>
      <ModeToggle />
    </header>
  );
};
