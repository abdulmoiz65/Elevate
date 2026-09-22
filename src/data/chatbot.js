// ---------------------------------------------------------------------------
// ELEVATE chat assistant — the entire conversation, as data.
//
// There is no AI behind the widget. Every reply it is capable of giving is a
// node in the `topics` table below, and the only thing the component does at
// runtime is look a node up: by `id` when a reader taps a chip, or by keyword
// score when they type. That is what keeps the bot on-subject by construction
// — a typed question that scores against no node's `keywords` returns
// `fallback`, never an invented answer.
//
// Long-form answers are imported from src/data/content.js rather than retyped,
// so the bot and the pages it points at cannot drift apart. Only the
// conversational connective tissue — greetings, routing prompts, the
// get-involved copy — is written here.
//
// To add a question: append a topic with an `id`, a `label` (its chip text), an
// `answer`, and the `keywords` a reader might type. Then put its id in `root`
// or in another node's `follow` so it is reachable by tapping as well.
// ---------------------------------------------------------------------------

import { about, bridge, contact, events, faq, impact, mission, programs, site, vision, whatWeDo, whyElevate } from "./content";

/** "Industry & Corporate Engagement" -> "industry-and-corporate-engagement" */
const slug = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Answer text reads better when a borrowed sentence is spliced mid-sentence. */
const lower = (text) => text.charAt(0).toLowerCase() + text.slice(1);

/** Pull a published FAQ answer by its question, so the wording stays in sync. */
const answerTo = (question) => faq.items.find((item) => item.question === question).answer;

// ---------------------------------------------------------------------------
// Node shape
// ---------------------------------------------------------------------------
// id        unique string, used by chips and by `follow`
// label     chip text — short, because chips wrap at about two lines
// question  echoed back as the reader's own message when a chip is tapped
// answer    array of paragraphs
// bullets   optional list rendered under the paragraphs
// link      optional { label, to } — an in-app route, rendered as a link row
// follow    ids offered as chips after this answer
// keywords  what a reader might type to reach this node. Multi-word entries
//           are matched as phrases and score higher than single words.
// ---------------------------------------------------------------------------

/** One node per pillar, bodies straight from the WHAT WE DO section. */
const pillarKeywords = {
  academia: ["academia", "academic", "university", "universities", "faculty", "college", "campus", "professor", "lecturer"],
  industry: ["industry", "business", "businesses", "company", "companies", "corporate", "employer", "employers", "firm"],
  youth: ["youth", "young people", "young professional", "talent", "students", "graduate", "graduates", "employability"],
  community: ["community", "communities", "social impact", "society", "outreach", "community project"],
};

const pillarTopics = whatWeDo.pillars.map((pillar) => ({
  id: `pillar-${pillar.key}`,
  label: pillar.name,
  question: `What does Elevate do with ${pillar.name}?`,
  answer: [pillar.body],
  link: { label: "See all four areas", to: "/" },
  follow: ["what-we-do", "programs", "get-involved"],
  keywords: pillarKeywords[pillar.key],
}));

/** One node per program area, bodies from OUR PROGRAM AREAS. */
const programKeywords = {
  "Leadership Development": ["leadership", "leader", "leaders", "confidence", "teamwork", "decision making", "ethical leadership"],
  "Career Readiness": ["career readiness", "job ready", "workplace", "work ready", "employability", "cv", "resume", "interview", "first job"],
  "Industry & Corporate Engagement": ["corporate engagement", "industry engagement", "industry session", "employer engagement", "corporate"],
  "Career Counselling & Guidance": ["counselling", "counseling", "career guidance", "career advice", "career path", "career planning", "which career", "guidance"],
  Mentorship: ["mentor", "mentorship", "mentoring", "find a mentor", "become a mentor"],
  "Entrepreneurship & Innovation": ["entrepreneur", "entrepreneurship", "startup", "start up", "innovation", "business idea", "founder"],
  "Research & Knowledge Exchange": ["research", "researcher", "knowledge exchange", "academic research", "research partner"],
  "Digital & Future Skills": ["digital skills", "future skills", "technology skills", "tech skills", "upskilling", "reskilling"],
  "Community Impact": ["community impact", "community initiative", "social project", "give back", "community need"],
};

const programTopics = programs.items.map((item) => ({
  id: `program-${slug(item.name)}`,
  label: item.name,
  question: `Tell me about ${item.name}`,
  answer: [item.body],
  link: { label: "See all program areas", to: "/programs" },
  follow: ["programs", "get-involved", "contact"],
  keywords: programKeywords[item.name] ?? [],
}));

/** One node per audience on the Academia–Industry Bridge. */
const pathwayKeywords = {
  Students: ["i am a student", "as a student", "for students", "student", "undergraduate", "postgraduate", "internship", "internships", "placement", "work experience"],
  Faculty: ["faculty", "lecturer", "professor", "teacher", "academic staff"],
  Researchers: ["researcher", "phd", "research fellow", "scientist"],
  Universities: ["university", "universities", "institution", "college", "campus"],
  Businesses: ["business", "company", "employer", "hiring", "recruit", "talent pipeline"],
  Entrepreneurs: ["entrepreneur", "founder", "startup", "start up", "small business"],
  Communities: ["community", "ngo", "non profit", "charity", "community group"],
};

const pathwayTopics = bridge.pathways.map((pathway) => ({
  id: `pathway-${slug(pathway.audience)}`,
  label: pathway.audience,
  question: `What does Elevate offer ${pathway.audience.toLowerCase()}?`,
  answer: [`For ${pathway.audience.toLowerCase()}, Elevate opens pathways to ${lower(pathway.outcome)}.`],
  link: { label: "About the Bridge", to: "/bridge" },
  follow: ["bridge", "get-involved", "contact"],
  keywords: pathwayKeywords[pathway.audience] ?? [],
}));

/** The six published FAQs, verbatim. */
const faqKeywords = {
  "What is Elevate?": ["what is elevate", "who are you"],
  "Is Elevate a training organization?": ["training organization", "training company", "just training", "only training"],
  "How does Elevate connect academia and industry?": ["connect academia and industry", "how do you connect", "how does the bridge work"],
  "Who can collaborate with Elevate?": ["who can collaborate", "who can join", "who do you work with"],
  "Can I volunteer?": ["volunteer", "volunteering", "give my time", "help out"],
  "How can an organization partner with Elevate?": ["partner", "partnership", "sponsor", "sponsorship", "csr"],
};

const faqTopics = faq.items.map((item) => ({
  id: `faq-${slug(item.question).slice(0, 36)}`,
  label: item.question,
  question: item.question,
  answer: [item.answer],
  link: { label: "Read the full FAQ", to: "/faq" },
  follow: ["faq", "get-involved", "contact"],
  keywords: faqKeywords[item.question] ?? [],
}));

// ---------------------------------------------------------------------------
// The tree
// ---------------------------------------------------------------------------

export const chatbot = {
  meta: {
    name: site.name,
    subtitle: "Here to help!",
    launcher: "Chat with us",
    logo: "/assets/images/brand/elevate-mark.png",
    // The opening card, shown before a conversation exists.
    startTitle: "Got a question or need assistance?",
    startBody: "Please select ‘New Conversation’ to get started!",
    startCta: "New Conversation",
    // First thing the bot says once the conversation starts.
    greeting: [
      `Hi — I am the ${site.name} assistant.`,
      "I answer questions about this organization: who we are, what we do, our program areas, partnerships and how to get involved.",
    ],
    menuPrompt: "Pick a topic, or type your question below.",
    inputPlaceholder: "Ask about Elevate…",
    inputLabel: "Type your question about Elevate",
    restart: "Start over",
    note: "Scripted answers drawn from this site — not an AI assistant.",
  },

  // The opening menu, and what "Start over" returns to.
  root: ["what-is-elevate", "what-we-do", "programs", "bridge", "get-involved", "impact", "events", "contact", "faq"],

  // Returned whenever a typed question scores against nothing. This is the
  // whole of the bot's off-subject handling: it declines and re-offers the menu
  // rather than attempting an answer.
  fallback: {
    id: "fallback",
    answer: [
      "Sorry — I cannot help with that one. I only answer questions about Elevate: our work, our program areas, partnerships, and how to get involved.",
      "Here is what I can cover:",
    ],
    follow: ["what-is-elevate", "what-we-do", "programs", "get-involved", "contact"],
  },

  topics: [
    // --- Who we are ------------------------------------------------------
    {
      id: "what-is-elevate",
      label: "What is Elevate?",
      question: "What is Elevate?",
      answer: [about.body[0], about.belief.highlight],
      link: { label: "Read the About page", to: "/about" },
      follow: ["mission", "vision", "why-elevate", "what-we-do"],
      keywords: ["what is elevate", "who are you", "about elevate", "about your organization", "who is elevate", "organization", "organisation", "non profit", "nonprofit", "ngo", "charity"],
    },
    {
      id: "mission",
      label: "Your mission",
      question: "What is your mission?",
      answer: [mission.body],
      link: { label: "Mission and vision", to: "/about" },
      follow: ["vision", "what-we-do", "impact"],
      keywords: ["mission", "purpose", "why do you exist", "aim", "objective"],
    },
    {
      id: "vision",
      label: "Your vision",
      question: "What is your vision?",
      answer: [vision.body],
      link: { label: "Mission and vision", to: "/about" },
      follow: ["mission", "what-we-do", "impact"],
      keywords: ["vision", "long term goal", "where are you heading"],
    },
    {
      id: "why-elevate",
      label: "Why Elevate?",
      question: "Why does Elevate exist?",
      answer: [whyElevate.lede, "Because each of these is a gap worth closing:"],
      bullets: whyElevate.points.slice(0, 5),
      link: { label: "Why Elevate", to: "/" },
      follow: ["what-we-do", "bridge", "get-involved"],
      keywords: ["why elevate", "why do you exist", "what problem", "what gap", "why is this needed"],
    },

    // --- What we do ------------------------------------------------------
    {
      id: "what-we-do",
      label: "What do you do?",
      question: "What does Elevate do?",
      answer: [whatWeDo.lede, whatWeDo.intro],
      bullets: whatWeDo.pillars.map((pillar) => `${pillar.name} — ${pillar.body}`),
      follow: pillarTopics.map((topic) => topic.id),
      keywords: ["what do you do", "what does elevate do", "your work", "activities", "four areas", "pillars", "focus areas", "services"],
    },
    {
      id: "programs",
      label: "Program areas",
      question: "What program areas do you run?",
      answer: [programs.lede, `There are ${programs.items.length} program areas:`],
      bullets: programs.items.map((item) => item.name),
      link: { label: "See all program areas", to: "/programs" },
      follow: ["program-career-readiness", "program-mentorship", "program-career-counselling-and-guidance", "program-entrepreneurship-and-innovation"],
      keywords: ["programs", "programmes", "program", "your programs", "what programs", "program areas", "courses", "training", "workshops", "what do you offer", "offerings"],
    },
    {
      id: "bridge",
      label: "Academia–Industry Bridge",
      question: "What is the Academia–Industry Bridge?",
      answer: [bridge.body[0], `${bridge.body[1]} ${bridge.body[2]} ${bridge.body[3]}`, bridge.pathwaysIntro],
      bullets: bridge.pathways.map((pathway) => `${pathway.audience} — ${pathway.outcome}`),
      link: { label: "About the Bridge", to: "/bridge" },
      follow: ["pathway-students", "pathway-universities", "pathway-businesses", "pathway-researchers"],
      keywords: ["bridge", "academia industry", "industry academia", "gap between", "classroom to work", "knowledge to opportunity"],
    },
    {
      id: "impact",
      label: "Your impact",
      question: "What impact does Elevate have?",
      answer: [impact.lede, impact.body, impact.intro],
      bullets: impact.areas.map((area) => `${area.name} — ${area.body}`),
      footnote: impact.note,
      link: { label: "Our impact areas", to: "/" },
      follow: ["what-we-do", "get-involved", "contact"],
      keywords: ["impact", "results", "outcomes", "difference", "how many people", "numbers", "statistics", "achievements"],
    },
    {
      id: "events",
      label: "Events",
      question: "Do you run events?",
      answer: [
        `Yes — events and initiatives are a core part of the work: ${lower(events.lede)}`,
        "We run sessions, initiatives and collaborative events that bring students, universities, professionals and organizations into the same room. Dates are published on the Events page as they are confirmed.",
      ],
      link: { label: "See Events", to: "/events" },
      follow: ["programs", "get-involved", "contact"],
      keywords: ["events", "event", "workshop", "seminar", "conference", "session", "webinar", "meetup", "calendar", "upcoming"],
    },

    // --- Getting involved ------------------------------------------------
    {
      id: "get-involved",
      label: "How can I get involved?",
      question: "How can I get involved?",
      answer: [contact.body, "There are five ways in:"],
      bullets: contact.calls,
      link: { label: "Go to Contact", to: "/contact" },
      follow: ["volunteer", "partner", "mentor", "who-can-collaborate", "details-not-published", "contact"],
      keywords: ["get involved", "join", "take part", "participate", "sign up", "apply", "how do i start", "membership", "work with you"],
    },
    {
      id: "volunteer",
      label: "Volunteering",
      question: "Can I volunteer?",
      answer: [answerTo("Can I volunteer?")],
      link: { label: "Go to Contact", to: "/contact" },
      follow: ["mentor", "get-involved", "contact"],
      keywords: ["volunteer", "volunteering", "give time", "help out", "contribute"],
    },
    {
      id: "partner",
      label: "Partnering with you",
      question: "How can an organization partner with Elevate?",
      answer: [answerTo("How can an organization partner with Elevate?")],
      link: { label: "Start a conversation", to: "/contact" },
      follow: ["who-can-collaborate", "bridge", "contact"],
      keywords: ["partner", "partnership", "sponsor", "sponsorship", "csr", "collaborate", "collaboration", "work together"],
    },
    {
      id: "mentor",
      label: "Mentorship",
      question: "How does mentorship work?",
      answer: [
        programs.items.find((item) => item.name === "Mentorship").body,
        "It runs both ways: if you are early in your career you can ask to be matched with a mentor, and if you are established you can offer to mentor someone else.",
      ],
      link: { label: "See all program areas", to: "/programs" },
      follow: ["volunteer", "get-involved", "contact"],
      keywords: ["mentor", "mentorship", "mentoring", "be mentored", "find a mentor", "become a mentor", "coach"],
    },
    {
      id: "who-can-collaborate",
      label: "Who can collaborate?",
      question: "Who can collaborate with Elevate?",
      answer: [answerTo("Who can collaborate with Elevate?")],
      link: { label: "Go to Contact", to: "/contact" },
      follow: ["partner", "get-involved", "contact"],
      keywords: ["who can collaborate", "who can join", "am i eligible", "eligibility", "requirements", "who do you work with"],
    },
    {
      id: "contact",
      label: "Contact you",
      question: "How do I contact Elevate?",
      answer: [
        contact.lede,
        "The contact form is the fastest route — tell us which of these you are and what you are after, and it reaches the right person.",
        contact.closing,
      ],
      bullets: contact.roles,
      link: { label: "Open the contact form", to: "/contact" },
      follow: ["get-involved", "partner", "volunteer", "details-not-published"],
      keywords: ["contact", "email", "phone", "reach you", "get in touch", "talk to someone", "speak to a human", "address", "where are you", "enquiry", "inquiry"],
    },

    {
      id: "details-not-published",
      label: "Fees, dates & eligibility",
      question: "What does it cost, and when does it run?",
      answer: [
        "Specifics like fees, intake dates, duration, certification and eligibility criteria are not published on this site, and I will not guess at them.",
        "Those depend on the particular program and partner, so the contact form is the way to ask — say which program area you mean and someone will come back with the actual detail.",
      ],
      link: { label: "Ask via the contact form", to: "/contact" },
      follow: ["programs", "get-involved", "contact"],
      keywords: ["cost", "costs", "fee", "fees", "price", "pricing", "how much", "free", "charge", "charges", "payment", "paid", "scholarship", "deadline", "dates", "start date", "when does it start", "when do you start", "when does it begin", "schedule", "timings", "intake", "duration", "how long", "certificate", "certification", "accredited", "accreditation", "eligibility criteria", "requirements to join"],
    },

    // --- FAQ browse ------------------------------------------------------
    {
      id: "faq",
      label: "Browse the FAQ",
      question: "What do people usually ask?",
      answer: ["These are the questions we get most often — tap one:"],
      link: { label: "Read the full FAQ", to: "/faq" },
      follow: faqTopics.map((topic) => topic.id),
      keywords: ["faq", "faqs", "common questions", "frequently asked"],
    },

    ...pillarTopics,
    ...programTopics,
    ...pathwayTopics,
    ...faqTopics,
  ],

  // Reachable only by typing. Kept out of `topics` so they never occupy a chip
  // slot, but answered properly when someone opens with "hi" or asks whether
  // they are talking to a person.
  smalltalk: [
    {
      id: "hello",
      answer: ["Hello! Ask me anything about Elevate, or pick a topic:"],
      follow: ["what-is-elevate", "what-we-do", "programs", "get-involved"],
      keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "salam", "hola"],
    },
    {
      id: "thanks",
      answer: ["Happy to help. Anything else about Elevate?"],
      follow: ["what-we-do", "programs", "get-involved", "contact"],
      keywords: ["thanks", "thank you", "thankyou", "thx", "cheers"],
    },
    {
      id: "bye",
      answer: ["Thanks for stopping by. The contact form is always open if you would like to talk to someone."],
      follow: ["contact"],
      keywords: ["bye", "goodbye", "see you", "that is all", "thats all", "nothing else"],
    },
    {
      id: "identity",
      answer: [
        "I am a scripted assistant — not an AI, and not a person. Every answer I give is written copy from this site, which is why I stay strictly on Elevate.",
        "For anything I cannot cover, the contact form reaches a real person.",
      ],
      follow: ["contact", "what-is-elevate"],
      keywords: ["are you human", "are you a bot", "are you real", "are you ai", "chatgpt", "am i talking to a person", "who am i talking to", "real person", "robot"],
    },
    {
      id: "help",
      answer: ["I can cover who Elevate is, what we do, our program areas, the Academia–Industry Bridge, our impact, events, and how to get involved."],
      follow: ["what-is-elevate", "what-we-do", "programs", "bridge", "get-involved", "contact"],
      keywords: ["help", "what can you do", "what can you answer", "options", "menu", "topics"],
    },
  ],
};

// ---------------------------------------------------------------------------
// Lookup
// ---------------------------------------------------------------------------

const byId = new Map(chatbot.topics.map((topic) => [topic.id, topic]));

/** A node by id, for chip taps and `follow` lists. */
export const getTopic = (id) => byId.get(id) ?? null;

/** Chip label for an id, so the component never reaches into the data itself. */
export const getLabel = (id) => byId.get(id)?.label ?? id;

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "am", "do", "does", "did", "can", "could",
  "would", "should", "will", "shall", "may", "might", "have", "has", "had", "i", "me", "my", "mine", "we",
  "us", "our", "you", "your", "yours", "it", "its", "this", "that", "these", "those", "there", "here", "to",
  "of", "in", "on", "at", "by", "for", "with", "from", "about", "into", "and", "or", "but", "if", "so", "as",
  "than", "then", "what", "whats", "how", "why", "when", "where", "which", "who", "whom", "please", "tell",
  "know", "want", "need", "get", "give", "any", "some", "more", "much", "many", "very", "just", "also",
  "elevate",
]);

const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9']+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const contentWords = (text) => normalize(text).split(" ").filter((word) => word.length > 2 && !STOP_WORDS.has(word));

/**
 * Score one node against a typed question.
 *
 * A multi-word keyword found as a phrase is the strongest signal (4); a single
 * keyword present as a whole word is next (2); a word shared with the node's
 * own label or question is a weak tie-breaker (1), and only counts once the
 * node has already scored on a real keyword. Nothing here is fuzzy — a node
 * only scores on words the reader actually typed.
 */
function scoreTopic(topic, query, queryWords) {
  let score = 0;

  for (const keyword of topic.keywords ?? []) {
    if (keyword.includes(" ")) {
      if (query.includes(keyword)) score += 4;
    } else if (queryWords.includes(keyword)) {
      score += 2;
    }
  }

  if (score > 0) {
    const ownWords = new Set(contentWords(`${topic.label ?? ""} ${topic.question ?? ""}`));
    for (const word of queryWords) if (ownWords.has(word)) score += 1;
  }

  return score;
}

/** Below this we decline rather than guess. One whole-word keyword hit clears it. */
const MIN_SCORE = 2;

/**
 * Resolve typed text to a node, or `null` when it matches nothing — which the
 * component renders as `chatbot.fallback`. This is the only path a free-text
 * question can take, so an off-subject question has no route to an answer node.
 */
export function matchTopic(text) {
  const query = normalize(text);
  if (!query) return null;

  const queryWords = query.split(" ");
  let best = null;
  let bestScore = 0;

  // Small talk is scanned first so a bare "hi" is not dragged into a topic by
  // an incidental word, but it loses to any topic that scores higher.
  for (const node of [...chatbot.smalltalk, ...chatbot.topics]) {
    const score = scoreTopic(node, query, queryWords);
    if (score > bestScore) {
      bestScore = score;
      best = node;
    }
  }

  return bestScore >= MIN_SCORE ? best : null;
}
