---
title: Markdown Code Syntax
description: A comprehensive guide to inline code, code blocks, syntax highlighting, and multi-language code display in Markdown.
---

# Markdown Code Syntax

Code is a crucial element in technical documentation. Markdown provides several ways to display code, including inline code and code blocks.

## Markdown Inline Code

### Markdown Basic Syntax

Use backticks `` ` `` to wrap code:

```markdown
This is an example of `inline code`.
Use the `console.log()` function to output information.
```

**Rendered Output:**

This is an example of `inline code`.
Use the `console.log()` function to output information.

### Markdown Code Containing Backticks

When the code itself contains backticks, use double backticks:

```markdown
``Use `console.log()` function``
```

**Rendered Output:**

``Use `console.log()` function``

### Handling Multiple Backticks

```markdown
```Code with multiple backticks `` ` ``` here```
```

**Rendered Output:**

```Code with multiple backticks `` ` ``` here```

## Markdown Code Blocks

### Markdown Indented Code Blocks

Use 4 spaces or 1 tab to indent:

```markdown
    function hello() {
        console.log("Hello, World!");
    }
```

**Rendered Output:**

    function hello() {
        console.log("Hello, World!");
    }

### Markdown Fenced Code Blocks

Use three backticks ``` or tildes ~~~ to wrap code:

````markdown
```
function hello() {
    console.log("Hello, World!");
}
```
````

**Rendered Output:**

```
function hello() {
    console.log("Hello, World!");
}
```

### Specifying Programming Language

Specify the language name after the opening ``` to enable syntax highlighting:

````markdown
```javascript
function hello(name) {
    console.log(`Hello, ${name}!`);
}
```
````

**Rendered Output:**

```javascript
function hello(name) {
    console.log(`Hello, ${name}!`);
}
```

## Common Programming Language Examples

### JavaScript

````markdown
```javascript
// Example of an async function
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

**Rendered Output:**

```javascript
// Example of an async function
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
# Example of a class definition
class Calculator:
    def __init__(self):
        self.result = 0
    
    def add(self, x, y):
        return x + y
    
    def multiply(self, x, y):
        return x * y

# Usage example
calc = Calculator()
print(calc.add(5, 3))
```
````

**Rendered Output:**

```python
# Example of a class definition
class Calculator:
    def __init__(self):
        self.result = 0
    
    def add(self, x, y):
        return x + y
    
    def multiply(self, x, y):
        return x * y

# Usage example
calc = Calculator()
print(calc.add(5, 3))
```

### HTML

````markdown
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sample Page</title>
</head>
<body>
    <h1>Welcome to Markdown</h1>
    <p>This is a sample paragraph.</p>
</body>
</html>
```
````

**Rendered Output:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sample Page</title>
</head>
<body>
    <h1>Welcome to Markdown</h1>
    <p>This is a sample paragraph.</p>
</body>
</html>
```

### CSS

````markdown
```css
/* Responsive layout example */
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

**Rendered Output:**

```css
/* Responsive layout example */
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

# Script example: batch process files
for file in *.txt; do
    if [ -f "$file" ]; then
        echo "Processing $file"
        cp "$file" "backup_$file"
    fi
done

# Function definition
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

**Rendered Output:**

```bash
#!/bin/bash

# Script example: batch process files
for file in *.txt; do
    if [ -f "$file" ]; then
        echo "Processing $file"
        cp "$file" "backup_$file"
    fi
done

# Function definition
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
  "description": "Markdown Chinese Tutorial",
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

**Rendered Output:**

```json
{
  "name": "markdown-tutorial",
  "version": "1.0.0",
  "description": "Markdown Chinese Tutorial",
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

## Advanced Code Block Features

### Show Line Numbers

Some Markdown processors support showing line numbers:

````markdown
```javascript {1}
// This is line one
function example() {
    console.log("Hello");
}
```
````

### Line Highlighting

Highlight specific lines:

````markdown
```javascript {2-3}
function example() {
    console.log("This line is highlighted");  // highlighted
    return true;               // highlighted
}
```
````

### Show Filename

Display the code filename:

````markdown
```javascript title="app.js"
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
```
````

## Common Errors and Solutions

### 1. Mismatched Number of Backticks

````markdown
❌ Incorrect:
```javascript
function hello() {
    console.log("Hello");
}
``  ← Mismatched number of backticks

✅ Correct:
```javascript
function hello() {
    console.log("Hello");
}
```
````

### 2. Inconsistent Indentation

```markdown
❌ Incorrect: Indented code block
    First line (4 spaces)
  Second line (2 spaces)  ← Inconsistent indentation

✅ Correct: Indented code block
    First line (4 spaces)
    Second line (4 spaces)
```

### 3. Incorrect Language Name

````markdown
❌ Incorrect:
```js  ← should be javascript
function hello() {}
```

✅ Correct:
```javascript
function hello() {}
```
````

## Supported Language List

Common language identifiers:

| Language | Identifier | Example |
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

## Best Practices

### 1. Choose the Appropriate Code Format

```markdown
✅ Recommended: Use inline format for short code
Use the `Array.map()` method to process arrays.

✅ Recommended: Use code blocks for long code
function processArray(arr) {
    return arr.map(item => item * 2);
}
```

### 2. Add Proper Comments

````markdown
✅ Recommended: Include explanatory comments
```javascript
// Calculate the average of array elements
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
```
````

### 3. Use Correct Language Identifiers

````markdown
✅ Recommended: Clear language identifier
```typescript
interface User {
    id: number;
    name: string;
}
```

❌ Not recommended: Vague language identifier
```text
interface User {
    id: number;
    name: string;
}
```
````

### 4. Keep Code Concise

````markdown
✅ Recommended: Show core logic
```javascript
// User authentication
function authenticate(token) {
    return validateToken(token);
}
```

❌ Not recommended: Too much irrelevant detail
```javascript
// This is a long code with lots of unrelated details...
```
````

## HTML Output

Markdown code is converted to HTML:

```markdown
`inline code`
```

Converted to:

```html
<code>inline code</code>
```

Code block:

````markdown
```javascript
function hello() {}
```
````

Converted to:

```html
<pre><code class="language-javascript">
function hello() {}
</code></pre>
```

## Practical Examples

### API Documentation

````markdown
## User Login

Send a POST request to `/api/login`:

```bash
curl -X POST https://api.example.com/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

Sample response:

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "Zhang San"
  }
}
```
````

### Configuration File Example

````markdown
## Project Configuration

Create a `config.json` file:

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

Update `package.json` scripts:

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

### Installation Guide

````markdown
## Environment Setup

1. Install Node.js:

```bash
# macOS (using Homebrew)
brew install node

# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Windows (using Chocolatey)
choco install nodejs
```

2. Verify installation:

```bash
node --version
npm --version
```

3. Initialize the project:

```bash
mkdir my-project
cd my-project
npm init -y
```
````

## Related Syntax

- [Fenced Code Blocks](/extended/fenced-code-blocks) - Extended code features
- [Emphasis Syntax](/basic/emphasis) - Text formatting
- [Link Syntax](/basic/links) - Creating links
- [Escaping Characters](/basic/escaping) - Handling special characters

## Practice

Try creating the following:

1. A collection of code examples in various programming languages
2. An API usage tutorial with request and response code
3. An installation guide with command-line instructions for different systems
4. A configuration file template with detailed comments 