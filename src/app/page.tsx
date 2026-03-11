"use client";

import { useState } from "react";
import Image from "next/image";

const INSTRUCTORS = [
  {
    name: "Coming Soon",
    title: "Pro Tour Player",
    specialty: "The Kitchen Game",
    emoji: "🏆",
  },
  {
    name: "Coming Soon",
    title: "National Champion",
    specialty: "Power & Pace",
    emoji: "⚡",
  },
  {
    name: "Coming Soon",
    title: "Top 10 Ranked",
    specialty: "Doubles Strategy",
    emoji: "🎯",
  },
  {
    name: "Coming Soon",
    title: "Certified Coach",
    specialty: "The Mental Game",
    emoji: "🧠",
  },
];

const CATEGORIES = [
  { label: "Dinking & Kitchen", icon: "🥒", count: "Coming Soon" },
  { label: "Serving & Return", icon: "🎾", count: "Coming Soon" },
  { label: "Doubles Strategy", icon: "🤝", count: "Coming Soon" },
  { label: "Bangers & Drives", icon: "💥", count: "Coming Soon" },
  { label: "Reset & Defense", icon: "🛡️", count: "Coming Soon" },
  { label: "Mental Game", icon: "🧘", count: "Coming Soon" },
];

const MARQUEE_ITEMS = [
  "🥒 Dink Smarter",
  "⚡ Crush the Drive",
  "🎯 Own the Kitchen",
  "🏆 Win More Matches",
  "💪 Train Like a Pro",
  "🔥 Master the ATP",
  "🧠 Outsmart Everyone",
  "🎾 Perfect Your Serve",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const marqueeText = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS].join("   •   ");

  return (
    <div className="min-h-screen bg-[#111111] text-white">

      {/* Announcement Bar */}
      <div className="bg-[#FFE600] text-[#111111] py-2.5 px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-widest">
          🎉 We&apos;re Launching Soon — Get Early Access &amp; Be First to Know
        </p>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#111111] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/pickleball.png" alt="Pickleball" width={36} height={36} />
            <div className="leading-none">
              <span className="font-black text-2xl tracking-tight uppercase text-white">
                Pickle
              </span>
              <span className="font-black text-2xl tracking-tight uppercase text-[#FFE600]">
                Instructions
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-[#999]">
            <span className="hover:text-white cursor-pointer transition-colors">Instructors</span>
            <span className="hover:text-white cursor-pointer transition-colors">Categories</span>
            <span className="hover:text-white cursor-pointer transition-colors">About</span>
          </div>
          <button className="btn-primary text-sm !py-2.5 !px-5">
            Get Early Access
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#FFE600]/5 blur-[140px] translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FFE600]/4 blur-[120px] -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="animate-fade-up section-label mb-5">
              The Home of Pickleball Instructionals
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-1 text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-none tracking-tight mb-6">
              Your Kitchen Game
              <br />
              is <span className="text-[#FFE600] italic">Cooked.</span>
              <br />
              <span className="text-[#666] text-4xl md:text-5xl xl:text-6xl not-italic font-black">
                Let&apos;s Fix That.
              </span>
            </h1>

            {/* Sub */}
            <p className="animate-fade-up-2 text-lg md:text-xl text-[#999] max-w-2xl mb-10 leading-relaxed">
              World-class pickleball instructionals from the pros who actually
              compete at the highest level. No fluff. No filler. Just the stuff
              that wins matches.
            </p>

            {/* Email capture */}
            <div className="animate-fade-up-3 max-w-lg">
              {submitted ? (
                <div className="border border-[#FFE600]/40 bg-[#FFE600]/10 rounded-md p-6 flex items-start gap-4">
                  <span className="text-3xl">🎉</span>
                  <div>
                    <p className="font-bold text-[#FFE600] text-lg mb-1">
                      You&apos;re locked in!
                    </p>
                    <p className="text-[#999] text-sm">
                      We&apos;ll hit your inbox the second we go live. Get your paddle ready.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-3.5 rounded-[4px] bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFE600]/60 transition-all text-sm"
                    />
                    <button type="submit" className="btn-primary !py-3.5">
                      Notify Me →
                    </button>
                  </form>
                  <p className="mt-2.5 text-[#555] text-xs">
                    No spam. Just pickleball. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#FFE600] py-3 overflow-hidden">
        <div className="animate-marquee inline-block text-[#111111] font-black uppercase text-sm tracking-widest">
          {marqueeText}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{marqueeText}
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-[#2a2a2a] bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 gap-8">
          {[
            { value: "36M+", label: "US Pickleball Players" },
            { value: "Top Pros", label: "Teaching You Directly" },
            { value: "0 BS", label: "Just Pure Game Improvement" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-4xl font-black text-[#FFE600] mb-1">
                {s.value}
              </div>
              <div className="text-[#666] text-xs md:text-sm uppercase tracking-wide font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Spotlight */}
      <section className="border-b border-[#2a2a2a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">Who&apos;s Teaching You</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase">
                Learn From the{" "}
                <span className="text-[#FFE600]">Best in the Game</span>
              </h2>
            </div>
            <p className="hidden md:block text-[#666] text-sm max-w-xs text-right leading-relaxed">
              We&apos;re signing the pros. Coming soon — and yes, they&apos;re legit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INSTRUCTORS.map((instructor, i) => (
              <div key={i} className="card-instructor cursor-pointer">
                {/* Placeholder photo area */}
                <div className="aspect-[3/4] bg-[#222] flex flex-col items-center justify-center gap-3 border-b border-[#2a2a2a]">
                  <span className="text-6xl opacity-40">{instructor.emoji}</span>
                  <span className="text-[#444] text-xs uppercase tracking-widest font-bold">
                    Instructor
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-[#FFE600] text-xs font-bold uppercase tracking-wide mb-1">
                    {instructor.specialty}
                  </div>
                  <div className="font-black text-base uppercase">{instructor.name}</div>
                  <div className="text-[#666] text-xs mt-0.5">{instructor.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-[#2a2a2a] py-16 md:py-20 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="section-label mb-2">What You&apos;ll Master</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              Every Part of Your Game,{" "}
              <span className="text-[#FFE600]">Covered</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[4px] hover:border-[#FFE600]/40 hover:bg-[#1f1f1f] transition-all cursor-pointer group"
              >
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <div className="font-bold text-sm md:text-base group-hover:text-[#FFE600] transition-colors">
                    {cat.label}
                  </div>
                  <div className="text-[#555] text-xs font-semibold uppercase tracking-wide mt-0.5">
                    {cat.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="border-b border-[#2a2a2a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Why PickleInstructions</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
                Pickleball is Exploding.
                <br />
                <span className="text-[#FFE600]">
                  Most People Still Suck.
                </span>
              </h2>
              <p className="text-[#999] text-lg leading-relaxed mb-8">
                YouTube rabbit holes, conflicting advice from your doubles
                partner, and one-size-fits-all clinics aren&apos;t cutting it.
                We&apos;re building the definitive library of instructionals —
                taught by players who actually compete at the highest level.
              </p>
              <button className="btn-primary">
                Join the Waitlist →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "🎯",
                  title: "No Filler Content",
                  desc: "Every minute teaches you something actionable. Pros don't waste your time.",
                },
                {
                  icon: "📹",
                  title: "HD Multi-Angle",
                  desc: "See exactly what the pros do — in slow motion, from every angle.",
                },
                {
                  icon: "🏆",
                  title: "Actual Pros",
                  desc: "Not coaches. Not influencers. Players who compete and win at the top level.",
                },
                {
                  icon: "⚡",
                  title: "Watch Anywhere",
                  desc: "On the couch, in the car, courtside. Your game waits for nobody.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[4px]"
                >
                  <span className="text-2xl block mb-3">{item.icon}</span>
                  <div className="font-bold text-sm mb-1.5">{item.title}</div>
                  <div className="text-[#666] text-xs leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#FFE600]/5" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Don&apos;t Get Left Behind</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            Get On the List
            <br />
            <span className="text-[#FFE600]">Before We Launch</span>
          </h2>
          <p className="text-[#777] text-lg mb-10 max-w-xl mx-auto">
            Early access members get first dibs on instructionals and exclusive
            launch pricing. Your opponents probably won&apos;t sign up.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 border border-[#FFE600]/40 bg-[#FFE600]/10 rounded-md px-8 py-5">
              <span className="text-2xl">✅</span>
              <span className="font-bold text-[#FFE600]">You&apos;re already on the list — nice moves.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-4 rounded-[4px] bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFE600]/60 transition-all text-sm"
              />
              <button type="submit" className="btn-primary">
                I&apos;m In →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2a] bg-[#0e0e0e] px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/pickleball.png" alt="Pickleball" width={28} height={28} />
            <span className="font-black text-lg uppercase tracking-tight">
              Pickle<span className="text-[#FFE600]">Instructions</span>
            </span>
          </div>
          <p className="text-[#444] text-sm">
            © {new Date().getFullYear()} PickleInstructions. All rights reserved.
          </p>
          <p className="text-[#444] text-xs uppercase tracking-widest font-semibold">
            pickleinstructions.com
          </p>
        </div>
      </footer>
    </div>
  );
}
