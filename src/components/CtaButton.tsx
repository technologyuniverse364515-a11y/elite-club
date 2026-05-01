import { Link } from "@tanstack/react-router";
import type { CtaButton as CtaButtonType } from "@/config/buttons";

type Props = {
  button: CtaButtonType;
  variant?: "accent" | "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wide rounded-full transition-all duration-200 hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  accent:
    "gradient-orange text-accent-2-foreground shadow-[0_10px_30px_-10px_oklch(0.72_0.2_45/0.6)] hover:shadow-[0_15px_40px_-10px_oklch(0.72_0.2_45/0.7)]",
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background",
  ghost:
    "text-foreground hover:bg-secondary",
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-sm",
};

export function CtaButton({
  button,
  variant = "accent",
  size = "md",
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (button.external || button.link.startsWith("http")) {
    return (
      <a href={button.link} target="_blank" rel="noopener noreferrer" className={cls}>
        {button.text}
      </a>
    );
  }
  if (button.link.includes("#")) {
    return (
      <a href={button.link} className={cls}>
        {button.text}
      </a>
    );
  }
  return (
    <Link to={button.link} className={cls}>
      {button.text}
    </Link>
  );
}
