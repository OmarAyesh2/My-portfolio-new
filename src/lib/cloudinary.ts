import { Cloudinary } from '@cloudinary/url-gen';
import { quality } from '@cloudinary/url-gen/actions/delivery';
import { format, auto } from '@cloudinary/url-gen/actions/delivery';
import { scale } from '@cloudinary/url-gen/actions/resize';

// Initialize Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  },
  url: {
    secure: true
  }
});

// Helper function to generate optimized image URLs with automatic format and quality
export function getOptimizedUrl(publicId: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
} = {}) {
  const { width, height, format: requestedFormat = 'auto' } = options;
  
  let transformation = cld
    .image(publicId)
    .delivery(quality('auto'))
    .delivery(format(auto()));

  if (width || height) {
    transformation = transformation.resize(
      scale().width(width).height(height)
    );
  }

  // If a specific format is requested (not auto), use it
  if (requestedFormat !== 'auto') {
    transformation = transformation.delivery(format(requestedFormat));
  }

  return transformation.toURL();
}

// Helper function to generate optimized video URLs
export function getVideoUrl(publicId: string, options: {
  quality?: 'auto' | string;
  format?: 'auto' | 'mp4' | 'webm';
} = {}) {
  const { quality: videoQuality = 'auto', format: videoFormat = 'auto' } = options;
  
  let transformation = cld
    .video(publicId)
    .delivery(quality(videoQuality));

  if (videoFormat !== 'auto') {
    transformation = transformation.delivery(format(videoFormat));
  }

  return transformation.toURL();
}

// Function to generate responsive image srcSet
export function getResponsiveImageUrl(publicId: string, breakpoints: number[] = [320, 640, 768, 1024, 1280, 1536]) {
  return breakpoints.map(width => {
    const url = getOptimizedUrl(publicId, { width });
    return `${url} ${width}w`;
  }).join(', ');
}