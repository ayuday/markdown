---
title: Markdown 代码语法
description: 系统讲解 Markdown 中行内代码、代码块、语法高亮及多语言代码展示方法。
---

# 代码语法

代码是技术文档中的重要元素。Markdown 提供了多种方式来显示代码，包括行内代码和代码块。

## 行内代码

### 基本语法

使用反引号 `` ` `` 包围代码：

```markdown
这是一个 `行内代码` 示例。
使用 `console.log()` 函数输出信息。
```

**渲染效果**：

这是一个 `行内代码` 示例。
使用 `console.log()` 函数输出信息。

### 包含反引号的代码

当代码本身包含反引号时，使用双反引号：

```markdown
``使用 `console.log()` 函数``
```

**渲染效果**：

``使用 `console.log()` 函数``

### 多个反引号的处理

```markdown
```包含多个反引号的代码 `` ` ``` 在这里```
```

**渲染效果**：

```包含多个反引号的代码 `` ` ``` 在这里```

## 代码块

### 缩进代码块

使用 4 个空格或 1 个制表符缩进：

```markdown
    function hello() {
        console.log("Hello, World!");
    }
```

**渲染效果**：

    function hello() {
        console.log("Hello, World!");
    }

### 围栏代码块

使用三个反引号 ``` 或波浪号 ~~~ 包围代码：

````markdown
```
function hello() {
    console.log("Hello, World!");
}
```
````

**渲染效果**：

```
function hello() {
    console.log("Hello, World!");
}
```

### 指定编程语言

在开头的 ``` 后指定语言名称以启用语法高亮：

````markdown
```javascript
function hello(name) {
    console.log(`Hello, ${name}!`);
}
```
````

**渲染效果**：

```javascript
function hello(name) {
    console.log(`Hello, ${name}!`);
}
```

## 常见编程语言示例

### JavaScript

````markdown
```javascript
// 异步函数示例
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```
````

**渲染效果**：

```javascript
// 异步函数示例
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### Python

````markdown
```python
# 类定义示例
class Calculator:
    def __init__(self):
        self.result = 0
    
    def add(self, x, y):
        return x + y
    
    def multiply(self, x, y):
        return x * y

# 使用示例
calc = Calculator()
print(calc.add(5, 3))
```
````

**渲染效果**：

```python
# 类定义示例
class Calculator:
    def __init__(self):
        self.result = 0
    
    def add(self, x, y):
        return x + y
    
    def multiply(self, x, y):
        return x * y

# 使用示例
calc = Calculator()
print(calc.add(5, 3))
```

### HTML

````markdown
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>示例页面</title>
</head>
<body>
    <h1>欢迎使用 Markdown</h1>
    <p>这是一个示例段落。</p>
</body>
</html>
```
````

**渲染效果**：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>示例页面</title>
</head>
<body>
    <h1>欢迎使用 Markdown</h1>
    <p>这是一个示例段落。</p>
</body>
</html>
```

### CSS

````markdown
```css
/* 响应式布局示例 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

@media (max-width: 768px) {
    .container {
        padding: 0 10px;
    }
}

.button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.button:hover {
    background-color: #0056b3;
}
```
````

**渲染效果**：

```css
/* 响应式布局示例 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

@media (max-width: 768px) {
    .container {
        padding: 0 10px;
    }
}

.button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.button:hover {
    background-color: #0056b3;
}
```

### Bash/Shell

````markdown
```bash
#!/bin/bash

# 脚本示例：批量处理文件
for file in *.txt; do
    if [ -f "$file" ]; then
        echo "Processing $file"
        cp "$file" "backup_$file"
    fi
done

# 函数定义
function check_dependencies() {
    command -v git >/dev/null 2>&1 || {
        echo "Git is required but not installed."
        exit 1
    }
}

check_dependencies
echo "All dependencies satisfied."
```
````

**渲染效果**：

```bash
#!/bin/bash

# 脚本示例：批量处理文件
for file in *.txt; do
    if [ -f "$file" ]; then
        echo "Processing $file"
        cp "$file" "backup_$file"
    fi
done

# 函数定义
function check_dependencies() {
    command -v git >/dev/null 2>&1 || {
        echo "Git is required but not installed."
        exit 1
    }
}

check_dependencies
echo "All dependencies satisfied."
```

### JSON

````markdown
```json
{
  "name": "markdown-tutorial",
  "version": "1.0.0",
  "description": "Markdown 中文教程",
  "main": "index.js",
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  },
  "dependencies": {
    "vitepress": "^1.0.0"
  },
  "author": "Your Name",
  "license": "MIT"
}
```
````

**渲染效果**：

```json
{
  "name": "markdown-tutorial",
  "version": "1.0.0",
  "description": "Markdown 中文教程",
  "main": "index.js",
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  },
  "dependencies": {
    "vitepress": "^1.0.0"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

## 高级代码块功能

### 行号显示

某些 Markdown 处理器支持显示行号：

````markdown
```javascript {1}
// 这是第一行
function example() {
    console.log("Hello");
}
```
````

### 行高亮

高亮特定行：

````markdown
```javascript {2-3}
function example() {
    console.log("这行被高亮");  // 高亮
    return true;               // 高亮
}
```
````

### 文件名显示

显示代码文件名：

````markdown
```javascript title="app.js"
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
```
````

## 常见错误和解决方案

### 1. 反引号数量不匹配

````markdown
❌ 错误：
```javascript
function hello() {
    console.log("Hello");
}
``  ← 反引号数量不匹配

✅ 正确：
```javascript
function hello() {
    console.log("Hello");
}
```
````

### 2. 缩进不一致

```markdown
❌ 错误：缩进代码块
    第一行（4个空格）
  第二行（2个空格）  ← 缩进不一致

✅ 正确：缩进代码块
    第一行（4个空格）
    第二行（4个空格）
```

### 3. 语言名称错误

````markdown
❌ 错误：
```js  ← 应该是 javascript
function hello() {}
```

✅ 正确：
```javascript
function hello() {}
```
````

## 支持的语言列表

常见的语言标识符：

| 语言 | 标识符 | 示例 |
|------|--------|------|
| JavaScript | `javascript`, `js` | `function(){}` |
| Python | `python`, `py` | `def function():` |
| Java | `java` | `public class{}` |
| C++ | `cpp`, `c++` | `#include <iostream>` |
| C# | `csharp`, `cs` | `public class{}` |
| Go | `go` | `func main(){}` |
| Rust | `rust`, `rs` | `fn main(){}` |
| TypeScript | `typescript`, `ts` | `interface{}` |
| PHP | `php` | `<?php` |
| Ruby | `ruby`, `rb` | `def method` |
| SQL | `sql` | `SELECT * FROM` |
| HTML | `html` | `<div></div>` |
| CSS | `css` | `.class{}` |
| XML | `xml` | `<root></root>` |
| YAML | `yaml`, `yml` | `key: value` |
| Markdown | `markdown`, `md` | `# Title` |
| Bash | `bash`, `sh` | `#!/bin/bash` |
| PowerShell | `powershell`, `ps1` | `Get-Process` |
| Dockerfile | `dockerfile` | `FROM ubuntu` |

## 最佳实践

### 1. 选择合适的代码格式

```markdown
✅ 推荐：短代码用行内格式
使用 `Array.map()` 方法处理数组。

✅ 推荐：长代码用代码块
function processArray(arr) {
    return arr.map(item => item * 2);
}
```

### 2. 添加适当的注释

````markdown
✅ 推荐：包含解释性注释
```javascript
// 计算数组元素的平均值
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
```
````

### 3. 使用正确的语言标识符

````markdown
✅ 推荐：明确的语言标识
```typescript
interface User {
    id: number;
    name: string;
}
```

❌ 不推荐：模糊的语言标识
```text
interface User {
    id: number;
    name: string;
}
```
````

### 4. 保持代码简洁

````markdown
✅ 推荐：展示核心逻辑
```javascript
// 用户认证
function authenticate(token) {
    return validateToken(token);
}
```

❌ 不推荐：包含过多细节
```javascript
// 这里是很长的代码，包含了很多不相关的细节...
```
````

## HTML 输出

Markdown 代码转换为 HTML：

```markdown
`行内代码`
```

转换为：

```html
<code>行内代码</code>
```

代码块：

````markdown
```javascript
function hello() {}
```
````

转换为：

```html
<pre><code class="language-javascript">
function hello() {}
</code></pre>
```

## 实用示例

### API 文档

````markdown
## 用户登录

发送 POST 请求到 `/api/login`：

```bash
curl -X POST https://api.example.com/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

响应示例：

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "张三"
  }
}
```
````

### 配置文件示例

````markdown
## 项目配置

创建 `config.json` 文件：

```json
{
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "myapp"
  },
  "server": {
    "port": 3000,
    "host": "0.0.0.0"
  }
}
```

更新 `package.json` 脚本：

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  }
}
```
````

### 安装指南

````markdown
## 环境配置

1. 安装 Node.js：

```bash
# macOS (使用 Homebrew)
brew install node

# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Windows (使用 Chocolatey)
choco install nodejs
```

2. 验证安装：

```bash
node --version
npm --version
```

3. 初始化项目：

```bash
mkdir my-project
cd my-project
npm init -y
```
````

## 相关语法

- [围栏代码块](/zh/extended/fenced-code-blocks) - 扩展代码功能
- [强调语法](/zh/basic/emphasis) - 文本格式化
- [链接语法](/zh/basic/links) - 创建链接
- [转义字符](/zh/basic/escaping) - 特殊字符处理

## 练习

尝试创建以下内容：

1. 一个包含多种编程语言的代码示例集合
2. 一个 API 使用教程，包含请求和响应代码
3. 一个安装指南，包含不同系统的命令行指令
4. 一个配置文件模板，包含详细的注释说明 