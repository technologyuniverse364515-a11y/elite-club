// Conversion / system messages
export const messages = {
  popupOffer: "Get a Free Trial Session – Limited Time!",
  popupSubtitle: "Join 2,000+ athletes who started their journey with a free coaching session.",
  popupCta: "Claim My Free Trial",
  formSuccess: "Your inquiry has been submitted successfully! Our team will reach out within 24 hours.",
  formError: "Something went wrong. Please try again or contact us on WhatsApp.",
  urgency: "Only 12 trial slots left this month",
  trustBadge: "Trusted by 2,000+ athletes across 6 cities",
  newsletterCta: "Get weekly training tips from our pro coaches",
  newsletterSuccess: "You're in! Check your inbox for your first training guide.",
} as const;

export type MessageKey = keyof typeof messages;
