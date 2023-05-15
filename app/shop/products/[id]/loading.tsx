import DefaultLayout from '@/components/ui/DefaultLayout';
import { SkeletonProduct } from '@/components/Skeletons';

export default function Loading() {
  return (
    <DefaultLayout>
      <main className="mb-16 flex min-h-screen items-center justify-center sm:relative">
        <div className="grid-col-1 sm:grid-col-2 mt-24 grid max-w-[1000px] sm:absolute sm:left-1/2 sm:top-1/2 sm:mt-8 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transform">
          <SkeletonProduct />
        </div>
      </main>
    </DefaultLayout>
  );
}
