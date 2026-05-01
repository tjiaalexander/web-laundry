"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "10K+", label: "Pelanggan" },
  { value: "50K+", label: "Pesanan" },
  { value: "4.9", label: "Rating" },
  { value: "7", label: "Hari / Minggu" },
];

const perks = [
  "Antar-jemput gratis radius 3 km",
  "Deterjen & pewangi premium",
  "Garansi bersih 100%",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-dots opacity-40" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-100 rounded-full blur-3xl opacity-40 -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-100 rounded-full blur-3xl opacity-30 translate-y-1/4 -translate-x-1/4" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span className="text-xs font-semibold text-brand-700 font-body tracking-wide uppercase">
                #1 Laundry Terpercaya Semarang
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl font-800 text-ink leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Pakaian Bersih,{" "}
              <span className="gradient-text">Hidup Lebih</span>{" "}
              Mudah
            </h1>

            <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-xl animate-fade-up animation-delay-100">
              FreshWave hadir untuk meringankan beban harian Anda. Cuci, setrika, dry cleaning,
              hingga ekspres 6 jam — semua tersedia dengan kualitas premium dan harga terjangkau.
            </p>

            {/* Perks */}
            <ul className="flex flex-col gap-2.5 mb-10 animate-fade-up animation-delay-200">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-12 animate-fade-up animation-delay-300">
              <Link href="/order">
                <Button
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Pesan Sekarang
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  Lihat Layanan
                </Button>
              </Link>
            </div>

            {/* Reviews mini */}
            <div className="flex items-center gap-3 animate-fade-up animation-delay-400">
              <div className="flex -space-x-2">
                {["Rina", "Budi", "Sari", "Agus"].map((name) => (
                  <img
                    key={name}
                    src={`https://api.dicebear.com/8.x/notionists/svg?seed=${name}&size=40`}
                    alt={name}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-100"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                </div>
                <p className="text-xs text-ink-muted mt-0.5">
                  <strong className="text-ink">4.9/5</strong> dari 500+ ulasan
                </p>
              </div>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative hidden lg:block animate-fade-in animation-delay-200">
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-float">
              <img
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=700&q=80"
                alt="Laundry bersih"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-float p-4 flex items-center gap-3 border border-surface-border">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-ink-muted">Status Pesanan</p>
                <p className="text-sm font-semibold text-ink">Siap Diambil! 🎉</p>
              </div>
            </div>

            <div className="absolute -right-6 top-16 bg-white rounded-2xl shadow-float p-4 border border-surface-border">
              <div className="flex items-center gap-1.5 mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
              </div>
              <p className="text-xs font-semibold text-ink">Pelanggan sangat puas!</p>
              <p className="text-xs text-ink-muted">512 ulasan bintang 5</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12 border-t border-surface-border animate-fade-up animation-delay-500">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-3xl font-800 text-brand-600 mb-1">{value}</div>
              <div className="text-sm text-ink-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
