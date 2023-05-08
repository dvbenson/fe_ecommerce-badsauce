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
  width = 600,
  height = 600,
  className,
}: ImageFrameProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className="aspect-square w-full object-cover"
      />
    </div>
  );
}
