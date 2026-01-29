import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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

const Container = ({ className = "", children }) => (
  <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>
);

const Card = ({ className = "", children }) => (
  <div
    className={cx(
      "rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur",
      className
    )}
  >
    {children}
  </div>
);

const Pill = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    {Icon ? <Icon className="h-3.5 w-3.5 text-white/70" /> : null}
    <span>{children}</span>
  </div>
);

const IconBadge = ({ icon: Icon }) => (
  <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06]">
    <Icon className="h-5 w-5 text-emerald-200/90" />
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow ? (
      <div className="mb-3 flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 text-emerald-300/80" />
        <span className="text-xs font-medium tracking-wide text-emerald-200/80">{eyebrow}</span>
      </div>
    ) : null}
    <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
    {subtitle ? (
      <p className="mt-3 text-pretty text-sm leading-relaxed text-white/70 sm:text-base">{subtitle}</p>
    ) : null}
  </div>
);

const Stat = ({ label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
    <div className="text-xs text-white/60">{label}</div>
    <div className="mt-1 text-lg font-semibold text-white">{value}</div>
  </div>
);

/** Plumbing-style “pipe flow” animation (SVG + Framer Motion) */
function PipeFlow({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cx("relative overflow-hidden rounded-3xl border border-white/10 bg-black/30", className)}>
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
      <div aria-hidden className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/25 via-cyan-400/20 to-indigo-500/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-indigo-500/18 via-sky-500/14 to-emerald-400/18 blur-3xl" />

      <div className="relative p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">Plexura Plumbing Growth System</div>
            <div className="mt-1 text-xs text-white/60">Visual: “flow” of traffic → calls → booked jobs</div>
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
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill icon={MapPin}>GBP + Local</Pill>
              <Pill icon={PenTool}>Campaign Creative</Pill>
              <Pill icon={Users}>Social Mgmt</Pill>
              <Pill icon={BarChart3}>Reporting</Pill>
            </div>
          </div>

          {/* Animated SVG */}
          <div className="lg:col-span-5">
            <svg viewBox="0 0 520 220" className="h-[160px] w-full">
              <defs>
                <linearGradient id="pipeStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(16,185,129,0.0)" />
                  <stop offset="25%" stopColor="rgba(16,185,129,0.85)" />
                  <stop offset="55%" stopColor="rgba(34,211,238,0.85)" />
                  <stop offset="85%" stopColor="rgba(99,102,241,0.85)" />
                  <stop offset="100%" stopColor="rgba(99,102,241,0.0)" />
                </linearGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
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
              {/* animated flow */}
              <motion.path
                d="M20,160 C120,30 200,210 300,90 C360,20 430,40 500,120"
                fill="none"
                stroke="url(#pipeStroke)"
                strokeWidth="10"
                strokeLinecap="round"
                filter="url(#softGlow)"
                strokeDasharray="36 18"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        strokeDashoffset: [0, -180],
                        opacity: [0.75, 0.95, 0.75],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 4.8, repeat: Infinity, ease: "linear" }
                }
              />

              {/* endpoints */}
              <circle cx="20" cy="160" r="10" fill="rgba(16,185,129,0.7)" />
              <circle cx="500" cy="120" r="10" fill="rgba(99,102,241,0.7)" />

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
    </div>
  );
}

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur transition hover:bg-white/[0.06]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-white">{q}</div>
        <ChevronDown className={cx("h-4 w-4 text-white/60 transition", open && "rotate-180")} />
      </div>
      {open ? <div className="mt-3 text-sm leading-relaxed text-white/70">{a}</div> : null}
    </button>
  );
};

export default function PlexuraPlumbingMarketingLanding() {
  const shouldReduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const motionDefaults = useMemo(
    () => ({
      initial: shouldReduceMotion ? false : { opacity: 0, y: 14 },
      whileInView: shouldReduceMotion ? {} : { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
    [shouldReduceMotion]
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* BACKGROUND */}
      <div className="relative isolate overflow-hidden">
        {/* glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/25 via-cyan-400/20 to-indigo-500/25 blur-3xl" />
          <div className="absolute -bottom-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-300/20 via-teal-400/15 to-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-56 left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/15 to-emerald-400/20 blur-3xl" />
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
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
             <img
  src="/logo-png.png"
  alt="Plexura"
  className="h-20 w-auto drop-shadow-[0_12px_30px_rgba(16,185,129,0.14)]"
/>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">Plexura</div>
                <div className="text-xs text-white/60">Digital Marketing • Web • Dev</div>
              </div>
            </div>

            <div className="hidden items-center gap-7 md:flex">
              <a href="#services" className="text-sm text-white/70 hover:text-white">Services</a>
              <a href="#packages" className="text-sm text-white/70 hover:text-white">Packages</a>
              <a href="#process" className="text-sm text-white/70 hover:text-white">Process</a>
              <a href="#faq" className="text-sm text-white/70 hover:text-white">FAQ</a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Book a 15-min call <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/[0.06]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>

          {menuOpen ? (
            <div className="md:hidden mb-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
              <div className="grid gap-3 text-sm">
                <a href="#services" className="text-white/80 hover:text-white" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#packages" className="text-white/80 hover:text-white" onClick={() => setMenuOpen(false)}>Packages</a>
                <a href="#process" className="text-white/80 hover:text-white" onClick={() => setMenuOpen(false)}>Process</a>
                <a href="#faq" className="text-white/80 hover:text-white" onClick={() => setMenuOpen(false)}>FAQ</a>
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a 15-min call <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ) : null}
        </Container>

        {/* HERO */}
        <Container className="relative z-10 pb-14 pt-6 sm:pt-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <motion.div className="lg:col-span-7" {...motionDefaults}>
              <div className="flex flex-wrap gap-2">
                <Pill icon={MapPin}>GBP Optimization</Pill>
                <Pill icon={Megaphone}>Social Management</Pill>
                <Pill icon={PenTool}>Campaign Design</Pill>
                <Pill icon={TrendingUp}>Local Growth</Pill>
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Digital marketing for{" "}
                <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                  plumbing companies
                </span>{" "}
                that want more calls — not vanity metrics.
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                Plexura helps plumbers dominate local search, look premium online, and turn traffic into booked jobs with
                GBP optimization, high-end content, campaign creative, and conversion-focused landing pages.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_14px_45px_rgba(255,255,255,0.08)] transition hover:bg-white/90"
                >
                  Get a quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/[0.06]"
                >
                  View packages <BadgeCheck className="h-4 w-4 text-emerald-200/90" />
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <Stat label="Offer" value="Local growth system" />
                <Stat label="Focus" value="Calls + booked jobs" />
                <Stat label="Timeline" value="Launch in days" />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-200/80" />
                  Clean, enterprise design
                </div>
                <div className="inline-flex items-center gap-2">
                  <MonitorSmartphone className="h-4 w-4 text-emerald-200/80" />
                  Mobile-first conversion UX
                </div>
                <div className="inline-flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-emerald-200/80" />
                  Tracking + reporting
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            title="Everything a plumbing business needs to get found and convert"
            subtitle="Productized services with high-end creative, tight execution, and tracking so you can measure what’s working."
          />

          <motion.div className="mt-10" {...motionDefaults}>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
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
              ].map((s) => (
                <Card key={s.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <IconBadge icon={s.icon} />
                    <div>
                      <div className="text-sm font-semibold text-white">{s.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-white/70">{s.desc}</div>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/60">
                        <Check className="h-4 w-4 text-emerald-200/90" />
                        Built for local plumbing intent
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="Simple packages"
            title="Start small, then scale into a full growth system"
            subtitle="You can sell these as fixed offers on cold calls. Swap pricing to match your market."
          />

          <motion.div className="mt-10" {...motionDefaults}>
            <div className="grid gap-5 lg:grid-cols-3">
              {/* Foundation */}
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Foundation</div>
                  <Pill icon={Zap}>Fast impact</Pill>
                </div>
                <div className="mt-3 text-3xl font-semibold">
                  $499 <span className="text-sm font-medium text-white/60">/mo</span>
                </div>
                <div className="mt-1 text-sm text-white/70">Perfect for plumbers who want visibility + trust.</div>

                <div className="mt-5 space-y-2 text-sm text-white/75">
                  {[
                    "GBP optimization (monthly updates)",
                    "8 campaign-quality posts / month",
                    "Review request system setup",
                    "Monthly performance snapshot",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-200/90" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get Foundation <ArrowRight className="h-4 w-4" />
                </a>
              </Card>

              {/* Growth (featured) */}
              <Card className="relative p-6">
                <div aria-hidden className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-emerald-400/25 via-cyan-400/20 to-indigo-500/25 blur-lg" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Growth</div>
                    <Pill icon={TrendingUp}>Most popular</Pill>
                  </div>
                  <div className="mt-3 text-3xl font-semibold">
                    $1,499 <span className="text-sm font-medium text-white/60">/mo</span>
                  </div>
                  <div className="mt-1 text-sm text-white/70">For plumbers running promos & needing lead capture.</div>

                  <div className="mt-5 space-y-2 text-sm text-white/75">
                    {[
                      "Everything in Foundation",
                      "12 posts / month + 2 premium creatives",
                      "1 conversion landing page (initial build)",
                      "GA4 + UTMs + lead event tracking",
                      "Monthly strategy + reporting call",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-emerald-200/90" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    Get Growth <ArrowRight className="h-4 w-4" />
                  </a>

                  <div className="mt-4 text-xs text-white/55">
                    Tip: sell as “marketing + creative + tracking” in one package.
                  </div>
                </div>
              </Card>

              {/* Authority */}
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Authority</div>
                  <Pill icon={BarChart3}>Scale</Pill>
                </div>
                <div className="mt-3 text-3xl font-semibold">
                  $2,999 <span className="text-sm font-medium text-white/60">/mo</span>
                </div>
                <div className="mt-1 text-sm text-white/70">For multi-service or multi-location plumbing brands.</div>

                <div className="mt-5 space-y-2 text-sm text-white/75">
                  {[
                    "Everything in Growth",
                    "2 landing pages or location variants",
                    "Local SEO service page strategy",
                    "Quarterly brand creative refresh",
                    "Advanced reporting (channels + ROI signals)",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-200/90" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get Authority <ArrowRight className="h-4 w-4" />
                </a>
              </Card>
            </div>

            <div className="mt-8 text-center text-sm text-white/60">
              Want to add ads later? We can layer on Google Ads/LSA once tracking + landing pages are solid.
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="How it works"
            title="A tight process that looks enterprise and delivers fast"
            subtitle="This is what you tell plumbers on calls: clear steps, fast turnaround, measurable outputs."
          />

          <motion.div className="mt-10" {...motionDefaults}>
            <div className="grid gap-5 lg:grid-cols-12">
              <Card className="p-6 lg:col-span-7">
                <div className="text-sm font-semibold text-white">Launch timeline</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { day: "Day 1", title: "Intake + positioning", icon: Calendar, desc: "Services, service area, offers, differentiators." },
                    { day: "Day 2", title: "GBP + content plan", icon: MapPin, desc: "Optimize profile, map-pack priorities, posting cadence." },
                    { day: "Day 3", title: "Campaign creative", icon: PenTool, desc: "Premium designs + post themes for trust." },
                    { day: "Day 4", title: "Landing page + tracking", icon: BarChart3, desc: "Conversion layout + UTMs/GA4 events." },
                    { day: "Day 5", title: "QA + launch", icon: BadgeCheck, desc: "Final polish, speed checks, reporting baseline." },
                    { day: "Ongoing", title: "Optimize & scale", icon: TrendingUp, desc: "Iterate what converts, expand service pages." },
                  ].map((s) => (
                    <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <s.icon className="h-4 w-4 text-emerald-200/80" />
                        {s.day}
                      </div>
                      <div className="mt-1 text-sm font-semibold">{s.title}</div>
                      <div className="mt-1 text-sm text-white/70">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 lg:col-span-5">
                <div className="text-sm font-semibold text-white">What you’ll measure</div>
                <div className="mt-4 space-y-3 text-sm text-white/75">
                  {[
                    { icon: Phone, text: "Calls + form submissions (conversion events)" },
                    { icon: MapPin, text: "Maps visibility + actions (calls, direction taps)" },
                    { icon: BarChart3, text: "Channel attribution (UTMs, GA4 events)" },
                    { icon: Megaphone, text: "Campaign engagement + trust signals" },
                  ].map((m) => (
                    <div key={m.text} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <IconBadge icon={m.icon} />
                      <div>
                        <div className="text-sm font-semibold">{m.text}</div>
                        <div className="mt-1 text-sm text-white/70">
                          No fluff — just signals tied to real lead generation.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="Objections handled"
            title="FAQ"
            subtitle="Keep it confident. Don’t overpromise — show process, quality, and tracking."
          />

          <motion.div className="mt-10 grid gap-4 lg:grid-cols-2" {...motionDefaults}>
            <FAQItem
              q="Do you guarantee #1 rankings or a specific number of leads?"
              a="We don’t guarantee rankings. We optimize visibility and conversion, install tracking, then iterate based on data. That’s how growth becomes predictable."
            />
            <FAQItem
              q="We already have a website — why would we need landing pages?"
              a="Landing pages are built for one goal: convert traffic from specific offers (drain cleaning, water heaters, emergency) into calls/forms. Homepages usually convert less for paid/local-intent traffic."
            />
            <FAQItem
              q="What do you need from us to start?"
              a="Service list, service area, phone, business details, a few photos, and any existing reviews. If you don’t have content, we create a clean starting set and build consistency."
            />
            <FAQItem
              q="How fast can we start?"
              a="We can usually start immediately. The first 5 days are setup + baseline (GBP, creative direction, landing + tracking). Then we move into monthly execution and optimization."
            />
          </motion.div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="Let’s talk"
            title="Get a quote for plumbing growth"
            subtitle="Replace the placeholders with your Plexura phone/email. Connect the form to your backend (Formspree, Next API route, etc.)."
          />

          <motion.div className="mt-10" {...motionDefaults}>
            <div className="grid gap-5 lg:grid-cols-12">
              <Card className="p-6 lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-white/60">Name</label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-emerald-300/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60">Business</label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-emerald-300/40"
                      placeholder="Plumbing company"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60">Phone</label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-emerald-300/40"
                      placeholder="(###) ###-####"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60">Email</label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-emerald-300/40"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-xs text-white/60">What do you want more of?</label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-emerald-300/40"
                    placeholder="Example: more calls from Google Maps + consistent social proof + a landing page for drain cleaning..."
                  />
                </div>

                <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Request pricing <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-3 text-xs text-white/55">
                  This template is UI-only. Hook up your preferred form backend when deploying.
                </div>
              </Card>

              <Card className="p-6 lg:col-span-5">
                <div className="text-sm font-semibold">Direct contact</div>
                <div className="mt-3 space-y-3 text-sm text-white/75">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-emerald-200/90" />
                    <span>Replace: (###) ###-####</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-200/90" />
                    <span>Las Vegas • Utah • Remote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-emerald-200/90" />
                    <span>Design + marketing execution</span>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5">
                  <div className="text-sm font-semibold">What we’ll send back</div>
                  <div className="mt-3 space-y-2 text-sm text-white/75">
                    {[
                      "A quick audit snapshot (GBP + site + social)",
                      "A recommended package + timeline",
                      "Optional: a preview concept for your offer",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-emerald-200/90" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-xs text-white/55">
                  Host suggestion: <span className="text-white/70">plumbing.plexura.net</span>
                </div>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 bg-black py-10">
        {/* subtle animated gradient strip */}
        <motion.div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-300/60 to-indigo-500/0"
          animate={shouldReduceMotion ? {} : { opacity: [0.35, 0.8, 0.35] }}
          transition={shouldReduceMotion ? {} : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
<img
  src="/logo-png.png"
  alt="Plexura"
  className="h-20 w-auto drop-shadow-[0_12px_30px_rgba(16,185,129,0.14)]"
/>              <div className="text-sm text-white/70">
                <span className="font-semibold text-white">Plexura</span> • GBP Optimization • Social Media Management • Campaign Design • Web & Development
              </div>
            </div>
            <div className="text-xs text-white/50">© {new Date().getFullYear()} Plexura. All rights reserved.</div>
          </div>
        </Container>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div className="pointer-events-auto border-t border-white/10 bg-black/70 backdrop-blur">
          <Container className="py-3">
            <div className="flex gap-3">
              <a
                href="tel:+10000000000"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/90"
              >
                <Phone className="h-4 w-4 text-emerald-200/90" /> Call
              </a>
              <a
                href="#contact"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black"
              >
                Get quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}