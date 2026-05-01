import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Waves, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface-soft text-center px-4">
      <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
        <Waves className="w-7 h-7 text-brand-600" />
      </div>
      <h1 className="font-display text-8xl font-800 text-ink mb-4">404</h1>
      <h2 className="font-display text-2xl font-700 text-ink mb-3">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-ink-muted mb-8 max-w-sm">
        Sepertinya halaman yang Anda cari sudah pindah atau tidak ada. Yuk kembali ke beranda.
      </p>
      <Link href="/">
        <Button size="lg" icon={<Home className="w-4 h-4" />}>
          Kembali ke Beranda
        </Button>
      </Link>
    </div>
  );
}
