"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initial: string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    number: "01",
    title: "Brand Design",
    description:
      "We build brand identities that command attention — from logo and visual language to brand guidelines that scale.",
    tags: ["Logo", "Identity", "Guidelines"],
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Fast, conversion-focused websites built with modern technology. We design and develop sites that turn visitors into clients.",
    tags: ["Next.js", "Webflow", "WordPress"],
  },
  {
    number: "03",
    title: "SEO",
    description:
      "Data-led search optimisation that puts your business in front of the right people at the right time.",
    tags: ["On-Page", "Technical", "Content"],
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Strategy, content creation, and community management across platforms that matter to your audience.",
    tags: ["Instagram", "LinkedIn", "Meta Ads"],
  },
  {
    number: "05",
    title: "Email Marketing",
    description:
      "High-converting email campaigns and automated sequences that nurture leads and retain customers.",
    tags: ["Flows", "Campaigns", "Automation"],
  },
  {
    number: "06",
    title: "Copywriting",
    description:
      "Words that sell. From website copy and landing pages to ad scripts and blog content.",
    tags: ["Web Copy", "Ads", "Content"],
  },
  {
    number: "07",
    title: "Audience Analytics",
    description:
      "We decode your audience data to reveal what is working, what is not, and exactly where to invest next.",
    tags: ["GA4", "Reporting", "Insights"],
  },
  {
    number: "08",
    title: "Team Training",
    description:
      "We upskill your internal team in digital marketing so you are never dependent on an agency for basics.",
    tags: ["Workshops", "Mentoring", "Playbooks"],
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Linkclick did not just redesign our website — they rebuilt how we think about our online presence. Within 3 months our leads doubled.",
    author: "Ibrahim D.",
    role: "CEO",
    company: "LIPS",
    initial: "I",
  },
  {
    quote:
      "Working with the Linkclick team felt different from day one. They asked the right questions and delivered results, not just deliverables.",
    author: "Marwa A.",
    role: "CEO",
    company: "Embassy Capital",
    initial: "M",
  },
  {
    quote:
      "Our social media presence went from non-existent to generating real inbound enquiries. The ROI is undeniable.",
    author: "Sarah K.",
    role: "Founder",
    company: "Bloom Studio",
    initial: "S",
  },
  {
    quote:
      "The SEO work alone paid back their fee in the first month. Straightforward, data-driven, and no fluff.",
    author: "James R.",
    role: "Director",
    company: "Meridian Finance",
    initial: "J",
  },
];

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Brands Grown" },
  { value: 300, suffix: "%", label: "Average Traffic Lift" },
  { value: 8, suffix: "", label: "Services, One Roof" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const clientNames = [
  "LIPS",
  "Embassy Capital",
  "Bloom Studio",
  "Meridian Finance",
  "Kinetic",
  "Volta Group",
  "Arco Creative",
  "Northside Co.",
];

// ─── Utilities ────────────────────────────────────────────────────────────────

// CSS-based scroll reveal — renders visible on server/SSR, animates on client.
// This works correctly with Playwright, crawlers, and JS-disabled browsers.
// The element starts visible (no hidden state), then gets the "reveal" class
// applied which resets to opacity-0/translateY and transitions to visible.
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

function useCountUp(target: number, inView: boolean) {
  // Start at target so SSR/no-JS always shows the real number
  const [count, setCount] = useState(target);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    setCount(0); // reset to 0 then animate up
    let current = 0;
    const steps = 60;
    const increment = Math.ceil(target / steps);
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 1800 / steps);
    return () => clearInterval(interval);
  }, [inView, target]);
  return count;
}

// Hero/Nav still use Framer Motion for load animations (always visible on arrival)
const heroFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
// Wraps a section and manages data-reveal state. Children with .reveal-child
// start visible (SSR-safe), then animate in when scrolled into view.
function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, revealed } = useScrollReveal();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    // Mark as "pending" immediately on mount (hides children for animation)
    setPending(true);
  }, []);

  const revealState = !pending ? undefined : revealed ? "done" : "pending";

  return (
    <div ref={ref} data-reveal={revealState} className={className}>
      {children}
    </div>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Results", "About", "Contact"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e0e0e]/90 backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-bold text-[15px] tracking-tight text-[#f5f3ef]">
            Linkclick Digital
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium text-[#737373] hover:text-[#f5f3ef] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13px] font-semibold transition-all duration-200 hover:scale-[1.03]"
          >
            Book a Free Call
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#737373]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-px bg-current mb-1.5" />
          <div className="w-5 h-px bg-current mb-1.5" />
          <div className="w-3 h-px bg-current" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0e0e0e] border-t border-white/8 px-6 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[15px] font-medium text-[#737373] hover:text-[#f5f3ef] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#2563eb] text-white text-[14px] font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16 lg:pt-24 lg:pb-20">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(29, 78, 216, 0.03) 50%, rgba(37, 99, 235, 0.02) 100%)",
          animation: "gradient-shift 12s ease-in-out infinite",
        }}
      />
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-[0.18]"
          style={{
            background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
            animation: "mesh-drift 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #1d4ed8 0%, transparent 70%)",
            animation: "mesh-drift-2 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            animation: "mesh-drift 14s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          className="text-[clamp(40px,7vw,88px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#f5f3ef] mb-6"
        >
          A smarter approach
          <br />
          <span className="text-[#2563eb]">to digital growth.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
          className="text-[clamp(16px,2vw,20px)] text-[#737373] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We are multi-channel marketers and strategists who grow profits, not
          just clicks. Built for small and medium businesses ready to compete
          smarter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[15px] font-semibold transition-all duration-200 hover:scale-[1.03]"
            style={{ boxShadow: "0 0 0 0 rgba(37,99,235,0)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 28px rgba(37,99,235,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(37,99,235,0)")
            }
          >
            Book a Free Strategy Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-[#f5f3ef] text-[15px] font-semibold hover:bg-white/5 transition-all duration-200"
          >
            Our Services
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ color: ["#333", "#666", "#333"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10px] uppercase tracking-widest"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#333] to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────

function TrustBar() {
  // Triple so the seamless loop works at all viewport widths
  const tripled = [...clientNames, ...clientNames, ...clientNames];
  return (
    <section className="border-y border-white/8 py-5 overflow-hidden">
      <div className="flex" aria-hidden="true">
        <div className="flex items-center gap-10 animate-marquee whitespace-nowrap shrink-0">
          {tripled.map((name, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold text-[#737373] uppercase tracking-widest select-none px-2"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Problem / Solution ───────────────────────────────────────────────────────

function ProblemSolutionSection() {
  const pillars = [
    {
      icon: "◈",
      title: "The bigger picture",
      body: "We examine your entire business before we touch a single campaign. Strategy first, always.",
    },
    {
      icon: "◎",
      title: "Data without the jargon",
      body: "You will always know exactly what we are doing, why, and what it is producing — in plain language.",
    },
    {
      icon: "◐",
      title: "Results you can measure",
      body: "Revenue, leads, conversions. We agree on what success looks like before we start, then we hit it.",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        <Reveal>
          <div className="reveal-child">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2563eb] mb-5">
              The Problem
            </p>
            <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-[#f5f3ef] mb-6">
              Most agencies chase metrics.
              <br />
              <span className="text-[#424242]">We chase profit.</span>
            </h2>
            <p className="text-[17px] text-[#737373] leading-relaxed">
              Vanity metrics look great in reports. But if your phone is not ringing
              and your revenue is not growing, what is the point? Too many agencies
              optimise for clicks and impressions — then disappear when you ask
              about real results.
            </p>
          </div>
        </Reveal>

        <Reveal className="space-y-4">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="reveal-child flex gap-5 p-5 rounded-2xl border border-white/6 hover:border-white/10 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <span className="text-[#2563eb] text-xl mt-0.5 shrink-0">{item.icon}</span>
              <div>
                <p className="text-[15px] font-semibold text-[#f5f3ef] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#737373] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-14 lg:py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-10 lg:mb-14">
          <div className="reveal-child">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2563eb] mb-4">
              Services
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-4">
              <h2 className="text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-[#f5f3ef] max-w-md">
                Eight services.
                <br />
                One mission.
              </h2>
              <p className="text-[15px] lg:text-[16px] text-[#737373] max-w-xs leading-relaxed">
                Everything a growing business needs to compete online, under one roof.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-white/8" />

        <Reveal>
          {services.map((service, i) => (
            <div
              key={service.number}
              className="reveal-child border-b border-white/8 cursor-pointer select-none"
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="py-5 lg:py-7 flex items-start gap-4 lg:gap-6">
                <span className="text-[11px] font-semibold text-[#2a2a2a] font-mono mt-1 shrink-0 w-6 lg:w-8">
                  {service.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className="text-[18px] lg:text-[22px] font-bold transition-colors duration-200"
                      style={{ color: open === i ? "#2563eb" : "#f5f3ef" }}
                    >
                      {service.title}
                    </h3>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="text-[#2a2a2a] text-lg shrink-0 mt-0.5"
                    >
                      +
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.26, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[14px] lg:text-[15px] text-[#737373] leading-relaxed mt-3 mb-4 max-w-xl">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-1">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-[11px] font-semibold rounded-full border text-[#2563eb]"
                              style={{ borderColor: "rgba(37,99,235,0.3)" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function StatCard({ stat, inView }: { stat: Stat; inView: boolean }) {
  const count = useCountUp(stat.value, inView);
  return (
    <div className="reveal-child text-center flex flex-col items-center justify-center py-2">
      <p className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-tight text-[#f5f3ef] leading-none mb-2">
        {count}
        <span className="text-[#2563eb]">{stat.suffix}</span>
      </p>
      <p className="text-[12px] lg:text-[13px] text-[#575757] font-medium leading-snug">
        {stat.label}
      </p>
    </div>
  );
}

function StatsSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 px-6 lg:px-10 border-y border-white/8"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <Reveal className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} inView={revealed} />
        ))}
      </Reveal>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section id="results" className="py-16 lg:py-28 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-10 lg:mb-14 text-center">
          <div className="reveal-child">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2563eb] mb-4">
              Client Stories
            </p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight text-[#f5f3ef]">
              Results that speak.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="reveal-child">
            <div
              className="p-6 lg:p-14 rounded-3xl border border-white/8 min-h-[200px] lg:min-h-[260px] flex flex-col justify-between"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span
                    className="text-[64px] leading-none font-serif select-none"
                    style={{ color: "rgba(37,99,235,0.3)" }}
                  >
                    &ldquo;
                  </span>
                  <p className="text-[clamp(16px,2.2vw,22px)] font-medium text-[#f5f3ef] leading-relaxed mt-2 mb-8">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-[14px] font-bold shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#f5f3ef]">{t.author}</p>
                      <p className="text-[12px] text-[#575757]">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "2rem" : "0.375rem",
                    background: i === active ? "#2563eb" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
        <Reveal>
          <div className="reveal-child">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2563eb] mb-5">
              Get Started
            </p>
            <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-[#f5f3ef] mb-6">
              Ready to grow
              <br />
              smarter?
            </h2>
            <p className="text-[17px] text-[#737373] leading-relaxed mb-10">
              Book a free 30-minute strategy call. No pitch, no pressure — just an
              honest conversation about your business and what we can do for it.
            </p>
            <div className="space-y-4">
              {[
                { label: "Email", value: "hello@linkclickdigital.com", href: "mailto:hello@linkclickdigital.com" },
                { label: "Website", value: "linkclickdigital.com", href: "https://linkclickdigital.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-[11px] font-semibold text-[#333] w-16 shrink-0 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <a href={item.href} className="text-[15px] text-[#f5f3ef] hover:text-[#2563eb] transition-colors duration-200">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="reveal-child">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-12 rounded-3xl border border-white/8"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(37,99,235,0.15)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#f5f3ef] mb-2">Message sent!</h3>
                <p className="text-[15px] text-[#737373]">We will be in touch within one business day.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8 lg:p-10 rounded-3xl border border-white/8"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  animation: "form-glow 3s ease-in-out infinite",
                  boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)"
                }}
              >
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Alex Johnson", required: true },
                  { name: "email", label: "Email", type: "email", placeholder: "alex@company.com", required: true },
                  { name: "phone", label: "Phone (optional)", type: "tel", placeholder: "+44 7700 000000", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-[12px] font-semibold text-[#575757] mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[12px] font-semibold text-[#575757] mb-1.5">
                    What are you looking to achieve?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business and goals..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[15px] font-semibold transition-all duration-200 hover:scale-[1.02] mt-2"
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(37,99,235,0.35)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const footerLinks: Record<string, string[]> = {
    Services: [
      "Brand Design",
      "Web Development",
      "SEO",
      "Social Media",
      "Email Marketing",
      "Copywriting",
    ],
    Company: ["About Us", "Client Reviews", "Contact"],
    Legal: ["Privacy Policy", "Complaint Policy"],
  };

  return (
    <footer className="border-t border-white/8 pt-12 lg:pt-16 pb-8 lg:pb-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Brand — full width on mobile, col-span-1 on desktop */}
        <div className="mb-10 lg:hidden">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L7 4L11 8L7 12L3 8Z" fill="white" />
                <path d="M7 8L11 4L15 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-bold text-[15px] text-[#f5f3ef]">Linkclick Digital</span>
          </div>
          <p className="text-[13px] text-[#424242] leading-relaxed">
            Data-driven digital marketing and web design for growing businesses.
          </p>
        </div>

        {/* Links grid — 3 cols on mobile, 4 on desktop (includes brand) */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10 mb-12 lg:mb-16">
          {/* Brand col — desktop only */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L7 4L11 8L7 12L3 8Z" fill="white" />
                  <path d="M7 8L11 4L15 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-bold text-[15px] text-[#f5f3ef]">Linkclick Digital</span>
            </div>
            <p className="text-[13px] text-[#424242] leading-relaxed max-w-[200px]">
              Data-driven digital marketing and web design for growing businesses.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <p className="text-[10px] lg:text-[11px] font-semibold text-[#2a2a2a] uppercase tracking-widest mb-3 lg:mb-4">
                {group}
              </p>
              <ul className="space-y-2 lg:space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12px] lg:text-[13px] text-[#424242] hover:text-[#f5f3ef] transition-colors duration-200 leading-snug block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] lg:text-[12px] text-[#2a2a2a] text-center sm:text-left">
            &copy; {new Date().getFullYear()} Linkclick Digital. All rights reserved.
          </p>
          <p className="text-[11px] lg:text-[12px] text-[#2a2a2a]">
            hello@linkclickdigital.com
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <HeroSection />
      <TrustBar />
      <ProblemSolutionSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
