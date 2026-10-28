import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
    SiJavascript,
    SiReact,
    SiExpress,
    SiNodedotjs,
    SiUpwork,
} from "react-icons/si";
import { Element } from "react-scroll";
export default function About() {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript className="text-5xl sm:text-6xl text-yellow-500" /> },
        { name: "React", icon: <SiReact className="text-5xl sm:text-6xl text-cyan-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-5xl sm:text-6xl text-gray-700" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-5xl sm:text-6xl text-green-500" /> },
    ];
    return (
        <Element name="about">
            <section className="min-h-screen bg-gradient from-white to-teal-50 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-20 py-10 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* --> Left Content <-- */}
                    <div>
                        <h3 className="text-teal-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                            ABOUT ME
                        </h3>
                        <h1 className="text-4xl w-75 sm:text-4xl md:text-4xl font-bold text-gray-900 leading-snug">
                            Junior Software Engineer · MERN Stack Expert
                        </h1>
                        <p className="text-gray-600 mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-xl">
                            I build scalable, high-performance web apps with a product-first mindset.
                            With one+ years of experience crafting clean, efficient, and reliable software
                            for fast-moving teams and startups.
                        </p>
                    </div>
                    {/* --> Right Contact Box <-- */}
                    <div className="bg-white shadow-md border border-teal-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                            Connect With Me
                        </h2>
                        <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base">
                            Open to remote roles and freelance projects. I typically reply within 24 hours.
                        </p>
                        <div className="flex flex-wrap gap-4 sm:gap-5">
                            <a
                                href="https://www.linkedin.com/in/fiazhussain478/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-teal-500 text-teal-600 rounded-lg hover:bg-teal-500 hover:text-white transition"
                            >
                                <FaLinkedinIn size={20} />
                            </a>
                            <a
                                href="https://github.com/FIAZHUSSAIN478"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-teal-500 text-teal-600 rounded-lg hover:bg-teal-500 hover:text-white transition"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.upwork.com/freelancers/~018890f5f4d3fd9dc9"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-teal-500 text-teal-600 rounded-lg hover:bg-teal-500 hover:text-white transition"
                            >
                                <SiUpwork size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* --> Skill Cards <-- */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                        {skills.map((skill, i) => (
                            <div
                                key={i}
                                className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-teal-100 transition-transform duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center text-center"
                            >
                                <div className="absolute inset-0 bg-gradient from-teal-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
                                <div className="mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110">
                                    {skill.icon}
                                </div>
                                <p className="text-gray-800 font-semibold text-base sm:text-lg tracking-wide transition-colors duration-500 group-hover:text-teal-700">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* --> Skills Description <-- */}
                    <div>
                        <h3 className="text-teal-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                            MY SKILLS
                        </h3>
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4 sm:mb-6">
                            Solving Problems With Scalable Solutions
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                            I'm a passionate MERN Stack Developer with over 1 year of experience
                            in building scalable, high-performance web applications using React,
                            Next.js, Node.js, Express, MongoDB, and MySQL. I focus on creating
                            intuitive UI and robust backend systems using modern tools like VS
                            Code, GitHub, and Postman — and I'm exploring AI tools such as the
                            OpenAI API and LangChain to build smarter digital experiences.
                        </p>
                        <a
                            href="/Fiazhussain/FIAZ HUSSAIN.pdf"
                            download="FIAZ HUSSAIN.pdf"
                            className="mt-6 sm:mt-8 inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>
        </Element>
    );
}
