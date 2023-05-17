import DefaultLayout from '@/components/ui/DefaultLayout';
import ScrollOffset from '@/components/ScrollOffset';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Contact from '@/components/ui/Contact';

export default function Home() {
  return (
    <DefaultLayout>
      <main className="mx-auto flex min-h-screen flex-col p-4 text-center">
        <ScrollOffset id="home" />
        <section className="mt-24 flex-grow">
          <Hero />
        </section>
        <ScrollOffset id="about" />
        <section className="flex-grow">
          <About />
        </section>
        <ScrollOffset id="contact" />
        <section className="mt-1 flex-grow">
          <Contact />
        </section>
      </main>
    </DefaultLayout>
  );
}
