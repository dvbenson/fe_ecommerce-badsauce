import DefaultLayout from '@/components/ui/DefaultLayout';
import ScrollOffset from '@/components/ScrollOffset';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Contact from '@/components/ui/Contact';
//remove id from sections
export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <main className="mx-auto flex min-h-screen flex-col p-4 text-center">
          <ScrollOffset id="home" />
          <section id="home" className="mt-24 flex-grow">
            <Hero />
          </section>
          <ScrollOffset id="about" />
          <section id="about" className="flex-grow">
            <About />
          </section>
          <ScrollOffset id="contact" />
          <section id="contact" className="flex-grow">
            <Contact />
          </section>
        </main>
      </DefaultLayout>
    </div>
  );
}
