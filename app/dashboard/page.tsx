"use client";

import { useState } from "react";
import Link from "next/link";
import { transactions, statusConfig } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { TransactionCard } from "@/components/dashboard/TransactionCard";
import { Button } from "@/components/ui/Button";
import {
  User,
  Package,
  TrendingUp,
  Clock,
  Plus,
  LogOut,
  Star,
  ChevronRight,
  Waves,
} from "lucide-react";

type StatusFilter = "semua" | keyof typeof statusConfig;

const dummyUser = {
  name: "Rina Kusuma",
  email: "rina@email.com",
  phone: "0812-3456-7890",
  joinDate: "Maret 2024",
  totalOrders: 24,
  totalSpent: 340000,
  points: 1200,
};

export default function DashboardPage() {
  const [filter, setFilter] = useState<StatusFilter>("semua");

  const filtered =
    filter === "semua"
      ? transactions
      : transactions.filter((t) => t.status === filter);

  const statusFilters: Array<{ value: StatusFilter; label: string }> = [
    { value: "semua", label: "Semua" },
    { value: "pending", label: statusConfig.pending.label },
    { value: "proses", label: statusConfig.proses.label },
    { value: "selesai", label: statusConfig.selesai.label },
    { value: "diambil", label: statusConfig.diambil.label },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16 bg-surface-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl font-800 text-ink">
                Halo, {dummyUser.name.split(" ")[0]}! 👋
              </h1>
              <p className="text-sm text-ink-muted mt-1">
                Kelola pesanan dan pantau status laundry Anda.
              </p>
            </div>
            <Link href="/order">
              <Button icon={<Plus className="w-4 h-4" />}>Pesan Baru</Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            {/* Sidebar */}
            <aside className="space-y-4">
              {/* Profile card */}
              <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-display font-700 text-ink">{dummyUser.name}</p>
                    <p className="text-xs text-ink-muted">{dummyUser.email}</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-muted">No. HP</span>
                    <span className="font-medium text-ink">{dummyUser.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Bergabung</span>
                    <span className="font-medium text-ink">{dummyUser.joinDate}</span>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-surface-border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                      FreshPoints
                    </div>
                    <span className="font-display text-xl font-800 text-brand-600">
                      {dummyUser.points.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-surface-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-500 rounded-full transition-all"
                      style={{ width: `${(dummyUser.points / 2000) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-ink-muted mt-1.5">
                    {2000 - dummyUser.points} poin lagi untuk hadiah!
                  </p>
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 py-2 rounded-xl transition-colors">
                  <LogOut className="w-4 h-4" />
                  Keluar
                </button>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-2xl border border-surface-border shadow-card p-5">
                <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-4">
                  Statistik
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Package,
                      label: "Total Pesanan",
                      value: dummyUser.totalOrders,
                      color: "text-blue-600 bg-blue-50",
                    },
                    {
                      icon: TrendingUp,
                      label: "Total Pengeluaran",
                      value: formatRupiah(dummyUser.totalSpent),
                      color: "text-green-600 bg-green-50",
                    },
                    {
                      icon: Clock,
                      label: "Dalam Proses",
                      value: transactions.filter(
                        (t) => t.status === "pending" || t.status === "proses"
                      ).length,
                      color: "text-amber-600 bg-amber-50",
                    },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-ink-muted">{label}</p>
                        <p className="text-sm font-bold text-ink">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick nav */}
              <div className="bg-white rounded-2xl border border-surface-border shadow-card p-3">
                {[
                  { href: "/services", label: "Jelajahi Layanan", icon: Waves },
                  { href: "/order", label: "Buat Pesanan", icon: Plus },
                ].map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-sm text-ink-soft hover:bg-surface-soft hover:text-ink transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4" />
                      {label}
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </aside>

            {/* Main content */}
            <div>
              {/* Active orders */}
              {transactions.some(
                (t) => t.status === "pending" || t.status === "proses"
              ) && (
                <div className="bg-brand-600 rounded-2xl p-5 text-white mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-200 mb-1">
                    Aktif
                  </p>
                  <p className="font-display text-lg font-700 mb-3">
                    {
                      transactions.filter(
                        (t) => t.status === "pending" || t.status === "proses"
                      ).length
                    }{" "}
                    pesanan sedang diproses
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {transactions
                      .filter((t) => t.status === "pending" || t.status === "proses")
                      .map((t) => (
                        <div
                          key={t.id}
                          className="bg-white/10 rounded-xl px-3 py-1.5 text-xs font-medium"
                        >
                          {t.id} · {t.serviceName}
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2 mb-5">
                {statusFilters.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFilter(value)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all ${
                      filter === value
                        ? "bg-brand-600 text-white border-brand-600"
                        : "bg-white text-ink-soft border-surface-border hover:border-brand-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Transaction list */}
              {filtered.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {filtered.map((t) => (
                    <TransactionCard key={t.id} transaction={t} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-surface-border p-10 text-center">
                  <Package className="w-10 h-10 text-ink-muted mx-auto mb-3" />
                  <p className="font-display text-lg font-700 text-ink mb-1">Tidak ada pesanan</p>
                  <p className="text-sm text-ink-muted">
                    Belum ada pesanan dengan status ini.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
