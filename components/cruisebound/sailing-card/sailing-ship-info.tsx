import Image from "next/image";

export const SailingShipInfo = ({ logo, name }: CruiseLine) => {
  return (
    <div className="flex flex-row md:flex-col md:items-end items-center space-x-2 md:">
      {" "}
      <Image
        src={logo}
        alt={`${name} Logo`}
        width={80}
        height={60}
      />
      <span className="text-sm text-muted-foreground font-medium text-gray-500">{name}</span>
    </div>
  );
};
