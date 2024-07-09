import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutCards from './components/AboutCards';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Sponsors from './components/Sponsors';
import Service from './components/Service';
import Service2 from './components/Service2';
import Team from './components/Team';


const MyComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AboutCards />
      <Features />
      <Portfolio />
      <Sponsors />
      <Service />
      <Service2 />
      <Team />
    </>
  );
};

export default MyComponent;
