import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { gallery } from "@/config/text";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";

const gridItems = [
  { img: "gallery1", span: "row-span-2" },
  { img: "gallery2", span: "" },
  { img: "gallery3", span: "" },
  { img: "gallery4", span: "row-span-2" },
  { img: "gallery5", span: "" },
  { img: "gallery6", span: "" },
  { img: "gallery7", span: "" },
  { img: "gallery8", span: "col-span-2" },
] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `${gallery.title} — Apex Sports Academy` },
      { name: "description", content: gallery.subtitle },
      { property: "og:title", content: gallery.title },
      { property: "og:description", content: gallery.subtitle },
      { property: "og:image", content: images.gallery1 },
      { name: "twitter:image", content: images.gallery1 },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-28">
          <span className="eyebrow border-white/30 bg-white/10 text-white">Gallery</span>
          <h1 className="heading-xl mt-4 text-white">{gallery.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{gallery.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
            {gridItems.map((g, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl ${g.span}`}>
                <img
                  src={images[g.img]}
                  alt="Apex training moment"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
        <div className="container-x mt-12 flex justify-center">
          <CtaButton button={buttons.startTrial} variant="accent" size="lg" />
        </div>
      </section>
    </PageShell>
  );
}
