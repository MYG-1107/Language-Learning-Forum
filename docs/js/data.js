/* global LF */
'use strict';

window.LF = window.LF || {};

// ─── CATEGORIES ──────────────────────────────────────────────────────────────
LF.categories = [
  {
    id: 'norwegian',
    name: 'Norwegian',
    flag: '🇳🇴',
    color: '#ef4444',
    description: 'Discuss Norwegian language learning, grammar, dialects, and literature. From Bokmål to Nynorsk, explore the beauty of the Norwegian tongue.',
    icon: '📖',
  },
  {
    id: 'english',
    name: 'English',
    flag: '🇬🇧',
    color: '#3b82f6',
    description: 'English as a global language — grammar tips, idioms, writing skills, and discussions on English literature from Shakespeare to modern fiction.',
    icon: '✍️',
  },
  {
    id: 'spanish',
    name: 'Spanish',
    flag: '🇪🇸',
    color: '#f59e0b',
    description: 'Join conversations about Spanish across all its regional variants. Discuss grammar, culture, and the rich literary tradition from Cervantes onward.',
    icon: '🎭',
  },
  {
    id: 'french',
    name: 'French',
    flag: '🇫🇷',
    color: '#8b5cf6',
    description: 'Explore French language, pronunciation, culture, and the world of Francophone literature from Molière to contemporary authors.',
    icon: '🗼',
  },
  {
    id: 'japanese',
    name: 'Japanese',
    flag: '🇯🇵',
    color: '#ec4899',
    description: 'Learn hiragana, katakana, and kanji. Discuss Japanese grammar, pop culture, and classic literature from Murasaki Shikibu to Haruki Murakami.',
    icon: '⛩️',
  },
  {
    id: 'general',
    name: 'General Linguistics',
    flag: '🌐',
    color: '#10b981',
    description: 'Cross-language discussions on linguistics, language acquisition, phonetics, etymology, and the science of how humans communicate.',
    icon: '🔬',
  },
];

// ─── SEED THREADS ─────────────────────────────────────────────────────────────
LF.seedThreads = [
  {
    id: 't1',
    categoryId: 'norwegian',
    title: 'Difference between Bokmål and Nynorsk — where should beginners start?',
    body: "I have been learning Norwegian for about two months and I am confused about which written standard to focus on. Most resources seem to use Bokmål, but I see references to Nynorsk quite often. Can anyone explain the main differences and which is more practical for a beginner aiming to live in Oslo?",
    author: 'LinguistLearner',
    date: '2025-03-15',
    replies: [
      {
        id: 'r1',
        author: 'NordicNative',
        body: "Start with Bokmål — it is used by around 85–90% of Norwegians and almost all mainstream media. Nynorsk is mainly used in western Norway and is taught in schools as a secondary standard. Once you have a solid Bokmål base you will find Nynorsk much easier to pick up.",
        date: '2025-03-16',
      },
      {
        id: 'r2',
        author: 'OsloTeacher',
        body: "Great question! Bokmål is definitely the right starting point for Oslo. The city switched almost entirely to Bokmål in official use. That said, understanding Nynorsk will help you read a much wider range of Norwegian literature.",
        date: '2025-03-17',
      },
    ],
  },
  {
    id: 't2',
    categoryId: 'norwegian',
    title: 'Recommended Norwegian podcasts for intermediate learners',
    body: "I feel comfortable with basic conversation but struggle to follow native speakers at full speed. What podcasts or audio resources do you recommend for intermediate Norwegian learners? I find the NRK podcasts quite fast.",
    author: 'PodcastPete',
    date: '2025-03-20',
    replies: [
      {
        id: 'r3',
        author: 'NorskNerd',
        body: "\"Språkteigen\" on NRK is wonderful — it covers language itself, so you are learning about Norwegian while listening to Norwegian. Also try \"Radioresepsjonen\" for relaxed conversational speed once you are ready for more naturalistic speech.",
        date: '2025-03-21',
      },
    ],
  },
  {
    id: 't3',
    categoryId: 'norwegian',
    title: "Reading Ibsen in the original — tips for navigating 19th-century Norwegian",
    body: "I want to read Henrik Ibsen's plays in the original Norwegian. His language feels archaic compared to modern Bokmål. Any tips on resources or editions with annotations?",
    author: 'TheatreThea',
    date: '2025-03-28',
    replies: [
      {
        id: 'r4',
        author: 'NordicNative',
        body: "The \"Ibsen skrifter\" critical edition is the gold standard. Many university libraries carry it. For casual reading, the Gyldendal paperback editions are widely available in Norway and have brief editorial notes.",
        date: '2025-03-29',
      },
    ],
  },
  {
    id: 't4',
    categoryId: 'english',
    title: 'The Oxford comma — necessary or stylistic choice?',
    body: "I keep seeing heated debates about the Oxford comma. My editor insists I use it, but some style guides say it is optional. What are the strongest arguments on each side, and is there a clear practical rule?",
    author: 'GrammarGuru',
    date: '2025-02-10',
    replies: [
      {
        id: 'r5',
        author: 'EditorEllie',
        body: "The strongest argument for the Oxford comma is disambiguation — \"We invited the strippers, Stalin and Hitler\" vs \"We invited the strippers, Stalin, and Hitler\" is the classic example. In legal and technical writing it is almost universally recommended. In journalism, AP Style traditionally omits it, but clarity always wins.",
        date: '2025-02-11',
      },
      {
        id: 'r6',
        author: 'StyleSam',
        body: "My rule: use it whenever the absence of a comma could create ambiguity. Most reputable style guides (Chicago, APA, MLA) recommend it. AP Style is the main outlier, and even they acknowledge exceptions for clarity.",
        date: '2025-02-12',
      },
    ],
  },
  {
    id: 't5',
    categoryId: 'english',
    title: 'Best novels to study contemporary English prose style',
    body: "I am an advanced English learner trying to refine my writing style by reading great contemporary prose. Which novels do members here recommend specifically for their exceptional prose quality, not just their stories?",
    author: 'ProseStudent',
    date: '2025-03-05',
    replies: [
      {
        id: 'r7',
        author: 'BookwormBeth',
        body: "Kazuo Ishiguro's \"The Remains of the Day\" is exquisite for studying unreliable narration and restrained prose. Marilynne Robinson's \"Gilead\" for lyrical, meditative style. Cormac McCarthy's \"The Road\" for strikingly spare, punctuation-minimal prose.",
        date: '2025-03-06',
      },
    ],
  },
  {
    id: 't6',
    categoryId: 'english',
    title: 'Understanding British vs American English in literature',
    body: "I sometimes get confused when reading British novels — vocabulary, spelling, and even grammar seem different. Are there good resources that map out the key differences, especially for literature contexts?",
    author: 'TransAtlanticReader',
    date: '2025-03-18',
    replies: [
      {
        id: 'r8',
        author: 'GrammarGuru',
        body: "Lynne Murphy's blog \"Separated by a Common Language\" is the best free resource on this. Her book \"The Prodigal Tongue\" (2018) covers the history and sociology of the divide brilliantly.",
        date: '2025-03-19',
      },
    ],
  },
  {
    id: 't7',
    categoryId: 'spanish',
    title: 'Navigating voseo vs tuteo for learners',
    body: "I learned Spanish with tuteo (using tú) but now I have Argentine colleagues who use voseo (using vos). The conjugations are slightly different and I keep making mistakes. Is there a concise guide to voseo conjugation?",
    author: 'SpanishSophie',
    date: '2025-03-01',
    replies: [
      {
        id: 'r9',
        author: 'BuenosAiresBob',
        body: "Voseo is simpler than it looks: drop the \"i\" from the tuteo form and add a stress on the last syllable. \"Hablas\" → \"hablás\". \"Tienes\" → \"tenés\". The verb \"ser\" is the main irregular: \"sos\" instead of \"eres\".",
        date: '2025-03-02',
      },
    ],
  },
  {
    id: 't8',
    categoryId: 'spanish',
    title: 'García Márquez and magic realism — where to begin?',
    body: "I want to read García Márquez in Spanish but am not sure where to start. \"Cien años de soledad\" feels daunting. Is there a shorter work that captures his style and is more accessible for a B2-level reader?",
    author: 'MagicReaderMarta',
    date: '2025-03-22',
    replies: [
      {
        id: 'r10',
        author: 'LatinoLit',
        body: "\"El coronel no tiene quien le escriba\" is perfect — it is novella-length, the prose is clean and spare, and it showcases his mastery without the epic complexity of \"Cien años\".",
        date: '2025-03-23',
      },
    ],
  },
  {
    id: 't9',
    categoryId: 'french',
    title: 'French liaisons — rules or instinct?',
    body: "I can never figure out when to make liaisons in spoken French. My teacher says some are obligatory and some are optional, but I end up guessing every time. Is there a practical framework?",
    author: 'FrenchFumbling',
    date: '2025-02-20',
    replies: [
      {
        id: 'r11',
        author: 'ParisianPaul',
        body: "There are three categories: obligatory (e.g., after determiners: \"les enfants\"), optional (stylistically variable), and forbidden (e.g., after \"et\"). The podcast \"Français Authentique\" by Johan has excellent episodes on this.",
        date: '2025-02-21',
      },
    ],
  },
  {
    id: 't10',
    categoryId: 'french',
    title: 'Recommended French novels for B1/B2 learners',
    body: "I want to start reading French fiction. My level is around B1-B2. I am looking for novels that are engaging and not too archaic in style — modern French preferred.",
    author: 'FrancophileFlorence',
    date: '2025-03-10',
    replies: [
      {
        id: 'r12',
        author: 'ParisianPaul',
        body: "Albert Camus' \"L'Étranger\" is the classic recommendation — short, modern prose, and high literary merit. Anna Gavalda's \"Ensemble, c'est tout\" is extremely contemporary and colloquial, perfect for learning everyday French.",
        date: '2025-03-11',
      },
    ],
  },
  {
    id: 't11',
    categoryId: 'japanese',
    title: 'Best order to learn kana and kanji',
    body: "I am an absolute beginner in Japanese. I have seen arguments for learning hiragana first, then katakana, then kanji via RTK or KKLC. What order do experienced learners recommend and why?",
    author: 'JapaneseBeginner',
    date: '2025-03-08',
    replies: [
      {
        id: 'r13',
        author: 'TokyoTutor',
        body: "Learn hiragana first (1-2 weeks), then katakana (another week). Both together before touching kanji is the near-universal advice. For kanji, most self-study learners find ANKI with a frequency-based deck more efficient than RTK.",
        date: '2025-03-09',
      },
    ],
  },
  {
    id: 't12',
    categoryId: 'japanese',
    title: 'Reading Murakami in Japanese — which novel to start with?',
    body: "My Japanese is at JLPT N3 level and I want to try reading Haruki Murakami in the original. His books seem very varied in difficulty. Which would members recommend as a starting point?",
    author: 'MurakamiMeg',
    date: '2025-03-25',
    replies: [
      {
        id: 'r14',
        author: 'TokyoTutor',
        body: "\"ノルウェイの森\" (Norwegian Wood) is usually recommended as relatively accessible Murakami — the prose is more straightforward than his surrealist works.",
        date: '2025-03-26',
      },
    ],
  },
  {
    id: 't13',
    categoryId: 'general',
    title: 'What is the Sapir-Whorf hypothesis and does evidence support it?',
    body: "I keep hearing about the idea that the language you speak shapes how you think. Is this actually supported by modern linguistics research, or is it mostly philosophical speculation?",
    author: 'CuriousCognition',
    date: '2025-02-28',
    replies: [
      {
        id: 'r15',
        author: 'LinguisticsLucia',
        body: "The strong version (linguistic determinism) is largely rejected. The weak version (linguistic relativity) has genuine empirical support. Lera Boroditsky's research on spatial reasoning and color perception is the most cited.",
        date: '2025-03-01',
      },
    ],
  },
  {
    id: 't14',
    categoryId: 'general',
    title: 'Resources for learning about historical linguistics and language evolution',
    body: "I am fascinated by how languages change over time — sound shifts, grammar evolution, language families. Where should someone new to historical linguistics begin?",
    author: 'EtymologyEnthusiast',
    date: '2025-03-12',
    replies: [
      {
        id: 'r16',
        author: 'HistoricalHannah',
        body: "Start with John McWhorter's \"The Power of Babel\" — it is written for a general audience and covers language change vividly. For something more academic, Larry Trask's \"Historical Linguistics\" is an excellent undergraduate-level textbook.",
        date: '2025-03-13',
      },
    ],
  },
];

// ─── RESOURCES ────────────────────────────────────────────────────────────────
LF.resources = [
  {
    id: 'res1', categoryId: 'norwegian',
    title: 'NRK Learning Norwegian', icon: '🎙️',
    description: 'NRK provides a free beginner course with audio exercises and vocabulary lists tailored to everyday Norwegian.',
    url: 'https://www.nrk.no', type: 'Course',
    attribution: 'NRK — Norsk rikskringkasting',
  },
  {
    id: 'res2', categoryId: 'norwegian',
    title: 'Norwegian on Duolingo', icon: '🦉',
    description: "Duolingo's Norwegian Bokmål course is one of the most popular free resources for absolute beginners, covering pronunciation, vocabulary, and basic grammar.",
    url: 'https://www.duolingo.com/course/nb/en', type: 'App / Course',
    attribution: 'Duolingo, Inc.',
  },
  {
    id: 'res3', categoryId: 'norwegian',
    title: "Ibsen skrifter — Critical Edition",  icon: '📚',
    description: "The authoritative scholarly edition of Ibsen's complete works, published by the University of Oslo. Freely accessible online with manuscript reproductions.",
    url: 'https://ibsen.uio.no', type: 'Literary Archive',
    attribution: 'University of Oslo — Centre for Ibsen Studies',
  },
  {
    id: 'res4', categoryId: 'english',
    title: 'The Chicago Manual of Style Online', icon: '📋',
    description: 'The definitive style guide for English writing in publishing, covering grammar, usage, citations, and formatting.',
    url: 'https://www.chicagomanualofstyle.org', type: 'Style Guide',
    attribution: 'University of Chicago Press',
  },
  {
    id: 'res5', categoryId: 'english',
    title: 'Project Gutenberg', icon: '📖',
    description: 'Over 70,000 free eBooks of classic English literature, all in the public domain. An invaluable resource for reading original texts without cost.',
    url: 'https://www.gutenberg.org', type: 'Library',
    attribution: 'Project Gutenberg Literary Archive Foundation',
  },
  {
    id: 'res6', categoryId: 'english',
    title: 'Separated by a Common Language', icon: '🌐',
    description: 'An academic linguistics blog examining differences between British and American English, maintained by Professor Lynne Murphy.',
    url: 'https://separatedbyacommonlanguage.blogspot.com', type: 'Blog',
    attribution: 'Prof. Lynne Murphy, University of Sussex',
  },
  {
    id: 'res7', categoryId: 'spanish',
    title: 'RAE — Diccionario de la lengua española', icon: '📘',
    description: 'The authoritative dictionary of the Spanish language, maintained by the Royal Spanish Academy. Freely available online.',
    url: 'https://dle.rae.es', type: 'Dictionary',
    attribution: 'Real Academia Española (RAE)',
  },
  {
    id: 'res8', categoryId: 'spanish',
    title: 'Biblioteca Virtual Miguel de Cervantes', icon: '🏛️',
    description: 'Thousands of Spanish-language literary texts in the public domain, from medieval manuscripts to 20th-century classics.',
    url: 'https://www.cervantesvirtual.com', type: 'Library',
    attribution: 'Fundación Biblioteca Virtual Miguel de Cervantes',
  },
  {
    id: 'res9', categoryId: 'french',
    title: 'TV5Monde — Apprendre le français', icon: '📺',
    description: 'Free French language lessons across all levels (A1 to C2), with video-based exercises, grammar references, and cultural content.',
    url: 'https://apprendre.tv5monde.com', type: 'Course',
    attribution: 'TV5MONDE',
  },
  {
    id: 'res10', categoryId: 'french',
    title: "Académie française — Language Resources", icon: '🇫🇷',
    description: 'Official rulings and recommendations on French language use from the body charged with matters relating to the French language.',
    url: 'https://www.academie-francaise.fr/la-langue-francaise', type: 'Reference',
    attribution: 'Académie française',
  },
  {
    id: 'res11', categoryId: 'japanese',
    title: 'Jisho — Japanese-English Dictionary', icon: '🔍',
    description: 'The most popular free online Japanese dictionary, supporting kanji, kana, and English searches. Includes stroke order diagrams and JLPT indicators.',
    url: 'https://jisho.org', type: 'Dictionary',
    attribution: 'Jisho.org',
  },
  {
    id: 'res12', categoryId: 'japanese',
    title: 'NHK World — Easy Japanese', icon: '🎌',
    description: "NHK's free beginner Japanese course designed for people who want to communicate in Japan. Covers practical conversation with audio and video examples.",
    url: 'https://www3.nhk.or.jp/nhkworld/en/learnjapanese/', type: 'Course',
    attribution: 'NHK World-Japan',
  },
  {
    id: 'res13', categoryId: 'general',
    title: "Ethnologue — Languages of the World", icon: '🗺️',
    description: "The world's most comprehensive catalog of human languages, with detailed data on language families, speaker populations, and geographic distribution.",
    url: 'https://www.ethnologue.com', type: 'Reference',
    attribution: 'SIL International',
  },
  {
    id: 'res14', categoryId: 'general',
    title: 'LINGUIST List', icon: '🧑‍🎓',
    description: 'The largest online resource for academic linguistics, aggregating job postings, conference announcements, book notices, and academic discussions.',
    url: 'https://linguistlist.org', type: 'Academic',
    attribution: 'LINGUIST List',
  },
];

// ─── GUIDELINES ───────────────────────────────────────────────────────────────
LF.guidelines = [
  {
    num: 1, emoji: '🤝',
    title: 'Be Respectful',
    body: 'Treat every member with kindness and respect, regardless of their language level, nationality, or background. Language learning is challenging — encourage beginners, celebrate progress, and offer constructive feedback rather than criticism.',
  },
  {
    num: 2, emoji: '🎯',
    title: 'Stay On Topic',
    body: 'Post discussions in the appropriate language category. Threads should relate to language learning, linguistics, literature, or cultural topics. Off-topic posts may be moved or removed by moderators.',
  },
  {
    num: 3, emoji: '📜',
    title: 'Attribute Sources and References',
    body: 'When sharing information from external sources — textbooks, websites, academic articles — always provide proper attribution. Include the author, title, and URL or publication details. Plagiarism is not tolerated.',
  },
  {
    num: 4, emoji: '🚫',
    title: 'No Spam or Self-Promotion',
    body: 'Do not post unsolicited advertising, affiliate links, or repeated self-promotional content. Sharing genuinely helpful resources is welcome when relevant and disclosed honestly.',
  },
  {
    num: 5, emoji: '✍️',
    title: 'Use Clear and Accessible Language',
    body: 'The forum welcomes learners at all levels. When writing complex explanations, consider using examples and breaking down jargon. If your post includes a non-English language, provide a brief translation.',
  },
  {
    num: 6, emoji: '🛡️',
    title: 'No Hate Speech or Discrimination',
    body: 'Content that demeans, discriminates against, or harasses any individual or group based on language, nationality, ethnicity, religion, gender, or any other characteristic is strictly prohibited.',
  },
  {
    num: 7, emoji: '🚨',
    title: 'Report Violations',
    body: 'If you see content that violates these guidelines, please flag it for moderator review. Do not engage with rule-breaking posts — report them and move on. Community moderation depends on all of us.',
  },
  {
    num: 8, emoji: '🔒',
    title: 'Privacy and Safety',
    body: 'Do not share personal information about yourself or others — including real names, addresses, or contact details. Use a display name that does not identify you personally unless you choose to do so.',
  },
];

// ─── DATA ACCESS HELPERS ──────────────────────────────────────────────────────

LF.STORAGE_KEY = 'lf_threads';

/** Load threads from localStorage (merging with seed data) */
LF.getThreads = function () {
  try {
    const stored = JSON.parse(localStorage.getItem(LF.STORAGE_KEY) || 'null');
    return stored || LF.seedThreads.slice();
  } catch (_) {
    return LF.seedThreads.slice();
  }
};

/** Save threads to localStorage */
LF.saveThreads = function (threads) {
  try {
    localStorage.setItem(LF.STORAGE_KEY, JSON.stringify(threads));
  } catch (_) { /* quota exceeded — silent fail */ }
};

/** Get threads filtered by category */
LF.getThreadsByCategory = function (categoryId) {
  return LF.getThreads().filter(function (t) { return t.categoryId === categoryId; });
};

/** Get single thread by id */
LF.getThread = function (id) {
  return LF.getThreads().find(function (t) { return t.id === id; }) || null;
};

/** Create a new thread */
LF.createThread = function (categoryId, title, body, author) {
  var threads = LF.getThreads();
  var ids = threads.map(function (t) { return parseInt(t.id.slice(1), 10); });
  var nextNum = ids.length ? Math.max.apply(null, ids) + 1 : 100;
  var thread = {
    id: 't' + nextNum,
    categoryId: categoryId,
    title: title,
    body: body,
    author: author,
    date: new Date().toISOString().split('T')[0],
    replies: [],
  };
  threads.push(thread);
  LF.saveThreads(threads);
  return thread;
};

/** Add a reply to a thread */
LF.addReply = function (threadId, author, body) {
  var threads = LF.getThreads();
  var thread = threads.find(function (t) { return t.id === threadId; });
  if (!thread) return null;
  var allReplies = threads.reduce(function (acc, t) { return acc.concat(t.replies); }, []);
  var ids = allReplies.map(function (r) { return parseInt(r.id.slice(1), 10); });
  var nextNum = ids.length ? Math.max.apply(null, ids) + 1 : 100;
  var reply = {
    id: 'r' + nextNum,
    author: author,
    body: body,
    date: new Date().toISOString().split('T')[0],
  };
  thread.replies.push(reply);
  LF.saveThreads(threads);
  return reply;
};

/** Get recent threads (most recently created first) */
LF.getRecentThreads = function (limit) {
  return LF.getThreads().slice().reverse().slice(0, limit || 5);
};

/** Get category by id */
LF.getCategory = function (id) {
  return LF.categories.find(function (c) { return c.id === id; }) || null;
};

/** Update thread counts to match actual data */
LF.getThreadCount = function (categoryId) {
  return LF.getThreadsByCategory(categoryId).length;
};

/** Search threads and resources */
LF.search = function (query) {
  var q = query.toLowerCase().trim();
  if (!q) return { threads: [], resources: [] };
  var threads = LF.getThreads().filter(function (t) {
    return t.title.toLowerCase().includes(q)
      || t.body.toLowerCase().includes(q)
      || t.author.toLowerCase().includes(q)
      || t.replies.some(function (r) { return r.body.toLowerCase().includes(q) || r.author.toLowerCase().includes(q); });
  });
  var resources = LF.resources.filter(function (r) {
    return r.title.toLowerCase().includes(q)
      || r.description.toLowerCase().includes(q)
      || r.type.toLowerCase().includes(q)
      || r.attribution.toLowerCase().includes(q);
  });
  return { threads: threads, resources: resources };
};

/** Get avatar letter from author name */
LF.avatarLetter = function (name) {
  return (name || '?').charAt(0).toUpperCase();
};

/** Format date nicely */
LF.formatDate = function (dateStr) {
  try {
    var d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (_) {
    return dateStr;
  }
};

/** Escape HTML to prevent XSS */
LF.escapeHtml = function (str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};
