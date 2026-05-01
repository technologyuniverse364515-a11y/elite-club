import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeader({ eyebrow, title, subtitle, align = "center", children }: Props) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignment} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-lg text-foreground text-balance">{title}</h2>
      {subtitle && <p className="text-base sm:text-lg text-muted-foreground text-balance">{subtitle}</p>}
      {children}
    </div>
  );
}
