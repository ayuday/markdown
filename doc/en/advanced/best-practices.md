---
title: Markdown Best Practices
description: A comprehensive guide to structuring, writing, and maintaining high-quality Markdown technical documentation, including style, code, and collaboration best practices.
---

# Best Practices

After mastering Markdown syntax, how do you write high-quality, maintainable technical documentation? This guide provides best practices from basic standards to advanced tips.

## Document Structure Design

### Directory Organization

```
project/
├── README.md                 # Project overview
├── docs/
│   ├── index.md             # Documentation homepage
│   ├── getting-started/
│   │   ├── installation.md  # Installation guide
│   │   ├── quick-start.md   # Quick start
│   │   └── examples.md      # Example code
│   ├── api/
│   │   ├── overview.md      # API overview
│   │   ├── authentication.md # Authentication
│   │   └── endpoints/       # API endpoints
│   ├── guides/
│   │   ├── best-practices.md # Best practices
│   │   └── troubleshooting.md # Troubleshooting
│   └── changelog.md         # Changelog
└── assets/
    └── images/              # Image assets
```

### Content Hierarchy

```
# Level 1 Heading - Document Topic

Briefly introduce the content and goals of this document.

## Level 2 Heading - Main Sections

### Level 3 Heading - Specific Topics

Detailed content and explanations...

#### Level 4 Heading - Subsections

Implementation details...

##### Level 5 Heading - Additional Notes

Cautions and tips...

> **Note**: Avoid using more than five heading levels to prevent overly complex document structure.
```

## Content Writing Standards

### Language Style

```
✅ Recommended:

1. **Use concise and clear language**
   - Avoid lengthy sentences
   - Use active voice
   - Minimize jargon

2. **Maintain a consistent tone**
   - Formal but friendly
   - User-oriented expressions
   - Avoid overly technical wording

3. **Provide specific guidance**
   - Use concrete numbers and examples
   - Give clear steps
   - Include expected results

❌ Avoid:

- Vague statements
- Excessive passive voice
- Missing necessary background
- Assuming specific reader knowledge
```

### Paragraphs and Formatting

```
<!-- ✅ Good paragraph structure -->
## Install Node.js

To use our tool, you need to install Node.js first. Node.js is a JavaScript runtime that allows you to run JavaScript on the server side.

### System Requirements

Before installing, make sure your system meets the following:

- OS: Windows 10+, macOS 10.12+, or Linux
- Memory: At least 4GB RAM
- Storage: At least 1GB free space

### Installation Steps

1. Visit the [Node.js official site](https://nodejs.org/)
2. Download the installer for your OS
3. Run the installer and follow the prompts
4. Open a terminal to verify installation:

```

If the version number is displayed, installation is successful.

<!-- ❌ Avoid -->
## Install nodejs you need to download from the official site then install and verify the version to ensure success
```

## Code Example Standards

### Code Block Best Practices

```
<!-- ✅ Complete code example -->
### Create a User Account

The following example shows how to use the API to create a new user:

```javascript
// Import required libraries
const axios = require('axios');

// Configure API endpoint
const API_BASE_URL = 'https://api.example.com';
const API_KEY = 'your-api-key';

// Create user function
async function createUser(userData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('User created:', response.data);
    return response.data;
  } catch (error) {
    console.error('User creation failed:', error.response.data);
    throw error;
  }
}

// Usage example
const newUser = {
  name: 'Zhang San',
  email: 'zhangsan@example.com',
  role: 'user'
};

createUser(newUser);
```

**Expected output:**

```json
{
  "id": "12345",
  "name": "Zhang San",
  "email": "zhangsan@example.com",
  "role": "user",
  "created_at": "2024-01-15T10:30:00Z"
}
```

**Important tips:**
- Replace `your-api-key` with your actual API key
- Ensure network connectivity
- Keep your API key secure; do not commit it to version control

<!-- ❌ Avoid -->
```javascript
// Create user
axios.post('/users', data)
```

This code creates a user.
```

### Command Line Examples

```
<!-- ✅ Clear CLI instructions -->
### Project Deployment

#### 1. Build the project

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build production version
npm run build
```

#### 2. Deploy to server

```bash
# Connect to server
ssh user@server.example.com

# Enter project directory
cd /var/www/myproject

# Pull latest code
git pull origin main

# Restart service
sudo systemctl restart myproject
```

#### 3. Verify deployment

```bash
# Check service status
sudo systemctl status myproject

# View logs
sudo journalctl -u myproject -f
```

**Expected results:**
- Service status shows `active (running)`
- Visiting `https://yoursite.com` displays the latest version
```

## Link and Reference Management

### Internal Links

```
<!-- ✅ Use relative paths and descriptive text -->
For detailed installation instructions, see [Installation Guide](./index.md).

For API authentication, see [Authentication Docs](./index.md).

If you encounter issues, refer to the [Troubleshooting Guide](./index.md#common-issues).

<!-- ❌ Avoid -->
Click [here](./index.md) for installation.
See: ./index.md
```

### External Links

```
<!-- ✅ Provide context and explanation -->
Our API is designed based on the [REST architecture style](https://restfulapi.net/),
following the [HTTP status code standards](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

For more about JWT, see
[JWT Official Docs](https://jwt.io/introduction/) and
[RFC 7519 Spec](https://tools.ietf.org/html/rfc7519).

<!-- ✅ Add icons for external links -->
- [GitHub Repo](https://github.com/example/project) 🔗
- [Live Demo](https://demo.example.com) 🌐
- [Official Docs](https://docs.example.com) 📚
```

### Reference Links

```
<!-- ✅ Use reference links for cleaner docs -->
We support multiple [authentication methods][auth-methods], including
[API keys][api-keys], [OAuth 2.0][oauth], and [JWT][jwt].

For detailed configuration, see [Configuration Guide][config-guide],
for FAQs see [FAQ page][faq].

<!-- Define links at the end of the doc -->
[auth-methods]: ./index.md
[api-keys]: ./index.md#api-keys
[oauth]: ./index.md#oauth-20
[jwt]: ./index.md#jwt
[config-guide]: ./index.md
[faq]: /index.md.md
```

## Image and Media Optimization

### Image Usage Guidelines

```
<!-- ✅ Provide complete image info -->
### User Interface Overview

The following image shows the main layout of the application:

![Main Application Interface](/assets/images/main-interface.png "Main Application Interface - Shows navbar, sidebar, and content area")

**Image notes:**
1. Top navbar contains main entry points
2. Left sidebar provides quick navigation
3. Main content area displays the current page
4. Bottom status bar shows system info

<!-- ✅ Provide images in different sizes -->
### System Architecture Diagram

<img src="/assets/images/architecture.png" 
     alt="System Architecture Diagram" 
     width="800"
     style="max-width: 100%; height: auto;">

*Figure: Overall system architecture - shows relationships between components*

<!-- ❌ Avoid -->
![](/assets/images/image.png)

See image:
![Image](/assets/images/pic.png)
```

### Image Organization and Naming

```
<!-- ✅ Meaningful file names -->
assets/
├── images/
│   ├── ui/
│   │   ├── dashboard-overview.png
│   │   ├── user-profile-edit.png
│   │   └── settings-general.png
│   ├── diagrams/
│   │   ├── system-architecture.svg
│   │   ├── data-flow-diagram.png
│   │   └── user-workflow.png
│   └── screenshots/
│       ├── installation-step-1.png
│       ├── installation-step-2.png
│       └── installation-complete.png

<!-- ❌ Avoid -->
assets/
├── images/
│   ├── img1.png
│   ├── pic2.jpg
│   ├── screenshot.png
│   └── diagram.svg
```

## Table Design Principles

### Data Tables

```
<!-- ✅ Clear table structure -->
### API Endpoint List

| Method | Endpoint | Description | Auth | Params |
|--------|----------|-------------|------|--------|
| GET    | `/api/users`        | Get user list      | ✅   | `page`, `limit`, `sort` |
| POST   | `/api/users`        | Create new user    | ✅   | `name`, `email`, `role` |
| GET    | `/api/users/{id}`   | Get specific user  | ✅   | `id` (path param) |
| PUT    | `/api/users/{id}`   | Update user info   | ✅   | `id`, `name`, `email` |
| DELETE | `/api/users/{id}`   | Delete user        | ✅   | `id` (path param) |

**Notes:**
- ✅ means authentication required
- All endpoints require a valid API key in the request header
- Path params are specified directly in the URL
- Query params are passed as `?key=value&key2=value2`

<!-- ✅ Comparison table -->
### Pricing Plan Comparison

| Feature      | Free     | Pro      | Enterprise |
|--------------|----------|----------|------------|
| Users        | Up to 5  | Up to 50 | Unlimited  |
| Storage      | 1GB      | 100GB    | 1TB        |
| API Calls    | 1,000/mo | 10,000/mo| Unlimited  |
| Support      | Community| Email    | 24/7 Dedicated |
| Price        | Free     | ¥99/mo   | ¥999/mo    |

[Upgrade Now](https://www.markdownlang.com/pricing) | [Contact Sales](mailto:sales@example.com)
```

### Complex Data Display

```
<!-- ✅ Use HTML tables for complex data -->
### Server Configuration Requirements

<table>
  <thead>
    <tr>
      <th rowspan="2">Server Spec</th>
      <th colspan="3">Recommended Config</th>
    </tr>
    <tr>
      <th>Small Deployment<br>(&lt;1K users)</th>
      <th>Medium Deployment<br>(1K-10K users)</th>
      <th>Large Deployment<br>(&gt;10K users)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>CPU</strong></td>
      <td>2 cores</td>
      <td>4 cores</td>
      <td>8+ cores</td>
    </tr>
    <tr>
      <td><strong>Memory</strong></td>
      <td>4GB</td>
      <td>8GB</td>
      <td>16GB+</td>
    </tr>
    <tr>
      <td><strong>Storage</strong></td>
      <td>50GB SSD</td>
      <td>200GB SSD</td>
      <td>500GB+ SSD</td>
    </tr>
    <tr>
      <td><strong>Network</strong></td>
      <td>100Mbps</td>
      <td>1Gbps</td>
      <td>10Gbps</td>
    </tr>
  </tbody>
</table>
```

## Version Control and Collaboration

### Document Version Management

```
<!-- ✅ Add version info at the top of docs -->
---
title: API User Guide
version: 2.1.0
last_updated: 2024-01-15
author: Technical Docs Team
---

# API User Guide

> **Version Note**: This document applies to API v2.1.0 and above.
> For older versions, see the [archived docs](./archive/).

## Changelog

### v2.1.0 (2024-01-15)
- Added user group management
- Improved authentication flow
- Fixed known issues

### v2.0.0 (2024-01-01)
- Refactored API architecture
- Updated authentication
- Added batch operations
```

### Git Commit Standards

```
<!-- ✅ Standard commit message format -->
docs: Update API authentication docs

- Add OAuth 2.0 example
- Fix code sample errors
- Update related links

closes #123

<!-- ✅ Commit type explanations -->
Type prefixes:
- docs: Documentation update
- feat: New feature docs
- fix: Fix documentation errors
- style: Formatting changes
- refactor: Refactor doc structure
- test: Add example tests
- chore: Build or tooling updates
```

### Documentation Collaboration Standards

```
<!-- Contribution guide -->
## Contribution Guide

### Submission Process

1. **Fork the repo** - Create your own copy
2. **Create a branch** - For your changes
   ```bash
   git checkout -b docs/update-api-guide
   ```
3. **Write content** - Follow documentation standards
4. **Test locally** - Ensure docs render correctly
5. **Commit changes** - Use standard commit messages
6. **Create PR** - Describe your changes in detail

### Code Review Checklist

- [ ] Content accuracy
- [ ] Clear language
- [ ] Formatting standards
- [ ] Valid links
- [ ] Example code runs
- [ ] Images display correctly
```

## Accessibility and Internationalization

### Accessibility Design

<!-- ✅ Accessibility-aware documentation design -->
### Color and Contrast

When using color to convey information, also provide other cues:

::: tip Success
✅ Success: Operation completed
:::

::: danger Error
❌ Error: Operation failed
:::

### Alt Text

Provide meaningful alt text for all images:

![System Architecture Diagram: Shows data flow between client, API gateway, microservices, and database](/assets/images/main-interface.png)

### Keyboard Navigation

Ensure document structure supports keyboard navigation:

- Use logical heading hierarchy
- Provide table of contents links
- Important links are easy to find

### Internationalization Considerations

```
<!-- ✅ Internationalization-friendly doc structure -->
project/
├── docs/
│   ├── en/              # English docs
│   │   ├── README.md
│   │   └── api/
│   ├── zh/              # Chinese docs
│   │   ├── README.md
│   │   └── api/
│   └── ja/              # Japanese docs
│       ├── README.md
│       └── api/

<!-- ✅ Language switch links -->
## Language Versions

- [English](../index.md)
- [中文](../index.md)
- [日本語](/ja/index.md)

<!-- ✅ Date and time formats -->
Last updated: January 15, 2024 (en-US)
最后更新时间：2024年1月15日 (zh-CN)
最終更新日：2024年1月15日 (ja-JP)
```

## Performance Optimization

### Document Loading Optimization

```
<!-- ✅ Image lazy loading -->
<img src="/assets/images/large-diagram.png" 
     alt="Complex system diagram" 
     loading="lazy"
     width="800"
     height="600">
```
<!-- ✅ Pagination design -->
### Large Document Splitting

Split long docs into multiple parts:

1. [Overview](./overview.md) - Basic concepts and intro
2. [Quick Start](./quickstart.md) - 5-minute getting started
3. [Tutorial](./tutorial.md) - Full learning path
4. [API Reference](./api-reference.md) - Complete API docs
5. [Examples](./examples.md) - Real-world use cases
```

<!-- ✅ Progressive disclosure -->
<details>
<summary>🔍 View advanced configuration options</summary>

### Advanced Configuration

```yaml
# Detailed config example
server:
  host: 0.0.0.0
  port: 8080
  ssl:
    enabled: true
    cert_file: /path/to/cert.pem
    key_file: /path/to/key.pem
```

These options are for fine-tuning production environments...

</details>

### Search Engine Optimization

```
<!-- ✅ Doc SEO optimization -->
---
title: "API Authentication Guide - Complete Identity Solution"
description: "Learn how to use OAuth 2.0, JWT, and API keys for secure authentication. Includes code samples and best practices."
keywords: ["API authentication", "OAuth", "JWT", "security", "identity"]
---

# API Authentication Guide

Learn how to securely authenticate and authorize API requests...

## In This Chapter

This guide covers the following authentication methods:

1. [API Key Authentication](#api-key-authentication) - Simple and fast
2. [OAuth 2.0](#oauth-20) - Industry-standard authorization
3. [JWT Tokens](#jwt-tokens) - Stateless authentication
```

## Quality Assurance

### Content Review Checklist

```
<!-- 📋 Doc quality checklist -->
## Pre-release Checklist

### Content Quality
- [ ] Information is accurate and complete
- [ ] Language is clear
- [ ] Logical structure
- [ ] Example code runs
- [ ] Screenshots are up to date

### Technical Checks
- [ ] Link validity
- [ ] Code syntax highlighting
- [ ] Images display correctly
- [ ] Table formatting
- [ ] Math formulas render correctly

### User Experience
- [ ] Clear navigation
- [ ] Search works
- [ ] Mobile display adapts
- [ ] Load speed tested
- [ ] Accessibility checked

### Maintainability
- [ ] Version info updated
- [ ] Changelog recorded
- [ ] Related docs synced
- [ ] Deprecated features marked
- [ ] Migration guides provided
```

### User Feedback Collection

```
<!-- ✅ Feedback collection mechanism -->
## Help Us Improve

### Doc Feedback

If you find errors or have suggestions:

1. **Quick feedback**: [Submit an issue](https://github.com/example/docs/issues/new?template=doc-feedback.md)
2. **Detailed discussion**: [Join the discussion](https://github.com/example/docs/discussions)
3. **Edit directly**: [Edit this page](https://github.com/example/docs/edit/main/docs/api/authentication.md)

### Rate this page

Was this page helpful?

👍 Yes | 👎 Needs improvement | 💡 Suggestion

### Contact

- 📧 Docs team: docs@example.com
- 💬 Tech support: support@example.com
- 🐦 Social: [@ExampleDocs](https://twitter.com/ExampleDocs)
```

## Related Syntax

- [Embed HTML](/advanced/html) - HTML enhancements
- [Math Formulas](/advanced/math) - LaTeX expressions
- [Diagrams](/advanced/diagrams) - Chart drawing
- [Tools and Plugins](/advanced/tools) - Recommended tools

## Tools and Resources

### Doc Quality Tools

- **textlint**: Text proofreading and style checking
- **markdownlint**: Markdown syntax checking
- **alex**: Inclusive language checking
- **Hemingway Editor**: Readability analysis

### Collaboration Platforms

- **GitBook**: Team doc collaboration
- **Notion**: Multi-purpose docs and knowledge management
- **Confluence**: Enterprise doc collaboration
- **Slab**: Modern team docs

### Analytics Tools

- **Google Analytics**: Doc traffic analysis
- **Hotjar**: User behavior analysis
- **Mixpanel**: User interaction tracking
- **FullStory**: Full user session recording

### Automation Tools

- **GitHub Actions**: Doc build and deployment
- **Zapier**: Workflow automation
- **IFTTT**: Simple automation rules
- **n8n**: Open-source workflow automation

By following these best practices, you can create high-quality, user-friendly technical documentation and lay a solid foundation for your project's success. 