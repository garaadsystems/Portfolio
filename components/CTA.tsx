import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6 bg-brand relative overflow-hidden">

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold text-navy/80 uppercase tracking-widest mb-5 block">
          Get Started
        </span>
        <h2 className="text-4xl md:text-[60px] font-black text-navy leading-[1.06] tracking-tight mb-5">
          Have a system
          <br />
          that needs building?
        </h2>
        <p className="text-navy/80 text-base max-w-md mx-auto mb-12 leading-relaxed">
          Tell us what you&apos;re working on and we&apos;ll set up a first conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white text-sm px-8 py-4 rounded-xl font-semibold hover:bg-navy-light transition-colors"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="tel:+251915506573"
            className="inline-flex items-center gap-2 bg-navy/10 border border-navy/20 text-navy text-sm px-8 py-4 rounded-xl font-medium hover:bg-navy/20 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 2.5h2.5L7 5.5 5.5 7A10.5 10.5 0 009 10.5L10.5 9l3 1.5V13c0 .5-.5 1-1 1C5 14 2 11 2 5c0-.5.5-1 1-1z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
            Call Us
          </Link>
        </div>

        <div className="mt-14 pt-10 border-t border-navy/15 flex flex-col sm:flex-row items-center justify-center gap-5 text-xs text-navy/80">
          <span>info@garaadsystems.tech</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-navy/30" />
          <span>+251 91 550 6573</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-navy/30" />
          <span>Burj Hassen Wali, Jigjiga, Ethiopia</span>
        </div>
      </div>
    </section>
  );
}
