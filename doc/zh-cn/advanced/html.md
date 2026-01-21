---
title: Markdown 嵌入 HTML 指南
description: 详细讲解如何在 Markdown 文档中嵌入 HTML 元素，实现图片、视频、表格等高级排版与功能扩展。
---

# 嵌入 HTML

Markdown 的一个强大特性是可以直接嵌入 HTML 代码，这为文档提供了更丰富的表现力和功能扩展。

## 基本 HTML 嵌入

### 内联 HTML 元素

可以在 Markdown 中直接使用 HTML 标签：

```markdown
这是一个包含 <strong>加粗文本</strong> 和 <em>斜体文本</em> 的段落。

你可以使用 <code>行内代码</code> 或者 <mark>高亮文本</mark>。

这里有一个 <a href="https://www.markdownlang.com" target="_blank">外部链接</a>。
```

**渲染效果**：

这是一个包含 <strong>加粗文本</strong> 和 <em>斜体文本</em> 的段落。

你可以使用 <code>行内代码</code> 或者 <mark>高亮文本</mark>。

这里有一个 <a href="https://www.markdownlang.com" target="_blank">外部链接</a>。

### 块级 HTML 元素

```markdown
<div class="alert alert-info">
  <h4>信息提示</h4>
  <p>这是一个使用 HTML 创建的信息提示框。</p>
</div>

<blockquote style="border-left: 4px solid #007bff; padding-left: 1rem; color: #6c757d;">
  <p>这是一个自定义样式的引用块。</p>
  <footer>—— 引用来源</footer>
</blockquote>
```

**渲染效果**：

<div class="alert alert-info">
  <h4>信息提示</h4>
  <p>这是一个使用 HTML 创建的信息提示框。</p>
</div>

<blockquote style="border-left: 4px solid #007bff; padding-left: 1rem; color: #6c757d;">
  <p>这是一个自定义样式的引用块。</p>
  <footer>—— 引用来源</footer>
</blockquote>

## 常用 HTML 增强

### 图片增强

#### 图片尺寸控制

```markdown
<!-- 使用 HTML 精确控制图片尺寸 -->
<img src="example.jpg" alt="示例图片" width="300" height="200">

<!-- 响应式图片 -->
<img src="example.jpg" alt="响应式图片" style="max-width: 100%; height: auto;">

<!-- 图片对齐 -->
<div align="center">
  <img src="example.jpg" alt="居中图片" width="400">
</div>
```

#### 图片组合展示

```markdown
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="img1.jpg" alt="图片1" style="width: 200px;">
  <img src="img2.jpg" alt="图片2" style="width: 200px;">
  <img src="img3.jpg" alt="图片3" style="width: 200px;">
</div>

<!-- 图片网格 -->
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
  <img src="img1.jpg" alt="图片1" style="width: 100%;">
  <img src="img2.jpg" alt="图片2" style="width: 100%;">
  <img src="img3.jpg" alt="图片3" style="width: 100%;">
  <img src="img4.jpg" alt="图片4" style="width: 100%;">
</div>
```

### 视频和媒体嵌入

#### 嵌入视频

```markdown
<!-- YouTube 视频 -->
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>

<!-- Bilibili 视频 -->
<iframe src="//player.bilibili.com/player.html?bvid=BV_ID&page=1" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        width="100%" 
        height="400">
</iframe>

<!-- HTML5 视频 -->
<video controls width="100%" height="400">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

#### 嵌入音频

```markdown
<!-- HTML5 音频 -->
<audio controls style="width: 100%;">
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<!-- 网易云音乐 -->
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" 
        width="330" height="86" 
        src="//music.163.com/outchain/player?type=2&id=SONG_ID&auto=1&height=66">
</iframe>
```

### 表格增强

#### 复杂表格结构

```markdown
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f8f9fa;">
      <th rowspan="2" style="border: 1px solid #ddd; padding: 8px;">产品</th>
      <th colspan="2" style="border: 1px solid #ddd; padding: 8px;">销售数据</th>
      <th rowspan="2" style="border: 1px solid #ddd; padding: 8px;">总收入</th>
    </tr>
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Q1</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Q2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">产品A</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥100,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥120,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">¥220,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">产品B</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥80,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥90,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">¥170,000</td>
    </tr>
  </tbody>
</table>
```

**渲染效果**：

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f8f9fa;">
      <th rowspan="2" style="border: 1px solid #ddd; padding: 8px;">产品</th>
      <th colspan="2" style="border: 1px solid #ddd; padding: 8px;">销售数据</th>
      <th rowspan="2" style="border: 1px solid #ddd; padding: 8px;">总收入</th>
    </tr>
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Q1</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Q2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">产品A</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥100,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥120,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">¥220,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">产品B</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥80,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥90,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">¥170,000</td>
    </tr>
  </tbody>
</table>

## 表单和交互元素

### 基本表单元素

```markdown
<form>
  <div style="margin-bottom: 1rem;">
    <label for="name" style="display: block; margin-bottom: 0.5rem;">姓名：</label>
    <input type="text" id="name" name="name" 
           style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
  </div>
  
  <div style="margin-bottom: 1rem;">
    <label for="email" style="display: block; margin-bottom: 0.5rem;">邮箱：</label>
    <input type="email" id="email" name="email" 
           style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
  </div>
  
  <div style="margin-bottom: 1rem;">
    <label for="message" style="display: block; margin-bottom: 0.5rem;">消息：</label>
    <textarea id="message" name="message" rows="4" 
              style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
    </textarea>
  </div>
  
  <button type="submit" 
          style="background-color: #007bff; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer;">
    提交
  </button>
</form>
```

### 交互式元素

```markdown
<!-- 折叠内容 -->
<details>
  <summary style="cursor: pointer; font-weight: bold;">点击展开详细信息</summary>
  <div style="padding: 1rem; border: 1px solid #ddd; border-top: none;">
    <p>这里是折叠的详细内容。</p>
    <p>可以包含任何 HTML 内容。</p>
  </div>
</details>

<!-- 进度条 -->
<div style="margin: 1rem 0;">
  <label>项目进度：</label>
  <progress value="32" max="100" style="width: 100%;">32%</progress>
  <span>32%</span>
</div>

<!-- 评分星级 -->
<div style="font-size: 1.5rem; color: #ffc107;">
  ★★★★☆
</div>
```

**渲染效果**：

<details>
  <summary style="cursor: pointer; font-weight: bold;">点击展开详细信息</summary>
  <div style="padding: 1rem; border: 1px solid #ddd; border-top: none;">
    <p>这里是折叠的详细内容。</p>
    <p>可以包含任何 HTML 内容。</p>
  </div>
</details>

<div style="margin: 1rem 0;">
  <label>项目进度：</label>
  <progress value="32" max="100" style="width: 100%;">32%</progress>
  <span>32%</span>
</div>

<div style="font-size: 1.5rem; color: #ffc107;">
  ★★★★☆
</div>

## 布局和样式

### Flexbox 布局

```markdown
<div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background-color: #f8f9fa; border-radius: 8px;">
  <div style="flex: 1;">
    <h4 style="margin: 0;">标题</h4>
    <p style="margin: 0.5rem 0 0 0; color: #6c757d;">这是描述文本</p>
  </div>
  <div>
    <button style="background-color: #28a745; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px;">
      操作
    </button>
  </div>
</div>

<!-- 卡片布局 -->
<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <div style="flex: 1; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
    <h5>卡片 1</h5>
    <p>卡片内容描述</p>
  </div>
  <div style="flex: 1; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
    <h5>卡片 2</h5>
    <p>卡片内容描述</p>
  </div>
  <div style="flex: 1; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
    <h5>卡片 3</h5>
    <p>卡片内容描述</p>
  </div>
</div>
```

### Grid 布局

```markdown
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
  <div style="padding: 1rem; background-color: #e3f2fd; border-radius: 8px;">
    <h6>功能 1</h6>
    <p>功能描述</p>
  </div>
  <div style="padding: 1rem; background-color: #f3e5f5; border-radius: 8px;">
    <h6>功能 2</h6>
    <p>功能描述</p>
  </div>
  <div style="padding: 1rem; background-color: #e8f5e8; border-radius: 8px;">
    <h6>功能 3</h6>
    <p>功能描述</p>
  </div>
  <div style="padding: 1rem; background-color: #fff3e0; border-radius: 8px;">
    <h6>功能 4</h6>
    <p>功能描述</p>
  </div>
</div>
```

## 提示框和警告

### 不同类型的提示框

```markdown
<!-- 信息提示 -->
<div style="padding: 1rem; background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; margin: 1rem 0;">
  <strong>💡 信息：</strong> 这是一个信息提示框。
</div>

<!-- 成功提示 -->
<div style="padding: 1rem; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; margin: 1rem 0;">
  <strong>✅ 成功：</strong> 操作已成功完成。
</div>

<!-- 警告提示 -->
<div style="padding: 1rem; background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; margin: 1rem 0;">
  <strong>⚠️ 警告：</strong> 请注意这个重要提示。
</div>

<!-- 错误提示 -->
<div style="padding: 1rem; background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px; margin: 1rem 0;">
  <strong>❌ 错误：</strong> 发生了一个错误。
</div>
```

**渲染效果**：

<div style="padding: 1rem; background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; margin: 1rem 0;">
  <strong>💡 信息：</strong> 这是一个信息提示框。
</div>

<div style="padding: 1rem; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; margin: 1rem 0;">
  <strong>✅ 成功：</strong> 操作已成功完成。
</div>

<div style="padding: 1rem; background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; margin: 1rem 0;">
  <strong>⚠️ 警告：</strong> 请注意这个重要提示。
</div>

<div style="padding: 1rem; background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px; margin: 1rem 0;">
  <strong>❌ 错误：</strong> 发生了一个错误。
</div>

## 嵌入第三方内容

### 社交媒体

```markdown
<!-- Twitter 嵌入 -->
<blockquote class="twitter-tweet">
  <p lang="zh" dir="ltr">这是一条推特内容...</p>
  <a href="https://twitter.com/user/status/123456789">Tweet Link</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!-- 微博嵌入 -->
<iframe width="100%" height="500" class="share_self" 
        frameborder="0" scrolling="no" 
        src="https://widget.weibo.com/weiboshow/index.php?language=&width=0&height=500&fansRow=1&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=1234567890&verifier=a1b2c3d4">
</iframe>
```

### 在线服务

```markdown
<!-- CodePen 嵌入 -->
<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Animation Example" 
        src="https://codepen.io/user/embed/EXAMPLE?default-tab=html%2Cresult" 
        frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

<!-- JSFiddle 嵌入 -->
<iframe width="100%" height="300" 
        src="//jsfiddle.net/user/example/embedded/js,html,css,result/" 
        allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0">
</iframe>

<!-- Google Maps 嵌入 -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0!2d116.4074!3d39.9042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU0JzE1LjEiTiAxMTbCsDI0JzI2LjYiRQ!5e0!3m2!1szh-CN!2scn!4v1234567890" 
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
</iframe>
```

## 自定义组件

### 标签和徽章

```markdown
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #007bff; color: white; border-radius: 3px;">
  前端
</span>
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #28a745; color: white; border-radius: 3px;">
  React
</span>
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #ffc107; color: black; border-radius: 3px;">
  JavaScript
</span>
```

**渲染效果**：

<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #007bff; color: white; border-radius: 3px;">
  前端
</span>
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #28a745; color: white; border-radius: 3px;">
  React
</span>
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #ffc107; color: black; border-radius: 3px;">
  JavaScript
</span>

### 时间线

```markdown
<div style="position: relative; padding-left: 2rem;">
  <div style="position: absolute; left: 0.5rem; top: 0; bottom: 0; width: 2px; background-color: #ddd;"></div>
  
  <div style="position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; left: -1.5rem; width: 1rem; height: 1rem; background-color: #007bff; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #007bff;"></div>
    <h5 style="margin: 0 0 0.5rem 0;">2023年12月</h5>
    <p style="margin: 0;">项目启动，完成需求分析和技术选型。</p>
  </div>
  
  <div style="position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; left: -1.5rem; width: 1rem; height: 1rem; background-color: #28a745; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #28a745;"></div>
    <h5 style="margin: 0 0 0.5rem 0;">2024年1月</h5>
    <p style="margin: 0;">完成核心功能开发，进入测试阶段。</p>
  </div>
  
  <div style="position: relative;">
    <div style="position: absolute; left: -1.5rem; width: 1rem; height: 1rem; background-color: #6c757d; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #6c757d;"></div>
    <h5 style="margin: 0 0 0.5rem 0;">2024年2月</h5>
    <p style="margin: 0;">项目上线部署，开始运营推广。</p>
  </div>
</div>
```

## 注意事项和限制

### HTML 安全性

```markdown
<!-- ✅ 安全的 HTML -->
<div style="color: blue;">安全的样式</div>
<strong>加粗文本</strong>
<em>斜体文本</em>

<!-- ❌ 可能被过滤的内容 -->
<script>alert('不安全的脚本')</script>
<iframe src="javascript:alert('XSS')"></iframe>
<object data="malicious.swf"></object>
```

### Markdown 解析器兼容性

不同的 Markdown 解析器对 HTML 的支持程度不同：

| 解析器 | HTML 支持 | 限制 |
|--------|-----------|------|
| **GitHub** | 部分支持 | 过滤脚本和危险标签 |
| **GitLab** | 部分支持 | 安全性过滤 |
| **VitePress** | 完全支持 | 依赖配置 |
| **Jekyll** | 完全支持 | 可配置 |
| **Hugo** | 部分支持 | 需要启用 |

### 最佳实践建议

```markdown
✅ 推荐做法：
1. 使用语义化的 HTML 标签
2. 添加适当的样式增强
3. 确保内容的可访问性
4. 保持代码整洁和可维护

❌ 避免做法：
1. 过度使用复杂的 HTML
2. 嵌入不安全的脚本
3. 忽略移动端适配
4. 使用已废弃的标签
```

## 实际应用场景

### 1. 产品文档

```markdown
<div style="display: flex; align-items: center; margin: 2rem 0; padding: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px;">
  <div style="flex: 1;">
    <h2 style="margin: 0 0 0.5rem 0;">🚀 产品特性</h2>
    <p style="margin: 0; opacity: 0.9;">体验我们全新的功能和改进</p>
  </div>
  <div>
    <button style="background: rgba(255,255,255,0.2); border: 2px solid white; color: white; padding: 0.75rem 1.5rem; border-radius: 25px; cursor: pointer; backdrop-filter: blur(10px);">
      了解更多
    </button>
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  
  <div style="background: white; border-radius: 10px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-left: 4px solid #007bff;">
    <h4 style="color: #007bff; margin: 0 0 1rem 0;">⚡ 高性能</h4>
    <p style="color: #666; line-height: 1.6;">优化的算法和架构，提供极致的性能体验。</p>
  </div>
  
  <div style="background: white; border-radius: 10px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-left: 4px solid #28a745;">
    <h4 style="color: #28a745; margin: 0 0 1rem 0;">🔒 安全可靠</h4>
    <p style="color: #666; line-height: 1.6;">企业级安全保障，数据加密传输和存储。</p>
  </div>
  
  <div style="background: white; border-radius: 10px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-left: 4px solid #ffc107;">
    <h4 style="color: #e68900; margin: 0 0 1rem 0;">🎨 易于使用</h4>
    <p style="color: #666; line-height: 1.6;">直观的用户界面，简化的操作流程。</p>
  </div>
  
</div>
```

### 2. API 文档

```markdown
<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <div style="display: flex; align-items: center; margin-bottom: 1rem;">
    <span style="background: #28a745; color: white; padding: 0.25rem 0.75rem; border-radius: 4px; font-weight: bold; font-size: 0.875rem;">POST</span>
    <code style="margin-left: 1rem; flex: 1; background: #e9ecef; padding: 0.5rem; border-radius: 4px;">/api/v1/users</code>
  </div>
  
  <h4 style="margin: 0 0 1rem 0;">创建用户</h4>
  <p style="color: #6c757d; margin: 0;">创建一个新的用户账户</p>
</div>

<details style="margin: 1rem 0;">
  <summary style="cursor: pointer; font-weight: bold; padding: 0.5rem; background: #e9ecef; border-radius: 4px;">
    📋 请求参数
  </summary>
  <div style="padding: 1rem; border: 1px solid #ddd; border-top: none;">
    
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 0.5rem; text-align: left;">参数</th>
      <th style="border: 1px solid #ddd; padding: 0.5rem; text-align: left;">类型</th>
      <th style="border: 1px solid #ddd; padding: 0.5rem; text-align: left;">必需</th>
      <th style="border: 1px solid #ddd; padding: 0.5rem; text-align: left;">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 0.5rem;"><code>name</code></td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">string</td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">✅</td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">用户姓名</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 0.5rem;"><code>email</code></td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">string</td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">✅</td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">邮箱地址</td>
    </tr>
  </tbody>
</table>

  </div>
</details>
```

### 3. 团队介绍

```markdown
<div style="text-align: center; margin: 3rem 0;">
  <h2 style="margin-bottom: 2rem; color: #333;">👥 我们的团队</h2>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto;">
    
    <div style="text-align: center;">
      <img src="avatar1.jpg" alt="张三" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid #007bff;">
      <h4 style="margin: 0 0 0.5rem 0; color: #333;">张三</h4>
      <p style="color: #007bff; font-weight: bold; margin: 0 0 0.5rem 0;">前端工程师</p>
      <p style="color: #666; font-size: 0.9rem; line-height: 1.4;">专注于React和Vue开发，热爱用户体验设计。</p>
      <div style="margin-top: 1rem;">
        <a href="#" style="color: #007bff; text-decoration: none; margin: 0 0.5rem;">GitHub</a>
        <a href="#" style="color: #007bff; text-decoration: none; margin: 0 0.5rem;">LinkedIn</a>
      </div>
    </div>
    
    <div style="text-align: center;">
      <img src="avatar2.jpg" alt="李四" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid #28a745;">
      <h4 style="margin: 0 0 0.5rem 0; color: #333;">李四</h4>
      <p style="color: #28a745; font-weight: bold; margin: 0 0 0.5rem 0;">后端工程师</p>
      <p style="color: #666; font-size: 0.9rem; line-height: 1.4;">精通Node.js和Python，专注于系统架构设计。</p>
      <div style="margin-top: 1rem;">
        <a href="#" style="color: #28a745; text-decoration: none; margin: 0 0.5rem;">GitHub</a>
        <a href="#" style="color: #28a745; text-decoration: none; margin: 0 0.5rem;">LinkedIn</a>
      </div>
    </div>
    
  </div>
</div>
```

## 相关语法

- [基本语法概述](/zh/basic/overview) - Markdown 基础
- [扩展语法](/zh/extended/) - Markdown 扩展功能
- [最佳实践](/zh/advanced/best-practices) - 文档编写建议

## 工具和资源

### HTML/CSS 框架

- **Bootstrap**: 快速原型和响应式设计
- **Tailwind CSS**: 实用程序优先的CSS框架
- **Bulma**: 现代CSS框架
- **Foundation**: 响应式前端框架

### 在线工具

- **CodePen**: 在线HTML/CSS/JS编辑器
- **JSFiddle**: 代码片段测试
- **CSS Grid Generator**: CSS网格布局生成器
- **Flexbox Froggy**: Flexbox学习游戏

### 浏览器开发工具

- **Chrome DevTools**: 元素检查和样式调试
- **Firefox Developer Tools**: 网格和Flexbox调试
- **Safari Web Inspector**: macOS/iOS调试
- **Edge DevTools**: 可访问性检查

记住，嵌入HTML虽然强大，但要适度使用，保持文档的可读性和维护性。 