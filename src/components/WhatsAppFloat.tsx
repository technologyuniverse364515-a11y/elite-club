import { buttons } from "@/config/buttons";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={buttons.contactWhatsApp.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_oklch(0.7_0.2_150/0.6)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
