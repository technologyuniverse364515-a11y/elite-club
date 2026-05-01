import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { blog } from "@/config/text";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `${blog.title} — Apex Sports Academy` },
      { name: "description", content: blog.subtitle },
      { property: "og:title", content: blog.title },
      { property: "og:description", content: blog.subtitle },
      { property: "og:image", content: images.blog1 },
      { name: "twitter:image", content: images.blog1 },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-28">
          <span className="eyebrow border-white/30 bg-white/10 text-white">Insights</span>
          <h1 className="heading-xl mt-4 text-white">{blog.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{blog.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.posts.map((p) => (
            <article key={p.slug} className="card-elevated overflow-hidden flex flex-col hover-lift">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={images[p.img]} alt={p.title} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                  <span className="text-accent-2 font-semibold">{p.category}</span>
                  <span className="text-muted-foreground">{p.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-xl uppercase leading-tight">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-2">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
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
