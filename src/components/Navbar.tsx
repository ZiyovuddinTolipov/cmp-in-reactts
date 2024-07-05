
const Navbar = () => {
    return (
        <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 z-10 relative">
            <ul className="flex gap-2 items-center text-primary-50 font-medium">
                <li className="text-3xl font-bold">CMP</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <button className="btn btn-secondary btn-outline">
                Contact
            </button>
        </div>
    )
}

export default Navbar