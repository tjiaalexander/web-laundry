import Link from "next/link";
import { Clock, Scale, Star, Zap } from "lucide-react";
import { type Service, categoryLabels } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`}>
      <article className="group bg-white rounded-2xl border border-surface-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="muted" className="bg-white/90 backdrop-blur-sm text-ink border-0">
              {categoryLabels[service.category]}
            </Badge>
            {service.popular && (
              <Badge className="bg-brand-600 text-white border-0">
                <Zap className="w-3 h-3" /> Populer
              </Badge>
            )}
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-3 right-3">
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-lg px-2.5 py-1">
              <Clock className="w-3.5 h-3.5 text-white" />
              <span className="text-xs text-white font-medium">{service.duration}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display text-base font-700 text-ink">{service.name}</h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-medium text-ink">{service.rating}</span>
              <span className="text-xs text-ink-muted">({service.reviewCount})</span>
            </div>
          </div>

          <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-4">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.features.slice(0, 2).map((f) => (
              <span
                key={f}
                className="text-xs bg-surface-muted text-ink-soft px-2.5 py-1 rounded-lg"
              >
                {f}
              </span>
            ))}
            {service.features.length > 2 && (
              <span className="text-xs text-ink-muted px-2.5 py-1">
                +{service.features.length - 2} lainnya
              </span>
            )}
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-surface-border">
            <div>
              <p className="text-xs text-ink-muted">mulai</p>
              <p className="font-bold text-ink text-lg">
                {formatRupiah(service.pricePerKg)}
                <span className="text-xs font-normal text-ink-muted">/kg</span>
              </p>
              <p className="text-xs text-ink-muted">min. {service.minWeight} kg</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-ink-muted">
              <Scale className="w-3.5 h-3.5" />
              min {service.minWeight} kg
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
