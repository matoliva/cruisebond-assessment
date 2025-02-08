import Image from "next/image";
import {SailingDate} from "./sailing-date";

interface SailingImageWrapperProps {
  image: string;
  date: string;
  alt?: string;
}

export const SailingImageWrapper = ({
  image,
  date,
  alt = "Sailing",
}: SailingImageWrapperProps) => {
  return (
    <div className="relative overflow-hidden rounded-tl-sm rounded-bl-sm h-full w-full">
      <Image className="w-full h-full object-cover object-center" src={image} alt={alt} width={200} height={150} />

      <div className="absolute top-4 left-2 bg-black/60 text-white p-1 text-sm rounded-sm">
        <SailingDate dates={date} />
      </div>
    </div>
  );
}
