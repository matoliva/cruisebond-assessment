interface SailingContentProps {
  children: React.ReactNode;
}

export const SailingContent = ({ children }: SailingContentProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
