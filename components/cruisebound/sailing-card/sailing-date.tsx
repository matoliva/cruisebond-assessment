interface SailingDateProps {
  dates: string;
}

export const SailingDate = ({ dates }: SailingDateProps) => {
  return (
    <div className="text-xs text-white">
      {dates}
    </div>
  );
};
