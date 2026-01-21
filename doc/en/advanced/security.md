---
title: Markdown Security Best Practices
description: Learn how to secure your Markdown content and protect against XSS, injection attacks, and other security vulnerabilities.
keywords: markdown security, xss prevention, content security, secure markdown
---

# Markdown Security Best Practices

Security is crucial when handling Markdown content, especially user-generated content. This guide covers common vulnerabilities and protection strategies.

## Common Security Risks

### Cross-Site Scripting (XSS)

Markdown that allows HTML can be exploited:

```markdown
<!-- Malicious input -->
<script>alert('XSS')</script>
<img src=x onerror="alert('XSS')">
<iframe src="javascript:alert('XSS')"></iframe>
```

### Injection Attacks

```markdown
<!-- Link injection -->
[Click here](javascript:alert('XSS'))
[Malicious](data:text/html,<script>alert('XSS')</script>)

<!-- Image injection -->
![](javascript:alert('XSS'))
```

## Sanitization

### HTML Sanitization

```javascript
const DOMPurify = require('isomorphic-dompurify');

function renderSafe(markdown) {
  const html = md.render(markdown);
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['href', 'title']
  });
}
```

### Configure Markdown Parser

```javascript
const md = require('markdown-it')({
  html: false,       // Disable HTML tags in source
  linkify: true,     // Auto-convert URLs
  typographer: true
});

// Disable dangerous protocols
md.validateLink = function (url) {
  const allowedProtocols = /^(https?|ftp|mailto):/i;
  return allowedProtocols.test(url);
};
```

## Content Security Policy (CSP)

### Basic CSP Header

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:;">
```

### Strict CSP

```javascript
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self'",
    "img-src 'self' https:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-ancestors 'none'"
  ].join('; '));
  next();
});
```

## Input Validation

### Length Limits

```javascript
function validateMarkdown(content) {
  const MAX_LENGTH = 50000;
  
  if (content.length > MAX_LENGTH) {
    throw new Error('Content too long');
  }
  
  return content;
}
```

### Content Filtering

```javascript
function filterMarkdown(content) {
  // Remove potentially dangerous patterns
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
}
```

## User-Generated Content

### Whitelist Approach

```javascript
const allowedTags = {
  p: [],
  strong: [],
  em: [],
  a: ['href', 'title'],
  ul: [],
  ol: [],
  li: [],
  h1: [],
  h2: [],
  h3: [],
  code: [],
  pre: []
};

function sanitizeUserContent(html) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: Object.keys(allowedTags),
    ALLOWED_ATTR: Object.values(allowedTags).flat()
  });
}
```

### Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const markdownLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many submissions, please try again later.'
});

app.post('/api/markdown', markdownLimiter, (req, res) => {
  // Handle markdown submission
});
```

## File Upload Security

### Validation

```javascript
const allowedExtensions = ['.md', '.markdown', '.txt'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

function validateFile(file) {
  const ext = path.extname(file.name).toLowerCase();
  
  if (!allowedExtensions.includes(ext)) {
    throw new Error('Invalid file type');
  }
  
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File too large');
  }
  
  return true;
}
```

### Virus Scanning

```javascript
const ClamScan = require('clamscan');

async function scanFile(filePath) {
  const clamscan = await new ClamScan().init();
  const { isInfected, viruses } = await clamscan.isInfected(filePath);
  
  if (isInfected) {
    throw new Error(`Virus detected: ${viruses.join(', ')}`);
  }
  
  return true;
}
```

## Authentication & Authorization

### Access Control

```javascript
function checkPermissions(user, action) {
  const permissions = {
    admin: ['read', 'write', 'delete'],
    editor: ['read', 'write'],
    viewer: ['read']
  };
  
  return permissions[user.role]?.includes(action);
}

app.post('/api/markdown', (req, res) => {
  if (!checkPermissions(req.user, 'write')) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  // Process markdown
});
```

### CSRF Protection

```javascript
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.post('/api/markdown', csrfProtection, (req, res) => {
  // Protected endpoint
});
```

## Secure Storage

### Encryption

```javascript
const crypto = require('crypto');

function encryptContent(content, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(content, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { encrypted, iv: iv.toString('hex') };
}

function decryptContent(encrypted, iv, key) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
```

### SQL Injection Prevention

```javascript
// Use parameterized queries
const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
db.execute(query, [title, content]);

// Never concatenate user input
// ❌ const query = `INSERT INTO posts VALUES ('${userInput}')`;
```

## API Security

### API Rate Limiting

```javascript
const slowDown = require('express-slow-down');

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 100,
  delayMs: 500
});

app.use('/api/', speedLimiter);
```

### API Key Validation

```javascript
function validateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || !isValidApiKey(apiKey)) {
    return res.status(401).json({ error: 'Invalid API key' });
  }
  
  next();
}
```

## Secure Markdown Parsing

### Safe Parser Configuration

```javascript
const md = require('markdown-it')({
  html: false,          // Disable HTML
  xhtmlOut: true,       // Use XHTML output
  breaks: false,        // Don't convert \n to <br>
  linkify: true,        // Auto-convert URLs
  typographer: false    // Disable smart quotes for consistency
});

// Custom link validation
md.validateLink = (url) => {
  const safe = /^(https?|mailto):/i.test(url);
  return safe;
};

// Render function
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const hrefIndex = token.attrIndex('href');
  
  if (hrefIndex >= 0) {
    const url = token.attrs[hrefIndex][1];
    
    // Add security attributes
    token.attrPush(['rel', 'noopener noreferrer']);
    
    // Add target="_blank" for external links
    if (/^https?:/.test(url)) {
      token.attrPush(['target', '_blank']);
    }
  }
  
  return self.renderToken(tokens, idx, options);
};
```

## Security Headers

### Comprehensive Security Headers

```javascript
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  frameguard: {
    action: 'deny'
  },
  noSniff: true,
  xssFilter: true
}));
```

## Security Checklist

```markdown
## Markdown Security Checklist

- [ ] Disable HTML in Markdown parser
- [ ] Sanitize all HTML output
- [ ] Validate and whitelist URLs
- [ ] Implement Content Security Policy
- [ ] Use parameterized queries
- [ ] Validate file uploads
- [ ] Set file size limits
- [ ] Implement rate limiting
- [ ] Use CSRF protection
- [ ] Encrypt sensitive content
- [ ] Validate API keys
- [ ] Set secure headers
- [ ] Log security events
- [ ] Regular security audits
- [ ] Keep dependencies updated
```

## Monitoring & Logging

### Security Event Logging

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'security.log' })
  ]
});

function logSecurityEvent(event, details) {
  logger.warn({
    timestamp: new Date().toISOString(),
    event,
    details,
    ip: details.ip,
    user: details.user
  });
}
```

## Conclusion

Security is an ongoing process. Regularly review and update your security measures, keep dependencies updated, and stay informed about new vulnerabilities.

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy](https://content-security-policy.com/)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Helmet.js](https://helmetjs.github.io/)

