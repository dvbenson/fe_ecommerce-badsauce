import DefaultLayout from '@/components/ui/DefaultLayout';
import SkeletonCard from '@/components/SkeletonCard';
import { v4 as uuidv4 } from 'uuid';

export default function Loading() {
  const skeletonCards = Array.from({ length: 9 }, (_, index) => (
    <li key={uuidv4()}>
      <SkeletonCard />
    </li>
  ));
  return (
    <DefaultLayout>
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <section className="mt-24 flex-grow">
          <ul className="grid w-full max-w-[1000px] list-none grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skeletonCards}
          </ul>
        </section>
      </main>
    </DefaultLayout>
  );
}
