import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { locations } from "@/config/text";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";
import { MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: `${locations.title} — Apex Sports Academy` },
      { name: "description", content: locations.subtitle },
      { property: "og:title", content: locations.title },
      { property: "og:description", content: locations.subtitle },
      { property: "og:image", content: images.location1 },
      { name: "twitter:image", content: images.location1 },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-28">
          <span className="eyebrow border-white/30 bg-white/10 text-white">Locations</span>
          <h1 className="heading-xl mt-4 text-white">{locations.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{locations.subtitle}</p>
        </div>
      </section>

      <section className="section space-y-12">
        {locations.list.map((loc, i) => (
          <div key={loc.city} className="container-x">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className={`aspect-[4/3] overflow-hidden rounded-3xl ${i % 2 ? "lg:order-2" : ""}`}>
                <img src={images[loc.img]} alt={loc.name} className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className={`card-elevated p-8 flex flex-col justify-center ${i % 2 ? "lg:order-1" : ""}`}>
                <span className="eyebrow">{loc.city}</span>
                <h2 className="heading-md mt-3">{loc.name}</h2>
                <ul className="mt-5 space-y-3 text-foreground">
                  <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 text-accent-2 shrink-0" /> {loc.address}</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent-2 shrink-0" /> {loc.phone}</li>
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent-2 shrink-0" /> {loc.hours}</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {loc.sports.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">{s}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-semibold uppercase tracking-wide rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                  <CtaButton button={buttons.startTrial} variant="accent" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
