// base
import Image from "next/image";
import { FC } from "react";

interface IPropType {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
  objectFit?: "contain" | "cover" | "fill";
}

const FullImage: FC<IPropType> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit,
}) => {
  const defaultImage = "/images/general/logo.svg";
  return (
    <Image
      src={src ? src : defaultImage}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ objectFit: objectFit ? objectFit : "cover" }}
    />
  );
};

export { FullImage };
