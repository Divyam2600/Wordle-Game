# Wordle Game

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <img alt="Version" src="https://img.shields.io/badge/Wordle-Game-brightgreen" />
</p>

## About The Build

Wordle Game is one which fetches the words data from a json file - data.json and has Slick Animations, Eye-Catching UI. However, the on-Screen keyboard working functionality is yet to be implemented.

## Vite + React.js + Tailwind CSS

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

## How To Start

### Install Vite and create React project

Execute [`vite`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npm init vite@latest
# or
yarn create vite
```

Then follow the prompts and make your choices.
Now execute the following commands:

```bash
cd my-project

npm install
```

### Install and setup Tailwind CSS

To install [`tailwindcss`](https://tailwindcss.com/docs/installation/using-postcss) and its peer dependencies via `npm`, and create your `tailwind.config.js` file, execute the following commands:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Add Tailwind to your PostCSS configuration

Add `tailwindcss` and `autoprefixer` to your `postcss.config.js` file, or wherever PostCSS is configured in your project.

```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### Configure your Template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```bash
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS `main.css` file.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Now finally run your Project

Run your build process with `npm run dev`or whatever command is configured in your `package.json` file.

```bash
npm run dev
```

### Note

Remember to Edit the Api endpoints for your local server to: ,

1) In `Keypad.jsx`.

```bash
fetch("http://127.0.0.1:5173/api/letters")
```

2) In `App.jsx`.

```bash
fetch("http://127.0.0.1:5173/api/solutions")
```
