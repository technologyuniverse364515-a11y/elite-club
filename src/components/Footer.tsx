import { Link } from "@tanstack/react-router";
import { brand, nav } from "@/config/text";
import { buttons } from "@/config/buttons";
import { CtaButton } from "./CtaButton";
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground mt-12">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-2 text-accent-2-foreground font-display text-lg">
              A
            </span>
            <span className="font-display text-xl uppercase">{brand.name}</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            Premium multi-sport coaching for athletes of every level. Six sports, six locations, one standard.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={brand.socials.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent-2 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={brand.socials.youtube} aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent-2 transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href={brand.socials.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent-2 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-accent-2">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.slice(0, 6).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-primary-foreground/80 hover:text-accent-2 transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-accent-2">More</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.slice(6).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-primary-foreground/80 hover:text-accent-2 transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-accent-2">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent-2" /> {brand.address}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent-2" /> {brand.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent-2" /> {brand.email}</li>
          </ul>
          <div className="mt-5">
            <CtaButton button={buttons.contactWhatsApp} variant="accent" size="sm" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Crafted for champions.</p>
        </div>
      </div>
    </footer>
  );
}
