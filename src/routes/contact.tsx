import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { CtaButton } from "@/components/CtaButton";
import { brand, contact } from "@/config/text";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";
import { Phone, Mail, MapPin, ChevronRight, ChevronLeft, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `${contact.title} — Apex Sports Academy` },
      { name: "description", content: contact.subtitle },
      { property: "og:title", content: contact.title },
      { property: "og:description", content: contact.subtitle },
    ],
  }),
  component: ContactPage,
});

type FormState = {
  name: string;
  email: string;
  phone: string;
  sport: string;
  age: string;
  message: string;
};

function ContactPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState<"success" | "error" | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    sport: contact.sportsOptions[0],
    age: "",
    message: "",
  });

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Static site: simulate submission
      if (!form.name || !form.email) throw new Error("missing");
      setSubmitted("success");
    } catch {
      setSubmitted("error");
    }
  };

  const steps = [
    { label: "About you" },
    { label: "Your sport" },
    { label: "Confirm" },
  ];

  return (
    <PageShell>
      <section className="gradient-navy text-primary-foreground">
        <div className="container-x py-20 sm:py-24">
          <span className="eyebrow border-white/30 bg-white/10 text-white">Contact</span>
          <h1 className="heading-xl mt-4 text-white">{contact.title}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{contact.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-10">
          {/* FORM */}
          <div id="form" className="card-elevated p-7 sm:p-9 scroll-mt-24">
            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-2">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                      i <= step ? "gradient-orange text-accent-2-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {i < step ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className={`text-xs uppercase tracking-widest ${i === step ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                  {i < steps.length - 1 && <span className="mx-1 h-px w-6 bg-border" />}
                </div>
              ))}
            </div>

            {submitted === "success" ? (
              <div className="mt-8 text-center py-10">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-orange text-accent-2-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-display text-2xl uppercase">You're in!</h2>
                <p className="mt-2 text-muted-foreground max-w-sm mx-auto">{messages.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                {step === 0 && (
                  <div className="space-y-4 animate-[fade-in_0.3s_ease-out_both]">
                    <Field label={contact.formLabels.name}>
                      <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Alex Morgan" />
                    </Field>
                    <Field label={contact.formLabels.email}>
                      <input required type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="alex@example.com" />
                    </Field>
                    <Field label={contact.formLabels.phone}>
                      <input value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+1 234 567 890" />
                    </Field>
                  </div>
                )}
                {step === 1 && (
                  <div className="space-y-4 animate-[fade-in_0.3s_ease-out_both]">
                    <Field label={contact.formLabels.sport}>
                      <select value={form.sport} onChange={update("sport")} className={inputCls}>
                        {contact.sportsOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label={contact.formLabels.age}>
                      <input value={form.age} onChange={update("age")} className={inputCls} placeholder="e.g. 14" />
                    </Field>
                    <Field label={contact.formLabels.message}>
                      <textarea value={form.message} onChange={update("message")} rows={4} className={`${inputCls} resize-none`} placeholder="Goals, preferred location, schedule preferences…" />
                    </Field>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-3 animate-[fade-in_0.3s_ease-out_both] text-sm">
                    <Summary label="Name" value={form.name} />
                    <Summary label="Email" value={form.email} />
                    <Summary label="Phone" value={form.phone || "—"} />
                    <Summary label="Sport" value={form.sport} />
                    <Summary label="Age" value={form.age || "—"} />
                    <Summary label="Notes" value={form.message || "—"} />
                  </div>
                )}

                {submitted === "error" && (
                  <p className="text-sm text-destructive">{messages.formError}</p>
                )}

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                  {step < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s + 1)}
                      className="inline-flex items-center justify-center gap-1 h-11 px-6 rounded-full gradient-orange text-accent-2-foreground font-semibold uppercase tracking-wide text-sm hover-lift"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-11 px-6 rounded-full gradient-orange text-accent-2-foreground font-semibold uppercase tracking-wide text-sm hover-lift"
                    >
                      {contact.formLabels.submit}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <h3 className="font-display text-lg uppercase">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-foreground">
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 text-accent-2" /> {brand.address}</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent-2" /> {brand.phone}</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent-2" /> {brand.email}</li>
              </ul>
              <div className="mt-5">
                <CtaButton button={buttons.contactWhatsApp} variant="accent" />
              </div>
            </div>
            <div className="card-elevated overflow-hidden aspect-[4/3]">
              <iframe
                title="Apex Academy location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.address)}&z=13&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-2 focus:outline-none focus:ring-2 focus:ring-accent-2/30 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium text-right">{value}</span>
    </div>
  );
}
