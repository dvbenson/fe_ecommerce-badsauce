import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="flex shrink-0">
      <div className="flex h-[300px] w-[300px] animate-pulse items-center justify-center bg-zinc-300 shadow">
        <div className="h-[75px] w-[75px] animate-pulse rounded-full bg-zinc-400"></div>
      </div>
    </div>
  );
}
