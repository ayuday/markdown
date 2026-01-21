---
title: Markdown 链接与图片速查
description: 快速查阅 Markdown 链接、图片、引用、组合用法及常见错误。
---

# 链接和图片速查

## 链接语法

### 内联链接

```markdown
[链接文本](https://www.markdownlang.com)
[带标题的链接](https://www.markdownlang.com "链接标题")
```

### 引用式链接

```markdown
[链接文本][ref]
[链接文本][]

[ref]: https://www.markdownlang.com "可选标题"
[链接文本]: https://www.markdownlang.com
```

### 自动链接

```markdown
<https://www.markdownlang.com>
<email@example.com>
```

### 锚点链接

```markdown
[跳转到标题](#标题名称)
[返回顶部](#top)
```

## 图片语法

### 内联图片

```markdown
![替代文本](image.jpg)
![替代文本](image.jpg "图片标题")
```

### 引用式图片

```markdown
![替代文本][img-ref]

[img-ref]: image.jpg "可选标题"
```

### 图片链接

```markdown
[![图片替代文本](image.jpg)](https://www.markdownlang.com)
```

### 指定尺寸

```markdown
<img src="image.jpg" alt="替代文本" width="300" height="200">
```

## 常用组合

### 带链接的图片

```markdown
[![项目Logo](logo.png)](https://github.com/user/repo)
```

### 图片居中

```markdown
<div align="center">
  <img src="image.jpg" alt="描述">
</div>
```

### 并排显示图片

```markdown
<img src="img1.jpg" width="48%"> <img src="img2.jpg" width="48%">
```

## 最佳实践

| 类型 | 建议 | 示例 |
|------|------|------|
| 链接文本 | 使用描述性文本 | ✅ `[用户指南]()` |
| 链接文本 | 避免"点击这里" | ❌ `[点击这里]()` |
| 图片文件 | 使用相对路径 | ✅ `./images/pic.jpg` |
| 替代文本 | 描述图片内容 | ✅ `![用户界面截图]()` |
| 文件格式 | 网络友好格式 | ✅ JPG, PNG, WebP |

## HTML 输出

| Markdown | HTML |
|----------|------|
| `[text](url)` | `<a href="url">text</a>` |
| `![alt](img)` | `<img src="img" alt="alt">` |
| `<url>` | `<a href="url">url</a>` |

## 常见错误

```markdown
❌ 错误示例：
[链接(https://www.markdownlang.com)     ← 缺少右括号
![图片](image.jpg             ← 缺少右括号
[ 链接 ]( https://www.markdownlang.com ) ← 不必要的空格

✅ 正确示例：
[链接](https://www.markdownlang.com)
![图片](image.jpg)
[链接](https://www.markdownlang.com)
``` 