import Button from '@/components/Button';

export default function ContactForm() {
  //this is a placeholder form, no functionality
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="grid-col-1 grid min-w-[280px] bg-white px-8 py-8 text-base shadow-xl sm:min-w-[480px] sm:text-lg lg:min-w-[560px] lg:text-xl">
        <label
          htmlFor="name"
          className="my-2 text-left font-sans font-semibold"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
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
