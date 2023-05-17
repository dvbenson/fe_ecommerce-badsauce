import React from 'react';
import ContactForm from '@/components/ui/ContactForm';

export default function Contact() {
  return (
    <div className="mx-auto mb-16 flex flex-col items-center justify-center gap-5 px-1">
      <div className="grid-col-1 mb-8 grid max-w-[280px] gap-5 sm:max-w-[640px] lg:max-w-[720px]">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl">
          GET IN TOUCH.
        </h2>
        <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
          Got a burning question? Or maybe a smouldering suggestion? We'd love
          to hear from you. Connect with us at{' '}
          <span className="font-medium font-normal underline">
            hello@badsauce.co.uk
          </span>
          , or drop us a line and fill out the form. Let's add some spice to the
          conversation!
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
