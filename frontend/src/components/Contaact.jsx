"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:p-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto mb-16">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content"
          >
            GET IN <span className="text-primary">CONTACT</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 h-1 bg-linear-to-r from-primary to-secondary mx-auto"
          />
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 bg-base-200 p-8 sm:p-10 rounded-2xl shadow-2xl shadow-primary/40 border border-base-content/10"
          >
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">
                SEND A MESSAGE
              </h2>
              <p className="text-base-content/70">
                Have a question or want to work together? Fill out the form
                below and I will get back to you as soon as possible.
              </p>
            </div>

            <form
              action="https://formsubmit.co/omarfaruk.codes69@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit config */}
              <input
                type="hidden"
                name="_subject"
                value="New Submission from Contact Page"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://style-decor-client.vercel.app/contact"
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name*"
                className="w-full px-4 py-3 bg-base-100 border border-base-content/20 rounded-lg outline-none focus:ring-2 focus:ring-primary/50"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email*"
                className="w-full px-4 py-3 bg-base-100 border border-base-content/20 rounded-lg outline-none focus:ring-2 focus:ring-primary/50"
              />

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Your Message*"
                className="w-full px-4 py-3 bg-base-100 border border-base-content/20 rounded-lg outline-none resize-none focus:ring-2 focus:ring-primary/50"
              />

              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Submit Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-base-200 p-8 sm:p-10 rounded-2xl shadow-2xl shadow-primary/40 border border-base-content/10"
          >
            <h3 className="text-2xl font-bold text-base-content mb-8 border-b border-base-content/10 pb-4">
              Contact Info
            </h3>

            <ul className="space-y-8">
              <li className="flex items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <FaMapMarkerAlt className="text-3xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Address</h4>
                  <p className="text-base-content/70">
                    Mirpur, Dhaka, Bangladesh
                  </p>
                </div>
              </li>

              <li>
                <h4 className="font-bold text-xl mb-6">Connect With Me</h4>
                <div className="flex gap-5">
                  <SocialLink
                    href="https://github.com/omarfaruk21221"
                    icon={<FaGithub />}
                  />
                  <SocialLink
                    href="https://www.facebook.com/omarfaruk21221"
                    icon={<FaFacebook />}
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/omarfaruk21221"
                    icon={<FaLinkedin />}
                  />
                  <SocialLink
                    href="https://wa.me/8801768838715"
                    icon={<FaWhatsapp />}
                  />
                </div>
              </li>
            </ul>
          </motion.div>
        </main>
      </div>
    </section>
  );
}

/* Reusable Social Icon */
function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-base-100 rounded-full text-xl hover:scale-110 hover:bg-primary hover:text-white transition-all shadow-md"
    >
      {icon}
    </a>
  );
}
