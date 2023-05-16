'use client';
import React, { useState, useEffect } from 'react';
import { useModal } from 'app/store';
import Image from 'next/image';

export default function ImageCrossBar() {
  const [isScreenSizeSmall, setIsScreenSizeSmall] = useModal((state) => [
    state.isScreenSizeSmall,
    state.setIsScreenSizeSmall,
  ]);

  useEffect(() => {
    if (window.innerWidth <= 1023) setIsScreenSizeSmall();

    const handleResize = () => {
      if (window.innerWidth <= 1023) setIsScreenSizeSmall();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerClass = isScreenSizeSmall
    ? ''
    : 'fixed inset-x-0 top-1/2 flex items-center justify-between';
  const leftImageClass = isScreenSizeSmall
    ? ''
    : '-translate-x-1/4 transform md:-translate-y-3/4';
  const rightImageClass = isScreenSizeSmall
    ? ''
    : '-translate-y-1/2 transform md:-translate-y-3/4 md:translate-x-[5rem] lg:mb-8 lg:translate-x-1/4';

  return (
    <div className="fixed inset-x-0 top-1/2 z-10 flex items-center justify-between">
      <div className="-translate-x-1/4 transform md:-translate-y-3/4">
        <Image
          src="/images/arm_left.png"
          alt="left arm image"
          width={175}
          height={80}
          className=""
          priority={true}
        />
      </div>
      <div className="-translate-y-1/2 transform md:-translate-y-3/4 md:translate-x-[5rem] lg:mb-8 lg:translate-x-1/4">
        <Image
          src="/images/arm_right.png"
          alt="right arm image"
          width={350}
          height={160}
          className=""
          priority={true}
        />
      </div>
    </div>
  );
}
