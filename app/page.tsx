import DefaultLayout from '@/components/ui/DefaultLayout';
import ScrollOffset from '@/components/ScrollOffset';

export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <main className="mx-auto flex min-h-screen flex-col p-4">
          <ScrollOffset id="home" />
          <section id="home" className="mt-24 flex-grow">
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
