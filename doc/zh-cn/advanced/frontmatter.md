---
title: Markdown 中的 Frontmatter
description: 学习如何使用 YAML Frontmatter 为你的 Markdown 文档添加元数据和配置选项。
keywords: markdown frontmatter, yaml frontmatter, markdown元数据, markdown配置
---

# Markdown 中的 Frontmatter

Frontmatter 是 Markdown 文件顶部的一个特殊部分，用于存储文档的元数据。它通常使用 YAML 格式，被三个破折号（`---`）包围。

## 什么是 Frontmatter？

Frontmatter 允许你在 Markdown 文档中嵌入结构化的元数据，这些数据可以被静态网站生成器、内容管理系统和其他工具使用。

### 基本语法

```markdown
---
title: 我的文档标题
author: 张三
date: 2024-01-15
---

# 我的文档标题

这里是文档的正文内容...
```

### 支持的格式

虽然 YAML 是最常见的，但有些系统也支持其他格式：

**YAML（推荐）**
```markdown
---
title: 我的文章
tags: [markdown, tutorial]
---
```

**JSON**
```markdown
---
{
  "title": "我的文章",
  "tags": ["markdown", "tutorial"]
}
---
```

**TOML**
```markdown
+++
title = "我的文章"
tags = ["markdown", "tutorial"]
+++
```

## 常用字段

### 标题和描述

```yaml
---
title: Markdown 完全指南
description: 学习 Markdown 语法和最佳实践的综合指南
keywords: markdown, 教程, 指南, 语法
---
```

### 作者信息

```yaml
---
author: 张三
authors:
  - name: 张三
    email: zhangsan@example.com
    url: https://zhangsan.com
  - name: 李四
    email: lisi@example.com
---
```

### 日期和时间

```yaml
---
date: 2024-01-15
created: 2024-01-15
updated: 2024-01-20
publishDate: 2024-01-15T10:00:00Z
expiryDate: 2025-01-15
---
```

### 分类和标签

```yaml
---
categories:
  - 技术
  - Web开发
tags:
  - markdown
  - 文档
  - 教程
series: Markdown 系列教程
---
```

### 布局和模板

```yaml
---
layout: post
template: article
type: documentation
sidebar: auto
---
```

### SEO 设置

```yaml
---
title: Markdown SEO 指南
description: 提高 Markdown 文档搜索引擎可见性的完整指南
keywords: markdown, seo, 搜索引擎优化
slug: markdown-seo-guide
canonical: https://example.com/markdown-seo-guide
robots: index, follow
---
```

### 社交媒体

```yaml
---
image: /images/markdown-guide-cover.jpg
og:
  title: Markdown 完全指南
  description: 学习 Markdown 的一切
  image: https://example.com/og-image.jpg
  type: article
twitter:
  card: summary_large_image
  creator: "@username"
---
```

### 发布控制

```yaml
---
draft: false
published: true
featured: true
pinned: true
weight: 10
priority: 1.0
---
```

## 不同平台的 Frontmatter

### Jekyll

```yaml
---
layout: post
title: 我的博客文章
date: 2024-01-15 10:00:00 +0800
categories: blog
tags: [jekyll, markdown]
permalink: /posts/my-blog-post
excerpt: 这是文章摘要
---
```

### Hugo

```yaml
---
title: 我的 Hugo 文章
date: 2024-01-15
draft: false
weight: 10
aliases:
  - /old-url/
  - /another-old-url/
menu:
  main:
    weight: 10
    parent: docs
resources:
  - src: "*.jpg"
    title: "图片 :counter"
---
```

### Gatsby

```yaml
---
title: Gatsby 博客文章
date: "2024-01-15"
description: 使用 Gatsby 和 Markdown 构建博客
featuredImage: ./featured-image.jpg
tags: ["gatsby", "react", "markdown"]
---
```

### VuePress

```yaml
---
title: VuePress 文档
lang: zh-CN
description: VuePress 文档示例
sidebar: auto
sidebarDepth: 2
meta:
  - name: keywords
    content: vuepress markdown 文档
prev: ./previous-page
next: ./next-page
---
```

### Next.js (MDX)

```yaml
---
title: Next.js 博客文章
date: '2024-01-15'
author:
  name: 张三
  picture: '/images/avatar.jpg'
ogImage:
  url: '/images/og-image.jpg'
---
```

### Docusaurus

```yaml
---
id: doc-id
title: 文档标题
sidebar_label: 侧边栏标签
sidebar_position: 2
tags:
  - 教程
  - 高级
---
```

## 高级用法

### 自定义变量

你可以定义自己的自定义字段：

```yaml
---
title: 产品文档
version: 2.0.1
apiEndpoint: https://api.example.com
theme:
  primaryColor: "#0066cc"
  darkMode: true
customData:
  feature1: enabled
  feature2: disabled
---
```

### 多语言支持

```yaml
---
title: 英文标题
lang: en
translations:
  zh: /zh/my-article
  ja: /ja/my-article
  fr: /fr/my-article
---
```

### 条件内容

```yaml
---
title: 特定版本的文档
showForVersions: ["2.0", "2.1", "3.0"]
environment: production
audience: developers
---
```

### 复杂数据结构

```yaml
---
title: 高级示例
metadata:
  tracking:
    google: UA-123456-1
    facebook: 1234567890
  seo:
    canonical: https://example.com/page
    alternates:
      - lang: en
        url: https://example.com/en/page
      - lang: zh
        url: https://example.com/zh/page
  authors:
    - id: 1
      name: 张三
      role: 主要作者
    - id: 2
      name: 李四
      role: 审校
---
```

## 在代码中访问 Frontmatter

### JavaScript (Node.js)

使用 `gray-matter` 库：

```javascript
const fs = require('fs');
const matter = require('gray-matter');

const fileContent = fs.readFileSync('article.md', 'utf8');
const { data, content } = matter(fileContent);

console.log(data.title);  // 访问 frontmatter 数据
console.log(content);     // 访问 Markdown 内容
```

### Python

使用 `python-frontmatter` 库：

```python
import frontmatter

with open('article.md', 'r', encoding='utf-8') as f:
    post = frontmatter.load(f)
    
print(post['title'])    # 访问 frontmatter 数据
print(post.content)     # 访问 Markdown 内容
```

### Ruby

使用 Jekyll 的 YAML 解析：

```ruby
require 'yaml'

content = File.read('article.md')
if content =~ /\A(---\s*\n.*?\n?)^(---\s*$\n?)/m
  frontmatter = YAML.load($1)
  markdown = content.sub(/\A---\s*\n.*?\n---\s*\n/m, '')
  
  puts frontmatter['title']
  puts markdown
end
```

### PHP

```php
<?php
function parseFrontmatter($filePath) {
    $content = file_get_contents($filePath);
    
    preg_match('/^---\s*\n(.*?)\n---\s*\n(.*)$/s', $content, $matches);
    
    $frontmatter = yaml_parse($matches[1]);
    $markdown = $matches[2];
    
    return [
        'data' => $frontmatter,
        'content' => $markdown
    ];
}

$parsed = parseFrontmatter('article.md');
echo $parsed['data']['title'];
?>
```

## 最佳实践

### 1. 保持一致性

在整个项目中使用一致的 frontmatter 字段：

```yaml
# 好的：一致的格式
---
title: 文章标题
date: 2024-01-15
author: 张三
---

# 避免：混乱的字段名
---
title: 文章标题
created_date: 2024-01-15
writer: 张三
---
```

### 2. 使用有意义的字段名

```yaml
# 好的：清晰的字段名
---
publishedDate: 2024-01-15
lastModified: 2024-01-20
---

# 避免：模糊的字段名
---
d1: 2024-01-15
d2: 2024-01-20
---
```

### 3. 合理的默认值

在模板中定义合理的默认值：

```yaml
---
title: {{ title | default: "无标题" }}
author: {{ author | default: "匿名" }}
date: {{ date | default: "now" }}
draft: {{ draft | default: false }}
---
```

### 4. 验证 Frontmatter

创建验证架构：

```javascript
// 使用 Joi 进行验证
const Joi = require('joi');

const frontmatterSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.date().required(),
  author: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  draft: Joi.boolean().default(false)
});

const { error, value } = frontmatterSchema.validate(data);
if (error) {
  console.error('Frontmatter 验证错误:', error.message);
}
```

### 5. 文档化你的 Frontmatter

为你的项目创建 frontmatter 文档：

```markdown
# Frontmatter 字段参考

## 必需字段
- `title` (string): 文档标题
- `date` (YYYY-MM-DD): 发布日期
- `author` (string): 作者名称

## 可选字段
- `tags` (array): 标签列表
- `categories` (array): 分类列表
- `draft` (boolean): 是否为草稿，默认 false

## 示例
\`\`\`yaml
---
title: 我的文章
date: 2024-01-15
author: 张三
tags: [tutorial, markdown]
draft: false
---
\`\`\`
```

## 常见问题

### 问题1：Frontmatter 不被识别

**原因**：确保 frontmatter 在文件的最顶部，前面没有空行或空格。

```markdown
❌ 错误
（空行）
---
title: 我的文章
---

✅ 正确
---
title: 我的文章
---
```

### 问题2：YAML 语法错误

**原因**：YAML 对缩进敏感，使用空格而不是制表符。

```yaml
❌ 错误（使用制表符）
---
author:
	name: 张三
---

✅ 正确（使用空格）
---
author:
  name: 张三
---
```

### 问题3：特殊字符问题

**解决方案**：使用引号包裹包含特殊字符的值。

```yaml
---
title: "我的文章: 完整指南"
description: 'This is a "quoted" text'
---
```

### 问题4：日期格式

**解决方案**：使用 ISO 8601 格式。

```yaml
---
date: 2024-01-15
datetime: 2024-01-15T10:30:00Z
datetime_with_zone: 2024-01-15T10:30:00+08:00
---
```

## 工具推荐

### Frontmatter 解析器
- **gray-matter** (JavaScript): https://github.com/jonschlinkert/gray-matter
- **python-frontmatter** (Python): https://github.com/eyeseast/python-frontmatter
- **jekyll** (Ruby): 内置支持

### 编辑器支持
- **VS Code**: Front Matter CMS 扩展
- **Obsidian**: 内置 frontmatter 支持
- **Typora**: YAML frontmatter 支持

### 验证工具
- **Joi** (JavaScript): 数据验证
- **JSON Schema**: 定义 frontmatter 结构
- **YAML Lint**: YAML 语法检查

## 结论

Frontmatter 是管理 Markdown 文档元数据的强大工具。正确使用它可以让你的内容更加结构化、易于管理，并且与各种工具和平台无缝集成。

## 其他资源

- [YAML 官方规范](https://yaml.org/spec/)
- [Jekyll Frontmatter 文档](https://jekyllrb.com/docs/front-matter/)
- [Hugo Frontmatter 文档](https://gohugo.io/content-management/front-matter/)
- [Gray Matter 文档](https://github.com/jonschlinkert/gray-matter)
