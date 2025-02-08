import Image from "next/image";

export const SailingShipInfo = ({ logo, name }: CruiseLine) => {
  return (
    <div className="flex flex-col md:items-end items-center space-x-2 gap-2 max-w-181 lg:w-full">
      {" "}
      <Image
        src={logo || 'https://placehold.co/105x80.png?text=No+Image'}
        alt={`${name} Logo`}
        width={80}
        height={60}
      />
      <span className="text-sm text-muted-foreground font-medium text-gray-500">{name}</span>
    </div>
  );
};
