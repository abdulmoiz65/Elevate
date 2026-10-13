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

// One line, three forms: printed with spaces, dialled without them, and handed
// to wa.me as bare digits. Declared once up here so the number is typed in a
// single place and the three fields below cannot drift apart.
const PHONE = "+92 300 1231669";
const PHONE_DIALABLE = "+923001231669";

export const contact = {
  title: "CONTACT",
  lede: "Let's build bridges that create opportunities.",
  body: "Whether you are a student, university, researcher, professional, company, entrepreneur, organization or community leader, there is a place for you in the Elevate ecosystem.",
  calls: ["Partner with us.", "Volunteer with us.", "Mentor with us.", "Collaborate with us.", "Create impact with us."],
  closing: "Together, we Elevate.",
  email: "connection.elevate@gmail.com",
  // `phone` is the form a reader sees; `phoneHref` is the same number with the
  // spaces stripped, because tel: links have to be dialable. The line is on
  // WhatsApp too — wa.me takes the international number with no "+" or spaces.
  phone: PHONE,
  phoneHref: PHONE_DIALABLE,
  whatsappHref: `https://wa.me/${PHONE_DIALABLE.slice(1)}`,
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
// MEET THE TEAM
//
// The page is the client's three biography paragraphs and her photograph, and
// nothing else. An earlier version split those paragraphs into expertise chips,
// numbered experience cards, an audiences strip and a separate vision section,
// and wrote a page lede to introduce them. None of that was supplied, and the
// client's instruction was to print the paragraphs as they are.
//
// So: no lede, no eyebrow copy, no derived lists. If this page needs more, the
// words have to come from the client. `bio` is verbatim and in order.
// ---------------------------------------------------------------------------

const TEAM = "/assets/images/team";

export const founder = {
  name: "Romesa Aqeel",
  role: "Founder, Elevate",
  // The photograph the client supplied for this page, cropped to 4:5 around
  // her face so a portrait frame does not have to guess where it is.
  portrait: `${TEAM}/romesa-aqeel.jpg`,
  portraitAlt: "Romesa Aqeel, founder of Elevate, speaking into a microphone at an Elevate session.",
  bio: [
    "Romesa Aqeel is a higher education and professional development specialist with expertise in academia–industry engagement, research and innovation, corporate partnerships, event management, and stakeholder engagement.",
    "With extensive experience managing academic and industry-facing initiatives, she has worked on strategic partnerships, professional events, innovation activities, institutional collaborations, and career-oriented programs, bringing together students, professionals, organizations, and academic stakeholders.",
    "As the Founder of Elevate, her vision is to bridge the gap between academia and industry by creating opportunities for career counselling, mentorship, professional development, leadership, industry interaction, and meaningful networking for students and young professionals.",
  ],
};

export const team = {
  title: "MEET THE TEAM",
  members: [founder],
};
