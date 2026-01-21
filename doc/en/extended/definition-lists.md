---
title: Markdown Definition List Extension
description: Introduction to Markdown Definition List syntax, nesting, compatibility, and use cases.
---

# Definition Lists

Definition lists are an extended feature of Markdown, used to create lists of terms and their corresponding definitions. They are commonly used for glossaries, term explanations, or parameter descriptions.

## Basic Syntax

### Basic Format

The basic format of a definition list consists of a term on its own line, followed by a definition starting with a colon on the next line:

```markdown
Term
: Definition content
```

**Rendered output**:

Term
: Definition content

### Multiple Terms and Definitions

```markdown
Markdown
: A lightweight markup language
: Created by John Gruber in 2004

HTML
: A standard markup language used to create web pages
: Used to create web pages
```

**Rendered output**:

Markdown
: A lightweight markup language
: Created by John Gruber in 2004

HTML
: A standard markup language used to create web pages
: Used to create web pages

## Advanced Usage

### Multi-line Definitions

Definition content can include multiple lines, subsequent lines need to be indented:

```markdown
Term
: This is the first line of definition content
   This is the second line, needs at least one space indentation
  
   This is a new paragraph, needs at least one space indentation and a preceding blank line
```

**Rendered output**:

Term
: This is the first line of definition content
   This is the second line, needs at least one space indentation
  
   This is a new paragraph, needs at least one space indentation and a preceding blank line

### Using Other Markdown Elements in Definitions

Definitions can include other Markdown elements, such as links, emphasis, code, etc.:

```markdown
Markdown Syntax
: **Markdown** supports multiple text formatting:
  - *Italic* and **Bold**
  - [Link](https://www.markdownlang.com)
  - `Inline code`
  - > Block quote
  - Lists and other elements
```

**Rendered output**:

Markdown Syntax
: **Markdown** supports multiple text formatting:
  - *Italic* and **Bold**
  - [Link](https://www.markdownlang.com)
  - `Inline code`
  - > Block quote
  - Lists and other elements

### Nested Definition Lists

In some Markdown implementations, you can create nested definition lists:

```markdown
Outer Term
: Outer Definition

   Inner Term
  : Inner Definition
  : Another Inner Definition
```

**Rendered output** (on supported platforms):

Outer Term
: Outer Definition

   Inner Term
  : Inner Definition
  : Another Inner Definition

## Compatibility and Implementation Differences

### Different Platform Support

| Platform/Tool | Definition List Support | Special Syntax | Nested Support |
|----------|------------|---------|---------|
| GitHub Markdown | ❌ | - | - |
| GitLab Markdown | ✅ | Standard | ✅ |
| Jekyll (kramdown) | ✅ | Standard | ✅ |
| Hugo | ✅ | Standard | ✅ |
| CommonMark | ❌ | - | - |
| VitePress | ✅ | Standard | ✅ |
| Pandoc | ✅ | Standard | ✅ |

### HTML Output Format

Most Markdown processors convert definition lists to HTML `<dl>`, `<dt>` and `<dd>` elements:

```html
<dl>
  <dt>Term</dt>
  <dd>Definition content</dd>
  
  <dt>Another Term</dt>
  <dd>Another Definition</dd>
</dl>
```

### Different Syntax Variations

Some processors may require different syntax variations:

```markdown
<!-- Standard Syntax -->
Term
: Definition

<!-- Compact Syntax (some processors) -->
Term: Definition

<!-- Extra space syntax (some processors) -->
Term
  : Definition
```

## Use Cases

### Glossary

Definition lists are perfect for creating glossaries or vocabularies:

```markdown
## Programming Glossary

API
: An application programming interface, a set of rules that allow different software applications to communicate with each other.

Framework
: A software library that provides a standardized structure for application development.

Git
: A distributed version control system used to track changes in a project development process.

IDE
: An integrated development environment, a software application that includes a code editor and various development tools.
```

**Rendered output**:

## Programming Glossary

API
: An application programming interface, a set of rules that allow different software applications to communicate with each other.

Framework
: A software library that provides a standardized structure for application development.

Git
: A distributed version control system used to track changes in a project development process.

IDE
: An integrated development environment, a software application that includes a code editor and various development tools.

### API Documentation

Definition lists are used in API documentation to explain parameters or options:

```markdown
## Request Parameters

user_id
: **Required** - The unique identifier for the user.
: Type: `integer`

name
: **Optional** - The display name for the user.
: Type: `string`
: Default: `null`

status
: **Optional** - The user status.
: Type: `string`
: Allowed values: `active`, `inactive`, `suspended`
: Default: `active`
```

**Rendered output**:

## Request Parameters

user_id
: **Required** - The unique identifier for the user.
: Type: `integer`

name
: **Optional** - The display name for the user.
: Type: `string`
: Default: `null`

status
: **Optional** - The user status.
: Type: `string`
: Allowed values: `active`, `inactive`, `suspended`
: Default: `active`

### Configuration Notes

Definition lists are also suitable for explaining configuration options:

```markdown
## Configuration Options

debug
: Enable or disable debug mode.
: Type: `boolean`
: Default: `false`
: Example: `debug: true`

log_level
: The level of detail for logging.
: Type: `string`
: Allowed values: `error`, `warn`, `info`, `debug`
: Default: `info`
: Example: `log_level: debug`

max_connections
: The maximum number of simultaneous connections allowed.
: Type: `integer`
: Default: `100`
: Example: `max_connections: 500`
```

## Best Practices

### Consistency

```markdown
✅ Recommended practice:

1. **Maintain consistent style for terms and definitions**:
   - Terms use concise nouns or phrases
   - Definitions in sentence format, capitalized first letter, ending with a period
   - For multi-line definitions, maintain consistent indentation

2. **Reasonable grouping**:
   - Related terms together
   - Use headings to separate different definition lists

3. **For technical terms**:
   - Include type information
   - Add examples
   - Indicate required or optional

❌ Avoid practices:

1. Term too long, exceeding one line
2. Use large formatted text in terms
3. Lack of clear classification
4. Definitions containing unrelated information
```

### Alternative Solutions

On platforms that do not support definition lists, you can simulate using other formats:

```markdown
<!-- Use bold and indentation -->
**Term**
   Definition content

**Another Term**
   Another definition content

<!-- Use tables -->
| Term | Definition |
|------|------|
| API | Application Programming Interface |
| IDE | Integrated Development Environment |

<!-- Use headings and paragraphs -->
### Term
Definition content

### Another Term
Another definition content
```

## Practical Application Examples

### Software Documentation

```markdown
## System Requirements

Operating System
: **Windows**: Windows 10 or higher
: **macOS**: macOS 10.14 (Mojave) or higher
: **Linux**: Ubuntu 18.04+, Debian 10+, CentOS 7+

Hardware
: **Processor**: Quad-core 2.0 GHz or faster
: **Memory**: At least 8GB RAM, recommended 16GB
: **Storage**: At least 10GB available space, SSD storage

Network
: Broadband internet connection (at least 10 Mbps)
: Outbound connections allowed on ports: 80, 443, 22
```

### Academic Documentation

```markdown
## Research Terms

Dataset
: A collection of data used for analysis or evaluation.
: This study used a sample from a public repository (n=1000).

Variable
: **Independent Variable**: Input factors manipulated by the researcher.
   In this study, the independent variable was environmental temperature.
  
: **Dependent Variable**: Output factors measured in the study.
   In this study, the dependent variable was processing speed.
  
: **Control Variable**: Factors kept constant in the experiment.
   In this study, humidity and processor load were included.

Significance Level
: The probability threshold used to determine if the result is meaningful in statistical analysis.
: This study used p < 0.05 as the significance standard.
```

## Common Issues and Solutions

### Definition Lists Not Displaying

If your definition lists are not displaying correctly:

1. Check if the platform supports definition list syntax
2. Ensure there is no blank line between terms and definitions
3. Verify that there is appropriate spacing before the colon (some processors may have specific requirements)
4. Try increasing indentation or changing syntax variations

### Nested List Issues

Nested definition lists may have issues in some processors:

1. Increase indentation level (e.g., inner terms use 4 or 8 spaces)
2. Ensure appropriate blank lines between layers
3. If the issue persists, consider using other structures (e.g., regular lists)

### Formatting Issues

If the formatting in definitions is incorrect:

1. Check if indentation for all paragraphs and elements is correct
2. Ensure block-level elements (e.g., code blocks, lists) have correct blank line separation within definitions
3. Try increasing indentation amount

## Related Syntax

- [Lists](/basic/lists) - Basic list syntax
- [Tables](/extended/tables) - Structured data display
- [Fenced Code Blocks](/extended/fenced-code-blocks) - Code block syntax

## Tools and Plugins

- **markdown-it-deflist**: Adds definition list support to markdown-it
- **kramdown**: Native definition list Markdown parser
- **remark-definition-list**: Definition list plugin for remark parser

---

Definition lists are a powerful extended feature of Markdown, particularly suitable for creating explanation documents of terms, parameters, and configurations. Although not all Markdown processors support this syntax, on supported platforms, it provides a clear, structured format for technical documentation, making complex information easier to understand and reference. 