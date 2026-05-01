import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { brand, nav } from "@/config/text";
import { buttons } from "@/config/buttons";
import { CtaButton } from "./CtaButton";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-navy text-primary-foreground font-display text-lg">
            A
          </span>
          <span className="font-display text-lg uppercase tracking-wide text-foreground group-hover:text-accent-2 transition-colors">
            {brand.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent-2" }}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton button={buttons.startTrial} variant="accent" size="sm" />
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-[slide-down_0.25s_ease-out_both]">
          <nav className="container-x flex flex-col py-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent-2 bg-secondary" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3">
              <CtaButton button={buttons.startTrial} variant="accent" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
