---
title: Markdown Task Lists Extension
description: Introduction to Markdown Task Lists syntax, nested structures, and project management applications.
---

# Task Lists

Task Lists are an extension of GitHub Flavored Markdown used to create interactive to-do lists, widely applied in project management and task tracking.

## Basic Task List Syntax

### Incomplete Tasks

Use `- [ ]` to create incomplete task items:

```markdown
- [ ] Complete project documentation
- [ ] Write unit tests
- [ ] Deploy to production environment
```

**Rendering Effect**:

- [ ] Complete project documentation
- [ ] Write unit tests
- [ ] Deploy to production environment

### Completed Tasks

Use `- [x]` or `- [X]` to create completed task items:

```markdown
- [x] Set up project framework
- [X] Design database structure
- [x] Implement user authentication
```

**Rendering Effect**:

- [x] Set up project framework
- [X] Design database structure
- [x] Implement user authentication

### Mixed Task Lists

```markdown
## Project Development Progress

- [x] Requirements analysis
- [x] Technology selection
- [ ] Frontend development
  - [x] Login page
  - [x] Main page
  - [ ] User profile page
- [ ] Backend development
  - [x] User management API
  - [ ] Order management API
  - [ ] Payment interface
- [ ] Testing
  - [ ] Unit tests
  - [ ] Integration tests
- [ ] Deployment and launch
```

**Rendering Effect**:

## Project Development Progress

- [x] Requirements analysis
- [x] Technology selection
- [ ] Frontend development
  - [x] Login page
  - [x] Main page
  - [ ] User profile page
- [ ] Backend development
  - [x] User management API
  - [ ] Order management API
  - [ ] Payment interface
- [ ] Testing
  - [ ] Unit tests
  - [ ] Integration tests
- [ ] Deployment and launch

## Task List Format Rules

### Syntax Requirements

| Element | Syntax | Description |
|---------|--------|-------------|
| List marker | `-` | Must use hyphen |
| Space | ` ` | Must have space after hyphen |
| Checkbox | `[ ]` | Space inside brackets indicates incomplete |
| Completed | `[x]` or `[X]` | 'x' inside brackets indicates completed |
| Text | Any text | Must have space after checkbox |

### Correct Format Examples

```markdown
✅ Correct format:
- [ ] Task 1
- [x] Task 2
- [X] Task 3

❌ Incorrect format:
-[ ] Missing space
-[] Missing checkbox content
- [o] Wrong marker
* [ ] Wrong list symbol
```

## Nested Task Lists

### Multi-level Task Structure

```markdown
- [ ] 📋 Product Planning
  - [x] Market research
  - [x] Competitive analysis
  - [ ] User interviews
    - [x] Prepare interview questions
    - [ ] Contact target users
    - [ ] Conduct interviews
    - [ ] Organize interview results
  - [ ] Requirements document writing

- [ ] 🎨 UI/UX Design
  - [ ] Prototype design
    - [x] Low-fidelity prototype
    - [ ] High-fidelity prototype
  - [ ] Visual design
    - [ ] Color scheme
    - [ ] Icon design
    - [ ] Page design

- [ ] 💻 Technical Development
  - [x] Technical architecture design
  - [ ] Frontend development
  - [ ] Backend development
  - [ ] Database design
```

**Rendering Effect**:

- [ ] 📋 Product Planning
  - [x] Market research
  - [x] Competitive analysis
  - [ ] User interviews
    - [x] Prepare interview questions
    - [ ] Contact target users
    - [ ] Conduct interviews
    - [ ] Organize interview results
  - [ ] Requirements document writing

- [ ] 🎨 UI/UX Design
  - [ ] Prototype design
    - [x] Low-fidelity prototype
    - [ ] High-fidelity prototype
  - [ ] Visual design
    - [ ] Color scheme
    - [ ] Icon design
    - [ ] Page design

- [ ] 💻 Technical Development
  - [x] Technical architecture design
  - [ ] Frontend development
  - [ ] Backend development
  - [ ] Database design

## Task List Enhancements

### Using Emojis for Categorization

```markdown
## 📅 This Week's Task Plan

### 🔥 High Priority
- [x] 🐛 Fix login page bug
- [ ] 🚀 Release v2.1 version
- [ ] 📊 Complete quarterly report

### 📋 Regular Tasks
- [x] 📝 Update documentation
- [ ] 🧪 Write test cases
- [ ] 🔍 Code review

### 💡 Improvement Suggestions
- [ ] ⚡ Optimize page loading speed
- [ ] 🎨 Improve user interface
- [ ] 📱 Mobile adaptation
```

**Rendering Effect**:

## 📅 This Week's Task Plan

### 🔥 High Priority
- [x] 🐛 Fix login page bug
- [ ] 🚀 Release v2.1 version
- [ ] 📊 Complete quarterly report

### 📋 Regular Tasks
- [x] 📝 Update documentation
- [ ] 🧪 Write test cases
- [ ] 🔍 Code review

### 💡 Improvement Suggestions
- [ ] ⚡ Optimize page loading speed
- [ ] 🎨 Improve user interface
- [ ] 📱 Mobile adaptation

### Adding Detailed Information

```markdown
- [ ] **User Registration Feature** `Important`
  - Implement email registration
  - Add phone number verification
  - Integrate third-party login (WeChat, QQ)
  - **Deadline**: 2023-12-15
  - **Assignee**: Zhang San

- [x] **Payment System Integration** `Completed`
  - Alipay interface
  - WeChat Pay interface
  - Bank card payment
  - **Completion Date**: 2023-11-20
  - **Assignee**: Li Si

- [ ] **Database Optimization** `In Progress`
  - Query performance optimization
  - Index rebuilding
  - Data cleanup
  - **Expected Completion**: 2023-12-10
  - **Assignee**: Wang Wu
```

**Rendering Effect**:

- [ ] **User Registration Feature** `Important`
  - Implement email registration
  - Add phone number verification
  - Integrate third-party login (WeChat, QQ)
  - **Deadline**: 2023-12-15
  - **Assignee**: Zhang San

- [x] **Payment System Integration** `Completed`
  - Alipay interface
  - WeChat Pay interface
  - Bank card payment
  - **Completion Date**: 2023-11-20
  - **Assignee**: Li Si

- [ ] **Database Optimization** `In Progress`
  - Query performance optimization
  - Index rebuilding
  - Data cleanup
  - **Expected Completion**: 2023-12-10
  - **Assignee**: Wang Wu

## Real-world Application Scenarios

### 1. Project Management

```markdown
# E-commerce Website Development Project

## Sprint 1 (2023-11-01 - 2023-11-15)

### 🎯 Sprint Goals
Complete user system and basic product management features

### 📋 Task List

#### User System 👤
- [x] User registration/login
- [x] Email verification
- [x] Password reset
- [ ] User profile management
- [ ] Avatar upload

#### Product Management 🛍️
- [x] Product list display
- [x] Product detail page
- [ ] Product search functionality
- [ ] Product category filtering
- [ ] Product review system

#### Shopping Cart 🛒
- [ ] Add to cart
- [ ] Shopping cart item management
- [ ] Shopping cart quantity update
- [ ] Shopping cart checkout

### 🐛 Bug Fixes
- [x] Login status exception
- [x] Image loading failure
- [ ] Slow page response
- [ ] Mobile adaptation issues

### 📝 Documentation Updates
- [x] API documentation
- [ ] User manual
- [ ] Deployment documentation
```

### 2. Learning Plan

```markdown
# 🎓 JavaScript Deep Learning Plan

## Phase 1: Foundation Reinforcement (Week 1-2)

### ES6+ New Features
- [x] let/const variable declaration
- [x] Arrow functions
- [x] Template literals
- [x] Destructuring assignment
- [ ] Spread operator
- [ ] Promise and async/await
- [ ] Modules (import/export)

### DOM Manipulation
- [x] Element selection and manipulation
- [x] Event handling
- [ ] Dynamic element creation
- [ ] Style manipulation
- [ ] Form handling

## Phase 2: Advanced Content (Week 3-4)

### Functional Programming
- [ ] Higher-order functions
- [ ] Pure functions and side effects
- [ ] Function composition
- [ ] Currying
- [ ] Deep understanding of closures

### Asynchronous Programming
- [x] Callback functions
- [x] Promise
- [ ] async/await best practices
- [ ] Error handling
- [ ] Concurrency control

### Performance Optimization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Memory management
- [ ] Performance monitoring tools

## Learning Notes 📚
- [x] Daily learning summary
- [ ] Code example organization
- [ ] Difficult problem records
- [ ] Practice project development
```

### 3. Meeting Records

```markdown
# 📅 Product Team Weekly Meeting (2023-11-20)

## Meeting Agenda

### 📊 Last Week's Work Review
- [x] Product requirements review
- [x] User feedback analysis
- [x] Competitive product research report
- [x] Data analysis report

### 🎯 This Week's Work Plan
- [ ] New feature prototype design
- [ ] User experience optimization plan
- [ ] Technical feasibility assessment
- [ ] Launch plan development

### 🚧 Pending Issues
- [ ] **High user churn rate**
  - Analyze churn reasons
  - Develop improvement measures
  - Track improvement effects
  
- [ ] **Slow page loading speed**
  - Technical team research
  - Optimization plan design
  - Implementation timeline

### 📋 Action Items
- [ ] Zhang San: Complete user research questionnaire (by Friday)
- [ ] Li Si: Submit prototype design (by next Tuesday)
- [ ] Wang Wu: Technical solution assessment (by next Wednesday)
- [ ] Zhao Liu: Competitive analysis update (by Thursday)

### 📝 Meeting Resolutions
- [x] Determine next month's product roadmap
- [x] Approve user experience improvement budget
- [ ] Develop team collaboration standards
```

### 4. Personal GTD System

```markdown
# 🗂️ Personal Task Management System

## 📬 Inbox
- [ ] Reply to client emails
- [ ] Organize desktop files
- [ ] Schedule dental checkup
- [ ] Research new learning courses

## 🎯 Today's Focus (MIT - Most Important Tasks)
1. [ ] 🔥 Complete project proposal (2 hours)
2. [ ] 📞 One-on-one meetings with team members (1 hour)
3. [ ] 📚 Read technical documentation (30 minutes)

## 📅 This Week's Plan
- [ ] **Work Tasks**
  - [x] Monday: Project kickoff meeting
  - [x] Tuesday: Requirements analysis
  - [ ] Wednesday: Prototype design
  - [ ] Thursday: Technical review
  - [ ] Friday: Weekly summary

- [ ] **Personal Development**
  - [x] Complete online course Chapter 3
  - [ ] Write technical blog post
  - [ ] Attend technical sharing session
  - [ ] Update resume

- [ ] **Life Arrangements**
  - [x] Gym workout (Monday, Wednesday, Friday)
  - [ ] Dinner with friends
  - [ ] Watch a movie
  - [ ] Organize room

## 📚 Waiting For
- [ ] Waiting for designer to provide materials
- [ ] Waiting for client feedback
- [ ] Waiting for server deployment completion

## 💡 Someday/Maybe
- [ ] Learn new programming language
- [ ] Write a technical book
- [ ] Develop personal project
- [ ] Travel to Japan
```

## Common Errors and Solutions

### 1. Syntax Errors

```markdown
❌ Incorrect format:
-[ ] Missing space
-[] Empty checkbox
- [o] Wrong marker
* [x] Wrong list symbol

✅ Correct format:
- [ ] Incomplete task
- [x] Completed task
- [X] Completed task (uppercase also works)
```

### 2. Nesting Issues

```markdown
❌ Incorrect nesting:
- [ ] Main task
- [ ] Sub-task (missing indentation)

✅ Correct nesting:
- [ ] Main task
  - [ ] Sub-task (correct indentation)
  - [ ] Another sub-task
```

### 3. Checkbox Position

```markdown
❌ Wrong position:
- Task description [ ] (checkbox at the end)

✅ Correct position:
- [ ] Task description (checkbox at the beginning)
```

## Supported Platforms

### GitHub/GitLab
- ✅ Fully supports interactive checkboxes
- ✅ Can click to toggle status in web interface
- ✅ Supports use in Issues and Pull Requests

### Editor Support
- **VS Code**: Fully supports, can click to toggle
- **Typora**: Supports visual editing
- **Obsidian**: Supports interactive task lists
- **Notion**: Automatically converts to to-do items

### Static Site Generators
- **VitePress**: Supports rendering (non-interactive)
- **GitBook**: Supports task list display
- **Docsify**: Requires plugin support
- **Jekyll**: GitHub Pages native support

## Best Practices

### 1. Keep It Simple and Clear

```markdown
✅ Recommended: Concise task descriptions
- [ ] Fix login bug
- [ ] Update documentation
- [ ] Deploy to test environment

❌ Not recommended: Overly long descriptions
- [ ] Need to fix various strange issues users encounter when logging in with email...
```

### 2. Use Categories and Priorities

```markdown
✅ Recommended: Organized task lists
## 🔥 Urgent Tasks
- [ ] Fix production environment bug

## 📋 Regular Tasks
- [ ] Code review
- [ ] Documentation updates

## 💡 Improvement Ideas
- [ ] Performance optimization
- [ ] New feature development
```

### 3. Regular Updates and Maintenance

```markdown
✅ Recommended: Timely status updates
- [x] ~~Completed tasks~~ (can use strikethrough)
- [ ] Tasks in progress
- [ ] Tasks to start

# Weekly Summary (regular review)
- Completed tasks: 3
- Pending tasks: 2
- New tasks: 1
```

## HTML Output

Markdown task lists convert to HTML:

```markdown
- [ ] Incomplete task
- [x] Completed task
```

Converts to:

```html
<ul>
  <li><input type="checkbox" disabled> Incomplete task</li>
  <li><input type="checkbox" checked disabled> Completed task</li>
</ul>
```

## Related Syntax

- [List Syntax](/basic/lists) - Basic list format
- [Extended Syntax Overview](/extended/) - Other extension features
- [Best Practices](/advanced/best-practices) - Documentation organization suggestions

## Practice

Try creating the following task lists:

1. A personal learning plan task list
2. A phased task list for project development
3. A complex task structure with multiple levels of nesting
4. A task management system combining emojis and priorities

## Related Tools

### Task Management Tools
- **GitHub Projects**: Native task list support
- **Notion**: Powerful task management features
- **Obsidian**: Knowledge management and task tracking
- **Todoist**: Professional task management application

### Markdown Editors
- **Typora**: WYSIWYG task list editing
- **Mark Text**: Real-time task list preview
- **Zettlr**: Task management in academic writing
- **Joplin**: Open-source note and task management

### Browser Extensions
- **Markdown Here**: Use task lists in emails
- **GitHub Task Lists**: Enhanced GitHub task list functionality
- **Markdown Viewer**: Local file task list rendering 