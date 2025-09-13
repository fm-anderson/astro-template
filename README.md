# Astro Template

This project is a lightweight template designed to build websites with Astro. It includes pre-configured settings for SEO, a blog, and a modern UI using Tailwind CSS and Alpine.js. It's built for easy deployment on Netlify.

## Features

- **Astro Framework**: Built on Astro, a modern web framework for building content-focused websites.
- **Tailwind CSS**: Pre-configured with Tailwind CSS for a utility-first styling approach.
- **Alpine.js**: Integrates Alpine.js for lightweight JavaScript functionality where you need it.
- **SEO-Optimized Layout**: A main layout component (`src/layouts/Layout.astro`) that handles key SEO meta tags for titles, descriptions, canonical URLs, and Open Graph information, and Twitter cards.
- **Blog Ready**: Includes pre-built components and pages (`src/components/BlogPostCard.astro`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`) for a fully functional blog section powered by Astro's content collections.
- **Customizable Configuration**: A central `siteConfig.json` file allows for easy customization of site-wide variables like `siteName`, `title`, `description`, and social media handles.
- **Code Formatting**: Comes with Prettier configured for consistent code style, including plugins for Astro and Tailwind CSS.

## Technologies

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **JavaScript**: Alpine.js
- **Other Dependencies**: `astro-icon`, `prettier-plugin-astro`, `prettier-plugin-tailwindcss`, `@astrojs/netlify`, `@astrojs/sitemap`, `@astrojs/partytown`

## Getting Started

### Installation

1.  Clone the repository and navigate to the project directory:

    ```bash
    git clone https://github.com/fm-anderson/astro-template.git astro-template
    cd astro-template
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

### Development

To start the local development server, run the following command:

```bash
npm run dev
```

The project also includes a `.vscode/launch.json` file for debugging within VS Code, allowing you to run the development server directly from the IDE.

## License

This project is licensed under the [MIT License](LICENSE.md).
