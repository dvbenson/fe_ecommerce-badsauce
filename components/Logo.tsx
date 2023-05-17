import Link from 'next/link';

export default function Logo() {
  return (
    <div>
      <Link href={'/'}>
        <p className="ml-4 font-heading text-4xl md:text-5xl">BADSAUCE</p>
      </Link>
    </div>
  );
}
