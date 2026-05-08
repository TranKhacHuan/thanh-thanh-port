import p1a from "@/assets/portfolio/project1-a.png";
import p1b from "@/assets/portfolio/project1-b.png";
import p2a from "@/assets/portfolio/project2-a.png";
import p2b from "@/assets/portfolio/project2-b.png";
import { CheckCircle2, Target } from "lucide-react";

type Project = {
  no: string;
  title: string;
  context: string;
  challenge?: string;
  actions: { title: string; desc: string }[];
  results: string[];
  tags: string[];
  images: string[];
};

const projects: Project[] = [
  {
    no: "01",
    title: "Quản trị triển khai và khích lệ doanh số điểm bán mới",
    context:
      "Hệ thống nhà thuốc lớn mở rộng điểm bán. Yêu cầu điểm bán mới phải nhanh chóng đi vào ổn định vận hành và đạt mục tiêu doanh số ban đầu.",
    challenge:
      "Điểm bán mới chưa có tệp khách hàng thân thiết. Nhân sự mới cần được đào tạo nhanh về quy trình và sản phẩm mục tiêu.",
    actions: [
      {
        title: "Trang bị (Hỗ trợ Sales)",
        desc: "Hướng dẫn kiến thức sản phẩm chuyên sâu cho đội ngũ mới, đặc biệt nhóm Generic và TPCN. Trang bị Marketing Materials (Slide, Leaflet) trực quan để tư vấn hiệu quả.",
      },
      {
        title: "Quản lý danh mục (Product Management)",
        desc: "Tối ưu hóa danh mục dựa trên phân tích dân cư và nhu cầu khu vực, đảm bảo đủ hàng các sản phẩm 'hit-list' để tăng tỷ lệ chốt sale.",
      },
      {
        title: "Trade Marketing & CSKH",
        desc: "Thiết lập quan hệ với KOLs y tế địa phương để tạo uy tín. Thu thập phản hồi để liên tục cải thiện hoạt động và bắt nhịp xu hướng.",
      },
    ],
    results: [
      "Điểm bán mới đi vào hoạt động ổn định chỉ sau 1 tháng",
      "Tỷ lệ chốt Sale các sản phẩm mục tiêu đạt >90% kế hoạch",
      "Tăng doanh số và quảng bá thương hiệu nhà thuốc tại khu vực",
    ],
    tags: ["Product Management", "Sales Enablement", "Trade Marketing"],
    images: [p1a, p1b],
  },
  {
    no: "02",
    title: "Chuyển hóa chiến dịch Trade Marketing thành kết quả kinh doanh trực tiếp",
    context:
      "Dự án tiêu biểu 'Tâm An Thân Khang' — chương trình tập trung tư vấn sức khỏe tổng thể, TPCN tại nhà thuốc nhằm tăng doanh số và gắn kết khách hàng.",
    actions: [
      {
        title: "Product Management",
        desc: "Hỗ trợ Sales bán hàng; phối hợp xử lý vấn đề phát sinh trên field. Đảm bảo quy trình FEFO, kiểm soát nhãn mác, bao bì theo quy định lưu hành.",
      },
      {
        title: "Trade Marketing & BD",
        desc: "Phối hợp xây dựng và triển khai chương trình quảng cáo, khuyến mãi cho nhãn hàng. Thu thập dữ liệu để đánh giá và cải thiện nhóm sản phẩm.",
      },
      {
        title: "Tổ chức & Thuyết trình",
        desc: "Trực tiếp chuẩn bị và thuyết trình chuyên môn sản phẩm. Chuyển hóa Guidelines, phác đồ thành kịch bản tư vấn dễ hiểu cho khách hàng.",
      },
    ],
    results: [
      "Chương trình thành công, >95% khách hàng tham gia phản hồi tích cực",
      "Thúc đẩy tăng trưởng doanh số nhãn hàng/sản phẩm phụ trách",
      "Nâng tầm thương hiệu nhà thuốc, tạo niềm tin cho người mua",
    ],
    tags: ["Trade Marketing", "Brand Activation", "Customer Education"],
    images: [p2a, p2b],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Portfolio</div>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Dự án của tôi</h2>
          <p className="mt-4 text-muted-foreground">
            Hai dự án thực chiến — từ vận hành điểm bán đến chiến dịch trade marketing chuyển hóa thành doanh số.
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-0">
        {projects.map((p, idx) => (
          <div
            key={p.no}
            className={`py-16 md:py-24 ${idx % 2 === 1 ? "bg-primary/5" : ""}`}
          >
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start container mx-auto px-4 sm:px-6">
              <div className={`space-y-4 lg:col-span-2 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="grid grid-cols-2 gap-3">
                  {p.images.map((src, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] ${i === 0 ? "aspect-[4/5]" : "aspect-[4/5] mt-8"}`}
                    >
                      <img src={src} alt={`${p.title} - ảnh ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className={`lg:col-span-3 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl md:text-6xl text-primary/30">{p.no}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mt-4 leading-tight">{p.title}</h3>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-4 text-sm md:text-base text-muted-foreground">
                  <div>
                    <div className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Bối cảnh</div>
                    <p>{p.context}</p>
                  </div>
                  {p.challenge && (
                    <div>
                      <div className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Thách thức</div>
                      <p>{p.challenge}</p>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <div className="font-semibold text-foreground text-sm uppercase tracking-wider mb-4">Vai trò &amp; Hành động</div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {p.actions.map((a) => (
                      <div key={a.title} className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                            <Target className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm leading-tight">{a.title}</div>
                            <p className="text-sm text-muted-foreground mt-1.5">{a.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/30 border border-primary/20 p-5">
                  <div className="font-semibold text-sm uppercase tracking-wider mb-3 text-primary">Kết quả</div>
                  <ul className="space-y-2">
                    {p.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
