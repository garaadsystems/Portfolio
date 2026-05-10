import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#8CC220] border-t border-[#0A1628]/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.jpg"
                alt="Garaad Systems"
                width={160}
                height={52}
                className="h-11 w-auto object-contain rounded-lg"
              />
            </Link>

            <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-6 max-w-xs">
              Building digital infrastructure and transforming institutions across Ethiopia and the
              Horn of Africa.
            </p>

            <div className="space-y-1.5 mb-7">
              <p className="text-xs text-[#0A1628]/50">Bay/Haven Mall, G2, Jigjiga, Somali Region, Ethiopia</p>
              <p className="text-xs text-[#0A1628]/50">+251 93 164 8275</p>
              <p className="text-xs text-[#0A1628]/50">info@garaadsystems.com</p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#0A1628]/10 border border-[#0A1628]/15 flex items-center justify-center text-[#0A1628]/50 hover:text-[#0A1628] hover:bg-[#0A1628]/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-[#0A1628]/10 border border-[#0A1628]/15 flex items-center justify-center text-[#0A1628]/50 hover:text-[#0A1628] hover:bg-[#0A1628]/20 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold text-[#0A1628]/50 uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Work", href: "/projects" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-[#0A1628]/55 hover:text-[#0A1628] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold text-[#0A1628]/50 uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "E-Government", href: "/services" },
                { label: "Custom Software", href: "/services" },
                { label: "Systems Integration", href: "/services" },
                { label: "Advisory", href: "/services" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-[#0A1628]/55 hover:text-[#0A1628] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="text-[10px] font-bold text-[#0A1628]/50 uppercase tracking-widest mb-5">
              Insights
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Articles", href: "/insights" },
                { label: "Case Studies", href: "/projects" },
                { label: "Technical Guides", href: "/insights" },
                { label: "Company News", href: "/insights" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-[#0A1628]/55 hover:text-[#0A1628] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#0A1628]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#0A1628]/40">
            © 2025 Garaad Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-[#0A1628]/40 hover:text-[#0A1628] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-[#0A1628]/40 hover:text-[#0A1628] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
