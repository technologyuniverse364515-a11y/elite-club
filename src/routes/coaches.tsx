import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { coaches } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: `${coaches.title} — Apex Sports Academy` },
      { name: "description", content: coaches.subtitle },
      { property: "og:title", content: coaches.title },
      { property: "og:description", content: coaches.subtitle },
      { property: "og:image", content: images.coach1 },
      { name: "twitter:image", content: images.coach1 },
    ],
  }),
  component: CoachesPage,
});

function CoachesPage() {
  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-28">
          <span className="eyebrow border-white/30 bg-white/10 text-white">Our team</span>
          <h1 className="heading-xl mt-4 text-white">{coaches.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{coaches.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {coaches.list.map((c) => (
            <article key={c.name} className="card-elevated overflow-hidden grid sm:grid-cols-[200px_1fr] hover-lift">
              <div className="aspect-square sm:aspect-auto overflow-hidden">
                <img src={images[c.img]} alt={c.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl uppercase">{c.name}</h2>
                <p className="text-xs uppercase tracking-widest text-accent-2 mt-1">{c.role}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.specialties.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="container-x mt-12 flex justify-center">
          <CtaButton button={buttons.startTrial} variant="accent" size="lg" />
        </div>
      </section>
    </PageShell>
  );
}
