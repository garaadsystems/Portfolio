import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo/lockup/garaad-lockup-white-2x.png"
                alt="Garaad Systems"
                width={144}
                height={44}
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-xs">
              Building digital infrastructure and transforming institutions across Ethiopia and the
              Horn of Africa.
            </p>

            <div className="space-y-1.5 mb-7">
              <p className="text-xs text-white/40">Bay/Haven Mall, G2, Jigjiga, Somali Region, Ethiopia</p>
              <p className="text-xs text-white/40">+251 93 164 8275</p>
              <p className="text-xs text-white/40">info@garaadsystems.com</p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/garaad-systems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com/garaadsystems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/garaadsystems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-5">
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
                  <Link href={link.href} className="text-xs text-white/45 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-5">
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
                  <Link href={link.href} className="text-xs text-white/45 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-5">
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
                  <Link href={link.href} className="text-xs text-white/45 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Garaad Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-white/30 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
