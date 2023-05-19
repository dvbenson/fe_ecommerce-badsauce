import React from 'react';
import Image from 'next/image';

interface BackGroundWrapperProps {
  children: React.ReactNode;
}
export default function BackGroundWrapper({
  children,
}: BackGroundWrapperProps) {
  return (
    <div className="relative grid w-full place-items-center overflow-hidden gap-1">
      <div className="col-span-1 w-full ">
        <div className="flex h-full w-full justify-between">
          <Image
            src="/images/arm3left.png"
            alt="left-arm3"
            width={100}
            height={100}
            priority={true}
            className="-translate-x-1/4  -translate-y-1/4 sm:translate-y-0 rotate-[-30deg] transform"
          />
          <Image
            src="/images/arm3right.png"
            alt="right-arm3"
            width={100}
            height={100}
            priority={true}
            className="translate-x-3/4 sm:translate-x-1/4 translate-y-10 sm:translate-y-1/4 rotate-[120deg] transform"
          />
        </div>
        <div className="flex h-full w-full justify-between">
          <Image
            src="/images/arm4left.png"
            alt="left-arm4"
            width={100}
            height={100}
            priority={true}
            className="rotate-[215deg] transform -translate-x-2/3 -translate-y-10 sm:translate-y-0 sm:translate-x-0"
          />
          <Image
            src="/images/arm4right.png"
            alt="right-arm4"
            width={100}
            height={100}
            priority={true}
            className="rotate-[90deg] transform translate-x-24 -translate-y-16 sm:translate-y-0 sm:translate-x-0"
          />
        </div>
      </div> 
      {children}
    </div>
  );
}
