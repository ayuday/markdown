---
title: Markdown Emphasis Syntax
description: Introduction to the use and nesting techniques of italics, bold, and bold-italic emphasis in Markdown.
---

# Emphasis Syntax

Emphasis syntax is used to highlight text and is one of the most commonly used formatting features in Markdown. By using different emphasis methods, you can make important content stand out.

## Basic Emphasis Syntax

### Italic

Use a single asterisk `*` or underscore `_` to wrap text:

```markdown
*italic text*
_italic text_
```

**Rendered Output:**
*italic text*
_italic text_

### Bold

Use double asterisks `**` or double underscores `__` to wrap text:

```markdown
**bold text**
__bold text__
```

**Rendered Output:**
**bold text**
__bold text__

### Bold and Italic

Use three asterisks `***` or three underscores `___`, or mix them:

```markdown
***bold italic text***
___bold italic text___
**_bold italic text_**
*__bold italic text__*
```

**Rendered Output:**
***bold italic text***
___bold italic text___
**_bold italic text_**
*__bold italic text__*

## Syntax Selection Advice

### Asterisk vs Underscore

| Symbol | Advantage | Disadvantage | Recommended Scenario |
|--------|-----------|--------------|---------------------|
| `*`    | More common, better compatibility | May be confused with lists in some editors | Generally recommended |
| `_`    | Clearer inside words | Less used, may be unfamiliar | Special cases |

### Recommended Usage

```markdown
✅ Recommended: Stay consistent
Here is **bold** and *italic* text.

❌ Not recommended: Mixed usage
Here is **bold** and _italic_ text.
```

## Using Emphasis Inside Words

### Limitation of Asterisk

Asterisks may not be recognized inside words:

```markdown
love*is*beautiful  ← may not render as italic
```

### Advantage of Underscore

Underscores are more reliable inside words:

```markdown
love_is_beautiful  ← more likely to render correctly
```

**Tip:** If you need emphasis inside words, prefer underscores.

## Nested Emphasis

### Basic Nesting

You can nest italic inside bold, or bold inside italic:

```markdown
**This is bold with *italic* text inside**
*This is italic with **bold** text inside*
```

**Rendered Output:**
**This is bold with *italic* text inside**
*This is italic with **bold** text inside*

### Complex Nesting

```markdown
***This is bold italic with normal text***
**Bold paragraph with *italic clause* and normal text**
*Italic paragraph with **bold keyword** and normal text*
```

**Rendered Output:**
***This is bold italic with normal text***
**Bold paragraph with *italic clause* and normal text**
*Italic paragraph with **bold keyword** and normal text*

## Common Errors and Solutions

### 1. Mismatched Symbols

```markdown
❌ Incorrect:
*This is unclosed italic
**This is mismatched bold*

✅ Correct:
*This is correct italic*
**This is correct bold**
```

### 2. Space Issues

```markdown
❌ Incorrect:
* this is not italic *
** this is not bold **

✅ Correct:
*this is italic*
**this is bold**
```

### 3. Characters Around Symbols

```markdown
❌ Potential issue:
Text*italic*text  ← may not render

✅ Safer:
Text *italic* text
Text_italic_text
```

## Special Cases

### Escaping Emphasis Symbols

If you need to display asterisks or underscores themselves, use a backslash to escape:

```markdown
\*this is not italic\*
\**this is not bold\**
\_this is not italic\_
```

**Rendered Output:**
\*this is not italic\*
\**this is not bold\**
\_this is not italic\_

### In Code

In inline code, emphasis symbols are displayed literally:

```markdown
`*the asterisk here will not be interpreted as italic*`
`**the double asterisks here will not be interpreted as bold**`
```

**Rendered Output:**
`*the asterisk here will not be interpreted as italic*`
`**the double asterisks here will not be interpreted as bold**`

## Semantic Usage

### Semantic Uses of Italic

- **Emphasis:** *This is important*
- **Foreign words:** *Hello World*
- **Terms:** *HTTP* protocol
- **Citations:** As stated in *"Romance of the Three Kingdoms"*
- **Variables:** Set *x* to 10

### Semantic Uses of Bold

- **Importance:** **Pay attention to safety**
- **Keywords:** **API** endpoint
- **Warning:** **Do not delete important files**
- **Subheadings:** **Step One**: Install the software

### Uses of Bold Italic

- **Extremely important:** ***Never*** do this
- **Strong recommendation:** ***Highly recommended*** to read the documentation

## Best Practices

### 1. Use Moderately

```markdown
✅ Recommended: Moderate emphasis
This feature is **very important**, please read the documentation carefully.

❌ Not recommended: Over-emphasis
**This feature*****is very important***,**please read****the documentation**.
```

### 2. Stay Consistent

```markdown
✅ Recommended: Always use asterisks
Use **bold** and *italic* to emphasize content.

❌ Not recommended: Mixed symbols
Use **bold** and _italic_ to emphasize content.
```

### 3. Use Semantically

```markdown
✅ Recommended: Meaningful emphasis
The function returns **true** for success and **false** for failure.

❌ Not recommended: Decorative emphasis
The function**returns** true **means** success, **returns** false **means** failure.
```

## HTML Output

Markdown emphasis syntax is converted to HTML:

```markdown
*italic*     → <em>italic</em>
**bold**   → <strong>bold</strong>
***bold italic*** → <strong><em>bold italic</em></strong>
```

## Extended Syntax

Some Markdown processors support additional emphasis methods:

### Strikethrough

```markdown
~~strikethrough text~~
```

**Rendered Output:**
~~strikethrough text~~

### Underline

```markdown
<u>underlined text</u>
```

**Rendered Output:**
<u>underlined text</u>

### Highlight

```markdown
==highlighted text==  (supported by some processors)
<mark>highlighted text</mark>  (HTML tag)
```

## Practical Examples

### Technical Documentation

```markdown
**API Endpoint**: `/api/users`

**Method**: *GET*

**Parameters**:
- *id* (***required***): User ID
- *format* (optional): Return format

**Return**: User info or **error message**
```

### User Guide

```markdown
## Installation Steps

**Step One**: Download the installer

Go to the official website download page and choose the version for your operating system. *Make sure to download the latest version*.

**Step Two**: Run the installer

Double-click the downloaded file and follow the wizard to complete the installation. ***Important***: Please disable antivirus software during installation.

**Step Three**: Verify installation

Open the command line and enter `app --version` to check if the installation was successful.
```

## Related Syntax

- [Link Syntax](/basic/links) - Creating hyperlinks
- [Code Syntax](/basic/code) - Code formatting
- [Blockquote Syntax](/basic/blockquotes) - Quoting text
- [Strikethrough](/extended/strikethrough) - Extended emphasis

## Practice

Try creating a document with the following:

1. A product introduction highlighting key features in bold
2. A technical explanation marking terms in italics
3. A warning message using bold italic for importance
4. Compound sentences mixing various emphasis styles 