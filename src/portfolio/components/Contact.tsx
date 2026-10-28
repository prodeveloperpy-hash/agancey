import React, { useState } from "react";
import { Element } from "react-scroll";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.id]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("https://fiazhussain.vercel.app/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(`❌ ${data.error}`);
            }
        } catch (error) {
            console.error(error);
            setStatus("❌ Something went wrong. Try again!");
        }
    };

    return (
        <Element name="contact">
            <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Container */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Info */}
                        <div className="flex-1 bg-white rounded-2xl shadow-md border border-teal-100 p-2 sm:p-8">
                            <h1 className="text-teal-600 font-semibold text-2xl mb-2">
                                Contact Me
                            </h1>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Have a <span className="text-teal-600">Project</span> in Mind?
                            </h2>
                            <p className="text-gray-700 mb-6">
                                I'm available for both freelance and full-time roles. Feel free to
                                reach out. I usually respond within 24 hours.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-5">
                                {/* Email */}
                                <div className="flex items-center space-x-3">
                                    <div className="bg-teal-100 p-3 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-teal-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <a
                                            href="mailto:fiazhussain.dev@gmail.com"
                                            className="text-teal-600 hover:text-teal-700"
                                        >
                                            fiazhussain.dev@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center space-x-3">
                                    <div className="bg-teal-100 p-3 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-teal-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Phone</h3>
                                        <a
                                            href="tel:+923014881443"
                                            className="text-teal-600 hover:text-teal-700"
                                        >
                                            +92 301 4881443
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-3">
                                    <div className="bg-teal-100 p-3 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-teal-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Location</h3>
                                        <p className="text-gray-600">Lahore, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="flex-1 bg-white rounded-2xl shadow-md border border-teal-100 p-2 sm:p-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">
                                Send Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4  border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                                        placeholder="Type your message..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
                                >
                                    Send Message
                                </button>
                                <p className="text-center text-gray-700">{status}</p>
                            </form>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12">
                        <div className="bg-[#06867d] rounded-2xl p-6 text-white shadow-lg">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                                Ready to Start Your Project?
                            </h2>
                            <p className="mb-5 opacity-90">
                                Let’s bring your ideas to life with modern web technologies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href="mailto:fiazhussain.dev@gmail.com"
                                    className="bg-white text-teal-600 hover:bg-teal-100 font-semibold py-3 px-6 rounded-lg shadow transition-all"
                                >
                                    Email Me
                                </a>
                                <a
                                    href="tel:+923014881443"
                                    className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-3 px-6 rounded-lg shadow transition-all"
                                >
                                    Call Now
                                </a>
                                <a href="https://wa.me/923014881443"
                                    target="_blank"
                                    className="bg-green-900 border-2 border-amber-50 text-white px-4 py-3 rounded-lg hover:bg-green-700 lg:w-32 text-center">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
}
