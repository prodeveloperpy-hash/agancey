import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
const profilePic = '/Fiazhussain/profile2.jpg'

const Hero = () => {
    return (
        <section
            id="hero"
            className="mt-2 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-white px-4 sm:px-8 md:px-16 lg:px-20 py-10 md:py-0 overflow-hidden"
        >
            {/* --> Left Text Section <-- */}
            <div className="flex-1 text-center md:text-left space-y-5 sm:space-y-6">
                <p className="text-gray-500 text-base sm:text-lg">
                    Hi There <span className="wave">👋</span> I am
                </p>
                <h1 className="text-xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                    Fiaz Hussain
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                    I'm a{" "}
                    <span className="text-teal-600 font-bold">
                        <ReactTyped
                            strings={[
                                "Web Developer",
                                "MERN Stack Expert",
                                "Frontend Engineer",
                                "Freelancer",
                            ]}
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                    </span>
                </h2>
                <p className="text-gray-600  sm:text-base max-w-sm sm:max-w-md mx-auto md:mx-0 leading-relaxed">
                    MERN Stack Expert with one+ years of experience building scalable web
                    applications. I specialize in the MERN stack, crafting clean,
                    efficient code that powers high-performance products.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-4">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-gray-800 transition cursor-pointer inline-block text-center"
                    >
                        VIEW PORTFOLIO →
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="bg-teal-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-teal-600 transition cursor-pointer inline-block text-center"
                    >
                        HIRE ME →
                    </Link>
                </div>
            </div>
            {/* ---> Right Image Section <-- */}
            <div className=" flex-1 mb-10 md:mb-0 flex justify-center  relative pt-10 lg:mt-0">
                <div className="relative group">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-64 h-68 sm:72 sm:h-80 md:w-80 md:h-[345px] rounded-2xl object-cover shadow-lg border-2 border-teal-400 transform transition duration-500 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(13,148,136,0.6)] group-hover:-translate-y-2"
                    />
                    <div className="absolute -top-3 -right-3 w-4 sm:w-5 h-4 sm:h-5 bg-teal-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-3 -left-3 w-4 sm:w-5 h-4 sm:h-5 bg-teal-400 rounded-full animate-ping delay-200"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
