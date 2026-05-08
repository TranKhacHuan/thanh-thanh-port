import { Briefcase } from "lucide-react";

const items = [
  {
    period: "06/2024 — 12/2025",
    role: "Dược sĩ chuyên môn",
    org: "Công ty Cổ phần Dược phẩm Pharmacity",
  },
  {
    period: "08/2023 — 02/2026",
    role: "Giảng viên Dược lý — Dược lâm sàng",
    org: "Cơ sở đào tạo Dược",
  },
  {
    period: "09/2022 — 05/2023",
    role: "Dược sĩ Tư vấn & Bán hàng",
    org: "Công ty Cổ phần Dược phẩm An Khang Pharma",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Hành trình</div>
          <h2 className="text-4xl md:text-5xl mt-3">Kinh nghiệm</h2>
          <p className="mt-4 text-muted-foreground">
            Từ tư vấn bán hàng đến giảng dạy và quản lý chuyên môn — một lộ trình gắn liền với người bệnh và sản phẩm.
          </p>
        </div>

        <div className="mt-14 max-w-3xl mx-auto relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border" aria-hidden />
          <div className="space-y-6">
            {items.map((it, i) => (
              <div key={i} className="relative pl-12">
                <span className="absolute left-4 -translate-x-1/2 top-5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm hover:shadow-[var(--shadow-soft)] transition-shadow">
                  <div className="text-xs font-medium text-primary uppercase tracking-wider">{it.period}</div>
                  <h3 className="text-xl md:text-2xl mt-1.5">{it.role}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {it.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
