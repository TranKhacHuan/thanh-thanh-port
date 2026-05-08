import { Button } from "@/components/ui/button";
import { Download, Mail, Sparkles } from "lucide-react";
import heroImg from "@/assets/portfolio/hero-portrait.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--primary-glow)]/20 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-accent/30 blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/70 border border-border text-xs sm:text-sm text-muted-foreground backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Pharmaceutical Product Manager
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] mt-5">
              Pharmaceutical
              <span className="block bg-gradient-to-r from-primary to-[var(--primary-glow)] bg-clip-text text-transparent">
                Product Manager
              </span>
              <span className="block text-foreground/80">Portfolio</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              <span className="italic text-foreground/90">Nguyễn Thị Thanh</span> — Dược sĩ, Giảng viên Dược lý &amp; Thạc sĩ Quản lý Dược.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="/thanh_cv.pdf" download>
                <Button size="lg" className="gap-2 shadow-[var(--shadow-soft)]">
                  <Download className="w-4 h-4" /> Tải CV
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="w-4 h-4" /> Liên hệ ngay
                </Button>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { v: "3+", l: "Năm kinh nghiệm" },
                { v: "95%+", l: "Phản hồi tích cực" },
                { v: "90%+", l: "Đạt KPI doanh số" },
              ].map((s) => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl text-primary">{s.v}</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 w-full max-w-md">
            <div className="absolute inset-0 -m-3 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/40 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border/60 shadow-[var(--shadow-elegant)] bg-card">
              <img src={heroImg} alt="Dược sĩ Nguyễn Thị Thanh" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] hidden sm:block">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Pharmacist</div>
              <div className="text-sm">Thanh Thanh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
