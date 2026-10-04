import React from 'react';
import images from '../data/images.json';

const OptimizedImage = ({ image, alt, sizes, ...props }) => {
  const variants = images[image];
  const fallback = variants[variants.length - 1];
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <img
      src={`${publicUrl}/${fallback.src}`}
      srcSet={variants.map((variant) => `${publicUrl}/${variant.src} ${variant.width}w`).join(', ')}
      sizes={sizes}
      width={fallback.width}
      height={fallback.height}
      alt={alt}
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;
