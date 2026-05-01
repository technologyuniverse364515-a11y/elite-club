import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaButton } from "@/components/CtaButton";
import { sports } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";
import { Check } from "lucide-react";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: `${sports.title} — Apex Sports Academy` },
      { name: "description", content: sports.subtitle },
      { property: "og:title", content: sports.title },
      { property: "og:description", content: sports.subtitle },
      { property: "og:image", content: images.football },
      { name: "twitter:image", content: images.football },
    ],
  }),
  component: SportsPage,
});

function SportsPage() {
  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-28">
          <span className="eyebrow border-white/30 bg-white/10 text-white">Programs</span>
          <h1 className="heading-xl mt-4 text-white max-w-3xl">{sports.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{sports.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x space-y-16">
          {sports.list.map((s, i) => (
            <article key={s.key} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className={`aspect-[4/3] overflow-hidden rounded-3xl ${i % 2 ? "lg:order-2" : ""}`}>
                <img src={images[s.key as keyof typeof images]} alt={s.name} className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <span className="eyebrow">{s.tagline}</span>
                <h2 className="heading-lg mt-4">{s.name}</h2>
                <p className="mt-5 text-lg text-muted-foreground">{s.body}</p>
                <ul className="mt-6 space-y-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-foreground">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-2/15 text-accent-2"><Check className="h-3.5 w-3.5" /></span>
                      <span className="text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <CtaButton button={buttons.startTrial} variant="accent" />
                  <CtaButton button={buttons.viewSchedule} variant="outline" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-tight bg-secondary">
        <div className="container-x flex flex-col items-center text-center gap-5">
          <SectionHeader title="Not sure which sport is right?" subtitle="Book a free trial — try any sport, any location, with no commitment." />
          <div className="flex flex-wrap gap-3 justify-center">
            <CtaButton button={buttons.startTrial} variant="accent" size="lg" />
            <CtaButton button={buttons.contactWhatsApp} variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
