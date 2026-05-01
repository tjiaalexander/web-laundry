import { type Transaction, statusConfig } from "@/lib/data";
import { formatRupiah, formatDate } from "@/lib/utils";
import { Package, Scale, Calendar } from "lucide-react";

interface TransactionCardProps {
  transaction: Transaction;
}

export function TransactionCard({ transaction: t }: TransactionCardProps) {
  const { label, color } = statusConfig[t.status];

  return (
    <div className="bg-white rounded-2xl border border-surface-border shadow-card p-5 hover:shadow-card-hover transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <p className="text-xs text-ink-muted font-mono mb-1">{t.id}</p>
          <h3 className="font-display text-base font-700 text-ink">{t.serviceName}</h3>
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ${color}`}
        >
          {label}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 text-sm mb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-ink-muted text-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>Tanggal</span>
          </div>
          <span className="text-ink font-medium text-xs">{formatDate(t.date)}</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-ink-muted text-xs">
            <Scale className="w-3.5 h-3.5" />
            <span>Berat</span>
          </div>
          <span className="text-ink font-medium text-xs">{t.weight} kg</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-ink-muted text-xs">
            <Package className="w-3.5 h-3.5" />
            <span>Total</span>
          </div>
          <span className="text-ink font-bold text-sm">{formatRupiah(t.totalPrice)}</span>
        </div>
      </div>

      {t.notes && (
        <p className="text-xs text-ink-muted bg-surface-soft rounded-lg px-3 py-2 border border-surface-border italic">
          📝 {t.notes}
        </p>
      )}
    </div>
  );
}
