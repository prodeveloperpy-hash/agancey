import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaDownload, FaCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { name: "Home", to: "hero" },
        { name: "About", to: "about" },
        { name: "Experience", to: "experience" },
        { name: "Projects", to: "projects" },
        { name: "Blogs", to: "blogs" },
        { name: "Contact", to: "contact" },
    ];
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 lg:px-20">
                {/* --> Logo <-- */}
                <div className="flex items-center space-x-3">
                    <div className="bg-teal-600 text-white p-2 rounded-full text-2xl">
                        <FaCode />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Fiaz Hussain
                    </h1>
                </div>
                {/* --> Desktop Menu <-- */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="relative text-gray-700 font-medium transition duration-300 group cursor-pointer"
                            >
                                <span className="group-hover:text-teal-500 transition duration-300">
                                    {item.name}
                                </span>
                                <span className="absolute left-0 -bottom-2 h-0.5 bg-[#06867d] w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* --> Desktop Button <-- */}
                <a
                    href="/Fiazhussain/FIAZ HUSSAIN.pdf"
                    download="FIAZ HUSSAIN.pdf"
                    className="hidden md:flex items-center bg-teal-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-teal-700 transition duration-200"
                >
                    Download CV <FaDownload className="ml-2" />
                </a>
                {/* --> Mobile Menu Toggle <-- */}
                <div
                    className="md:hidden text-2xl text-gray-700 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {/* -->Mobile Menu<--  */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md border-t border-gray-200">
                    <ul className="flex flex-col p-8 py-4 space-y-4 text-gray-700 font-medium">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="relative text-gray-700 font-medium transition duration-300 group cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="group-hover:text-teal-500 transition duration-300">
                                        {item.name}
                                    </span>
                                    <span className="absolute left-0 -bottom-2 h-0.5 bg-[#06867d] w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                                </Link>
                            </li>
                        ))}
                        <a
                            href="/Fiazhussain/FIAZ HUSSAIN.pdf"
                            download="FIAZ HUSSAIN.pdf"
                            className="flex items-center bg-teal-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-teal-700 transition duration-200"
                        >
                            Download CV <FaDownload className="ml-2" />
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
