import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Garaad Systems",
  description: "Privacy Policy for Garaad Systems — how we collect, use, and protect your information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you contact us through our website, we collect the name, email address, organization name, and project details you provide. We also collect standard server logs (IP address, browser type, pages visited) through our hosting provider.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information you submit solely to respond to your inquiry, assess project fit, and communicate with you during and after an engagement. We do not use your information for advertising or sell it to third parties.",
  },
  {
    title: "Data Storage and Security",
    body: "Contact form submissions are processed via Resend and stored securely. We apply industry-standard security measures to protect your data. Client project data handled during engagements is subject to the confidentiality provisions in our project agreements.",
  },
  {
    title: "Data Retention",
    body: "We retain contact inquiry data for up to 24 months to facilitate follow-up communication. Client project data is retained as outlined in the applicable project agreement. You may request deletion of your data at any time by contacting us.",
  },
  {
    title: "Cookies",
    body: "Our website may use essential cookies to support basic functionality. We do not use tracking cookies or advertising cookies. Analytics, if any, are conducted in aggregate and do not identify individual users.",
  },
  {
    title: "Third-Party Services",
    body: "Our website is hosted on Vercel. Contact forms are processed by Resend. These providers have their own privacy policies. We do not share your personal data with any other third parties without your consent.",
  },
  {
    title: "Your Rights",
    body: "You have the right to request access to, correction of, or deletion of personal data we hold about you. To exercise these rights, contact us at info@garaadsystems.tech. We will respond within 30 days.",
  },
  {
    title: "Children's Privacy",
    body: "Our services are directed at institutional clients and professionals. We do not knowingly collect personal information from individuals under 18 years of age.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. The most current version will always be available at this URL, with the date of last update noted at the top of the page.",
  },
  {
    title: "Contact",
    body: "For any privacy-related questions or requests, contact Garaad Systems at info@garaadsystems.tech or by post at 02, Burj Hassen Wali, Jigjiga, Somali Region, Ethiopia.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-navy pt-36 pb-20 px-6 relative overflow-hidden">
          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-6">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                Legal
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.04] tracking-tight mb-4">
              Privacy Policy
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
              This policy explains how Garaad Systems collects, uses, and protects information you
              provide when using our website or engaging our services. We respect your privacy and
              handle your data responsibly.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={section.title} className="flex gap-6">
                  <span className="text-xs font-bold text-brand bg-navy rounded-lg px-2.5 py-1 h-fit shrink-0 mt-0.5">
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
                className="inline-flex items-center gap-2 bg-navy text-white text-sm px-6 py-3 rounded-xl font-semibold hover:bg-navy-light transition-colors"
              >
                Contact Us With Questions
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
