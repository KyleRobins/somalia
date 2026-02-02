"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  HandHeart,
  Leaf,
  Users,
  GraduationCap,
  Droplets,
  Sprout,
  Scale,
  Globe,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const programs = [
  {
    title: "Development of Civil Society",
    icon: Users,
    description:
      "We strengthen communities by building the capacity of local civil society organizations and community-based groups through:",
    points: [
      "Organizational development and leadership training",
      "Advocacy for marginalized groups",
      "Women’s empowerment and youth engagement",
      "Peacebuilding and reconciliation initiatives",
      "Rights-based approaches to development"
    ],
    note: "Our goal is to help communities become strong, organized, and self-advocating."
  },
  {
    title: "Inclusive Education & Special Needs Education (SNE)",
    icon: GraduationCap,
    description:
      "GRDO is a pioneer of Inclusive Education focusing on Special Needs Education in Somalia.",
    points: [
      "Expanding access to inclusive education for children with disabilities",
      "Supporting national education policies and curricula on inclusion",
      "Training teachers and education stakeholders",
      "Advocating nationally for the rights of children with special needs"
    ],
    note:
      "This program has earned strong trust from communities and recognition at the national level."
  },
  {
    title: "Humanitarian Interventions",
    icon: Droplets,
    description: "GRDO delivers emergency and large-scale humanitarian assistance, particularly in:",
    points: [
      "Water, sanitation, and hygiene (WASH)",
      "Food security and nutrition",
      "Emergency response in fragile and crisis-affected areas"
    ],
    note:
      "Our humanitarian work follows Sphere Standards and aligns with international humanitarian principles."
  },
  {
    title: "Sustainable Innovation & Livelihoods (Hydroponic Initiatives)",
    icon: Sprout,
    description:
      "GRDO integrates innovation into development through sustainable food and livelihood solutions, including:",
    points: [
      "Hydroponic and water-efficient agriculture systems",
      "Community training and capacity building",
      "Climate-resilient food production models",
      "Renewable energy and water-saving technologies"
    ],
    note:
      "These initiatives support food security, environmental sustainability, and income generation."
  }
];

const values = [
  { title: "Human Dignity & Inclusion", icon: HandHeart, note: "No one is left behind." },
  { title: "Integrity & Accountability", icon: ShieldCheck, note: "Ethical action and donor trust." },
  { title: "Collaborative Leadership", icon: HeartHandshake, note: "Shared responsibility and growth." },
  { title: "Compassionate Advocacy", icon: Globe, note: "Action-oriented empathy." },
  { title: "Justice & Equity", icon: Scale, note: "Challenging systemic inequality." }
];

const partnerships = [
  "Local NGOs and Community-Based Organizations (CBOs)",
  "Women and youth associations",
  "Government authorities",
  "International humanitarian and development partners"
];

const regions = ["Southwest State", "Jubaland", "Puntland", "Galmudug", "Banadir Region"];

const governance = [
  "General Assembly – Supreme authority",
  "Board of Directors – Oversight and policy leadership",
  "Executive Committee – Strategic coordination",
  "Programme Team – Implementation of major projects",
  "Partnership Team – Civil society and stakeholder engagement"
];

const accountability = [
  "Annual General Assembly meetings",
  "Independent audits",
  "Transparent reporting to stakeholders and partners"
];

const advocacy = [
  "The rights of marginalized and vulnerable populations",
  "Inclusive education and disability rights",
  "Gender equality and women’s empowerment",
  "Peace, justice, and sustainable development"
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Values", href: "#values" },
  { label: "Governance", href: "#governance" },
  { label: "Advocacy", href: "#advocacy" },
  { label: "Contact", href: "#contact" }
];

const heroImages = [
  "https://images.unsplash.com/photo-1634571965334-0c8ec2604bfb?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1800&q=80"
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#f6f2ea] text-[#182321]">
      <section id="home" className="relative isolate overflow-hidden bg-[#0f231e] text-white">
        <div className="hero-slider">
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Community support"
              fill
              priority={index === 0}
              className={`hero-slide hero-slide--${index + 1} object-cover`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b17]/95 via-[#0b1b17]/75 to-[#0b1b17]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#f4c247]/20 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#2aa875]/20 blur-3xl" />

        <header className="absolute left-0 right-0 top-0 z-30">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-3 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <HandHeart className="h-3.5 w-3.5 text-[#f4c247]" />
                </span>
                Become a volunteer
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-3.5 w-3.5 text-[#f4c247]" />
                </span>
                +252 619 616 981
              </div>
            </div>
            <div className="flex items-center justify-between py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 p-2">
                  <Image
                    src="https://res.cloudinary.com/dzw5pskk1/image/upload/v1770038393/607bc899-dac8-47e0-886e-948d475268d6-removebg-preview_l9c9s4.png"
                    alt="GRDO logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold tracking-wide">GRDO</p>
                  <p className="text-xs text-white/70">Great-Life Relief & Development</p>
                </div>
              </div>
              <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="hidden items-center gap-3 lg:flex">
                <Button
                  size="sm"
                  className="bg-white text-[#0f231e] hover:bg-[#f4c247] hover:text-[#0f231e]"
                >
                  Donate now
                </Button>
              </div>
              <div className="flex items-center gap-3 lg:hidden">
                <Button
                  size="sm"
                  className="bg-white text-[#0f231e] hover:bg-[#f4c247] hover:text-[#0f231e]"
                >
                  Donate
                </Button>
                <button
                  type="button"
                  aria-label="Toggle navigation"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((open) => !open)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div
              className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}
            >
              <div className="rounded-2xl border border-white/10 bg-[#0f231e]/95 p-4 text-sm text-white/80 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.6)]">
                <div className="grid gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-4xl flex-col items-center justify-center px-6 pb-20 pt-44 text-center">
          <motion.div {...fadeUp} className="space-y-6 text-center">
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Transforming Lives. Building Resilient Communities.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Great-Life Relief and Development Organization (GRDO) is a non-political, non-profit
              humanitarian and development organization working across Somalia to save lives, promote
              dignity, and strengthen communities toward long-term self-reliance.
            </p>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Since 2013, GRDO has partnered with communities, civil society organizations, and
              humanitarian actors to deliver inclusive education, humanitarian relief, and civil
              society development—especially in fragile and underserved contexts.
            </p>
            <div className="mx-auto flex flex-wrap justify-center gap-3">
              <Badge className="bg-white/10 text-white">
                <MapPin className="h-3.5 w-3.5" /> Headquarters: Baidoa, Somalia
              </Badge>
              <Badge className="bg-white/10 text-white">
                <Globe className="h-3.5 w-3.5" /> Coverage: All Federal Member States of Somalia
              </Badge>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button className="bg-[#f4c247] text-[#0f231e] hover:bg-[#f7d16c]">
                Get involved
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Explore programs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">ABOUT US</p>
            <h2 className="font-display mt-5 text-3xl text-[#132420] sm:text-4xl">Who We Are</h2>
            <p className="mt-5 text-[#42524b]">
              Great-Life Relief and Development Organization (GRDO) is an independent humanitarian and
              development NGO established in 2013 and legally registered in Somalia. Our work is rooted
              in human dignity, inclusion, and community-driven development.
            </p>
            <p className="mt-4 text-[#42524b]">
              We operate through long-term partnerships with local organizations, authorities, and
              community groups to ensure sustainable impact that goes beyond short-term relief.
            </p>
            <div className="mt-8 grid gap-6">
              <Card className="border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.4)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#1c4b3a]">
                    <Leaf className="h-5 w-5" /> Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  “Transforming lives to attain transformed societies.” We envision societies built on
                  love, justice, and peace—where every individual is respected, empowered, and given
                  opportunities to thrive holistically.
                </CardContent>
              </Card>
              <Card className="border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.4)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#1c4b3a]">
                    <HandHeart className="h-5 w-5" /> Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  To save lives, promote self-reliance and dignity through human transformation going
                  beyond relief and development.
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full border border-[#f4c247]/60" />
            <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-full border-[12px] border-white bg-[#f6f2ea] shadow-[0_30px_80px_-50px_rgba(15,35,30,0.6)]">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80"
                alt="Community classroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 right-0 w-40 overflow-hidden rounded-[28px] border-8 border-white bg-[#0f231e] shadow-[0_20px_50px_-30px_rgba(15,35,30,0.7)]">
              <Image
                src="https://images.unsplash.com/photo-1585335947094-79dcc6a5e4e0?auto=format&fit=crop&w=600&q=80"
                alt="Community leader"
                width={220}
                height={220}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="programs" className="relative isolate overflow-hidden bg-white/70 py-24">
        <Image
          src="https://images.unsplash.com/photo-1633539656390-142a7e8573a0?auto=format&fit=crop&w=1800&q=80"
          alt="Community program background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f2ea]/60 via-[#f6f2ea]/75 to-[#f6f2ea]/90" />
        <div className="relative mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">
              WHAT WE DO (PROGRAM AREAS)
            </p>
            <h2 className="font-display mt-4 text-3xl text-[#132420] sm:text-4xl">
              Program Areas
            </h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program, index) => (
              <motion.div key={program.title} {...fadeUp} transition={{ delay: index * 0.1 }}>
                <Card className="h-full border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.35)]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4c247]/15 text-[#1c4b3a]">
                        <program.icon className="h-5 w-5" />
                      </span>
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{program.description}</p>
                    <ul className="space-y-2 text-sm text-[#42524b]">
                      {program.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2aa875]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-[#42524b]">{program.note}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">HOW WE WORK</p>
            <h2 className="font-display mt-4 text-3xl text-[#132420] sm:text-4xl">
              Community-Driven Approach
            </h2>
            <p className="mt-4 text-[#42524b]">
              All GRDO projects are designed and implemented with communities, not for them. Local
              ownership and participation are central to everything we do.
            </p>
            <Card className="mt-6 border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.35)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1c4b3a]">
                  <Users className="h-5 w-5" /> Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#42524b]">
                  {partnerships.map((partner) => (
                    <li key={partner} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#2aa875]" />
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[#42524b]">
                  Partnerships are long-term, values-aligned, and capacity-building focused.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeUp}>
            <Card className="border-transparent bg-[#165441] text-white shadow-[0_30px_80px_-40px_rgba(12,33,27,0.6)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <ShieldCheck className="h-5 w-5 text-[#f4c247]" /> Ethics & Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  Our work is guided by humanitarian ethics and human rights, Sphere Standards, UN
                  Sustainable Development Goals (SDGs), transparency, accountability, and integrity.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Humanitarian ethics and human rights",
                    "Sphere Standards",
                    "UN SDGs",
                    "Transparency",
                    "Accountability",
                    "Integrity"
                  ].map((item) => (
                    <Badge key={item} className="bg-white/10 text-white">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 overflow-hidden rounded-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1683173908985-088258370dae?auto=format&fit=crop&w=1000&q=80"
                alt="Community meeting"
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="values" className="bg-white/70 py-24">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">
              VALUES & PRINCIPLES
            </p>
            <h2 className="font-display mt-4 text-3xl text-[#132420] sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 max-w-2xl text-[#42524b]">
              These values guide every decision, partnership, and project we undertake.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div key={value.title} {...fadeUp} transition={{ delay: index * 0.05 }}>
                <Card className="h-full border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.35)]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f4c247]/15 text-[#1c4b3a]">
                        <value.icon className="h-5 w-5" />
                      </span>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{value.note}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="where" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">
              WHERE WE WORK
            </p>
            <h2 className="font-display mt-4 text-3xl text-[#132420] sm:text-4xl">Across Somalia</h2>
            <p className="mt-4 text-[#42524b]">
              GRDO’s primary geographical focus is Somalia, with active programs and offices across
              Southwest State, Jubaland, Puntland, Galmudug, and Banadir Region. Our long-term presence
              allows us to respond quickly, work effectively, and build trust with communities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {regions.map((region) => (
                <Badge key={region} className="bg-[#f4c247]/15 text-[#1c4b3a]">
                  {region}
                </Badge>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#f4c247]/30 to-[#2aa875]/30" />
            <div className="relative rounded-[36px] bg-white/95 p-8 shadow-[0_30px_70px_-40px_rgba(15,35,30,0.5)]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#2aa875]" />
                  <div>
                    <p className="text-sm font-semibold text-[#182321]">Headquarters</p>
                    <p className="text-sm text-[#42524b]">Baidoa, Somalia</p>
                  </div>
                </div>
                <Separator className="section-divider" />
                <div className="space-y-3 text-sm text-[#42524b]">
                  <p>
                    Coverage spans all Federal Member States with field teams embedded in community
                    offices and local partner hubs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#2aa875]" /> Rapid response capacity
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#2aa875]" /> Long-term community trust
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#2aa875]" /> Integrated program delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="governance" className="bg-white/70 py-24">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">
              GOVERNANCE & ORGANIZATION
            </p>
            <h2 className="font-display mt-4 text-3xl text-[#132420] sm:text-4xl">
              Organizational Structure
            </h2>
            <p className="mt-4 max-w-2xl text-[#42524b]">
              GRDO is governed by a transparent and accountable structure that ensures strategic
              leadership and effective program delivery. GRDO is an independent legal entity registered
              under Somali law.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.35)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-[#1c4b3a]" /> Governance Bodies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#42524b]">
                  {governance.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2aa875]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.35)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1c4b3a]">
                  <ShieldCheck className="h-5 w-5" /> Accountability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#42524b]">
                  {accountability.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2aa875]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advocacy" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">
              ADVOCACY & IMPACT
            </p>
            <h2 className="font-display mt-4 text-3xl text-[#132420] sm:text-4xl">
              Advocacy for Systemic Change
            </h2>
            <p className="mt-4 text-[#42524b]">
              GRDO actively advocates for the rights of marginalized and vulnerable populations,
              inclusive education and disability rights, gender equality, and women’s empowerment. We
              share our work through community forums, media, publications, and stakeholder engagement
              to build public support and systemic change.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#42524b]">
              {advocacy.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2aa875]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[32px]">
            <Image
              src="https://images.unsplash.com/photo-1587571065775-0d2ae0c863e0?auto=format&fit=crop&w=1000&q=80"
              alt="Community advocacy"
              width={900}
              height={650}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="get-involved" className="bg-white/70 py-24">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">
              GET INVOLVED
            </p>
            <h2 className="font-display mt-4 text-3xl text-[#132420] sm:text-4xl">Partner With Us</h2>
            <p className="mt-4 max-w-2xl text-[#42524b]">
              We welcome partnerships with donors, development agencies, NGOs, civil society
              organizations, community groups, and institutions.
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.35)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-[#1c4b3a]" /> Partner With Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-[#42524b]">
                <p>
                  We welcome partnerships with donors and development agencies, NGOs and civil society
                  organizations, and community groups and institutions.
                </p>
                <Button className="bg-[#f4c247] text-[#0f231e] hover:bg-[#f7d16c]">
                  Start a partnership
                </Button>
              </CardContent>
            </Card>
            <Card className="border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.35)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1c4b3a]">
                  <HandHeart className="h-5 w-5" /> Volunteer & Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-[#42524b]">
                <p>Opportunities may include:</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Internships and volunteer engagement",
                    "Technical expertise and advisory support",
                    "Programmatic and financial contributions"
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2aa875]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-[#2aa875]/40 text-[#1c4b3a]">
                  Explore opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2a6c55]">
              CONTACT US
            </p>
            <h2 className="font-display mt-4 text-3xl text-[#132420] sm:text-4xl">
              Great-Life Relief and Development Organization (GRDO)
            </h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <Card className="border-transparent bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,35,30,0.35)]">
              <CardHeader>
                <CardTitle className="text-[#1c4b3a]">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[#42524b]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#2aa875]" />
                  <div>
                    <p className="font-semibold text-[#182321]">Baidoa, Somalia</p>
                    <p>Headquarters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-[#2aa875]" />
                  <div>
                    <p className="font-semibold text-[#182321]">+252 619 616 981</p>
                    <p>Contact Person: Feisal Issack Mohamud</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-[#2aa875]" />
                  <div>
                    <p className="font-semibold text-[#182321]">WhatsApp: +254 759 994 805</p>
                    <p>Available for quick coordination</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-[#2aa875]" />
                  <div>
                    <p className="font-semibold text-[#182321]">greatlife.organization@gmail.com</p>
                    <p>Email us anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-transparent shadow-[0_30px_80px_-40px_rgba(12,33,27,0.5)]">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80"
                alt="Community support"
                width={1000}
                height={700}
                className="h-full w-full object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f231e] py-14 text-white/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 p-2">
                <Image
                  src="https://res.cloudinary.com/dzw5pskk1/image/upload/v1770038393/607bc899-dac8-47e0-886e-948d475268d6-removebg-preview_l9c9s4.png"
                  alt="GRDO logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <p className="font-display text-lg text-white">GRDO</p>
                <p className="text-xs text-white/60">Great-Life Relief & Development</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60">
              We are committed to dignity, inclusion, and community-driven development across Somalia.
            </p>
            <Button className="mt-6 bg-[#f4c247] text-[#0f231e] hover:bg-[#f7d16c]">
              Donate now
            </Button>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-white">Links</p>
            <a className="block text-white/60 hover:text-white" href="#about">
              About us
            </a>
            <a className="block text-white/60 hover:text-white" href="#programs">
              Programs
            </a>
            <a className="block text-white/60 hover:text-white" href="#get-involved">
              Get involved
            </a>
            <a className="block text-white/60 hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <div className="space-y-4 text-sm">
            <p className="font-semibold text-white">Contact</p>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#f4c247]" />
              <span>Baidoa, Somalia</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#f4c247]" />
              <span>+252 619 616 981</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#f4c247]" />
              <span>greatlife.organization@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Great-Life Relief and Development Organization. All rights reserved.
        </div>
      </footer>

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4c247] text-[#0f231e] shadow-[0_18px_40px_-20px_rgba(15,35,30,0.8)] transition hover:-translate-y-1"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
