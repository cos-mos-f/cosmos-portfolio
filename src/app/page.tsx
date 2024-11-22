import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Section id="about" title="About Me" content="Here is a brief introduction about myself." />
      <Section id="works" title="Works" content="Explore my latest projects and designs." />
      <Section id="contact" title="Contact" content="Feel free to reach out through my social links." />
      <Footer />
    </div>
  );
}


