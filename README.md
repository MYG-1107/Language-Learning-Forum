# Language Learning Forum

A community-driven language learning forum where users can communicate through discussion threads, share resources, and access curated information about languages and literature.

## Features

- **Topic-based discussions** — Create and participate in threaded conversations grouped by language category
- **Language categories** — Dedicated spaces for Norwegian, English, Spanish, French, Japanese, and General Linguistics
- **Learning resources** — Curated, properly attributed external resources including dictionaries, courses, and literary archives
- **Community guidelines** — Clear rules fostering a respectful, inclusive environment
- **Clean, responsive UI** — Accessible on both desktop and mobile devices
- **Form validation** — Server-side validation with clear error messages

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/MYG-1107/Language-Learning-Forum.git
cd Language-Learning-Forum

# Install dependencies
npm install

# Start the development server (with auto-reload)
npm run dev

# Or start the production server
npm start
```

The forum will be available at **http://localhost:3000**.

## Project Structure

```
Language-Learning-Forum/
├── server.js               # Express application entry point
├── package.json
├── data/
│   ├── categories.js       # Language category data
│   ├── threads.js          # Thread and reply data + in-memory store
│   └── resources.js        # Curated learning resources
├── routes/
│   ├── index.js            # Home page
│   ├── categories.js       # Category listing and detail
│   ├── threads.js          # Thread listing, creation, and replies
│   ├── resources.js        # Learning resources with category filter
│   └── guidelines.js       # Community guidelines
├── views/
│   ├── partials/
│   │   ├── header.ejs      # Shared page header
│   │   └── footer.ejs      # Shared page footer
│   ├── index.ejs           # Home page
│   ├── categories.ejs      # All categories
│   ├── category.ejs        # Single category threads
│   ├── threads.ejs         # All threads
│   ├── thread.ejs          # Single thread + reply form
│   ├── new-thread.ejs      # New discussion form
│   ├── resources.ejs       # Learning resources
│   ├── guidelines.ejs      # Community guidelines
│   └── error.ejs           # Error page
├── public/
│   ├── css/styles.css      # Main stylesheet
│   └── js/main.js          # Client-side JavaScript
└── tests/
    └── app.test.js         # Integration tests (Jest + Supertest)
```

## Running Tests

```bash
npm test
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — recent discussions and category highlights |
| `/categories` | All language categories |
| `/categories/:id` | Threads in a specific category |
| `/threads` | All discussions |
| `/threads/new` | Create a new discussion |
| `/threads/:id` | View a thread and post replies |
| `/resources` | Curated learning resources (filterable by language) |
| `/guidelines` | Community guidelines |

## Planned Future Features

- User accounts and authentication
- Full-text search across threads and resources
- Multilingual interface support
- Thread moderation tools (edit, delete, pin, lock)
- Upvoting and community reputation system
- Persistent database storage (PostgreSQL / SQLite)
- RSS feed for new discussions

## License

MIT
