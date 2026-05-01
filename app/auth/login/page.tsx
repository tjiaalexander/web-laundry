"use client";

import { useState } from "react";
import Link from "next/link";
import { Waves, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.email) e.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email tidak valid";
    if (!form.password) e.password = "Kata sandi wajib diisi";
    else if (form.password.length < 6) e.password = "Min. 6 karakter";
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
    await new Promise((r) => setTimeout(r, 1500)); // simulate
    setLoading(false);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel — decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-brand-700 to-brand-900 relative overflow-hidden items-end p-12">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-white max-w-sm">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
            <Waves className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-display text-4xl font-800 mb-4 leading-tight">
            Bersih itu mudah, biarkan kami yang bekerja.
          </h2>
          <p className="text-brand-200 text-sm leading-relaxed">
            Masuk untuk melacak pesanan, melihat riwayat, dan menikmati penawaran eksklusif.
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 lg:max-w-[460px] flex items-center justify-center p-6 sm:p-10 bg-white">
        <div className="w-full max-w-sm">
          {/* Logo mobile */}
          <Link href="/" className="flex items-center gap-2 mb-10 lg:mb-8">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <Waves className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-lg font-700 text-ink">
              Fresh<span className="text-brand-600">Wave</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="font-display text-3xl font-800 text-ink mb-2">Selamat datang</h1>
            <p className="text-sm text-ink-muted">
              Belum punya akun?{" "}
              <Link
                href="/auth/register"
                className="text-brand-600 font-semibold hover:underline"
              >
                Daftar gratis
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              error={errors.password}
              leftIcon={<Lock className="w-4 h-4" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="hover:text-ink transition-colors"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
              autoComplete="current-password"
            />

            <div className="flex justify-end">
              <a href="#" className="text-xs text-brand-600 hover:underline">
                Lupa kata sandi?
              </a>
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              loading={loading}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              {loading ? "Memproses..." : "Masuk"}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-surface-border" />
            <span className="text-xs text-ink-muted">atau masuk dengan</span>
            <div className="flex-1 h-px bg-surface-border" />
          </div>

          {/* Social (demo) */}
          <button className="w-full flex items-center justify-center gap-3 border border-surface-border rounded-xl py-2.5 text-sm font-medium text-ink hover:bg-surface-soft transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Lanjutkan dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}
