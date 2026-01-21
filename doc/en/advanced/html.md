---
title: Markdown Embedding HTML, Embedding HTML in Markdown
keywords: Markdown Embedding HTML, Embedding HTML in Markdown
description: A detailed guide on how to embed HTML elements in Markdown documents to achieve advanced layouts and feature extensions such as images, videos, and tables.
---

# Markdown Embedding HTML

One of Markdown's powerful features is the ability to directly embed HTML code, providing richer expressiveness and functional extensions for your documents.

## Markdown Basic HTML Embedding

### Markdown Inline HTML Elements

You can use HTML tags directly in Markdown:

```markdown
This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.

You can use <code>inline code</code> or <mark>highlighted text</mark>.

Here is an <a href="https://www.markdownlang.com" target="_blank">external link</a>.
```

**Rendered Output:**

This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.

You can use <code>inline code</code> or <mark>highlighted text</mark>.

Here is an <a href="https://www.markdownlang.com" target="_blank">external link</a>.

### Markdown Block-level HTML Elements

```markdown
<div class="alert alert-info">
  <h4>Info</h4>
  <p>This is an info alert box created with HTML.</p>
</div>

<blockquote style="border-left: 4px solid #007bff; padding-left: 1rem; color: #6c757d;">
  <p>This is a custom styled blockquote.</p>
  <footer>—— Source</footer>
</blockquote>
```

**Rendered Output:**

<div class="alert alert-info">
  <h4>Info</h4>
  <p>This is an info alert box created with HTML.</p>
</div>

<blockquote style="border-left: 4px solid #007bff; padding-left: 1rem; color: #6c757d;">
  <p>This is a custom styled blockquote.</p>
  <footer>—— Source</footer>
</blockquote>

## Markdown Common HTML Enhancements

### Image Enhancements

#### Markdown Image Size Control

```markdown
<!-- Use HTML to precisely control image size -->
<img src="example.jpg" alt="Sample Image" width="300" height="200">

<!-- Responsive image -->
<img src="example.jpg" alt="Responsive Image" style="max-width: 100%; height: auto;">

<!-- Image alignment -->
<div align="center">
  <img src="example.jpg" alt="Centered Image" width="400">
</div>
```

#### Image Gallery

```markdown
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="img1.jpg" alt="Image 1" style="width: 200px;">
  <img src="img2.jpg" alt="Image 2" style="width: 200px;">
  <img src="img3.jpg" alt="Image 3" style="width: 200px;">
</div>

<!-- Image grid -->
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
  <img src="img1.jpg" alt="Image 1" style="width: 100%;">
  <img src="img2.jpg" alt="Image 2" style="width: 100%;">
  <img src="img3.jpg" alt="Image 3" style="width: 100%;">
  <img src="img4.jpg" alt="Image 4" style="width: 100%;">
</div>
```

### Video and Media Embedding

#### Embedding Video

```markdown
<!-- YouTube Video -->
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>

<!-- Bilibili Video -->
<iframe src="//player.bilibili.com/player.html?bvid=BV_ID&page=1" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        width="100%" 
        height="400">
</iframe>

<!-- HTML5 Video -->
<video controls width="100%" height="400">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

#### Embedding Audio

```markdown
<!-- HTML5 Audio -->
<audio controls style="width: 100%;">
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<!-- NetEase Cloud Music -->
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" 
        width="330" height="86" 
        src="//music.163.com/outchain/player?type=2&id=SONG_ID&auto=1&height=66">
</iframe>
```

### Table Enhancements

#### Complex Table Structures

```markdown
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f8f9fa;">
      <th rowspan="2" style="border: 1px solid #ddd; padding: 8px;">Product</th>
      <th colspan="2" style="border: 1px solid #ddd; padding: 8px;">Sales Data</th>
      <th rowspan="2" style="border: 1px solid #ddd; padding: 8px;">Total Revenue</th>
    </tr>
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Q1</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Q2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Product A</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥100,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥120,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">¥220,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Product B</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥80,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥90,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">¥170,000</td>
    </tr>
  </tbody>
</table>
```

**Rendered Output:**

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f8f9fa;">
      <th rowspan="2" style="border: 1px solid #ddd; padding: 8px;">Product</th>
      <th colspan="2" style="border: 1px solid #ddd; padding: 8px;">Sales Data</th>
      <th rowspan="2" style="border: 1px solid #ddd; padding: 8px;">Total Revenue</th>
    </tr>
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Q1</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Q2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Product A</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥100,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥120,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">¥220,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Product B</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥80,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">¥90,000</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">¥170,000</td>
    </tr>
  </tbody>
</table>

## Forms and Interactive Elements

### Basic Form Elements

```markdown
<form>
  <div style="margin-bottom: 1rem;">
    <label for="name" style="display: block; margin-bottom: 0.5rem;">Name:</label>
    <input type="text" id="name" name="name" 
           style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
  </div>
  
  <div style="margin-bottom: 1rem;">
    <label for="email" style="display: block; margin-bottom: 0.5rem;">Email:</label>
    <input type="email" id="email" name="email" 
           style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
  </div>
  
  <div style="margin-bottom: 1rem;">
    <label for="message" style="display: block; margin-bottom: 0.5rem;">Message:</label>
    <textarea id="message" name="message" rows="4" 
              style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
    </textarea>
  </div>
  
  <button type="submit" 
          style="background-color: #007bff; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer;">
    Submit
  </button>
</form>
```

### Interactive Elements

```markdown
<!-- Collapsible content -->
<details>
  <summary style="cursor: pointer; font-weight: bold;">Click to expand for more details</summary>
  <div style="padding: 1rem; border: 1px solid #ddd; border-top: none;">
    <p>This is the detailed content inside the collapsible section.</p>
    <p>You can include any HTML content here.</p>
  </div>
</details>

<!-- Progress bar -->
<div style="margin: 1rem 0;">
  <label>Project Progress:</label>
  <progress value="32" max="100" style="width: 100%;">32%</progress>
  <span>32%</span>
</div>

<!-- Star rating -->
<div style="font-size: 1.5rem; color: #ffc107;">
  ★★★★☆
</div>
```

**Rendered Output:**

<details>
  <summary style="cursor: pointer; font-weight: bold;">Click to expand for more details</summary>
  <div style="padding: 1rem; border: 1px solid #ddd; border-top: none;">
    <p>This is the detailed content inside the collapsible section.</p>
    <p>You can include any HTML content here.</p>
  </div>
</details>

<div style="margin: 1rem 0;">
  <label>Project Progress:</label>
  <progress value="32" max="100" style="width: 100%;">32%</progress>
  <span>32%</span>
</div>

<div style="font-size: 1.5rem; color: #ffc107;">
  ★★★★☆
</div>

## Layout and Styling

### Flexbox Layout

```markdown
<div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background-color: #f8f9fa; border-radius: 8px;">
  <div style="flex: 1;">
    <h4 style="margin: 0;">Title</h4>
    <p style="margin: 0.5rem 0 0 0; color: #6c757d;">This is a description text</p>
  </div>
  <div>
    <button style="background-color: #28a745; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px;">
      Action
    </button>
  </div>
</div>

<!-- Card layout -->
<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <div style="flex: 1; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
    <h5>Card 1</h5>
    <p>Card content description</p>
  </div>
  <div style="flex: 1; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
    <h5>Card 2</h5>
    <p>Card content description</p>
  </div>
  <div style="flex: 1; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
    <h5>Card 3</h5>
    <p>Card content description</p>
  </div>
</div>
```

### Grid Layout

```markdown
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
  <div style="padding: 1rem; background-color: #e3f2fd; border-radius: 8px;">
    <h6>Feature 1</h6>
    <p>Feature description</p>
  </div>
  <div style="padding: 1rem; background-color: #f3e5f5; border-radius: 8px;">
    <h6>Feature 2</h6>
    <p>Feature description</p>
  </div>
  <div style="padding: 1rem; background-color: #e8f5e8; border-radius: 8px;">
    <h6>Feature 3</h6>
    <p>Feature description</p>
  </div>
  <div style="padding: 1rem; background-color: #fff3e0; border-radius: 8px;">
    <h6>Feature 4</h6>
    <p>Feature description</p>
  </div>
</div>
```

## Alerts and Warnings

### Different Types of Alerts

```markdown
<!-- Info alert -->
<div style="padding: 1rem; background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; margin: 1rem 0;">
  <strong>💡 Info:</strong> This is an info alert box.
</div>

<!-- Success alert -->
<div style="padding: 1rem; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; margin: 1rem 0;">
  <strong>✅ Success:</strong> The operation was completed successfully.
</div>

<!-- Warning alert -->
<div style="padding: 1rem; background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; margin: 1rem 0;">
  <strong>⚠️ Warning:</strong> Please pay attention to this important notice.
</div>

<!-- Error alert -->
<div style="padding: 1rem; background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px; margin: 1rem 0;">
  <strong>❌ Error:</strong> An error has occurred.
</div>
```

**Rendered Output:**

<div style="padding: 1rem; background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; margin: 1rem 0;">
  <strong>💡 Info:</strong> This is an info alert box.
</div>

<div style="padding: 1rem; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; margin: 1rem 0;">
  <strong>✅ Success:</strong> The operation was completed successfully.
</div>

<div style="padding: 1rem; background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; margin: 1rem 0;">
  <strong>⚠️ Warning:</strong> Please pay attention to this important notice.
</div>

<div style="padding: 1rem; background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px; margin: 1rem 0;">
  <strong>❌ Error:</strong> An error has occurred.
</div>

## Embedding Third-party Content

### Social Media

```markdown
<!-- Twitter embed -->
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">This is a tweet content...</p>
  <a href="https://twitter.com/user/status/123456789">Tweet Link</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!-- Weibo embed -->
<iframe width="100%" height="500" class="share_self" 
        frameborder="0" scrolling="no" 
        src="https://widget.weibo.com/weiboshow/index.php?language=&width=0&height=500&fansRow=1&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=1234567890&verifier=a1b2c3d4">
</iframe>
```

### Online Services

```markdown
<!-- CodePen embed -->
<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Animation Example" 
        src="https://codepen.io/user/embed/EXAMPLE?default-tab=html%2Cresult" 
        frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

<!-- JSFiddle embed -->
<iframe width="100%" height="300" 
        src="//jsfiddle.net/user/example/embedded/js,html,css,result/" 
        allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0">
</iframe>

<!-- Google Maps embed -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0!2d116.4074!3d39.9042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU0JzE1LjEiTiAxMTbCsDI0JzI2LjYiRQ!5e0!3m2!1szh-CN!2scn!4v1234567890" 
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
</iframe>
```

## Custom Components

### Tags and Badges

```markdown
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #007bff; color: white; border-radius: 3px;">
  Frontend
</span>
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #28a745; color: white; border-radius: 3px;">
  React
</span>
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #ffc107; color: black; border-radius: 3px;">
  JavaScript
</span>
```

**Rendered Output:**

<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #007bff; color: white; border-radius: 3px;">
  Frontend
</span>
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #28a745; color: white; border-radius: 3px;">
  React
</span>
<span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #ffc107; color: black; border-radius: 3px;">
  JavaScript
</span>

### Timeline

```markdown
<div style="position: relative; padding-left: 2rem;">
  <div style="position: absolute; left: 0.5rem; top: 0; bottom: 0; width: 2px; background-color: #ddd;"></div>
  
  <div style="position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; left: -1.5rem; width: 1rem; height: 1rem; background-color: #007bff; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #007bff;"></div>
    <h5 style="margin: 0 0 0.5rem 0;">December 2023</h5>
    <p style="margin: 0;">Project started, requirements analysis and technology selection completed.</p>
  </div>
  
  <div style="position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; left: -1.5rem; width: 1rem; height: 1rem; background-color: #28a745; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #28a745;"></div>
    <h5 style="margin: 0 0 0.5rem 0;">January 2024</h5>
    <p style="margin: 0;">Core features developed, entered testing phase.</p>
  </div>
  
  <div style="position: relative;">
    <div style="position: absolute; left: -1.5rem; width: 1rem; height: 1rem; background-color: #6c757d; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #6c757d;"></div>
    <h5 style="margin: 0 0 0.5rem 0;">February 2024</h5>
    <p style="margin: 0;">Project launched and started promotion.</p>
  </div>
</div>
```

## Notes and Limitations

### HTML Security

```markdown
<!-- ✅ Safe HTML -->
<div style="color: blue;">Safe style</div>
<strong>Bold text</strong>
<em>Italic text</em>

<!-- ❌ Potentially filtered content -->
<script>alert('Unsafe script')</script>
<iframe src="javascript:alert('XSS')"></iframe>
<object data="malicious.swf"></object>
```

### Markdown Parser Compatibility

Different Markdown parsers have varying levels of HTML support:

| Parser | HTML Support | Limitations |
|--------|-------------|-------------|
| **GitHub** | Partial | Scripts and dangerous tags filtered |
| **GitLab** | Partial | Security filtering |
| **VitePress** | Full | Depends on config |
| **Jekyll** | Full | Configurable |
| **Hugo** | Partial | Needs to be enabled |

### Best Practice Recommendations

```markdown
✅ Recommended:
1. Use semantic HTML tags
2. Add appropriate style enhancements
3. Ensure content accessibility
4. Keep code clean and maintainable

❌ Avoid:
1. Overusing complex HTML
2. Embedding unsafe scripts
3. Ignoring mobile adaptation
4. Using deprecated tags
```

## Practical Scenarios

### 1. Product Documentation

```markdown
<div style="display: flex; align-items: center; margin: 2rem 0; padding: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px;">
  <div style="flex: 1;">
    <h2 style="margin: 0 0 0.5rem 0;">🚀 Product Features</h2>
    <p style="margin: 0; opacity: 0.9;">Experience our brand new features and improvements</p>
  </div>
  <div>
    <button style="background: rgba(255,255,255,0.2); border: 2px solid white; color: white; padding: 0.75rem 1.5rem; border-radius: 25px; cursor: pointer; backdrop-filter: blur(10px);">
      Learn More
    </button>
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  
  <div style="background: white; border-radius: 10px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-left: 4px solid #007bff;">
    <h4 style="color: #007bff; margin: 0 0 1rem 0;">⚡ High Performance</h4>
    <p style="color: #666; line-height: 1.6;">Optimized algorithms and architecture for ultimate performance.</p>
  </div>
  
  <div style="background: white; border-radius: 10px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-left: 4px solid #28a745;">
    <h4 style="color: #28a745; margin: 0 0 1rem 0;">🔒 Secure and Reliable</h4>
    <p style="color: #666; line-height: 1.6;">Enterprise-grade security, encrypted data transmission and storage.</p>
  </div>
  
  <div style="background: white; border-radius: 10px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-left: 4px solid #ffc107;">
    <h4 style="color: #e68900; margin: 0 0 1rem 0;">🎨 Easy to Use</h4>
    <p style="color: #666; line-height: 1.6;">Intuitive user interface and streamlined workflow.</p>
  </div>
  
</div>
```

### 2. API Documentation

```markdown
<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <div style="display: flex; align-items: center; margin-bottom: 1rem;">
    <span style="background: #28a745; color: white; padding: 0.25rem 0.75rem; border-radius: 4px; font-weight: bold; font-size: 0.875rem;">POST</span>
    <code style="margin-left: 1rem; flex: 1; background: #e9ecef; padding: 0.5rem; border-radius: 4px;">/api/v1/users</code>
  </div>
  
  <h4 style="margin: 0 0 1rem 0;">Create User</h4>
  <p style="color: #6c757d; margin: 0;">Create a new user account</p>
</div>

<details style="margin: 1rem 0;">
  <summary style="cursor: pointer; font-weight: bold; padding: 0.5rem; background: #e9ecef; border-radius: 4px;">
    📋 Request Parameters
  </summary>
  <div style="padding: 1rem; border: 1px solid #ddd; border-top: none;">
    
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 0.5rem; text-align: left;">Parameter</th>
      <th style="border: 1px solid #ddd; padding: 0.5rem; text-align: left;">Type</th>
      <th style="border: 1px solid #ddd; padding: 0.5rem; text-align: left;">Required</th>
      <th style="border: 1px solid #ddd; padding: 0.5rem; text-align: left;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 0.5rem;"><code>name</code></td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">string</td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">✅</td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">User name</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 0.5rem;"><code>email</code></td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">string</td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">✅</td>
      <td style="border: 1px solid #ddd; padding: 0.5rem;">Email address</td>
    </tr>
  </tbody>
</table>

  </div>
</details>
```

### 3. Team Introduction

```markdown
<div style="text-align: center; margin: 3rem 0;">
  <h2 style="margin-bottom: 2rem; color: #333;">👥 Our Team</h2>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto;">
    
    <div style="text-align: center;">
      <img src="avatar1.jpg" alt="Zhang San" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid #007bff;">
      <h4 style="margin: 0 0 0.5rem 0; color: #333;">Zhang San</h4>
      <p style="color: #007bff; font-weight: bold; margin: 0 0 0.5rem 0;">Frontend Engineer</p>
      <p style="color: #666; font-size: 0.9rem; line-height: 1.4;">Focuses on React and Vue development, passionate about user experience design.</p>
      <div style="margin-top: 1rem;">
        <a href="#" style="color: #007bff; text-decoration: none; margin: 0 0.5rem;">GitHub</a>
        <a href="#" style="color: #007bff; text-decoration: none; margin: 0 0.5rem;">LinkedIn</a>
      </div>
    </div>
    
    <div style="text-align: center;">
      <img src="avatar2.jpg" alt="Li Si" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid #28a745;">
      <h4 style="margin: 0 0 0.5rem 0; color: #333;">Li Si</h4>
      <p style="color: #28a745; font-weight: bold; margin: 0 0 0.5rem 0;">Backend Engineer</p>
      <p style="color: #666; font-size: 0.9rem; line-height: 1.4;">Proficient in Node.js and Python, focused on system architecture design.</p>
      <div style="margin-top: 1rem;">
        <a href="#" style="color: #28a745; text-decoration: none; margin: 0 0.5rem;">GitHub</a>
        <a href="#" style="color: #28a745; text-decoration: none; margin: 0 0.5rem;">LinkedIn</a>
      </div>
    </div>
    
  </div>
</div>
```

## Related Syntax

- [Basic Syntax Overview](/basic/overview) - Markdown Basics
- [Extended Syntax](/extended/) - Markdown Extensions
- [Best Practices](/advanced/best-practices) - Writing Recommendations

## Tools and Resources

### HTML/CSS Frameworks

- **Bootstrap**: Rapid prototyping and responsive design
- **Tailwind CSS**: Utility-first CSS framework
- **Bulma**: Modern CSS framework
- **Foundation**: Responsive front-end framework

### Online Tools

- **CodePen**: Online HTML/CSS/JS editor
- **JSFiddle**: Code snippet testing
- **CSS Grid Generator**: CSS grid layout generator
- **Flexbox Froggy**: Flexbox learning game

### Browser Developer Tools

- **Chrome DevTools**: Element inspection and style debugging
- **Firefox Developer Tools**: Grid and Flexbox debugging
- **Safari Web Inspector**: macOS/iOS debugging
- **Edge DevTools**: Accessibility checking

Remember, while embedding HTML is powerful, use it in moderation to keep your documentation readable and maintainable. 