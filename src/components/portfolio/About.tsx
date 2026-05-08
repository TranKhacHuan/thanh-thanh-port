import aboutImg from "@/assets/portfolio/about.jpg";
import decor1 from "@/assets/portfolio/decor1.png";
import { GraduationCap, BookOpen, Presentation } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/40 to-primary/10 blur-2xl -z-10" />

            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-elegant)] relative z-10 transition-transform duration-500 hover:scale-[1.02] bg-card">
              <Carousel className="w-full group" opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-[4/5] w-full relative">
                      <img src={aboutImg} alt="Thanh Thanh tại nhà thuốc" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/5] w-full relative flex items-center justify-center bg-primary/5 p-12">
                      <img src={decor1} alt="Decoration" className="w-full h-full object-contain opacity-80" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
                <CarouselNext className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
              </Carousel>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Giới thiệu</div>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
              Nguyễn Thị <span className="italic text-primary">Thanh</span>
            </h2>

            <blockquote className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl italic shadow-sm">
              "Với nền tảng là một Giảng viên Dược lý và đang theo đuổi chương trình Thạc sĩ Quản lý Dược, tôi tin rằng sức mạnh của một sản phẩm nằm ở cách chúng ta truyền tải giá trị của nó đến khách hàng. Portfolio này là nơi tôi thể hiện cách mình kết nối giữa kiến thức dược lý chuyên sâu với các chiến dịch nhãn hàng thực chiến để chinh phục thị trường."
            </blockquote>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { icon: GraduationCap, title: "Thạc sĩ", sub: "Quản lý Dược" },
                { icon: BookOpen, title: "Giảng viên", sub: "Dược lý - LS" },
                { icon: Presentation, title: "Product", sub: "Manager" },
              ].map((it) => (
                <div key={it.title} className="rounded-2xl border border-border bg-card p-5 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300">
                  <it.icon className="w-6 h-6 text-primary mb-3" />
                  <div className="font-serif text-lg leading-tight">{it.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{it.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
