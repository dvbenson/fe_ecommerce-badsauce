import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function About() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-2 py-4">
      <div id="about" className="grid-col-1 my-8 grid max-w-[300px] gap-2">
        <h2 className="font-heading text-xl">WE GOT THE SAUCE!</h2>
        <p className="text-left font-sans text-base leading-relaxed">
          Unleash the flavour, ignite your taste buds. Our artisanal,
          handcrafted hot sauces are here to add a dash of zing to your everyday
          meals. Made with love in the heart of London, we are your culinary
          companion, making meals memorable since 2020.
        </p>
        <p className="text-left font-sans">
          Hand Squeezed | Hand Poured | 100% Natural
        </p>
      </div>
      <div className="grid-col-1 mb-8 grid max-w-[300px] gap-3">
        <h2 className="font-heading text-xl">OUR SAUCE.</h2>
        <p className="text-left font-sans text-base leading-relaxed">
          At BADSAUCE, we believe that hot sauce should do more than just burn
          your tongue. Our sauces are crafted to enhance your food's flavour and
          bring joy to your dining experience. We carefully ferment and blend
          natural ingredients to create a sauce that doesn't just spice up your
          dish, but brings a symphony of flavour to your plate with every drip.
        </p>
        <p className="text-left font-sans"></p>
      </div>
      <div className="grid-col-1 mb-8 grid max-w-[300px] gap-3">
        <h2 className="font-heading text-xl">OUR VALUES.</h2>
        <p className="text-left font-sans text-base leading-relaxed">
          <span className="underline decoration-slate-400 decoration-2 underline-offset-2">
            All-Natural
          </span>{' '}
          - We're committed to keeping things 100% natural. No preservatives, no
          additives, no "yucky" stuff. Just nature’s finest ingredients,
          lovingly hand-squeezed and hand-poured into every bottle.
        </p>
        <p className="text-left font-sans text-base leading-relaxed">
          <span className="underline decoration-slate-400 decoration-2 underline-offset-2">
            Vegan & Gluten Free
          </span>{' '}
          - We believe in inclusivity at the dinner table. That's why all our
          sauces are vegan and gluten-free, ensuring everyone can enjoy a good
          slap of flavour.
        </p>
      </div>
      <div className="grid-col-1 mb-8 grid max-w-[300px] gap-3">
        <h2 className="font-heading text-xl">WHY CHOOSE US?</h2>
        <p className="text-left font-sans text-base leading-relaxed">
          <span className="underline decoration-slate-400 decoration-2 underline-offset-2">
            Quality
          </span>{' '}
          - Our sauce is not your ordinary hot sauce. It’s a meticulously
          crafted, artisanal condiment made with the finest, all-natural
          ingredients.
        </p>
        <p className="text-left font-sans text-base leading-relaxed">
          <span className="underline decoration-slate-400 decoration-2 underline-offset-2">
            Craftsmanship
          </span>{' '}
          - Our sauce is a product of patience and passion. It's slow-fermented
          to perfection, retaining the natural goodness of the ingredients and
          developing a unique, robust flavour.
        </p>
        <p className="text-left font-sans text-base leading-relaxed">
          <span className="underline decoration-slate-400 decoration-2 underline-offset-2">
            Ethical
          </span>
          - We are committed to sustainability and ethical sourcing. Our
          ingredients are sourced locally where possible, supporting the local
          economy and reducing our carbon footprint.
        </p>
      </div>
      <div className="grid-col-1 mb-8 grid max-w-[300px] gap-3">
        <h2 className="font-heading text-xl">LIKE WHAT WE DO?</h2>
        <p className="text-left font-sans text-base leading-relaxed">
          Ready to experience a sauce that truly slaps? Unleash the full
          potential of your meals with BADSAUCE naturally fermented hot sauces.
          Shop now to add a burst of natural, full-bodied flavour to your
          culinary adventures!
        </p>
      </div>
      <Link href="/shop">
        <Button
          label="Buy Now"
          className="bg-black font-sans font-semibold text-white shadow-lg"
        />
      </Link>
    </div>
  );
}
