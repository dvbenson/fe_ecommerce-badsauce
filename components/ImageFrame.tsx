import Image, { StaticImageData } from 'next/image';

interface ImageFrameProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ImageFrame({
  src,
  alt,
  height = 300,
  width = 300,
  className,
  priority = false,
}: ImageFrameProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        priority={priority}
        className="aspect-square object-cover"
      />
    </div>
  );
}
