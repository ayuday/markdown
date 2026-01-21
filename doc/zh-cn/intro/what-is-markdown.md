---
title: 什么是 Markdown
description: 介绍 Markdown 的起源、核心特性、与 HTML 的关系及基本用法。
---

# 什么是 Markdown？

Markdown 是一种轻量级标记语言，创始人是约翰·格鲁伯（John Gruber）。它允许人们"使用易读易写的纯文本格式编写文档，然后转换成有效的 HTML 文档"。

## Markdown 的历史

Markdown 诞生于 2004 年。诞生初期是为了简化 HTML 语法，用于编写阅读次数多、更新频率高，但内容格式相对稳定的 README 类的文档。

Markdown 的真正流行是在 2008 年 GitHub 出现以后。GitHub 使用 Markdown 作为默认的 Readme 文件编写规范，并提供了一套渲染规范。随着 GitHub 的流行，越来越多的程序员开始使用 Markdown 作为其创作的首选工具。

## Markdown 的核心特点

### 简洁性
使用直观的符号来表示格式，比如用 `#` 表示标题，用 `*` 表示列表项。这些符号在视觉上就能传达其含义，即使不进行渲染也具有良好的可读性。

### 可读性
即使是纯文本形式的 Markdown 文档，也能清晰地展现文档的结构和层次。读者无需专门的软件就能理解内容的组织方式。

### 便携性
Markdown 文件是纯文本格式，可以在任何文本编辑器中打开和编辑，不依赖特定的软件或操作系统。

### 转换性
可以轻松转换为 HTML、PDF、Word 文档等多种格式，满足不同的发布需求。

## Markdown 与 HTML 的关系

Markdown 并不是 HTML 的替代品，而是 HTML 的简化版本。实际上，Markdown 的最终目标就是转换为 HTML。两者的关系可以这样理解：

```
Markdown 源码 → 解析器 → HTML 输出 → 浏览器渲染
```

例如，当你写下：

```markdown
# 这是一个标题
```

它会被转换为：

```html
<h1>这是一个标题</h1>
```

重要的是，在 Markdown 中你可以直接使用 HTML 标签，这为复杂格式提供了灵活性。

## 一个简单的例子

让我们看一个简单的 Markdown 示例：

```markdown
# 我的第一个 Markdown 文档

这是一个**粗体文本**和一个*斜体文本*。

## 购物清单

- 苹果
- 香蕉
- 橙子

这是一个[链接](https://www.markdownlang.com)的例子。
```

这个简单的例子展示了 Markdown 的几个基本语法：标题、强调、列表和链接。

## 下一步

现在你已经了解了 Markdown 的基本概念，接下来可以：

- [了解为什么使用 Markdown](/zh/intro/why-use-markdown)
- [学习 Markdown 的工作原理](/zh/intro/how-it-works)
- [查看语法速查表](/zh/cheatsheet/) 