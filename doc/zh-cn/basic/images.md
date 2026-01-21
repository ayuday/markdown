---
title: Markdown 图片语法
description: 详细介绍 Markdown 中图片插入、路径、排版与优化技巧，助你丰富文档视觉表现。
---

# 图片语法

图片是文档中的重要视觉元素。Markdown 提供了简洁的语法来插入和管理图片。

## 基本图片语法

### 内联式图片

使用 `![替代文本](图片链接)` 的格式：

```markdown
![Markdown Logo](https://www.markdownlang.com/markdown-logo.png)
```

### 带标题的图片

添加可选的标题信息：

```markdown
![Markdown Logo](https://www.markdownlang.com/markdown-logo.png "Markdown 官方标志")
```

当鼠标悬停在图片上时，会显示标题文本。

## 引用式图片

### 基本引用式

```markdown
![替代文本][图片引用标识]

[图片引用标识]: https://www.markdownlang.com/image.jpg "可选标题"
```

### 简化引用式

当引用标识与替代文本相同时：

```markdown
![Markdown Logo][]

[Markdown Logo]: https://www.markdownlang.com/markdown-logo.png
```

## 图片路径类型

### 绝对URL

```markdown
![网络图片](https://www.markdownlang.com/images/photo.jpg)
```

### 相对路径

```markdown
![本地图片](./images/photo.jpg)
![上级目录图片](../images/photo.jpg)
![同级图片](photo.jpg)
```

### 绝对路径

```markdown
![根目录图片](/images/photo.jpg)
```

## 高级图片功能

### 图片链接

将图片包装在链接中：

```markdown
[![图片描述](image.jpg)](https://www.markdownlang.com)
```

**渲染效果**：点击图片会跳转到指定链接。

### 使用HTML控制图片

#### 指定尺寸

```markdown
<img src="image.jpg" alt="描述文本" width="300" height="200">
```

#### 图片对齐

```markdown
<!-- 居中对齐 -->
<div align="center">
  <img src="image.jpg" alt="居中图片" width="400">
</div>

<!-- 右对齐 -->
<div align="right">
  <img src="image.jpg" alt="右对齐图片" width="300">
</div>
```

#### 响应式图片

```markdown
<img src="image.jpg" alt="响应式图片" style="max-width: 100%; height: auto;">
```

## 图片组合显示

### 并排显示

```markdown
<img src="img1.jpg" width="45%"> <img src="img2.jpg" width="45%">
```

### 图片网格

```markdown
<table>
  <tr>
    <td><img src="img1.jpg" width="200"></td>
    <td><img src="img2.jpg" width="200"></td>
  </tr>
  <tr>
    <td><img src="img3.jpg" width="200"></td>
    <td><img src="img4.jpg" width="200"></td>
  </tr>
</table>
```

### 图片与文字混排

```markdown
<img src="avatar.jpg" align="left" width="100" style="margin-right: 10px;">

这是一段文字，图片在左侧浮动。文字会环绕在图片周围，形成图文混排的效果。可以用来制作个人简介或产品介绍等内容。

<div style="clear: both;"></div>
```

## 替代文本最佳实践

### 描述性文本

```markdown
✅ 推荐：描述图片内容
![用户在笔记本电脑上编写代码的工作场景](workspace.jpg)

❌ 不推荐：无意义文本
![图片](workspace.jpg)
![点击这里](workspace.jpg)
```

### 功能性图片

```markdown
✅ 推荐：说明图片作用
![搜索按钮](search-icon.png)
![GitHub仓库链接](github-logo.png)

❌ 不推荐：重复周围文字
点击 ![点击](search-icon.png) 搜索
```

### 装饰性图片

```markdown
✅ 推荐：装饰性图片使用空替代文本
![](decorative-border.png)

❌ 不推荐：不必要的描述
![装饰性花边图案](decorative-border.png)
```

## 常见图片格式

### 网络友好格式

| 格式 | 用途 | 特点 |
|------|------|------|
| **JPEG** | 照片、复杂图像 | 文件小，有损压缩 |
| **PNG** | 图标、透明背景 | 无损压缩，支持透明 |
| **WebP** | 现代网页图片 | 更小体积，更好质量 |
| **SVG** | 矢量图形、图标 | 可缩放，文件小 |
| **GIF** | 简单动画 | 支持动画，颜色有限 |

### 格式选择建议

```markdown
✅ 推荐用法：
![照片](photo.jpg)           ← JPEG适合照片
![图标](icon.png)            ← PNG适合图标
![矢量图](logo.svg)          ← SVG适合矢量图
![动图](animation.gif)       ← GIF适合简单动画

❌ 不推荐：
![图标](icon.jpg)            ← JPEG不适合图标
![照片](photo.png)           ← PNG文件会很大
```

## 图片优化技巧

### 文件大小优化

1. **选择合适的分辨率**
   ```markdown
   <!-- 网页显示建议 -->
   <img src="image.jpg" width="800" alt="描述">  ← 2倍图用于高清屏
   ```

2. **使用适当的压缩**
   ```markdown
   <!-- JPEG质量建议：70-80% -->
   ![优化后的照片](optimized-photo.jpg)
   ```

3. **懒加载**
   ```markdown
   <img src="image.jpg" alt="描述" loading="lazy">
   ```

### CDN和图床使用

```markdown
<!-- 使用CDN加速 -->
![CDN图片](https://cdn.example.com/images/photo.jpg)

<!-- 图床服务 -->
![图床图片](https://img.example.com/upload/photo.jpg)
```

## 常见错误和解决方案

### 1. 路径错误

```markdown
❌ 错误：
![图片](images/photo.jpg)    ← 路径不存在

✅ 正确：
![图片](./images/photo.jpg)  ← 确认文件路径
![图片](/assets/photo.jpg)   ← 使用正确的相对路径
```

### 2. 替代文本缺失

```markdown
❌ 错误：
![](important-chart.jpg)     ← 重要图片缺少描述

✅ 正确：
![2023年销售数据对比图表](important-chart.jpg)
```

### 3. 尺寸控制问题

```markdown
❌ 问题：图片过大
![大图片](huge-image.jpg)   ← 可能撑破布局

✅ 解决：
<img src="huge-image.jpg" alt="大图片" style="max-width: 100%;">
```

### 4. 链接图片问题

```markdown
❌ 错误：
[![图片](image.jpg)(https://www.markdownlang.com)  ← 语法错误

✅ 正确：
[![图片](image.jpg)](https://www.markdownlang.com)
```

## 实际应用场景

### 1. 技术文档

```markdown
## 安装步骤

1. 下载安装包

   ![下载页面截图](download-page.png)

2. 运行安装程序

   ![安装向导界面](installer-wizard.png)

3. 完成安装

   ![安装完成确认](installation-complete.png)
```

### 2. 产品展示

```markdown
## 产品特性

### 现代化界面设计

<div align="center">
  <img src="ui-screenshot.png" alt="产品界面截图" width="600">
  <p><em>简洁直观的用户界面</em></p>
</div>

### 多平台支持

<table>
  <tr>
    <td align="center">
      <img src="windows-logo.png" width="60"><br>
      <strong>Windows</strong>
    </td>
    <td align="center">
      <img src="mac-logo.png" width="60"><br>
      <strong>macOS</strong>
    </td>
    <td align="center">
      <img src="linux-logo.png" width="60"><br>
      <strong>Linux</strong>
    </td>
  </tr>
</table>
```

### 3. 个人简介

```markdown
## 关于我

<img src="avatar.jpg" align="right" width="150" style="margin-left: 20px; border-radius: 50%;">

你好！我是一名全栈开发者，专注于现代Web技术。拥有5年以上的开发经验，熟悉多种编程语言和框架。

### 技能堆栈

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

<div style="clear: both;"></div>
```

### 4. 教程说明

```markdown
## 代码编辑器配置

按照以下步骤配置您的开发环境：

1. **打开设置**

   ![VS Code设置入口](vscode-settings-1.png)

2. **搜索配置项**

   ![搜索配置](vscode-settings-2.png)

3. **修改配置值**

   ![修改配置](vscode-settings-3.png)

> 💡 **提示**：配置完成后重启编辑器以确保设置生效。
```

## 无障碍访问

### 编写有意义的替代文本

```markdown
✅ 推荐：详细描述
![包含红色上升箭头的2023年第三季度营收增长15%的柱状图](revenue-chart-q3.png)

❌ 不推荐：简单重复
![图表](revenue-chart-q3.png)
```

### 使用结构化描述

```markdown
![员工团队合影：前排左起张三、李四、王五，后排左起赵六、孙七、周八](team-photo.jpg)
```

## HTML输出

Markdown图片转换为HTML：

```markdown
![替代文本](image.jpg "图片标题")
```

转换为：

```html
<img src="image.jpg" alt="替代文本" title="图片标题">
```

引用式图片：

```markdown
![替代文本][ref]

[ref]: image.jpg "标题"
```

转换为：

```html
<img src="image.jpg" alt="替代文本" title="标题">
```

## 相关语法

- [链接语法](/zh/basic/links) - 创建链接
- [HTML语法](/zh/advanced/html) - 嵌入HTML
- [围栏代码块](/zh/extended/fenced-code-blocks) - 代码高亮

## 练习

尝试创建以下内容：

1. 一个产品展示页面，包含多张产品图片
2. 一个技术教程，包含步骤截图和说明
3. 一个团队介绍页面，包含成员头像和信息
4. 一个对比图表，展示数据变化趋势

## 工具推荐

### 图片编辑工具

- **在线工具**：Canva、Figma、Photopea
- **桌面软件**：GIMP、Paint.NET、Adobe Photoshop
- **截图工具**：Snipaste、Lightshot、系统自带截图

### 图片优化工具

- **压缩工具**：TinyPNG、ImageOptim、Squoosh
- **格式转换**：CloudConvert、Online-Convert
- **批量处理**：ImageMagick、XnConvert

### 图床服务

- **免费服务**：GitHub、Gitee、sm.ms
- **付费服务**：七牛云、阿里云OSS、腾讯云COS
- **CDN加速**：jsDelivr、Cloudflare、AWS CloudFront 