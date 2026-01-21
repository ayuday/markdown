---
title: Using Frontmatter in Markdown
description: Learn how to use YAML frontmatter to add metadata and configuration to your Markdown documents.
keywords: markdown frontmatter, yaml metadata, markdown headers, document metadata
---

# Using Frontmatter in Markdown

Frontmatter is a way to add metadata to your Markdown documents using YAML, TOML, or JSON at the beginning of the file. It's widely used in static site generators and content management systems.

## What is Frontmatter?

Frontmatter is a block of metadata at the start of a Markdown file, enclosed by delimiters. It provides information about the document that isn't part of the main content.

### YAML Frontmatter

The most common format, using three dashes as delimiters:

```markdown
---
title: My Article Title
date: 2024-01-15
author: John Doe
tags: [markdown, tutorial, web]
---

# Article Content Starts Here

Your regular Markdown content follows...
```

### TOML Frontmatter

Using three plus signs:

```markdown
+++
title = "My Article Title"
date = 2024-01-15
author = "John Doe"
tags = ["markdown", "tutorial", "web"]
+++

# Article Content
```

### JSON Frontmatter

Using three semicolons or curly braces:

```markdown
;;;
{
  "title": "My Article Title",
  "date": "2024-01-15",
  "author": "John Doe",
  "tags": ["markdown", "tutorial", "web"]
}
;;;

# Article Content
```

## Common Frontmatter Fields

### Basic Metadata

```yaml
---
title: Article Title
description: Brief description of the content
author: John Doe
date: 2024-01-15
updated: 2024-01-20
---
```

### SEO and Social Media

```yaml
---
title: Complete Guide to Markdown
description: Learn everything about Markdown syntax and usage
keywords: markdown, tutorial, syntax, guide
og:image: /images/markdown-guide.jpg
og:type: article
twitter:card: summary_large_image
---
```

### Organization

```yaml
---
categories: [web-development, tutorials]
tags: [markdown, html, css]
series: markdown-mastery
part: 3
---
```

### Layout and Styling

```yaml
---
layout: post
template: article
theme: dark
sidebar: true
toc: true
---
```

## Static Site Generator Integrations

### Jekyll

```yaml
---
layout: post
title: "My Blog Post"
date: 2024-01-15 14:30:00 +0000
categories: jekyll update
permalink: /my-custom-url/
published: true
---
```

### Hugo

```yaml
---
title: "My Page Title"
date: 2024-01-15
draft: false
weight: 10
menu:
  main:
    weight: 10
---
```

### Gatsby

```yaml
---
title: My Post Title
date: "2024-01-15"
description: "Post description"
featuredImage: "./featured-image.jpg"
---
```

### Next.js (MDX)

```yaml
---
title: 'My MDX Post'
publishedAt: '2024-01-15'
summary: 'This is my post summary'
---
```

### VuePress

```yaml
---
title: Documentation Page
lang: en-US
meta:
  - name: description
    content: Page description
  - name: keywords
    content: markdown vuepress documentation
---
```

## Advanced Frontmatter Features

### Arrays and Lists

```yaml
---
tags:
  - javascript
  - react
  - tutorial

authors:
  - name: John Doe
    email: john@example.com
  - name: Jane Smith
    email: jane@example.com
---
```

### Nested Objects

```yaml
---
seo:
  title: Custom SEO Title
  description: SEO description
  keywords: [seo, markdown]
  
social:
  twitter:
    card: summary
    creator: "@username"
  facebook:
    app_id: "123456789"
---
```

### Custom Fields

```yaml
---
# Custom application-specific fields
difficulty: intermediate
reading_time: 15
code_examples: true
video_url: https://youtube.com/watch?v=example

# Feature flags
enable_comments: true
show_table_of_contents: true
show_related_posts: true
---
```

## Date Formats

```yaml
---
# ISO 8601 format (recommended)
date: 2024-01-15T14:30:00Z

# With timezone
date: 2024-01-15T14:30:00+08:00

# Date only
date: 2024-01-15

# Custom format (depends on parser)
date: January 15, 2024
---
```

## Boolean Values

```yaml
---
published: true
draft: false
featured: yes
pinned: no
comments_enabled: true
---
```

## Multiline Strings

```yaml
---
# Literal block scalar (preserves newlines)
description: |
  This is a multiline
  description that preserves
  line breaks.

# Folded block scalar (folds newlines)
summary: >
  This is a folded
  multiline string that
  becomes a single line.
---
```

## Programmatic Access

### JavaScript/Node.js

```javascript
const fs = require('fs');
const matter = require('gray-matter');

// Read and parse frontmatter
const file = fs.readFileSync('article.md', 'utf8');
const { data, content } = matter(file);

console.log(data.title);     // Access frontmatter
console.log(content);         // Access markdown content
```

### Python

```python
import frontmatter

# Load frontmatter
with open('article.md') as f:
    post = frontmatter.load(f)
    
print(post['title'])          # Access frontmatter
print(post.content)           # Access markdown content
```

### Ruby

```ruby
require 'front_matter_parser'

# Parse frontmatter
parsed = FrontMatterParser::Parser.parse_file('article.md')

puts parsed['title']          # Access frontmatter
puts parsed.content           # Access markdown content
```

## Validation and Schema

### JSON Schema Example

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["title", "date"],
  "properties": {
    "title": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "date": {
      "type": "string",
      "format": "date"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

## Best Practices

1. **Be Consistent**: Use the same frontmatter structure across documents
2. **Required Fields**: Always include essential fields like title and date
3. **Use Standards**: Follow ISO formats for dates
4. **Document Schema**: Maintain documentation of your frontmatter schema
5. **Validate**: Use schema validation to catch errors
6. **Default Values**: Provide sensible defaults when fields are optional

## Common Use Cases

### Blog Posts

```yaml
---
title: "Understanding Async/Await in JavaScript"
date: 2024-01-15
author: John Doe
categories: [javascript, tutorials]
tags: [async, promises, es6]
excerpt: Learn how to write cleaner asynchronous code
featured_image: /images/async-await.jpg
reading_time: 8
---
```

### Documentation

```yaml
---
title: API Reference
section: documentation
order: 3
toc: true
api_version: "2.0"
last_updated: 2024-01-15
contributors: [john, jane]
---
```

### E-commerce Products

```yaml
---
title: "Premium Leather Wallet"
sku: "WLT-001"
price: 79.99
currency: USD
in_stock: true
categories: [accessories, wallets]
colors: [black, brown, tan]
sizes: [standard]
---
```

## Troubleshooting

### Common Issues

**Invalid YAML Syntax**
```yaml
# WRONG: Unquoted string with special characters
title: My Article: A Guide

# RIGHT: Quote strings with special characters
title: "My Article: A Guide"
```

**Incorrect Delimiters**
```yaml
# WRONG: Missing closing delimiter
---
title: My Article

# RIGHT: Both delimiters present
---
title: My Article
---
```

**Indentation Errors**
```yaml
# WRONG: Inconsistent indentation
tags:
 - tag1
   - tag2

# RIGHT: Consistent indentation
tags:
  - tag1
  - tag2
```

## Conclusion

Frontmatter is a powerful way to add structured metadata to Markdown documents. It's essential for static sites, blogs, and documentation systems, providing flexibility and organization.

## Additional Resources

- [YAML Specification](https://yaml.org/)
- [Gray Matter (Node.js)](https://github.com/jonschlinkert/gray-matter)
- [Python Frontmatter](https://python-frontmatter.readthedocs.io/)
- [Jekyll Frontmatter](https://jekyllrb.com/docs/front-matter/)
- [Hugo Front Matter](https://gohugo.io/content-management/front-matter/)

