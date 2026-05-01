"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Waves, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/order", label: "Pesan Sekarang" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-surface-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center group-hover:bg-brand-700 transition-colors">
              <Waves className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-700 text-lg text-ink">
              Fresh<span className="text-brand-600">Wave</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  pathname === href
                    ? "text-brand-600 bg-brand-50"
                    : "text-ink-soft hover:text-ink hover:bg-surface-soft"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" icon={<LogIn className="w-4 h-4" />}>
                Masuk
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm" icon={<User className="w-4 h-4" />}>
                Daftar
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-ink-soft hover:bg-surface-soft transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-surface-border",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-xl transition-all",
                pathname === href
                  ? "text-brand-600 bg-brand-50"
                  : "text-ink-soft hover:text-ink hover:bg-surface-soft"
              )}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-2 mt-3 pt-3 border-t border-surface-border">
            <Link href="/auth/login" className="flex-1">
              <Button variant="outline" fullWidth size="sm">
                Masuk
              </Button>
            </Link>
            <Link href="/auth/register" className="flex-1">
              <Button fullWidth size="sm">
                Daftar
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
