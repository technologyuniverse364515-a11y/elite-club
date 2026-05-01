// All media URLs. Swap these to rebrand instantly.
// Using Unsplash hotlinked images with explicit sizing for fast loads.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Hero & branding
  hero: u("photo-1517649763962-0c623066013b"), // stadium athlete
  heroAlt: "Athlete sprinting in a professional stadium",
  about: u("photo-1471295253337-3ceaaedca402"), // team huddle
  aboutAlt: "Team huddle on training ground",

  // Sports
  cricket: u("photo-1531415074968-036ba1b575da"),
  football: u("photo-1431324155629-1a6deb1dec8d"),
  tennis: u("photo-1526232761682-d26e03ac148e"),
  basketball: u("photo-1546519638-68e109498ffc"),
  swimming: u("photo-1530549387789-4c1017266635"),
  athletics: u("photo-1552674605-db6ffd4facb5"),

  // Coaches (portraits)
  coach1: u("photo-1571019613454-1cb2f99b2d8b", 800),
  coach2: u("photo-1599058917212-d750089bc07e", 800),
  coach3: u("photo-1594381898411-846e7d193883", 800),
  coach4: u("photo-1568602471122-7832951cc4c5", 800),

  // Gallery
  gallery1: u("photo-1517466787929-bc90951d0974"),
  gallery2: u("photo-1574629810360-7efbbe195018"),
  gallery3: u("photo-1579952363873-27f3bade9f55"),
  gallery4: u("photo-1541534401786-2077eed87a74"),
  gallery5: u("photo-1552667466-07770ae110d0"),
  gallery6: u("photo-1543357480-c60d40007a3f"),
  gallery7: u("photo-1565992441121-4367c2967103"),
  gallery8: u("photo-1517438476312-10d79c077509"),

  // Blog covers
  blog1: u("photo-1599058945522-28d584b6f0ff"),
  blog2: u("photo-1518611012118-696072aa579a"),
  blog3: u("photo-1461896836934-ffe607ba8211"),
  blog4: u("photo-1546483875-ad9014c88eba"),
  blog5: u("photo-1517836357463-d25dfeac3438"),
  blog6: u("photo-1527719327859-c6ce80353573"),

  // Locations (academy buildings)
  location1: u("photo-1574629810360-7efbbe195018"),
  location2: u("photo-1574680096145-d05b474e2155"),
  location3: u("photo-1571902943202-507ec2618e8f"),

  // Testimonial avatars
  avatar1: u("photo-1494790108377-be9c29b29330", 200),
  avatar2: u("photo-1500648767791-00dcc994a43e", 200),
  avatar3: u("photo-1438761681033-6461ffad8d80", 200),
} as const;

export type ImageKey = keyof typeof images;
