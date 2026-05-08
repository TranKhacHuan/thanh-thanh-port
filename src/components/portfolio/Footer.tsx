export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Nguyễn Thị Thanh — Pharmaceutical Product Manager Portfolio.</p>
        <p className="italic">Made with care.</p>
      </div>
    </footer>
  );
}
