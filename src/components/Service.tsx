// import womanImg05x from "../assets/woman@05x.png"

import womanImg from "../assets/woman2.png"
import womanImg1 from "../assets/woman.png"
import icon from "../assets/icon-3.png"
import graphicon from "../assets/graph-3.png"
import Rectangle from "../assets/Rectangle.png"
import userIcon from '../assets/icon-user.png'
import userStat from '../assets/icon-stat.png'

const Service = () => {
    return (
        <div className='hero flex max-w-[1200px] mx-auto h-[100vh] items-start mt-10'>
            <div className="font-WorkSans w-1/2 pt-16">
                <h4 className="text-xl text-red-400 font-semibold" data-aos="fade-right" data-aos-duration="500" >Service</h4>
                <h2 className="text-6xl font-semibold mt-5" data-aos="fade-right" data-aos-duration="1200" >
                    Marketing and
                    Creative Consulting
                </h2>
                <p className="text-primary-50 max-w-[500px] mt-5" data-aos="fade-right" data-aos-duration="2000">
                    Distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture.
                </p>
                <div className="mt-6 flex" data-aos="fade-right" data-aos-duration="2200">
                    <div className="w-1/2 flex items-center gap-3">
                        <div className="p-3 bg-[#FFFAEA] rounded-md">
                            <img src={userIcon} alt="star icon" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">42%</h2>
                            <p className="text-primary-50 "> Clients</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center gap-3">
                        <div className="p-3 bg-[#EEF6FF] rounded-md">
                            <img src={userStat} alt="star icon" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">73%</h2>
                            <p className="text-primary-50 "> Succeful</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 relative z-10">
                <img className="absolute top-[150px] right-4 h-[350px]" src={womanImg1} alt="icon woman" data-aos="fade-up-left" />
                <img className="absolute top-[330px] left-32" src={Rectangle} alt="icon woman" data-aos="fade-down-left" />
                <img className="absolute top-0 right-7" src={womanImg} alt="icon woman" height="400px" data-aos="zoom-in" />
                <img className="absolute top-[200px] left-[50px]" data-aos="fade-right" src={icon} alt="icon woman" />
                <img className="absolute  top-[200px] -right-20" data-aos="fade-up-right" src={graphicon} alt="icon woman" />
            </div>
        </div>

    )
}

export default Service;