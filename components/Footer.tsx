import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="h-24">
      <div className="container mx-auto flex h-full flex-col justify-end px-4">
        <ul className="p-2 text-center">
          <li>
            <Link
              href="https://instagram.com/thebadsauce?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl font-bold"
              />
            </Link>
          </li>
          <li className="text-md">hello@badsauce.co.uk</li>
          <li className="text-sm">© 2023 All Rights Reserved</li>
        </ul>
      </div>
    </footer>
  );
}
