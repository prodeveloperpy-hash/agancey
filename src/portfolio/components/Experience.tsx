import React from "react";
import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiGithub,
} from "react-icons/si";
import { FaGitAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { Element } from "react-scroll";

export default function Experience() {
    const education = [
        {
            title: "Bachelor of Science in Software Engineering",
            institution: "The Islamia University of Bahawalpur",
            period: "2021 – 2025",
            description:
                "Graduated with distinction, specializing in software engineering and web technologies. Developed multiple MERN-based projects during studies.",
        },
        {
            title: "Fsc Pre Engineering",
            institution: "Punjab Group of College",
            period: "2017 – 2019",
            description:
                "Built a strong foundation in computing principles, programming, and mathematics that supported future technical growth.",
        },
    ];

    const experience = [
        {
            title: "Junior Software Engineer",
            company: "Delta Code Solutions",
            period: "2023 – Present",
            description:
                "Leading cross-functional teams building scalable products using React, Express, Node.js, and JavaScript. Implementing best practices for performance and CI/CD.",
        },
        {
            title: "MERN Stack Developer",
            company: "D-Hoppers Technologies",
            period: "2025 – Present",
            description:
                "Delivered end-to-end web applications using the MERN stack. Collaborated closely with clients to develop modern, responsive interfaces and backend APIs.",
        },
    ];
    return (
        <Element name="experience">
            <section className="min-h-screen bg-gradient from-teal-50 to-white py-8 px-4 sm:px-8 md:px-16 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h3 className="text-teal-600 font-semibold mb-3 text-sm sm:text-base">
                            MY JOURNEY
                        </h3>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                            Education & Experience
                        </h1>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                            My academic background and professional journey in software development
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                        {/* --> Education Section <-- */}
                        <div>
                            <div className="flex items-center gap-2 mb-6 md:mb-8">
                                <FaGraduationCap className="text-teal-600 text-2xl sm:text-3xl" />
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                                    Education
                                </h2>
                            </div>
                            <div className="space-y-8 sm:space-y-10">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative">
                                        <div
                                            className="relative bg-white p-5 sm:p-6 rounded-2xl shadow-md border-l-4 border-teal-500 
                      hover:-translate-y-2 hover:bg-teal-50 hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="absolute -left-3 top-6 w-4 h-4 sm:w-5 sm:h-5 bg-teal-500 rounded-full border-4 border-white shadow-md"></div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{edu.title}</h3>
                                            <p className="text-teal-600 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                                                {edu.institution}
                                            </p>
                                            <span
                                                className="inline-block bg-teal-100 text-teal-800 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-2 sm:mb-3"
                                            >
                                                {edu.period}
                                            </span>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block absolute left-1/2 w-1 bg-teal-500 h-full top-0 transform -translate-x-1/2 rounded-full"></div>
                        {/* --> Experience Section <-- */}
                        <div>
                            <div className="flex items-center gap-2 mb-6 md:mb-8">
                                <FaBriefcase className="text-teal-600 text-2xl sm:text-3xl" />
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                                    Experience
                                </h2>
                            </div>
                            <div className="space-y-8 sm:space-y-10">
                                {experience.map((exp, index) => (
                                    <div key={index} className="relative">
                                        <div
                                            className="relative bg-white p-5 sm:p-6 rounded-2xl shadow-md border-l-4 border-teal-500 
                      hover:-translate-y-2 hover:bg-teal-50 hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="absolute -left-3 top-6 w-4 h-4 sm:w-5 sm:h-5 bg-teal-500 rounded-full border-4 border-white shadow-md"></div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                                            <p className="text-teal-600 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                                                {exp.company}
                                            </p>
                                            <span
                                                className="inline-block bg-teal-100 text-teal-800 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-2 sm:mb-3"
                                            >
                                                {exp.period}
                                            </span>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* --> Skills Section <-- */}
                    <div className="mt-16 md:mt-20">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                            Technical Expertise
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { name: "React.js", icon: <SiReact className="text-4xl sm:text-5xl text-cyan-500" /> },
                                { name: "Node.js", icon: <SiNodedotjs className="text-4xl sm:text-5xl text-green-600" /> },
                                { name: "Express.js", icon: <SiExpress className="text-4xl sm:text-5xl text-gray-700" /> },
                                { name: "MongoDB", icon: <SiMongodb className="text-4xl sm:text-5xl text-green-700" /> },
                                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl sm:text-5xl text-teal-400" /> },
                                { name: "Git", icon: <FaGitAlt className="text-4xl sm:text-5xl text-orange-500" /> },
                                { name: "GitHub", icon: <SiGithub className="text-4xl sm:text-5xl text-gray-800" /> },
                                { name: "CI/CD", icon: <FaGitAlt className="text-4xl sm:text-5xl text-purple-500" /> },
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-gradient from-teal-50 to-white rounded-xl shadow-md p-4 sm:p-6 
                    hover:-translate-y-2 hover:bg-gradient hover:from-teal-100 hover:to-white 
                    hover:shadow-lg transition-all duration-300"
                                >
                                    {skill.icon}
                                    <p className="mt-2 text-gray-800 font-medium text-center text-sm sm:text-base">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
}
