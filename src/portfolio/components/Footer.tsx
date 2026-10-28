import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub, FaLaptopCode } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
    const menuItems = [
        { name: "Home", path: "hero" },
        { name: "About", path: "about" },
        { name: "Experience", path: "experience" },
        { name: "Projects", path: "projects" },
        { name: "Blogs", path: "blogs" },
        { name: "Contact", path: "contact" },
    ];

    const zoomFade = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };
    return (
        <footer className="bg-[#f4f9f9ea]  text-center py-10 px-4 sm:px-8 md:px-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="flex flex-col items-center mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={staggerContainer}
                >
                    <motion.div
                        className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-[#06867d] rounded-full shadow-md mb-4 transition-all duration-500 hover:scale-110 hover:bg-[#0aa69d]"
                        variants={zoomFade}
                    >
                        <FaLaptopCode className="text-3xl sm:text-4xl text-white transition-transform duration-500 hover:rotate-12" />
                    </motion.div>
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center px-2"
                        variants={zoomFade}
                    >
                        Fiaz Hussain{" "}
                        <span className="text-teal-600 font-semibold block sm:inline">
                            | MERN Stack Developer
                        </span>
                    </motion.h2>
                </motion.div>

                {/* -->  Navigation Menu <-- */}
                <motion.nav
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-10 text-base sm:text-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={staggerContainer}
                >
                    {menuItems.map((item) => (
                        <motion.div key={item.name} variants={zoomFade}>
                            <ScrollLink
                                to={item.path}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-70}
                                className="relative text-gray-700 hover:text-teal-600 font-medium cursor-pointer transition duration-300
                           before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5
                           before:bg-[#06867d] before:transition-all before:duration-500 hover:before:w-full"
                            >
                                {item.name}
                            </ScrollLink>
                        </motion.div>
                    ))}
                </motion.nav>
                {/* --> Social Links <-- */}
                <motion.div
                    className="flex justify-center flex-wrap gap-5 sm:gap-8 mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={staggerContainer}
                >
                    {[
                        {
                            href: "http://linkedin.com/in/fiazhussain478/",
                            icon: <FaLinkedin className="text-xl sm:text-2xl" />,
                            hover: "hover:text-blue-600 hover:border-blue-500",
                        },
                        {
                            href: "https://github.com/FIAZHUSSAIN478",
                            icon: <FaGithub className="text-xl sm:text-2xl" />,
                            hover: "hover:text-black hover:border-gray-500",
                        },
                        {
                            href: "https://www.upwork.com/freelancers/~018890f5f4d3fd9dc9",
                            icon: <SiUpwork className="text-xl sm:text-2xl" />,
                            hover: "hover:text-green-600 hover:border-green-500",
                        },
                    ].map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 rounded-full text-gray-700 transition duration-300 ${item.hover}`}
                            variants={zoomFade}
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </motion.div>
                <motion.div
                    className="w-20 sm:w-32 h-0.5 bg-teal-600 mx-auto mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={zoomFade}
                ></motion.div>
                <motion.div
                    className="text-gray-700 text-xs sm:text-sm flex flex-col items-center text-center px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={staggerContainer}
                >
                    <motion.p
                        className="flex items-center justify-center gap-1 mb-1 flex-wrap"
                        variants={zoomFade}
                    >
                        Designed with <span className="text-red-500 text-lg">❤️</span> by{" "}
                        <span className="text-teal-700 font-semibold">Fiaz Hussain</span>
                    </motion.p>
                    <motion.p variants={zoomFade}>© 2025 All Rights Reserved.</motion.p>
                </motion.div>
            </div>
        </footer>
    );
}
