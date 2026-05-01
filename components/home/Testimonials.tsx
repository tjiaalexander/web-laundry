import { testimonials } from "@/lib/data";
import { StarRating } from "@/components/ui/StarRating";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-surface-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Testimoni
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-ink mt-3 mb-4">
            Mereka Sudah{" "}
            <span className="gradient-text">Merasakan Bedanya</span>
          </h2>
          <p className="text-lg text-ink-muted max-w-xl mx-auto">
            Ribuan pelanggan setia telah mempercayakan pakaian kesayangan mereka kepada kami.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl p-6 border border-surface-border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 ${
                idx === 1 ? "sm:mt-4" : ""
              }`}
            >
              {/* Quote icon */}
              <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <Quote className="w-4 h-4 text-brand-600" />
              </div>

              {/* Stars */}
              <StarRating rating={t.rating} className="mb-3" />

              {/* Comment */}
              <p className="text-sm text-ink-soft leading-relaxed mb-5">
                &ldquo;{t.comment}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full bg-slate-100 border border-surface-border"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 bg-white rounded-2xl border border-surface-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-2xl font-700 text-ink">Bergabung dengan 10,000+ pelanggan puas</p>
            <p className="text-sm text-ink-muted mt-1">Mulai pengalaman laundry yang berbeda hari ini</p>
          </div>
          <a
            href="/order"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-700 transition-colors shadow-sm"
          >
            Pesan Sekarang →
          </a>
        </div>
      </div>
    </section>
  );
}
