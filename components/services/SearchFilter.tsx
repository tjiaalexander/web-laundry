"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { type ServiceCategory, categoryLabels } from "@/lib/data";
import { cn } from "@/lib/utils";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: ServiceCategory | "all") => void;
  activeCategory: ServiceCategory | "all";
  resultCount: number;
}

const categories: Array<{ value: ServiceCategory | "all"; label: string }> = [
  { value: "all", label: "Semua" },
  { value: "cuci", label: categoryLabels.cuci },
  { value: "setrika", label: categoryLabels.setrika },
  { value: "dry-clean", label: categoryLabels["dry-clean"] },
  { value: "ekspres", label: categoryLabels.ekspres },
];

export function SearchFilter({
  onSearch,
  onFilter,
  activeCategory,
  resultCount,
}: SearchFilterProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="space-y-4">
      {/* Search + count */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Input
            placeholder="Cari layanan..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            leftIcon={<Search className="w-4 h-4" />}
            rightIcon={
              query ? (
                <button
                  onClick={clearSearch}
                  className="hover:text-ink transition-colors"
                  type="button"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : null
            }
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-ink-muted shrink-0">
          <SlidersHorizontal className="w-4 h-4" />
          <span>
            <strong className="text-ink">{resultCount}</strong> layanan
          </span>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => onFilter(value)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-xl border transition-all duration-150",
              activeCategory === value
                ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                : "bg-white text-ink-soft border-surface-border hover:border-brand-300 hover:text-brand-600"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
