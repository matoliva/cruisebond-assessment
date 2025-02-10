import Link from "next/link";
import { MessageContainer } from "./message-container";

export const FetchError = () => {
  return (
    <MessageContainer>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Failed to load cruises</h2>
        <p className="text-muted-foreground mb-4">Please try again later</p>
        <Link href="/" className=" text-blue-600 font-bold mt-8">
          Retry
        </Link>
      </div>
    </MessageContainer>
  );
};
