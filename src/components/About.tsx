import bagIcon from '../assets/icon2.png';
import chartIcon from "../assets/chart.png";
import dakrGray from "../assets/pic.png";
import rectangle from "../assets/Rectangle.png";
import woman from "../assets/woman.png";

const About = () => {
    return (
        <div id="about" className='mt-10 bg-transparent max-w-[1200px] mx-auto'>
            <div className="w-1/2 relative ">
                <img className="absolute -left-5 top-5 h-[450px]" data-aos="fade-up-right" src={woman} alt="icon woman" />
                <img className="absolute -left-10 top-[300px]" data-aos="zoom-in" src={rectangle} alt="icon woman" />
                <img className="absolute" src={dakrGray} alt="icon woman" height="400px" data-aos="zoom-in" />
                <img className="absolute top-[350px] -right-6" src={chartIcon} alt="icon woman"  data-aos="fade-up-left" />
                <img className="absolute top-20 -left-20" src={bagIcon} alt="icon woman" data-aos="fade-down-right" />
            </div>
            <div className="w-1/2"></div>
        </div>
    )
}   

export default About