---
title: Markdown Lists Cheatsheet
description: Quick reference for Markdown ordered, unordered, nested, and task lists syntax.
---

# Lists Syntax Cheatsheet

## Unordered Lists

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

## Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
```

## Nested Lists

```markdown
- Level 1
  - Level 2
    - Level 3
      - Level 4

1. Ordered item 1
   - Unordered subitem
   - Unordered subitem
2. Ordered item 2
   1. Ordered subitem
   2. Ordered subitem
```

## Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
```

## Other Elements in Lists

### Paragraphs

```markdown
1. First item

   This is the second paragraph of the first item.

2. Second item
```

### Code Blocks

```markdown
1. Install dependencies

   ```bash
   npm install
   ```

2. Start the project
```

### Blockquotes

```markdown
1. Important note

   > Please pay attention to safety

2. Next step
```

## Best Practices

| Suggestion           | Description                          |
|---------------------|--------------------------------------|
| ✅ Keep symbols consistent | Use the same symbol throughout the document |
| ✅ Proper indentation      | Use 2-4 spaces for sublists         |
| ✅ Avoid deep nesting      | No more than 3-4 levels             |
| ❌ Do not skip levels      | Avoid jumping from level 1 to 3     |

## HTML Output

| Markdown         | HTML                          |
|------------------|------------------------------|
| `- Item`         | `<ul><li>Item</li></ul>`      |
| `1. Item`        | `<ol><li>Item</li></ol>`      |
| `- [ ] Task`     | `<input type="checkbox">`    | 