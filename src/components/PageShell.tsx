import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LeadPopup } from "./LeadPopup";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <LeadPopup />
      <WhatsAppFloat />
    </div>
  );
}
