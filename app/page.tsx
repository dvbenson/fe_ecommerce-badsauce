import DefaultLayout from '@/components/ui/DefaultLayout';
import ScrollOffset from '@/components/ScrollOffset';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Contact from '@/components/ui/Contact';
import BackGroundWrapper from '@/components/ui/BackGroundWrapper';
import BackGroundWrapperHero from '@/components/ui/BackGroundWrapper';

export default function Home() {
  return (
    <DefaultLayout>         
        <main className="mx-auto flex min-h-screen flex-col py-4 text-center">
          <ScrollOffset id="home" />
          <section className="relative z-[-1]">
            <BackGroundWrapperHero><Hero /></BackGroundWrapperHero>
          </section>
          <ScrollOffset id="about" />
          <section className="">
            <About />
          </section>
          <ScrollOffset id="contact" />
          <section className="mt-1">
            <Contact />
          </section>
        </main> 
    </DefaultLayout>
  );
}
