import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  priority?: boolean;
};

export default function OptimizedImage({ alt, className, priority, ...props }: Props) {
  return (
    <Image
      alt={alt}
      className={className}
      priority={priority}
      quality={85}
      sizes={props.sizes ?? "(max-width: 768px) 100vw, 50vw"}
      {...props}
    />
  );
}
