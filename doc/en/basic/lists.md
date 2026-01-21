---
title: Markdown List Syntax
description: A detailed introduction to ordered lists, unordered lists, nested lists, and multi-paragraph content usage and conventions in Markdown.
---

# List Syntax

Lists are an important way to organize information. Markdown supports ordered and unordered lists, as well as nested lists and task lists.

## Unordered Lists

### Basic Syntax

Use `-`, `*`, or `+` to create unordered lists:

```markdown
- Item 1
- Item 2
- Item 3

* Item 1
* Item 2
* Item 3

+ Item 1
+ Item 2
+ Item 3
```

**Rendered Output:**

- Item 1
- Item 2
- Item 3

### Symbol Selection Advice

| Symbol | Feature | Recommended Scenario |
|--------|---------|---------------------|
| `-`    | Most common, concise | Generally recommended |
| `*`    | Consistent with emphasis syntax | For style consistency |
| `+`    | Rarely used | For special distinction |

**Tip:** Keep symbol consistency throughout the document.

## Ordered Lists

### Basic Syntax

Use numbers followed by a period to create ordered lists:

```markdown
1. First item
2. Second item
3. Third item
```

**Rendered Output:**

1. First item
2. Second item
3. Third item

### Numbering

The actual value of the number doesn't matter; Markdown will automatically generate the correct sequence:

```markdown
1. First item
3. Second item
8. Third item
```

**Rendered Output:**

1. First item
3. Second item
8. Third item

### Starting Number

You can specify the starting number:

```markdown
3. Third item
4. Fourth item
5. Fifth item
```

**Rendered Output:**

3. Third item
4. Fourth item
5. Fifth item

## Nested Lists

### Basic Nesting

Use indentation (2-4 spaces) to create nested lists:

```markdown
- Level 1 item 1
  - Level 2 item 1.1
  - Level 2 item 1.2
- Level 1 item 2
  - Level 2 item 2.1
    - Level 3 item 2.1.1
    - Level 3 item 2.1.2
  - Level 2 item 2.2
```

**Rendered Output:**

- Level 1 item 1
  - Level 2 item 1.1
  - Level 2 item 1.2
- Level 1 item 2
  - Level 2 item 2.1
    - Level 3 item 2.1.1
    - Level 3 item 2.1.2
  - Level 2 item 2.2

### Mixed Nesting

Ordered and unordered lists can be nested within each other:

```markdown
1. Ordered item 1
   - Unordered subitem 1.1
   - Unordered subitem 1.2
2. Ordered item 2
   1. Ordered subitem 2.1
   2. Ordered subitem 2.2
      - Unordered subsubitem 2.2.1
      - Unordered subsubitem 2.2.2
```

**Rendered Output:**

1. Ordered item 1
   - Unordered subitem 1.1
   - Unordered subitem 1.2
2. Ordered item 2
   1. Ordered subitem 2.1
   2. Ordered subitem 2.2
      - Unordered subsubitem 2.2.1
      - Unordered subsubitem 2.2.2

## Multi-paragraph Content in Lists

### Paragraph Continuation

Include multiple paragraphs in a list item:

```markdown
1. First item

   This is the second paragraph of the first item. Indent to keep it within the list item.

2. Second item

   This is the second paragraph of the second item.
   
   This is the third paragraph of the second item.

3. Third item
```

**Rendered Output:**

1. First item

   This is the second paragraph of the first item. Indent to keep it within the list item.

2. Second item

   This is the second paragraph of the second item.
   
   This is the third paragraph of the second item.

3. Third item

### Code Blocks

Include code blocks in a list:

```markdown
1. Install dependencies

   ```bash
   npm install express
   ```

2. Create server

   ```javascript
   const express = require('express');
   const app = express();
   ```

3. Start server
```

### Blockquotes

Include blockquotes in a list:

```markdown
1. Preparation

   > Make sure you have enough disk space
   > At least 10GB is recommended

2. Start installation
```

## Task Lists

### Basic Syntax

Use `- [ ]` for incomplete tasks, `- [x]` for completed tasks:

```markdown
- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
- [ ] To-do item
```

**Rendered Output:**

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
- [ ] To-do item

### Nested Task Lists

```markdown
- [x] Project planning
  - [x] Requirement analysis
  - [x] Technical research
  - [ ] Prototype design
- [ ] Development phase
  - [ ] Frontend development
    - [x] Page layout
    - [ ] Interactive features
  - [ ] Backend development
    - [ ] API design
    - [ ] Database design
- [ ] Testing phase
```

**Rendered Output:**

- [x] Project planning
  - [x] Requirement analysis
  - [x] Technical research
  - [ ] Prototype design
- [ ] Development phase
  - [ ] Frontend development
    - [x] Page layout
    - [ ] Interactive features
  - [ ] Backend development
    - [ ] API design
    - [ ] Database design
- [ ] Testing phase

## Common Errors and Solutions

### 1. Incorrect Indentation

```markdown
❌ Error: Inconsistent indentation
- Item 1
  - Subitem 1.1
    - Subitem 1.2  ← Indentation error

✅ Correct: Consistent indentation
- Item 1
  - Subitem 1.1
  - Subitem 1.2
```

### 2. Blank Lines Between List Items

```markdown
❌ Error: Unnecessary blank lines break the list
- Item 1

- Item 2  ← This creates two separate lists

✅ Correct: Consecutive list items
- Item 1
- Item 2
```

### 3. Missing Space After Number

```markdown
❌ Error:
1.First item  ← Missing space
2.Second item

✅ Correct:
1. First item
2. Second item
```

## Special Cases

### Escaping List Symbols

If you want to display list symbols at the beginning of a line without creating a list:

```markdown
\- This is not a list item
\* This is not a list item
\1. This is not an ordered list item
```

**Rendered Output:**

\- This is not a list item
\* This is not a list item
\1. This is not an ordered list item

### Code in List Items

```markdown
- Install `npm install package-name`
- Run `npm start`
- Visit `http://localhost:3000` in your browser
```

**Rendered Output:**

- Install `npm install package-name`
- Run `npm start`
- Visit `http://localhost:3000` in your browser

### Links in List Items

```markdown
- [GitHub](https://github.com) - Code hosting platform
- [Stack Overflow](https://stackoverflow.com) - Q&A site
- [MDN](https://developer.mozilla.org) - Developer documentation
```

**Rendered Output:**

- [GitHub](https://github.com) - Code hosting platform
- [Stack Overflow](https://stackoverflow.com) - Q&A site
- [MDN](https://developer.mozilla.org) - Developer documentation

## Best Practices

### 1. Keep Consistency

```markdown
✅ Recommended: Always use dashes
- Item A
- Item B
- Item C

❌ Not recommended: Mixing symbols
- Item A
* Item B
+ Item C
```

### 2. Use Nesting Appropriately

```markdown
✅ Recommended: Moderate nesting
- Main features
  - User management
  - Content management
- Auxiliary features
  - Logging
  - Data backup

❌ Not recommended: Too deep nesting
- Features
  - Main features
    - Core features
      - Basic features
        - Fundamental features  ← Too deep
```

### 3. Organize Semantically

```markdown
✅ Recommended: Group logically
## Development Tools
- Code editor
- Version control
- Debugging tools

## Design Tools
- Prototyping
- Image editing
- UI design

❌ Not recommended: No logical grouping
- Code editor
- Prototyping
- Version control
- Image editing
```

## HTML Output

Markdown lists are converted to HTML:

```markdown
- Item 1
- Item 2
```

Converted to:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

```markdown
1. Item 1
2. Item 2
```

Converted to:

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

## Practical Examples

### Shopping List

```markdown
## Today's Shopping List

### Daily Necessities
- [ ] Shampoo
- [ ] Toothpaste
- [x] Towel

### Food
- [ ] Milk
- [ ] Bread
- [x] Eggs
- [ ] Fruit
  - [ ] Apple
  - [x] Banana
  - [ ] Orange
```

### Study Plan

```markdown
## Study Plan for This Month

1. **Week 1**: Basics
   - [x] Read chapters 1-3 of the tutorial
   - [x] Complete exercises 1-10
   - [ ] Watch video lessons 1-5

2. **Week 2**: Practice Project
   - [ ] Create a simple project
   - [ ] Implement basic features
   - [ ] Add style design

3. **Week 3**: Advanced Content
   - [ ] Learn advanced features
   - [ ] Optimize project performance
   - [ ] Write test cases

4. **Week 4**: Review
   - [ ] Organize study notes
   - [ ] Prepare final project
   - [ ] Review key content
```

### API Feature List

```markdown
## API Endpoints

### User Management
1. `GET /api/users` - Get user list
   - Supports pagination
   - Supports search filtering
   
2. `POST /api/users` - Create new user
   - Requires admin privileges
   - Validate email uniqueness
   
3. `PUT /api/users/:id` - Update user info
   - Users can only update their own info
   - Admins can update any user

### Content Management
- `GET /api/posts` - Get post list
- `POST /api/posts` - Create new post
- `DELETE /api/posts/:id` - Delete post
```

## Related Syntax

- [Task Lists](/extended/task-lists) - Extended task features
- [Definition Lists](/extended/definition-lists) - Term definitions
- [Blockquote Syntax](/basic/blockquotes) - Quoting text
- [Code Syntax](/basic/code) - Code formatting

## Practice

Create the following types of lists:

1. A three-level nested project structure
2. A technical step list with code examples
3. A complex list mixing ordered and unordered items
4. A project checklist with task statuses 
