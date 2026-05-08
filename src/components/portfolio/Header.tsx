import { Button } from "@/components/ui/button";
import { Pill, Download, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#projects", label: "Dự án" },
  { href: "#contact", label: "Liên hệ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-[var(--primary-glow)] grid place-items-center text-primary-foreground shadow-[var(--shadow-soft)]">
            <Pill className="w-5 h-5" />
          </span>
          <span className="font-semibold text-lg">Thanh Thanh</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/thanh_cv.pdf" download className="hidden sm:inline-flex">
            <Button size="sm" className="gap-2">
              <Download className="w-4 h-4" /> Tải CV
            </Button>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="/thanh_cv.pdf" download>
              <Button size="sm" className="w-full gap-2">
                <Download className="w-4 h-4" /> Tải CV
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
