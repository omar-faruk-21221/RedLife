"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaHeart,
  FaTint,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

/* Animation variants */
const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.12,
    transition: { type: "spring", stiffness: 280, damping: 18 },
  },
};

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="show"
      className="
        relative overflow-hidden
        footer footer-horizontal footer-center
        bg-linear-to-br from-base-200 via-base-300 to-base-200
        px-6 py-12
        border-t border-base-content/10
        backdrop-blur-xl
      "
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
      <main className="flex flex-col md:flex-row md:max-w-7xl mx-auto w-full justify-between items-center gap-10">
        {/* Brand / meaning */}
        <aside className="relative space-y-3 text-left">
          <div className="flex items-center gap-3 ">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 6 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="
              relative flex h-12 w-12 items-center justify-center
              rounded-2xl
              bg-linear-to-tr from-secondary to-accent
              text-secondary-content
              shadow-lg shadow-secondary/40
            "
            >
              <FaTint className="text-2xl" />
              <FaHeart className="absolute -bottom-1 -right-1 text-xs text-white" />
            </motion.div>

            <div>
              <p className="font-bold text-lg leading-tight">
                RedLife
                <span className="block text-xs font-normal opacity-80">
                  Donate blood, share life
                </span>
              </p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-sm opacity-90">
              RedLife ekta community-driven platform, jekhane verified donor,
              receiver ebong volunteer ra ek sathe connect hoy. Emergency blood
              need ke fast, safe ebong transparent kore tola amader main goal.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs mt-4">
              <div className="rounded-xl bg-base-content/5 px-3 py-2 backdrop-blur">
                <p className="font-semibold text-sm">For donors</p>
                <p className="opacity-80">
                  Nearby request, reminder, streak system diye regular donation
                  habit.
                </p>
              </div>

              <div className="rounded-xl bg-base-content/5 px-3 py-2 backdrop-blur">
                <p className="font-semibold text-sm">For receivers</p>
                <p className="opacity-80">
                  Filter by group, location, last donated date & verified
                  profile.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Social links */}
        <aside className="relative mt-6 md:mt-0">
          <div className="grid grid-flow-col gap-4">
            {[
              { icon: FaFacebook, label: "Facebook" },
              { icon: FaTwitter, label: "Twitter" },
              { icon: FaYoutube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                aria-label={`RedLife on ${label}`}
                className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                bg-base-content/5
                hover:bg-secondary hover:text-secondary-content
                transition-colors
                backdrop-blur
              "
              >
                <Icon className="text-lg" />
              </motion.a>
            ))}
          </div>

          <p className="mt-3 text-[11px] opacity-70">
            Stay updated with blood camps, donor meetups & impact stories.
          </p>
        </aside>
      </main>
      <span className="divider-secondary "></span>
      <div>
        <motion.p className="text-md opacity-70">
          © {new Date().getFullYear()} RedLife. Built with care using your theme
          colors.
        </motion.p>
      </div>
    </motion.footer>
  );
}
