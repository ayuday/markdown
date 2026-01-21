---
title: Discord Markdown
description: A comprehensive guide to Discord's unique Markdown extensions and formatting features, including text styles, embeds, and special syntax.
---

# Discord Markdown

Discord uses its own enhanced version of Markdown that includes unique formatting features specifically designed for chat communication. This guide covers all the special Markdown syntax available in Discord.

## Basic Text Formatting

### Bold Text

```
**Bold text**
```

**Bold text**

### Italic Text

```
*Italic text*
```

*Italic text*

### Bold and Italic

```
***Bold and italic***
```

***Bold and italic***

### Underline

```
__Underline__
```

__Underline__

### Bold and Underline

```
__**Bold and underline**__
```

__**Bold and underline**__

### Strikethrough

```
~~Strikethrough~~
```

~~Strikethrough~~

## Code Formatting

### Inline Code

```
`Inline code`
```

`Inline code`

### Code Blocks

````
```
Multi-line code block
With multiple lines
```
````

```
Multi-line code block
With multiple lines
```

### Syntax Highlighting

````
```javascript
// JavaScript code example
function hello() {
  console.log('Hello, Discord!');
}
```
````

```javascript
// JavaScript code example
function hello() {
  console.log('Hello, Discord!');
}
```

## Lists

### Unordered Lists

```
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
```

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

### Ordered Lists

```
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
```

1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2

## Quoting

### Single Line Quotes

```
> Single line quote
```

> Single line quote

### Multi-line Quotes

```
> Multi-line quote
> that spans multiple lines
> in Discord
```

> Multi-line quote
> that spans multiple lines
> in Discord

### Nested Quotes

```
> First level quote
>> Second level quote
>>> Third level quote
```

> First level quote
>> Second level quote
>>> Third level quote

## Discord-Specific Features

### Spoilers

```
||This is a spoiler||
```

||This is a spoiler||

### Mentions

```
@username          # Mention a specific user
@here              # Mention everyone currently online
@everyone          # Mention everyone in the server
```

### Channel Mentions

```
#channel-name      # Mention a specific channel
```

### Role Mentions

```
@role-name         # Mention a specific role
```

### Embed Links

Discord automatically creates rich embeds for many websites:

```
https://discord.com/
```

### Invisible Line Breaks

```
Line 1\
Line 2
```

Line 1\
Line 2

### Block Quotes with Code

```
> ```javascript
> console.log('Quoted code');
> ```
```

> ```javascript
> console.log('Quoted code');
> ```

## Practical Examples

### Creating a Poll

```
📊 **Poll: Favorite Programming Language**

React
- 👍 React
- 👎 React

Vue
- 👍 Vue
- 👎 Vue

Other
- 👍 Other
- 👎 Other
```

### Sharing Code Snippets

```
💻 **New Feature Implementation**

```python
def calculate_total(items):
    """Calculate the total price of items"""
    return sum(item.price for item in items)
```

This function uses a generator expression for efficient calculation.
```

### Formatting Rules

```
📜 **Server Rules**

1. **Be respectful** - Treat others with kindness
2. **No spam** - Avoid repetitive messages
3. **Stay on topic** - Keep discussions relevant
4. **Use appropriate channels** - Post in the right place

||Violation of rules may result in warnings or bans||
```

## Mobile vs Desktop Differences

While most Discord Markdown works the same on both mobile and desktop, there are a few differences:

- On mobile, some advanced formatting may require using the formatting toolbar
- Code blocks may have different line spacing on mobile
- Embed previews may appear differently

## Troubleshooting

### Formatting Not Working?

1. Make sure you're using the correct syntax
2. Check that you haven't missed any closing symbols
3. Some servers may have formatting restrictions
4. Try using the built-in formatting toolbar

### Common Mistakes

```
❌ Incorrect: *Bold text
❌ Incorrect: **Bold text*  
❌ Incorrect: ~~Strikethrough
❌ Incorrect: ```Code without closing```
```

```
✅ Correct: **Bold text**
✅ Correct: *Italic text*
✅ Correct: ~~Strikethrough~~
✅ Correct: ```Code with closing```
```

## Related Topics

- [Basic Markdown Syntax](/basic/overview)
- [Code Blocks](/basic/code)
- [Lists](/basic/lists)
- [Blockquotes](/basic/blockquotes)