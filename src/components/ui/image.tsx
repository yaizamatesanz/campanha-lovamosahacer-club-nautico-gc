
import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

const Image = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  ...props 
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default Image;
