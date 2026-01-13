"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-black flex items-center justify-center px-4 ">
      <motion.section
        className="max-w-7xl w-full p-8 md:p-12 ]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Tag + title */}
        <motion.p
          variants={item}
          className="text-[11px] uppercase tracking-[0.35em] text-secondary mb-3"
        >
          Our Story
        </motion.p>

        <motion.h1
          variants={item}
          className="text-2xl md:text-4xl text-primary font-semibold leading-tight mb-4"
        >
          RedLife makes your everyday{" "}
          <span className="text-secondary">health decisions</span> simple,
          clear, and trackable.
        </motion.h1>

        {/* Short intro */}
        <motion.p variants={item} className="text-sm leading-relaxed mb-6 ">
          RedLife shudhu ekta tracker na, etar focus holo daily choto choto
          health decision—sleep, food, movement, hydration—ke ek place e
          visualize kore tomake smarter choice nite help kora. Data ase clean
          dashboard e, overwhelming chart na, jate tumi easily bujhte paro tumi
          kothay darao.
        </motion.p>

        {/* Key metrics / highlight row */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 "
        >
          <StatCard label="Daily habits logged" value="12K+" />
          <StatCard label="Active streaks" value="3.4K+" />
          <StatCard label="Avg. retention" value="87%" />
          <StatCard label="Countries" value="25+" />
        </motion.div>

        {/* 2-column section */}
        <motion.div
          variants={item}
          className="grid md:grid-cols-[1.4fr,1fr] gap-8 md:gap-10 items-start"
        >
          {/* Left side: mission + how it helps */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-50">
              Why we started RedLife
            </h2>
            <p className="text-sm md:text-[15px]  leading-relaxed">
              Health app anek ache, kintu onek shomoy ora shudhu number dekhay,
              context dey na. RedLife banano hoyeche lifestyle‑first mindset
              diye, jekhane tumi dekhta parbe kon habit actually impact
              ditchhe—long term energy, focus, sleep quality, mood, sob kichur
              upor.
            </p>
            <p className="text-sm md:text-[15px]  leading-relaxed">
              Amarader system daily input ke meaningful insight e convert kore:
              smart reminder, gentle nudge, ebong simple visualization diye jate
              burn‑out chara sustainable routine build kora jay.
            </p>

            <ul className="grid md:grid-cols-2 gap-3 pt-1">
              <BulletItem title="Habit loops">
                Micro‑habits + streak system diye consistent routine create.
              </BulletItem>
              <BulletItem title="Health signals">
                Sleep, mood, movement, water—key metrics e quick snapshot.
              </BulletItem>
              <BulletItem title="Smart reminders">
                Context‑aware notification, na overly spammy, na fully silent.
              </BulletItem>
              <BulletItem title="Privacy first">
                Your health data encrypted & fully under your control.
              </BulletItem>
            </ul>
          </div>

          {/* Right side: themed info card */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 230, damping: 18 }}
            className="rounded-xl  bg-primary/20 md:p-6 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-primaryrounded-full blur-3xl" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-2">
              The RedLife principle
            </p>
            <h3 className="text-base md:text-lg text-secondary font-semibold mb-2">
              One dashboard for your real‑life health.
            </h3>
            <p className="text-xs md:text-sm  leading-relaxed mb-4">
              Instead of jumping between multiple apps, RedLife ekta unified
              timeline dey jekhane tumi daily entries, trends, ebong highlight
              moments ek sathe dekhta parbe. Designed for busy people who still
              care about long‑term well‑being.
            </p>

            <div className="space-y-2 text-xs md:text-xs">
              <FeatureRow label="Best for">
                Students, professionals, creators, and anyone rebuilding
                routine.
              </FeatureRow>
              <FeatureRow label="Platform">
                Web‑first experience, fast and responsive on desktop & mobile.
              </FeatureRow>
              <FeatureRow label="Next on roadmap">
                Wearable sync, mood journaling, and team / family spaces.
              </FeatureRow>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}

function StatCard({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-xl bg-primary/20 px-4 py-3 flex flex-col"
    >
      <span className="text-xs text-primary">{label}</span>
      <span className="text-lg font-semibold text-secondary">{value}</span>
    </motion.div>
  );
}

function BulletItem({ title, children }) {
  return (
    <li className="rounded-xl bg-primary/20 px-3 py-3">
      <p className="text-xs font-semibold text-primary">{title}</p>
      <p className="text-[11px]  mt-1">{children}</p>
    </li>
  );
}

function FeatureRow({ label, children }) {
  return (
    <div className="flex gap-2">
      <span className="text-xs uppercase tracking-[0.18em] text-primary mt-1 shrink-0">
        {label}
      </span>
      <p className="text-xs">{children}</p>
    </div>
  );
}
