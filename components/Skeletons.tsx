const SkeletonLanding = () => {
  return (
    <div className="mb-16 mt-24 flex shrink-0">
      <div className="grid-col-1 grid h-[240px] w-[280px]  place-items-center gap-2 rounded-xl bg-zinc-200  p-2 shadow sm:w-[560px]">
        <div className="h-[30px] w-[180px] animate-pulse rounded-full  bg-zinc-400 sm:w-[280px]" />
        <div className="grid-col-1 grid gap-2">
          <div className="h-[20px] w-[220px] animate-pulse rounded-full bg-zinc-400 sm:w-[480px]" />
          <div className="h-[20px] w-[240px] animate-pulse rounded-full bg-zinc-400 sm:w-[500px]" />
          <div className="h-[20px] w-[200px] animate-pulse rounded-full bg-zinc-400 sm:w-[460px]" />
          <div className="h-[20px] w-[220px] animate-pulse rounded-full bg-zinc-400 sm:w-[480px]" />
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = () => {
  return (
    <div className="flex shrink-0">
      <div className="flex h-[300px] w-[300px] animate-pulse items-center justify-center bg-zinc-300 shadow">
        <div className="h-[150px] w-[150px] animate-pulse rounded-full bg-zinc-400"></div>
      </div>
    </div>
  );
};

const SkeletonProduct = () => {
  return (
    <div className="flex shrink-0">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div className="grid-col-1 grid  h-[300px] w-[300px] place-items-center bg-zinc-200">
          <div className="h-[150px] w-[150px] animate-pulse rounded-full bg-zinc-400"></div>
        </div>
        <div className="grid-col-1  grid h-[300px] w-[300px] place-items-center bg-zinc-200 p-4">
          <div className=" h-[20px] w-[200px] animate-pulse rounded-full bg-zinc-400" />
          <div className=" h-[20px] w-[250px] animate-pulse rounded-full bg-zinc-400" />
          <div className=" h-[20px] w-[250px] animate-pulse rounded-full bg-zinc-400" />
          <div className=" h-[20px] w-[250px] animate-pulse rounded-full bg-zinc-400" />
          <div className=" h-[20px] w-[100px] animate-pulse rounded-full bg-zinc-400" />
          <div className=" h-[20px] w-[100px] animate-pulse rounded-full bg-zinc-400" />
        </div>
      </div>
    </div>
  );
};

export { SkeletonCard, SkeletonLanding, SkeletonProduct };
