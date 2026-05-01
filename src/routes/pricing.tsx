import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { pricing } from "@/config/text";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: `${pricing.title} — Apex Sports Academy` },
      { name: "description", content: pricing.subtitle },
      { property: "og:title", content: pricing.title },
      { property: "og:description", content: pricing.subtitle },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-28 text-center">
          <span className="eyebrow border-white/30 bg-white/10 text-white mx-auto">Plans</span>
          <h1 className="heading-xl mt-4 text-white">{pricing.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">{pricing.subtitle}</p>
          <p className="mt-4 text-xs uppercase tracking-widest text-accent-2">⏳ {messages.urgency}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {pricing.plans.map((p) => (
            <div
              key={p.name}
              className={`card-elevated p-7 flex flex-col ${
                p.best ? "ring-2 ring-accent-2 relative scale-100 lg:scale-[1.04]" : ""
              }`}
            >
              {p.best && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full gradient-orange px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-2-foreground">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}
              <h3 className="font-display text-2xl uppercase">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{p.description}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-5xl text-foreground">{p.price}</span>
                <span className="text-sm text-muted-foreground pb-1.5">{p.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 mt-0.5 text-accent-2 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <CtaButton button={buttons.startTrial} variant={p.best ? "accent" : "primary"} size="md" className="w-full" />
              </div>
            </div>
          ))}
        </div>
        <p className="container-x mt-10 text-center text-sm text-muted-foreground">{pricing.comparisonNote}</p>
      </section>
    </PageShell>
  );
}
