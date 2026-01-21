---
title: Markdown Links & Images Cheatsheet
description: Quick reference for Markdown links, images, blockquotes, combinations, and common mistakes.
---

# Links and Images Cheatsheet

## Link Syntax

### Inline Links

```markdown
[Link text](https://www.markdownlang.com)
[Link with title](https://www.markdownlang.com "Link title")
```

### Reference Links

```markdown
[Link text][ref]
[Link text][]

[ref]: https://www.markdownlang.com "Optional title"
[Link text]: https://www.markdownlang.com
```

### Autolinks

```markdown
<https://www.markdownlang.com>
<email@example.com>
```

### Anchor Links

```markdown
[Jump to heading](#heading-name)
[Back to top](#top)
```

## Image Syntax

### Inline Images

```markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Image title")
```

### Reference Images

```markdown
![Alt text][img-ref]

[img-ref]: image.jpg "Optional title"
```

### Image Links

```markdown
[![Alt text](image.jpg)](https://www.markdownlang.com)
```

### Specify Size

```markdown
<img src="image.jpg" alt="Alt text" width="300" height="200">
```

## Common Combinations

### Linked Image

```markdown
[![Project Logo](logo.png)](https://github.com/user/repo)
```

### Centered Image

```markdown
<div align="center">
  <img src="image.jpg" alt="Description">
</div>
```

### Side-by-side Images

```markdown
<img src="img1.jpg" width="48%"> <img src="img2.jpg" width="48%">
```

## Best Practices

| Type        | Suggestion              | Example                  |
|-------------|------------------------|--------------------------|
| Link text   | Use descriptive text    | ✅ `[User Guide]()`      |
| Link text   | Avoid "click here"     | ❌ `[Click here]()`      |
| Image file  | Use relative path       | ✅ `./images/pic.jpg`    |
| Alt text    | Describe image content  | ✅ `![UI screenshot]()`  |
| File format | Web-friendly formats    | ✅ JPG, PNG, WebP        |

## HTML Output

| Markdown        | HTML                        |
|-----------------|----------------------------|
| `[text](url)`   | `<a href="url">text</a>`   |
| `![alt](img)`   | `<img src="img" alt="alt">` |
| `<url>`         | `<a href="url">url</a>`    |

## Common Mistakes

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