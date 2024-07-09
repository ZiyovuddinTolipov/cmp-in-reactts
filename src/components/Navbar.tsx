
const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-white/60 backdrop-blur-md z-20 ">
            <div className="max-w-[1200px]  mx-auto flex justify-between items-center py-4 ">
                <ul className="flex gap-2 items-center text-primary-50 font-medium">
                    <li className="text-3xl font-bold" data-aos="fade-right" data-aos-duration="200">CMP</li>
                    <li data-aos="fade-right" data-aos-duration="500">About</li>
                    <li data-aos="fade-right" data-aos-duration="700">Portfolio</li>
                    <li data-aos="fade-right" data-aos-duration="900">Service</li>
                    <li data-aos="fade-right" data-aos-duration="1100">Blog</li>
                    <li data-aos="fade-right" data-aos-duration="1300">Contact</li>
                </ul>
                <div data-aos="fade-left" data-aos-duration="1300">
                    <button className="btn btn-warning btn-outline" >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;