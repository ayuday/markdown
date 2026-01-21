
---
title: Markdown Image Cheatsheet
keywords: Markdown Image Cheatsheet, Markdown Image Syntax, Markdown Image Syntax
description: Quick reference for Markdown links, images, blockquotes, combinations, and common mistakes.
---

# Markdown Image Cheatsheet

## Markdown Image Syntax

### Markdown Inline Images

```markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Image title")
```

### Markdown Reference Images

```markdown
![Alt text][img-ref]

[img-ref]: image.jpg "Optional title"
```

### Markdown Image Links

```markdown
[![Alt text](image.jpg)](https://www.markdownlang.com)
```

### Markdown Specify Size

```markdown
<img src="image.jpg" alt="Alt text" width="300" height="200">
```

## Markdown Common Combinations

### Markdown Linked Image

```markdown
[![Project Logo](logo.png)](https://github.com/user/repo)
```

### Markdown Centered Image

```markdown
<div align="center">
  <img src="image.jpg" alt="Description">
</div>
```

### Markdown Side-by-side Images

```markdown
<img src="img1.jpg" width="48%"> <img src="img2.jpg" width="48%">
```

## Markdown Best Practices

| Type        | Suggestion              | Example                  |
|-------------|------------------------|--------------------------|
| Link text   | Use descriptive text    | ✅ `[User Guide]()`      |
| Link text   | Avoid "click here"     | ❌ `[Click here]()`      |
| Image file  | Use relative path       | ✅ `./images/pic.jpg`    |
| Alt text    | Describe image content  | ✅ `![UI screenshot]()`  |
| File format | Web-friendly formats    | ✅ JPG, PNG, WebP        |

## Markdown HTML Output

| Markdown        | HTML                        |
|-----------------|----------------------------|
| `[text](url)`   | `<a href="url">text</a>`   |
| `![alt](img)`   | `<img src="img" alt="alt">` |
| `<url>`         | `<a href="url">url</a>`    |

## Markdown Common Mistakes

```markdown
❌ Incorrect examples:
[Link(https://www.markdownlang.com)     ← Missing right parenthesis
![Image](image.jpg             ← Missing right parenthesis
[ Link ]( https://www.markdownlang.com ) ← Unnecessary spaces

✅ Correct examples:
[Link](https://www.markdownlang.com)
![Image](image.jpg)
[Link](https://www.markdownlang.com)
``` 