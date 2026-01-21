---
title: Markdown 标题ID扩展
description: 介绍 Markdown 标题自定义ID语法、应用场景及兼容性。
---

# 标题 ID

标题 ID 是 Markdown 的扩展功能，允许为标题添加自定义标识符，便于创建精确链接和控制文档结构。

## 基本语法

### 添加标题 ID

标题 ID 使用大括号语法，放在标题文本后面：

```markdown
## 我的标题 {#custom-id}
```

**渲染效果**：

HTML 输出会将这个自定义 ID 添加到标题元素上：

```html
<h2 id="custom-id">我的标题</h2>
```

### 多级标题 ID

各级标题都可以添加自定义 ID：

```markdown
# 一级标题 {#first-level}

## 二级标题 {#second-level}

### 三级标题 {#third-level}

#### 四级标题 {#fourth-level}
```

## 应用场景

### 创建锚点链接

有了自定义 ID，您可以创建指向文档内特定部分的链接：

```markdown
[点击跳转到我的标题](#custom-id)

...其他内容...

## 我的标题 {#custom-id}
```

**渲染效果**：

点击链接将会直接跳转到带有 `custom-id` 的标题处。

### 外部链接到文档特定部分

自定义 ID 也便于从外部文档链接到特定内容：

```markdown
[链接到其他文档的特定章节](other-doc.html#specific-section)
```

### URL 分享特定章节

带有 ID 的标题可以通过 URL 分享给他人，指向文档的特定章节：

```
https://www.markdownlang.com/documentation.html#installation-guide
```

## 高级用法

### 多词标题 ID

当标题包含多个词时，标题 ID 通常使用连字符连接：

```markdown
## 安装和配置指南 {#installation-and-configuration}
```

### 目录生成和标题 ID

许多 Markdown 处理器会自动根据标题内容生成 ID。通过自定义 ID，您可以确保目录链接不受标题内容变化的影响：

```markdown
## 入门指南 {#getting-started}
```

即使稍后将标题改为"开始使用"，链接仍然有效，因为 ID 保持不变。

### 国际化和非英文字符

对于非英文标题，自定义 ID 特别有用，因为它提供了稳定的英文标识符：

```markdown
## 安装说明 {#installation}

## 使用方法 {#usage}

## 常见问题 {#faq}
```

## 兼容性和实现差异

### 不同平台支持情况

| 平台/工具 | 标题 ID 支持 | 语法 |
|----------|------------|------|
| GitHub Markdown | ✅ | `{#id}` |
| GitLab Markdown | ✅ | `{#id}` |
| Jekyll（kramdown） | ✅ | `{:#id}` 或 `{#id}` |
| Hugo | ✅ | `{#id}` |
| CommonMark | ❌ | 不支持 |
| VitePress | ✅ | `{#id}` |
| Pandoc | ✅ | `{#id}` |

### 自动 ID 生成规则

当没有提供自定义 ID 时，大多数 Markdown 处理器会自动从标题文本生成 ID：

1. 转换为小写字母
2. 删除或替换特殊字符
3. 用连字符替换空格
4. 删除重复连字符
5. 确保 ID 唯一性（通常通过添加数字后缀）

例如：

| 标题 | 自动生成的 ID |
|------|-------------|
| `## Getting Started` | `#getting-started` |
| `## FAQ & Help` | `#faq-help` |
| `## 快速入门` | `#快速入门` 或 `#section-1`（因平台而异） |

## 最佳实践

### 标题 ID 命名规范

```markdown
✅ 推荐做法：

1. **使用简洁描述性ID**：
   - `{#installation}`
   - `{#api-reference}`
   - `{#troubleshooting}`

2. **保持一致的命名风格**：
   - 全部小写
   - 使用连字符分隔词语
   - 避免使用下划线或驼峰命名

3. **保持ID稳定性**：
   - 避免频繁更改ID
   - 在修改标题文本时保留原ID

❌ 避免做法：

1. 使用特殊字符（如 `!@#$%^&*()`）
2. 使用非描述性ID（如 `{#section1}`）
3. 创建过长的ID
4. 使用空格或标点符号
```

### 文档结构与标题 ID

对于大型文档，建议为主要章节使用规范化的 ID，便于导航：

```markdown
# 产品文档 {#product-docs}

## 介绍 {#introduction}

## 安装 {#installation}

### Windows 安装 {#installation-windows}

### macOS 安装 {#installation-macos}

### Linux 安装 {#installation-linux}

## 配置 {#configuration}

## API 参考 {#api-reference}

## 常见问题 {#faq}
```

## 实际应用示例

### 技术文档中的标题 ID

技术文档中的标题 ID 可以帮助用户直接链接到特定章节：

```markdown
# API 文档 {#api-documentation}

## 认证 {#authentication}

### 获取 API 密钥 {#get-api-key}

### OAuth 认证 {#oauth}

## 端点 {#endpoints}

### 用户端点 {#endpoints-users}

### 产品端点 {#endpoints-products}
```

### 学术论文中的标题 ID

学术论文可以使用标题 ID 创建引用和交叉引用：

```markdown
# 研究方法 {#methodology}

如[研究结果](#results)所示，我们的方法在多个测试案例中表现良好。

...

# 研究结果 {#results}

本节展示我们在[研究方法](#methodology)中描述的实验结果。
```

## 常见问题解决

### 标题 ID 不生效

如果您的标题 ID 不生效：

1. 检查平台是否支持自定义标题 ID
2. 确认语法是否正确（通常是 `{#id}`）
3. 验证 ID 中是否包含无效字符
4. 尝试使用不同的 Markdown 处理器

### ID 冲突

如果同一文档中有多个相同的 ID，可能会导致链接行为不可预测：

```markdown
## 问题 {#issue} <!-- 第一个ID -->

...

## 常见问题 {#issue} <!-- 重复的ID，可能导致问题 -->
```

避免 ID 冲突的解决方案：

```markdown
## 问题 {#issue-description}

...

## 常见问题 {#common-issues}
```

### 空格和特殊字符

有些 Markdown 处理器对 ID 中的空格和特殊字符处理不一致：

```markdown
<!-- 可能在某些平台上有问题 -->
## 高级设置 {#advanced settings}

<!-- 更安全的方式 -->
## 高级设置 {#advanced-settings}
```

## 相关语法

- [链接](/zh/basic/links) - 基础链接语法
- [目录](/zh/) - 自动生成目录
- [脚注](/zh/extended/footnotes) - 添加引用和说明

## 工具和插件

### 自动生成目录

许多工具可以根据标题和标题 ID 自动生成目录：

```markdown
[[toc]]

# 第一章 {#chapter-1}

## 1.1 节 {#section-1-1}

# 第二章 {#chapter-2}
```

### 标题 ID 检查工具

- **markdownlint**: 可配置为检查标题 ID 的一致性
- **remark-lint**: 提供标题 ID 的检查和自动修复
- **markdown-toc**: 自动生成带有链接的目录

---

标题 ID 是提高 Markdown 文档可用性和可访问性的重要工具。通过使用标准化的标题 ID，您可以创建稳定的链接结构，便于导航和引用，使您的文档更加专业和易于使用。 