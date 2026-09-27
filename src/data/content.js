// ---------------------------------------------------------------------------
// ELEVATE site copy.
//
// Every string below is taken verbatim from `ELEVATE content.docx` and was
// generated from that document rather than retyped, so the site cannot drift
// from the source copy. Asset paths and image alt text are the only additions.
//
// Every photograph on the site is the client's own, from `assets/images/events/`.
// The six Unsplash stock photographs this file used to point at were replaced:
// they were shot in Western and African settings and read as imported next to
// an organization whose work is in Karachi. Real event photography of the
// actual students and professionals is both more honest and more persuasive,
// and it costs nothing in licensing.
// ---------------------------------------------------------------------------

const ICONS = "/assets/images/icons";
const EVENTS = "/assets/images/events";

export const site = {
  name: "ELEVATE",
  tagline: "LEARN · CONNECT · SERVE · INSPIRE",
  promise: "Bridging Academia & Industry. Shaping Careers. Empowering People. Creating Impact",
  intro: ["Elevate is a non-profit organization working to create meaningful connections between academia, industry, communities, and emerging talent.", "We believe that education becomes more powerful when knowledge meets opportunity, research meets real-world challenges, and young people are connected with the people and organizations shaping the future."],
  statement: "We Bridge Academia & Industry. We Guide Careers. We Create Opportunities. We Enable Impact.",
};

// A real Elevate event rather than stock. Picked from the client's Learning
// Expo set: high resolution, no burned-in watermark (several of their photos
// carry one, which would clash with the logo in the header), and a wide room
// shot whose left third is floor and shadow, so the headline has somewhere to
// sit. Most of the other high-res frames are posed group portraits, which put
// faces exactly where the display type goes.
export const hero = {
  image: `${EVENTS}/learning-expo/learning-expo-05.jpg`,
  alt: "A speaker standing at the front of a full lecture theatre at the Elevate Learning Expo, gesturing as he addresses rows of seated students who are turned towards him.",
};

export const about = {
  title: "ABOUT ELEVATE",
  lede: "More than an organization. A bridge between potential and opportunity.",
  body: ["Elevate is a non-profit organization dedicated to empowering young people, strengthening communities, and creating meaningful collaboration between educational institutions and industry.", "We bring together students, faculty, researchers, professionals, entrepreneurs, organizations, and community leaders to exchange knowledge, develop skills, solve real-world challenges, and create opportunities for growth.", "Our work focuses on turning learning into action, ideas into solutions, and connections into lasting impact."],
  belief: {
    title: "Our belief",
    highlight: "Academia creates knowledge. Industry creates opportunity. Elevate brings them together.",
    body: ["We work to close the gap between what is taught, what is researched, and what the world actually needs.", "Through partnerships, mentorship, training, innovation initiatives, career exposure, community projects, and collaborative events, Elevate creates pathways for people and institutions to work together."],
  },
  // Client photography rather than stock, same as the hero. A different frame
  // from the same Learning Expo set: this one is shot from the back of the
  // room facing the speaker, so it does not repeat the hero's composition.
  image: `${EVENTS}/learning-expo/learning-expo-01.jpg`,
  alt: "A speaker addressing seated students in a classroom at the Elevate Learning Expo, with a slide reading “What does the company want?” projected behind her.",
};

export const mission = { title: "OUR MISSION", body: "To create an inclusive ecosystem where education, industry, innovation and community development come together to create opportunities and lasting social impact." };

export const vision = { title: "OUR VISION", body: "A connected society where knowledge is transformed into opportunity, innovation and positive change." };

export const whatWeDo = {
  title: "WHAT WE DO",
  lede: "Connecting people. Knowledge. Opportunities. Impact.",
  intro: "Elevate works across four interconnected areas:",
  pillars: [
    {
      key: "academia",
      number: "01",
      name: "Academia",
      heading: "01 — Academia",
      body: "We engage with universities, faculty, researchers and students to promote practical learning, innovation, research collaboration and industry exposure.",
      image: `${EVENTS}/learning-expo/learning-expo-10.jpg`,
      alt: "Students seated at rows of desks in a university classroom during the Elevate Learning Expo, facing a speaker at the whiteboard beside a projection screen.",
    },
    {
      key: "industry",
      number: "02",
      name: "Industry",
      heading: "02 — Industry",
      body: "We connect businesses, professionals, entrepreneurs and organizations with emerging talent and academic expertise.",
      image: `${EVENTS}/synergy-summit-2025/synergy-summit-2025-05.jpg`,
      alt: "A row of business leaders and professionals seated together at Synergy Summit 2025: Academia Meets Industry, facing the room.",
    },
    {
      key: "youth",
      number: "03",
      name: "Youth & Talent",
      heading: "03 — Youth & Talent",
      body: "We help young people develop the skills, confidence, networks and experiences needed to succeed in education, employment, entrepreneurship and leadership.",
      image: `${EVENTS}/learning-expo/learning-expo-13.jpg`,
      alt: "A young woman in a yellow kurta speaking to a room at the Elevate Learning Expo, standing in front of a whiteboard covered in session notes.",
    },
    {
      key: "community",
      number: "04",
      name: "Community",
      heading: "04 — Community",
      body: "We support initiatives that translate knowledge, skills and partnerships into meaningful community impact.",
      image: `${EVENTS}/career-counseling-govt-college-women-saudabad/career-counseling-govt-college-women-saudabad-12.jpg`,
      alt: "Mentors seated at the front of a college hall during an Elevate career counselling session, with rows of students in uniform behind them.",
    },
  ],
};

export const whyElevate = {
  title: "WHY ELEVATE?",
  lede: "Because potential needs a pathway.",
  points: [
    "Any student may have an idea but need a mentor.",
    "Any researcher may have knowledge but need an industry partner.",
    "Any firm may have a challenge but need academic expertise.",
    "Any university may have talent but need stronger industry connections.",
    "Any community may have a problem but need access to knowledge and resources.",
    "Any student is uncertain about their future and needs clear, personalized guidance to make informed career decisions.",
  ],
  closing: "Elevate connects these possibilities and many more",
  image: `${EVENTS}/motivational-session-bbsul/motivational-session-bbsul-02.jpg`,
  alt: "A hall of students seated in rows watching a speaker on stage during the Elevate motivational session at BBSUL.",
};

export const impact = {
  title: "OUR IMPACT",
  lede: "Impact is measured by the connections we create and the opportunities we enable.",
  body: "Elevate focuses on meaningful and measurable outcomes rather than numbers alone.",
  intro: "Our impact areas include:",
  areas: [
    {
      name: "Youth Empowerment",
      body: "Building confidence, skills and opportunities.",
      icon: `${ICONS}/impact-youth-empowerment.svg`,
    },
    {
      name: "Education & Employability",
      body: "Connecting learning with workplace readiness.",
      icon: `${ICONS}/impact-education-employability.svg`,
    },
    {
      name: "Academia–Industry Collaboration",
      body: "Creating partnerships between educational institutions and organizations.",
      icon: `${ICONS}/impact-academia-industry-collaboration.svg`,
    },
    {
      name: "Innovation & Entrepreneurship",
      body: "Supporting ideas, solutions and emerging ventures.",
      icon: `${ICONS}/impact-innovation-entrepreneurship.svg`,
    },
    {
      name: "Research & Knowledge Exchange",
      body: "Encouraging collaboration around real-world challenges.",
      icon: `${ICONS}/impact-research-knowledge-exchange.svg`,
    },
    {
      name: "Community Development",
      body: "Turning partnerships into initiatives that benefit society.",
      icon: `${ICONS}/impact-community-development.svg`,
    },
  ],
  note: "Verified impact figures and project outcomes will be published as official data becomes available.",
};

export const bridge = {
  title: "THE ACADEMIA–INDUSTRY BRIDGE",
  lede: "Connecting the classroom to the real world.",
  body: [
    "One of Elevate's core purposes is to serve as a bridge between academia and industry.",
    "Universities possess knowledge, research, creativity and emerging talent.",
    "Industry possesses experience, technology, market knowledge and real-world challenges.",
    "Elevate connects both sides.",
  ],
  pathwaysIntro: "We create pathways for:",
  pathways: [
    { audience: "Students", outcome: "Internships, mentorship, counselling and career opportunities" },
    { audience: "Faculty", outcome: "Industry engagement and professional collaboration" },
    { audience: "Researchers", outcome: "Industry-relevant research and innovation" },
    { audience: "Universities", outcome: "Corporate and institutional partnerships" },
    { audience: "Businesses", outcome: "Access to emerging talent and academic expertise" },
    { audience: "Entrepreneurs", outcome: "Networks, mentorship and opportunities" },
    { audience: "Communities", outcome: "Knowledge, skills and social-impact initiatives" },
  ],
  flowTitle: "From Knowledge to Impact",
  flowLine: "LEARN → CONNECT → COLLABORATE → INNOVATE → IMPACT",
  flow: ["LEARN", "CONNECT", "COLLABORATE", "INNOVATE", "IMPACT"],
};

export const programs = {
  title: "OUR PROGRAM AREAS",
  lede: "Creating opportunities that connect learning with action.",
  items: [
    {
      name: "Leadership Development",
      body: "Develop confidence, communication, decision-making, teamwork and ethical leadership.",
      icon: `${ICONS}/program-leadership.svg`,
    },
    {
      name: "Career Readiness",
      body: "Prepare students and young professionals for the workplace through practical learning, professional exposure and industry interaction.",
      icon: `${ICONS}/program-career-readiness.svg`,
    },
    {
      name: "Industry & Corporate Engagement",
      body: "Facilitate meaningful interaction between universities, companies, professionals and emerging talent.",
      icon: `${ICONS}/program-industry-engagement.svg`,
    },
    {
      name: "Career Counselling & Guidance",
      body: "Help students and young professionals identify their strengths, interests and career pathways through personalized counselling, career planning, professional guidance and informed decision-making.",
      icon: `${ICONS}/program-career-counselling.svg`,
    },
    {
      name: "Mentorship",
      body: "Connect students and young professionals with experienced individuals who can provide guidance, perspective and professional insight.",
      icon: `${ICONS}/program-mentorship.svg`,
    },
    {
      name: "Entrepreneurship & Innovation",
      body: "Help transform ideas into practical solutions by connecting innovators with mentors, experts, organizations and opportunities.",
      icon: `${ICONS}/program-entrepreneurship.svg`,
    },
    {
      name: "Research & Knowledge Exchange",
      body: "Create opportunities for researchers, academics and industry professionals to collaborate around real-world challenges.",
      icon: `${ICONS}/program-research-exchange.svg`,
    },
    {
      name: "Digital & Future Skills",
      body: "Support the development of relevant digital, technological and professional skills for a rapidly changing world.",
      icon: `${ICONS}/program-digital-skills.svg`,
    },
    {
      name: "Community Impact",
      body: "Engage volunteers and partners in initiatives that use knowledge, skills and collective action to address community needs.",
      icon: `${ICONS}/program-community-impact.svg`,
    },
  ],
};

export const events = { title: "EVENTS & INITIATIVES HIGHLIGHTS", lede: "Where people, ideas and opportunities meet." };

export const faq = {
  title: "FAQ",
  items: [
    { question: "What is Elevate?", answer: "Elevate is a non-profit organization focused on youth empowerment, education, professional development, community impact and academia–industry collaboration." },
    { question: "Is Elevate a training organization?", answer: "Training is one part of our work. Our broader purpose is to create an ecosystem connecting people, knowledge, opportunities and organizations." },
    { question: "How does Elevate connect academia and industry?", answer: "We facilitate collaboration through mentorship, internships, professional engagement, research connections, industry sessions, innovation initiatives, events and partnership opportunities." },
    { question: "Who can collaborate with Elevate?", answer: "Universities, corporations, startups, researchers, professionals, NGOs, government organizations, entrepreneurs, community organizations and individuals can explore collaboration opportunities." },
    { question: "Can I volunteer?", answer: "Yes. Individuals can contribute their time, expertise and skills through volunteer, mentorship and community initiatives." },
    { question: "How can an organization partner with Elevate?", answer: "Organizations can partner through mentorship, internships, training, research collaboration, sponsorship, CSR initiatives, events, innovation challenges and community projects, subject to mutual agreement and organizational approval." },
  ],
};

export const contact = {
  title: "CONTACT",
  lede: "Let's build bridges that create opportunities.",
  body: "Whether you are a student, university, researcher, professional, company, entrepreneur, organization or community leader, there is a place for you in the Elevate ecosystem.",
  calls: ["Partner with us.", "Volunteer with us.", "Mentor with us.", "Collaborate with us.", "Create impact with us."],
  closing: "Together, we Elevate.",
  email: "connection.elevate@gmail.com",
  // Dropdown options, drawn from the audiences the CONTACT copy names above.
  roles: ["Student", "University", "Researcher", "Professional", "Company", "Entrepreneur", "Organization", "Community leader"],
  image: `${EVENTS}/world-entrepreneurship-day-2025/world-entrepreneurship-day-2025-02.jpg`,
  alt: "A speaker at a lectern addressing the World Entrepreneurship Day Convention, with the panel seated at a long table beside him.",
};

// ---------------------------------------------------------------------------
// Off-site presence.
//
// Addresses supplied by the client. `icon` names a glyph in Icon.jsx; the
// colour each one takes on hover is decided in SocialLinks.jsx, not here, so
// this stays a list of addresses rather than a list of styles.
//
// `handle` is the human-readable form shown beside the icon in wide layouts.
// LinkedIn's URL is a numeric company id rather than a vanity slug, so its
// handle is the organisation name.
// ---------------------------------------------------------------------------
export const social = [
  {
    name: "Facebook",
    handle: "elevate.bmbb",
    href: "https://www.facebook.com/pg/elevate.bmbb/",
    icon: "facebook",
  },
  {
    name: "Instagram",
    handle: "@elevate.bmbb",
    href: "https://www.instagram.com/elevate.bmbb/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    handle: "Elevate",
    href: "https://www.linkedin.com/company/14711535/",
    icon: "linkedin",
  },
];

// ---------------------------------------------------------------------------
// MEET THE FOUNDER
//
// Written from the three-paragraph biography the client supplied for this page.
// The paragraphs are not printed whole: each one is split into the sentence
// that carries it and the list it contains, so the page can *enumerate* the
// expertise, the work and the opportunities instead of running them together
// in prose the reader has to unpick. The words are the client's throughout —
// nothing here is invented, and the sentences are only reflowed as lead-ins.
//
//   Paragraph 1 -> `lede` + `expertise`
//   Paragraph 2 -> `work.lede` + `work.items` + `work.audiences`
//   Paragraph 3 -> `vision.statement` + `vision.opportunities` + `vision.audience`
//
// `portrait` is null because no photograph of the founder has been supplied.
// FounderHero falls back to a monogram medallion rather than to an empty
// frame; set this to an image path and the photograph takes its place with no
// other change.
// ---------------------------------------------------------------------------
export const founder = {
  title: "MEET THE FOUNDER",
  name: "Romesa Aqeel",
  nameLines: ["Romesa", "Aqeel"],
  initials: "RA",
  role: "Founder, Elevate",
  lede: "A higher education and professional development specialist.",
  portrait: null,
  portraitAlt: null,

  expertiseLabel: "Expertise",
  expertise: [
    "Academia–industry engagement",
    "Research and innovation",
    "Corporate partnerships",
    "Event management",
    "Stakeholder engagement",
  ],

  work: {
    title: "EXPERIENCE",
    lede: "Extensive experience managing academic and industry-facing initiatives.",
    intro: "She has worked on:",
    items: [
      "Strategic partnerships",
      "Professional events",
      "Innovation activities",
      "Institutional collaborations",
      "Career-oriented programs",
    ],
    audiencesLabel: "Bringing together",
    audiences: ["Students", "Professionals", "Organizations", "Academic stakeholders"],
    // A clean frame from the client's own Learning Expo set — a session in
    // progress, which is what "managing academic initiatives" actually looks
    // like. Not captioned as the founder: nobody has identified who is in it.
    image: `${EVENTS}/learning-expo/learning-expo-03.jpg`,
    alt: "A facilitator standing at the front of a full computer lab at the Elevate Learning Expo, speaking to seated students with a slide about CV language projected behind her.",
  },

  vision: {
    title: "HER VISION",
    statement: "Bridge the gap between academia and industry.",
    intro: "By creating opportunities for",
    opportunities: [
      "Career counselling",
      "Mentorship",
      "Professional development",
      "Leadership",
      "Industry interaction",
      "Meaningful networking",
    ],
    audience: "for students and young professionals.",
    image: `${EVENTS}/synergy-summit-2025/synergy-summit-2025-04.jpg`,
    alt: "Guests and organisers standing together on stage at Synergy Summit 2025: Academia Meets Industry, as a commemorative shield is presented.",
  },
};
