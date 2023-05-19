import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="mt-24 sm:mt-16 absolute inset-0 z-[-1] flex items-center justify-center">
      <Image
        src="/hero.png"
        alt="hero image"
        width={350}
        height={450}
        priority={true}
      />
    </div>
  );
}
