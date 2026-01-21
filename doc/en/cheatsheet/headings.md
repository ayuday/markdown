---
title: Markdown Headings Cheatsheet
description: Quick reference for Markdown headings (ATX, Setext) syntax, ID extensions, and best practices.
---

# Headings Syntax Cheatsheet

## ATX Style Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Setext Style Headings

```markdown
Heading 1
=========

Heading 2
---------
```

## Heading IDs (Extended Syntax)

```markdown
### Heading {#custom-id}
### Heading {.class-name}
```

## Heading Links

```markdown
Jump to [Heading](#heading)
```

## Best Practices

- ✅ Heading levels should be logical
- ✅ Avoid skipping levels (e.g. # directly to ###)
- ✅ Only one H1 per document
- ❌ Do not use links inside headings
- ❌ Avoid overly long headings

## HTML Output

| Markdown      | HTML             |
|--------------|------------------|
| `# Heading`  | `<h1>Heading</h1>` |
| `## Heading` | `<h2>Heading</h2>` |
| `### Heading`| `<h3>Heading</h3>` | 