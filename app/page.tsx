import DefaultLayout from '@/components/DefaultLayout';
import ScrollOffset from '@/components/ScrollOffset';

export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <main className="flex flex-col min-h-screen mx-auto p-4">
          <ScrollOffset id="home" />
          <section id="home" className="flex-grow mt-24">
            <h1>Home</h1>
          </section>
          <ScrollOffset id="about" />
          <section id="about" className="flex-grow">
            <h1>About</h1>
          </section>
          <ScrollOffset id="contact" />
          <section id="contact" className="flex-grow">
            <h1>Contact</h1>
          </section>
        </main>
      </DefaultLayout>
    </div>
  );
}
