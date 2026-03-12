import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Promotions from '@/components/Promotions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Promotions />
      <Menu />
      <Footer />
    </main>
  );
}
