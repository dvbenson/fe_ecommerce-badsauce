import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <Image
          src="/hero.png"
          alt="hero image"
          width={350}
          height={450}
          priority={true}
        />
      </div>
    </div>
  );
}
