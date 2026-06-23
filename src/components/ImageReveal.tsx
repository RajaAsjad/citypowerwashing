"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  rounded?: string;
};

export default function ImageReveal({ alt, className, rounded = "", fill, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);
  const wrapperClass = fill
    ? `absolute inset-0 overflow-hidden ${rounded}`
    : `relative overflow-hidden ${rounded}`;

  return (
    <div className={wrapperClass}>
      {!loaded && <div className="shimmer absolute inset-0 z-10" aria-hidden />}
      <Image
        alt={alt}
        fill={fill}
        className={`${className ?? ""} transition-all duration-700 ${
          loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-sm"
        }`}
        onLoad={() => setLoaded(true)}
        quality={85}
        sizes={props.sizes ?? "(max-width: 768px) 100vw, 50vw"}
        {...props}
      />
    </div>
  );
}
