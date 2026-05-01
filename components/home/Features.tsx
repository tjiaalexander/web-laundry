import { Truck, Shield, Clock, Leaf, Smartphone, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Antar-Jemput Gratis",
    description:
      "Tanpa perlu keluar rumah. Kami jemput pakaian kotor dan antar balik yang sudah bersih, gratis radius 3 km.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Shield,
    title: "Garansi Bersih 100%",
    description:
      "Tidak puas? Kami cuci ulang gratis. Kualitas adalah janji kami kepada setiap pelanggan.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Clock,
    title: "Ekspres 6 Jam",
    description:
      "Butuh cepat? Layanan ekspres kami siap memproses pakaian Anda dalam 6 jam di hari yang sama.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description:
      "Deterjen biodegradable dan pewangi alami yang aman untuk kulit sensitif dan lingkungan.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Smartphone,
    title: "Tracking Real-Time",
    description:
      "Pantau status laundry Anda kapan saja melalui dashboard. Update otomatis di setiap tahap proses.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Award,
    title: "Tim Profesional",
    description:
      "Ditangani oleh tenaga terlatih berpengalaman yang memahami berbagai jenis kain dan noda.",
    color: "bg-rose-50 text-rose-600",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Kenapa FreshWave?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-ink mt-3 mb-4">
            Standar Tinggi,{" "}
            <span className="gradient-text">Harga Terjangkau</span>
          </h2>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto">
            Kami berkomitmen menghadirkan pengalaman laundry terbaik dengan teknologi modern
            dan kepedulian terhadap setiap detail.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-surface-border hover:border-brand-200 hover:shadow-card-hover transition-all duration-300 bg-white"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-700 text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
