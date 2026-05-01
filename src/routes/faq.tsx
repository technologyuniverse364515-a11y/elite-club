import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { faq } from "@/config/text";
import { buttons } from "@/config/buttons";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `${faq.title} — Apex Sports Academy` },
      { name: "description", content: faq.subtitle },
      { property: "og:title", content: faq.title },
      { property: "og:description", content: faq.subtitle },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-28">
          <span className="eyebrow border-white/30 bg-white/10 text-white">Help</span>
          <h1 className="heading-xl mt-4 text-white">{faq.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{faq.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="space-y-3">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="card-elevated overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg uppercase text-foreground">{item.q}</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-accent-2 shrink-0">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-muted-foreground text-sm sm:text-base leading-relaxed animate-[fade-in_0.25s_ease-out_both]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <CtaButton button={buttons.contactWhatsApp} variant="accent" size="lg" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
