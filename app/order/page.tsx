"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { services } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";
import { CheckCircle2, Package, MapPin, CreditCard, ChevronRight } from "lucide-react";

const STEPS = ["Pilih Layanan", "Detail Pesanan", "Konfirmasi"];

function OrderForm() {
  const searchParams = useSearchParams();
  const defaultServiceId = searchParams.get("service") || "";

  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    serviceId: defaultServiceId,
    weight: "2",
    name: "",
    phone: "",
    address: "",
    notes: "",
    pickup: "antar-sendiri" as "antar-sendiri" | "dijemput",
  });

  const selectedService = services.find((s) => s.id === form.serviceId);
  const weight = parseFloat(form.weight) || 0;
  const subtotal = selectedService ? selectedService.pricePerKg * Math.max(weight, selectedService.minWeight) : 0;
  const pickupFee = form.pickup === "dijemput" ? 5000 : 0;
  const total = subtotal + pickupFee;

  const update = (key: string, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = () => setDone(true);

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="font-display text-3xl font-800 text-ink mb-3">Pesanan Berhasil!</h2>
        <p className="text-ink-muted max-w-md mb-2">
          Terima kasih <strong>{form.name}</strong>! Pesanan Anda telah kami terima.
        </p>
        <p className="text-sm text-ink-muted mb-8">
          Kami akan menghubungi Anda di{" "}
          <strong className="text-ink">{form.phone}</strong> untuk konfirmasi.
        </p>
        <div className="bg-surface-soft rounded-2xl border border-surface-border p-6 mb-8 text-left w-full max-w-sm">
          <p className="text-xs text-ink-muted mb-3 uppercase tracking-wide font-semibold">
            Ringkasan
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-ink-muted">Layanan</span>
              <span className="font-medium text-ink">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-muted">Berat</span>
              <span className="font-medium text-ink">{form.weight} kg</span>
            </div>
            <div className="flex justify-between border-t border-surface-border pt-2 mt-2">
              <span className="font-semibold text-ink">Total</span>
              <span className="font-bold text-brand-600">{formatRupiah(total)}</span>
            </div>
          </div>
        </div>
        <Button onClick={() => { setDone(false); setStep(0); setForm({ serviceId: "", weight: "2", name: "", phone: "", address: "", notes: "", pickup: "antar-sendiri" }); }}>
          Buat Pesanan Baru
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Stepper */}
      <div className="flex items-center gap-0 mb-10">
        {STEPS.map((label, idx) => (
          <div key={label} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  idx < step
                    ? "bg-brand-600 border-brand-600 text-white"
                    : idx === step
                    ? "bg-white border-brand-600 text-brand-600"
                    : "bg-white border-surface-border text-ink-muted"
                }`}
              >
                {idx < step ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
              </div>
              <span
                className={`text-xs mt-1.5 font-medium ${
                  idx === step ? "text-brand-600" : "text-ink-muted"
                }`}
              >
                {label}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <div
                className={`flex-1 h-px mx-2 mb-5 transition-all ${
                  idx < step ? "bg-brand-600" : "bg-surface-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 0 — Pilih Layanan */}
      {step === 0 && (
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-700 text-ink mb-6">Pilih Layanan</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => update("serviceId", s.id)}
                className={`text-left p-4 rounded-2xl border-2 transition-all ${
                  form.serviceId === s.id
                    ? "border-brand-600 bg-brand-50"
                    : "border-surface-border hover:border-brand-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-display font-700 text-sm text-ink">{s.name}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{s.duration}</p>
                  </div>
                  <p className="text-sm font-bold text-ink shrink-0">
                    {formatRupiah(s.pricePerKg)}/kg
                  </p>
                </div>
              </button>
            ))}
          </div>

          {selectedService && (
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 text-sm text-brand-800">
              ✓ Dipilih: <strong>{selectedService.name}</strong> —{" "}
              {formatRupiah(selectedService.pricePerKg)}/kg, min {selectedService.minWeight} kg
            </div>
          )}

          <div className="flex justify-end pt-4">
            <Button
              disabled={!form.serviceId}
              onClick={() => setStep(1)}
              icon={<ChevronRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Lanjutkan
            </Button>
          </div>
        </div>
      )}

      {/* Step 1 — Detail */}
      {step === 1 && (
        <div className="space-y-5">
          <h2 className="font-display text-2xl font-700 text-ink mb-6">Detail Pesanan</h2>

          {/* Weight */}
          <div>
            <Input
              label="Berat Pakaian (kg)"
              type="number"
              min={selectedService?.minWeight || 1}
              step="0.5"
              value={form.weight}
              onChange={(e) => update("weight", e.target.value)}
              hint={`Minimum ${selectedService?.minWeight || 1} kg`}
            />
          </div>

          {/* Pickup method */}
          <div>
            <p className="text-sm font-medium text-ink mb-2">Metode Pengambilan</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "antar-sendiri", label: "Antar Sendiri", desc: "Gratis", icon: Package },
                { value: "dijemput", label: "Dijemput", desc: "+Rp 5.000", icon: MapPin },
              ].map(({ value, label, desc, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => update("pickup", value)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    form.pickup === value
                      ? "border-brand-600 bg-brand-50"
                      : "border-surface-border bg-white hover:border-brand-200"
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-2 ${form.pickup === value ? "text-brand-600" : "text-ink-muted"}`} />
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="text-xs text-ink-muted">{desc}</p>
                </button>
              ))}
            </div>
          </div>

          <Input
            label="Nama Lengkap"
            placeholder="Nama Anda"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          <Input
            label="Nomor WhatsApp"
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          <Input
            label="Alamat"
            placeholder="Alamat lengkap untuk penjemputan/pengiriman"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />
          <Textarea
            label="Catatan (opsional)"
            placeholder="Instruksi khusus untuk pakaian Anda..."
            rows={3}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
          />

          {/* Price preview */}
          {selectedService && (
            <div className="bg-surface-soft rounded-xl border border-surface-border p-4">
              <p className="text-sm font-semibold text-ink mb-3">Estimasi Harga</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-ink-muted">
                  <span>{selectedService.name} × {Math.max(weight, selectedService.minWeight)} kg</span>
                  <span>{formatRupiah(subtotal)}</span>
                </div>
                {pickupFee > 0 && (
                  <div className="flex justify-between text-ink-muted">
                    <span>Biaya penjemputan</span>
                    <span>{formatRupiah(pickupFee)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-ink border-t border-surface-border pt-2 mt-2">
                  <span>Total</span>
                  <span className="text-brand-600">{formatRupiah(total)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <Button variant="outline" onClick={() => setStep(0)} className="flex-1">
              Kembali
            </Button>
            <Button
              disabled={!form.name || !form.phone || !form.address}
              onClick={() => setStep(2)}
              icon={<ChevronRight className="w-4 h-4" />}
              iconPosition="right"
              className="flex-1"
            >
              Lanjutkan
            </Button>
          </div>
        </div>
      )}

      {/* Step 2 — Konfirmasi */}
      {step === 2 && (
        <div className="space-y-5">
          <h2 className="font-display text-2xl font-700 text-ink mb-6">Konfirmasi Pesanan</h2>

          <div className="bg-white border border-surface-border rounded-2xl divide-y divide-surface-border">
            {[
              { label: "Layanan", value: selectedService?.name },
              { label: "Berat", value: `${form.weight} kg` },
              { label: "Pengambilan", value: form.pickup === "dijemput" ? "Dijemput (+Rp 5.000)" : "Antar Sendiri" },
              { label: "Nama", value: form.name },
              { label: "WhatsApp", value: form.phone },
              { label: "Alamat", value: form.address },
              form.notes ? { label: "Catatan", value: form.notes } : null,
            ]
              .filter((x): x is { label: string; value: string } => x !== null)
              .map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4 px-5 py-3">
                  <span className="text-sm text-ink-muted">{label}</span>
                  <span className="text-sm font-medium text-ink text-right">{value}</span>
                </div>
              ))}
            <div className="flex justify-between px-5 py-4 bg-brand-50">
              <span className="font-bold text-ink flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Total Pembayaran
              </span>
              <span className="font-bold text-xl text-brand-600">{formatRupiah(total)}</span>
            </div>
          </div>

          <p className="text-xs text-ink-muted text-center">
            Dengan memesan, Anda menyetujui syarat & ketentuan FreshWave Laundry.
          </p>

          <div className="flex gap-3 pt-2">
            <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
              Kembali
            </Button>
            <Button onClick={handleSubmit} className="flex-1">
              Konfirmasi Pesanan
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <div className="bg-gradient-to-br from-brand-50 to-sky-50 border-b border-surface-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <h1 className="font-display text-4xl font-800 text-ink mb-2">Buat Pesanan</h1>
            <p className="text-ink-muted">Isi formulir di bawah untuk memulai pesanan laundry Anda.</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <Suspense fallback={<div className="text-center py-12 text-ink-muted">Memuat...</div>}>
            <OrderForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
