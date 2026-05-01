import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaButton } from "@/components/CtaButton";
import { about, coaches } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${about.title} — Apex Sports Academy` },
      { name: "description", content: about.subtitle },
      { property: "og:title", content: about.title },
      { property: "og:description", content: about.subtitle },
      { property: "og:image", content: images.about },
      { name: "twitter:image", content: images.about },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-32">
          <span className="eyebrow border-white/30 bg-white/10 text-white">About us</span>
          <h1 className="heading-xl mt-4 text-white max-w-3xl">{about.title}</h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">{about.subtitle}</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg mt-4">{about.storyTitle}</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              {about.storyBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={images.about} alt={images.aboutAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-tight bg-secondary">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[about.mission, about.vision].map((b) => (
            <div key={b.title} className="card-elevated p-8">
              <span className="eyebrow">{b.title}</span>
              <p className="mt-4 text-xl text-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Our Values" title="What we stand for" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {about.values.map((v, i) => (
              <div key={v.title} className="card-elevated p-6">
                <div className="font-display text-5xl text-accent-2">0{i + 1}</div>
                <h3 className="mt-3 font-display text-xl uppercase">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES PREVIEW */}
      <section className="section-tight bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="Coaches" title={coaches.title} subtitle={coaches.subtitle} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coaches.list.map((c) => (
              <div key={c.name} className="card-elevated overflow-hidden hover-lift">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={images[c.img]} alt={c.name} className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg uppercase">{c.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-accent-2 mt-1">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CtaButton button={buttons.meetCoaches} variant="primary" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-x flex flex-col items-center text-center gap-4">
          <h2 className="heading-md">Ready to train with us?</h2>
          <CtaButton button={buttons.startTrial} variant="accent" size="lg" />
        </div>
      </section>
    </PageShell>
  );
}
