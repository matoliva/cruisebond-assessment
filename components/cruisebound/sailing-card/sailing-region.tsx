interface SailingRegionProps {
  region: string;
  duration: number;
}

export const SailingRegion = ({ region, duration }: SailingRegionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center text-sm text-gray-500">
      <span className="mr-1">{`${region}`}</span>
      <span>{`${duration} nights`}</span>
    </div>
  );
};
