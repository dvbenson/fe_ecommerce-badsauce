import React from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import DefaultLayout from '@/components/ui/DefaultLayout';

export default function SuccessPage() {
  //TODO: add link to open email when click on email address
  return (
    <div>
      <DefaultLayout>
        <main className="relative mx-auto flex min-h-screen flex-col p-4 text-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform sm:mt-11">
            <div className="flex flex-col gap-2 p-12 shadow-xl">
              <h1 className="border-b-4 text-center font-heading text-3xl leading-relaxed">
                Payment Successful!
              </h1>
              <h2 className="font-sans text-lg font-semibold">
                Thank you for your purchase and we hope you enjoy!
              </h2>
              <p className="text-md font-sans font-medium underline decoration-solid underline-offset-4">
                Any questions?
              </p>
              <p className="font-sans"> hello@badsauce.co.uk</p>
              <div className=" mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row">
                <Link href="/">
                  <Button
                    label={'Home'}
                    className="w-24 rounded-full bg-black font-sans font-semibold text-white shadow-md"
                  />
                </Link>
                <Link href="/shop">
                  <Button
                    label={'Shop'}
                    className="w-24 rounded-full bg-black font-sans font-semibold text-white shadow-md"
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
