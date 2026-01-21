# Markdown Knowledge Base 📚

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/ayuday/markdown?style=social)](https://github.com/ayuday/markdown)
[![GitHub forks](https://img.shields.io/github/forks/ayuday/markdown?style=social)](https://github.com/ayuday/markdown)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.markdownlang.com)](https://www.markdownlang.com)
[![Documentation](https://img.shields.io/badge/docs-latest-brightgreen)](https://www.markdownlang.com)


English | [简体中文](./README_cn.md)

## 🎯 Purpose of the Repository

**Master Markdown syntax from beginner to expert in one day** – This is a comprehensive Markdown learning resource library, containing complete tutorials from basic syntax to advanced usage, as well as a practical collection of online tools to help you quickly master Markdown and apply it to real projects.

## ✨ Features

- 📖 **Complete Documentation System** – A structured learning path from beginner to expert
- 🛠️ **Practical Toolset** – 6 online tools built with Vue3 + UnoCSS
- 🌍 **Bilingual Support (EN & CN)** – Available in both Chinese and English
- 📱 **Responsive Design** – Supports desktop and mobile devices
- 🚀 **Modern Tech Stack** – Developed with the latest front-end technologies

## 🌐 Online Resources

- **Official Website**: [https://www.markdownlang.com](https://www.markdownlang.com)
- **Online Tools**: [https://www.markdownlang.com/tools](https://www.markdownlang.com/tools)
- **Chinese Docs**: [https://www.markdownlang.com/zh-cn/](https://www.markdownlang.com/zh/)
- **English Docs**: [https://www.markdownlang.com/en/](https://www.markdownlang.com/en/)

## 📋 Documentation Index


### English Documents

#### 📖 Introduction (Intro)
- [Markdown Introduction](doc/en/intro/index.md)
- [What is Markdown](doc/en/intro/what-is-markdown.md)
- [Why Use Markdown](doc/en/intro/why-use-markdown.md)
- [Use Cases](doc/en/intro/use-cases.md)
- [Editors](doc/en/intro/editors.md)
- [Viewers](doc/en/intro/viewers.md)

#### 🏗️ Basic Syntax (Basic)
- [Overview](doc/en/basic/overview.md)
- [Headings](doc/en/basic/headings.md)
- [Paragraphs](doc/en/basic/paragraphs.md)
- [Emphasis](doc/en/basic/emphasis.md)
- [Lists](doc/en/basic/lists.md)
- [Links](doc/en/basic/links.md)
- [Images](doc/en/basic/images.md)
- [Blockquotes](doc/en/basic/blockquotes.md)
- [Code](doc/en/basic/code.md)
- [Escaping](doc/en/basic/escaping.md)

#### 🔧 Extended Syntax (Extended)
- [Extended Overview](doc/en/extended/index.md)
- [Tables](doc/en/extended/tables.md)
- [Fenced Code Blocks](doc/en/extended/fenced-code-blocks.md)
- [Footnotes](doc/en/extended/footnotes.md)
- [Heading IDs](doc/en/extended/heading-ids.md)
- [Definition Lists](doc/en/extended/definition-lists.md)
- [Strikethrough](doc/en/extended/strikethrough.md)
- [Task Lists](doc/en/extended/task-lists.md)
- [Highlight](doc/en/extended/highlight.md)

#### 🚀 Advanced Usage (Advanced)
- [Advanced Overview](doc/en/advanced/index.md)
- [Best Practices](doc/en/advanced/best-practices.md)
- [CSS](doc/en/advanced/css.md)
- [JavaScript](doc/en/advanced/javascript.md)
- [Diagrams](doc/en/advanced/diagrams.md)
- [Math](doc/en/advanced/math.md)
- [Performance](doc/en/advanced/performance.md)
- [Plugins](doc/en/advanced/plugins.md)
- [SEO](doc/en/advanced/seo.md)
- [Security](doc/en/advanced/security.md)
- [Shortcodes](doc/en/advanced/shortcodes.md)
- [Tools](doc/en/advanced/tools.md)
- [Frontmatter](doc/en/advanced/frontmatter.md)

#### 📋 Cheatsheet (Cheatsheet)
- [Cheatsheet](doc/en/cheatsheet/index.md)
- [Headings](doc/en/cheatsheet/headings.md)
- [Text Formatting](doc/en/cheatsheet/text-formatting.md)
- [Links & Images](doc/en/cheatsheet/links-images.md)
- [Lists](doc/en/cheatsheet/lists.md)
- [Images](doc/en/cheatsheet/image.md)
- [Links](doc/en/cheatsheet/link.md)

## 🛠️ Practical Toolset

A modern Markdown tool collection built with Vue3 and UnoCSS:

### 📝 Markdown Editor
A real-time preview editor with syntax highlighting and toolbar operations
- **Features**: Split preview, syntax highlighting, quick toolbar
- **Path**: `/tools/editor`

### 🔄 Format Conversion Tools
- **Markdown to HTML**: Convert Markdown to HTML code, supports download
- **Markdown to PDF**: Export Markdown documents to PDF files
- **HTML to Markdown**: Convert HTML code to Markdown format

### 📖 Markdown Viewer
A dedicated read-only preview tool, supporting URL loading and file upload
- **Features**: Beautiful preview, file upload, URL loading
- **Path**: `/tools/viewer`

### 📋 Syntax Cheatsheet
Interactive cheatsheet, click to view examples and demos
- **Features**: Categorized display, real-time examples, quick copy
- **Path**: `/tools/cheatsheet`

## 🚀 Getting Started Quickly

### Viewing Documentation
1. Visit [markdownlang.com](https://www.markdownlang.com)
2. Choose Chinese or English
3. Follow the learning path: Introduction → Basic → Extended → Advanced

### Using the Tools
1. Go to the [Tools Page](https://www.markdownlang.com/tools)
2. Choose the tool you need
3. Use directly in the browser, no installation required

### Local Development
```bash
# Clone the repository
git clone https://github.com/ayuday/markdown.git
cd markdown

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build production version
pnpm build
```

## 📚 Toolset Usage Guide

### Environment Requirements

- **Node.js**: >= 16.0.0
- **pnpm**: >= 8.0.0 or **npm**: >= 7.0.0 or **yarn**: >= 1.22.0
- **Modern browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+

### Project Structure

```
src/
├── package.json          # Project dependency config
├── vite.config.js        # Vite build config
├── uno.config.js         # UnoCSS config
├── index.html            # Entry HTML
└── src/                  # Source code directory
    ├── main.js           # Vue app entry
    ├── App.vue           # Main app component
    ├── router.js         # Routing config
    ├── components/       # Tool components
    │   ├── AppHeader.vue         # Navigation header
    │   ├── AppFooter.vue         # Footer
    │   ├── MarkdownEditor.vue    # Markdown Editor
    │   ├── MarkdownViewer.vue    # Markdown Viewer
    │   ├── MarkdownToHtml.vue    # MD to HTML
    │   ├── MarkdownToPdf.vue     # MD to PDF
    │   ├── HtmlToMarkdown.vue    # HTML to MD
    │   └── MarkdownCheatsheet.vue # Syntax cheatsheet
    ├── utils/            # Utility functions
    │   └── markdown.js   # Markdown processing tools
    ├── views/            # Page components
    │   └── Home.vue      # Home page
    └── styles/           # Style files
        └── main.css      # Global styles
```

### Development Guide

#### 1. Install Dependencies

```bash
cd src
npm install
```

#### 2. Start Development Server

```bash
npm run dev
```

The server will run at `http://localhost:3000` with hot reload enabled.

#### 3. Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

#### 4. Preview Production Build

```bash
npm run preview
```

#### 5. Lint Code

```bash
npm run lint
```

### Tool Features in Detail

#### 📝 Markdown Editor (`/editor`)

**Features:**
- Real-time side-by-side preview
- Rich toolbar (format, headings, lists, links, etc.)
- Keyboard shortcut support
- Syntax highlighting
- Export MD and HTML

**Usage:**
1. Enter Markdown content in the left editor area
2. View rendered effect in the right preview in real time
3. Use toolbar buttons for quick formatting
4. Keyboard shortcuts supported (e.g. Ctrl+B for bold)
5. Download your edited content

#### 📖 Markdown Viewer (`/viewer`)

**Features:**
- Support loading Markdown files via URL
- Support uploading local files
- Beautiful preview style
- Document statistics
- Switch between source and preview modes

**Usage:**
1. Enter Markdown file URL or upload a local file
2. Preview is rendered automatically
3. Can switch between source/preview modes
4. Support copying contents and downloading

#### 🔄 Markdown to HTML (`/to-html`)

**Features:**
- Real-time Markdown to HTML conversion
- Supports downloading full HTML files
- Built-in preview function
- Copy HTML code

**Usage:**
1. Paste or type Markdown content in the input box
2. The converted HTML is shown on the right
3. Click "Copy" to copy HTML code
4. Click "Download HTML" for the full HTML file

#### 📄 Markdown to PDF (`/to-pdf`)

**Features:**
- Export Markdown to PDF
- Supports multiple page formats (A4, A3, Letter, Legal)
- Custom margin settings
- Select portrait/landscape layout
- Optional header/footer

**Usage:**
1. Enter your Markdown content
2. Set PDF parameters (page size, orientation, margins, etc.)
3. Click "Generate PDF" to download

#### 🔄 HTML to Markdown (`/html-to-md`)

**Features:**
- Intelligent HTML to Markdown conversion
- Supports complex HTML structures
- Preserves original formatting
- Built-in sample templates

**Usage:**
1. Paste HTML code into the input box
2. Converted Markdown is shown on the right
3. Choose a built-in sample to test quickly
4. Download the result

#### 📋 Markdown Cheatsheet (`/cheatsheet`)

**Features:**
- Interactive syntax reference
- Categorized display of all syntax
- Click for detailed examples
- Search and filter supported

**Usage:**
1. Browse syntax by category
2. Click the card for detailed usage
3. Use search for quick lookup
4. Copy example code

### Technology Stack

#### Frontend Framework
- **Vue 3**: Uses Composition API and `<script setup>` syntax
- **Vue Router 4**: SPA route management

#### Styling and UI
- **UnoCSS**: Atomic CSS framework providing abundant utility classes
- **Tailwind CSS**: Supported through UnoCSS presets
- **Custom Styles**: Project-specific style customizations

#### Markdown Processing
- **Marked**: Fast Markdown parser
- **Turndown**: HTML to Markdown converter
- **Prism.js**: Code syntax highlighting (optional)

#### Tool Libraries
- **html2pdf.js**: Export HTML to PDF
- **@vueuse/core**: Vue composition utilities

#### Build Tools
- **Vite**: Fast dev server and build tool
- **ESLint**: Code quality checking

### Customization and Extension

#### Add New Tools

1. Create a new Vue component in `src/components/`
2. Add routing config to `src/router.js`
3. Update the tool list in `src/views/Home.vue`
4. Add usage instructions to `README.md`

#### Custom Styles

UnoCSS is used for style management:

```javascript
// uno.config.js
export default defineConfig({
  // Custom theme colors
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... other colors
      }
    }
  },
  // Custom shortcuts
  shortcuts: {
    'btn': 'inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md',
    'btn-primary': 'btn text-white bg-primary-600 hover:bg-primary-700'
  }
})
```

#### Integrate a New Markdown Processor

```javascript
// src/utils/markdown.js
import { marked } from 'marked'

// Custom marked config
marked.setOptions({
  breaks: true,
  gfm: true,
  // ... other config
})

// Custom parser
export function customMarkdownToHtml(markdown) {
  // Custom processing logic
  return marked.parse(markdown)
}
```

### Deployment Guide

#### Static Deployment

The built `dist/` directory can be deployed to any static file server:

```bash
npm run build
# Deploy dist/ directory to your server
```

#### Supported Deployment Platforms

- **Vercel**: Zero-config deployment
- **Netlify**: CI/CD supported
- **GitHub Pages**: Free static hosting
- **Alibaba Cloud OSS**: Object storage static hosting
- **Tencent Cloud COS**: Object storage static hosting

#### Environment Variable Configuration

Create a `.env` file to configure environment variables:

```bash
# .env
VITE_APP_TITLE="Markdown Toolset"
VITE_API_BASE_URL="https://api.example.com"
```

### FAQ

#### Q: What if the tools load slowly?

A: Check your network connection and make sure you use a modern browser. Consider using a CDN to accelerate static resources.

#### Q: PDF export fails?

A: Make sure the content is not empty and that your browser supports PDF generation. Some browsers may require popups to be allowed.

#### Q: How to customize tool styles?

A: Modify the theme config in `uno.config.js`, or add custom style classes in components.

#### Q: Which Markdown extensions are supported?

A: Supports all GitHub Flavored Markdown (GFM) syntax, including tables, task lists, strikethrough, etc.

### Changelog

#### v1.0.0 (2024-01-13)
- ✅ Initial release
- ✅ 6 core tool components
- ✅ Complete UI design and interaction
- ✅ Responsive layout support
- ✅ Chinese and English documentation

### Contribution Guide

Contributions via Issues and Pull Requests are welcome!

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

### License

This project is licensed under the MIT License.

## 📄 Open Source License

This project adopts the [MIT License](LICENSE), allowing free use, modification, and distribution.

## 🤝 Contribution

You are welcome to submit Issues or Pull Requests to help improve this project!

## 📞 Contact Us

- **Website**: [www.markdownlang.com](https://www.markdownlang.com)
- **GitHub**: [https://github.com/ayuday/markdown](https://github.com/ayuday/markdown)
