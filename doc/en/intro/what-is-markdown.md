---
title: What is Markdown
description: Introduction to the origin, core features, relationship with HTML, and basic usage of Markdown.
---

# What is Markdown?

Markdown is a lightweight markup language created by John Gruber. It allows people to "write documents in an easy-to-read and easy-to-write plain text format, then convert them into valid HTML documents."

## The History of Markdown

Markdown was born in 2004. In its early days, it was designed to simplify HTML syntax, mainly for writing README-type documents that are frequently read and updated, but whose content format is relatively stable.

Markdown's real popularity began after GitHub appeared in 2008. GitHub adopted Markdown as the default Readme file format and provided a rendering specification. As GitHub became popular, more and more developers started using Markdown as their preferred tool for writing.

## Core Features of Markdown

### Simplicity
Use intuitive symbols to represent formatting, such as `#` for headings and `*` for list items. These symbols visually convey their meaning, making Markdown documents readable even without rendering.

### Readability
Even in plain text form, Markdown documents clearly show the structure and hierarchy of the content. Readers can understand the organization without special software.

### Portability
Markdown files are plain text, so they can be opened and edited in any text editor, without relying on specific software or operating systems.

### Convertibility
Markdown can be easily converted to HTML, PDF, Word documents, and more, meeting various publishing needs.

## The Relationship Between Markdown and HTML

Markdown is not a replacement for HTML, but rather a simplified version of it. In fact, the ultimate goal of Markdown is to be converted to HTML. Their relationship can be understood as follows:

```
Markdown source → Parser → HTML output → Browser rendering
```

For example, when you write:

```markdown
# This is a heading
```

It will be converted to:

```html
<h1>This is a heading</h1>
```

Importantly, you can use HTML tags directly in Markdown, which provides flexibility for complex formatting.

## A Simple Example

Let's look at a simple Markdown example:

```markdown
# My First Markdown Document

This is a **bold text** and an *italic text*.

## Shopping List

- Apple
- Banana
- Orange

This is an example of a [link](https://www.markdownlang.com).
```

This simple example demonstrates several basic Markdown syntaxes: headings, emphasis, lists, and links.

## Next Steps

Now that you understand the basic concepts of Markdown, you can:

- [Learn why to use Markdown](/intro/why-use-markdown)
- [Learn how Markdown works](/intro/how-it-works)
- [View the syntax cheatsheet](/cheatsheet/) 