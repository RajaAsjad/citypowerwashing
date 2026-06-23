import ImageReveal from "./ImageReveal";
import type { ImageProps } from "next/image";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  priority?: boolean;
  rounded?: string;
};

export default function OptimizedImage({ alt, className, priority, rounded, ...props }: Props) {
  return (
    <ImageReveal
      alt={alt}
      className={className}
      priority={priority}
      rounded={rounded}
      {...props}
    />
  );
}
