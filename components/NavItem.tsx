import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

type UUID = ReturnType<typeof uuidv4>;

interface NavItemProps {
  key: UUID;
  href: string;
  label: string;
  className: string;
  active?: boolean;
  onClick?: () => void;
}

export default function NavItem({
  href,
  label,
  active,
  onClick,
  className,
}: NavItemProps) {
  const link = active ? (
    <Link href={href}>{label}</Link>
  ) : (
    <a href={href}>{label}</a>
  );

  return (
    <li onClick={onClick} className={className}>
      {link}
    </li>
  );
}
