'use strict';

/**
 * Curated learning resources for the forum.
 * Each resource has: id, categoryId, title, description, url, type, attribution.
 */
const resources = [
  // Norwegian
  {
    id: 'res1',
    categoryId: 'norwegian',
    title: 'NRK Learning Norwegian',
    description:
      'NRK (Norwegian Broadcasting Corporation) provides a free beginner course with audio exercises and vocabulary lists tailored to everyday Norwegian.',
    url: 'https://www.nrk.no/etterretning/language',
    type: 'Course',
    attribution: 'NRK — Norsk rikskringkasting',
  },
  {
    id: 'res2',
    categoryId: 'norwegian',
    title: 'Norwegian on Duolingo',
    description:
      'Duolingo\'s Norwegian Bokmål course is one of the most popular free resources for absolute beginners, covering pronunciation, vocabulary, and basic grammar.',
    url: 'https://www.duolingo.com/course/nb/en',
    type: 'App / Course',
    attribution: 'Duolingo, Inc.',
  },
  {
    id: 'res3',
    categoryId: 'norwegian',
    title: 'Ibsen skrifter — Critical edition of Henrik Ibsen\'s works',
    description:
      'The authoritative scholarly edition of Ibsen\'s complete works, published by the University of Oslo. Freely accessible online with manuscript reproductions and editorial notes.',
    url: 'https://ibsen.uio.no',
    type: 'Literary Archive',
    attribution: 'University of Oslo — Centre for Ibsen Studies',
  },

  // English
  {
    id: 'res4',
    categoryId: 'english',
    title: 'The Chicago Manual of Style Online',
    description:
      'The definitive style guide for English writing in publishing, covering grammar, usage, citations, and formatting. Free sample chapters available.',
    url: 'https://www.chicagomanualofstyle.org',
    type: 'Style Guide',
    attribution: 'University of Chicago Press',
  },
  {
    id: 'res5',
    categoryId: 'english',
    title: 'Project Gutenberg — Classic English Literature',
    description:
      'Over 70,000 free eBooks of classic English literature, all in the public domain. An invaluable resource for reading original texts without cost.',
    url: 'https://www.gutenberg.org',
    type: 'Library',
    attribution: 'Project Gutenberg Literary Archive Foundation',
  },
  {
    id: 'res6',
    categoryId: 'english',
    title: 'Separated by a Common Language (Lynne Murphy)',
    description:
      'An academic linguistics blog examining differences between British and American English, maintained by Professor Lynne Murphy of the University of Sussex.',
    url: 'https://separatedbyacommonlanguage.blogspot.com',
    type: 'Blog / Academic Resource',
    attribution: 'Prof. Lynne Murphy, University of Sussex',
  },

  // Spanish
  {
    id: 'res7',
    categoryId: 'spanish',
    title: 'Real Academia Española — Diccionario de la lengua española',
    description:
      'The authoritative dictionary of the Spanish language, maintained by the Royal Spanish Academy. Freely available online with definitions, usage notes, and grammatical information.',
    url: 'https://dle.rae.es',
    type: 'Dictionary / Reference',
    attribution: 'Real Academia Española (RAE)',
  },
  {
    id: 'res8',
    categoryId: 'spanish',
    title: 'Cervantes Virtual — Spanish Literature Library',
    description:
      'The Biblioteca Virtual Miguel de Cervantes offers thousands of Spanish-language literary texts in the public domain, from medieval manuscripts to 20th-century classics.',
    url: 'https://www.cervantesvirtual.com',
    type: 'Library',
    attribution: 'Fundación Biblioteca Virtual Miguel de Cervantes',
  },

  // French
  {
    id: 'res9',
    categoryId: 'french',
    title: 'TV5Monde — Apprendre le français',
    description:
      'Free French language lessons across all levels (A1 to C2), with video-based exercises, grammar references, and cultural content from the international French-language television network.',
    url: 'https://apprendre.tv5monde.com',
    type: 'Course',
    attribution: 'TV5MONDE',
  },
  {
    id: 'res10',
    categoryId: 'french',
    title: 'Académie française — Language Resources',
    description:
      'Official rulings and recommendations on French language use from the Académie française, the body charged with matters relating to the French language.',
    url: 'https://www.academie-francaise.fr/la-langue-francaise',
    type: 'Reference / Authority',
    attribution: 'Académie française',
  },

  // Japanese
  {
    id: 'res11',
    categoryId: 'japanese',
    title: 'Jisho — Japanese-English Dictionary',
    description:
      'The most popular free online Japanese dictionary, supporting kanji, kana, and English searches. Includes stroke order diagrams, JLPT level indicators, and example sentences.',
    url: 'https://jisho.org',
    type: 'Dictionary',
    attribution: 'Jisho.org',
  },
  {
    id: 'res12',
    categoryId: 'japanese',
    title: 'NHK World — Easy Japanese',
    description:
      'NHK\'s free beginner Japanese course designed for people who want to communicate in Japan. Covers practical conversation with audio and video examples.',
    url: 'https://www3.nhk.or.jp/nhkworld/en/learnjapanese/',
    type: 'Course',
    attribution: 'NHK World-Japan',
  },

  // General
  {
    id: 'res13',
    categoryId: 'general',
    title: 'Ethnologue — Languages of the World',
    description:
      'The world\'s most comprehensive catalog of human languages, with detailed data on language families, speaker populations, and geographic distribution.',
    url: 'https://www.ethnologue.com',
    type: 'Reference',
    attribution: 'SIL International',
  },
  {
    id: 'res14',
    categoryId: 'general',
    title: 'LINGUIST List',
    description:
      'The largest online resource for academic linguistics, aggregating job postings, conference announcements, book notices, and academic discussions from linguists worldwide.',
    url: 'https://linguistlist.org',
    type: 'Academic Resource',
    attribution: 'LINGUIST List — Funded by the National Science Foundation',
  },
];

/**
 * Returns all resources, optionally filtered by categoryId.
 * @param {string} [categoryId]
 * @returns {Array}
 */
function getResources(categoryId) {
  if (categoryId) {
    return resources.filter((r) => r.categoryId === categoryId);
  }
  return resources.slice();
}

/**
 * Returns a resource by id.
 * @param {string} id
 * @returns {Object|undefined}
 */
function getResourceById(id) {
  return resources.find((r) => r.id === id);
}

module.exports = { getResources, getResourceById };
