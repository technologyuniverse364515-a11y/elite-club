import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { schedule } from "@/config/text";
import { buttons } from "@/config/buttons";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: `${schedule.title} — Apex Sports Academy` },
      { name: "description", content: schedule.subtitle },
      { property: "og:title", content: schedule.title },
      { property: "og:description", content: schedule.subtitle },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-24 sm:py-28">
          <span className="eyebrow border-white/30 bg-white/10 text-white">Calendar</span>
          <h1 className="heading-xl mt-4 text-white">{schedule.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{schedule.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {schedule.days.map((d) => (
            <div key={d.day} className="card-elevated p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl uppercase">{d.day}</h3>
                <span className="text-xs uppercase tracking-widest text-accent-2">{d.slots.length} slots</span>
              </div>
              <ul className="mt-4 divide-y divide-border">
                {d.slots.map((s, i) => (
                  <li key={i} className="py-3 flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-0.5 text-accent-2 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{s.time}</div>
                      <div className="text-sm text-muted-foreground">{s.sport} · {s.level}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container-x mt-12 flex justify-center">
          <CtaButton button={buttons.startTrial} variant="accent" size="lg" />
        </div>
      </section>
    </PageShell>
  );
}
