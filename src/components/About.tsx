import bagIcon from '../assets/icon2.png';
import chartIcon from "../assets/chart.png";
import darkGray from "../assets/pic.png";
import rectangle from "../assets/Rectangle.png";
import woman from "../assets/woman.png";

const About = () => {
    return (
        <div id="about" className="flex mt-10 bg-transparent w-full max-w-[1200px] mx-auto">
            <div className="w-1/2 relative">
                <img className="absolute -left-5 top-5 h-[450px]" src={woman} alt="icon woman" data-aos="fade-up-right" />
                <img className="absolute -left-10 top-[300px]" src={rectangle} alt="icon rectangle" data-aos="zoom-in" />
                <img className="absolute" src={darkGray} alt="dark gray icon" height="400px" data-aos="zoom-in" />
                <img className="absolute top-[350px] -right-6" src={chartIcon} alt="chart icon" data-aos="fade-up-left" />
                <img className="absolute top-20 -left-20" src={bagIcon} alt="bag icon" data-aos="fade-down-right" />
            </div>
            <div className="w-1/2 flex flex-col justify-center pl-10">
                <h4 className="text-sm text-red-400 font-semibold" data-aos="fade-left" data-aos-duration="500" >ABOUT</h4>
                <h2 className="text-4xl font-semibold mt-2" data-aos="fade-left" data-aos-duration="1200">We Build <br /> PRO Business</h2>
                <p className="text-gray-500 mt-4" data-aos="fade-left" data-aos-duration="2000">Excited to work with customers</p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center" data-aos="fade-left" data-aos-duration="2200">
                        <span className="text-green-500">✔️</span>
                        <p className="ml-2">The sky was cloudless and of a deep</p>
                    </li>
                    <li className="flex items-center" data-aos="fade-left" data-aos-duration="2400">
                        <span className="text-green-500">✔️</span>
                        <p className="ml-2">Spectacle before us was indeed</p>
                    </li>
                    <li className="flex items-center" data-aos="fade-left" data-aos-duration="2600">
                        <span className="text-green-500">✔️</span>
                        <p className="ml-2">Cloudless and of a deep dark</p>
                    </li>
                </ul>
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <button className="btn btn-warning  px-4 py-2 rounded-lg mt-10" >Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About