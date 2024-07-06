// import womanImg05x from "../assets/woman@05x.png"

import womanImg from "../assets/woman2.png"
import womanImg1 from "../assets/woman.png"
import icon from "../assets/icon3.png"
import graphicon from "../assets/graphwoman2.png"
import Rectangle from "../assets/Rectangle.png"
import star from "../assets/star.png"


const Features = () => {
    return (
        <div className='hero flex max-w-[1200px] mx-auto h-[100vh] items-start'>
            <div className="font-WorkSans w-1/2 pt-16">
                <h4 className="text-xl text-red-400 font-semibold" data-aos="fade-right" data-aos-duration="500" >Features</h4>
                <h2 className="text-6xl font-semibold" data-aos="fade-right" data-aos-duration="1200" >
                    Smart Complex Solutions
                </h2>
                <p className="text-primary-50 max-w-[500px] mt-5" data-aos="fade-right" data-aos-duration="2000">
                    Stars had ceased to twinkle the same illusion which lifts the horizon of the sea to the level of t
                    he spectator on a hillside, the sable cloud beneath was dished out.
                </p>
                <div className="mt-6 shadow-lg p-6 rounded-lg" data-aos="fade-right" data-aos-duration="2200">
                    <div className="flex items-center gap-3 text-2xl font-semibold">
                        <img src={star} alt="star icon" /> <h3>Modern Technology</h3>
                    </div>
                    <p className="text-primary-50 max-w-[500px] ">The sky was cloudless and of a deep dark blue the spectacle before us was indeed sublime.</p>
                </div>
            </div>
            <div className="w-1/2 relative z-10">
                <img className="absolute top-[150px] right-4 h-[350px]" src={womanImg1} alt="icon woman" data-aos="fade-up-left" />
                <img className="absolute top-[-10px] right-0" src={Rectangle} alt="icon woman" data-aos="fade-down-left" />
                <img className="absolute top-0 right-7" src={womanImg} alt="icon woman" height="400px" data-aos="zoom-in" />
                <img className="absolute top-[200px] left-[50px]" data-aos="fade-right" src={icon} alt="icon woman" />
                <img className="absolute  top-[400px] left-[150px]" data-aos="fade-up-right" src={graphicon} alt="icon woman" />
            </div>
        </div>

    )
}

export default Features;