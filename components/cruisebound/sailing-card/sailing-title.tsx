import { cn } from "@/lib/utils";

interface SailingTitleProps {
  title: string;
  className?: string;
}

export const SailingTitle = ({ title, className }: SailingTitleProps) => {
  return (
    <h2
      className={cn(
        "text-xl font-semibold leading-tight text-foreground",
        className
      )}
    >
      {title}
    </h2>
  );
};
