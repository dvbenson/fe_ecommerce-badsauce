import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  display: 'swap',
  variable: '--font-heading',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'BADSAUCE',
  description:
    'BADSAUCE is an independent hotsauce concept design, created by Daniel VB in London, UK.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [
    {
      name: 'Daniel VB',
      url: 'https://danielvb.dev',
    },
  ],
  creator: 'Daniel VB',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>BADSAUCE</title>
      </head>
      <body className={inter.variable + ' ' + fontHeading.variable}>
        {children}
      </body>
    </html>
  );
}
