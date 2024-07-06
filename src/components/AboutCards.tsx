import portfolio1 from '../assets/portfolio1.svg';
import portfolio2 from '../assets/portfolio2.svg';
import portfolio3 from '../assets/portfolio3.svg';
import portfolio4 from '../assets/portfolio4.svg';

const Portfolio = () => {
    const styles = {
        box:"px-8 py-10 bg-white border border-[#E6EDF5] shadow-xl shadow-slate-200 rounded-md",
        boxTitle:"mt-10 mb-2 text-xl font-semibold"
    }
    return (
        <div id="about-cards" className='h-[80vh] relative flex gap-4 max-w-[1200px] mx-auto items-center '>
            <div className={styles.box} data-aos="fade-right">
                <img src={portfolio1} alt="icon consulting" />
                <h3 className={styles.boxTitle}>Consulting</h3>
                <p className='text-primary-50'>The sky was cloudless and of a deep dark blue the spectacle before.</p>
            </div>
            <div className={styles.box} data-aos="fade-up-right">
                <img src={portfolio2} alt="Planning" />
                <h3 className={styles.boxTitle}>Planning</h3>
                <p className='text-primary-50'>Apparently we had reached a great height in the atmosphere.</p>
            </div>
            <div className={styles.box} data-aos="fade-up-left">
                <img src={portfolio3} alt="Support"  />
                <h3 className={styles.boxTitle}>Support</h3>
                <p className='text-primary-50'>By the same illusion which lifts the horizon of the sea to the level.</p>
            </div>
            <div className={styles.box} data-aos="fade-left">
                <img src={portfolio4} alt="Cooperation" />
                <h3 className={styles.boxTitle}>Cooperation</h3>
                <p className='text-primary-50'>Spectator on a hillside, the sable cloud beneath was dished out.</p>
            </div>
        </div>
    )
}

export default Portfolio