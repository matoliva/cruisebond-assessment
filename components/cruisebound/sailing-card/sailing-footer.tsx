

interface SailingFooterProps {
    children: React.ReactNode;
  }

export const SailingFooter = ({ children }: SailingFooterProps) => {
    return (
        <div className="flex items-center justify-between gap-4 border-t bg-gray-100 md:justify-end md:gap-8 p-4">
            {children}
        </div>
    );
};

