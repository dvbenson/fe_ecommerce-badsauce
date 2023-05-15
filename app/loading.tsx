import DefaultLayout from '@/components/ui/DefaultLayout';
import { SkeletonLanding } from '@/components/Skeletons';
import { v4 as uuidv4 } from 'uuid';

export default function Loading() {
  const skeletonCards = Array.from({ length: 5 }, (_, index) => (
    <li key={uuidv4()}>
      <SkeletonLanding />
    </li>
  ));
  return (
    <DefaultLayout>
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="mt-24 flex shrink-0">
          <div className="grid-col-1 grid h-[360px] w-[300px] place-items-center rounded-xl bg-zinc-200 p-4 shadow">
            <div className="h-[160px] w-[160px] animate-pulse rounded-full bg-zinc-400"></div>
            <div className="h-[90px] w-[240px] animate-pulse rounded-full bg-zinc-400"></div>
          </div>
        </div>
        <ul className="list-none">{skeletonCards}</ul>
      </main>
    </DefaultLayout>
  );
}
