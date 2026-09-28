// ---------------------------------------------------------------------------
// ELEVATE events and initiatives.
//
// Titles, dates and venues are transcribed from the client's
// "Details of Events.docx". The image lists are GENERATED from what is actually
// on disk under public/assets/images/events/<slug>/, so this data cannot
// reference a file that is not there. Regenerate rather than hand-edit the
// `images` arrays.
//
// `kind` drives layout, not styling taste:
//   "poster" - a graphic whose text has to stay readable, so it is rendered
//              contained on a tinted panel and never cropped.
//   "photo"  - can be cropped to fill its frame.
//
// Newest first. Dates are ISO so they sort correctly and can be rendered in
// <time datetime>; dateLabel is the human form from the source document.
//
// ALT TEXT: only the four reviewed images carry a real description. The rest
// fall back to event context - accurate, but not descriptive. Someone who can
// see the photographs should replace those.
// ---------------------------------------------------------------------------

const DIR = "/assets/images/events";

export const eventItems = [
  {
    slug: "future-of-finance",
    title: "The Future of Finance",
    date: "2026-09-08",
    dateLabel: "8 September 2026",
    venue: "Pakistan American Cultural Center, Karachi",
    blurb:
      "An exclusive evening exploring the technologies, ideas and ecosystems shaping the future of global finance, across fintech, blockchain, AI and cryptocurrency.",
    partners: ["Enowate", "Kash Foundation"],
    kind: "poster",
    images: [
      {
        src: `${DIR}/future-of-finance/future-of-finance-01.jpg`,
        w: 526,
        h: 789,
        alt: "Event poster for The Future of Finance: a keynote on the Kash Token ecosystem, the launch of the book “Fintech Revolution” by Ali Nasir, and sessions on fintech, blockchain, AI and cryptocurrency, at the Pakistan American Cultural Center on 8 September 2026.",
      },
    ],
  },
  {
    slug: "russia-pakistan-science-innovation-ai",
    title: "Russia–Pakistan Partnership in Science, Innovation & AI",
    date: "2026-08-18",
    dateLabel: "18 August 2026",
    venue: "Russian Centre of Science & Culture, Karachi",
    partners: ["Russian Centre of Science & Culture"],
    kind: "photo",
    images: [
      {
        src: `${DIR}/russia-pakistan-science-innovation-ai/russia-pakistan-science-innovation-ai-01.jpg`,
        w: 1368,
        h: 912,
        alt: "Photograph from Russia–Pakistan Partnership in Science, Innovation & AI, 18 August 2026.",
      },
      {
        src: `${DIR}/russia-pakistan-science-innovation-ai/russia-pakistan-science-innovation-ai-02.jpg`,
        w: 1368,
        h: 912,
        alt: "Photograph from Russia–Pakistan Partnership in Science, Innovation & AI, 18 August 2026.",
      },
      {
        src: `${DIR}/russia-pakistan-science-innovation-ai/russia-pakistan-science-innovation-ai-03.jpg`,
        w: 1368,
        h: 912,
        alt: "Photograph from Russia–Pakistan Partnership in Science, Innovation & AI, 18 August 2026.",
      },
      {
        src: `${DIR}/russia-pakistan-science-innovation-ai/russia-pakistan-science-innovation-ai-04.jpg`,
        w: 1368,
        h: 912,
        alt: "Photograph from Russia–Pakistan Partnership in Science, Innovation & AI, 18 August 2026.",
      },
      {
        src: `${DIR}/russia-pakistan-science-innovation-ai/russia-pakistan-science-innovation-ai-05.jpg`,
        w: 1368,
        h: 912,
        alt: "Photograph from Russia–Pakistan Partnership in Science, Innovation & AI, 18 August 2026.",
      },
      {
        src: `${DIR}/russia-pakistan-science-innovation-ai/russia-pakistan-science-innovation-ai-06.jpg`,
        w: 1368,
        h: 912,
        alt: "Photograph from Russia–Pakistan Partnership in Science, Innovation & AI, 18 August 2026.",
      },
    ],
  },
  {
    slug: "world-entrepreneurship-day-2025",
    title: "World Entrepreneurship Day Convention 2025",
    date: "2025-12-20",
    dateLabel: "20 December 2025",
    venue: "Pakistan American Cultural Center, Karachi",
    partners: [],
    kind: "photo",
    images: [
      {
        src: `${DIR}/world-entrepreneurship-day-2025/world-entrepreneurship-day-2025-01.jpg`,
        w: 1600,
        h: 1066,
        alt: "Photograph from World Entrepreneurship Day Convention 2025, 20 December 2025.",
      },
      {
        src: `${DIR}/world-entrepreneurship-day-2025/world-entrepreneurship-day-2025-02.jpg`,
        w: 1600,
        h: 1066,
        alt: "Photograph from World Entrepreneurship Day Convention 2025, 20 December 2025.",
      },
      {
        src: `${DIR}/world-entrepreneurship-day-2025/world-entrepreneurship-day-2025-03.jpg`,
        w: 1600,
        h: 1066,
        alt: "Photograph from World Entrepreneurship Day Convention 2025, 20 December 2025.",
      },
      {
        src: `${DIR}/world-entrepreneurship-day-2025/world-entrepreneurship-day-2025-04.jpg`,
        w: 1600,
        h: 1066,
        alt: "Photograph from World Entrepreneurship Day Convention 2025, 20 December 2025.",
      },
      {
        src: `${DIR}/world-entrepreneurship-day-2025/world-entrepreneurship-day-2025-05.jpg`,
        w: 590,
        h: 393,
        alt: "Photograph from World Entrepreneurship Day Convention 2025, 20 December 2025.",
      },
    ],
  },
  {
    slug: "synergy-summit-2025",
    title: "Synergy Summit 2025: Academia Meets Industry",
    tagline: "Bridging Minds, Building Futures",
    date: "2025-10-20",
    dateLabel: "20 October 2025",
    venue: "FPCCI, Karachi",
    partners: ["FPCCI"],
    kind: "photo",
    images: [
      {
        src: `${DIR}/synergy-summit-2025/synergy-summit-2025-01.jpg`,
        w: 1599,
        h: 1066,
        alt: "Photograph from Synergy Summit 2025: Academia Meets Industry, 20 October 2025.",
      },
      {
        src: `${DIR}/synergy-summit-2025/synergy-summit-2025-02.jpg`,
        w: 1599,
        h: 1066,
        alt: "Photograph from Synergy Summit 2025: Academia Meets Industry, 20 October 2025.",
      },
      {
        src: `${DIR}/synergy-summit-2025/synergy-summit-2025-03.jpg`,
        w: 1599,
        h: 1066,
        alt: "Photograph from Synergy Summit 2025: Academia Meets Industry, 20 October 2025.",
      },
      {
        src: `${DIR}/synergy-summit-2025/synergy-summit-2025-04.jpg`,
        w: 1599,
        h: 1066,
        alt: "Photograph from Synergy Summit 2025: Academia Meets Industry, 20 October 2025.",
      },
      {
        src: `${DIR}/synergy-summit-2025/synergy-summit-2025-05.jpg`,
        w: 1599,
        h: 1066,
        alt: "Photograph from Synergy Summit 2025: Academia Meets Industry, 20 October 2025.",
      },
      {
        src: `${DIR}/synergy-summit-2025/synergy-summit-2025-06.jpg`,
        w: 1599,
        h: 1066,
        alt: "Photograph from Synergy Summit 2025: Academia Meets Industry, 20 October 2025.",
      },
    ],
  },
  {
    slug: "learning-expo",
    title: "Learning Expo",
    date: "2025-01-14",
    dateLabel: "14 January 2025",
    venue: null,
    partners: [],
    kind: "photo",
    images: [
      {
        src: `${DIR}/learning-expo/learning-expo-01.jpg`,
        w: 2048,
        h: 1365,
        alt: "A speaker addressing seated students in a classroom at the Learning Expo, with a slide reading “What does the company want?” projected behind her.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-02.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-03.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-04.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-05.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-06.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-07.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-08.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-09.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-10.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-11.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-12.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-13.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-14.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-15.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
      {
        src: `${DIR}/learning-expo/learning-expo-16.jpg`,
        w: 2048,
        h: 1365,
        alt: "Photograph from Learning Expo, 14 January 2025.",
      },
    ],
  },
  {
    slug: "motivational-session-bbsul",
    title: "Motivational Session at BBSUL",
    date: "2024-11-25",
    dateLabel: "25 November 2024",
    venue: "Benazir Bhutto Shaheed University, Lyari, Karachi",
    partners: [],
    kind: "photo",
    images: [
      {
        src: `${DIR}/motivational-session-bbsul/motivational-session-bbsul-01.jpg`,
        w: 960,
        h: 720,
        alt: "Photograph from Motivational Session at BBSUL, 25 November 2024.",
      },
      {
        src: `${DIR}/motivational-session-bbsul/motivational-session-bbsul-02.jpg`,
        w: 960,
        h: 720,
        alt: "Photograph from Motivational Session at BBSUL, 25 November 2024.",
      },
      {
        src: `${DIR}/motivational-session-bbsul/motivational-session-bbsul-03.jpg`,
        w: 720,
        h: 960,
        alt: "Photograph from Motivational Session at BBSUL, 25 November 2024.",
      },
      {
        src: `${DIR}/motivational-session-bbsul/motivational-session-bbsul-04.jpg`,
        w: 720,
        h: 960,
        alt: "Photograph from Motivational Session at BBSUL, 25 November 2024.",
      },
    ],
  },
  {
    slug: "research-ready-academia",
    title: "Research-Ready Academia: Capacity Building & Grant Development Training Program",
    date: "2022-08-16",
    dateLabel: "16 August 2022",
    venue: "Beach Luxury Hotel, Karachi",
    partners: [],
    kind: "photo",
    images: [
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-01.jpg`,
        w: 1600,
        h: 900,
        alt: "Romesa Aqeel presenting at the Research-Ready Academia training programme, microphone in hand, in front of a slide on improving research grant applications.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-02.jpg`,
        w: 1600,
        h: 1066,
        alt: "Romesa Aqeel with the programme’s two visiting trainers, holding a Coventry University booklet in front of a slide on the concept of a digital knowledge park.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-03.jpg`,
        w: 1200,
        h: 736,
        alt: "The training room at the Beach Luxury Hotel, participants seated at cloth-covered tables with laptops open as a session runs at the front.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-04.jpg`,
        w: 1600,
        h: 1200,
        alt: "A trainer in a bow tie presenting a slide on the ethical review process to participants seated around the training tables.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-05.jpg`,
        w: 1600,
        h: 1066,
        alt: "Romesa Aqeel speaking to the room beside a flip chart of workshop notes and sticky notes.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-06.jpg`,
        w: 1600,
        h: 1066,
        alt: "Romesa Aqeel speaking into a microphone at the participants’ table alongside a fellow delegate, a laptop open in front of her.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-07.jpg`,
        w: 1160,
        h: 868,
        alt: "Romesa Aqeel receiving a wrapped gift from one of the visiting trainers at the close of a session.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-08.jpg`,
        w: 1600,
        h: 1066,
        alt: "Romesa Aqeel addressing the room with a microphone during the grant development training.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-09.jpg`,
        w: 1040,
        h: 541,
        alt: "A trainer at the screen pointing out a quotation on research as participants follow along on their laptops.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-10.jpg`,
        w: 1600,
        h: 1066,
        alt: "Participants and facilitators seated around the training tables working through a session on their laptops.",
      },
      {
        src: `${DIR}/research-ready-academia/research-ready-academia-11.jpg`,
        w: 1600,
        h: 1066,
        alt: "Delegates working on grant applications on their laptops at the round tables during a hands-on session.",
      },
    ],
  },
  {
    slug: "cv-making-arena-multimedia",
    title: "CV Making Session",
    date: "2019-12-02",
    dateLabel: "2 December 2019",
    venue: "Arena Multimedia, Gulshan-e-Iqbal, Karachi",
    partners: [],
    kind: "photo",
    images: [
      {
        src: `${DIR}/cv-making-arena-multimedia/cv-making-arena-multimedia-01.jpg`,
        w: 960,
        h: 720,
        alt: "A full computer lab of attendees seated facing a speaker at the front of the room during the CV Making Session.",
      },
    ],
  },
  {
    slug: "workshop-financial-market",
    title: "Workshop on the Financial Market in Pakistan’s Economy",
    date: "2019-10-03",
    dateLabel: "3 October 2019",
    venue: "PIPFA Head Office, Shahrah-e-Faisal, Karachi",
    speaker: "Mr. Muhammad Noman",
    partners: ["PIPFA", "Junoon-e-Pakistan"],
    kind: "poster",
    images: [
      {
        src: `${DIR}/workshop-financial-market/workshop-financial-market-01.jpg`,
        w: 509,
        h: 720,
        alt: "Poster for a one-day workshop on the concept of the financial market in Pakistan’s economy, with speaker Mr. Muhammad Noman, held at the PIPFA head office in Karachi on 3 October 2019 in collaboration with Junoon-e-Pakistan.",
      },
    ],
  },
  {
    slug: "career-counseling-monotechnic-malir",
    title: "Career Counseling & Motivation Session",
    date: "2019-03-11",
    dateLabel: "11 March 2019",
    venue: "Govt. Monotechnic Institute, Malir, Karachi",
    partners: [],
    kind: "photo",
    images: [
      {
        src: `${DIR}/career-counseling-monotechnic-malir/career-counseling-monotechnic-malir-01.jpg`,
        w: 1280,
        h: 853,
        alt: "Photograph from Career Counseling & Motivation Session, 11 March 2019.",
      },
      {
        src: `${DIR}/career-counseling-monotechnic-malir/career-counseling-monotechnic-malir-02.jpg`,
        w: 1134,
        h: 734,
        alt: "Photograph from Career Counseling & Motivation Session, 11 March 2019.",
      },
      {
        src: `${DIR}/career-counseling-monotechnic-malir/career-counseling-monotechnic-malir-03.jpg`,
        w: 904,
        h: 1280,
        alt: "Photograph from Career Counseling & Motivation Session, 11 March 2019.",
      },
      {
        src: `${DIR}/career-counseling-monotechnic-malir/career-counseling-monotechnic-malir-04.jpg`,
        w: 708,
        h: 1062,
        alt: "Photograph from Career Counseling & Motivation Session, 11 March 2019.",
      },
    ],
  },
  {
    slug: "career-counseling-govt-college-women-saudabad",
    title: "Career Counseling & Guidance Session",
    date: "2019-02-25",
    dateLabel: "25 February 2019",
    venue: "Govt College for Women, Saudabad, Malir, Karachi",
    partners: [],
    kind: "photo",
    images: [
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-01.jpg`,
        w: 2048,
        h: 1367,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-02.jpg`,
        w: 2048,
        h: 1367,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-03.jpg`,
        w: 2048,
        h: 1367,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-04.jpg`,
        w: 2048,
        h: 1367,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-05.jpg`,
        w: 1848,
        h: 1224,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-06.jpg`,
        w: 1848,
        h: 1224,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-07.jpg`,
        w: 1848,
        h: 1224,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-08.jpg`,
        w: 1848,
        h: 1224,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-09.jpg`,
        w: 1848,
        h: 1224,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-10.jpg`,
        w: 1280,
        h: 854,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-11.jpg`,
        w: 1280,
        h: 854,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-12.jpg`,
        w: 1280,
        h: 854,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-13.jpg`,
        w: 1280,
        h: 847,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-14.jpg`,
        w: 1280,
        h: 847,
        alt: "Photograph from Career Counseling & Guidance Session, 25 February 2019.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-15.jpg`,
        w: 544,
        h: 473,
        alt: "A speaker in a grey suit leaning on a wooden lectern with a microphone, addressing the hall at the Career Counseling & Guidance Session.",
      },
      {
        src: `${DIR}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-16.jpg`,
        w: 267,
        h: 430,
        alt: "The same speaker seated among the audience at the Career Counseling & Guidance Session, rows of students behind him.",
      },
    ],
  },
];

/** Every distinct partner or host institution named across the events. */
export const eventPartners = [...new Set(eventItems.flatMap((item) => item.partners))].sort();

/** Total photographs and posters on file, for the page's count line. */
export const eventImageCount = eventItems.reduce((sum, item) => sum + item.images.length, 0);
