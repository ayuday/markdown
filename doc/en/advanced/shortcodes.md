---
title: Using Shortcodes in Markdown
description: Learn how to use shortcodes to extend Markdown with reusable components and dynamic content.
keywords: markdown shortcodes, markdown components, markdown extensions, dynamic markdown
---

# Using Shortcodes in Markdown

Shortcodes are simple snippets that let you embed complex functionality into your Markdown documents without writing HTML or complex code. They're commonly used in static site generators.

## What are Shortcodes?

Shortcodes are placeholders that get replaced with rendered content during the build process. They typically look like this:

```markdown
&#123;&#123;< shortcode-name param1="value1" >&#125;&#125;

or

&#123;&#123;% shortcode-name %&#125;&#125;
Content here
&#123;&#123;% /shortcode-name %&#125;&#125;
```

## Common Shortcode Syntax Formats

### Hugo Syntax

```markdown
<!-- Self-closing -->
&#123;&#123;< youtube id="dQw4w9WgXcQ" >&#125;&#125;

<!-- With content -->
&#123;&#123;% note type="warning" %&#125;&#125;
This is important information!
&#123;&#123;% /note %&#125;&#125;
```

### Jekyll/Liquid Syntax

```markdown
{% youtube "dQw4w9WgXcQ" %}

{% highlight javascript %}
console.log("Hello World");
{% endhighlight %}
```

### Gatsby/MDX Components

```markdown
<YouTube videoId="dQw4w9WgXcQ" />

<Note type="warning">
  This is important information!
</Note>
```

## Built-in Shortcodes

### Hugo Built-in Shortcodes

#### Figure/Image

```markdown
&#123;&#123;< figure src="/images/sunset.jpg" 
           title="Beautiful Sunset"
           caption="Taken in California"
           alt="Sunset over ocean"
           width="800" >&#125;&#125;
```

#### YouTube

```markdown
&#123;&#123;< youtube dQw4w9WgXcQ >&#125;&#125;

<!-- With parameters -->
&#123;&#123;< youtube id="dQw4w9WgXcQ" autoplay="true" >&#125;&#125;
```

#### Twitter

```markdown
&#123;&#123;< twitter user="github" id="1234567890" >&#125;&#125;
```

#### Instagram

```markdown
&#123;&#123;< instagram BWNjjyYFxVx >&#125;&#125;
```

#### Gist

```markdown
&#123;&#123;< gist username 0123456789abcdef >&#125;&#125;
```

### Jekyll Built-in Tags

#### Highlight Code

```markdown
{% highlight ruby linenos %}
def hello
  puts "Hello World"
end
{% endhighlight %}
```

#### Include Files

```markdown
{% include header.html %}

{% include_relative ../shared/footer.html %}
```

#### Link to Posts

```markdown
{% post_url 2024-01-15-my-post %}

{% link _posts/2024-01-15-my-post.md %}
```

## Creating Custom Shortcodes

### Hugo Custom Shortcodes

Create a file in `layouts/shortcodes/button.html`:

```html
<a href="&#123;&#123; .Get "url" &#125;&#125;" class="button &#123;&#123; .Get "style" &#125;&#125;">
  &#123;&#123; .Inner &#125;&#125;
</a>
```

Usage:

```markdown
&#123;&#123;< button url="/docs" style="primary" >&#125;&#125;
Read Documentation
&#123;&#123;< /button >&#125;&#125;
```

### More Complex Example

`layouts/shortcodes/callout.html`:

```html
&#123;&#123; $type := .Get "type" | default "info" &#125;&#125;
<div class="callout callout-&#123;&#123; $type &#125;&#125;">
  <div class="callout-title">
    &#123;&#123; with .Get "title" &#125;&#125;&#123;&#123; . &#125;&#125;&#123;&#123; end &#125;&#125;
  </div>
  <div class="callout-content">
    &#123;&#123; .Inner | markdownify &#125;&#125;
  </div>
</div>
```

Usage:

```markdown
&#123;&#123;% callout type="warning" title="Important" %&#125;&#125;
This is a **warning** message with *Markdown* support.
&#123;&#123;% /callout %&#125;&#125;
```

### Jekyll Custom Tag

Create a plugin in `_plugins/custom_tag.rb`:

```ruby
module Jekyll
  class CustomTag < Liquid::Tag
    def initialize(tag_name, params, tokens)
      super
      @params = params
    end

    def render(context)
      "<div class='custom-tag'>#{@params}</div>"
    end
  end
end

Liquid::Template.register_tag('custom', Jekyll::CustomTag)
```

Usage:

```markdown
{% custom "My custom content" %}
```

## Practical Shortcode Examples

### Alert/Notice Boxes

```markdown
&#123;&#123;% alert type="info" %&#125;&#125;
ℹ️ This is an informational message.
&#123;&#123;% /alert %&#125;&#125;

&#123;&#123;% alert type="warning" %&#125;&#125;
⚠️ This is a warning message.
&#123;&#123;% /alert %&#125;&#125;

&#123;&#123;% alert type="danger" %&#125;&#125;
🚨 This is a danger message.
&#123;&#123;% /alert %&#125;&#125;
```

### Code Tabs

```markdown
&#123;&#123;< tabs >&#125;&#125;
  &#123;&#123;< tab "JavaScript" >&#125;&#125;
  ```javascript
  console.log("Hello");
  ```
  &#123;&#123;< /tab >&#125;&#125;
  
  &#123;&#123;< tab "Python" >&#125;&#125;
  ```python
  print("Hello")
  ```
  &#123;&#123;< /tab >&#125;&#125;
&#123;&#123;< /tabs >&#125;&#125;
```

### Expandable Sections

```markdown
&#123;&#123;< expand "Click to expand" >&#125;&#125;
This content is hidden by default and can be expanded.

It can contain **any Markdown** including:
- Lists
- Code blocks
- Images
&#123;&#123;< /expand >&#125;&#125;
```

### Embed External Content

```markdown
<!-- CodePen -->
&#123;&#123;< codepen user="username" id="abcdefg" >&#125;&#125;

<!-- JSFiddle -->
&#123;&#123;< jsfiddle url="https://jsfiddle.net/username/abc123" >&#125;&#125;

<!-- CodeSandbox -->
&#123;&#123;< codesandbox id="abc123" >&#125;&#125;
```

### Gallery/Lightbox

```markdown
&#123;&#123;< gallery >&#125;&#125;
  &#123;&#123;< img src="image1.jpg" caption="First image" >&#125;&#125;
  &#123;&#123;< img src="image2.jpg" caption="Second image" >&#125;&#125;
  &#123;&#123;< img src="image3.jpg" caption="Third image" >&#125;&#125;
&#123;&#123;< /gallery >&#125;&#125;
```

### Table of Contents

```markdown
&#123;&#123;< toc >&#125;&#125;

<!-- With options -->
&#123;&#123;< toc levels="2,3" >&#125;&#125;
```

### Mermaid Diagrams

```markdown
&#123;&#123;< mermaid >&#125;&#125;
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
&#123;&#123;< /mermaid >&#125;&#125;
```

## Advanced Shortcode Patterns

### Parameterized Shortcodes

```markdown
<!-- Named parameters -->
&#123;&#123;< card title="My Title" 
         image="/images/card.jpg" 
         link="/read-more" 
         button="Learn More" >&#125;&#125;

<!-- Positional parameters -->
&#123;&#123;< youtube "dQw4w9WgXcQ" "16:9" >&#125;&#125;
```

### Nested Shortcodes

```markdown
&#123;&#123;< columns >&#125;&#125;
  &#123;&#123;< column size="6" >&#125;&#125;
    Left column content
  &#123;&#123;< /column >&#125;&#125;
  
  &#123;&#123;< column size="6" >&#125;&#125;
    Right column content
  &#123;&#123;< /column >&#125;&#125;
&#123;&#123;< /columns >&#125;&#125;
```

### Conditional Rendering

Hugo example:

```html
&#123;&#123; if .Get "show" &#125;&#125;
<div class="optional-content">
  &#123;&#123; .Inner &#125;&#125;
</div>
&#123;&#123; end &#125;&#125;
```

### Accessing Page Variables

```html
<!-- In shortcode template -->
<div class="page-info">
  <h3>&#123;&#123; .Page.Title &#125;&#125;</h3>
  <p>Last modified: &#123;&#123; .Page.Lastmod &#125;&#125;</p>
  <p>Reading time: &#123;&#123; .Page.ReadingTime &#125;&#125; minutes</p>
</div>
```

## Shortcode Best Practices

1. **Keep It Simple**: Shortcodes should be easy to remember and use
2. **Clear Naming**: Use descriptive names that indicate functionality
3. **Documentation**: Document all parameters and usage examples
4. **Error Handling**: Provide sensible defaults and handle missing parameters
5. **Performance**: Avoid complex computations in frequently used shortcodes
6. **Accessibility**: Ensure generated HTML is accessible
7. **Mobile Friendly**: Test shortcodes on mobile devices

## Common Use Cases

### Documentation

```markdown
<!-- API endpoint documentation -->
&#123;&#123;< api method="GET" path="/api/users" >&#125;&#125;
Returns a list of all users.
&#123;&#123;< /api >&#125;&#125;

<!-- Parameter documentation -->
&#123;&#123;< param name="userId" type="string" required="true" >&#125;&#125;
The unique identifier for the user.
&#123;&#123;< /param >&#125;&#125;
```

### E-learning

```markdown
<!-- Quiz questions -->
&#123;&#123;< quiz >&#125;&#125;
  &#123;&#123;< question "What is 2+2?" >&#125;&#125;
    &#123;&#123;< answer correct="true" >&#125;&#125;4&#123;&#123;< /answer >&#125;&#125;
    &#123;&#123;< answer >&#125;&#125;3&#123;&#123;< /answer >&#125;&#125;
    &#123;&#123;< answer >&#125;&#125;5&#123;&#123;< /answer >&#125;&#125;
  &#123;&#123;< /question >&#125;&#125;
&#123;&#123;< /quiz >&#125;&#125;
```

### Product Showcase

```markdown
&#123;&#123;< product-card
     name="Premium Widget"
     price="$99.99"
     image="/products/widget.jpg"
     rating="4.5"
     reviews="245" >&#125;&#125;
```

## Shortcodes vs. Components

| Feature | Shortcodes | React Components |
|---------|------------|------------------|
| Build Time | ✅ Rendered at build | ❌ Runtime |
| Interactivity | ❌ Static | ✅ Dynamic |
| Learning Curve | ✅ Simple | ⚠️ Moderate |
| Flexibility | ⚠️ Limited | ✅ High |
| Performance | ✅ Fast | ⚠️ Depends on bundle |

## Migrating from HTML to Shortcodes

### Before (Raw HTML)

```markdown
<div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">Warning!</h4>
  <p>This is a warning message.</p>
</div>
```

### After (Shortcode)

```markdown
&#123;&#123;% alert type="warning" title="Warning!" %&#125;&#125;
This is a warning message.
&#123;&#123;% /alert %&#125;&#125;
```

## Debugging Shortcodes

### Hugo Debug

```html
<!-- In shortcode template -->
&#123;&#123; printf "%#v" . &#125;&#125;

<!-- Print all params -->
&#123;&#123; range $key, $value := .Params &#125;&#125;
  &#123;&#123; $key &#125;&#125;: &#123;&#123; $value &#125;&#125;
&#123;&#123; end &#125;&#125;
```

### Jekyll Debug

```ruby
def render(context)
  puts "Debug: #{@params.inspect}"
  # ... rest of code
end
```

## Performance Considerations

1. **Caching**: Cache expensive computations
2. **Lazy Loading**: Defer non-critical content
3. **Minimize API Calls**: Batch requests when possible
4. **Optimize Images**: Use appropriate sizes and formats
5. **Code Splitting**: Load JavaScript only when needed

## Conclusion

Shortcodes provide a powerful way to extend Markdown with custom functionality while keeping content files clean and maintainable. They're an essential tool for building modern static sites and documentation systems.

## Additional Resources

- [Hugo Shortcodes Documentation](https://gohugo.io/content-management/shortcodes/)
- [Jekyll Liquid Tags](https://jekyllrb.com/docs/liquid/tags/)
- [MDX Components](https://mdxjs.com/)
- [Eleventy Shortcodes](https://www.11ty.dev/docs/shortcodes/)

