# Alphanumeric

A simple React + Vite learning project that displays alphabets and numbers in a styled grid layout and includes small interactive demos such as a textbox, counter, and a blog post viewer.

## Project Overview

This application is designed as a lightweight practice project to showcase:

- Alphabet and number visual sections
- Navigation using React Router
- Reusable component structure
- Simple state management with React Context
- Fetching data from a public API
- A basic 404 page for unmatched routes

## Tech Stack

- React 19
- Vite
- JavaScript
- React Router DOM
- Tailwind CSS

## Project Structure

```bash
alphanumeric/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Alphabets.jsx
│   │   ├── Blog.jsx
│   │   ├── Counter.jsx
│   │   ├── Footer.jsx
│   │   ├── NavBar.jsx
│   │   ├── Numbers.jsx
│   │   └── TextBox.jsx
│   └── pages/
│       ├── AlphaNum.jsx
│       ├── Home.jsx
│       ├── NotFound.jsx
│       └── ...
└── README.md
```

## Important Files and Their Purpose

### Root files

- `package.json` - Defines scripts and project dependencies.
- `vite.config.js` - Vite configuration for the app.
- `index.html` - Main HTML entry point for the app.

### Application entry

- `src/main.jsx` - Renders the React app into the DOM.
- `src/App.jsx` - Sets up routing and shared app state.

### Pages

- `src/pages/Home.jsx` - Home page entry.
- `src/pages/AlphaNum.jsx` - Combines alphabet and number panels into one layout.
- `src/pages/NotFound.jsx` - Displays a 404 page for invalid routes.

### Components

- `src/components/NavBar.jsx` - Top navigation with links to Home, Alphanumeric, Textbox, Counter, and Blog.
- `src/components/Alphabets.jsx` - Displays the alphabet grid.
- `src/components/Numbers.jsx` - Displays the number grid.
- `src/components/TextBox.jsx` - Allows input and shows the value on submit using an alert.
- `src/components/Counter.jsx` - Increments or resets a shared counter using React Context.
- `src/components/Blog.jsx` - Fetches a blog post from JSONPlaceholder using the current counter value.
- `src/components/Footer.jsx` - Footer content for the page.

### Styling

- `src/App.css` - App-specific styling.
- `src/index.css` - Global styles and base styling.

## Routes

The app uses browser-based routing with React Router:

- `/` - Home page
- `/alphanum` - Alphabet and number display page
- `/textbox` - Text input demo
- `/counter` - Counter page
- `/blog` - Blog post fetch demo
- `*` - Not found page

## How to Use the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app in development mode

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

### 5. Run lint checks

```bash
npm run lint
```

## How the App Works

1. The app loads from `src/main.jsx` and mounts the main `App` component.
2. `src/App.jsx` sets up the router and a shared counter context.
3. Navigation links switch between different pages and components.
4. The `AlphaNum` page renders letter and number blocks in a colorful layout.
5. The `Counter` and `Blog` components interact through shared state to display dynamic content.
6. The app uses a public API to fetch blog data and render it on the blog page.

## Notes

- The counter is shared through `CountContext`, which means the blog page and counter page are connected.
- The `Blog` component fetches data from JSONPlaceholder using the current count value, so the post changes with the counter.
- The app is a learning/demo project, so it is intentionally simple and easy to extend.

## Suggested Next Improvements

- Replace placeholder home page content with a real landing page
- Add real form validation and nicer input handling
- Improve blog post rendering and layout
- Add a proper design system or theme
- Split logic into reusable hooks and services

## License

This project is for educational/demo use unless otherwise specified.
