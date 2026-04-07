'use strict';

/**
 * In-memory thread store.
 * Each thread has: id, categoryId, title, body, author, date, replies[].
 * Each reply has: id, author, body, date.
 */
let threads = [
  // Norwegian
  {
    id: 't1',
    categoryId: 'norwegian',
    title: 'Difference between Bokmål and Nynorsk — where should beginners start?',
    body: 'I have been learning Norwegian for about two months and I am confused about which written standard to focus on. Most resources seem to use Bokmål, but I see references to Nynorsk quite often. Can anyone explain the main differences and which is more practical for a beginner aiming to live in Oslo?',
    author: 'LinguistLearner',
    date: '2025-03-15',
    replies: [
      {
        id: 'r1',
        author: 'NordicNative',
        body: 'Start with Bokmål — it is used by around 85–90% of Norwegians and almost all mainstream media. Nynorsk is mainly used in western Norway and is taught in schools as a secondary standard. Once you have a solid Bokmål base you will find Nynorsk much easier to pick up.',
        date: '2025-03-16',
      },
      {
        id: 'r2',
        author: 'OsloTeacher',
        body: 'Great question! Bokmål is definitely the right starting point for Oslo. The city switched almost entirely to Bokmål in official use. That said, understanding Nynorsk will help you read a much wider range of Norwegian literature.',
        date: '2025-03-17',
      },
    ],
  },
  {
    id: 't2',
    categoryId: 'norwegian',
    title: 'Recommended Norwegian podcasts for intermediate learners',
    body: 'I feel comfortable with basic conversation but struggle to follow native speakers at full speed. What podcasts or audio resources do you recommend for intermediate Norwegian learners? I find the NRK podcasts quite fast.',
    author: 'PodcastPete',
    date: '2025-03-20',
    replies: [
      {
        id: 'r3',
        author: 'NorskNerd',
        body: '"Språkteigen" on NRK is wonderful — it covers language itself, so you are learning about Norwegian while listening to Norwegian. Also try "Radioresepsjonen" for relaxed conversational speed once you are ready for more naturalistic speech.',
        date: '2025-03-21',
      },
    ],
  },
  {
    id: 't3',
    categoryId: 'norwegian',
    title: 'Reading Ibsen in the original — tips for navigating 19th-century Norwegian',
    body: 'I want to read Henrik Ibsen\'s plays in the original Norwegian. His language feels archaic compared to modern Bokmål. Any tips on resources or editions with annotations?',
    author: 'TheatreThea',
    date: '2025-03-28',
    replies: [
      {
        id: 'r4',
        author: 'NordicNative',
        body: 'The "Ibsen skrifter" critical edition is the gold standard. Many university libraries carry it. For casual reading, the Gyldendal paperback editions are widely available in Norway and have brief editorial notes.',
        date: '2025-03-29',
      },
    ],
  },

  // English
  {
    id: 't4',
    categoryId: 'english',
    title: 'The Oxford comma — necessary or stylistic choice?',
    body: 'I keep seeing heated debates about the Oxford comma. My editor insists I use it, but some style guides say it is optional. What are the strongest arguments on each side, and is there a clear practical rule?',
    author: 'GrammarGuru',
    date: '2025-02-10',
    replies: [
      {
        id: 'r5',
        author: 'EditorEllie',
        body: 'The strongest argument for the Oxford comma is disambiguation — "We invited the strippers, Stalin and Hitler" vs "We invited the strippers, Stalin, and Hitler" is the classic example. In legal and technical writing it is almost universally recommended. In journalism, AP Style traditionally omits it, but clarity always wins.',
        date: '2025-02-11',
      },
      {
        id: 'r6',
        author: 'StyleSam',
        body: 'My rule: use it whenever the absence of a comma could create ambiguity. Most reputable style guides (Chicago, APA, MLA) recommend it. AP Style is the main outlier, and even they acknowledge exceptions for clarity.',
        date: '2025-02-12',
      },
    ],
  },
  {
    id: 't5',
    categoryId: 'english',
    title: 'Best novels to study contemporary English prose style',
    body: 'I am an advanced English learner trying to refine my writing style by reading great contemporary prose. Which novels do members here recommend specifically for their exceptional prose quality, not just their stories?',
    author: 'ProseStudent',
    date: '2025-03-05',
    replies: [
      {
        id: 'r7',
        author: 'BookwormBeth',
        body: 'Kazuo Ishiguro\'s "The Remains of the Day" is exquisite for studying unreliable narration and restrained prose. Marilynne Robinson\'s "Gilead" for lyrical, meditative style. Cormac McCarthy\'s "The Road" for strikingly spare, punctuation-minimal prose.',
        date: '2025-03-06',
      },
    ],
  },
  {
    id: 't6',
    categoryId: 'english',
    title: 'Understanding British vs American English in literature',
    body: 'I sometimes get confused when reading British novels — vocabulary, spelling, and even grammar seem different. Are there good resources that map out the key differences, especially for literature contexts?',
    author: 'TransAtlanticReader',
    date: '2025-03-18',
    replies: [
      {
        id: 'r8',
        author: 'GrammarGuru',
        body: 'Lynne Murphy\'s blog "Separated by a Common Language" is the best free resource on this. Her book "The Prodigal Tongue" (2018) covers the history and sociology of the divide brilliantly. For quick reference, the Wikipedia article on "American and British English differences" is surprisingly comprehensive.',
        date: '2025-03-19',
      },
    ],
  },

  // Spanish
  {
    id: 't7',
    categoryId: 'spanish',
    title: 'Navigating voseo vs tuteo for learners',
    body: 'I learned Spanish with tuteo (using tú) but now I have Argentine colleagues who use voseo (using vos). The conjugations are slightly different and I keep making mistakes. Is there a concise guide to voseo conjugation?',
    author: 'SpanishSophie',
    date: '2025-03-01',
    replies: [
      {
        id: 'r9',
        author: 'BuenosAiresBob',
        body: 'Voseo is simpler than it looks: drop the "i" from the tuteo form and add a stress on the last syllable. "Hablas" → "hablás". "Tienes" → "tenés". The verb "ser" is the main irregular: "sos" instead of "eres". The Real Academia Española website has a free grammar section that covers voseo in detail.',
        date: '2025-03-02',
      },
    ],
  },
  {
    id: 't8',
    categoryId: 'spanish',
    title: 'Gabriel García Márquez and magic realism — where to begin?',
    body: 'I want to read García Márquez in Spanish but am not sure where to start. "Cien años de soledad" feels daunting. Is there a shorter work that captures his style and is more accessible for a B2-level reader?',
    author: 'MagicReaderMarta',
    date: '2025-03-22',
    replies: [
      {
        id: 'r10',
        author: 'LatinoLit',
        body: '"El coronel no tiene quien le escriba" (No One Writes to the Colonel) is perfect — it is novella-length, the prose is clean and spare, and it showcases his mastery without the epic complexity of "Cien años". "La increíble y triste historia de la cándida Eréndira" is also an excellent short story collection.',
        date: '2025-03-23',
      },
    ],
  },

  // French
  {
    id: 't9',
    categoryId: 'french',
    title: 'French liaisons — rules or instinct?',
    body: 'I can never figure out when to make liaisons in spoken French. My teacher says some are obligatory and some are optional, but I end up guessing every time. Is there a practical framework?',
    author: 'FrenchFumbling',
    date: '2025-02-20',
    replies: [
      {
        id: 'r11',
        author: 'ParisianPaul',
        body: 'There are three categories: obligatory (e.g., after determiners: "les enfants"), optional (stylistically variable in speech), and forbidden (e.g., after "et"). The podcast "Français Authentique" by Johan has excellent episodes on this. The key is lots of listening — you internalize the patterns over time.',
        date: '2025-02-21',
      },
    ],
  },
  {
    id: 't10',
    categoryId: 'french',
    title: 'Recommended French novels for B1/B2 learners',
    body: 'I want to start reading French fiction. My level is around B1-B2. I am looking for novels that are engaging and not too archaic in style — modern French preferred.',
    author: 'FrancophileFlorence',
    date: '2025-03-10',
    replies: [
      {
        id: 'r12',
        author: 'ParisianPaul',
        body: 'Albert Camus\' "L\'Étranger" is the classic recommendation — short, modern prose, and high literary merit. Anna Gavalda\'s "Ensemble, c\'est tout" is extremely contemporary and colloquial, perfect for learning everyday French. For something lighter, Marc Levy\'s novels are readable and dialogue-heavy.',
        date: '2025-03-11',
      },
    ],
  },

  // Japanese
  {
    id: 't11',
    categoryId: 'japanese',
    title: 'Best order to learn kana and kanji',
    body: 'I am an absolute beginner in Japanese. I have seen arguments for learning hiragana first, then katakana, then kanji via RTK (Remembering the Kanji) or KKLC. What order do experienced learners recommend and why?',
    author: 'JapaneseBeginner',
    date: '2025-03-08',
    replies: [
      {
        id: 'r13',
        author: 'TokyoTutor',
        body: 'Learn hiragana first (1-2 weeks), then katakana (another week). Both together before touching kanji is the near-universal advice. For kanji, most self-study learners find ANKI with a frequency-based deck (like Kaishi 1.5k) more efficient than RTK, since you learn kanji in real vocabulary context rather than as isolated meanings.',
        date: '2025-03-09',
      },
    ],
  },
  {
    id: 't12',
    categoryId: 'japanese',
    title: 'Reading Murakami in Japanese — which novel to start with?',
    body: 'My Japanese is at JLPT N3 level and I want to try reading Haruki Murakami in the original. His books seem very varied in difficulty. Which would members recommend as a starting point?',
    author: 'MurakamiMeg',
    date: '2025-03-25',
    replies: [
      {
        id: 'r14',
        author: 'TokyoTutor',
        body: '"ノルウェイの森" (Norwegian Wood) is usually recommended as relatively accessible Murakami — the prose is more straightforward than his surrealist works. "海辺のカフカ" (Kafka on the Shore) has more fantasy vocabulary. Many learners use the physical Japanese paperback alongside the English translation as a crutch while building vocabulary.',
        date: '2025-03-26',
      },
    ],
  },

  // General Linguistics
  {
    id: 't13',
    categoryId: 'general',
    title: 'What is the Sapir-Whorf hypothesis and does the evidence support it?',
    body: 'I keep hearing about the idea that the language you speak shapes how you think. Is this actually supported by modern linguistics research, or is it mostly philosophical speculation?',
    author: 'CuriousCognition',
    date: '2025-02-28',
    replies: [
      {
        id: 'r15',
        author: 'LinguisticsLucia',
        body: 'The strong version (linguistic determinism — your language completely determines your thought) is largely rejected. The weak version (linguistic relativity — language influences cognition at the margins) has genuine empirical support. Lera Boroditsky\'s research on spatial reasoning and color perception is the most cited. Her TED talk "How language shapes the way we think" is a great accessible overview.',
        date: '2025-03-01',
      },
    ],
  },
  {
    id: 't14',
    categoryId: 'general',
    title: 'Resources for learning about historical linguistics and language evolution',
    body: 'I am fascinated by how languages change over time — sound shifts, grammar evolution, language families. Where should someone new to historical linguistics begin?',
    author: 'EtymologyEnthusiast',
    date: '2025-03-12',
    replies: [
      {
        id: 'r16',
        author: 'HistoricalHannah',
        body: 'Start with John McWhorter\'s "The Power of Babel" — it is written for a general audience and covers language change vividly. For something more academic, Larry Trask\'s "Historical Linguistics" is an excellent undergraduate-level textbook. The YouTube channel "The Histomap" has good visual explanations of Indo-European language families.',
        date: '2025-03-13',
      },
    ],
  },
];

let nextThreadId = 't15';
let nextReplyId = 'r17';

/**
 * Returns all threads, optionally filtered by categoryId.
 * @param {string} [categoryId] - Optional category to filter by.
 * @returns {Array} Array of thread objects.
 */
function getThreads(categoryId) {
  if (categoryId) {
    return threads.filter((t) => t.categoryId === categoryId);
  }
  return threads.slice();
}

/**
 * Returns a single thread by id.
 * @param {string} id - Thread identifier.
 * @returns {Object|undefined}
 */
function getThreadById(id) {
  return threads.find((t) => t.id === id);
}

/**
 * Creates a new thread and returns it.
 * @param {string} categoryId
 * @param {string} title
 * @param {string} body
 * @param {string} author
 * @returns {Object} The created thread.
 */
function createThread(categoryId, title, body, author) {
  const thread = {
    id: nextThreadId,
    categoryId,
    title,
    body,
    author,
    date: new Date().toISOString().split('T')[0],
    replies: [],
  };
  // Increment thread id
  const num = parseInt(nextThreadId.slice(1), 10) + 1;
  nextThreadId = `t${num}`;
  threads.push(thread);
  return thread;
}

/**
 * Adds a reply to a thread.
 * @param {string} threadId
 * @param {string} author
 * @param {string} body
 * @returns {Object|null} The reply, or null if the thread was not found.
 */
function addReply(threadId, author, body) {
  const thread = getThreadById(threadId);
  if (!thread) return null;
  const reply = {
    id: nextReplyId,
    author,
    body,
    date: new Date().toISOString().split('T')[0],
  };
  const num = parseInt(nextReplyId.slice(1), 10) + 1;
  nextReplyId = `r${num}`;
  thread.replies.push(reply);
  return reply;
}

/**
 * Returns the most recently created threads, up to `limit`.
 * @param {number} limit
 * @returns {Array}
 */
function getRecentThreads(limit) {
  return threads.slice().reverse().slice(0, limit);
}

module.exports = {
  getThreads,
  getThreadById,
  createThread,
  addReply,
  getRecentThreads,
};
