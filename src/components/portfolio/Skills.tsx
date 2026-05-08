const skills = [
  "Product Management",
  "Trade Marketing",
  "Đào tạo & Thuyết trình",
  "Tư vấn Dược lâm sàng",
  "Quản lý danh mục",
  "KOL Relations",
  "Sales Enablement",
  "Brand Activation",
];

export function Skills() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Năng lực</div>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Kỹ năng &amp; Chuyên môn</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
          {skills.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary hover:text-primary transition-colors shadow-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
