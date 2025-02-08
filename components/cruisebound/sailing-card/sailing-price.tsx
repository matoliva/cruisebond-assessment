interface PriceProps {
  amount: number;
  label?: string;
}

export function SailingPrice({ amount, label = "Interior from" }: PriceProps) {
  return (
    <div className="flex flex-col items-start md:items-end">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-baseline item gap-0.5">
        <span className="text-sm">$</span>
        <span className="text-2xl font-semibold">{amount}</span>
      </div>
    </div>
  );
}
