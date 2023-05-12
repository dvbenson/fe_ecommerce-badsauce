import React from 'react';

export default function Contact() {
  return (
    <div className="mx-auto flex max-w-[300px] flex-col items-center justify-center gap-2 py-4">
      <div
        id="contact"
        className="grid-col-1 mb-8 mt-4 grid max-w-[300px] gap-3"
      >
        <h2 className="font-heading text-xl">GET IN TOUCH.</h2>
        <p className="text-left font-sans text-base leading-relaxed">
          Got a burning question? Or maybe a smouldering suggestion? We'd love
          to hear from you. Connect with us at{' '}
          <span className="font-medium underline">hello@badsauce.co.uk</span>,
          or drop us a line and fill out the form. Let's add some spice to the
          conversation!
        </p>
        <p className="font-heading">[FORM TO GO HERE]</p>
      </div>
    </div>
  );
}
