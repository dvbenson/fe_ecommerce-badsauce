import Image from 'next/image';

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function ImageFrame({
  src,
  alt,
  height = 300,
  width = 300,
  className,
}: ImageFrameProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        priority={true}
        className="aspect-square object-cover"
      />
    </div>
  );
}
