import { useState } from "react";

// Native lazy loading plus a fade-in once the image has arrived.
// Width/height reserve space so the page doesn't jump.
export default function LazyImage({ src, alt, width, height, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      className={`lazy-img ${loaded ? "is-loaded" : ""} ${className}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
    />
  );
}
