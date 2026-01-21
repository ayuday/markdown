
---
title: Markdown 图片速查表
keywords: Markdown 图片速查表, Markdown 图片语法, Markdown 图片语法
description: Markdown 图片、链接、引用、组合用法和常见错误的快速参考。
---

# Markdown 图片速查表

## Markdown 图片语法

### Markdown 内联图片

```markdown
![替代文本](image.jpg)
![替代文本](image.jpg "图片标题")
```

### Markdown 引用式图片

```markdown
![替代文本][img-ref]

[img-ref]: image.jpg "可选标题"
```

### Markdown 图片链接

```markdown
[![替代文本](image.jpg)](https://www.markdownlang.com)
```

### Markdown 指定尺寸

```markdown
<img src="image.jpg" alt="替代文本" width="300" height="200">
```

## Markdown 常见组合

### Markdown 可点击的图片

```markdown
[![项目Logo](logo.png)](https://github.com/user/repo)
```

### Markdown 居中图片

```markdown
<div align="center">
  <img src="image.jpg" alt="描述">
</div>
```

### Markdown 并排显示图片

```markdown
<img src="img1.jpg" width="48%"> <img src="img2.jpg" width="48%">
```

## Markdown 最佳实践

| 类型        | 建议              | 示例                  |
|-------------|------------------------|--------------------------|
| 链接文本   | 使用描述性文本    | ✅ `[用户指南]()`      |
| 链接文本   | 避免使用"点击这里"     | ❌ `[点击这里]()`      |
| 图片文件  | 使用相对路径       | ✅ `./images/pic.jpg`    |
| 替代文本    | 描述图片内容  | ✅ `![界面截图]()`  |
| 文件格式 | 网络友好格式    | ✅ JPG, PNG, WebP        |

## Markdown HTML 输出

| Markdown        | HTML                        |
|-----------------|----------------------------|
| `[text](url)`   | `<a href="url">text</a>`   |
| `![alt](img)`   | `<img src="img" alt="alt">` |
| `<url>`         | `<a href="url">url</a>`    |

## Markdown 常见错误

```markdown
❌ 错误示例:
[Link(https://www.markdownlang.com)     ← 缺少右括号
![Image](image.jpg             ← 缺少右括号
[ Link ]( https://www.markdownlang.com ) ← 不必要的空格

✅ 正确示例:
[Link](https://www.markdownlang.com)
![Image](image.jpg)
[Link](https://www.markdownlang.com)
``` 