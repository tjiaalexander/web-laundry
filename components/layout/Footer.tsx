import Link from "next/link";
import { Waves, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  layanan: [
    { href: "/services", label: "Semua Layanan" },
    { href: "/services?cat=cuci", label: "Cuci Reguler" },
    { href: "/services?cat=dry-clean", label: "Dry Cleaning" },
    { href: "/services?cat=ekspres", label: "Ekspres" },
  ],
  perusahaan: [
    { href: "#", label: "Tentang Kami" },
    { href: "#", label: "Karir" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Kebijakan Privasi" },
  ],
  bantuan: [
    { href: "#", label: "FAQ" },
    { href: "#", label: "Hubungi Kami" },
    { href: "#", label: "Syarat & Ketentuan" },
    { href: "#", label: "Cara Pesan" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-700 text-white">
                Fresh<span className="text-brand-400">Wave</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Layanan laundry profesional dengan standar kebersihan tinggi. Bersih, wangi, dan
              tepat waktu — setiap saat.
            </p>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span>Jl. Gunung Pati, Semarang</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>+62 12345678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>unnes@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2025 FreshWave Laundry. Semua hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
            ].map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-600 flex items-center justify-center transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
