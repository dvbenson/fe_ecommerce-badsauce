import React from 'react';
import Link from 'next/link';

export default function About() {

  const WeGotTheSauce = () => {
    return ( <div className="grid-col-1 mb-16 grid max-w-[280px] gap-5 sm:max-w-[640px] lg:max-w-[720px]">
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl">
          WE GOT THE SAUCE!
        </h2>
        <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
          Unleash the flavour, ignite your taste buds. Our artisanal,
          handcrafted hot sauces are here to add a dash of zing to your everyday
          meals. Made with love in the heart of London, we are your culinary
          companion, making meals memorable since 2020.
        </p>
        <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
          Our sauce is naturally fermented for 28 days, mashed by hand, squeezed
          by hand and poured by hand to bring you a raw, yuck-free sauce that
          bites.
        </p>
      </div>)
   
  };

  const OurSauce = () => {
    return (<div
    id="about"
    className="grid-col-1 mb-16 grid max-w-[280px] gap-5 sm:max-w-[640px] lg:max-w-[720px]"
  >
    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl">
      OUR SAUCE.
    </h2>

    <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
      At BADSAUCE, we believe that hot sauce should do more than just burn
      your tongue. Our sauces are crafted to enhance your food's flavour and
      bring joy to your dining experience.
    </p>
    <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
      We carefully ferment and blend natural ingredients to create a sauce
      that doesn't just spice up your dish, but brings a symphony of flavour
      to your plate with every drip.
    </p>
  </div>)
  };

  const OurValues = () => {
    return (<div className="grid-col-1 mb-16 grid max-w-[280px] gap-5 sm:max-w-[640px] lg:max-w-[720px]">
    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl">
      OUR VALUES.
    </h2>

    <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
      <span className="font-normal underline decoration-slate-400 decoration-2 underline-offset-2">
        All-Natural
      </span>{' '}
      - We're committed to keeping things 100% natural. No preservatives, no
      additives, no "yucky" stuff. Just nature’s finest ingredients,
      lovingly hand-squeezed and hand-poured into every bottle.
    </p>
    <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
      <span className="font-normal underline decoration-slate-400 decoration-2 underline-offset-2">
        Vegan & Gluten Free
      </span>{' '}
      - We believe in inclusivity at the dinner table. That's why all our
      sauces are vegan and gluten-free, ensuring everyone can enjoy a good
      slap of flavour.
    </p>
  </div>)
  };

  const WhyChooseUs = () => {
    return (<div className="grid-col-1 mb-16 grid max-w-[280px] gap-5 sm:max-w-[640px] lg:max-w-[720px]">
    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl">
      WHY CHOOSE US?
    </h2>

    <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
      <span className="font-normal underline decoration-slate-400 decoration-2 underline-offset-2">
        Quality
      </span>{' '}
      - Our sauce is not your ordinary hot sauce. It’s a meticulously
      crafted, artisanal condiment made with the finest, all-natural
      ingredients.
    </p>
    <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
      <span className="font-normal underline decoration-slate-400 decoration-2 underline-offset-2">
        Craftsmanship
      </span>{' '}
      - Our sauce is a product of patience and passion. It's slow-fermented
      to perfection, retaining the natural goodness of the ingredients and
      developing a unique, robust flavour.
    </p>
    <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
      <span className="font-normal underline decoration-slate-400 decoration-2 underline-offset-2">
        Ethical
      </span>
      - We are committed to sustainability and ethical sourcing. Our
      ingredients are sourced locally where possible, supporting the local
      economy and reducing our carbon footprint.
    </p>
  </div>)
  };

  const LikeWhatWeDo = () => {
return (<div className="grid-col-1 mb-16 grid max-w-[280px] gap-5 sm:max-w-[640px] lg:max-w-[720px]">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl">
          LIKE WHAT WE DO?
        </h2>
        <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
          Ready to experience a sauce that truly slaps? Unleash the full
          potential of your meals with BADSAUCE naturally fermented hot sauces.
        </p>
        <p className="text-left font-sans text-base font-light leading-relaxed sm:text-lg lg:text-xl">
          <Link
            href="/shop"
            className="font-medium underline decoration-2 underline-offset-2"
          >
            Shop now
          </Link>{' '}
          to add a burst of natural, full-bodied flavour to your culinary
          adventures!
        </p>
      </div>)
  };
  
return (
    <div className="mx-auto flex flex-col items-center justify-center gap-2 py-4">
      <WeGotTheSauce/>
      <OurSauce/>
      <OurValues/>
      <WhyChooseUs/>
      <LikeWhatWeDo/>  
    </div>
  );
}
