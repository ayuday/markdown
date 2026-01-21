---
title: Markdown Syntax, Markdown Syntax Overview
keywords: Markdown Syntax, Markdown Syntax Overview, Markdown Syntax Overview
description: Overview of Markdown's syntax elements, design philosophy, and best practices. Ideal for beginners to get started quickly.
---

# Markdown Syntax

Markdown is a lightweight markup language with a simple syntax that allows you to focus more on content rather than formatting. It uses a readable and writable plain text format, can be mixed with HTML, and can be exported to HTML, PDF, or its own .md file format.

## Design Philosophy

The goal of Markdown is "readability and ease of writing."

Readability is the most important thing. A file written in Markdown should be publishable as plain text and not look like it’s filled with tags or formatting instructions.

> The primary design goal of Markdown’s syntax is to make it as readable as possible. Based on this goal, Markdown documents can be published as plain text without looking like they’re filled with tags or formatting instructions.
>
> —— John Gruber

## HTML Compatibility

The goal of Markdown’s syntax is to be a writing language suitable for the web.

Markdown does not aim to replace HTML, nor even to be close to it. Its syntax is limited and only covers a small subset of HTML tags.

Tags not covered by Markdown can be written directly in the document using HTML. There’s no need to mark whether it’s HTML or Markdown; just add the tags directly.

For example, add an HTML table in a Markdown file:

```markdown
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

## Automatic Special Character Conversion

In HTML files, two characters need special handling: `<` and `&`.

- `<` is used for opening tags
- `&` is used for HTML entities

Markdown lets you write these characters naturally and handles the conversion for you. If the `&` you use is part of an HTML entity, it will be preserved; otherwise, it will be converted to `&amp;`.

## Markdown Basic Syntax Elements

Markdown’s basic syntax includes the following elements:

### Block Elements
- [Markdown Headings](/basic/headings) - Use `#` to create headings of various levels
- [Markdown Paragraphs and Line Breaks](/basic/paragraphs) - Text paragraphs and line break rules
- [Markdown Blockquotes](/basic/blockquotes) - Use `>` to create blockquotes
- [Markdown Lists](/basic/lists) - Ordered and unordered lists
- [Markdown Code Blocks](/basic/code) - Special format for displaying code
- [Horizontal Rules](/) - Create horizontal lines

### Markdown Inline Elements
- [Markdown Emphasis](/basic/emphasis) - Bold and italic text
- [Markdown Links](/basic/links) - Create hyperlinks
- [Markdown Images](/basic/images) - Insert images
- [Markdown Inline Code](/basic/code) - Inline code marks

### Others
- [Markdown Escaping](/basic/escaping) - Escape special characters
- [Autolinks](/basic/links) - Automatic link recognition

## Markdown Syntax Example

Below is an example containing various basic syntax elements:

```markdown
# My Document

This is an example of **bold text** and *italic text*.

## Markdown List Example

### Shopping List
- Apple
- Banana
- Orange

### Task List
1. Learn Markdown basics
2. Practice writing
3. Share with friends

> This is an example of a blockquote. Markdown makes writing simple and elegant.

This is an [example link to the homepage](/).

Code example:
```

You can also use inline code, such as `console.log('Hello World')`.

## Markdown Best Practices

### Markdown Headings
- Use only one level 1 heading (`#`) per document
- Keep heading levels logical; do not skip levels
- Leave blank lines before and after headings

### List Formatting
- Keep unordered list symbols consistent (use only `-`, `*`, or `+`)
- No need for blank lines between list items unless there are multiple paragraphs

### Markdown Links and Images
- Provide meaningful text descriptions for links
- Provide alt text for images

### Markdown Code Display
- Use inline code for short code
- Use code blocks for long or multi-line code
- Specify the language for code blocks to enable syntax highlighting

## Tool Support

Almost all Markdown applications support these basic syntax elements. There may be slight differences between different Markdown processors, but the basic syntax is universal.

## Next Steps

Now that you have an overview of Markdown’s basic syntax, you can:

- Dive deeper into each syntax element
- Check the [Markdown Cheat Sheet](/cheatsheet/) for quick reference
- Learn [Markdown Extended Syntax](/extended/) for more features
- Explore [Markdown Advanced Usage](/advanced/) and best practices

Start learning specific syntax elements:

1. [Markdown Heading Syntax](/basic/headings)
2. [Markdown Paragraphs and Line Breaks](/basic/paragraphs)
3. [Markdown Emphasis Syntax](/basic/emphasis)
4. [Markdown List Syntax](/basic/lists) 