"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SearchFilter } from "@/components/services/SearchFilter";
import { services, type ServiceCategory } from "@/lib/data";
import { PackageSearch } from "lucide-react";

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "all">("all");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchCat = activeCategory === "all" || s.category === activeCategory;
      const matchQuery =
        query === "" ||
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, activeCategory]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Page header */}
        <div className="bg-gradient-to-br from-brand-50 to-sky-50 border-b border-surface-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <h1 className="font-display text-4xl sm:text-5xl font-800 text-ink mb-3">
              Semua Layanan
            </h1>
            <p className="text-lg text-ink-muted max-w-xl">
              Temukan layanan laundry yang sesuai kebutuhan Anda — dari cuci harian hingga
              perawatan pakaian premium.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Filters */}
          <div className="mb-8">
            <SearchFilter
              onSearch={setQuery}
              onFilter={setActiveCategory}
              activeCategory={activeCategory}
              resultCount={filtered.length}
            />
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-surface-muted rounded-2xl flex items-center justify-center mb-4">
                <PackageSearch className="w-8 h-8 text-ink-muted" />
              </div>
              <h3 className="font-display text-xl font-700 text-ink mb-2">
                Layanan tidak ditemukan
              </h3>
              <p className="text-sm text-ink-muted">
                Coba ubah kata kunci atau kategori pencarian Anda.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
