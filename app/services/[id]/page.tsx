import { notFound } from "next/navigation";
import Link from "next/link";
import { services, categoryLabels } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import {
  CheckCircle2,
  Clock,
  Scale,
  ArrowLeft,
  ShoppingCart,
  Zap,
  Users,
} from "lucide-react";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ id: s.slug }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.id);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <Link href="/" className="hover:text-brand-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-600 transition-colors">
              Layanan
            </Link>
            <span>/</span>
            <span className="text-ink">{service.name}</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-float">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {service.popular && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-600 text-white border-0 px-3 py-1.5">
                      <Zap className="w-3.5 h-3.5" /> Layanan Populer
                    </Badge>
                  </div>
                )}
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { icon: Clock, label: "Durasi", value: service.duration },
                  {
                    icon: Scale,
                    label: "Min. Berat",
                    value: `${service.minWeight} kg`,
                  },
                  {
                    icon: Users,
                    label: "Ulasan",
                    value: `${service.reviewCount}+`,
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl border border-surface-border p-4 text-center shadow-card"
                  >
                    <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <p className="text-xs text-ink-muted">{label}</p>
                    <p className="text-sm font-bold text-ink mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="brand">{categoryLabels[service.category]}</Badge>
              </div>

              <h1 className="font-display text-4xl font-800 text-ink mb-3">
                {service.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <StarRating rating={service.rating} showValue />
                <span className="text-sm text-ink-muted">
                  {service.reviewCount} ulasan
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-ink-soft leading-relaxed mb-8">
                {service.longDescription}
              </p>

              {/* Features list */}
              <div className="bg-surface-soft rounded-2xl p-6 mb-8">
                <h3 className="font-display text-base font-700 text-ink mb-4">
                  Yang Termasuk dalam Layanan
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      <span className="text-sm text-ink-soft">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing card */}
              <div className="bg-white border-2 border-brand-200 rounded-2xl p-6 mb-6 shadow-card">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-sm text-ink-muted mb-1">Harga per kilogram</p>
                    <p className="font-display text-4xl font-800 text-ink">
                      {formatRupiah(service.pricePerKg)}
                    </p>
                    <p className="text-sm text-ink-muted mt-0.5">per kg</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-ink-muted">Minimum order</p>
                    <p className="text-base font-bold text-ink">{service.minWeight} kg</p>
                    <p className="text-xs text-ink-muted">
                      Min. {formatRupiah(service.pricePerKg * service.minWeight)}
                    </p>
                  </div>
                </div>

                <div className="bg-brand-50 rounded-xl px-4 py-3 text-sm text-brand-700 mb-4 border border-brand-100">
                  ⏱ Estimasi selesai: <strong>{service.duration}</strong> setelah diterima
                </div>

                <Link href={`/order?service=${service.id}`}>
                  <Button
                    fullWidth
                    size="lg"
                    icon={<ShoppingCart className="w-4 h-4" />}
                  >
                    Pesan Layanan Ini
                  </Button>
                </Link>
              </div>

              <Link
                href="/services"
                className="flex items-center gap-2 text-sm text-ink-muted hover:text-brand-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Semua Layanan
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
