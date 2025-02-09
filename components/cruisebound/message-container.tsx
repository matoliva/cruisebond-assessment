interface MessageContainerProps {
  children: React.ReactNode;
}
export const MessageContainer = ({ children }: MessageContainerProps) => {
  return (
    <div className="flex items-center m-auto mt-40">{children}</div>
  );
};
