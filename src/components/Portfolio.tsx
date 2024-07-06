import mars from '../assets/mars.jpg'
import liberalEducation from "../assets/Liberal-Education.jpg"
import heavenly from '../assets/Heavenly-Bodies.jpg'
import gravity from '../assets/gravity.jpg'
const Portfolio = () => {
    return (
        <div id="portfolio" className=" max-w-[1200px] mx-auto">
            <div className="text-center">
                <h4 className="text-xl text-red-400 font-semibold" data-aos="zoom-in" data-aos-duration="300">Portfolio</h4>
                <h2 className="text-6xl font-semibold" data-aos="zoom-in" data-aos-duration="900">Company Cases</h2>
                <p className="text-primary-50 max-w-[800px] mx-auto mt-5 text-center" data-aos="zoom-in" data-aos-duration="1200">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle the same illusion which lifts the horizon of the sea.</p>
            </div>
            <div className='flex gap-10 mt-10'>
                <div data-aos="flip-left">
                    <div className='relative'>
                        <img src={mars} alt="mars image" className='max-h-[400px] w-[100%]' />
                        <span className='absolute p-6 bg-green-500 text-4xl font-semibold text-white bottom-0 rounded-tr-badge'>01</span>
                    </div>
                    <h4 className='text-center mt-4 font-semibold text-xl'>Face of Mars</h4>
                    <p className='text-center text-primary-50'>Will be a rare experience</p>
                </div>
                <div data-aos="flip-right">
                    <div className='relative'>
                        <img src={heavenly} alt="mars image" className='max-h-[400px] w-[100%]' />
                        <span className='absolute p-6 bg-green-500 text-4xl font-semibold text-white bottom-0 rounded-tr-badge'>02</span>
                    </div>
                    <h4 className='text-center mt-4 font-semibold text-xl'>Heavenly Bodies</h4>
                    <p className='text-center text-primary-50'>Tour round the world should form</p>
                </div>
            </div>
            <div className='flex gap-10 mt-10'>
                <div data-aos="flip-up">
                    <div className='relative'>
                        <img src={liberalEducation} alt="mars image" className='max-h-[400px] w-[100%]' />
                        <span className='absolute p-6 bg-green-500 text-4xl font-semibold text-white bottom-0 rounded-tr-badge'>03</span>
                    </div>
                    <h4 className='text-center mt-4 font-semibold text-xl'>Liberal Education</h4>
                    <p className='text-center text-primary-50'>Truly it was a great journey</p>
                </div>
                <div data-aos="flip-down">
                    <div className='relative'>
                        <img src={gravity} alt="mars image" className='max-h-[400px] w-[100%]' />
                        <span className='absolute p-6 bg-green-500 text-4xl font-semibold text-white bottom-0 rounded-tr-badge'>04</span>
                    </div>
                    <h4 className='text-center mt-4 font-semibold text-xl'>Though the Gravity</h4>
                    <p className='text-center text-primary-50'>Daily classes he no longer collapsed</p>
                </div>
            </div>
            <div data-aos="zoom-in" className='my-5 text-center'>
                <button className='btn btn-warning uppercase'>Browse All</button>
            </div>
        </div>
    )
}

export default Portfolio