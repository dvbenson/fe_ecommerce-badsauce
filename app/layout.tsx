import '../styles/globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js eCommerce Web App: BadSauce</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
