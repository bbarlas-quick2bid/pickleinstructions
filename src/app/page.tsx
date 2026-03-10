"use client";

import { useState } from "react";

const FEATURES = [
  {
    icon: "🎯",
    title: "Pro-Level Technique",
    description:
      "Step-by-step breakdowns of every shot — dink, drive, reset, ATP — taught by touring pros.",
  },
  {
    icon: "🧠",
    title: "Mental Game & Strategy",
    description:
      "Win more by thinking smarter. Learn pattern recognition, court positioning, and match IQ.",
  },
  {
    icon: "📹",
    title: "HD Video Instructionals",
    description:
      "Multi-angle, slow-motion footage so you can see exactly what the best players do differently.",
  },
  {
    icon: "⚡",
    title: "Any Level, Any Goal",
    description:
      "From 3.0 to 5.0+, we'll have content built for where you are and where you want to go.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0f14] text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#0d0f14]/80 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥒</span>
          <span className="font-bold text-lg tracking-tight">
            Pickle<span className="text-lime-400">Instructions</span>
          </span>
        </div>
        <div className="text-sm text-lime-400 font-medium px-3 py-1 rounded-full border border-lime-400/30 bg-lime-400/10">
          Coming Soon
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-lime-500/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-lime-700/10 blur-[100px]" />
        </div>

        {/* Floating balls */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: "15%", left: "8%", delay: "0s", size: "40px" },
            { top: "70%", left: "5%", delay: "1.5s", size: "28px" },
            { top: "25%", right: "10%", delay: "0.8s", size: "36px" },
            { top: "65%", right: "7%", delay: "2.2s", size: "44px" },
            { top: "45%", left: "3%", delay: "3s", size: "22px" },
            { top: "80%", right: "15%", delay: "1s", size: "32px" },
          ].map((ball, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                top: ball.top,
                left: ball.left,
                right: (ball as { right?: string }).right,
                animationDelay: ball.delay,
                fontSize: ball.size,
              }}
            >
              🎾
            </div>
          ))}
        </div>

        {/* Badge */}
        <div className="animate-fade-up relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          The #1 destination for pickleball instructionals is almost here
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 relative z-10 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl mb-6">
          Stop Guessing.
          <br />
          <span className="shimmer-text">Start Dominating.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 relative z-10 text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
          Premium pickleball instructionals from the world&apos;s top pros.
          Master every shot, strategy, and mental edge — on your schedule.
        </p>

        {/* Email capture */}
        <div className="animate-fade-up-delay-3 relative z-10 w-full max-w-md">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-lime-400/10 border border-lime-400/30">
              <span className="text-4xl">🎉</span>
              <p className="font-semibold text-lime-400 text-lg">
                You&apos;re on the list!
              </p>
              <p className="text-white/60 text-sm">
                We&apos;ll notify you the moment we launch. Get ready to level up.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/20 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-lime-400/20"
              >
                Notify Me
              </button>
            </form>
          )}
          {!submitted && (
            <p className="mt-3 text-white/30 text-xs">
              No spam. Unsubscribe anytime. We launch soon.
            </p>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="relative px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-lime-400">go pro</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Built for players who are serious about improving — not just playing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-lime-400/30 hover:bg-lime-400/5 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 border-y border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: "36.5M+", label: "Pickleball players in the US" },
            { value: "#1", label: "Fastest growing sport in America" },
            { value: "∞", label: "Room to improve your game" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-5xl font-extrabold text-lime-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-lime-500/[0.08] blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to <span className="text-lime-400">level up?</span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Join thousands of players getting early access. Be first to know when we go live.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-lime-400/20"
          >
            Get Early Access <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/5 text-center text-white/20 text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span>🥒</span>
          <span className="font-semibold text-white/40">PickleInstructions</span>
        </div>
        <p>© {new Date().getFullYear()} PickleInstructions. All rights reserved.</p>
      </footer>
    </div>
  );
}
