import { useEffect, useState } from "react";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";
import { CtaButton } from "./CtaButton";
import { X, Sparkles } from "lucide-react";

const STORAGE_KEY = "apex-lead-popup-dismissed";

export function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = window.setTimeout(() => setOpen(true), 6000);
    return () => window.clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm p-4 animate-[fade-in_0.3s_ease-out_both]">
      <div className="relative w-full max-w-md card-elevated overflow-hidden animate-[scale-in_0.4s_ease-out_both]">
        <div className="gradient-orange p-6 text-accent-2-foreground">
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-black/20 hover:bg-black/30 text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> Limited offer
          </div>
          <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
            {messages.popupOffer}
          </h3>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground">{messages.popupSubtitle}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-accent-2">
            ⏳ {messages.urgency}
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <CtaButton button={{ text: messages.popupCta, link: buttons.startTrial.link }} size="lg" />
            <button
              onClick={close}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              No thanks, I'll keep browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
