---
title: Markdown Cheat Sheet, Markdown Cheat Sheet Syntax
keywords: Markdown Cheat Sheet, Markdown Cheat Sheet Syntax, Markdown Cheat Sheet Syntax
description: An overview of common Markdown Cheat sheet syntax, including headings, lists, links, images, blockquotes, code, and more.
---

# Markdown Cheatsheet

This is a quick reference sheet for Markdown Cheat sheet syntax, including headings, lists, link, image, table, blockquotes, code, math formulas and more. It covers the most commonly used elements.

## Markdown Heading Syntax

### Markdown ATX Style Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### Setext Style Headings

```markdown
Heading 1
=========

Heading 2
---------
```

## Markdown Text Formatting

```markdown
**Bold text**
__Bold text__

*Italic text*
_Italic text_

***Bold italic text***
___Bold italic text___

~~Strikethrough text~~

`Inline code`
```

## Paragraphs and Line Breaks

```markdown
This is the first paragraph.

This is the second paragraph.

This is a line of text.  
This is a new line (two spaces at end of line).
```

## Markdown Lists

### Markdown Unordered List

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

* Using asterisk
+ Using plus
```

### Markdown Ordered List

```markdown
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item
```

### Task List

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

## Markdown Links

```markdown
[Link text](https://www.markdownlang.com)
[Link with title](https://www.markdownlang.com "Link title")

[Reference link][1]
[1]: https://www.markdownlang.com "Link title"

<https://www.markdownlang.com>
<email@example.com>
```

## Markdown Images

```markdown
![Alt text](image.jpg)
![Image with title](image.jpg "Image title")

[![Image link](image.jpg)](https://www.markdownlang.com)
```

## Markdown Blockquotes

```markdown
> This is a blockquote
> 
> Second paragraph in blockquote

> Level 1 quote
> > Level 2 quote
> > > Level 3 quote
```

## Code

### Inline Code

```markdown
Use `code` to mark inline code
```

### Code Block

````markdown
```
Regular code block
```

```javascript
// Code block with syntax highlighting
function hello() {
    console.log("Hello, World!");
}
```
````

### Indented Code Block

```markdown
    This is an indented code block
    Use 4 spaces or 1 tab
```

## Markdown Tables

```markdown
| Left Align | Center Align | Right Align |
|-----------|:------------:|------------:|
| Content1   |   Content2   |    Content3 |
| Content4   |   Content5   |    Content6 |
```

## Horizontal Rules

```markdown
---

***

___

- - -
```

## Markdown Line Breaks

```markdown
Method 1: Add two spaces at end of line  
Then break line

Method 2: Use HTML tag<br>
Break line

Method 3: Separate by blank line

New paragraph
```

## Escaping Characters

```markdown
\*not italic\*
\#not heading
\[not link\]
```

Escapable characters:

```
\   Backslash
`   Backtick
*   Asterisk
_   Underscore
{}  Curly braces
[]  Square brackets
()  Parentheses
#   Hash
+   Plus
-   Minus
.   Period
!   Exclamation mark
```

## Markdown Footnotes

```markdown
Here is a footnote reference[^1].

[^1]: This is the content of the footnote.
```

## Markdown HTML Tags

```markdown
Markdown supports inline HTML:

<strong>Bold</strong>
<em>Italic</em>
<mark>Highlight</mark>
<del>Delete</del>
<ins>Insert</ins>
```

## Markdown Math Formulas (Extended Syntax)

```markdown
Inline formula: $E = mc^2$

Block formula:
$$
\sum_{i=1}^n a_i = 0
$$
```

## Markdown Quick Tips

### Markdown Most Common Syntax
1. `#` - Heading
2. `**text**` - Bold
3. `*text*` - Italic
4. `[text](url)` - Link
5. `![alt](url)` - Image
6. `- item` - List
7. `> quote` - Blockquote
8. `` `code` `` - Code

### Memory Tricks
- `#` Hash looks like stairs, indicates heading level
- `*` Asterisk means emphasis, one for italic, two for bold
- `[]()` Square brackets for text, parentheses for link
- `![]()` Exclamation mark for image
- `>` Greater-than looks like an arrow, points to quote

## Markdown Online Converters

- [Markdown Online Editor](https://markdown.com.cn/editor/)
- [Markdown to HTML](https://markdown.com.cn/markdown-to-html/)
- [HTML to Markdown](https://markdown.com.cn/html-to-markdown/)
- [Markdown to PDF](https://markdown.com.cn/markdown-to-pdf/)
- [URL to Markdown](https://markdown.com.cn/url-to-markdown/)

## Further Learning

- [Basic Syntax Explained](/basic/overview)
- [Extended Syntax](/extended/)
- [Advanced Usage](/advanced/) 