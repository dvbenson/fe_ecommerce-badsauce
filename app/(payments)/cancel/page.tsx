import React from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import DefaultLayout from '@/components/ui/DefaultLayout';

export default function CancelPage() {
  //TODO: add link to open email when click on email address
  return (
    <div>
      <DefaultLayout>
        <main className="relative mx-auto flex min-h-screen flex-col p-4 text-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform sm:mt-11">
            <div className="flex flex-col gap-2 p-12 shadow-xl">
              <h1 className="border-b-4 text-center text-3xl font-semibold leading-relaxed">
                Payment Cancelled!
              </h1>
              <h2 className="text-lg">
                Something went wrong, we're sorry about that!
              </h2>
              <p className="text-md font-medium underline decoration-solid underline-offset-4">
                Any questions?
              </p>
              <p> hello@badsauce.co.uk</p>
              <div className=" mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row">
                <Link href="/">
                  <Button
                    label={'Home'}
                    className="w-24 bg-black font-semibold text-white"
                  />
                </Link>
                <Link href="/shop">
                  <Button
                    label={'Shop'}
                    className="w-24 bg-black font-semibold text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </DefaultLayout>
    </div>
  );
}
