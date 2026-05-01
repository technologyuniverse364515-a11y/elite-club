// All copy lives here. Edit this file to relaunch the site for a new club.

export const brand = {
  name: "Apex Sports Academy",
  tagline: "Train Like a Champion",
  phone: "+1 (234) 567-890",
  email: "hello@apexsports.club",
  address: "1200 Champion Way, Sportstown",
  socials: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sports", label: "Sports" },
  { to: "/coaches", label: "Coaches" },
  { to: "/schedule", label: "Schedule" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/locations", label: "Locations" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const home = {
  heroEyebrow: "Premium Multi-Sport Academy",
  heroTitle: "Train Like a Champion. Perform Like a Pro.",
  heroSubtitle:
    "Elite coaching across 6 sports for ages 6 to 26. Structured pathways from beginner to professional.",
  heroStats: [
    { value: "2K+", label: "Athletes Trained" },
    { value: "25+", label: "Pro Coaches" },
    { value: "6", label: "Sports Programs" },
    { value: "6", label: "City Locations" },
  ],
  storyTitle: "Built by Athletes. Trusted by Champions.",
  storyBody:
    "For over a decade, Apex Sports Academy has been the launchpad for serious athletes. We blend international training methodologies with personalised mentoring to help every member reach their peak — whether the goal is the school team, a national squad, or simply lifelong fitness.",
  whyTitle: "Why Apex",
  whyItems: [
    {
      title: "Pro-Level Coaching",
      body: "Every coach is internationally certified with competitive playing experience.",
    },
    {
      title: "Structured Pathways",
      body: "Clear progression from foundation to elite — no guesswork, no plateaus.",
    },
    {
      title: "World-Class Facilities",
      body: "FIFA-grade turf, championship courts, and full sports-science labs.",
    },
    {
      title: "Performance Tracking",
      body: "Quarterly assessments and personal dashboards for every athlete.",
    },
  ],
  testimonialsTitle: "What Our Athletes Say",
  ctaBannerTitle: "Your first session is on us.",
  ctaBannerBody:
    "Try a coaching session at any location, completely free. No commitment, just real training.",
};

export const about = {
  title: "About Apex Sports Academy",
  subtitle: "A decade of building champions, one athlete at a time.",
  storyTitle: "Our Story",
  storyBody: [
    "Apex was founded in 2012 by a small group of former national-level athletes who shared one frustration: most academies were built around facilities, not athletes. We set out to flip that model.",
    "Today, more than 2,000 athletes train with us across 6 cities. Over 60 of our alumni compete at state level, and 12 have gone on to represent their country.",
    "We are proud to be a place where serious ambition meets serious coaching — without ever losing the joy of sport.",
  ],
  mission: {
    title: "Our Mission",
    body: "To give every athlete — at every level — access to world-class coaching, structured progression, and a community that pushes them to be better.",
  },
  vision: {
    title: "Our Vision",
    body: "To be the most trusted name in athlete development across the region by 2030, producing 100+ professional athletes through our programs.",
  },
  values: [
    { title: "Discipline", body: "Show up. Do the work. Repeat." },
    { title: "Integrity", body: "Honest feedback, transparent progress." },
    { title: "Excellence", body: "Good enough is never the goal." },
    { title: "Community", body: "Champions are built by their team." },
  ],
};

export const sports = {
  title: "Sports We Coach",
  subtitle: "Six disciplines. One standard: excellence.",
  list: [
    {
      key: "cricket",
      name: "Cricket",
      tagline: "From the nets to the national team.",
      body: "Batting, bowling and fielding programs led by ex first-class players. Video analysis, strength conditioning and match simulations included.",
      highlights: ["Video analysis", "Match-day strategy", "Strength & conditioning"],
    },
    {
      key: "football",
      name: "Football",
      tagline: "European-style technical training.",
      body: "UEFA-licensed coaches, full-size pitch, GPS tracking. Position-specific drills from U8 to U23.",
      highlights: ["UEFA-licensed coaches", "GPS performance tracking", "Position-specific drills"],
    },
    {
      key: "tennis",
      name: "Tennis",
      tagline: "ITF pathway from foundation to tour.",
      body: "Stroke-by-stroke biomechanics, tactical play, and tournament prep on 6 championship courts.",
      highlights: ["Biomechanics review", "Tournament prep", "Singles & doubles tactics"],
    },
    {
      key: "basketball",
      name: "Basketball",
      tagline: "Skill, IQ, and championship mentality.",
      body: "Shooting mechanics, defensive systems, and league-style scrimmages every weekend.",
      highlights: ["Shooting clinics", "Defensive systems", "Weekly scrimmages"],
    },
    {
      key: "swimming",
      name: "Swimming",
      tagline: "Stroke perfection and competitive speed.",
      body: "All four strokes, race-pace sets, and underwater video analysis in our 25m heated pool.",
      highlights: ["Underwater video", "Race-pace training", "Open-water prep"],
    },
    {
      key: "athletics",
      name: "Athletics",
      tagline: "Track, field, and total athleticism.",
      body: "Sprint mechanics, jumps, throws, and endurance — backed by our sports-science lab.",
      highlights: ["Sprint mechanics", "Jumps & throws", "Sports-science lab"],
    },
  ],
};

export const coaches = {
  title: "Meet the Coaches",
  subtitle: "World-class playing experience. Internationally certified.",
  list: [
    {
      name: "Marcus Chen",
      role: "Head of Football",
      bio: "Former pro midfielder, UEFA A licence. 14 years coaching across academies in Europe and Asia.",
      img: "coach1" as const,
      specialties: ["Tactical play", "Youth development", "U23 pathway"],
    },
    {
      name: "Priya Raman",
      role: "Head of Tennis",
      bio: "Ex WTA Tour player, ranked top 200. ITF Level 3 coach with a focus on technical foundations.",
      img: "coach2" as const,
      specialties: ["Stroke biomechanics", "Mental game", "Tournament prep"],
    },
    {
      name: "David Okonkwo",
      role: "Head of Athletics",
      bio: "Olympic 400m semi-finalist. IAAF Level 5. Specialist in sprint mechanics and speed development.",
      img: "coach3" as const,
      specialties: ["Sprint mechanics", "Strength & power", "Race strategy"],
    },
    {
      name: "Sara Lindgren",
      role: "Head of Cricket",
      bio: "Former national team all-rounder. Level 3 ECB certified, with a sharp eye for batting technique.",
      img: "coach4" as const,
      specialties: ["Batting technique", "Spin bowling", "Fielding drills"],
    },
  ],
};

export const schedule = {
  title: "Weekly Training Schedule",
  subtitle: "Pick the slot that fits your routine. All sessions 90 minutes.",
  days: [
    {
      day: "Monday",
      slots: [
        { time: "06:00 – 07:30", sport: "Athletics", level: "All levels" },
        { time: "16:00 – 17:30", sport: "Football", level: "U12" },
        { time: "18:00 – 19:30", sport: "Tennis", level: "Intermediate" },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { time: "06:00 – 07:30", sport: "Swimming", level: "Elite squad" },
        { time: "16:00 – 17:30", sport: "Cricket", level: "U14" },
        { time: "18:00 – 19:30", sport: "Basketball", level: "Adults" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { time: "06:00 – 07:30", sport: "Football", level: "Adults" },
        { time: "16:00 – 17:30", sport: "Tennis", level: "Beginner" },
        { time: "18:00 – 19:30", sport: "Athletics", level: "U16" },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { time: "06:00 – 07:30", sport: "Swimming", level: "All levels" },
        { time: "16:00 – 17:30", sport: "Cricket", level: "U18" },
        { time: "18:00 – 19:30", sport: "Football", level: "U16" },
      ],
    },
    {
      day: "Friday",
      slots: [
        { time: "06:00 – 07:30", sport: "Athletics", level: "Elite squad" },
        { time: "16:00 – 17:30", sport: "Basketball", level: "U14" },
        { time: "18:00 – 19:30", sport: "Tennis", level: "Advanced" },
      ],
    },
    {
      day: "Saturday",
      slots: [
        { time: "08:00 – 10:00", sport: "All sports", level: "Trial sessions" },
        { time: "10:30 – 12:00", sport: "Football", level: "Match play" },
        { time: "16:00 – 17:30", sport: "Cricket", level: "Match play" },
      ],
    },
  ],
};

export const pricing = {
  title: "Membership Plans",
  subtitle: "No hidden fees. Cancel anytime. First session always free.",
  plans: [
    {
      name: "Starter",
      price: "$59",
      cadence: "/ month",
      best: false,
      description: "Perfect for trying a sport seriously for the first time.",
      features: [
        "1 sport, 2 sessions per week",
        "Group coaching (up to 10)",
        "Access to 1 location",
        "Quarterly progress report",
      ],
    },
    {
      name: "Performance",
      price: "$129",
      cadence: "/ month",
      best: true,
      description: "Our most popular plan. Built for committed athletes.",
      features: [
        "Up to 2 sports, 4 sessions per week",
        "Small-group coaching (up to 6)",
        "Access to all locations",
        "Monthly performance review",
        "Strength & conditioning included",
      ],
    },
    {
      name: "Elite",
      price: "$249",
      cadence: "/ month",
      best: false,
      description: "Personalised pathway for serious competitive athletes.",
      features: [
        "Unlimited sports & sessions",
        "1-on-1 head coach sessions",
        "Sports-science lab access",
        "Tournament travel support",
        "Personal performance dashboard",
      ],
    },
  ],
  comparisonNote: "All plans include a free trial session, no joining fee, and cancel-anytime billing.",
};

export const gallery = {
  title: "Inside the Academy",
  subtitle: "Real athletes. Real training. Real progress.",
};

export const blog = {
  title: "Latest Sports Insights",
  subtitle: "Coaching tips, athlete stories, and training science from our pros.",
  posts: [
    {
      slug: "build-explosive-speed",
      title: "5 Drills to Build Explosive Speed in 6 Weeks",
      excerpt: "Sprint coach David Okonkwo breaks down the exact drills our U16 squad uses to drop 0.4s off their 60m time.",
      date: "Apr 18, 2026",
      readTime: "6 min read",
      img: "blog1" as const,
      category: "Athletics",
    },
    {
      slug: "young-cricketer-mental-game",
      title: "The Mental Game: Coaching Confidence in Young Cricketers",
      excerpt: "Why technique is only half the battle, and how we build the other half — session by session.",
      date: "Apr 11, 2026",
      readTime: "5 min read",
      img: "blog2" as const,
      category: "Cricket",
    },
    {
      slug: "football-position-by-position",
      title: "Football Position-by-Position: What to Train at Every Age",
      excerpt: "A complete map of what attackers, midfielders, defenders and keepers should focus on from U8 to U18.",
      date: "Apr 04, 2026",
      readTime: "8 min read",
      img: "blog3" as const,
      category: "Football",
    },
    {
      slug: "tennis-serve-biomechanics",
      title: "Tennis Serve Biomechanics: 3 Fixes That Add 15mph",
      excerpt: "Coach Priya Raman shares the small technical adjustments that turn a club serve into a weapon.",
      date: "Mar 27, 2026",
      readTime: "7 min read",
      img: "blog4" as const,
      category: "Tennis",
    },
    {
      slug: "swimming-race-pace",
      title: "How to Train Race Pace Without Burning Out",
      excerpt: "The interval structure our elite squad uses to peak for nationals — backed by sports science.",
      date: "Mar 20, 2026",
      readTime: "6 min read",
      img: "blog5" as const,
      category: "Swimming",
    },
    {
      slug: "basketball-shooting-form",
      title: "Shooting Form: A Frame-by-Frame Guide for Coaches",
      excerpt: "Break down the perfect jump shot into 8 checkpoints you can teach in your next session.",
      date: "Mar 13, 2026",
      readTime: "9 min read",
      img: "blog6" as const,
      category: "Basketball",
    },
  ],
};

export const faq = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know before you join.",
  items: [
    {
      q: "Do you offer free trial sessions?",
      a: "Yes — every new athlete gets one full coaching session free, in any sport, at any of our 6 locations. No commitment required.",
    },
    {
      q: "What ages do you coach?",
      a: "We coach ages 6 to 26. Our programs are split into U8, U10, U12, U14, U16, U18 and Adult/Elite tracks.",
    },
    {
      q: "Do I need any equipment to start?",
      a: "Just shoes you can train in. We provide all sport-specific equipment for trial sessions and your first month.",
    },
    {
      q: "How are athletes grouped?",
      a: "By age and ability, not just age. Every athlete is assessed in their first week and placed in the right group — and re-assessed every quarter.",
    },
    {
      q: "Can I switch sports mid-membership?",
      a: "Absolutely. Performance and Elite members can train in multiple sports at any time. Starter members can switch sports once per quarter.",
    },
    {
      q: "Do you offer competitive pathways?",
      a: "Yes. Athletes on the Elite track receive personalised pathway plans, tournament entry support, and direct introductions to scouts.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Memberships are month-to-month. Cancel anytime with 7 days notice — no fees, no questions.",
    },
    {
      q: "Are there family or sibling discounts?",
      a: "Yes. Second family member gets 20% off, third gets 30% off. Just let us know on the inquiry form.",
    },
  ],
};

export const locations = {
  title: "Our Training Locations",
  subtitle: "Six premium facilities across the region. One standard of coaching.",
  list: [
    {
      city: "Downtown",
      name: "Apex Downtown HQ",
      address: "1200 Champion Way, Sportstown",
      phone: "+1 (234) 567-890",
      hours: "Mon–Sat, 6:00 – 21:00",
      sports: ["Football", "Tennis", "Athletics", "Basketball"],
      img: "location1" as const,
      mapQuery: "1200 Champion Way Sportstown",
    },
    {
      city: "Northside",
      name: "Apex Northside Arena",
      address: "55 Stadium Drive, Northside",
      phone: "+1 (234) 567-891",
      hours: "Mon–Sat, 6:00 – 21:00",
      sports: ["Cricket", "Football", "Swimming"],
      img: "location2" as const,
      mapQuery: "55 Stadium Drive Northside",
    },
    {
      city: "Westview",
      name: "Apex Westview Sports Park",
      address: "300 Athletes Avenue, Westview",
      phone: "+1 (234) 567-892",
      hours: "Mon–Sun, 6:00 – 22:00",
      sports: ["Tennis", "Athletics", "Basketball"],
      img: "location3" as const,
      mapQuery: "300 Athletes Avenue Westview",
    },
  ],
};

export const contact = {
  title: "Get In Touch",
  subtitle: "Tell us your goals — we'll design a free trial session around them.",
  formLabels: {
    name: "Full name",
    email: "Email address",
    phone: "Phone (with country code)",
    sport: "Which sport interests you?",
    age: "Athlete's age",
    message: "Anything we should know?",
    submit: "Send my inquiry",
  },
  sportsOptions: ["Cricket", "Football", "Tennis", "Basketball", "Swimming", "Athletics", "Not sure yet"],
};

export const testimonials = [
  {
    name: "Aisha Patel",
    role: "Parent of U14 footballer",
    quote:
      "Best academy with truly professional coaching. My son went from bench player to team captain in 8 months — and he loves going to training.",
    avatar: "avatar1" as const,
  },
  {
    name: "Marcus Lee",
    role: "Tennis, Elite squad",
    quote:
      "Coach Priya rebuilt my serve from the ground up. I added 18mph and won my first regional title last spring. Worth every cent.",
    avatar: "avatar2" as const,
  },
  {
    name: "Linda Okafor",
    role: "Adult athletics member",
    quote:
      "I joined at 34 thinking I was past my prime. Six months later I PR'd my 5k by 4 minutes. The coaching here is genuinely elite.",
    avatar: "avatar3" as const,
  },
];
