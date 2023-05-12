import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// const calSans = localFont({
//   src: '../public/assets/fonts/CalSans-SemiBold.woff2',
//   display: 'swap',
//   variable: '--font-cal-sans',
// });

const fontHeading = localFont({
  src: '../public/assets/fonts/CalSans-SemiBold.woff2',
  display: 'swap',
  variable: '--font-heading',
});

export default async function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>BadSauce</title>
      </head>
      <body className={inter.variable + ' ' + fontHeading.variable}>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
