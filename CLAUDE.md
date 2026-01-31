# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language Preference

**IMPORTANT: Always communicate in Japanese (日本語) when working in this repository.**

All responses, explanations, commit messages, and documentation should be in Japanese unless the user explicitly requests English.

## Project Overview

GOTO's Portfolio is a personal portfolio website built with React. It features a blog system powered by Contentful CMS, a products showcase, and a profile section. The site is styled with Tailwind CSS and custom CSS.

## Development Commands

### Running the Development Server
```bash
npm start
```
Opens the app at http://localhost:3000 with hot-reload enabled.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` directory.

### Running Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

### Deployment
```bash
npm run deploy
```
This custom script automates the deployment process:
1. Removes the `docs/` directory
2. Builds the production bundle
3. Moves `build/` to `docs/` (for GitHub Pages deployment)
4. Commits and pushes to the master branch

Individual deployment steps can be run separately:
- `npm run rm` - Remove docs directory
- `npm run mv` - Move build to docs
- `npm run git` - Add, commit, and push changes

## Architecture

### Routing Structure
The app uses React Router v6 with the following routes defined in `src/router.js`:
- `/` - Home page (displays blog list)
- `/blog` - Blog listing page
- `/blog/:id` - Individual blog post detail
- `/product` - Products showcase
- `/product/:id` - Individual product detail
- `/profile` - Profile page

### Layout Components
- **Header** (`src/components/header.js`) - Fixed navigation bar with site title
- **Footer** (`src/components/footer.js`) - Site footer
- **Side** (`src/components/side.js`) - Sidebar with profile information and social links

### Content Management

#### Contentful CMS Integration
Blog content is fetched from Contentful CMS. The integration requires environment variables:
- `REACT_APP_CONTENTFUL_SPACE_ID` - Contentful space ID
- `REACT_APP_CONTENTFUL_DELIVERY_API` - Contentful delivery API token

The blog fetches entries with content type `blogPost` and supports the following fields:
- `title` - Post title
- `body` - Post content (Markdown format)
- `description` - Short description for preview
- `image` - Featured image with nested `fields.file.url` structure
- `sys.createdAt` - Creation timestamp
- `sys.id` - Unique post identifier

#### Blog Detail Rendering
`src/pages/blog_detail.js` uses the `marked` library to parse Markdown content from Contentful. It's configured with:
- `gfm: true` - GitHub Flavored Markdown support
- `breaks: true` - Convert line breaks to `<br>` tags

The body content is preprocessed by replacing single newlines with double newlines before parsing.

#### Products
Products are hardcoded in `src/pages/product.js` as a static array with:
- `id` - Unique identifier
- `title` - Product name
- `image` - Imported image file

### Data Flow
- Blog posts are passed via React Router's `state` prop using the `<Link>` component
- Data includes: `title`, `body`, `image`, and `createdAt`
- Detail pages access this data via `useLocation().state`

### Styling
The project uses a hybrid styling approach:
- **Tailwind CSS** - Utility classes for layout and common styles
- **Custom CSS** - `src/App.css` for component-specific styles and responsive design

Recent commits show ongoing responsive design improvements for mobile devices.

### Date Formatting
All dates are formatted using `dayjs` in the format: `YYYY年MM月DD日` (Japanese year-month-day format).

## Environment Setup

Create a `.env` file in the project root with:
```
REACT_APP_CONTENTFUL_SPACE_ID=your_space_id
REACT_APP_CONTENTFUL_DELIVERY_API=your_api_token
```

## Important Notes

- The project uses `homepage: "./"` in `package.json`, indicating relative paths for deployment (likely for GitHub Pages)
- Blog post body text uses `dangerouslySetInnerHTML` to render parsed Markdown - be cautious when modifying content processing logic
- The deployment workflow expects a `docs/` directory for hosting (GitHub Pages convention)
- All component files use lowercase filenames (e.g., `header.js`, `side.js`)
