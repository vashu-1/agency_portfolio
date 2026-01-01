import Image from 'next/image';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/footer';

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Home />
      <Services />
      <Work />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}
