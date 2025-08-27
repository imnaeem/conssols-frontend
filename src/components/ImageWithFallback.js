import React, { useState } from 'react';
import { Box } from '@mui/material';
import loadingImage from '../images/loading-image.png';

/**
 * Image component with fallback to placeholder for broken images
 * @param {string} src - Primary image URL
 * @param {string} fallbackSrc - Fallback image URL (optional)
 * @param {object} sx - MUI sx styling
 * @param {string} alt - Alt text for image
 * @param {object} otherProps - Other props to pass to Box component
 */
const ImageWithFallback = ({ 
  src, 
  fallbackSrc = loadingImage, 
  sx = {}, 
  alt = "Image", 
  ...otherProps 
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setHasError(false);
  };

  // If no src provided or empty string, use fallback immediately
  const finalSrc = (!src || src === "") ? fallbackSrc : imgSrc;

  return (
    <Box
      component="img"
      src={finalSrc}
      alt={alt}
      onError={handleError}
      onLoad={handleLoad}
      sx={sx}
      {...otherProps}
    />
  );
};

export default ImageWithFallback;
