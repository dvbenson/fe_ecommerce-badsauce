import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="">
      <Link href={'/'}>
        <p className="ml-4 font-heading text-4xl">BADSAUCE</p>
      </Link>
    </div>
  );
}
