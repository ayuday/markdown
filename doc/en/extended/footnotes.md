---
title: Markdown Footnote Extension
description: Introduction to Markdown footnote syntax, usage, compatibility, and best practices.
---

# Footnotes

Footnotes are an extension feature of Markdown that allows you to add reference notes or supplementary information to documents, enabling readers to view additional explanations without interrupting their reading flow.

## Basic Syntax

### Adding Footnotes

Creating footnotes in Markdown consists of two parts: the footnote marker and the footnote content.

```markdown
This is a paragraph containing a footnote[^1].

[^1]: This is the footnote content.
```

**Rendering Effect**:

This is a paragraph containing a footnote[^1].

[^1]: This is the footnote content.

### Multiple Footnotes

```markdown
Markdown is a lightweight markup language[^1] created by John Gruber[^2], now widely used in writing[^3].

[^1]: Markdown uses simple syntax to achieve text formatting.
[^2]: John Gruber created Markdown in 2004.
[^3]: Many platforms such as GitHub, Stack Overflow, and blog platforms support Markdown.
```

**Rendering Effect**:

Markdown is a lightweight markup language[^2], created by John Gruber[^3], now widely used in writing[^4].

[^2]: Markdown uses simple syntax to achieve text formatting.
[^3]: John Gruber created Markdown in 2004.
[^4]: Many platforms such as GitHub, Stack Overflow, and blog platforms support Markdown.

## Advanced Usage

### Footnote Identifiers

Footnote identifiers can be numbers or words, but cannot contain spaces or tabs.

```markdown
Here is a regular footnote[^1] and a footnote with an identifier[^note].

[^1]: This is a regular footnote.
[^note]: This is a footnote with an identifier.
```

**Rendering Effect**:

Here is a regular footnote[^5] and a footnote with an identifier[^note].

[^5]: This is a regular footnote.
[^note]: This is a footnote with an identifier.

### Multi-paragraph Footnotes

Footnote content can contain multiple paragraphs or other elements, requiring proper indentation.

```markdown
This is a footnote containing multiple paragraphs[^multipara].

[^multipara]: This is the first paragraph of the footnote.

    This is the second paragraph of the footnote. Indent at least four spaces or one tab.

    > You can also include blockquotes in footnotes.

    - You can also include lists
    - Both ordered and unordered lists are supported
```

**Rendering Effect**:

This is a footnote containing multiple paragraphs[^multipara].

[^multipara]: This is the first paragraph of the footnote.

    This is the second paragraph of the footnote. Indent at least four spaces or one tab.

    > You can also include blockquotes in footnotes.

    - You can also include lists
    - Both ordered and unordered lists are supported

### Inline Footnotes

Some Markdown implementations support inline footnote syntax, but this is not part of standard Markdown.

```markdown
This is an inline footnote^[Add footnote content directly in the text rather than at the end of the document].
```

**Rendering Effect** (on supported platforms):

This is an inline footnote^[Add footnote content directly in the text rather than at the end of the document].

## Compatibility and Implementation Differences

### Support Status Across Different Platforms

| Platform/Tool | Standard Footnotes | Inline Footnotes | Multi-paragraph Footnotes |
|---------------|-------------------|------------------|---------------------------|
| GitHub Markdown | ✅ | ❌ | ✅ |
| GitLab Markdown | ✅ | ✅ | ✅ |
| Jekyll (kramdown) | ✅ | ✅ | ✅ |
| Hugo | ✅ | ✅ | ✅ |
| CommonMark | ❌ | ❌ | ❌ |
| VitePress | ✅ | ✅ | ✅ |
| Pandoc | ✅ | ✅ | ✅ |

### HTML Output Format

Most Markdown processors convert footnotes to HTML with links and return arrows:

```html
<!-- Footnote reference -->
<p>This is a paragraph containing a footnote<sup id="fnref:1"><a href="#fn:1" class="footnote-ref">1</a></sup>.</p>

<!-- Footnote content (usually at the end of the document) -->
<div class="footnotes">
  <hr>
  <ol>
    <li id="fn:1">
      <p>This is the footnote content.<a href="#fnref:1" class="footnote-backref">↩</a></p>
    </li>
  </ol>
</div>
```

## Usage Recommendations and Best Practices

### When to Use Footnotes

Footnotes are suitable for the following situations:

1. **Citing Sources**: Citing research papers, books, or other reference materials
2. **Supplementary Explanations**: Providing additional information without interrupting the main content
3. **Further Reading**: Providing more resources for interested readers
4. **Terminology Explanations**: Explaining technical terms or abbreviations

### Footnote Typography Suggestions

```markdown
✅ Recommended Practices:

1. **Place footnote content at the end**: Put all footnote definitions at the end of the document for easier maintenance
2. **Maintain consistency**: Use consistent footnote marking methods (numbers or meaningful identifiers)
3. **Use moderately**: Too many footnotes can distract readers
4. **Provide meaningful content**: Footnotes should add actual value, not just repeat the main text

❌ Practices to Avoid:

1. Using multiple footnotes in a single sentence
2. Using footnotes to display core information
3. Placing overly long content in footnotes
4. Nesting footnotes within footnotes
```

### Footnotes in Long Documents

For very long documents, you can group footnotes by chapters:

```markdown
# Chapter 1

This is the content of Chapter 1, containing a footnote[^1-1].

[^1-1]: The first footnote of Chapter 1.

# Chapter 2

This is the content of Chapter 2, containing another footnote[^2-1].

[^2-1]: The first footnote of Chapter 2.
```

## Common Problem Solutions

### Footnotes Not Displaying

If your footnotes are not displaying correctly:

1. Ensure the footnote identifier and footnote definition match exactly (including case)
2. Verify that the footnote definition has the correct format (space required after colon)
3. Check if your Markdown processor supports footnote syntax
4. Try leaving blank lines before and after footnote definitions

### Footnote Numbering Confusion

Some processors automatically renumber footnotes even if you use custom identifiers. This is expected behavior, and the final display is usually consecutive numbers.

### Usability on Mobile Devices

On mobile devices, footnote links may be small and difficult to click. Using readers that support hover preview of footnotes can improve this issue.

## Related Syntax

- [Links](/basic/links) - Basic link syntax
- [Strikethrough](/extended/strikethrough) - Other text formatting options
- [Fenced Code Blocks](/extended/fenced-code-blocks) - Code block syntax

## Exercises and Applications

1. Create a short article containing at least three different footnotes
2. Try creating a footnote with multi-paragraph content
3. Use footnotes to cite reference materials in academic or technical articles

---

Footnotes are an important tool for enhancing the professionalism and credibility of Markdown documents. They allow you to provide additional information without interrupting the main content flow, making documents more complete and authoritative. 