---
title: Markdown Blockquote Syntax
description: Detailed introduction to the use of blockquotes in Markdown, including nesting, formatting, and common scenarios.
---

# Blockquote Syntax

Blockquotes are used to highlight quoted text or emphasize important information. In Markdown, use the `>` symbol to create blockquote blocks.

## Basic Blockquote Syntax

### Single-line Blockquote

Use the `>` symbol at the beginning of a line to create a blockquote:

```markdown
> This is a blockquote.
```

**Rendered Output:**

> This is a blockquote.

### Multi-line Blockquote

```markdown
> This is the first line of the quote.
> This is the second line of the quote.
> This is the third line of the quote.
```

**Rendered Output:**

> This is the first line of the quote.
> This is the second line of the quote.
> This is the third line of the quote.

### Paragraphs in Blockquotes

Include multiple paragraphs in a blockquote:

```markdown
> This is the first paragraph of the quote.
>
> This is the second paragraph of the quote.
```

**Rendered Output:**

> This is the first paragraph of the quote.
>
> This is the second paragraph of the quote.

## Nested Blockquotes

### Basic Nesting

Use `>>` to create nested blockquotes:

```markdown
> This is the first level quote.
>
> > This is the second level quote.
>
> Back to the first level quote.
```

**Rendered Output:**

> This is the first level quote.
>
> > This is the second level quote.
>
> Back to the first level quote.

### Multi-level Nesting

```markdown
> Level 1 quote
> > Level 2 quote
> > > Level 3 quote
> > > > Level 4 quote
> >
> > Back to level 2
>
> Back to level 1
```

**Rendered Output:**

> Level 1 quote
> > Level 2 quote
> > > Level 3 quote
> > > > Level 4 quote
> >
> > Back to level 2
>
> Back to level 1

## Other Elements in Blockquotes

### Formatting in Blockquotes

```markdown
> **Bold text** and *italic text* work normally in blockquotes.
> 
> You can use `inline code` and other formatting.
```

**Rendered Output:**

> **Bold text** and *italic text* work normally in blockquotes.
> 
> You can use `inline code` and other formatting.

### Headings in Blockquotes

```markdown
> ## Heading in Blockquote
> 
> This is the main content in the blockquote.
> 
> ### Subheading
> 
> More quoted content.
```

**Rendered Output:**

> ## Heading in Blockquote
> 
> This is the main content in the blockquote.
> 
> ### Subheading
> 
> More quoted content.

### Lists in Blockquotes

```markdown
> List in blockquote:
> 
> 1. First item
> 2. Second item
> 3. Third item
> 
> Or unordered list:
> 
> - Item A
> - Item B
> - Item C
```

**Rendered Output:**

> List in blockquote:
> 
> 1. First item
> 2. Second item
> 3. Third item
> 
> Or unordered list:
> 
> - Item A
> - Item B
> - Item C

### Code Blocks in Blockquotes

```markdown
> Here is a code example:
> 
> ```javascript
> function hello() {
>   console.log("Hello, World!");
> }
> ```
> 
> Code blocks also display correctly in blockquotes.
```

**Rendered Output:**

> Here is a code example:
> 
> ```javascript
> function hello() {
>   console.log("Hello, World!");
> }
> ```
> 
> Code blocks also display correctly in blockquotes.

### Links in Blockquotes

```markdown
> See [official documentation](https://www.markdownlang.com) for more information.
> 
> You can also visit <https://www.markdownlang.com> for a direct link.
```

**Rendered Output:**

> See [official documentation](https://www.markdownlang.com) for more information.
> 
> You can also visit <https://www.markdownlang.com> for a direct link.

## Common Usage Scenarios

### 1. Literature Citation

```markdown
> "Markdown is a lightweight markup language that allows people to write documents in an easy-to-read and easy-to-write plain text format."
> 
> —— John Gruber, creator of Markdown
```

**Rendered Output:**

> "Markdown is a lightweight markup language that allows people to write documents in an easy-to-read and easy-to-write plain text format."
> 
> —— John Gruber, creator of Markdown

### 2. Warning Message

```markdown
> ⚠️ **Warning**
> 
> Performing this action will delete all data. Please make sure to back up important files.
```

**Rendered Output:**

> ⚠️ **Warning**
> 
> Performing this action will delete all data. Please make sure to back up important files.

### 3. Tip Message

```markdown
> 💡 **Tip**
> 
> Use the shortcut `Ctrl+S` to quickly save the document.
```

**Rendered Output:**

> 💡 **Tip**
> 
> Use the shortcut `Ctrl+S` to quickly save the document.

### 4. Important Note

```markdown
> 📌 **Important Note**
> 
> Before you start, make sure you have installed the following dependencies:
> 
> - Node.js (>= 14.0)
> - npm (>= 6.0)
> - Git
```

**Rendered Output:**

> 📌 **Important Note**
> 
> Before you start, make sure you have installed the following dependencies:
> 
> - Node.js (>= 14.0)
> - npm (>= 6.0)
> - Git

## Common Errors and Solutions

### 1. Missing > Symbol

```markdown
❌ Incorrect:
> First line of quote
Second line missing > symbol  ← This line will not be included in the quote

✅ Correct:
> First line of quote
> Second line correctly quoted
```

### 2. Nesting Level Error

```markdown
❌ Incorrect:
> Level 1
> > > Jumped directly to level 3  ← Skipped level 2

✅ Correct:
> Level 1
> > Level 2
> > > Level 3
```

### 3. Blank Line Handling

```markdown
❌ Potential issue:
> First paragraph

> Second paragraph  ← This creates two separate blockquotes

✅ Correct multi-paragraph quote:
> First paragraph
>
> Second paragraph
```

## Best Practices

### 1. Keep Style Consistent

```markdown
✅ Recommended: Unified blockquote style
> All important information uses blockquotes
> Keep formatting consistent

❌ Not recommended: Mixed usage
> Sometimes use blockquote
**Sometimes use bold instead**
```

### 2. Use Nesting Appropriately

```markdown
✅ Recommended: Simple and clear nesting
> Main point
> > Supporting argument
> 
> Continue main point

❌ Not recommended: Too deep nesting
> > > > > Too deep, hard to read
```

### 3. Use Semantically

```markdown
✅ Recommended: Meaningful blockquotes
> This is important information from an authoritative document

❌ Not recommended: Decorative blockquotes
> This is just normal text, no need for blockquote formatting
```

## HTML Output

Markdown blockquotes are converted to HTML:

```markdown
> This is quoted text
```

Becomes:

```html
<blockquote>
  <p>This is quoted text</p>
</blockquote>
```

Nested blockquotes:

```markdown
> Level 1
> > Level 2
```

Becomes:

```html
<blockquote>
  <p>Level 1</p>
  <blockquote>
    <p>Level 2</p>
  </blockquote>
</blockquote>
```

## Custom Styles

Some Markdown processors support custom blockquote styles:

### GitHub-style Admonitions

```markdown
> [!NOTE]
> This is an info note

> [!WARNING]
> This is a warning note

> [!IMPORTANT]
> This is an important note
```

### Using HTML and CSS

```markdown
<blockquote style="border-left: 4px solid #3498db; padding-left: 1em; color: #7f8c8d;">
This is a custom styled blockquote
</blockquote>
```

## Practical Examples

### Example in API Documentation

```markdown
## User Authentication

User authentication is a necessary step to access the API.

> **Authentication Method**
> 
> Our API uses Bearer Token for authentication:
> 
> ```bash
> curl -H "Authorization: Bearer YOUR_TOKEN" \
>      https://api.example.com/users
> ```

### Request Example

Send a POST request to create a user:

> ```json
> {
>   "name": "John Doe",
>   "email": "john@example.com",
>   "role": "user"
> }
> ```
```

### Notes in Tutorials

```markdown
## Installation Steps

1. Download the installer
2. Run the installer

> ⚠️ **Note**
> 
> Before installation, make sure:
> - Antivirus is turned off
> - Run as administrator
> - System disk has at least 2GB free space

3. Complete the installation wizard
```

## Related Syntax

- [Emphasis Syntax](/basic/emphasis) - Text formatting
- [List Syntax](/basic/lists) - Item lists
- [Code Syntax](/basic/code) - Code formatting
- [Link Syntax](/basic/links) - Creating links

## Practice

Try to create the following:

1. A blockquote with multiple paragraphs
2. A three-level nested blockquote structure
3. A technical blockquote with a code example
4. A nested blockquote simulating a conversation 