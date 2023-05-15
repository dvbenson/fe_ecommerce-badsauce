'use client';
// import { NextResponse } from 'next/server';
import React, { useState } from 'react';
import Button from '@/components/Button';

export default function ContactForm() {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   });
  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const response = await fetch('/api/email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await response.json();
  //     if (response.status === 200) {
  //       return NextResponse.json({ status: 'success', data });
  //     } else {
  //       return NextResponse.json({ status: 'failure' });
  //     }
  //   };
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        // onSubmit={handleSubmit}
        className="grid-col-1 grid min-w-[280px] bg-white px-8 py-8 shadow-xl sm:min-w-[480px] "
      >
        <label
          htmlFor="name"
          className="my-2 text-left font-sans font-semibold"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          //   value={formData.name}
          //   onChange={handleChange}
          className="border-b  py-2 pl-4 focus:rounded-md focus:outline-none focus:ring-1 "
          required
        />
        <label
          htmlFor="email"
          className="my-2 text-left font-sans font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          //   value={formData.email}
          //   onChange={handleChange}
          className="border-b  py-2 pl-4 focus:rounded-md focus:outline-none focus:ring-1"
          required
        />
        <label
          htmlFor="subject"
          className="my-2 text-left font-sans font-semibold"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          //   value={formData.subject}
          //   onChange={handleChange}
          className="border-b  py-2 pl-4 focus:rounded-md focus:outline-none focus:ring-1"
          required
        />
        <label
          htmlFor="message"
          className="my-2 text-left font-sans font-semibold"
        >
          Message
        </label>
        <textarea
          name="message"
          //   value={formData.message}
          //   onChange={handleChange}
          className="border-b  py-2 pl-4 focus:rounded-md focus:outline-none focus:ring-1"
          required
        ></textarea>
        <div className="mt-8 items-center text-center">
          <Button
            className="font-semi-bold w-20 rounded-full bg-black px-3 py-1 font-sans font-semibold text-white shadow-lg hover:shadow-xl"
            label="Send"
          />
        </div>
      </form>
    </div>
  );
}
