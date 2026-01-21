---
title: Markdown Strikethrough Extension
description: Introduction to Markdown Strikethrough syntax, compatibility, and common usage.
---

# Strikethrough

Strikethrough is an extension syntax in Markdown used to indicate text that has been deleted or is no longer valid. It's very useful in document revisions, task lists, price changes, and other scenarios.

## Basic Syntax

### Standard Syntax

In Markdown, strikethrough typically uses two tildes (`~~`) to surround the text that should have strikethrough applied:

```markdown
This is an example containing ~~strikethrough text~~.
```

**Rendering Effect**:

This is an example containing ~~strikethrough text~~.

### Words and Sentences

Strikethrough can be applied to individual words or entire sentences:

```markdown
~~This entire sentence has strikethrough applied.~~

We will have a meeting next week on ~~Monday~~ Tuesday.
```

**Rendering Effect**:

~~This entire sentence has strikethrough applied.~~

We will have a meeting next week on ~~Monday~~ Tuesday.

## Advanced Usage

### Combining with Other Formatting

Strikethrough can be combined with other Markdown formats:

```markdown
~~**Bold strikethrough**~~

~~*Italic strikethrough*~~

~~***Bold italic strikethrough***~~

~~`Code strikethrough`~~

~~[Link strikethrough](https://www.markdownlang.com)~~
```

**Rendering Effect**:

~~**Bold strikethrough**~~

~~*Italic strikethrough*~~

~~***Bold italic strikethrough***~~

~~`Code strikethrough`~~

~~[Link strikethrough](https://www.markdownlang.com)~~

### Paragraphs and Block Elements

In some Markdown implementations, strikethrough can be applied to entire paragraphs or block elements:

```markdown
~~
This is a complete deleted paragraph.
It can contain multiple lines of content.
~~
```

**Note**: Not all Markdown processors support strikethrough syntax across multiple lines. For multi-line content, the safest approach is to apply strikethrough syntax to each line individually.

## Compatibility and Implementation Differences

### Support Status Across Different Platforms

| Platform/Tool | Strikethrough Support | Syntax |
|---------------|----------------------|--------|
| GitHub Markdown | ✅ | `~~strikethrough~~` |
| GitLab Markdown | ✅ | `~~strikethrough~~` |
| Stack Overflow | ✅ | `~~strikethrough~~` |
| Discord | ✅ | `~~strikethrough~~` |
| Reddit | ✅ | `~~strikethrough~~` |
| CommonMark | ✅ | `~~strikethrough~~` |
| VitePress | ✅ | `~~strikethrough~~` |
| Pandoc | ✅ | `~~strikethrough~~` |

### HTML Output Format

Most Markdown processors convert strikethrough to HTML `<del>` or `<s>` tags:

```html
<!-- Using <del> tag -->
<p>This is an example containing <del>strikethrough text</del>.</p>

<!-- Or using <s> tag -->
<p>This is an example containing <s>strikethrough text</s>.</p>
```

### Alternative Syntax

Some platforms or older Markdown versions may support different strikethrough syntax:

```markdown
<!-- Single tilde (some platforms) -->
~strikethrough text~

<!-- HTML tags (all compliant Markdown processors) -->
<del>strikethrough text</del>
<s>strikethrough text</s>
```

## Use Cases

### Document Revisions

Strikethrough is commonly used to show document revisions and changes:

```markdown
# Project Plan v2.0

## Timeline

- Requirements Analysis: ~~March 1-15~~ March 1-20 (delayed)
- Design Phase: ~~March 16-April 5~~ March 21-April 10
- Development Phase: April 11-May 15
- Testing Phase: May 16-May 30
- Release Date: ~~June 1~~ June 15
```

**Rendering Effect**:

# Project Plan v2.0

## Timeline

- Requirements Analysis: ~~March 1-15~~ March 1-20 (delayed)
- Design Phase: ~~March 16-April 5~~ March 21-April 10
- Development Phase: April 11-May 15
- Testing Phase: May 16-May 30
- Release Date: ~~June 1~~ June 15

### Task Lists

Strikethrough combined with checkboxes can create more intuitive task lists:

```markdown
## This Week's Tasks

- [x] ~~Complete project proposal~~
- [x] ~~Meet with client to discuss requirements~~
- [ ] Create design prototype
- [ ] Write technical specification document
- [ ] Prepare budget estimate
```

**Rendering Effect**:

## This Week's Tasks

- [x] ~~Complete project proposal~~
- [x] ~~Meet with client to discuss requirements~~
- [ ] Create design prototype
- [ ] Write technical specification document
- [ ] Prepare budget estimate

### Pricing and Promotions

Strikethrough is very useful in e-commerce and promotional content:

```markdown
## Special Offers

- High-performance laptop: ~~¥8,999~~ ¥7,499
- Wireless headphones: ~~¥1,299~~ ¥999
- Smartwatch: ~~¥2,499~~ ¥1,999

*Promotion ends: December 31, 2023*
```

**Rendering Effect**:

## Special Offers

- High-performance laptop: ~~¥8,999~~ ¥7,499
- Wireless headphones: ~~¥1,299~~ ¥999
- Smartwatch: ~~¥2,499~~ ¥1,999

*Promotion ends: December 31, 2023*

### Humor and Emphasis

Strikethrough is sometimes used to express humor or emphasis:

```markdown
Today's meeting was ~~very boring~~ very productive.

I ~~hate~~ love writing documentation.

This project ~~might fail~~ will definitely succeed!
```

**Rendering Effect**:

Today's meeting was ~~very boring~~ very productive.

I ~~hate~~ love writing documentation.

This project ~~might fail~~ will definitely succeed!

## Best Practices

### Usage Recommendations

```markdown
✅ Recommended practices:

1. **Clear modification expression**:
   - Delete old content, add new content
   - Example: ~~wrong version~~ correct version
   
2. **Concise usage**:
   - Avoid excessive strikethrough content affecting readability
   - Consider whether old content really needs to be retained
   
3. **Combine with other markers**:
   - Use with checkboxes in task lists
   - Combine with other formatting to enhance expressiveness

❌ Practices to avoid:

1. Using overly complex formatting within strikethrough
2. Applying strikethrough to large blocks of text (affects readability)
3. Overusing humorous strikethrough in important documents
4. Applying strikethrough to entire documents or multiple paragraphs
```

### Accessibility Considerations

Strikethrough may confuse screen reader users. Consider the following:

1. Add contextual explanations for strikethrough content
2. Consider using other methods (such as parentheses, comments) to indicate deprecated content
3. If content is truly no longer relevant, consider deleting it entirely rather than using strikethrough

```markdown
<!-- Better accessibility writing -->
Project deadline: March 15 (updated: originally planned for March 1)

<!-- Instead of -->
Project deadline: ~~March 1~~ March 15
```

## Common Problem Solutions

### Strikethrough Not Displaying

If your strikethrough is not displaying correctly:

1. Confirm you're using two tildes `~~`, not one `~`
2. Check if there are spaces between the tildes and text (there shouldn't be)
3. Verify that your Markdown processor supports strikethrough syntax
4. Try using HTML `<del>` tags as an alternative

### Complex Formatting Issues

When strikethrough is combined with other formats, problems may arise:

```markdown
<!-- Potentially problematic writing -->
~~**[Complex formatting](https://www.markdownlang.com)**~~

<!-- Safer writing -->
<del>**[Complex formatting](https://www.markdownlang.com)**</del>
```

### Multi-paragraph Strikethrough

For strikethrough that needs to span multiple paragraphs, it's best to use HTML:

```markdown
<del>
This is the first deleted paragraph.

This is the second deleted paragraph.
</del>
```

## Related Syntax

- [Task Lists](/extended/task-lists) - Create interactive task lists
- [Emphasis](/basic/emphasis) - Text emphasis syntax (bold, italic)
- [HTML](/advanced/html) - Using HTML in Markdown

## Summary

Strikethrough is a simple but powerful Markdown extension syntax that provides an intuitive way to represent text modifications, completed tasks, or outdated information. Through reasonable use of strikethrough, documents can be made clearer and more vivid, helping readers better understand the evolution of content. 