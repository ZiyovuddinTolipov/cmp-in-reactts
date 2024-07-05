import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MyComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  return (
    <main>
      
    </main>
  );
};

export default MyComponent;
