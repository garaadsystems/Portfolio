import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Garaad Systems",
  description:
    "Get in touch with Garaad Systems to discuss your digital transformation project. Based in Jijiga, Ethiopia, serving institutions across the Horn of Africa.",
};

const contactMethods = [
  {
    label: "Email",
    value: "info@garaadsystems.com",
    href: "mailto:info@garaadsystems.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="#8CC220"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M22 6l-10 7L2 6" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+251 93 164 8275",
    href: "tel:+251931648275",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"
          stroke="#8CC220"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Bay/Haven Mall, G2, Jijiga, Somali Region, Ethiopia",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
          stroke="#8CC220"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="3" stroke="#8CC220" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Monday – Friday, 8:00 AM – 5:00 PM EAT",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#8CC220" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const nextSteps = [
  {
    step: "01",
    title: "We review your message",
    description: "Our team reads every inquiry within one business day and identifies who is best placed to respond.",
  },
  {
    step: "02",
    title: "Discovery call",
    description: "We schedule a brief call to better understand your institution's context, goals, and timeline.",
  },
  {
    step: "03",
    title: "Tailored proposal",
    description: "We prepare a clear proposal with a project scope, delivery approach, and timeline aligned to your needs.",
  },
  {
    step: "04",
    title: "We begin",
    description: "Once scope and terms are agreed, we kick off with a structured discovery phase and clear milestones.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0A1628] pt-36 pb-20 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#8CC220 1px, transparent 1px), linear-gradient(to right, #8CC220 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-6">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-6 max-w-3xl">
              Let&apos;s Start a
              <br />
              <span className="text-[#8CC220]">Conversation</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              Tell us about your institution&apos;s challenge. Whether you have a clear brief or are
              still exploring options, we&apos;re ready to listen and help you think it through.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-black text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {contactMethods.map((method) => (
                  <div key={method.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0A1628]/5 border border-[#0A1628]/10 flex items-center justify-center shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        {method.label}
                      </p>
                      {method.href !== "#" ? (
                        <a
                          href={method.href}
                          className="text-sm text-gray-700 font-medium hover:text-[#0A1628] transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700 font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="pt-8 border-t border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl bg-[#0A1628]/5 border border-[#0A1628]/10 flex items-center justify-center text-[#0A1628]/40 hover:text-[#0A1628] hover:bg-[#0A1628]/10 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter / X"
                    className="w-9 h-9 rounded-xl bg-[#0A1628]/5 border border-[#0A1628]/10 flex items-center justify-center text-[#0A1628]/40 hover:text-[#0A1628] hover:bg-[#0A1628]/10 transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Note */}
              <div className="mt-10 p-5 bg-[#8CC220]/8 border border-[#8CC220]/20 rounded-xl">
                <p className="text-xs text-[#0A1628]/70 leading-relaxed">
                  We typically respond within one business day. For urgent matters, calling directly
                  is the fastest way to reach us.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <h2 className="text-xl font-black text-gray-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-24 px-6 bg-[#F7F8FA] border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-3 block">
                What to Expect
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                Our Engagement Process
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {nextSteps.map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-7 border border-gray-100">
                  <span className="text-xs font-bold text-[#8CC220] bg-[#0A1628] rounded-lg px-2.5 py-1 mb-5 inline-block">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternative CTA */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                Not ready to reach out yet?
              </h3>
              <p className="text-gray-500 text-sm">
                Explore our work and services to understand if we&apos;re the right partner for your
                institution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                View Our Work
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#0A1628] text-white text-sm px-6 py-3 rounded-xl font-semibold hover:bg-[#0d1f3a] transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
