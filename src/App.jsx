import React, { useMemo, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calendar,
  Check,
  ChevronDown,
  Phone,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const cx = (...c) => c.filter(Boolean).join(" ");

// Optimized animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const Container = ({ className = "", children }) => (
  <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>
);

const Card = ({ className = "", children, hover = true }) => (
  <motion.div
    className={cx(
      "rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur",
      className
    )}
    whileHover={hover ? { 
      scale: 1.01,
      borderColor: "rgba(255,255,255,0.15)",
      transition: { duration: 0.2 }
    } : undefined}
  >
    {children}
  </motion.div>
);

const Pill = ({ icon: Icon, children, delay = 0 }) => (
  <motion.div 
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {Icon ? <Icon className="h-3.5 w-3.5 text-white/70" /> : null}
    <span>{children}</span>
  </motion.div>
);

const IconBadge = ({ icon: Icon }) => (
  <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06]">
    <Icon className="h-5 w-5 text-emerald-200/90" />
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <motion.div 
    className="mx-auto max-w-3xl text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {eyebrow ? (
      <motion.div 
        className="mb-3 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Sparkles className="h-4 w-4 text-emerald-300/80" />
<span className="text-base font-medium tracking-wide text-emerald-200/80">{eyebrow}</span>      </motion.div>
    ) : null}
    <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
    {subtitle ? (
      <p className="mt-3 text-pretty text-sm leading-relaxed text-white/70 sm:text-base">{subtitle}</p>
    ) : null}
  </motion.div>
);

const Stat = ({ label, value, delay = 0 }) => (
  <motion.div 
    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ 
      scale: 1.02,
      borderColor: "rgba(16,185,129,0.3)",
      transition: { duration: 0.2 }
    }}
  >
    <div className="text-xs text-white/60">{label}</div>
    <div className="mt-1 text-lg font-semibold text-white">{value}</div>
  </motion.div>
);

/** Plumbing-style "pipe flow" animation (SVG + Framer Motion) - Optimized */
function PipeFlow({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      className={cx("relative overflow-hidden rounded-3xl border border-white/10 bg-black/30", className)}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div 
        aria-hidden 
        className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/25 via-cyan-400/20 to-indigo-500/25 blur-3xl"
        animate={shouldReduceMotion ? {} : { 
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div aria-hidden className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-indigo-500/18 via-sky-500/14 to-emerald-400/18 blur-3xl" />

      <div className="relative p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">Plexura Plumbing Growth System</div>
            <div className="mt-1 text-xs text-white/60">Visual: "flow" of traffic → calls → booked jobs</div>
          </div>
          <Pill icon={Zap}>Conversion-first</Pill>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="text-sm font-semibold text-white">From visibility to booked work</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              We set the foundation (GBP + local SEO), build demand (content + ads), and capture leads with high-end
              creative, landing pages, and tracking.
            </p>
            <motion.div 
              className="mt-4 flex flex-wrap gap-2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <Pill icon={MapPin} delay={0.1}>GBP + Local</Pill>
              <Pill icon={PenTool} delay={0.2}>Campaign Creative</Pill>
              <Pill icon={Users} delay={0.3}>Social Mgmt</Pill>
              <Pill icon={BarChart3} delay={0.4}>Reporting</Pill>
            </motion.div>
          </div>

          {/* Animated SVG - Optimized with CSS will-change */}
          <div className="lg:col-span-5">
            <svg viewBox="0 0 520 220" className="h-[160px] w-full" style={{ willChange: 'auto' }}>
              <defs>
                <linearGradient id="pipeStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(16,185,129,0.0)" />
                  <stop offset="25%" stopColor="rgba(16,185,129,0.85)" />
                  <stop offset="55%" stopColor="rgba(34,211,238,0.85)" />
                  <stop offset="85%" stopColor="rgba(99,102,241,0.85)" />
                  <stop offset="100%" stopColor="rgba(99,102,241,0.0)" />
                </linearGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* base pipe */}
              <path
                d="M20,160 C120,30 200,210 300,90 C360,20 430,40 500,120"
                fill="none"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="16"
                strokeLinecap="round"
              />
              {/* animated flow - optimized for performance */}
              <motion.path
                d="M20,160 C120,30 200,210 300,90 C360,20 430,40 500,120"
                fill="none"
                stroke="url(#pipeStroke)"
                strokeWidth="10"
                strokeLinecap="round"
                filter="url(#softGlow)"
                strokeDasharray="36 18"
                initial={{ strokeDashoffset: 0 }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : { strokeDashoffset: -180 }
                }
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 3, repeat: Infinity, ease: "linear" }
                }
              />

              {/* endpoints with pulse animation */}
              <motion.circle 
                cx="20" 
                cy="160" 
                r="10" 
                fill="rgba(16,185,129,0.7)"
                animate={shouldReduceMotion ? {} : { 
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="500" 
                cy="120" 
                r="10" 
                fill="rgba(99,102,241,0.7)"
                animate={shouldReduceMotion ? {} : { 
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* labels */}
              <text x="18" y="195" fontSize="11" fill="rgba(255,255,255,0.6)">
                Traffic
              </text>
              <text x="458" y="195" fontSize="11" fill="rgba(255,255,255,0.6)">
                Booked
              </text>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const FAQItem = ({ q, a, index = 0 }) => {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur transition-colors"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        backgroundColor: "rgba(255,255,255,0.06)",
        borderColor: "rgba(255,255,255,0.15)"
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-white">{q}</div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown className="h-4 w-4 text-white/60" />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 text-sm leading-relaxed text-white/70">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

// Animated Logo Component
const AnimatedLogo = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div 
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Glow effect behind logo */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/30 via-cyan-400/20 to-indigo-500/30 blur-xl"
          animate={shouldReduceMotion ? {} : {
            opacity: [0.4, 0.7, 0.4],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <img
          src="/logo.png"
          alt="Plexura"
          className="relative h-16 w-auto object-contain sm:h-[72px] drop-shadow-[0_16px_40px_rgba(16,185,129,0.2)]"
        />
      </motion.div>
      <div className="leading-tight">
        <motion.div 
          className="text-base font-semibold tracking-tight"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Plexura
        </motion.div>
        <motion.div 
          className="text-sm text-white/60"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Digital Marketing • Web Design • Brand Strategy
        </motion.div>
      </div>
    </motion.div>
  );
};

// Service Card with stagger animation
const ServiceCard = ({ icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
  >
    <Card className="p-6 h-full">
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <IconBadge icon={icon} />
        </motion.div>
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-white/70">{desc}</div>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/60">
            <Check className="h-4 w-4 text-emerald-200/90" />
            Built for local plumbing intent
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
);

// Animated Button Component
const AnimatedButton = ({ href, variant = "primary", children, className = "" }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all";
  const variants = {
    primary: "bg-white text-black shadow-[0_14px_45px_rgba(255,255,255,0.08)]",
    secondary: "border border-white/10 bg-white/[0.04] text-white/90 backdrop-blur",
  };

  return (
    <motion.a
      href={href}
      className={cx(baseStyles, variants[variant], className)}
      whileHover={{ 
        scale: 1.03,
        boxShadow: variant === "primary" 
          ? "0 20px 50px rgba(255,255,255,0.12)" 
          : "0 10px 30px rgba(255,255,255,0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
};

export default function PlexuraPlumbingMarketingLanding() {
  const shouldReduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: MapPin,
      title: "Google Business Profile Optimization",
      desc: "Categories, services, posts, photos, Q&A, UTM tracking, and a review system so you rank and convert in Maps.",
    },
    {
      icon: Users,
      title: "Social Media Management",
      desc: "Consistent posts built from your services, FAQs, and real jobs — designed to build trust and drive inquiries.",
    },
    {
      icon: PenTool,
      title: "Campaign Image Design",
      desc: "Enterprise-level creative for promos, seasonal offers, and reputation building (Facebook/IG/LinkedIn).",
    },
    {
      icon: Search,
      title: "Local SEO Foundations",
      desc: "On-page SEO, service pages, internal linking, and local intent keyword strategy (built for plumbers).",
    },
    {
      icon: MonitorSmartphone,
      title: "Landing Pages & Websites",
      desc: "Conversion-focused pages for ads and Maps traffic. Fast, premium design with clear call-first layout.",
    },
    {
      icon: BarChart3,
      title: "Tracking & Reporting",
      desc: "GA4, UTMs, call/form events, and simple reporting so you know what produces calls and booked jobs.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* BACKGROUND */}
      <div className="relative isolate overflow-hidden">
        {/* Animated glow orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-24 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/25 via-cyan-400/20 to-indigo-500/25 blur-3xl"
            animate={shouldReduceMotion ? {} : {
              x: ["-50%", "-48%", "-52%", "-50%"],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-300/20 via-teal-400/15 to-sky-500/20 blur-3xl"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-56 left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/15 to-emerald-400/20 blur-3xl"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 0.95, 1.05, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* NAV */}
        <Container className="relative z-10">
          <motion.div 
            className="flex items-center justify-between py-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedLogo />

            <motion.div 
              className="hidden items-center gap-7 md:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {["Services", "Packages", "Process", "FAQ"].map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm text-white/70 transition-colors hover:text-white"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}

              <AnimatedButton href="#contact">
                Book a 15-min call <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
            </motion.div>

            <motion.button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/80 backdrop-blur"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.95 }}
            >
              Menu
            </motion.button>
          </motion.div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                className="md:hidden mb-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid gap-3 text-sm">
                  {["Services", "Packages", "Process", "FAQ"].map((item, i) => (
                    <motion.a 
                      key={item}
                      href={`#${item.toLowerCase()}`} 
                      className="text-white/80 hover:text-white" 
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-black"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Book a 15-min call <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>

        {/* HERO */}
        <Container className="relative z-10 pb-14 pt-6 sm:pt-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <Pill icon={MapPin} delay={0}>GBP Optimization</Pill>
                <Pill icon={Megaphone} delay={0.1}>Social Management</Pill>
                <Pill icon={PenTool} delay={0.2}>Campaign Design</Pill>
                <Pill icon={TrendingUp} delay={0.3}>Local Growth</Pill>
              </motion.div>

              <motion.h1 
                className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Digital marketing for{" "}
                <motion.span 
                  className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent"
                  animate={shouldReduceMotion ? {} : {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  plumbing companies
                </motion.span>{" "}
                that want more calls — not vanity metrics.
              </motion.h1>

              <motion.p 
                className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Plexura helps plumbers dominate local search, look premium online, and turn traffic into booked jobs with
                GBP optimization, high-end content, campaign creative, and conversion-focused landing pages.
              </motion.p>

              <motion.div 
                className="mt-6 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedButton href="#contact">
                  Get a quote <ArrowRight className="h-4 w-4" />
                </AnimatedButton>
                <AnimatedButton href="#packages" variant="secondary">
                  View packages <BadgeCheck className="h-4 w-4 text-emerald-200/90" />
                </AnimatedButton>
              </motion.div>

              <motion.div 
                className="mt-7 grid gap-3 sm:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Stat label="Offer" value="Local growth system" delay={0.5} />
                <Stat label="Focus" value="Calls + booked jobs" delay={0.6} />
                <Stat label="Timeline" value="Launch in days" delay={0.7} />
              </motion.div>

              <motion.div 
                className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {[
                  { icon: ShieldCheck, text: "Clean, enterprise design" },
                  { icon: MonitorSmartphone, text: "Mobile-first conversion UX" },
                  { icon: BarChart3, text: "Tracking + reporting" },
                ].map((item, i) => (
                  <motion.div 
                    key={item.text}
                    className="inline-flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  >
                    <item.icon className="h-4 w-4 text-emerald-200/80" />
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <PipeFlow />
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      {/* SERVICES */}
      <section id="services" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="What we do"
            title="Get you found. Get you more calls. Get you booked."
            subtitle="A complete marketing system designed to turn searches into paying customers."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="Simple packages"
            title="Packages that grow with your business"
            subtitle=""
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {/* Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Foundation</div>
                  <Pill icon={Zap}>Fast impact</Pill>
                </div>
                <motion.div 
                  className="mt-3 text-3xl font-semibold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  $499 <span className="text-sm font-medium text-white/60">/mo</span>
                </motion.div>
                <div className="mt-1 text-sm text-white/70">Perfect for plumbers who want visibility + trust.</div>

                <div className="mt-5 space-y-2 text-sm text-white/75">
                  {[
                    "GBP optimization (monthly updates)",
                    "4 campaign-quality posts / month",
                    "Review request system setup",
                    "Monthly performance snapshot",
                  ].map((t, i) => (
                    <motion.div 
                      key={t} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    >
                      <Check className="mt-0.5 h-4 w-4 text-emerald-200/90" />
                      <span>{t}</span>
                    </motion.div>
                  ))}
                </div>

                <AnimatedButton href="#contact" className="mt-6 w-full">
                  Get Foundation <ArrowRight className="h-4 w-4" />
                </AnimatedButton>
              </Card>
            </motion.div>

            {/* Growth (featured) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="relative p-6 h-full" hover={false}>
                <motion.div 
                  aria-hidden 
                  className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-emerald-400/25 via-cyan-400/20 to-indigo-500/25 blur-lg"
                  animate={shouldReduceMotion ? {} : {
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Growth</div>
                    <Pill icon={TrendingUp}>Most popular</Pill>
                  </div>
                  <motion.div 
                    className="mt-3 text-3xl font-semibold"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    $999 <span className="text-sm font-medium text-white/60">/mo</span>
                  </motion.div>
                  <div className="mt-1 text-sm text-white/70">For plumbers running promos & needing lead capture.</div>

                  <div className="mt-5 space-y-2 text-sm text-white/75">
                    {[
                      "Everything in Foundation",
                      "8 posts / month + 2 premium creatives",
                      "1 conversion landing page (initial build)",
                      "GA4 + UTMs + lead event tracking",
                      "Monthly strategy + reporting call",
                    ].map((t, i) => (
                      <motion.div 
                        key={t} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                      >
                        <Check className="mt-0.5 h-4 w-4 text-emerald-200/90" />
                        <span>{t}</span>
                      </motion.div>
                    ))}
                  </div>

                  <AnimatedButton href="#contact" className="mt-6 w-full">
                    Get Growth <ArrowRight className="h-4 w-4" />
                  </AnimatedButton>

                  <div className="mt-4 text-xs text-white/55">
                   
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Authority */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Authority</div>
                  <Pill icon={BarChart3}>Scale</Pill>
                </div>
                <motion.div 
                  className="mt-3 text-3xl font-semibold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  $1,999 <span className="text-sm font-medium text-white/60">/mo</span>
                </motion.div>
                <div className="mt-1 text-sm text-white/70">For multi-service or multi-location plumbing brands.</div>

                <div className="mt-5 space-y-2 text-sm text-white/75">
                  {[
                    "Everything in Growth",
                    "2 landing pages or location variants",
                    "Local SEO service page strategy",
                    "Quarterly brand creative refresh",
                    "Advanced reporting (channels + ROI signals)",
                  ].map((t, i) => (
                    <motion.div 
                      key={t} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    >
                      <Check className="mt-0.5 h-4 w-4 text-emerald-200/90" />
                      <span>{t}</span>
                    </motion.div>
                  ))}
                </div>

                <AnimatedButton href="#contact" className="mt-6 w-full">
                  Get Authority <ArrowRight className="h-4 w-4" />
                </AnimatedButton>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="mt-8 text-center text-sm text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Want to add ads later? We can layer on Google Ads/LSA once tracking + landing pages are solid.
          </motion.div>
        </Container>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="How it works"
            title="Here's exactly how it works"
            subtitle="A clear process from day one — fast turnaround, real results, and full visibility into what's working."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <Card className="p-6">
                <div className="text-sm font-semibold text-white">Launch timeline</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { day: "Day 1", title: "Intake + positioning", icon: Calendar, desc: "Services, service area, offers, differentiators." },
                    { day: "Day 2", title: "GBP + content plan", icon: MapPin, desc: "Optimize profile, map-pack priorities, posting cadence." },
                    { day: "Day 3", title: "Campaign creative", icon: PenTool, desc: "Premium designs + post themes for trust." },
                    { day: "Day 4", title: "Landing page + tracking", icon: BarChart3, desc: "Conversion layout + UTMs/GA4 events." },
                    { day: "Day 5", title: "QA + launch", icon: BadgeCheck, desc: "Final polish, speed checks, reporting baseline." },
                    { day: "Ongoing", title: "Optimize & scale", icon: TrendingUp, desc: "Iterate what converts, expand service pages." },
                  ].map((s, i) => (
                    <motion.div 
                      key={s.title} 
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      whileHover={{ 
                        borderColor: "rgba(16,185,129,0.3)",
                        backgroundColor: "rgba(255,255,255,0.06)"
                      }}
                    >
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <s.icon className="h-4 w-4 text-emerald-200/80" />
                        {s.day}
                      </div>
                      <div className="mt-1 text-sm font-semibold">{s.title}</div>
                      <div className="mt-1 text-sm text-white/70">{s.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <Card className="p-6">
                <div className="text-sm font-semibold text-white">What you'll measure</div>
                <div className="mt-4 space-y-3 text-sm text-white/75">
                  {[
                    { icon: Phone, text: "Calls + form submissions (conversion events)" },
                    { icon: MapPin, text: "Maps visibility + actions (calls, direction taps)" },
                    { icon: BarChart3, text: "Channel attribution (UTMs, GA4 events)" },
                    { icon: Megaphone, text: "Campaign engagement + trust signals" },
                  ].map((m, i) => (
                    <motion.div 
                      key={m.text} 
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      whileHover={{ 
                        borderColor: "rgba(16,185,129,0.3)",
                        scale: 1.02
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconBadge icon={m.icon} />
                      </motion.div>
                      <div>
                        <div className="text-sm font-semibold">{m.text}</div>
                        <div className="mt-1 text-sm text-white/70">
                          No fluff — just signals tied to real lead generation.
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="Objections handled"
            title="FAQ"
            subtitle="Everything you need to know before getting started."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <FAQItem
              index={0}
              q="Do you guarantee #1 rankings or a specific number of leads?"
              a="We don't guarantee rankings. We optimize visibility and conversion, install tracking, then iterate based on data. That's how growth becomes predictable."
            />
            <FAQItem
              index={1}
              q="We already have a website — why would we need landing pages?"
              a="Landing pages are built for one goal: convert traffic from specific offers (drain cleaning, water heaters, emergency) into calls/forms. Homepages usually convert less for paid/local-intent traffic."
            />
            <FAQItem
              index={2}
              q="What do you need from us to start?"
              a="Service list, service area, phone, business details, a few photos, and any existing reviews. If you don't have content, we create a clean starting set and build consistency."
            />
            <FAQItem
              index={3}
              q="How fast can we start?"
              a="We can usually start immediately. The first 5 days are setup + baseline (GBP, creative direction, landing + tracking). Then we move into monthly execution and optimization."
            />
          </div>
        </Container>
      </section>

      {/* CONTACT */}
<section id="contact" className="relative py-16">
  <Container>
    <SectionTitle
      eyebrow="Let's talk"
      title="Request a Quote Now!"
      subtitle="Free, no-obligation quote tailored to your business."
    />

    <div className="mt-10 grid gap-5 lg:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-7"
      >
        <Card className="p-6" hover={false}>
          <form action="https://formspree.io/f/mnjvlgjw" method="POST">
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0 }}
              >
                <label className="text-xs text-white/60">Name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/10"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                <label className="text-xs text-white/60">Business</label>
                <input
                  name="business"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/10"
                  placeholder="Plumbing company"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16 }}
              >
                <label className="text-xs text-white/60">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/10"
                  placeholder="(###) ###-####"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.24 }}
              >
                <label className="text-xs text-white/60">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/10"
                  placeholder="you@company.com"
                />
              </motion.div>
            </div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <label className="text-xs text-white/60">What do you want more of?</label>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/10"
                placeholder="Example: more calls from Google Maps + consistent social proof + a landing page for drain cleaning..."
              />
            </motion.div>

            <button
              type="submit"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-emerald-400"
            >
              Request pricing <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-3 text-xs text-white/55">
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-5"
      >
        <Card className="p-6">
          <div className="text-sm font-semibold">Direct contact</div>
          <div className="mt-3 space-y-3 text-sm text-white/75">
            {[
              { icon: Phone, text: "Phone: (801) 347-8072" },
              { icon: MapPin, text: "Las Vegas • Utah • Remote" },
              { icon: BadgeCheck, text: "Design + marketing execution" },
            ].map((item, i) => (
              <motion.div 
                key={item.text}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                <item.icon className="h-4 w-4 text-emerald-200/90" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-sm font-semibold">What we'll send back</div>
            <div className="mt-3 space-y-2 text-sm text-white/75">
              {[
                "A quick audit snapshot (GBP + site + social)",
                "A recommended package + timeline",
                "Optional: a preview concept for your offer",
              ].map((t, i) => (
                <motion.div 
                  key={t} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                >
                  <Check className="mt-0.5 h-4 w-4 text-emerald-200/90" />
                  <span>{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-6 text-xs text-white/55">
            
          </div>
        </Card>
      </motion.div>
    </div>
  </Container>
</section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 bg-black py-10">
        {/* subtle animated gradient strip */}
        <motion.div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-300/60 to-indigo-500/0"
          animate={shouldReduceMotion ? {} : { 
            opacity: [0.35, 0.8, 0.35],
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={shouldReduceMotion ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundSize: "200% 100%" }}
        />
        <Container>
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <motion.img 
                src="/logo.png" 
                alt="Plexura" 
                className="h-16 w-auto opacity-90"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <div className="text-sm text-white/70">
                <span className="font-semibold text-white">Plexura</span> • GBP Optimization • Social Media Management • Campaign Design • Web & Development
              </div>
            </div>
            <div className="text-xs text-white/50">© {new Date().getFullYear()} Plexura. All rights reserved.</div>
          </motion.div>
        </Container>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
        <motion.div 
          className="pointer-events-auto border-t border-white/10 bg-black/70 backdrop-blur"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Container className="py-3">
            <div className="flex gap-3">
              <motion.a
                href="tel:+18013478072"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/90"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-4 w-4 text-emerald-200/90" /> Call
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get quote <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </Container>
        </motion.div>
      </div>
    </div>
  );
}