import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import AboutSection from '@/components/AboutSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="space-y-0 w-full min-w-full">
      <Hero />
      <Menu />
      <AboutSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
