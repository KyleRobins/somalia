"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
  Building2,
  CheckCircle2
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
      "We strengthen community-led organizations through leadership training, advocacy, and rights-based development.",
    points: [
      "Organizational development and leadership training",
      "Advocacy for marginalized groups",
      "Women’s empowerment and youth engagement",
      "Peacebuilding and reconciliation initiatives",
      "Rights-based approaches to development"
    ]
  },
  {
    title: "Inclusive Education & Special Needs Education (SNE)",
    icon: GraduationCap,
    description:
      "GRDO pioneers inclusive education in Somalia with trusted national partnerships.",
    points: [
      "Expanding access for children with disabilities",
      "Supporting inclusive national education policies",
      "Training teachers and education stakeholders",
      "National advocacy for special needs rights"
    ]
  },
  {
    title: "Humanitarian Interventions",
    icon: Droplets,
    description:
      "Rapid, coordinated humanitarian assistance delivered with dignity.",
    points: [
      "Water, sanitation, and hygiene (WASH)",
      "Food security and nutrition",
      "Emergency response in fragile areas",
      "Aligned with Sphere Standards"
    ]
  },
  {
    title: "Sustainable Innovation & Livelihoods",
    icon: Sprout,
    description:
      "We integrate innovation through hydroponics and climate-resilient solutions.",
    points: [
      "Hydroponic and water-efficient agriculture systems",
      "Community training and capacity building",
      "Renewable energy and water-saving technologies",
      "Income generation and environmental sustainability"
    ]
  }
];

const values = [
  { title: "Human Dignity & Inclusion", icon: HandHeart },
  { title: "Integrity & Accountability", icon: ShieldCheck },
  { title: "Collaborative Leadership", icon: HeartHandshake },
  { title: "Compassionate Advocacy", icon: Globe },
  { title: "Justice & Equity", icon: Scale }
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
  { label: "How We Work", href: "#how" },
  { label: "Values", href: "#values" },
  { label: "Where We Work", href: "#where" },
  { label: "Governance", href: "#governance" },
  { label: "Advocacy", href: "#advocacy" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" }
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-leaf-500" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">GRDO</p>
              <p className="text-xs text-slate-500">Great-Life Relief & Development</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-brand-700">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm">
              Partner With Us
            </Button>
            <Button size="sm">
              Volunteer & Support
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="hero-gradient">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div {...fadeUp}>
            <Badge className="mb-4">Transforming lives since 2013</Badge>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Transforming Lives. Building Resilient Communities.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Great-Life Relief and Development Organization (GRDO) is a non-political, non-profit
              humanitarian and development organization working across Somalia to save lives, promote
              dignity, and strengthen communities toward long-term self-reliance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="bg-white text-brand-700">HQ: Baidoa, Somalia</Badge>
              <Badge className="bg-white text-brand-700">Coverage: All Federal Member States</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button>
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Explore Programs</Button>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-brand-100 blur-3xl" />
            <div className="absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-leaf-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1000&q=80"
                alt="Community collaboration"
                width={900}
                height={700}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                About Us
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Who We Are</h2>
              <p className="mt-4 text-slate-600">
                Great-Life Relief and Development Organization (GRDO) is an independent humanitarian
                and development NGO established in 2013 and legally registered in Somalia. Our work is
                rooted in human dignity, inclusion, and community-driven development. We operate through
                long-term partnerships with local organizations, authorities, and community groups to
                ensure sustainable impact that goes beyond short-term relief.
              </p>
            </div>
            <Card className="bg-brand-50/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-800">
                  <Leaf className="h-5 w-5" /> Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                “Transforming lives to attain transformed societies.” We envision societies built on
                love, justice, and peace—where every individual is respected, empowered, and given
                opportunities to thrive holistically.
              </CardContent>
              <Separator className="my-6 section-divider" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-800">
                  <HandHeart className="h-5 w-5" /> Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                To save lives, promote self-reliance and dignity through human transformation going
                beyond relief and development.
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="programs" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Program Areas</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              We respond to urgent needs and build long-term resilience through integrated programs in
              civil society development, inclusive education, humanitarian relief, and sustainable
              livelihoods.
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program, index) => (
              <motion.div key={program.title} {...fadeUp} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                        <program.icon className="h-5 w-5" />
                      </span>
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{program.description}</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {program.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                How We Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Community-Driven Approach
              </h2>
              <p className="mt-4 text-slate-600">
                All GRDO projects are designed and implemented with communities, not for them. Local
                ownership and participation are central to everything we do.
              </p>
              <div className="mt-6 space-y-4">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-brand-800">
                      <Users className="h-5 w-5" /> Partnerships
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {partnerships.map((partner) => (
                        <li key={partner} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-brand-600" />
                          <span>{partner}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-brand-50/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-brand-800">
                    <ShieldCheck className="h-5 w-5" /> Ethics & Standards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our work is guided by humanitarian ethics, human rights, Sphere Standards, UN SDGs,
                    transparency, accountability, and integrity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Humanitarian ethics",
                      "Sphere Standards",
                      "UN SDGs",
                      "Transparency",
                      "Integrity"
                    ].map((item) => (
                      <Badge key={item} className="bg-white text-brand-700">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="relative overflow-hidden rounded-[32px]">
                <Image
                  src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&fit=crop&w=1000&q=80"
                  alt="Community meeting"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="values" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Values & Principles
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Our Core Values</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div key={value.title} {...fadeUp} transition={{ delay: index * 0.05 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                        <value.icon className="h-5 w-5" />
                      </span>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    We embed this value in every decision, partnership, and project we undertake.
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="where" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Where We Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Across Somalia</h2>
            <p className="mt-4 text-slate-600">
              GRDO’s primary geographical focus is Somalia, with active programs and offices across
              multiple federal member states and regions. Our long-term presence allows us to respond
              quickly, work effectively, and build trust with communities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {regions.map((region) => (
                <Badge key={region} className="bg-brand-50 text-brand-700">
                  {region}
                </Badge>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-brand-100 to-leaf-100" />
            <div className="relative rounded-[36px] bg-white p-8 shadow-soft">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Headquarters</p>
                    <p className="text-sm text-slate-600">Baidoa, Somalia</p>
                  </div>
                </div>
                <Separator className="section-divider" />
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    Coverage spans all Federal Member States with field teams embedded in community
                    offices and local partner hubs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-600" /> Rapid response capacity
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-600" /> Long-term community trust
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-600" /> Integrated program delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="governance" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Governance & Organization
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Organizational Structure</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              GRDO is governed by a transparent and accountable structure that ensures strategic
              leadership and effective program delivery.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-brand-700" /> Governance Bodies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {governance.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-brand-50/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-800">
                  <ShieldCheck className="h-5 w-5" /> Accountability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {accountability.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advocacy" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Advocacy & Impact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Advocacy for Systemic Change</h2>
            <p className="mt-4 text-slate-600">
              GRDO actively advocates for the rights of marginalized and vulnerable populations,
              inclusive education, gender equality, and peacebuilding. We share our work through
              community forums, media, publications, and stakeholder engagement to build public support
              and systemic change.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {advocacy.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[32px]">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80"
              alt="Community advocacy"
              width={900}
              height={650}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="get-involved" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Get Involved
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Partner With Us</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              We welcome partnerships with donors, development agencies, NGOs, civil society
              organizations, community groups, and institutions. Join us in building resilient
              communities.
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-brand-700" /> Partner With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Strategic partnerships are long-term, values-aligned, and capacity-building focused.
                  Let’s co-create solutions that empower communities.
                </p>
                <Button className="mt-6">
                  Start a Partnership
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-brand-50/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-800">
                  <HandHeart className="h-5 w-5" /> Volunteer & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Support GRDO through internships, volunteer engagement, technical expertise, advisory
                  support, programmatic involvement, or financial contributions.
                </p>
                <Button variant="outline" className="mt-6">
                  Explore Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Great-Life Relief and Development Organization (GRDO)
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              We’d love to connect. Reach out to our headquarters in Baidoa for partnerships,
              collaboration, or program information.
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <Card>
              <CardHeader>
                <CardTitle className="text-brand-800">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <p className="font-semibold text-slate-900">Baidoa, Somalia</p>
                    <p>Headquarters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <p className="font-semibold text-slate-900">+252 619 616 981</p>
                    <p>Contact Person: Feisal Issack Mohamud</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp: +254 759 994 805</p>
                    <p>Available for quick coordination</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <p className="font-semibold text-slate-900">greatlife.organization@gmail.com</p>
                    <p>Email us anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
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

      <footer className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-leaf-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">GRDO</p>
              <p className="text-xs text-slate-500">Transforming lives across Somalia</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Great-Life Relief and Development Organization. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
