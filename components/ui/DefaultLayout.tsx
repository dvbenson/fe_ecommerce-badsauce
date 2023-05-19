import Navbar from './NavBar';
import Footer from './Footer';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    
      <Navbar />
      {children}
      <Footer />
      
    </>
  );
}
