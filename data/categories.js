'use strict';

/**
 * Language categories available on the forum.
 * Each category has an id, name, description, flag emoji, and thread count.
 */
const categories = [
  {
    id: 'norwegian',
    name: 'Norwegian',
    description:
      'Discuss Norwegian language learning, grammar, dialects, and literature. From Bokmål to Nynorsk, explore the beauty of the Norwegian tongue.',
    flag: '🇳🇴',
    threadCount: 3,
    color: '#d32f2f',
  },
  {
    id: 'english',
    name: 'English',
    description:
      'English as a global language — grammar tips, idioms, writing skills, and discussions on English literature from Shakespeare to modern fiction.',
    flag: '🇬🇧',
    threadCount: 3,
    color: '#1565c0',
  },
  {
    id: 'spanish',
    name: 'Spanish',
    description:
      'Join conversations about Spanish across all its regional variants. Discuss grammar, culture, and the rich literary tradition from Cervantes onward.',
    flag: '🇪🇸',
    threadCount: 2,
    color: '#f9a825',
  },
  {
    id: 'french',
    name: 'French',
    description:
      'Explore French language, pronunciation, culture, and the world of Francophone literature from Molière to contemporary authors.',
    flag: '🇫🇷',
    threadCount: 2,
    color: '#6a1b9a',
  },
  {
    id: 'japanese',
    name: 'Japanese',
    description:
      'Learn hiragana, katakana, and kanji. Discuss Japanese grammar, pop culture, and classic literature from Murasaki Shikibu to Haruki Murakami.',
    flag: '🇯🇵',
    threadCount: 2,
    color: '#e53935',
  },
  {
    id: 'general',
    name: 'General Linguistics',
    description:
      'Cross-language discussions on linguistics, language acquisition, phonetics, etymology, and the science of how humans communicate.',
    flag: '🌐',
    threadCount: 2,
    color: '#2e7d32',
  },
];

/**
 * Returns all categories.
 * @returns {Array} Array of category objects.
 */
function getAllCategories() {
  return categories;
}

/**
 * Returns a single category by its id.
 * @param {string} id - The category identifier.
 * @returns {Object|undefined} The category object, or undefined if not found.
 */
function getCategoryById(id) {
  return categories.find((c) => c.id === id);
}

module.exports = { getAllCategories, getCategoryById };
