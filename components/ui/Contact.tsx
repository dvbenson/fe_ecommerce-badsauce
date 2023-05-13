import React from 'react';
import ContactForm from '@/components/ui/ContactForm';

export default function Contact() {
  return (
    <div className="mx-auto mb-16 flex flex-col items-center justify-center gap-2 py-4">
      <div className="grid-col-1 mb-8 mt-4 grid max-w-[300px] gap-3 sm:max-w-[560px]">
        <h2 className="font-heading text-xl">GET IN TOUCH.</h2>
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
