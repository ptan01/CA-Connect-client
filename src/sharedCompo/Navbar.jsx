import { useState } from "react";

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className={`md:flex space-x-4 ${menuVisible ? 'block' : 'hidden'}`}>
                    <a href="/" className="text-xl font-bold">CA Connect</a>
                    <a href="/" className="text-xl font-bold">Home</a>
                    <a href="/features" className="text-xl font-bold">Features</a>
                    <a href="/blogs" className="text-xl font-bold">Blogs</a>
                    
                </div>
                <div className={`md:flex space-x-4 ${menuVisible ? 'hidden' : 'block'}`}>
                    <button className="border-2 border-blue-500 text-blue-500 font-bold px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600">Login</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</button>
                </div>
                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;