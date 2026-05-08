import { Button } from "@/components/ui/button";
import { Download, FileText, Target, Lightbulb } from "lucide-react";

export function Scenario() {
  return (
    <section id="scenario" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Case Study</div>
          <h2 className="text-4xl md:text-5xl mt-3">Tình huống giả định</h2>
          <p className="mt-4 text-muted-foreground">
            Phân tích chiến lược giải quyết vấn đề và đề xuất giải pháp dựa trên một tình huống kinh doanh giả định.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-[var(--shadow-elegant)]">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-2xl mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Bối cảnh tình huống
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trình bày cách thức tiếp cận vấn đề, phân tích thị trường, và đưa ra chiến lược định vị sản phẩm cụ thể nhằm giải quyết thách thức kinh doanh đặt ra trong bài tập tình huống (Case Study).
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    Nội dung nổi bật
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Phân tích SWOT và định vị thị trường ngách",
                      "Chiến lược Marketing và Trade Marketing Mix",
                      "Dự phóng ngân sách và hiệu quả kỳ vọng (ROI)",
                      "Timeline triển khai chi tiết",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-1/3 bg-primary/5 rounded-2xl p-6 border border-primary/10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-inner">
                  <FileText className="w-10 h-10" />
                </div>
                <h4 className="text-xl mb-2">Bản thuyết trình</h4>
                <p className="text-sm text-muted-foreground mb-8">
                  Tài liệu PDF chi tiết bao gồm slide thuyết trình và số liệu minh họa.
                </p>
                <a href="/project.pdf" download className="w-full">
                  <Button className="w-full gap-2 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform">
                    <Download className="w-4 h-4" /> Tải file giả định
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
