import Link from 'next/link';
import Icon from '@/components/Icon';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="h-24">
      <div className="container mx-auto flex h-full flex-col justify-end px-4">
        <ul className="grid-col-1 grid gap-1 p-2 text-center">
          <li>
            <Link
              href="https://instagram.com/thebadsauce?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={faInstagram} className="text-3xl font-medium" />
            </Link>
          </li>
          <li className="text-md font-sans font-normal">
            hello@badsauce.co.uk
          </li>
          <li className="font-sans text-xs">© 2023 All Rights Reserved</li>
        </ul>
      </div>
    </footer>
  );
}
