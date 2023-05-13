import React from 'react';
import ContactForm from '@/components/ui/ContactForm';

export default function Contact() {
  return (
    <div className="mx-auto mb-16 flex flex-col items-center justify-center gap-2 py-4">
      <div className="grid-col-1 mb-8 mt-4 grid max-w-[300px] gap-3 sm:max-w-[560px]">
        <div className="w-100vh flex flex-row items-center justify-center">
          <div className="relative min-h-[25px] w-full max-w-[167px] ">
            <div className="skew-x-4 -skew-y-4  h-full w-full bg-blue-200 p-2" />
            <h2 className="absolute bottom-0 left-0 p-1 font-heading text-2xl">
              GET IN TOUCH.
            </h2>
          </div>
        </div>
        {/* <h2 className="font-heading text-xl">GET IN TOUCH.</h2> */}
        <p className="text-left font-sans text-base leading-relaxed">
          Got a burning question? Or maybe a smouldering suggestion? We'd love
          to hear from you. Connect with us at{' '}
          <span className="font-medium underline">hello@badsauce.co.uk</span>,
          or drop us a line and fill out the form. Let's add some spice to the
          conversation!
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
