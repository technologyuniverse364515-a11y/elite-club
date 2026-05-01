// All CTA buttons for the site. Change these to rebrand instantly.
export type CtaButton = { text: string; link: string; external?: boolean };

export const buttons = {
  joinNow: { text: "Join Our Club", link: "/contact" },
  viewPlans: { text: "View Pricing Plans", link: "/pricing" },
  exploreLocations: { text: "Find Locations", link: "/locations" },
  startTrial: { text: "Start Free Trial", link: "/contact#form" },
  contactWhatsApp: {
    text: "Chat on WhatsApp",
    link: "https://wa.me/1234567890",
    external: true,
  },
  exploreSports: { text: "Explore Sports", link: "/sports" },
  meetCoaches: { text: "Meet the Coaches", link: "/coaches" },
  viewSchedule: { text: "See Training Schedule", link: "/schedule" },
  bookTrial: { text: "Book a Trial Session", link: "/contact#form" },
  readMore: { text: "Read More", link: "/blog" },
} as const satisfies Record<string, CtaButton>;

export type ButtonKey = keyof typeof buttons;
