---
title: Markdown 围栏代码块扩展
description: 详细讲解 Markdown 围栏代码块（Fenced Code Block）语法、语法高亮及高级用法。
---

# 围栏代码块

围栏代码块是 Markdown 扩展语法的重要功能，提供了比基本代码块更强大的代码展示能力，支持语法高亮、行号、文件名等高级特性。

## 基本围栏代码块

### 三个反引号

使用三个反引号 ``` 创建代码块：

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

### 三个波浪号

也可以使用三个波浪号 ~~~ 创建代码块：

````markdown
~~~
function hello() {
    console.log("Hello, World!");
}
~~~
````

**渲染效果**：

~~~
function hello() {
    console.log("Hello, World!");
}
~~~

## 语法高亮

### 指定编程语言

在开头标记后指定语言名称启用语法高亮：

````markdown
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```
````

**渲染效果**：

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

### 常用语言示例

#### Python

````markdown
```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

# 示例使用
numbers = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(numbers))
```
````

**渲染效果**：

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

# 示例使用
numbers = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(numbers))
```

#### TypeScript

````markdown
```typescript
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

class UserService {
    private users: User[] = [];

    async createUser(userData: Omit<User, 'id'>): Promise<User> {
        const newUser: User = {
            id: Date.now(),
            ...userData
        };
        
        this.users.push(newUser);
        return newUser;
    }

    async getUserById(id: number): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }
}
```
````

**渲染效果**：

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

class UserService {
    private users: User[] = [];

    async createUser(userData: Omit<User, 'id'>): Promise<User> {
        const newUser: User = {
            id: Date.now(),
            ...userData
        };
        
        this.users.push(newUser);
        return newUser;
    }

    async getUserById(id: number): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }
}
```

#### Go

````markdown
```go
package main

import (
    "fmt"
    "net/http"
    "log"
)

type Server struct {
    port string
}

func NewServer(port string) *Server {
    return &Server{port: port}
}

func (s *Server) Start() error {
    http.HandleFunc("/", s.handleHome)
    http.HandleFunc("/api/health", s.handleHealth)
    
    fmt.Printf("Server starting on port %s\n", s.port)
    return http.ListenAndServe(":"+s.port, nil)
}

func (s *Server) handleHome(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Welcome to Go Server!")
}

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprintf(w, `{"status": "healthy"}`)
}

func main() {
    server := NewServer("8080")
    log.Fatal(server.Start())
}
```
````

**渲染效果**：

```go
package main

import (
    "fmt"
    "net/http"
    "log"
)

type Server struct {
    port string
}

func NewServer(port string) *Server {
    return &Server{port: port}
}

func (s *Server) Start() error {
    http.HandleFunc("/", s.handleHome)
    http.HandleFunc("/api/health", s.handleHealth)
    
    fmt.Printf("Server starting on port %s\n", s.port)
    return http.ListenAndServe(":"+s.port, nil)
}

func (s *Server) handleHome(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Welcome to Go Server!")
}

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprintf(w, `{"status": "healthy"}`)
}

func main() {
    server := NewServer("8080")
    log.Fatal(server.Start())
}
```

## 高级功能

### 行高亮

某些 Markdown 处理器支持高亮特定行：

````markdown
```javascript {2,4-6}
function calculateTotal(items) {
    let total = 0; // 这行被高亮
    
    for (const item of items) { // 这几行被高亮
        total += item.price * item.quantity;
    } // 高亮结束
    
    return total;
}
```
````

### 行号显示

显示代码行号：

````markdown
```python:line-numbers
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```
````

### 文件名标题

显示代码文件名：

````markdown
```typescript title="userService.ts"
export class UserService {
    private apiUrl = '/api/users';

    async getUsers(): Promise<User[]> {
        const response = await fetch(this.apiUrl);
        return response.json();
    }

    async createUser(user: CreateUserDto): Promise<User> {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        return response.json();
    }
}
```
````

### 代码块差异显示

显示代码变更：

````markdown
```diff
function calculateTax(amount) {
-   return amount * 0.05; // 旧的税率
+   return amount * 0.08; // 新的税率
}

+ // 新增的函数
+ function calculateDiscount(amount, percentage) {
+     return amount * (percentage / 100);
+ }
```
````

**渲染效果**：

```diff
function calculateTax(amount) {
-   return amount * 0.05; // 旧的税率
+   return amount * 0.08; // 新的税率
}

+ // 新增的函数
+ function calculateDiscount(amount, percentage) {
+     return amount * (percentage / 100);
+ }
```

## 配置文件示例

### JSON 配置

````markdown
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.3",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0",
    "webpack": "^5.82.0"
  }
}
```
````

**渲染效果**：

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.3",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0",
    "webpack": "^5.82.0"
  }
}
```

### YAML 配置

````markdown
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web
        image: nginx:1.21
        ports:
        - containerPort: 80
        env:
        - name: NODE_ENV
          value: production
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
```
````

**渲染效果**：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web
        image: nginx:1.21
        ports:
        - containerPort: 80
        env:
        - name: NODE_ENV
          value: production
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
```

### SQL 查询

````markdown
```sql
-- 创建用户表
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建索引
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- 查询活跃用户
SELECT 
    u.id,
    u.username,
    u.email,
    COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at >= NOW() - INTERVAL '30 days'
GROUP BY u.id, u.username, u.email
HAVING COUNT(p.id) > 0
ORDER BY post_count DESC
LIMIT 10;
```
````

**渲染效果**：

```sql
-- 创建用户表
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建索引
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- 查询活跃用户
SELECT 
    u.id,
    u.username,
    u.email,
    COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at >= NOW() - INTERVAL '30 days'
GROUP BY u.id, u.username, u.email
HAVING COUNT(p.id) > 0
ORDER BY post_count DESC
LIMIT 10;
```

## Shell 脚本和命令

### Bash 脚本

````markdown
```bash
#!/bin/bash

# 部署脚本
set -e

APP_NAME="my-app"
DEPLOY_DIR="/var/www/${APP_NAME}"
BACKUP_DIR="/var/backups/${APP_NAME}"
CURRENT_DATE=$(date +%Y%m%d_%H%M%S)

echo "开始部署 ${APP_NAME}..."

# 创建备份
if [ -d "$DEPLOY_DIR" ]; then
    echo "创建备份到 ${BACKUP_DIR}/${CURRENT_DATE}"
    mkdir -p "$BACKUP_DIR"
    cp -r "$DEPLOY_DIR" "${BACKUP_DIR}/${CURRENT_DATE}"
fi

# 停止服务
echo "停止服务..."
sudo systemctl stop $APP_NAME || true

# 部署新版本
echo "部署新版本..."
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
tar -xzf "${APP_NAME}.tar.gz" -C "$DEPLOY_DIR"

# 安装依赖
echo "安装依赖..."
cd "$DEPLOY_DIR"
npm ci --production

# 启动服务
echo "启动服务..."
sudo systemctl start $APP_NAME
sudo systemctl enable $APP_NAME

echo "部署完成！"
```
````

**渲染效果**：

```bash
#!/bin/bash

# 部署脚本
set -e

APP_NAME="my-app"
DEPLOY_DIR="/var/www/${APP_NAME}"
BACKUP_DIR="/var/backups/${APP_NAME}"
CURRENT_DATE=$(date +%Y%m%d_%H%M%S)

echo "开始部署 ${APP_NAME}..."

# 创建备份
if [ -d "$DEPLOY_DIR" ]; then
    echo "创建备份到 ${BACKUP_DIR}/${CURRENT_DATE}"
    mkdir -p "$BACKUP_DIR"
    cp -r "$DEPLOY_DIR" "${BACKUP_DIR}/${CURRENT_DATE}"
fi

# 停止服务
echo "停止服务..."
sudo systemctl stop $APP_NAME || true

# 部署新版本
echo "部署新版本..."
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
tar -xzf "${APP_NAME}.tar.gz" -C "$DEPLOY_DIR"

# 安装依赖
echo "安装依赖..."
cd "$DEPLOY_DIR"
npm ci --production

# 启动服务
echo "启动服务..."
sudo systemctl start $APP_NAME
sudo systemctl enable $APP_NAME

echo "部署完成！"
```

## 常见错误和解决方案

### 1. 反引号数量不匹配

````markdown
❌ 错误：
```javascript
function hello() {
    console.log("Hello");
}
``  ← 只有两个反引号

✅ 正确：
```javascript
function hello() {
    console.log("Hello");
}
```  ← 三个反引号
````

### 2. 语言标识符错误

````markdown
❌ 错误：
```js  ← 某些处理器不识别
function hello() {}
```

✅ 推荐：
```javascript  ← 使用完整名称
function hello() {}
```
````

### 3. 嵌套代码块

````markdown
❌ 问题：无法显示包含 ``` 的代码

✅ 解决：使用四个反引号包装三个反引号
````markdown
```javascript
console.log("hello");
```
````
````

### 4. 特殊字符处理

````markdown
```markdown
<!-- 在 markdown 代码块中显示 markdown 语法 -->
\```javascript  ← 转义反引号
code here
\```
```
````

## 支持的语言列表

### 编程语言

| 语言 | 标识符 | 别名 |
|------|--------|------|
| JavaScript | `javascript` | `js` |
| TypeScript | `typescript` | `ts` |
| Python | `python` | `py` |
| Java | `java` | |
| C++ | `cpp` | `c++`, `cxx` |
| C# | `csharp` | `cs` |
| Go | `go` | `golang` |
| Rust | `rust` | `rs` |
| PHP | `php` | |
| Ruby | `ruby` | `rb` |
| Swift | `swift` | |
| Kotlin | `kotlin` | `kt` |

### 标记和配置语言

| 语言 | 标识符 | 用途 |
|------|--------|------|
| HTML | `html` | 网页标记 |
| CSS | `css` | 样式表 |
| XML | `xml` | 数据交换 |
| JSON | `json` | 数据格式 |
| YAML | `yaml`, `yml` | 配置文件 |
| TOML | `toml` | 配置文件 |
| Markdown | `markdown`, `md` | 文档编写 |

### 数据和查询语言

| 语言 | 标识符 | 用途 |
|------|--------|------|
| SQL | `sql` | 数据库查询 |
| GraphQL | `graphql` | API查询 |
| R | `r` | 统计计算 |
| MATLAB | `matlab` | 数值计算 |

### Shell 和脚本

| 语言 | 标识符 | 用途 |
|------|--------|------|
| Bash | `bash`, `sh` | Unix Shell |
| PowerShell | `powershell`, `ps1` | Windows Shell |
| Batch | `batch`, `bat` | Windows 批处理 |
| Dockerfile | `dockerfile` | 容器配置 |

## 最佳实践

### 1. 选择合适的语言标识符

````markdown
✅ 推荐：使用准确的语言标识符
```typescript
interface User {
    id: number;
    name: string;
}
```

❌ 不推荐：使用错误的标识符
```javascript  ← 这是 TypeScript 代码
interface User {
    id: number;
    name: string;
}
```
````

### 2. 添加有意义的注释

````markdown
✅ 推荐：包含解释性注释
```python
def fibonacci(n):
    """计算斐波那契数列的第n项"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

❌ 不推荐：缺少说明的代码
```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```
````

### 3. 保持代码简洁

````markdown
✅ 推荐：展示核心逻辑
```javascript
// 用户认证中间件
function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    // 验证逻辑...
    next();
}
```

❌ 不推荐：包含过多细节
```javascript
// 省略大量无关代码...
```
````

### 4. 使用文件名标题

````markdown
✅ 推荐：显示文件名
```javascript title="middleware/auth.js"
export function authenticate(req, res, next) {
    // 认证逻辑
}
```

✅ 推荐：显示配置文件名
```json title="package.json"
{
  "name": "my-app",
  "version": "1.0.0"
}
```
````

## 实际应用场景

### 1. API 文档

````markdown
## 用户登录 API

**请求示例：**

```bash
curl -X POST https://api.example.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

**响应示例：**

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "张三"
    }
  }
}
```

**错误响应：**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Invalid email or password"
  }
}
```
````

### 2. 安装教程

````markdown
## 环境配置

### 1. 安装 Node.js

**macOS (使用 Homebrew):**

```bash
# 安装 Homebrew（如果还没有）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node

# 验证安装
node --version
npm --version
```

**Ubuntu/Debian:**

```bash
# 更新包列表
sudo apt update

# 安装 Node.js 和 npm
sudo apt install nodejs npm

# 验证安装
node --version
npm --version
```

**Windows (使用 Chocolatey):**

```powershell
# 安装 Chocolatey（使用管理员权限）
Set-ExecutionPolicy Bypass -Scope Process -Force; 
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; 
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# 安装 Node.js
choco install nodejs

# 验证安装
node --version
npm --version
```
````

### 3. 代码对比

````markdown
## 重构前后对比

**重构前（回调地狱）：**

```javascript
function getUserData(userId, callback) {
    getUser(userId, function(err, user) {
        if (err) {
            callback(err);
            return;
        }
        
        getPosts(user.id, function(err, posts) {
            if (err) {
                callback(err);
                return;
            }
            
            getComments(posts[0].id, function(err, comments) {
                if (err) {
                    callback(err);
                    return;
                }
                
                callback(null, { user, posts, comments });
            });
        });
    });
}
```

**重构后（async/await）：**

```javascript
async function getUserData(userId) {
    try {
        const user = await getUser(userId);
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].id);
        
        return { user, posts, comments };
    } catch (error) {
        throw error;
    }
}
```
````

## HTML 输出

围栏代码块转换为 HTML：

````markdown
```javascript
function hello() {
    console.log("Hello");
}
```
````

转换为：

```html
<pre><code class="language-javascript">
function hello() {
    console.log("Hello");
}
</code></pre>
```

## 相关语法

- [基本代码语法](/zh/basic/code) - 行内代码和基本代码块
- [HTML语法](/zh/advanced/html) - HTML增强功能
- [扩展语法概述](/zh/extended/) - 其他扩展功能

## 练习

尝试创建以下代码块：

1. 一个包含多种编程语言的代码示例集合
2. 一个完整的 API 使用教程（包含请求和响应）
3. 一个部署脚本的说明文档
4. 一个数据库设计的 SQL 脚本

## 工具和插件

### 语法高亮库

- **Prism.js**: 轻量级语法高亮
- **highlight.js**: 功能丰富的高亮库
- **CodeMirror**: 在线代码编辑器
- **Monaco Editor**: VS Code 编辑器核心

### Markdown 处理器

- **markdown-it**: 可扩展的 Markdown 解析器
- **remark**: 统一的 Markdown 处理器
- **marked**: 快速的 Markdown 解析器
- **gray-matter**: Front Matter 解析

### 编辑器插件

- **VS Code**: Markdown Preview Enhanced
- **Sublime Text**: MarkdownEditing
- **Atom**: markdown-preview-plus
- **Vim**: vim-markdown 