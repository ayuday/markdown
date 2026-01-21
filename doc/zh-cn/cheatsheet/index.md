---
title: Markdown 语法速查表
description: Markdown 常用语法一览，包括标题、列表、链接、图片、引用、代码等速查。
---

# Markdown 语法速查表

这是 Markdown 语法的快速参考备忘单，涵盖了最常用的语法元素。

## 标题语法

### ATX 风格标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### Setext 风格标题

```markdown
一级标题
========

二级标题
--------
```

## 文本格式

```markdown
**粗体文本**
__粗体文本__

*斜体文本*
_斜体文本_

***粗斜体文本***
___粗斜体文本___

~~删除线文本~~

`行内代码`
```

## 段落和换行

```markdown
这是第一个段落。

这是第二个段落。

这是一行文本。  
这是新的一行（行尾两个空格）。
```

## 列表

### 无序列表

```markdown
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2

* 使用星号
+ 使用加号
```

### 有序列表

```markdown
1. 第一项
2. 第二项
   1. 子项目 2.1
   2. 子项目 2.2
3. 第三项
```

### 任务列表

```markdown
- [x] 已完成任务
- [ ] 未完成任务
- [ ] 另一个任务
```

## 链接

```markdown
[链接文本](https://www.markdownlang.com)
[带标题的链接](https://www.markdownlang.com "链接标题")

[参考式链接][1]
[1]: https://www.markdownlang.com "链接标题"

<https://www.markdownlang.com>
<email@example.com>
```

## 图片

```markdown
![替代文本](image.jpg)
![带标题的图片](image.jpg "图片标题")

[![图片链接](image.jpg)](https://www.markdownlang.com)
```

## 引用

```markdown
> 这是一个引用
> 
> 引用的第二段

> 一级引用
> > 二级引用
> > > 三级引用
```

## 代码

### 行内代码

```markdown
使用 `code` 标记行内代码
```

### 代码块

````markdown
```
普通代码块
```

```javascript
// 带语法高亮的代码块
function hello() {
    console.log("Hello, World!");
}
```
````

### 缩进代码块

```markdown
    这是缩进代码块
    使用 4 个空格或 1 个制表符
```

## 表格

```markdown
| 左对齐 | 居中对齐 | 右对齐 |
|--------|:--------:|-------:|
| 内容1  |   内容2   |  内容3 |
| 内容4  |   内容5   |  内容6 |
```

## 分隔线

```markdown
---

***

___

- - -
```

## 换行

```markdown
方式1：行尾添加两个空格  
然后换行

方式2：使用 HTML 标签<br>
换行

方式3：空行分隔

新段落
```

## 转义字符

```markdown
\*不是斜体\*
\#不是标题
\[不是链接\]
```

可转义的字符：

```
\   反斜杠
`   反引号
*   星号
_   下划线
{}  大括号
[]  方括号
()  圆括号
#   井号
+   加号
-   减号
.   句点
!   感叹号
```

## 脚注

```markdown
这里有一个脚注引用[^1]。

[^1]: 这是脚注的内容。
```

## HTML 标签

```markdown
Markdown 支持内嵌 HTML：

<strong>粗体</strong>
<em>斜体</em>
<mark>高亮</mark>
<del>删除</del>
<ins>插入</ins>
```

## 数学公式（扩展语法）

```markdown
行内公式：$E = mc^2$

块级公式：
$$
\sum_{i=1}^n a_i = 0
$$
```

## 快速提示

### 最常用的语法
1. `#` - 标题
2. `**text**` - 粗体
3. `*text*` - 斜体
4. `[text](url)` - 链接
5. `![alt](url)` - 图片
6. `- item` - 列表
7. `> quote` - 引用
8. `` `code` `` - 代码

### 记忆技巧
- `#` 井号像楼梯，表示标题层级
- `*` 星号表示强调，一个斜体两个粗体
- `[]()` 方括号显示文本，圆括号是链接
- `![]()` 感叹号表示图片
- `>` 大于号像箭头，指向引用内容

## 在线工具

- [Markdown 在线编辑器](https://markdown.com.cn/editor/)
- [表格生成器](https://tableconvert.com/)
- [Emoji 速查](https://www.webfx.com/tools/emoji-cheat-sheet/)

## 进一步学习

- [基本语法详解](/zh/basic/overview)
- [扩展语法](/zh/extended/)
- [高级用法](/zh/advanced/) 