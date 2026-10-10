import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Garaad Systems",
  description: "Terms of Service for Garaad Systems digital consultancy services.",
};

const sections = [
  {
    title: "Services",
    body: "Garaad Systems provides technology consulting, software development, systems integration, and e-government solutions to institutional clients. The specific scope, deliverables, timelines, and fees for each engagement are defined in a written agreement or statement of work signed by both parties.",
  },
  {
    title: "Intellectual Property",
    body: "Upon full payment of all fees, clients receive ownership of all custom deliverables created specifically for their engagement, as outlined in the applicable project agreement. Garaad Systems retains ownership of pre-existing tools, frameworks, methodologies, and any work product not specifically assigned in the written agreement.",
  },
  {
    title: "Confidentiality",
    body: "Both parties agree to keep confidential any non-public information disclosed during an engagement. Garaad Systems will not share client data, project details, or institutional information with third parties without written consent, except as required by law.",
  },
  {
    title: "Payment Terms",
    body: "Payment terms are defined per engagement in the applicable statement of work or contract. Late payments may result in paused delivery. All fees are non-refundable unless otherwise stated in the written agreement.",
  },
  {
    title: "Limitation of Liability",
    body: "Garaad Systems is not liable for indirect, incidental, or consequential damages arising from the use of delivered systems. Our total liability is limited to the total fees paid for the relevant engagement in the preceding three months.",
  },
  {
    title: "Warranties",
    body: "We warrant that our services will be performed professionally and in conformance with the agreed-upon specifications. We do not warrant that delivered systems will be error-free in all environments or configurations beyond those defined in the project scope.",
  },
  {
    title: "Termination",
    body: "Either party may terminate an engagement with 30 days written notice. Upon termination, the client is responsible for fees accrued up to the termination date. Work completed to date will be delivered in its current state.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes will be resolved through negotiation in good faith, and if necessary, through arbitration in Jigjiga, Somali Region, Ethiopia.",
  },
  {
    title: "Changes to Terms",
    body: "Garaad Systems may update these terms from time to time. The most current version will always be published at this URL. Continued use of our services after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
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
                Legal
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.04] tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-white/45 text-sm">
              Last updated: January 2025 · Garaad Systems, Jigjiga, Ethiopia
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500 text-sm leading-relaxed mb-12 p-5 bg-[#F7F8FA] border border-gray-100 rounded-xl">
              By engaging Garaad Systems for any service, you agree to these terms. If you have
              questions, contact us at{" "}
              <a href="mailto:info@garaadsystems.tech" className="text-[#0A1628] font-medium hover:text-[#8CC220] transition-colors">
                info@garaadsystems.tech
              </a>{" "}
              before proceeding.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={section.title} className="flex gap-6">
                  <span className="text-xs font-bold text-[#8CC220] bg-[#0A1628] rounded-lg px-2.5 py-1 h-fit shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-gray-900 mb-2">{section.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">{section.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0A1628] text-white text-sm px-6 py-3 rounded-xl font-semibold hover:bg-[#0d1f3a] transition-colors"
              >
                Contact Us With Questions
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
