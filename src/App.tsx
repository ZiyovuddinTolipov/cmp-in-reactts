import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutCards from './components/AboutCards';
import Features from './components/Features';


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
    </>
  );
};

export default MyComponent;
