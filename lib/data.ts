export type ServiceCategory = "cuci" | "setrika" | "dry-clean" | "ekspres";

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  description: string;
  longDescription: string;
  pricePerKg: number;
  minWeight: number;
  duration: string;
  image: string;
  features: string[];
  popular: boolean;
  rating: number;
  reviewCount: number;
}

export interface Transaction {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  weight: number;
  totalPrice: number;
  status: "pending" | "proses" | "selesai" | "diambil";
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export const services: Service[] = [
  {
    id: "1",
    name: "Cuci Reguler",
    slug: "cuci-reguler",
    category: "cuci",
    description: "Layanan cuci standar dengan deterjen premium, cocok untuk pakaian sehari-hari.",
    longDescription:
      "Layanan cuci reguler kami menggunakan deterjen premium ramah lingkungan yang efektif mengangkat noda membandel sekaligus menjaga kualitas serat pakaian Anda. Setiap item dicuci secara terpisah berdasarkan kategori warna dan jenis kain untuk hasil maksimal. Proses berlangsung 1–2 hari kerja.",
    pricePerKg: 7000,
    minWeight: 2,
    duration: "1–2 Hari",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80",
    features: ["Deterjen premium", "Pisah warna & putih", "Pewangi pilihan", "Plastik pelindung"],
    popular: false,
    rating: 4.8,
    reviewCount: 312,
  },
  {
    id: "2",
    name: "Cuci + Setrika",
    slug: "cuci-setrika",
    category: "cuci",
    description: "Paket lengkap cuci dan setrika, pakaian bersih siap pakai.",
    longDescription:
      "Paket terlengkap untuk kebutuhan laundry Anda. Setelah dicuci dengan deterjen premium, setiap helai pakaian disetrika dengan rapi oleh tenaga profesional kami. Pakaian dikemas dengan hanger atau dilipat sesuai preferensi Anda. Tersedia pilihan parfum eksklusif.",
    pricePerKg: 10000,
    minWeight: 2,
    duration: "2–3 Hari",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    features: ["Cuci deterjen premium", "Setrika rapi", "Hanger/dilipat", "Parfum eksklusif"],
    popular: true,
    rating: 4.9,
    reviewCount: 587,
  },
  {
    id: "3",
    name: "Setrika Saja",
    slug: "setrika-saja",
    category: "setrika",
    description: "Hanya setrika untuk pakaian yang sudah dicuci.",
    longDescription:
      "Layanan setrika khusus untuk pakaian yang sudah dicuci. Tenaga setrika profesional kami memastikan setiap kerutan hilang dan pakaian tampil sempurna. Ideal untuk seragam, kemeja kantor, dan pakaian formal. Dikemas rapi dengan plastik pelindung.",
    pricePerKg: 5000,
    minWeight: 1,
    duration: "1 Hari",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=80",
    features: ["Setrika profesional", "Anti lecek", "Kemasan rapi", "Hemat biaya"],
    popular: false,
    rating: 4.7,
    reviewCount: 198,
  },
  {
    id: "4",
    name: "Dry Cleaning",
    slug: "dry-cleaning",
    category: "dry-clean",
    description: "Perawatan khusus untuk pakaian mewah, jas, gaun, dan bahan sensitif.",
    longDescription:
      "Dry cleaning adalah solusi terbaik untuk pakaian berbahan halus seperti sutra, wol, kasmir, jas, dan gaun pengantin. Proses menggunakan pelarut khusus yang lembut namun efektif membersihkan tanpa merusak serat kain. Ditangani oleh teknisi berpengalaman.",
    pricePerKg: 35000,
    minWeight: 1,
    duration: "3–5 Hari",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    features: ["Pelarut khusus", "Untuk bahan sensitif", "Teknisi berpengalaman", "Garansi bersih"],
    popular: false,
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: "5",
    name: "Ekspres 6 Jam",
    slug: "ekspres-6-jam",
    category: "ekspres",
    description: "Butuh cepat? Laundry selesai dalam 6 jam, bersih dan rapi.",
    longDescription:
      "Layanan ekspres untuk kebutuhan mendesak Anda. Drop-off sebelum pukul 10.00, bisa diambil pukul 16.00 di hari yang sama. Mencakup cuci dan setrika dengan standar kualitas yang sama seperti layanan reguler. Tersedia setiap hari termasuk akhir pekan.",
    pricePerKg: 15000,
    minWeight: 2,
    duration: "6 Jam",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
    features: ["Selesai 6 jam", "Cuci + setrika", "Setiap hari", "Prioritas antrian"],
    popular: true,
    rating: 4.8,
    reviewCount: 423,
  },
  {
    id: "6",
    name: "Cuci Sepatu",
    slug: "cuci-sepatu",
    category: "cuci",
    description: "Perawatan sepatu profesional, bersih menyeluruh hingga sol dan tali.",
    longDescription:
      "Layanan cuci sepatu profesional menggunakan teknik dan produk pembersih khusus yang aman untuk berbagai material sepatu: kanvas, kulit, suede, dan sintetis. Proses mencakup pembersihan upper, sol, tali sepatu, hingga bagian dalam. Hasil: sepatu bersih seperti baru.",
    pricePerKg: 25000,
    minWeight: 1,
    duration: "2–3 Hari",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    features: ["Semua material", "Termasuk sol & tali", "Produk premium", "Kemasan box"],
    popular: false,
    rating: 4.6,
    reviewCount: 267,
  },
];

export const transactions: Transaction[] = [
  {
    id: "TRX-001",
    serviceId: "2",
    serviceName: "Cuci + Setrika",
    date: "2025-04-28",
    weight: 3.5,
    totalPrice: 35000,
    status: "selesai",
    notes: "Mohon hanger untuk kemeja",
  },
  {
    id: "TRX-002",
    serviceId: "5",
    serviceName: "Ekspres 6 Jam",
    date: "2025-04-30",
    weight: 2,
    totalPrice: 30000,
    status: "proses",
  },
  {
    id: "TRX-003",
    serviceId: "4",
    serviceName: "Dry Cleaning",
    date: "2025-05-01",
    weight: 1,
    totalPrice: 35000,
    status: "pending",
    notes: "Jas warna navy, hati-hati kancing",
  },
  {
    id: "TRX-004",
    serviceId: "1",
    serviceName: "Cuci Reguler",
    date: "2025-04-20",
    weight: 5,
    totalPrice: 35000,
    status: "diambil",
  },
  {
    id: "TRX-005",
    serviceId: "6",
    serviceName: "Cuci Sepatu",
    date: "2025-04-15",
    weight: 2,
    totalPrice: 50000,
    status: "diambil",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rina Kusuma",
    role: "Karyawan Swasta",
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=Rina",
    rating: 5,
    comment:
      "Laundry terbaik yang pernah saya coba! Baju selalu wangi, rapi, dan tepat waktu. Sudah 2 tahun jadi pelanggan setia.",
    date: "2025-04-15",
  },
  {
    id: "2",
    name: "Budi Santoso",
    role: "Pengusaha",
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=Budi",
    rating: 5,
    comment:
      "Dry cleaning-nya luar biasa. Jas saya yang mahal ditangani dengan sangat profesional. Hasilnya seperti baru.",
    date: "2025-04-10",
  },
  {
    id: "3",
    name: "Sari Dewi",
    role: "Ibu Rumah Tangga",
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=Sari",
    rating: 5,
    comment:
      "Layanan ekspres 6 jam sangat membantu saat butuh baju cepat. Harganya juga terjangkau untuk kualitas sebagus ini!",
    date: "2025-04-05",
  },
  {
    id: "4",
    name: "Agus Pratama",
    role: "Mahasiswa",
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=Agus",
    rating: 4,
    comment:
      "Harga mahasiswa tapi kualitas premium. Paket cuci + setrika jadi andalan saya tiap minggu. Highly recommended!",
    date: "2025-03-28",
  },
  {
    id: "5",
    name: "Maya Putri",
    role: "Dokter",
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=Maya",
    rating: 5,
    comment:
      "Cuci sepatu hasilnya fantastis! Sneakers kesayangan saya jadi bersih banget. Staff juga ramah dan responsif.",
    date: "2025-03-20",
  },
];

export const categoryLabels: Record<ServiceCategory, string> = {
  cuci: "Cuci",
  setrika: "Setrika",
  "dry-clean": "Dry Clean",
  ekspres: "Ekspres",
};

export const statusConfig = {
  pending: { label: "Menunggu", color: "bg-amber-50 text-amber-700 border-amber-200" },
  proses: { label: "Diproses", color: "bg-blue-50 text-blue-700 border-blue-200" },
  selesai: { label: "Selesai", color: "bg-green-50 text-green-700 border-green-200" },
  diambil: { label: "Diambil", color: "bg-slate-100 text-slate-600 border-slate-200" },
} as const;
