import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-scroll";
const School = '/Fiazhussain/School-Finder.png'
const Calculator = '/Fiazhussain/BMI.png'
const Comerace = '/Fiazhussain/E-Comerace.png'
import { Element } from "react-scroll";

export default function Projects() {
    const projects = [
        {
            title: "School-Finder",
            description:
                "A web app that helps users find and explore schools by location with map integration and detailed school insights.",
            liveLink: "https://school-finder-drab.vercel.app/",
            githubLink: "https://github.com/FIAZHUSSAIN478?tab=repositories",
            image: School,
        },
        {
            title: "Health-Metrics-Pro",
            description:
                "A responsive health tracking web app to calculate BMI and monitor fitness metrics, designed with a clean and modern HTML/CSS layout.",
            liveLink: "https://health-metrics-pro.vercel.app/",
            githubLink: "https://github.com/FIAZHUSSAIN478?tab=repositories",
            image: Calculator,
        },
        {
            title: "E-Commerce Mini Project",
            description:
                "A modern, responsive, and visually appealing e-commerce website built with clean and well-structured HTML and CSS design.",
            liveLink: "https://e-commerce-mini-ddva.vercel.app/",
            githubLink: "https://github.com/FIAZHUSSAIN478?tab=repositories",
            image: Comerace,
        },
    ];
    return (
        <Element name="projects">
            <section className="min-h-screen bg-[#f4fcfa] py-8 px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                        My Digital <span className="text-teal-600">Creations</span>
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16">
                        A selection of projects where I’ve turned complex problems into elegant, user-friendly solutions.
                    </p>
                    {/* --> Projects Grid <-- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-md border border-gray-100 p-5 sm:p-6 flex flex-col items-center relative transition-all duration-500 hover:shadow-xl"
                            >
                                {/* --> Project Image <-- */}
                                <div className="w-full -mt-10 mb-4 flex justify-center overflow-hidden rounded-2xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full sm:w-[280px] md:w-[300px] h-[160] sm:h-[180px] object-cover rounded-2xl transform transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 text-center">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed text-center">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-auto">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold py-2 px-5 sm:px-6 rounded-full text-sm sm:text-base transition duration-300"
                                    >
                                        <FiExternalLink className="text-lg" />
                                        Live
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 font-semibold py-2 px-5 sm:px-6 rounded-full text-sm sm:text-base transition duration-300"
                                    >
                                        <FiGithub className="text-lg" />
                                        Details
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* --> Contact Section <-- */}
                    <div className="mt-16 sm:mt-24 bg-white border border-gray-100 rounded-3xl shadow-md p-6 sm:p-10 max-w-3xl mx-auto hover:shadow-xl transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                            Interested in working together?
                        </h2>
                        <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
                            Let’s discuss how we can bring your next project to life with modern web technologies.
                        </p>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-md cursor-pointer inline-block text-sm sm:text-base"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </Element>
    );
}
