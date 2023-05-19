'use client';
import React, { useEffect } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import DefaultLayout from '@/components/ui/DefaultLayout';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  //move to util file
  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //TODO: add link to open email when click on email address
  return (
    <div>
      <DefaultLayout>
        <main className="relative mx-auto flex min-h-screen flex-col p-4 text-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform sm:mt-11">
            <div className="flex flex-col gap-2 p-12 shadow-xl">
              <h1 className="border-b-4 text-center text-3xl font-semibold leading-relaxed font-heading">
                Something went wrong... oops! 
              </h1>
              <p className='text-base sm::text-lg font-sans my-2'>{`"${capitalizeFirstLetter(error.message)}"`}</p>
              <h2 className="text-lg font-sans">
                Try again {' '}
                <Button
                  label={'here'}
                  onClick={() => reset()}
                  className="underline decoration-solid decoration-2 decoration-blue-600 underline-offset-2 font-sans font-medium text-blue-600"
                />{' '}
                or follow the links below to get back on track.
              </h2>
              <p className="text-md font-medium underline decoration-solid underline-offset-4 font-sans text-lg">
                Any questions?
              </p>
              <p className='font-sans'> hello@badsauce.co.uk</p>
              <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row">
                <Link href="/">
                  <Button
                    label={'Home'}
                    className="w-24 bg-black font-semibold text-white rounded-full font-sans"
                  />
                </Link>
                <Link href="/shop">
                  <Button
                    label={'Shop'}
                    className="w-24 bg-black font-semibold text-white rounded-full font-sans"
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
