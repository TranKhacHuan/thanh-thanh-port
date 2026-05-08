import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Download } from "lucide-react";
import { useState } from "react";

const contacts = [
  { icon: MapPin, label: "Địa chỉ", value: "Thuận Giao, Thuận An, TP. Hồ Chí Minh" },
  { icon: Phone, label: "Điện thoại", value: "0976 794 619", href: "tel:0976794619" },
  { icon: Mail, label: "Email", value: "thanhthanh17519@gmail.com", href: "mailto:thanhthanh17519@gmail.com" },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Liên hệ từ ${name || "website"}`);
    const body = encodeURIComponent(`Họ tên: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:thanhthanh17519@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Liên hệ</div>
          <h2 className="text-4xl md:text-6xl mt-3 leading-tight">
            Hãy làm việc <span className="italic text-primary">cùng nhau</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tôi luôn sẵn sàng cho các cơ hội Product Management, Trade Marketing và đào tạo trong ngành Dược.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href ?? "#"}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-soft)] hover:border-primary/40 transition-all"
              >
                <span className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                  <c.icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium mt-0.5">{c.value}</div>
                </div>
              </a>
            ))}
            <a href="/thanh_cv.pdf" download className="block">
              <Button size="lg" variant="outline" className="w-full gap-2 h-14 text-base">
                <Download className="w-5 h-5" /> Tải Portfolio / CV (PDF)
              </Button>
            </a>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-[var(--shadow-soft)] space-y-4">
            <div>
              <Label htmlFor="name">Họ và tên</Label>
              <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nguyễn Văn A" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ban@congty.com" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Lời nhắn</Label>
              <Textarea id="message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Nội dung trao đổi..." rows={5} className="mt-1.5" />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2">
              <Mail className="w-4 h-4" /> Gửi lời nhắn
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
