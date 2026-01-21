---
title: Markdown Escape Characters
description: Explains the usage, scenarios, and tips for common escape characters in Markdown to help you precisely control text display.
---

# Escape Characters

Escape characters allow you to display characters in Markdown that would otherwise have special meanings. By adding a backslash `\` before a character, you can cancel its special function.

## Basic Escape Concept

### What is Escaping

In Markdown, some characters have special meanings (such as `*` for emphasis). When you want to display these characters themselves, you need to use escaping.

```markdown
This is *italic* text.
This is \*a plain asterisk\* text.
```

**Rendered Output:**

This is *italic* text.
This is \*a plain asterisk\* text.

## Characters That Need Escaping

### Complete List

The following characters have special meanings in Markdown and need to be escaped:

| Character | Description | Escape Syntax | Usage |
|-----------|-------------|--------------|-------|
| `\`      | Backslash   | `\\`        | Escape character |
| `` ` ``   | Backtick    | `` \` ``     | Inline code |
| `*`      | Asterisk    | `\*`         | Emphasis, lists |
| `_`      | Underscore  | `\_`         | Emphasis |
| `{}`     | Braces      | `\{` `\}`    | Extended syntax |
| `[]`     | Brackets    | `\[` `\]`    | Links, images |
| `()`     | Parentheses | `\(` `\)`    | Links, images |
| `#`      | Hash        | `\#`         | Headings |
| `+`      | Plus        | `\+`         | Lists |
| `-`      | Dash        | `\-`         | Lists, horizontal rule |
| `.`      | Period      | `\.`         | Ordered lists |
| `!`      | Exclamation | `\!`         | Images |

### Common Escape Examples

#### Asterisks and Underscores

```markdown
❌ Not escaped:
This filename is file_name_v2.txt
This formula is 2*3*4 = 24

✅ Escaped:
This filename is file\_name\_v2.txt
This formula is 2\*3\*4 = 24
```

**Rendered Output:**

❌ Not escaped:
This filename is file_name_v2.txt
This formula is 2*3*4 = 24

✅ Escaped:
This filename is file\_name\_v2.txt
This formula is 2\*3\*4 = 24

#### Hash Headings

```markdown
❌ Not escaped:
# TODO: Finish the task

✅ Escaped:
\# TODO: Finish the task
```

**Rendered Output:**

❌ Not escaped:
# TODO: Finish the task

✅ Escaped:
\# TODO: Finish the task

#### List Symbols

```markdown
❌ Not escaped:
Price: 100 - 200 USD
Steps: 1. Prepare 2. Execute

✅ Escaped:
Price: 100 \- 200 USD
Steps: 1\. Prepare 2\. Execute
```

**Rendered Output:**

❌ Not escaped:
Price: 100 - 200 USD
Steps: 1. Prepare 2. Execute

✅ Escaped:
Price: 100 \- 200 USD
Steps: 1\. Prepare 2\. Execute

#### Link Syntax

```markdown
❌ Not escaped:
See the documentation [here](http://example.com)

✅ Escaped (showing raw syntax):
See the documentation \[here\]\(http://example.com\)
```

**Rendered Output:**

❌ Not escaped:
See the documentation [here](http://example.com)

✅ Escaped (showing raw syntax):
See the documentation \[here\]\(http://example.com\)

## Special Cases

### Backslash Itself

To display a backslash character, use double backslashes:

```markdown
File path: C:\\Users\\Username\\Documents
Unix path: /home/user/documents
```

**Rendered Output:**

File path: C:\\Users\\Username\\Documents
Unix path: /home/user/documents

### Escaping Backticks

To display backticks in code:

```markdown
Use `` \` `` to wrap code
Use ``` \`\`\` ``` to create code blocks
```

**Rendered Output:**

Use `` \` `` to wrap code
Use ``` \`\`\` ``` to create code blocks

### Backslash at Line End

A backslash at the end of a line has a special meaning (forced line break):

```markdown
First line\
Second line (forced line break)

First line\\
Second line (shows backslash)
```

**Rendered Output:**

First line\
Second line (forced line break)

First line\\
Second line (shows backslash)

## Escaping in Code

### Inline Code

In inline code, most characters do not need to be escaped:

```markdown
Code: `let result = 2 * 3 + 1;`
Path: `C:\Users\*\Documents`
```

**Rendered Output:**

Code: `let result = 2 * 3 + 1;`
Path: `C:\Users\*\Documents`

### Code Blocks

In code blocks, characters are preserved as-is:

````markdown
```javascript
// These symbols do not need escaping
const pattern = /[.*+?^${}()|[\]\\]/g;
const path = "C:\\Users\\*\\Documents";
```
````

**Rendered Output:**

```javascript
// These symbols do not need escaping
const pattern = /[.*+?^${}()|[\]\\]/g;
const path = "C:\\Users\\*\\Documents";
```

## Practical Application Scenarios

### 1. Technical Documentation

```markdown
## Configuration File Syntax

The configuration file uses the following format:

```
\# Comment line
key = value
\[section\]
```

Note:
- Use \# to start a comment
- Use \[\] to define a section
- Use \* as a wildcard
```

### 2. Mathematical Expressions

```markdown
## Mathematical Formulas

Linear equation: y = a\*x + b
Quadratic equation: y = a\*x² + b\*x + c
Fraction: 1/2 = 0.5

Note: Use \* as the multiplication operator
```

### 3. File Paths

```markdown
## File System

Windows paths:
- System directory: C:\\Windows\\System32
- User directory: C:\\Users\\{username}
- Program directory: C:\\Program Files\\*

Linux paths:
- Root directory: /
- User directory: /home/{username}
- Wildcard: /var/log/\*.log
```

### 4. Special Symbol Explanation

```markdown
## Symbol Meanings

In programming:
- \* usually means pointer or wildcard
- \_ is used for naming conventions (like \_private)
- \# is used for comments or preprocessor directives
- \[\] means array or optional parameter
- \{\} means code block or placeholder
```

## Best Practices for Escaping

### 1. Escape Only When Needed

```markdown
✅ Recommended: Only escape ambiguous characters
Filename: config.txt
Price: $10-20

❌ Not recommended: Over-escaping
Filename: config\.txt
Price: \$10\-20
```

### 2. Stay Consistent

```markdown
✅ Recommended: Consistent escape style
Variable names: user\_id, item\_count, max\_size

❌ Not recommended: Inconsistent handling
Variable names: user_id, item\_count, max_size
```

### 3. Use Code Formatting

When there are many special characters, consider using code formatting:

```markdown
✅ Recommended: Use code formatting
Config syntax: `[section]` and `key=value`

❌ Not recommended: Excessive escaping
Config syntax: \[section\] and key\=value
```

## Common Mistakes

### 1. Forgetting to Escape

```markdown
❌ Incorrect:
My GitHub username is user_name
This function is called get_data()

✅ Correct:
My GitHub username is user\_name
This function is called get\_data()
```

### 2. Over-escaping

```markdown
❌ Incorrect:
Today is 12\-25
This file is README\.md

✅ Correct:
Today is 12-25  
This file is README.md
```

### 3. Context Error

```markdown
❌ Incorrect: Escaping in code block
```
let path = "C:\\Users\\Name";  ← No need for double escaping
```

✅ Correct:
```
let path = "C:\\Users\\Name";
```
```

## HTML Output

HTML output for escape characters:

```markdown
This is \*an asterisk\* text
```

Converted to:

```html
<p>This is *an asterisk* text</p>
```

## Editors and Tools

### Editors Supporting Escape Preview

- **Visual Studio Code**: Markdown Preview Enhanced
- **Typora**: Real-time preview
- **Mark Text**: WYSIWYG
- **Obsidian**: Live rendering

### Escape Checking Tools

```markdown
<!-- markdownlint rules -->
MD049: Emphasis marker consistency
MD050: Emphasis marker style
```

## Related Syntax

- [Emphasis Syntax](/basic/emphasis) - Usage of asterisks and underscores
- [Code Syntax](/basic/code) - Special characters in code
- [Link Syntax](/basic/links) - Brackets and parentheses
- [List Syntax](/basic/lists) - List markers

## Practice

Try to correctly display the following:

1. File path: `C:\Program Files\*\config.ini`
2. Variable names: `user_id`, `file_name`, `max_count`
3. Mathematical expression: `2*x + 3*y = 15`
4. Config syntax: `[section]` and `key=value`
5. Markdown syntax: `**bold**` and `*italic*`

## Reference Table

### Common Escape Quick Reference

| Original | Escaped | Description |
|----------|---------|-------------|
| `\`      | `\\`   | Backslash |
| `*`      | `\*`   | Asterisk |
| `_`      | `\_`   | Underscore |
| `#`      | `\#`   | Hash |
| `[`      | `\[`   | Left bracket |
| `]`      | `\]`   | Right bracket |
| `(`      | `\(`   | Left parenthesis |
| `)`      | `\)`   | Right parenthesis |
| `+`      | `\+`   | Plus |
| `-`      | `\-`   | Dash/hyphen |
| `.`      | `\.`   | Period |
| `!`      | `\!`   | Exclamation | 