"use client";

import { useState } from "react";
import Link from "next/link";
import { Waves, Mail, Lock, User, Eye, EyeOff, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const perks = [
  "Lacak pesanan real-time",
  "Riwayat transaksi lengkap",
  "Notifikasi WhatsApp otomatis",
  "Poin reward setiap pesanan",
];

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name || form.name.length < 2) e.name = "Nama minimal 2 karakter";
    if (!form.phone || !/^08\d{8,11}$/.test(form.phone))
      e.phone = "Nomor HP tidak valid (08xxxxxxx)";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Email tidak valid";
    if (!form.password || form.password.length < 8)
      e.password = "Kata sandi minimal 8 karakter";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-soft p-6">
        <div className="bg-white rounded-3xl border border-surface-border shadow-float p-10 text-center max-w-sm w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-display text-2xl font-800 text-ink mb-2">
            Akun berhasil dibuat!
          </h2>
          <p className="text-sm text-ink-muted mb-6">
            Selamat datang, <strong>{form.name}</strong>! Akun Anda sudah aktif.
          </p>
          <Link href="/auth/login">
            <Button fullWidth>Masuk Sekarang</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-brand-700 to-brand-900 relative overflow-hidden items-end p-12">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-white max-w-sm">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
            <Waves className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-display text-4xl font-800 mb-6 leading-tight">
            Bergabung dan nikmati kemudahan laundry.
          </h2>
          <ul className="space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm text-brand-100">
                <CheckCircle2 className="w-4 h-4 text-brand-300 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 lg:max-w-[460px] flex items-center justify-center p-6 sm:p-10 bg-white overflow-y-auto">
        <div className="w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <Waves className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-lg font-700 text-ink">
              Fresh<span className="text-brand-600">Wave</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="font-display text-3xl font-800 text-ink mb-2">Buat akun baru</h1>
            <p className="text-sm text-ink-muted">
              Sudah punya akun?{" "}
              <Link href="/auth/login" className="text-brand-600 font-semibold hover:underline">
                Masuk
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nama Lengkap"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              error={errors.name}
              leftIcon={<User className="w-4 h-4" />}
              autoComplete="name"
            />
            <Input
              label="Nomor WhatsApp"
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              error={errors.phone}
              leftIcon={<Phone className="w-4 h-4" />}
              autoComplete="tel"
            />
            <Input
              label="Alamat Email"
              type="email"
              placeholder="nama@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={errors.email}
              leftIcon={<Mail className="w-4 h-4" />}
              autoComplete="email"
            />
            <Input
              label="Kata Sandi"
              type={showPass ? "text" : "password"}
              placeholder="Min. 8 karakter"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              error={errors.password}
              leftIcon={<Lock className="w-4 h-4" />}
              rightIcon={
                <button type="button" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
              autoComplete="new-password"
            />

            <p className="text-xs text-ink-muted">
              Dengan mendaftar, Anda menyetujui{" "}
              <a href="#" className="text-brand-600 hover:underline">
                Syarat & Ketentuan
              </a>{" "}
              dan{" "}
              <a href="#" className="text-brand-600 hover:underline">
                Kebijakan Privasi
              </a>{" "}
              kami.
            </p>

            <Button
              type="submit"
              fullWidth
              size="lg"
              loading={loading}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              {loading ? "Membuat akun..." : "Daftar Sekarang"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
