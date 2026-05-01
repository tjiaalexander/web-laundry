import Link from "next/link";
import { services } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";
import { ArrowRight, Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ServicesPreview() {
  const featured = services.filter((s) => s.popular || ["1", "4"].includes(s.id)).slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Layanan Kami
            </span>
            <h2 className="font-display text-4xl font-800 text-ink mt-3">
              Pilihan Lengkap
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group"
          >
            Lihat semua layanan
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <div className="group bg-white rounded-2xl border border-surface-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {service.popular && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="brand" className="bg-brand-600 text-white border-brand-600">
                        <Zap className="w-3 h-3" /> Populer
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base font-700 text-ink mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-ink-muted">mulai dari</p>
                      <p className="text-base font-bold text-ink">
                        {formatRupiah(service.pricePerKg)}
                        <span className="text-xs font-normal text-ink-muted">/kg</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-ink-muted">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {service.rating}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
