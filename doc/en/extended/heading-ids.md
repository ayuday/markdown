---
title: Markdown Heading ID Extension
description: Introduction to Markdown heading custom ID syntax, application scenarios, and compatibility.
---

# Heading IDs

Heading IDs are an extension feature of Markdown that allows adding custom identifiers to headings, facilitating the creation of precise links and control over document structure.

## Basic Syntax

### Adding Heading IDs

Heading IDs use brace syntax, placed after the heading text:

```markdown
## My Heading {#custom-id}
```

**Rendering Effect**:

The HTML output will add this custom ID to the heading element:

```html
<h2 id="custom-id">My Heading</h2>
```

### Multi-level Heading IDs

All levels of headings can have custom IDs added:

```markdown
# First Level Heading {#first-level}

## Second Level Heading {#second-level}

### Third Level Heading {#third-level}

#### Fourth Level Heading {#fourth-level}
```

## Application Scenarios

### Creating Anchor Links

With custom IDs, you can create links pointing to specific parts within a document:

```markdown
[Click to jump to my heading](#custom-id)

...other content...

## My Heading {#custom-id}
```

**Rendering Effect**:

Clicking the link will directly jump to the heading with `custom-id`.

### External Links to Document Specific Sections

Custom IDs also facilitate linking from external documents to specific content:

```markdown
[Link to specific section of other document](other-doc.html#specific-section)
```

### Sharing Specific Sections via URL

Headings with IDs can be shared via URL to others, pointing to specific sections of the document:

```
https://www.markdownlang.com/documentation.html#installation-guide
```

## Advanced Usage

### Multi-word Heading IDs

When headings contain multiple words, heading IDs typically use hyphens to connect them:

```markdown
## Installation and Configuration Guide {#installation-and-configuration}
```

### Table of Contents Generation and Heading IDs

Many Markdown processors automatically generate IDs based on heading content. Through custom IDs, you can ensure that table of contents links are not affected by changes in heading content:

```markdown
## Getting Started Guide {#getting-started}
```

Even if you later change the heading to "Getting Started", the link remains valid because the ID stays the same.

### Internationalization and Non-English Characters

For non-English headings, custom IDs are particularly useful as they provide stable English identifiers:

```markdown
## Installation Instructions {#installation}

## Usage Guide {#usage}

## Frequently Asked Questions {#faq}
```

## Compatibility and Implementation Differences

### Support Status Across Different Platforms

| Platform/Tool | Heading ID Support | Syntax |
|---------------|-------------------|--------|
| GitHub Markdown | ✅ | `{#id}` |
| GitLab Markdown | ✅ | `{#id}` |
| Jekyll (kramdown) | ✅ | `{:#id}` or `{#id}` |
| Hugo | ✅ | `{#id}` |
| CommonMark | ❌ | Not supported |
| VitePress | ✅ | `{#id}` |
| Pandoc | ✅ | `{#id}` |

### Automatic ID Generation Rules

When no custom ID is provided, most Markdown processors automatically generate IDs from heading text:

1. Convert to lowercase letters
2. Remove or replace special characters
3. Replace spaces with hyphens
4. Remove duplicate hyphens
5. Ensure ID uniqueness (usually by adding numeric suffixes)

For example:

| Heading | Auto-generated ID |
|---------|------------------|
| `## Getting Started` | `#getting-started` |
| `## FAQ & Help` | `#faq-help` |
| `## Quick Start` | `#quick-start` or `#section-1` (varies by platform) |

## Best Practices

### Heading ID Naming Conventions

```markdown
✅ Recommended Practices:

1. **Use concise descriptive IDs**:
   - `{#installation}`
   - `{#api-reference}`
   - `{#troubleshooting}`

2. **Maintain consistent naming style**:
   - All lowercase
   - Use hyphens to separate words
   - Avoid underscores or camelCase

3. **Maintain ID stability**:
   - Avoid frequent ID changes
   - Preserve original IDs when modifying heading text

❌ Practices to Avoid:

1. Using special characters (such as `!@#$%^&*()`)
2. Using non-descriptive IDs (such as `{#section1}`)
3. Creating overly long IDs
4. Using spaces or punctuation marks
```

### Document Structure and Heading IDs

For large documents, it's recommended to use standardized IDs for main chapters to facilitate navigation:

```markdown
# Product Documentation {#product-docs}

## Introduction {#introduction}

## Installation {#installation}

### Windows Installation {#installation-windows}

### macOS Installation {#installation-macos}

### Linux Installation {#installation-linux}

## Configuration {#configuration}

## API Reference {#api-reference}

## FAQ {#faq}
```

## Practical Application Examples

### Heading IDs in Technical Documentation

Heading IDs in technical documentation can help users directly link to specific sections:

```markdown
# API Documentation {#api-documentation}

## Authentication {#authentication}

### Getting API Keys {#get-api-key}

### OAuth Authentication {#oauth}

## Endpoints {#endpoints}

### User Endpoints {#endpoints-users}

### Product Endpoints {#endpoints-products}
```

### Heading IDs in Academic Papers

Academic papers can use heading IDs to create citations and cross-references:

```markdown
# Research Methodology {#methodology}

As shown in the [Research Results](#results), our method performs well in multiple test cases.

...

# Research Results {#results}

This section presents the experimental results described in our [Research Methodology](#methodology).
```

## Common Problem Solutions

### Heading IDs Not Working

If your heading IDs are not working:

1. Check if the platform supports custom heading IDs
2. Confirm the syntax is correct (usually `{#id}`)
3. Verify that the ID doesn't contain invalid characters
4. Try using a different Markdown processor

### ID Conflicts

If there are multiple identical IDs in the same document, it may cause unpredictable linking behavior:

```markdown
## Issue {#issue} <!-- First ID -->

...

## Common Issues {#issue} <!-- Duplicate ID, may cause problems -->
```

Solution to avoid ID conflicts:

```markdown
## Issue {#issue-description}

...

## Common Issues {#common-issues}
```

### Spaces and Special Characters

Some Markdown processors handle spaces and special characters in IDs inconsistently:

```markdown
<!-- May have issues on some platforms -->
## Advanced Settings {#advanced settings}

<!-- Safer approach -->
## Advanced Settings {#advanced-settings}
```

## Related Syntax

- [Links](/basic/links) - Basic link syntax
- [Table of Contents](/) - Auto-generated table of contents
- [Footnotes](/extended/footnotes) - Adding references and explanations

## Tools and Plugins

### Auto-generated Table of Contents

Many tools can automatically generate table of contents based on headings and heading IDs:

```markdown
[[toc]]

# Chapter 1 {#chapter-1}

## Section 1.1 {#section-1-1}

# Chapter 2 {#chapter-2}
```

### Heading ID Checking Tools

- **markdownlint**: Can be configured to check heading ID consistency
- **remark-lint**: Provides heading ID checking and auto-fixing
- **markdown-toc**: Automatically generates table of contents with links

---

Heading IDs are an important tool for improving the usability and accessibility of Markdown documents. By using standardized heading IDs, you can create stable link structures that facilitate navigation and referencing, making your documents more professional and user-friendly. 