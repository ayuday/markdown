---
title: Markdown Highlight Extension
description: Detailed explanation of Markdown highlight syntax, block-level highlighting, and compatibility.
---

# Highlight

Highlight is an extension syntax in Markdown used to emphasize important text in documents. It helps readers quickly identify key information, making documents more vivid and effective.

## Basic Syntax

### Marking Highlights

In most Markdown extensions that support highlighting, highlighted text is surrounded by two equals signs (`==`) around the content to be highlighted:

```markdown
This is an example paragraph containing ==highlighted text==.
```

**Rendering Effect**:

This is an example paragraph containing ==highlighted text==.

### Word and Phrase Highlighting

Highlighting can be applied to individual words or phrases:

```markdown
In programming, ==variables== are named spaces for storing data.

Please make sure to read the ==important notes and warnings== in the documentation.
```

**Rendering Effect**:

In programming, ==variables== are named spaces for storing data.

Please make sure to read the ==important notes and warnings== in the documentation.

## Advanced Usage

### Combining with Other Formats

Highlighting can be combined with other Markdown formats:

```markdown
==**Bold Highlight**==

==*Italic Highlight*==

==***Bold Italic Highlight***==

==`Code Highlight`==

==[Link Highlight](https://www.markdownlang.com)==
```

**Rendering Effect**:

==**Bold Highlight**==

==*Italic Highlight*==

==***Bold Italic Highlight***==

==`Code Highlight`==

==[Link Highlight](https://www.markdownlang.com)==

### Block-level Highlighting

Some Markdown implementations allow applying highlighting to entire block-level content, usually using custom container syntax:

```
::: highlight
This is a highlighted paragraph block.

It can contain multiple lines of content, and can even include lists:
- Item 1
- Item 2
- Item 3
:::
```

**Note**: Block-level highlighting support varies by Markdown processor. The above example is available on platforms like VitePress that support custom containers.

## Compatibility and Implementation Differences

### Support Status Across Different Platforms

| Platform/Tool | Highlight Support | Syntax |
|---------------|------------------|--------|
| GitHub Markdown | ❌ | Not supported |
| GitLab Markdown | ✅ | `==highlight==` |
| Hugo | ✅ | Uses mark tag or `==highlight==` |
| VitePress | ✅ | `==highlight==` |
| Pandoc | ✅ | `==highlight==` or `[highlight]{.mark}` |
| Jekyll | ✅ | Depends on theme and plugins used |
| CommonMark | ❌ | Not supported |

### HTML Output Format

Most Markdown processors that support highlighting convert highlighted text to HTML with `<mark>` tags or specific CSS classes:

```html
<!-- Using mark tag -->
<p>This is an example paragraph containing <mark>highlighted text</mark>.</p>

<!-- Using custom class -->
<p>This is an example paragraph containing <span class="highlighted">highlighted text</span>.</p>
```

### Alternative Syntax

On platforms that don't support highlight syntax, you can use HTML tags as alternatives:

```markdown
This is an example paragraph containing <mark>highlighted text</mark>.

<!-- Or using custom styles -->
This is an example paragraph containing <span style="background-color: yellow;">highlighted text</span>.
```

## Usage Scenarios

### Document Emphasis

Highlighting is suitable for emphasizing important content in documents:

```markdown
# Installation Guide

Please ==completely backup your data== before installation. The system installation process will format the target partition.

Installation steps:
1. Download the installer
2. Run the installation wizard
3. ==Select "Custom Installation" option==
4. Follow the on-screen prompts to complete installation
```

**Rendering Effect**:

# Installation Guide

Please ==completely backup your data== before installation. The system installation process will format the target partition.

Installation steps:
1. Download the installer
2. Run the installation wizard
3. ==Select "Custom Installation" option==
4. Follow the on-screen prompts to complete installation

### Educational Materials

Highlighting is particularly useful in teaching and training materials:

```markdown
## Python Variables

In Python, variable assignment uses the `=` symbol:

```python
x = 10  # Assign value 10 to variable x
```

==Python is a dynamically typed language, where variable types are automatically determined during assignment.==

Common variable types include:
- Integer (int)
- Float (float)
- String (str)
- Boolean (bool)
```

### Text Comparison and Revision

Highlighting can be used to emphasize changes or differences in documents:

```markdown
## Document Version Comparison

### Original Version
The server will undergo maintenance every Sunday at 2:00 AM.

### Updated Version
The server will undergo maintenance every Sunday at 2:00 AM. ==Maintenance is expected to last 2 hours.==
```

**Rendering Effect**:

## Document Version Comparison

### Original Version
The server will undergo maintenance every Sunday at 2:00 AM.

### Updated Version
The server will undergo maintenance every Sunday at 2:00 AM. ==Maintenance is expected to last 2 hours.==

### Quotes and Annotations

Highlighting can be used to mark key points in quoted text:

```markdown
> "This is a quoted text, ==where this part is particularly important==, requiring special attention from readers."
> 
> — Some Famous Author
```

**Rendering Effect**:

> "This is a quoted text, ==where this part is particularly important==, requiring special attention from readers."
> 
> — Some Famous Author

## Style Customization

In environments that support CSS customization, you can modify the style of highlighted text:

```css
/* Custom highlight styles */
mark, .highlighted {
  background-color: #ffeb3b;  /* Yellow background */
  color: #000;                /* Black text */
  padding: 0 3px;            /* Padding */
  border-radius: 3px;        /* Rounded corners */
}

/* Different types of highlighting */
.highlight-warning {
  background-color: #ffcdd2;  /* Red warning highlight */
}

.highlight-success {
  background-color: #c8e6c9;  /* Green success highlight */
}
```

Using custom styles:

```markdown
This is <mark class="highlight-warning">warning information</mark>, this is <mark class="highlight-success">success information</mark>.
```

## Best Practices

### Usage Recommendations

```markdown
✅ Recommended Practices:

1. **Use highlighting moderately**:
   - Only highlight truly important content
   - Too much highlighting weakens the emphasis effect
   
2. **Maintain consistency**:
   - Use consistent highlighting style throughout the document
   - Use different highlighting styles for different types of important content
   
3. **Combine with context**:
   - Ensure highlighted content has logical connection with surrounding text
   - You can add brief explanations for why certain content is highlighted

❌ Practices to Avoid:

1. Highlighting overly long paragraphs or entire chapters
2. Overusing highlighting on a single page
3. Adding highlighting to unimportant content
4. Using too many different colors or styles of highlighting
```

### Accessibility Considerations

Highlighting may cause reading difficulties for some users. Consider the following points:

1. Ensure sufficient contrast between highlight colors and background
2. Don't rely solely on color to convey information
3. Consider adding additional markers (such as icons or titles) for highlighted content
4. Test document readability in different reading modes (such as dark mode)

## Common Problem Solutions

### Highlighting Not Displaying

If your highlighting is not displaying correctly:

1. Check if the platform supports `==` syntax highlighting
2. Try using HTML `<mark>` tags as an alternative
3. Ensure there are no spaces between `==` and the highlighted text
4. Check if the document references the correct CSS styles

### Conflicts with Other Formats

Highlighting sometimes conflicts with other formats:

```markdown
<!-- Potentially problematic writing -->
==**Complex [format](https://www.markdownlang.com) content**==

<!-- Safer writing -->
<mark>**Complex [format](https://www.markdownlang.com) content**</mark>
```

### Block-level Highlighting Issues

For cases requiring highlighting of entire blocks, it's recommended to use HTML or custom containers:

```markdown
<!-- Using HTML -->
<div class="highlighted-block">

# Important Chapter

This is a content block that needs overall highlighting.

</div>

<!-- Or using custom containers (on supported platforms) -->
::: highlight
# Important Chapter

This is a content block that needs overall highlighting.
:::
```

## Related Syntax

- [Emphasis](/basic/emphasis) - Text emphasis syntax (bold, italic)
- [Blockquotes](/basic/blockquotes) - Block quote syntax
- [HTML](/advanced/html) - Using HTML in Markdown

## Tools and Plugins

- **markdown-it-mark**: Adds highlight support for markdown-it
- **remark-highlight.js**: Adds syntax highlighting for code
- **gatsby-remark-highlight-code**: Code highlighting plugin in Gatsby

## Summary

Highlighting is an effective extension syntax that can enhance document readability and visibility of key information. Although not all Markdown processors natively support highlight syntax, through HTML tags and custom CSS, we can achieve similar effects in almost any environment. Reasonable use of highlighting can help readers quickly locate important content in documents, improving the overall reading experience. 