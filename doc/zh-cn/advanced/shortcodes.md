---
title: Markdown 中的 Shortcodes
description: 学习如何使用 shortcodes 扩展 Markdown 功能，创建可重用的内容组件。
keywords: markdown shortcodes, markdown扩展, markdown组件, 自定义shortcode
---

# Markdown 中的 Shortcodes

Shortcodes 是一种特殊的语法，允许你在 Markdown 文档中嵌入复杂的功能，而无需编写完整的 HTML 或 JavaScript 代码。它们像是内容模板的快捷方式。

## 什么是 Shortcodes？

Shortcodes 是由静态网站生成器（如 Hugo、Jekyll、Gatsby）提供的简短代码片段，可以在 Markdown 中调用预定义的功能或组件。

### 基本语法

不同平台的 shortcode 语法略有不同：

**Hugo**
```markdown
{{< shortcode-name param1="value1" >}}

{{< shortcode-name param1="value1" >}}
内容
{{< /shortcode-name >}}
```

**Jekyll**
```markdown
{% shortcode_name param1='value1' %}

{% shortcode_name param1='value1' %}
内容
{% endshortcode_name %}
```

**Docusaurus / MDX**
```markdown
<ShortcodeName param1="value1" />

<ShortcodeName param1="value1">
  内容
</ShortcodeName>
```

## 常见 Shortcodes

### 图片和媒体

**Hugo 图片 Shortcode**
```markdown
{{< figure src="/images/example.jpg" title="示例图片" caption="这是一个示例图片" >}}
```

**视频嵌入**
```markdown
{{< youtube "dQw4w9WgXcQ" >}}

{{< vimeo "123456789" >}}

{{< bilibili "BV1xx411c7mD" >}}
```

**音频播放器**
```markdown
{{< audio src="/audio/podcast.mp3" >}}
```

### 提示和警告框

```markdown
{{< note >}}
这是一个提示信息。
{{< /note >}}

{{< warning >}}
这是一个警告信息。
{{< /warning >}}

{{< danger >}}
这是一个危险警告。
{{< /danger >}}

{{< tip >}}
这是一个小技巧。
{{< /tip >}}
```

### 代码示例

```markdown
{{< highlight python "linenos=table,hl_lines=2-3" >}}
def hello_world():
    print("Hello")
    print("World")
{{< /highlight >}}

{{< code-tabs >}}
{{< code-tab lang="javascript" >}}
console.log("Hello World");
{{< /code-tab >}}
{{< code-tab lang="python" >}}
print("Hello World")
{{< /code-tab >}}
{{< /code-tabs >}}
```

### 选项卡

```markdown
{{< tabs >}}
{{< tab "选项卡 1" >}}
这是选项卡 1 的内容。
{{< /tab >}}
{{< tab "选项卡 2" >}}
这是选项卡 2 的内容。
{{< /tab >}}
{{< /tabs >}}
```

### 折叠面板

```markdown
{{< collapse "点击展开详情" >}}
这里是折叠的内容。
只有在用户点击时才会显示。
{{< /collapse >}}

{{< accordion >}}
{{< accordion-item "问题 1" >}}
答案 1
{{< /accordion-item >}}
{{< accordion-item "问题 2" >}}
答案 2
{{< /accordion-item >}}
{{< /accordion >}}
```

### 引用和参考

```markdown
{{< ref "path/to/page.md" >}}

{{< relref "sibling-page.md" >}}

{{< cite "book-reference" >}}
```

## 平台特定 Shortcodes

### Hugo Shortcodes

**内置 Shortcodes**

```markdown
# 图片
{{< figure src="image.jpg" title="标题" >}}

# 推文嵌入
{{< tweet user="username" id="1234567890" >}}

# Instagram
{{< instagram "PostID" >}}

# Gist
{{< gist username "gist-id" >}}

# 高亮代码
{{< highlight go >}}
func main() {
    fmt.Println("Hello")
}
{{< /highlight >}}

# 参数引用
{{< param "description" >}}
```

**自定义 Hugo Shortcode**

创建 `layouts/shortcodes/button.html`：

```html
<a href="{{ .Get "href" }}" class="button {{ .Get "class" }}">
  {{ .Inner }}
</a>
```

使用：
```markdown
{{< button href="/download" class="primary" >}}
下载
{{< /button >}}
```

### Jekyll Shortcodes（Liquid 标签）

**内置标签**

```markdown
{% include file.html %}

{% highlight ruby %}
def foo
  puts 'bar'
end
{% endhighlight %}

{% link _posts/2024-01-15-article.md %}

{% post_url 2024-01-15-article %}
```

**自定义 Jekyll 标签**

创建 `_plugins/button_tag.rb`：

```ruby
module Jekyll
  class ButtonTag < Liquid::Tag
    def initialize(tag_name, params, tokens)
      super
      @params = params
    end

    def render(context)
      "<button class='custom-button'>#{@params}</button>"
    end
  end
end

Liquid::Template.register_tag('button', Jekyll::ButtonTag)
```

使用：
```markdown
{% button Click Me %}
```

### Docusaurus / MDX

**MDX 组件**

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="苹果">
    这是苹果。
  </TabItem>
  <TabItem value="orange" label="橙子">
    这是橙子。
  </TabItem>
</Tabs>
```

**提示框**

```mdx
:::note
这是一个提示。
:::

:::tip
这是一个小技巧。
:::

:::info
这是信息提示。
:::

:::caution
这是警告。
:::

:::danger
这是危险警告。
:::
```

**代码块**

```mdx
```jsx title="src/App.js" {1-2,4}
import React from 'react';
import Layout from '@theme/Layout';

export default function App() {
  return <Layout>Hello</Layout>;
}
\```
```

### Gatsby

**内置组件**

```mdx
import { Link } from 'gatsby'

<Link to="/page-2/">Go to page 2</Link>
```

**插件组件**

```mdx
import { YouTube } from 'gatsby-plugin-youtube'

<YouTube videoId="dQw4w9WgXcQ" />
```

### VuePress

**内置容器**

```markdown
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块
:::
```

**自定义容器**

```markdown
::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。
:::
```

## 创建自定义 Shortcodes

### Hugo 自定义 Shortcode

**简单 Shortcode**

`layouts/shortcodes/highlight-box.html`：
```html
<div class="highlight-box">
  {{ .Inner | markdownify }}
</div>
```

使用：
```markdown
{{< highlight-box >}}
这是**重要**内容。
{{< /highlight-box >}}
```

**带参数的 Shortcode**

`layouts/shortcodes/alert.html`：
```html
<div class="alert alert-{{ .Get "type" }}">
  <strong>{{ .Get "title" }}</strong>
  {{ .Inner }}
</div>
```

使用：
```markdown
{{< alert type="warning" title="注意" >}}
请小心操作！
{{< /alert >}}
```

**命名参数 Shortcode**

`layouts/shortcodes/card.html`：
```html
<div class="card">
  {{ with .Get "image" }}
  <img src="{{ . }}" alt="{{ $.Get "title" }}">
  {{ end }}
  <h3>{{ .Get "title" }}</h3>
  <p>{{ .Inner }}</p>
  {{ with .Get "link" }}
  <a href="{{ . }}">了解更多</a>
  {{ end }}
</div>
```

使用：
```markdown
{{< card title="我的卡片" image="/img/card.jpg" link="/details" >}}
这是卡片的描述内容。
{{< /card >}}
```

### Jekyll 自定义标签

**简单标签**

`_plugins/highlight_tag.rb`：
```ruby
module Jekyll
  class HighlightTag < Liquid::Block
    def render(context)
      content = super
      "<div class='highlight-box'>#{content}</div>"
    end
  end
end

Liquid::Template.register_tag('highlight', Jekyll::HighlightTag)
```

使用：
```markdown
{% highlight %}
重要内容
{% endhighlight %}
```

**带参数的标签**

`_plugins/button_tag.rb`：
```ruby
module Jekyll
  class ButtonTag < Liquid::Tag
    def initialize(tag_name, params, tokens)
      super
      @params = parse_params(params)
    end

    def render(context)
      url = @params['url']
      text = @params['text']
      color = @params['color'] || 'blue'
      
      "<a href='#{url}' class='btn btn-#{color}'>#{text}</a>"
    end

    private

    def parse_params(params)
      Hash[params.scan(/(\w+)="([^"]+)"/)]
    end
  end
end

Liquid::Template.register_tag('button', Jekyll::ButtonTag)
```

使用：
```markdown
{% button url="/download" text="下载" color="green" %}
```

### MDX 自定义组件

**React 组件**

`components/Callout.jsx`：
```jsx
export default function Callout({ type, title, children }) {
  const colors = {
    info: 'blue',
    warning: 'yellow',
    error: 'red',
    success: 'green'
  };
  
  return (
    <div className={`callout callout-${colors[type]}`}>
      {title && <strong>{title}</strong>}
      <div>{children}</div>
    </div>
  );
}
```

使用：
```mdx
import Callout from '@/components/Callout';

<Callout type="warning" title="注意">
这是一个重要的警告信息。
</Callout>
```

## 最佳实践

### 1. 保持简洁

```markdown
# 好的：简洁清晰
{{< note >}}
重要提示
{{< /note >}}

# 避免：过于复杂
{{< container type="note" style="background:blue;padding:20px" id="note-1" class="custom" >}}
重要提示
{{< /container >}}
```

### 2. 提供清晰的参数

```markdown
# 好的：明确的参数名
{{< video src="video.mp4" poster="thumbnail.jpg" width="800" >}}

# 避免：模糊的参数
{{< video "video.mp4" "thumbnail.jpg" "800" >}}
```

### 3. 文档化你的 Shortcodes

创建 shortcode 文档：

```markdown
# Shortcode 参考

## note

创建一个提示框。

**语法**：
\`\`\`
{{< note >}}
你的内容
{{< /note >}}
\`\`\`

**参数**：无

**示例**：
\`\`\`
{{< note >}}
这是一个重要提示。
{{< /note >}}
\`\`\`
```

### 4. 提供回退选项

确保即使 shortcode 不起作用，内容仍然可读：

```markdown
{{< video src="demo.mp4" >}}
[无法播放视频？点击下载](demo.mp4)
{{< /video >}}
```

### 5. 测试跨平台兼容性

```markdown
# 使用通用的 HTML 作为回退
<div class="note">
这在任何平台都能工作
</div>

# 平台特定的 shortcode 加条件
{{< if hugo >}}
{{< note >}}Hugo 样式{{< /note >}}
{{< else >}}
::: note
通用样式
:::
{{< end >}}
```

## 常见 Shortcode 库

### Hugo
- **Hugo Easy Gallery**: 图片画廊
- **Hugo Shortcode Gallery**: shortcode 集合
- **Hugo Algolia**: 搜索集成

### Jekyll
- **Jekyll Spaceship**: 扩展 Markdown 功能
- **Jekyll Include Cache**: 优化 include 性能
- **Jekyll Target Blank**: 外部链接自动 blank

### Universal
- **Embed.ly**: 通用媒体嵌入
- **Shortcode.js**: 客户端 shortcode 解析器

## 性能考虑

### 1. 避免过度嵌套

```markdown
# 避免：深度嵌套
{{< tabs >}}
  {{< tab "Tab 1" >}}
    {{< note >}}
      {{< highlight >}}
      代码
      {{< /highlight >}}
    {{< /note >}}
  {{< /tab >}}
{{< /tabs >}}

# 更好：扁平结构
{{< code-note lang="js" >}}
代码
{{< /code-note >}}
```

### 2. 缓存重复内容

```go
// Hugo shortcode 使用缓存
{{ $result := .Inner | markdownify }}
{{ $result }}
```

### 3. 延迟加载

```html
<!-- 延迟加载视频 -->
<div class="video-container" data-src="video.mp4">
  <button onclick="loadVideo(this)">加载视频</button>
</div>
```

## 调试 Shortcodes

### Hugo 调试

```go
{{ printf "%#v" . }}  <!-- 打印所有变量 -->
{{ .Get 0 | printf "%#v" }}  <!-- 打印第一个参数 -->
```

### Jekyll 调试

```ruby
puts "Debug: #{@params.inspect}"
```

### MDX 调试

```jsx
console.log('Props:', props);
```

## 结论

Shortcodes 是扩展 Markdown 功能的强大工具。它们让你能够在保持内容可读性的同时，添加丰富的交互功能。选择适合你平台的 shortcode 系统，并遵循最佳实践来创建可维护的内容。

## 其他资源

- [Hugo Shortcodes 文档](https://gohugo.io/content-management/shortcodes/)
- [Jekyll Liquid 标签](https://jekyllrb.com/docs/liquid/tags/)
- [MDX 文档](https://mdxjs.com/)
- [Docusaurus MDX 和 React](https://docusaurus.io/docs/markdown-features)
