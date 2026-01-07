import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-800 dark:text-white">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out
          to me using the form below or through my social media.
        </p>

        <form
          onSubmit={handleSubmit}
          method="POST"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-12"
        >
          <input
            type="hidden"
            name="access_key"
            value="9654d61f-1c42-4d30-a5be-5fd59dc34138"
          />

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-gray-600 dark:text-gray-300 text-md mb-1">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full px-3 py-2.5 text-sm bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 text-gray-300"
                    placeholder="Sara"
                  />
                </div>

                <div>
                  <label className="text-gray-600 dark:text-gray-300 text-md mb-1">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-3 py-2.5 text-sm bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 text-gray-300"
                    placeholder="Ekanayake"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-600 dark:text-gray-300 text-md mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 text-sm bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 text-gray-300"
                    placeholder="sara@gmail.com"
                  />
                </div>

                <div>
                  <label className="text-gray-600 dark:text-gray-300 text-md mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-3 py-2.5 text-sm bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 text-gray-300"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 dark:text-gray-300 text-md mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-3 py-6 text-sm bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 text-gray-300"
                placeholder="Your message here..."
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-3 text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md hover:opacity-90 transition shadow-md mt-4"
              >
                Send Message
              </button>
              {result && <p className="text-green-400 mt-2">{result}</p>}
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-full lg:w-[350px] bg-gray-200 dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-950 dark:bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-envelope text-white "></i>
                  </div>
                  <div>
                    <h4 className=" font-medium text-gray-700 dark:text-gray-300">Email</h4>
                    <a
                      href="mailto:ttharindiattanayaka@gmail.com"
                      className="text-indigo-500 dark:text-indigo-400 text-md hover:text-indigo-300 transition"
                    >
                      ttharindiattanayaka@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-950 dark:bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-phone text-white "></i>
                  </div>
                  <div>
                    <h4 className="text-gray-700 dark:text-gray-300 font-medium">Phone</h4>
                    <a
                      href="tel:+94710328089"
                      className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-300 transition"
                    >
                      +94 71 0328089
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-950 dark:bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-map-marker-alt text-white "></i>
                  </div>
                  <div>
                    <h4 className="text-gray-700 dark:text-gray-300 font-medium">Location</h4>
                    <p className="text-indigo-500 dark:text-indigo-400">Kurunegala</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-4">Social Media</h4>
                  <div className="flex space-x-4">
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
                    />
                    <a
                      href="https://www.linkedin.com/in/tharindi-aththanayaka-06a489313/"
                      className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <i className="fa-brands fa-linkedin-in text-white"></i>
                    </a>
                    <a
                      href="https://github.com/tharindi22"
                      className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <i className="fa-brands fa-github text-white"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61553104328803"
                      className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <i className="fa-brands fa-facebook text-white"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/tharindi_attanayaka/"
                      className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <i className="fa-brands fa-instagram text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
