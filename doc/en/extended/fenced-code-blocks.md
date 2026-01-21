---
title: Markdown Fenced Code Block Extension
description: Detailed explanation of Markdown fenced code block syntax, syntax highlighting, and advanced usage.
---

# Fenced Code Blocks

Fenced code blocks are an important feature of Markdown's extended syntax, providing more powerful code display capabilities than basic code blocks, including syntax highlighting, line numbers, file names, and other advanced features.

## Basic Fenced Code Blocks

### Three Backticks

Use three backticks ``` to create a code block:

````markdown
```
function hello() {
    console.log("Hello, World!");
}
```
````

**Rendered output**:

```
function hello() {
    console.log("Hello, World!");
}
```

### Three Tildes

You can also use three tildes ~~~ to create a code block:

````markdown
~~~
function hello() {
    console.log("Hello, World!");
}
~~~
````

**Rendered output**:

~~~
function hello() {
    console.log("Hello, World!");
}
~~~

## Syntax Highlighting

### Specify Programming Language

Specify the language name after the opening marker to enable syntax highlighting:

````markdown
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```
````

**Rendered output**:

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

### Common Language Examples

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

# Example usage
numbers = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(numbers))
```
````

**Rendered output**:

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

# Example usage
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

**Rendered output**:

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

**Rendered output**:

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

## Advanced Features

### Line Highlighting

Some Markdown processors support highlighting specific lines:

````markdown
```javascript {2,4-6}
function calculateTotal(items) {
    let total = 0; // This line is highlighted
    
    for (const item of items) { // These lines are highlighted
        total += item.price * item.quantity;
    } // Highlight ends
    
    return total;
}
```
````

### Show Line Numbers

Display code line numbers:

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

### File Name Title

Display code file name:

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

### Code Block Diff Display

Show code changes:

````markdown
```diff
function calculateTax(amount) {
-   return amount * 0.05; // Old tax rate
+   return amount * 0.08; // New tax rate
}

+ // New function
+ function calculateDiscount(amount, percentage) {
+     return amount * (percentage / 100);
+ }
```
````

**Rendered output**:

```diff
function calculateTax(amount) {
-   return amount * 0.05; // Old tax rate
+   return amount * 0.08; // New tax rate
}

+ // New function
+ function calculateDiscount(amount, percentage) {
+     return amount * (percentage / 100);
+ }
```

## Configuration File Examples

### JSON Configuration

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

**Rendered output**:

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

### YAML Configuration

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

**Rendered output**:

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

### SQL Query

````markdown
```sql
-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- Query active users
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

**Rendered output**:

```sql
-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- Query active users
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

## Shell Scripts and Commands

### Bash Script

````markdown
```bash
#!/bin/bash

# Deployment script
set -e

APP_NAME="my-app"
DEPLOY_DIR="/var/www/${APP_NAME}"
BACKUP_DIR="/var/backups/${APP_NAME}"
CURRENT_DATE=$(date +%Y%m%d_%H%M%S)

echo "Starting deployment of ${APP_NAME}..."

# Create backup
if [ -d "$DEPLOY_DIR" ]; then
    echo "Creating backup at ${BACKUP_DIR}/${CURRENT_DATE}"
    mkdir -p "$BACKUP_DIR"
    cp -r "$DEPLOY_DIR" "${BACKUP_DIR}/${CURRENT_DATE}"
fi

# Stop service
echo "Stopping service..."
sudo systemctl stop $APP_NAME || true

# Deploy new version
echo "Deploying new version..."
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
tar -xzf "${APP_NAME}.tar.gz" -C "$DEPLOY_DIR"

# Install dependencies
echo "Installing dependencies..."
cd "$DEPLOY_DIR"
npm ci --production

# Start service
echo "Starting service..."
sudo systemctl start $APP_NAME
sudo systemctl enable $APP_NAME

echo "Deployment complete!"
```
````

**Rendered output**:

```bash
#!/bin/bash

# Deployment script
set -e

APP_NAME="my-app"
DEPLOY_DIR="/var/www/${APP_NAME}"
BACKUP_DIR="/var/backups/${APP_NAME}"
CURRENT_DATE=$(date +%Y%m%d_%H%M%S)

echo "Starting deployment of ${APP_NAME}..."

# Create backup
if [ -d "$DEPLOY_DIR" ]; then
    echo "Creating backup at ${BACKUP_DIR}/${CURRENT_DATE}"
    mkdir -p "$BACKUP_DIR"
    cp -r "$DEPLOY_DIR" "${BACKUP_DIR}/${CURRENT_DATE}"
fi

# Stop service
echo "Stopping service..."
sudo systemctl stop $APP_NAME || true

# Deploy new version
echo "Deploying new version..."
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
tar -xzf "${APP_NAME}.tar.gz" -C "$DEPLOY_DIR"

# Install dependencies
echo "Installing dependencies..."
cd "$DEPLOY_DIR"
npm ci --production

# Start service
echo "Starting service..."
sudo systemctl start $APP_NAME
sudo systemctl enable $APP_NAME

echo "Deployment complete!"
```

## Common Errors and Solutions

### 1. Mismatched Number of Backticks

````markdown
❌ Error:
```javascript
function hello() {
    console.log("Hello");
}
``  ← Only two backticks

✅ Correct:
```javascript
function hello() {
    console.log("Hello");
}
```  ← Three backticks
````

### 2. Incorrect Language Identifier

````markdown
❌ Error:
```js  ← Some processors do not recognize
function hello() {}
```

✅ Recommended:
```javascript  ← Use full name
function hello() {}
```
````

### 3. Nested Code Blocks

````markdown
❌ Problem: Cannot display code containing ```

✅ Solution: Use four backticks to wrap three backticks
````markdown
```javascript
console.log("hello");
```
````
````

### 4. Special Character Handling

````markdown
```markdown
<!-- Display markdown syntax in a markdown code block -->
\```javascript  ← Escape backticks
code here
\```
```
````

## Supported Languages List

### Programming Languages

| Language | Identifier | Alias |
|----------|------------|-------|
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

### Markup and Configuration Languages

| Language | Identifier | Usage |
|----------|------------|-------|
| HTML | `html` | Web markup |
| CSS | `css` | Stylesheet |
| XML | `xml` | Data exchange |
| JSON | `json` | Data format |
| YAML | `yaml`, `yml` | Configuration file |
| TOML | `toml` | Configuration file |
| Markdown | `markdown`, `md` | Documentation |

### Data and Query Languages

| Language | Identifier | Usage |
|----------|------------|-------|
| SQL | `sql` | Database query |
| GraphQL | `graphql` | API query |
| R | `r` | Statistical computing |
| MATLAB | `matlab` | Numerical computing |

### Shell and Scripts

| Language | Identifier | Usage |
|----------|------------|-------|
| Bash | `bash`, `sh` | Unix Shell |
| PowerShell | `powershell`, `ps1` | Windows Shell |
| Batch | `batch`, `bat` | Windows Batch |
| Dockerfile | `dockerfile` | Container configuration |

## Best Practices

### 1. Choose the Appropriate Language Identifier

````markdown
✅ Recommended: Use the accurate language identifier
```typescript
interface User {
    id: number;
    name: string;
}
```

❌ Not recommended: Use the wrong identifier
```javascript  ← This is TypeScript code
interface User {
    id: number;
    name: string;
}
```
````

### 2. Add Meaningful Comments

````markdown
✅ Recommended: Include explanatory comments
```python
def fibonacci(n):
    """Calculate the nth Fibonacci number"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

❌ Not recommended: Code without explanation
```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```
````

### 3. Keep Code Concise

````markdown
✅ Recommended: Show core logic
```javascript
// User authentication middleware
function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    // Verification logic...
    next();
}
```

❌ Not recommended: Too much irrelevant code
```javascript
// Omitted a lot of unrelated code...
```
````

### 4. Use File Name Titles

````markdown
✅ Recommended: Show file name
```javascript title="middleware/auth.js"
export function authenticate(req, res, next) {
    // Authentication logic
}
```

✅ Recommended: Show config file name
```json title="package.json"
{
  "name": "my-app",
  "version": "1.0.0"
}
```
````

## Practical Application Scenarios

### 1. API Documentation

````markdown
## User Login API

**Request Example:**

```bash
curl -X POST https://api.example.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

**Response Example:**

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "Zhang San"
    }
  }
}
```

**Error Response:**

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

### 2. Installation Guide

````markdown
## Environment Setup

### 1. Install Node.js

**macOS (using Homebrew):**

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Verify installation
node --version
npm --version
```

**Ubuntu/Debian:**

```bash
# Update package list
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

**Windows (using Chocolatey):**

```powershell
# Install Chocolatey (run as administrator)
Set-ExecutionPolicy Bypass -Scope Process -Force; 
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; 
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Install Node.js
choco install nodejs

# Verify installation
node --version
npm --version
```
````

### 3. Code Comparison

````markdown
## Before and After Refactoring

**Before (Callback Hell):**

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

**After (async/await):**

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

## HTML Output

Fenced code blocks are converted to HTML:

````markdown
```javascript
function hello() {
    console.log("Hello");
}
```
````

Converted to:

```html
<pre><code class="language-javascript">
function hello() {
    console.log("Hello");
}
</code></pre>
```

## Related Syntax

- [Basic Code Syntax](/basic/code) - Inline code and basic code blocks
- [HTML Syntax](/advanced/html) - HTML enhancements
- [Overview of Extended Syntax](/extended/) - Other extended features

## Practice

Try creating the following code blocks:

1. A collection of code examples in multiple programming languages
2. A complete API usage tutorial (including request and response)
3. A deployment script documentation
4. A SQL script for database design

## Tools and Plugins

### Syntax Highlighting Libraries

- **Prism.js**: Lightweight syntax highlighting
- **highlight.js**: Feature-rich highlighting library
- **CodeMirror**: Online code editor
- **Monaco Editor**: Core of VS Code editor

### Markdown Processors

- **markdown-it**: Extensible Markdown parser
- **remark**: Unified Markdown processor
- **marked**: Fast Markdown parser
- **gray-matter**: Front Matter parser

### Editor Plugins

- **VS Code**: Markdown Preview Enhanced
- **Sublime Text**: MarkdownEditing
- **Atom**: markdown-preview-plus
- **Vim**: vim-markdown 