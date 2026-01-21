---
title: GitHub Flavored Markdown (GFM)
description: A comprehensive guide to GitHub Flavored Markdown, including all the special syntax extensions available on GitHub for issues, pull requests, READMEs, and wikis.
---

# GitHub Flavored Markdown (GFM)

GitHub Flavored Markdown (GFM) is GitHub's enhanced version of Markdown with additional features designed specifically for software development and collaboration. This guide covers all the special syntax extensions available on GitHub.

## What is GitHub Flavored Markdown (GFM)?

GitHub Flavored Markdown extends the basic Markdown syntax with features that make it more useful for:
- Documentation (READMEs, wikis)
- Issue tracking
- Pull requests
- Code review
- Project management

## Core GFM Features

### 1. Fenced Code Blocks

GFM supports fenced code blocks with language-specific syntax highlighting:

````
```javascript
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

const result = calculateSum([1, 2, 3, 4, 5]);
console.log(result); // Output: 15
```
````

```javascript
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

const result = calculateSum([1, 2, 3, 4, 5]);
console.log(result); // Output: 15
```

### 2. Syntax Highlighting

GitHub supports syntax highlighting for hundreds of languages. Some common ones include:

```bash
# Bash script
echo "Hello GitHub!"
```

```python
# Python script
def greet(name):
    return f"Hello, {name}!"
```

```java
// Java code
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello GitHub!");
    }
}
```

### 3. Task Lists

Create interactive task lists with checkboxes:

```markdown
- [x] Complete user authentication
- [x] Implement API endpoints
- [ ] Write unit tests
  - [ ] Backend tests
  - [ ] Frontend tests
- [ ] Deploy to production
```

- [x] Complete user authentication
- [x] Implement API endpoints
- [ ] Write unit tests
  - [ ] Backend tests
  - [ ] Frontend tests
- [ ] Deploy to production

### 4. Tables

GFM provides a simple syntax for creating tables:

```markdown
| Feature         | Supported | Description                     |
|-----------------|-----------|---------------------------------|
| Fenced Code     | ✅         | Language-specific highlighting |
| Task Lists      | ✅         | Interactive checkboxes         |
| Tables          | ✅         | Structured data display        |
| Mentions        | ✅         | User and team notifications    |
| Emoji           | ✅         | Visual expressions             |
```

| Feature         | Supported | Description                     |
|-----------------|-----------|---------------------------------|
| Fenced Code     | ✅         | Language-specific highlighting |
| Task Lists      | ✅         | Interactive checkboxes         |
| Tables          | ✅         | Structured data display        |
| Mentions        | ✅         | User and team notifications    |
| Emoji           | ✅         | Visual expressions             |

### 5. Mentions

Mention users or teams to notify them:

```markdown
@username - Mention a specific user
@team-name - Mention a team
```

### 6. Emoji

Add emoji using shortcodes:

```markdown
:smile: - 😊
:thumbsup: - 👍
:heart: - ❤️
:rocket: - 🚀
:warning: - ⚠️
```

:smile: - 😊
:thumbsup: - 👍
:heart: - ❤️
:rocket: - 🚀
:warning: - ⚠️

### 7. Automatic Linking

GFM automatically links certain types of content:

#### Issue and Pull Request Numbers

```markdown
#123 - Links to issue 123
PR #456 - Links to pull request 456
```

#### SHA Hashes

```markdown
a1b2c3d - Links to the commit with this SHA
```

#### User Mentions in Issues/PRs

```markdown
@username - Automatically links to the user's profile
```

#### URLs

```markdown
https://github.com - Automatically becomes a link
```

### 8. Strikethrough

GFM supports strikethrough text:

```markdown
~~This text is crossed out~~
```

~~This text is crossed out~~

### 9. Autolink References

GFM automatically creates links for:
- HTTP/HTTPS URLs
- Email addresses
- GitHub issue/PR numbers
- Commit SHAs

```markdown
https://github.com/markdownlang/markdownlang.com
user@example.com
#123
PR #456
a1b2c3d4e5f6
```

### 10. Code Block Line Highlighting

Highlight specific lines in code blocks:

````
```javascript{2,4}
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0); // Highlighted
}

const result = calculateSum([1, 2, 3, 4, 5]); // Highlighted
console.log(result);
```
````

```javascript{2,4}
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0); // Highlighted
}

const result = calculateSum([1, 2, 3, 4, 5]); // Highlighted
console.log(result);
```

### 11. Diff Syntax Highlighting

Highlight changes in code with diff syntax:

````
```diff
- const oldFunction = () => {
-   return "old value";
- };
+
+ const newFunction = () => {
+   return "new value";
+ };
```
````

```diff
- const oldFunction = () => {
-   return "old value";
- };
+
+ const newFunction = () => {
+   return "new value";
+ };
```

### 12. GitHub-Specific Markup

#### Alerts

Use special syntax for alerts in GitHub docs:

```markdown
> [!NOTE]
> This is a note alert.

> [!TIP]
> This is a tip alert.

> [!IMPORTANT]
> This is an important alert.

> [!WARNING]
> This is a warning alert.

> [!CAUTION]
> This is a caution alert.
```

> [!NOTE]
> This is a note alert.

> [!TIP]
> This is a tip alert.

> [!IMPORTANT]
> This is an important alert.

> [!WARNING]
> This is a warning alert.

> [!CAUTION]
> This is a caution alert.

#### Relative Links

Use relative links to navigate between files in the same repository:

```markdown
[README](/README.md)
[Contributing Guidelines](/CONTRIBUTING.md)
[API Documentation](/docs/api.md)
```

#### Image Links with Hover Text

```markdown
![GitHub Logo](/images/github-logo.png "GitHub Logo - Hover Text")
```

## Advanced GFM Usage

### 1. Nested Lists with Task Lists

Combine nested lists with task lists:

```markdown
## Project Roadmap

### Phase 1: Planning
- [x] Define project scope
- [x] Identify requirements
  - [x] Functional requirements
  - [x] Non-functional requirements
- [x] Create timeline

### Phase 2: Development
- [x] Set up project structure
- [ ] Implement core features
  - [x] Authentication
  - [ ] Dashboard
  - [ ] API integration
```

### 2. Tables with Emoji and Links

Enhance tables with emoji and links:

```markdown
| Component | Status | Maintainer |
|-----------|--------|------------|
| Authentication | ✅ Stable | @johndoe |
| Database | ⚠️ Needs Update | @janedoe |
| API | 🚧 In Progress | @bobsmith |
| UI | ✅ Stable | @alicesmith |
```

| Component | Status | Maintainer |
|-----------|--------|------------|
| Authentication | ✅ Stable | @johndoe |
| Database | ⚠️ Needs Update | @janedoe |
| API | 🚧 In Progress | @bobsmith |
| UI | ✅ Stable | @alicesmith |

### 3. Code Blocks in Lists

Include code blocks within lists:

```markdown
1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```
```

### 4. Quote Blocks with Code

Combine quotes with code blocks:

```markdown
> **Pro Tip:** Use the following command to quickly check your Git status:
>
> ```bash
> git status
> ```
```

> **Pro Tip:** Use the following command to quickly check your Git status:
>
> ```bash
> git status
> ```

## GFM in Different GitHub Contexts

### README Files

README files support all GFM features and are automatically rendered on repository pages.

### Issues and Pull Requests

- Use task lists for tracking progress
- Mention team members for collaboration
- Include code snippets with syntax highlighting
- Reference related issues/PRs using `#123` syntax

### Comments

- Use emoji for quick reactions
- Reference lines in code with line comments
- Use quote blocks to respond to specific points

### Wikis

- Organize content with nested pages
- Use tables for structured data
- Include code examples with syntax highlighting

## Best Practices

### 1. Code Style

```markdown
<!-- ✅ Good -->
```javascript
// Use descriptive function names
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

<!-- ❌ Avoid -->
```javascript
function f(i){return i.reduce((a,b)=>a+b.p,0)}```
```

### 2. Table Design

```markdown
<!-- ✅ Good -->
| Feature | Description | Status |
|---------|-------------|--------|
| Feature 1 | Brief description | ✅ |
| Feature 2 | Another description | 🚧 |

<!-- ❌ Avoid -->
| Feature | Description | Status | | | |
|---------|-------------|--------|---|---|---|
| Feature 1 | This description is way too long and makes the table hard to read on mobile devices | ✅ | | | |
```

### 3. Task List Usage

```markdown
<!-- ✅ Good -->
## Sprint Backlog
- [x] Complete user profile page
- [ ] Implement search functionality
  - [x] Backend API
  - [ ] Frontend component
- [ ] Write documentation

<!-- ❌ Avoid -->
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
- [ ] Task 4
- [ ] Task 5
(Too many tasks without organization)
```

## GFM vs Standard Markdown

| Feature | Standard Markdown | GitHub Flavored Markdown |
|---------|-------------------|---------------------------|
| Fenced Code Blocks | ❌ | ✅ |
| Syntax Highlighting | ❌ | ✅ |
| Task Lists | ❌ | ✅ |
| Tables | ❌ | ✅ |
| Strikethrough | ❌ | ✅ |
| Emoji | ❌ | ✅ |
| Mentions | ❌ | ✅ |
| Automatic Linking | Limited | Extensive |

## Tools for Working with GFM

### Local Editors

- **Visual Studio Code** - GFM preview and extensions
- **Typora** - Real-time GFM rendering
- **Mark Text** - GFM support

### Online Tools

- **GitHub Gist** - Create and share GFM snippets
- **Dillinger** - Online GFM editor
- **StackEdit** - GFM support with cloud sync

### Command-Line Tools

- **glow** - Terminal GFM renderer
- **pandoc** - Convert GFM to other formats
- **marked** - Node.js GFM parser

## Common Issues and Fixes

### 1. Code Block Not Highlighting

**Issue:** Code block isn't showing syntax highlighting

**Fix:** Ensure you're specifying the correct language:

```markdown
<!-- ✅ Correct -->
```javascript
console.log("Hello");
```

<!-- ❌ Incorrect -->
```jsx
console.log("Hello"); // Using jsx instead of javascript for non-JSX code
```
```

### 2. Task List Checkboxes Not Working

**Issue:** Task list checkboxes aren't interactive

**Fix:** Ensure proper syntax (space between `-` and `[ ]`):

```markdown
<!-- ✅ Correct -->
- [ ] Task

<!-- ❌ Incorrect -->
-[ ] Task (no space)
-[x] Task (no space)
```

### 3. Table Not Rendering Correctly

**Issue:** Table columns are misaligned

**Fix:** Ensure pipes are properly aligned:

```markdown
<!-- ✅ Correct -->
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |

<!-- ❌ Incorrect -->
|Column 1|Column 2|
|--|--|
|Data 1|Data 2|
```

## Next Steps

- [Learn basic Markdown syntax](/basic/overview)
- [View the syntax cheatsheet](/cheatsheet/)
- [Practice with GitHub Gist](https://gist.github.com/)
- [Read the official GitHub GFM documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

---

GitHub Flavored Markdown is a powerful tool for communication and collaboration in software development. By mastering these features, you can create more effective documentation, better track issues, and collaborate more efficiently with your team.