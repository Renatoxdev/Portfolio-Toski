import { Header } from "./Header";
import { Footer } from "./Footer";
export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="page-shell">
      <Header />
      <main id="main-content" className={className}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
