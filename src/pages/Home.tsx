import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Styles from '../components/Styles';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import News from '../components/News';
import Blogs from '../components/Blogs';
import ClientMarquee from '../components/ClientMarquee';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import StoreLocator from '../components/StoreLocator';
import GetInTouch from '../components/GetInTouch';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Styles />
      <Gallery />
      <Testimonials />
      <News />
      <Blogs />
      <ClientMarquee />
      <FAQ />
      <StoreLocator />
      <GetInTouch />
    </main>
  );
}
