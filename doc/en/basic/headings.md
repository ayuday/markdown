---
title: Markdown Heading Syntax
description: A detailed introduction to ATX and Setext heading syntax in Markdown, with best practices to help you standardize document structure.
---

# Markdown Heading Syntax

Headings are the most important elements for organizing document structure. Markdown supports two heading syntaxes: ATX style and Setext style.

## ATX Style Headings

To create a heading, add a hash (`#`) before a word or phrase. The number of hashes represents the heading level.

```markdown
# Heading Level 1
## Heading Level 2  
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6
```

### Rendered Output

# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

### Optional Closing Syntax

You can optionally "close" ATX style headings, which is purely for aesthetics:

```markdown
# Heading Level 1 #
## Heading Level 2 ##
### Heading Level 3 ###
```

The number of `#` at the end does not need to match the beginning; the number at the start determines the heading level.

## Setext Style Headings

You can also add any number of `=` signs below text for a level 1 heading, or `-` signs for a level 2 heading.

```markdown
Heading Level 1
===============

Heading Level 2
---------------
```

### Rendered Output

Heading Level 1
===============

Heading Level 2
---------------

## Heading Best Practices

### Compatibility Considerations

When there is no space between the hash (`#`) and the heading text, different Markdown applications may handle it differently. For compatibility, add a space between the hash and the heading text.

| ✅ Recommended | ❌ Not Recommended |
|---------------|-------------------|
| `# This is a heading` | `#This is a heading` |

### Use of Blank Lines

For compatibility, add blank lines before and after headings.

```markdown
This is a paragraph.

# This is a heading

This is another paragraph.
```

### Heading Levels

- Each document should use only one level 1 heading
- Keep heading levels logical; do not skip levels
- Headings should reflect the document's structural hierarchy

### Heading Text Guidelines

- Heading text should be concise and clear
- Avoid punctuation (especially periods)
- Use gerunds or noun phrases
- Keep formatting consistent for headings of the same level

## HTML Output

Markdown headings are converted to the corresponding HTML heading tags:

```markdown
# Heading       →  <h1>Heading</h1>
## Heading      →  <h2>Heading</h2>
### Heading     →  <h3>Heading</h3>
#### Heading    →  <h4>Heading</h4>
##### Heading   →  <h5>Heading</h5>
###### Heading  →  <h6>Heading</h6>
```

## Heading IDs (Extended Feature)

Many Markdown processors automatically generate IDs for headings, which can be used to create anchor links:

```html
<h1 id="markdown-heading-syntax">Markdown Heading Syntax</h1>
```

This allows you to link to a specific heading:

```markdown
[Link to heading](#markdown-heading-syntax)
```

## Practical Example

Below is an example of a document with a well-structured heading hierarchy:

```markdown
# User Manual

## Quick Start

### Installation Steps

#### System Requirements

#### Download and Install

### Basic Configuration

## Advanced Features

### Custom Settings

### Plugin Management

## Troubleshooting

### FAQ

### Contact Support
```

Such a clear heading structure makes the document easy to read and navigate.

## Related Syntax

- [Paragraphs and Line Breaks](/basic/paragraphs)
- [Lists](/basic/lists)
- [Links](/basic/links) 