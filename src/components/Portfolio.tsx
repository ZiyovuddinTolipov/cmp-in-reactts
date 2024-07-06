import portfolio1 from '../assets/portfolio1.svg';
import portfolio2 from '../assets/portfolio2.svg';
import portfolio3 from '../assets/portfolio3.svg';
import portfolio4 from '../assets/portfolio4.svg';

const Portfolio = () => {
    return (
        <div id="portfolio" className='h-[100vh] relative flex '>
            <div className='px-2 py-4 bg-white border-1 border-slate-600'>
                <img src={portfolio1} alt="" />
                <h3>Consulting</h3>
                <p>The sky was cloudless and of a deep dark blue the spectacle before.</p>
            </div>
        </div>
    )
}

export default Portfolio