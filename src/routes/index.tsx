import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { buttons } from "@/config/buttons";
import { home, sports } from "@/config/text";
import { messages } from "@/config/messages";
import { images } from "@/config/images";
import { ArrowRight, Check, Trophy, Users, Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Sports Academy — Train Like a Champion" },
      {
        name: "description",
        content:
          "Premium multi-sport coaching across 6 cities. Free trial session. Pro coaches in football, cricket, tennis, basketball, swimming and athletics.",
      },
      { property: "og:title", content: "Apex Sports Academy — Train Like a Champion" },
      { property: "og:description", content: "Elite multi-sport coaching for ages 6 to 26. Free trial session." },
      { property: "og:image", content: images.hero },
      { name: "twitter:image", content: images.hero },
    ],
  }),
  component: HomePage,
});

const whyIcons = [Trophy, Users, Calendar, MapPin];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-navy">
        <img
          src={images.hero}
          alt={images.heroAlt}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(135deg, oklch(0.16 0.05 265 / 0.85) 0%, oklch(0.22 0.07 265 / 0.75) 60%, oklch(0.18 0.06 265 / 0.9) 100%)",
          }}
        />
        <div className="relative container-x pt-20 pb-24 sm:pt-28 sm:pb-36 text-primary-foreground">
          <div className="max-w-3xl animate-[fade-up_0.8s_ease-out_both]">
            <span className="eyebrow border-white/30 bg-white/10 text-white">{home.heroEyebrow}</span>
            <h1 className="heading-xl mt-5 text-white text-balance">{home.heroTitle}</h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">{home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton button={buttons.startTrial} variant="accent" size="lg" />
              <CtaButton button={buttons.viewPlans} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-widest text-white/60">⏳ {messages.urgency}</p>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {home.heroStats.map((s, i) => (
              <div key={s.label} className="animate-[fade-up_0.7s_ease-out_both]" style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="font-display text-4xl sm:text-5xl text-accent-2">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-border bg-secondary">
        <div className="container-x py-4 text-center text-xs sm:text-sm font-medium uppercase tracking-widest text-muted-foreground">
          ⭐ {messages.trustBadge}
        </div>
      </div>

      {/* BRAND STORY */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg mt-4 text-balance">{home.storyTitle}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{home.storyBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaButton button={buttons.exploreSports} variant="primary" />
              <Link to="/about" className="inline-flex items-center gap-1 text-sm font-semibold text-accent-2 hover:gap-2 transition-all">
                Read full story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl ring-accent-glow">
              <img src={images.about} alt={images.aboutAlt} className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block card-elevated bg-card p-5 max-w-[200px]">
              <div className="font-display text-3xl text-accent-2">10+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years building champions</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY APEX */}
      <section className="section-tight bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="Why Apex" title={home.whyTitle} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {home.whyItems.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div key={item.title} className="card-elevated p-6 hover-lift">
                  <div className="grid h-11 w-11 place-items-center rounded-xl gradient-orange text-accent-2-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPORTS PREVIEW */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Sports" title={sports.title} subtitle={sports.subtitle} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sports.list.map((s) => (
              <Link
                key={s.key}
                to="/sports"
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] hover-lift"
              >
                <img src={images[s.key as keyof typeof images]} alt={s.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                  <div className="text-xs uppercase tracking-widest text-accent-2">{s.tagline}</div>
                  <h3 className="mt-1 font-display text-2xl uppercase">{s.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CtaButton button={buttons.exploreSports} variant="primary" size="lg" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-tight bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="Athletes & Parents" title={home.testimonialsTitle} />
        </div>
        <div className="mt-10">
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-navy text-primary-foreground p-10 sm:p-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent-2/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent-2/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="eyebrow border-white/30 bg-white/10 text-white">Free trial</span>
              <h2 className="heading-lg mt-4 text-white">{home.ctaBannerTitle}</h2>
              <p className="mt-4 text-lg text-white/80">{home.ctaBannerBody}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-white/85">
                {["No commitment", "Any sport, any location", "Real coaching, not a tour", "Equipment provided"].map((x) => (
                  <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent-2" /> {x}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton button={buttons.startTrial} variant="accent" size="lg" />
                <CtaButton button={buttons.contactWhatsApp} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
