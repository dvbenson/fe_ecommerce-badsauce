import Button from '@/components/Button';
import BackGroundWrapper from './BackGroundWrapper';

export default function ContactForm() {
  //this is a placeholder form, no functionality
  return (
    <>
    <BackGroundWrapper>
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
      <form className="grid-col-1 grid min-w-[280px] rounded-lg bg-zinc-100 px-8 py-8 text-base text-zinc-800 shadow-xl  sm:min-w-[480px] sm:text-lg lg:min-w-[560px] lg:text-xl">
        <label
          htmlFor="name"
          className="my-2 text-left font-sans font-semibold"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          className="border-b  bg-zinc-50 py-2 pl-4 shadow-inner focus:rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-200"
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
          className="border-b bg-zinc-50 py-2 pl-4 shadow-inner focus:rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-200"
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
          className="border-b bg-zinc-50 py-2 pl-4 shadow-inner focus:rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-200"
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
          className="border-b bg-zinc-50 py-2 pl-4 shadow-inner focus:rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-200"
          required
        ></textarea>
        <div className="mt-8 items-center text-center">
          <Button
            className="font-semi-bold w-20 rounded-full bg-zinc-800 px-3 py-1 font-sans font-semibold text-white shadow-lg hover:shadow-xl"
            label="Send"
          />
        </div>
      </form>
    </div>
    </BackGroundWrapper>
    </>
  );
}
