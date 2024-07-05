// import womanImg05x from "../assets/woman@05x.png"

import womanImg from "../assets/woman.png"
import icon from "../assets/icon.png"
import graphicon from "../assets/graph.png"
import Rectangle from "../assets/Rectangle.png"
const Hero = () => {
    return (
        <div className='hero flex max-w-[1200px] mx-auto h-[90vh] items-start'>
            <div className="font-WorkSans w-1/2 pt-16">
                <h4 className="text-xl text-red-400 font-semibold">COMPANY</h4>
                <h2 className="text-6xl font-semibold">Creative <br /><span className="text-green-500">Marketing</span></h2>
                <p className="text-primary-50 max-w-[500px] mt-5">
                    The sky was cloudless and of a deep dark blue the spectacle before us was indeed sublime.
                </p>
                <button className="btn btn-accent text-white mt-10"> Explore</button>
            </div>
            <div className="w-1/2 relative z-10">
                <img className="absolute top-[300px] right-0" src={Rectangle} alt="icon woman" />
                <img className="absolute top-0 right-7" src={womanImg} alt="icon woman" height="400px" />
                <img className="absolute top-[200px] left-[50px]" src={icon} alt="icon woman" />
                <img className="absolute  top-[450px] left-0" src={graphicon} alt="icon woman" />
            </div>
        </div>

    )
}

export default Hero