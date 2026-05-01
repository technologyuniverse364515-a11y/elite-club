import { testimonials } from "@/config/text";
import { images } from "@/config/images";
import { Star } from "lucide-react";

export function TestimonialsSlider() {
  // Duplicate for seamless marquee
  const items = [...testimonials, ...testimonials];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite]">
        {items.map((t, i) => (
          <figure
            key={i}
            className="card-elevated w-[340px] sm:w-[420px] shrink-0 p-6 sm:p-7"
          >
            <div className="flex gap-1 text-accent-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-base text-foreground leading-relaxed">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img
                src={images[t.avatar]}
                alt={t.name}
                className="h-11 w-11 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
