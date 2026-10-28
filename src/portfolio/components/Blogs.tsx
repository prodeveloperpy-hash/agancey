import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
const html = '/Fiazhussain/htmlimg1.png'
const css = '/Fiazhussain/cssimg.png'
const javascript = '/Fiazhussain/javascriptimg.png'
const reactImg = '/Fiazhussain/reactimg.png'
const express = '/Fiazhussain/expressimg.png'
const node = '/Fiazhussain/nodeimg.avif'

export default function Blogs() {
    const blogs = [
        {
            title: "Mastering HTML5 Essentials",
            date: "March 09, 2024",
            description:
                "Learn the core structure of modern web pages with HTML5 tags, semantics, and layout foundations.",
            image: html,
            content:
                "HTML5 revolutionized the way we build and structure web pages. With new semantic elements such as <header>, <footer>, <article>, and <section>, developers can write cleaner, more meaningful code. It also introduced features like local storage, audio/video support without plugins, and canvas for drawing graphics directly in the browser. Whether you’re building a simple page or a full-fledged app, HTML5 provides the solid foundation every developer needs. Furthermore, mastering HTML5 enables seamless integration with modern CSS and JavaScript frameworks — giving you total control over accessibility, SEO, and responsive layouts.",
        },
        {
            title: "Styling Like a Pro with CSS3",
            date: "April 10, 2024",
            description:
                "Discover how to bring your web pages to life using CSS3 animations, grids, and flexbox for responsive design mastery.",
            image: css,
            content:
                "CSS3 is the visual powerhouse of the modern web. It introduced advanced selectors, animations, transitions, and responsive layout tools like Flexbox and Grid. With just a few lines of code, you can create elegant designs that adapt to any screen size. CSS3 also offers media queries, variables, and transformations — making it a key skill for every front-end developer striving to craft pixel-perfect, mobile-first designs. Mastering CSS3 ensures that your web applications not only look great but perform efficiently across all devices.",
        },
        {
            title: "JavaScript — The Heart of the Web",
            date: "May 15, 2025",
            description:
                "A deep dive into JavaScript fundamentals — DOM manipulation, ES6 features, and async programming for dynamic websites.",
            image: javascript,
            content:
                "JavaScript brings logic, interactivity, and life to web applications. It allows you to manipulate the DOM, handle user input, and fetch data from APIs — all in real time. With ES6, features like arrow functions, destructuring, and promises made code cleaner and faster. Today, JS is not just for browsers; it powers servers (Node.js), frameworks (React, Angular, Vue), and even mobile apps — truly making it the heart of modern development. Understanding JS deeply sets the foundation for full-stack mastery.",
        },
        {
            title: "Building UIs with React & Tailwind CSS",
            date: "August 10, 2025",
            description:
                "Learn how to create beautiful, responsive, and fast user interfaces using React.js",
            image: reactImg,
            content:
                "React is a component-based JavaScript library that makes building user interfaces both intuitive and powerful. When combined with Tailwind CSS — a utility-first CSS framework — you can rapidly prototype and build beautiful, responsive web apps. This duo enables a streamlined workflow where you focus on functionality without worrying about writing long CSS files. Tailwind’s prebuilt classes and React’s reusability create a modern front-end ecosystem that developers love. This combination boosts development speed, consistency, and overall user experience.",
        },
        {
            title: "Server-Side Power with Express.js",
            date: "October 15, 2025",
            description:
                "Learn how Express.js simplifies backend development, handles routes, middleware, and APIs efficiently.",
            image: express,
            content:
                "Express.js, built on top of Node.js, simplifies backend development by offering a robust yet minimal structure. It manages routing, middleware, and API endpoints effortlessly. Developers can handle authentication, sessions, and file uploads with just a few lines of code. Express is perfect for scalable RESTful APIs and forms the backbone of many modern JavaScript stacks — making server-side development cleaner and faster. It empowers developers to focus on logic rather than setup.",
        },
        {
            title: "Full-Stack Magic with Node.js & MongoDB",
            date: "November 20, 2025",
            description:
                "Explore how Node.js and MongoDB work together to power modern, high-performance full-stack applications.",
            image: node,
            content:
                "Node.js provides a lightning-fast, event-driven environment that allows developers to handle thousands of concurrent requests efficiently. MongoDB complements Node perfectly with its flexible, schema-less NoSQL database structure. Together, they form the backend core of the MERN stack — enabling developers to create scalable web applications with real-time capabilities, API integrations, and smooth database operations without any bottlenecks. This combination is essential for anyone aiming to master full-stack development.",
        },
    ];
    const [selectedBlog, setSelectedBlog] = useState(null);
    return (
        <Element name="blogs">
            <section className="min-h-screen  bg-[#f4fcfa] py-8 px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                        My <span className="text-teal-600">Blogs</span>
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16">
                        A collection of tutorials and insights covering every layer of the
                        MERN Stack — from frontend to backend.
                    </p>
                    <div className="grid gap-6 sm:gap-16 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl shadow-md border border-gray-100 p-4 flex flex-col justify-between items-center relative transition-all duration-500 hover:shadow-lg"
                            >
                                <div className="w-full mb-4 flex justify-center overflow-hidden rounded-2xl">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full max-w-[320px] h-40 sm:h-44 object-cover rounded transform transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow- text-center">
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-3">
                                        {blog.date}
                                    </p>
                                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                                        {blog.description}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="mt-auto text-white bg-teal-600 hover:bg-teal-700 font-semibold py-2 px-5 sm:px-6 rounded-full transition duration-300 shadow-md text-sm sm:text-base"
                                >
                                    Read More →
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* -->Model<-- */}
                <AnimatePresence>
                    {selectedBlog && (
                        <>
                            <motion.div
                                className="fixed inset-0 bg-black/50 z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            ></motion.div>
                            <motion.div
                                className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-6"
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl relative overflow-y-auto max-h-[95vh]">
                                    <button
                                        onClick={() => setSelectedBlog(null)}
                                        className="absolute top-8 right-10 w-10 h-10 rounded-full bg-amber-50 text-[#06867d] hover:text-teal-600 text-2xl font-bold"
                                    >
                                        ✕
                                    </button>
                                    <div className="flex justify-center items-center w-full mt-6 mb-4 px-4">
                                        <img
                                            src={selectedBlog.image}
                                            alt={selectedBlog.title}
                                            className="w-full max-w-[600px] sm:max-w-[700px] h-48 sm:h-60 object-cover rounded-2xl shadow-md"
                                        />
                                    </div>
                                    <div className="p-6 sm:p-8 text-left">
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                                            {selectedBlog.title}
                                        </h2>
                                        <p className="text-xs sm:text-sm text-gray-500 mb-5">
                                            {selectedBlog.date}
                                        </p>
                                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                                            {selectedBlog.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </section>
        </Element>
    );
}
