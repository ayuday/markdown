---
title: Markdown Image Syntax
description: A detailed introduction to inserting, path types, layout, and optimization tips for images in Markdown to enrich your document's visual presentation.
---

# Image Syntax

Images are important visual elements in documentation. Markdown provides a concise syntax for inserting and managing images.

## Basic Image Syntax

### Inline Images

Use the format `![alt text](image URL)`:

```markdown
![Markdown Logo](https://www.markdownlang.com/markdown-logo.png)
```

### Images with Title

Add an optional title:

```markdown
![Markdown Logo](https://www.markdownlang.com/markdown-logo.png "Official Markdown Logo")
```

When you hover over the image, the title text will be displayed.

## Reference-style Images

### Basic Reference Style

```markdown
![alt text][image-ref]

[image-ref]: https://www.markdownlang.com/image.jpg "Optional Title"
```

### Shortcut Reference Style

When the reference label is the same as the alt text:

```markdown
![Markdown Logo][]

[Markdown Logo]: https://www.markdownlang.com/markdown-logo.png
```

## Image Path Types

### Absolute URL

```markdown
![Web Image](https://www.markdownlang.com/images/photo.jpg)
```

### Relative Path

```markdown
![Local Image](./images/photo.jpg)
![Parent Directory Image](../images/photo.jpg)
![Same Directory Image](photo.jpg)
```

### Root-relative Path

```markdown
![Root Directory Image](/images/photo.jpg)
```

## Advanced Image Features

### Image Links

Wrap an image in a link:

```markdown
[![Image Description](image.jpg)](https://www.markdownlang.com)
```

**Rendered Output**: Clicking the image will jump to the specified link.

### Controlling Images with HTML

#### Specify Size

```markdown
<img src="image.jpg" alt="Description" width="300" height="200">
```

#### Image Alignment

```markdown
<!-- Center align -->
<div align="center">
  <img src="image.jpg" alt="Centered Image" width="400">
</div>

<!-- Right align -->
<div align="right">
  <img src="image.jpg" alt="Right Aligned Image" width="300">
</div>
```

#### Responsive Images

```markdown
<img src="image.jpg" alt="Responsive Image" style="max-width: 100%; height: auto;">
```

## Image Combination Display

### Side-by-side Display

```markdown
<img src="img1.jpg" width="45%"> <img src="img2.jpg" width="45%">
```

### Image Grid

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

### Mixed Image and Text

```markdown
<img src="avatar.jpg" align="left" width="100" style="margin-right: 10px;">

This is a paragraph of text with the image floating on the left. The text will wrap around the image, creating a mixed layout. This can be used for personal profiles or product introductions.

<div style="clear: both;"></div>
```

## Best Practices for Alt Text

### Descriptive Text

```markdown
✅ Recommended: Describe the image content
![A user working on a laptop in a workspace](workspace.jpg)

❌ Not recommended: Meaningless text
![Image](workspace.jpg)
![Click here](workspace.jpg)
```

### Functional Images

```markdown
✅ Recommended: Explain the image's function
![Search Button](search-icon.png)
![GitHub Repository Link](github-logo.png)

❌ Not recommended: Repeating surrounding text
Click ![Click](search-icon.png) to search
```

### Decorative Images

```markdown
✅ Recommended: Use empty alt text for decorative images
![](decorative-border.png)

❌ Not recommended: Unnecessary description
![Decorative border pattern](decorative-border.png)
```

## Common Image Formats

### Web-friendly Formats

| Format | Usage | Features |
|--------|-------|----------|
| **JPEG** | Photos, complex images | Small file, lossy compression |
| **PNG** | Icons, transparent backgrounds | Lossless compression, supports transparency |
| **WebP** | Modern web images | Smaller size, better quality |
| **SVG** | Vector graphics, icons | Scalable, small file |
| **GIF** | Simple animations | Supports animation, limited colors |

### Format Selection Advice

```markdown
✅ Recommended usage:
![Photo](photo.jpg)           ← JPEG for photos
![Icon](icon.png)             ← PNG for icons
![Vector](logo.svg)           ← SVG for vector graphics
![Animation](animation.gif)   ← GIF for simple animations

❌ Not recommended:
![Icon](icon.jpg)             ← JPEG not suitable for icons
![Photo](photo.png)           ← PNG files can be large
```

## Image Optimization Tips

### File Size Optimization

1. **Choose the right resolution**
   ```markdown
   <!-- Recommended for web display -->
   <img src="image.jpg" width="800" alt="Description">  ← 2x image for high-DPI screens
   ```

2. **Use appropriate compression**
   ```markdown
   <!-- JPEG quality: 70-80% recommended -->
   ![Optimized Photo](optimized-photo.jpg)
   ```

3. **Lazy Loading**
   ```markdown
   <img src="image.jpg" alt="Description" loading="lazy">
   ```

### Using CDN and Image Hosting

```markdown
<!-- Use CDN for acceleration -->
![CDN Image](https://cdn.example.com/images/photo.jpg)

<!-- Image hosting service -->
![Hosted Image](https://img.example.com/upload/photo.jpg)
```

## Common Errors and Solutions

### 1. Path Error

```markdown
❌ Error:
![Image](images/photo.jpg)    ← Path does not exist

✅ Correct:
![Image](./images/photo.jpg)  ← Check file path
![Image](/assets/photo.jpg)   ← Use correct relative path
```

### 2. Missing Alt Text

```markdown
❌ Error:
![](important-chart.jpg)     ← Important image missing description

✅ Correct:
![2023 Sales Data Comparison Chart](important-chart.jpg)
```

### 3. Size Control Issue

```markdown
❌ Issue: Image too large
![Large Image](huge-image.jpg)   ← May break layout

✅ Solution:
<img src="huge-image.jpg" alt="Large Image" style="max-width: 100%;">
```

### 4. Image Link Issue

```markdown
❌ Error:
[![Image](image.jpg)(https://www.markdownlang.com)  ← Syntax error

✅ Correct:
[![Image](image.jpg)](https://www.markdownlang.com)
```

## Practical Scenarios

### 1. Technical Documentation

```markdown
## Installation Steps

1. Download the installer

   ![Download Page Screenshot](download-page.png)

2. Run the installer

   ![Installer Wizard Interface](installer-wizard.png)

3. Complete the installation

   ![Installation Complete Confirmation](installation-complete.png)
```

### 2. Product Showcase

```markdown
## Product Features

### Modern UI Design

<div align="center">
  <img src="ui-screenshot.png" alt="Product UI Screenshot" width="600">
  <p><em>Clean and intuitive user interface</em></p>
</div>

### Multi-platform Support

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

### 3. Personal Profile

```markdown
## About Me

<img src="avatar.jpg" align="right" width="150" style="margin-left: 20px; border-radius: 50%;">

Hello! I am a full-stack developer focusing on modern web technologies. I have over 5 years of development experience and am familiar with various programming languages and frameworks.

### Skill Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

<div style="clear: both;"></div>
```

### 4. Tutorial Instructions

```markdown
## Code Editor Configuration

Follow these steps to configure your development environment:

1. **Open Settings**

   ![VS Code Settings Entry](vscode-settings-1.png)

2. **Search for Configuration Items**

   ![Search Configuration](vscode-settings-2.png)

3. **Modify Configuration Value**

   ![Modify Configuration](vscode-settings-3.png)

> 💡 **Tip**: Restart the editor after configuration to ensure the settings take effect.
```

## Accessibility

### Write Meaningful Alt Text

```markdown
✅ Recommended: Detailed description
![Bar chart showing 15% revenue growth in Q3 2023 with a red upward arrow](revenue-chart-q3.png)

❌ Not recommended: Simple repetition
![Chart](revenue-chart-q3.png)
```

### Use Structured Descriptions

```markdown
![Team group photo: Front row from left Zhang San, Li Si, Wang Wu; back row from left Zhao Liu, Sun Qi, Zhou Ba](team-photo.jpg)
```

## HTML Output

Markdown images are converted to HTML:

```markdown
![Alt Text](image.jpg "Image Title")
```

Converted to:

```html
<img src="image.jpg" alt="Alt Text" title="Image Title">
```

Reference-style images:

```markdown
![Alt Text][ref]

[ref]: image.jpg "Title"
```

Converted to:

```html
<img src="image.jpg" alt="Alt Text" title="Title">
```

## Related Syntax

- [Link Syntax](/basic/links) - Creating links
- [HTML Syntax](/advanced/html) - Embedding HTML
- [Fenced Code Blocks](/extended/fenced-code-blocks) - Code highlighting

## Practice

Try creating the following:

1. A product showcase page with multiple product images
2. A technical tutorial with step-by-step screenshots and explanations
3. A team introduction page with member avatars and information
4. A comparison chart showing data trends

## Recommended Tools

### Image Editing Tools

- **Online Tools**: Canva, Figma, Photopea
- **Desktop Software**: GIMP, Paint.NET, Adobe Photoshop
- **Screenshot Tools**: Snipaste, Lightshot, built-in screenshot tools

### Image Optimization Tools

- **Compression Tools**: TinyPNG, ImageOptim, Squoosh
- **Format Conversion**: CloudConvert, Online-Convert
- **Batch Processing**: ImageMagick, XnConvert

### Image Hosting Services

- **Free Services**: GitHub, Gitee, sm.ms
- **Paid Services**: Qiniu Cloud, Alibaba Cloud OSS, Tencent Cloud COS
- **CDN Acceleration**: jsDelivr, Cloudflare, AWS CloudFront 