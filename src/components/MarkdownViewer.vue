<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Markdown 查看器</h1>
      <p class="text-gray-600">专业的只读预览工具，支持URL加载和文件上传</p>
    </div>

    <!-- 加载控制区域 -->
    <div class="card mb-6">
      <div class="flex flex-col lg:flex-row gap-4">
        <!-- URL输入 -->
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            从URL加载
          </label>
          <div class="flex space-x-2">
            <input
              v-model="urlInput"
              type="url"
              placeholder="https://example.com/README.md"
              class="flex-1 input"
            >
            <button
              @click="loadFromUrl"
              :disabled="!urlInput.trim() || isLoading"
              class="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isLoading ? '加载中...' : '加载' }}
            </button>
          </div>
        </div>

        <!-- 文件上传 -->
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            上传文件
          </label>
          <div class="flex space-x-2">
            <input
              ref="fileInput"
              type="file"
              accept=".md,.markdown,.txt"
              @change="handleFileUpload"
              class="hidden"
            >
            <button
              @click="$refs.fileInput.click()"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
            >
              <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              选择文件
            </button>
            <button
              @click="clearContent"
              class="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              清空
            </button>
          </div>
        </div>
      </div>

      <!-- 文件信息 -->
      <div v-if="fileInfo" class="mt-4 p-3 bg-gray-50 rounded-md">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span class="text-sm font-medium text-gray-900">{{ fileInfo.name }}</span>
            <span class="text-sm text-gray-500">({{ formatFileSize(fileInfo.size) }})</span>
          </div>
          <button
            @click="copyUrl"
            v-if="urlInput"
            class="text-sm text-primary-600 hover:text-primary-700"
          >
            复制链接
          </button>
        </div>
      </div>

      <!-- 错误信息 -->
      <div v-if="errorMessage" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p class="text-sm text-red-600">{{ errorMessage }}</p>
        </div>
      </div>
    </div>

    <!-- 预览区域 -->
    <div class="card">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-gray-900">文档预览</h2>
        <div class="flex items-center space-x-2">
          <button
            @click="toggleViewMode"
            class="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            {{ viewMode === 'preview' ? '源码' : '预览' }}
          </button>
          <button
            @click="copyContent"
            :disabled="!markdownContent"
            class="px-3 py-1 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            复制内容
          </button>
          <button
            @click="downloadMarkdown"
            :disabled="!markdownContent"
            class="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            下载MD
          </button>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="!markdownContent" class="text-center py-16">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">暂无内容</h3>
        <p class="text-gray-500 mb-6">
          请从上方输入URL或上传Markdown文件开始查看
        </p>
        <button
          @click="$refs.fileInput.click()"
          class="btn-primary"
        >
          上传文件
        </button>
      </div>

      <!-- 预览内容 -->
      <div v-else class="min-h-96">
        <!-- 渲染预览 -->
        <div
          v-if="viewMode === 'preview'"
          v-html="renderedHtml"
          class="markdown-preview max-w-none"
        ></div>

        <!-- 源码视图 -->
        <div v-else class="relative">
          <pre class="whitespace-pre-wrap text-sm font-mono text-gray-800 bg-gray-50 p-6 rounded-md overflow-x-auto border">{{ markdownContent }}</pre>
        </div>
      </div>

      <!-- 文档统计 -->
      <div v-if="markdownContent" class="mt-6 pt-4 border-t border-gray-200">
        <div class="flex flex-wrap items-center justify-between text-sm text-gray-600">
          <div class="flex items-center space-x-4">
            <span>字符数: {{ markdownContent.length }}</span>
            <span>行数: {{ lineCount }}</span>
            <span>字数: {{ wordCount }}</span>
          </div>
          <div class="flex items-center space-x-4">
            <span>最后更新: {{ lastUpdated }}</span>
            <span v-if="renderTime">渲染时间: {{ renderTime }}ms</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 快速示例 -->
    <div class="card mt-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">快速示例</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          @click="loadExample('basic')"
          class="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
        >
          <h3 class="font-medium text-gray-900 mb-2">基础语法示例</h3>
          <p class="text-sm text-gray-600">包含标题、列表、链接等基本语法</p>
        </button>

        <button
          @click="loadExample('advanced')"
          class="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
        >
          <h3 class="font-medium text-gray-900 mb-2">高级语法示例</h3>
          <p class="text-sm text-gray-600">包含表格、代码块、数学公式等</p>
        </button>

        <button
          @click="loadExample('readme')"
          class="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
        >
          <h3 class="font-medium text-gray-900 mb-2">README模板</h3>
          <p class="text-sm text-gray-600">标准的项目README文档模板</p>
        </button>
      </div>
    </div>

    <!-- 使用提示 -->
    <div class="card mt-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">使用提示</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <h3 class="font-medium text-gray-900 mb-2">支持的文件类型</h3>
          <ul class="space-y-1">
            <li>• Markdown文件 (.md, .markdown)</li>
            <li>• 纯文本文件 (.txt)</li>
            <li>• 支持UTF-8编码</li>
            <li>• 最大文件大小: 10MB</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-900 mb-2">功能特性</h3>
          <ul class="space-y-1">
            <li>• 实时渲染预览</li>
            <li>• 语法高亮显示</li>
            <li>• 响应式布局</li>
            <li>• 一键复制和下载</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markdownToHtml, loadMarkdownFromUrl, readFileContent, copyToClipboard, downloadFile } from '../utils/markdown.js'

export default {
  name: 'MarkdownViewer',
  data() {
    return {
      markdownContent: '',
      renderedHtml: '',
      urlInput: '',
      viewMode: 'preview', // 'preview' 或 'source'
      isLoading: false,
      errorMessage: '',
      fileInfo: null,
      lastUpdated: '',
      renderTime: 0
    }
  },
  computed: {
    lineCount() {
      return this.markdownContent.split('\n').length
    },
    wordCount() {
      return this.markdownContent.trim().split(/\s+/).filter(word => word.length > 0).length
    }
  },
  methods: {
    async loadFromUrl() {
      if (!this.urlInput.trim()) return

      this.isLoading = true
      this.errorMessage = ''

      try {
        const content = await loadMarkdownFromUrl(this.urlInput)
        this.markdownContent = content
        this.fileInfo = {
          name: this.extractFilenameFromUrl(this.urlInput),
          size: new Blob([content]).size,
          type: 'url'
        }
        this.lastUpdated = new Date().toLocaleString()
        this.updatePreview()
      } catch (error) {
        this.showError('加载失败: ' + error.message)
      } finally {
        this.isLoading = false
      }
    },
    async handleFileUpload(event) {
      const file = event.target.files[0]
      if (!file) return

      // 检查文件大小 (10MB限制)
      if (file.size > 10 * 1024 * 1024) {
        this.showError('文件大小不能超过10MB')
        return
      }

      // 检查文件类型
      const allowedTypes = ['text/markdown', 'text/plain', '.md', '.markdown', '.txt']
      const isAllowed = allowedTypes.some(type =>
        file.type === type || file.name.toLowerCase().endsWith(type.replace('.', ''))
      )

      if (!isAllowed) {
        this.showError('只支持Markdown (.md, .markdown) 和纯文本 (.txt) 文件')
        return
      }

      try {
        const content = await readFileContent(file)
        this.markdownContent = content
        this.fileInfo = {
          name: file.name,
          size: file.size,
          type: file.type
        }
        this.lastUpdated = new Date().toLocaleString()
        this.updatePreview()
      } catch (error) {
        this.showError('文件读取失败: ' + error.message)
      }
    },
    updatePreview() {
      const startTime = Date.now()
      this.renderedHtml = markdownToHtml(this.markdownContent)
      this.renderTime = Date.now() - startTime
    },
    clearContent() {
      this.markdownContent = ''
      this.renderedHtml = ''
      this.fileInfo = null
      this.errorMessage = ''
      this.urlInput = ''
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = ''
      }
    },
    toggleViewMode() {
      this.viewMode = this.viewMode === 'preview' ? 'source' : 'preview'
    },
    async copyContent() {
      if (!this.markdownContent) return

      const success = await copyToClipboard(this.markdownContent)
      if (success) {
        this.showStatus('内容已复制到剪贴板')
      } else {
        this.showError('复制失败')
      }
    },
    downloadMarkdown() {
      if (!this.markdownContent) return

      const filename = this.fileInfo?.name?.replace(/\.(md|markdown|txt)$/i, '') || 'document'
      downloadFile(this.markdownContent, `${filename}.md`, 'text/markdown')
    },
    async copyUrl() {
      const success = await copyToClipboard(this.urlInput)
      if (success) {
        this.showStatus('URL已复制到剪贴板')
      }
    },
    loadExample(type) {
      let content = ''

      switch (type) {
        case 'basic':
          content = `# Markdown 基础语法示例

## 标题
# 一级标题
## 二级标题
### 三级标题

## 文本格式
**粗体文本** 和 *斜体文本*

~~删除线文本~~

\`行内代码\`

## 列表

### 无序列表
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2

### 有序列表
1. 第一项
2. 第二项
3. 第三项

## 链接和图片
[Markdown官网](https://markdownlang.com)

![Markdown Logo](https://markdownlang.com/img/markdown-logo.png)

## 引用
> 这是一个引用块
>
> 可以包含多行内容

## 代码块
\`\`\`javascript
function hello() {
  console.log("Hello, Markdown!");
}
\`\`\`

---
*这是基础语法示例*`
          break

        case 'advanced':
          content = `# 高级Markdown语法示例

## 表格

| 功能 | 描述 | 状态 |
|------|------|------|
| 表格 | 支持复杂表格 | ✅ |
| 对齐 | 左中右对齐支持 | ✅ |
| 合并 | 单元格合并 | ❌ |

## 任务列表

- [x] 已完成的任务
- [ ] 进行中的任务
- [ ] 待完成的任务

## 脚注

这是一个脚注的引用[^1]。

[^1]: 这是脚注的内容。

## 数学公式 (需要扩展支持)

行内公式: $E = mc^2$

块级公式:
$$
\\sum_{i=1}^n a_i = 0
$$

## 定义列表

术语 1
: 定义 1

术语 2
: 定义 2（可以有多行）
: 第二行定义

## 高亮文本

==高亮文本==

## 下标和上标

H~2~O

X^2^

## 自动链接

https://markdownlang.com

contact@example.com

## HTML嵌入

<p style="color: red;">这是嵌入的HTML</p>

## 注释

<!-- 这是一个注释，不会显示在渲染结果中 -->

---

*高级语法示例*`
          break

        case 'readme':
          content = `# 项目名称

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/your-username/project?style=social)](https://github.com/your-username/project)

简短的项目描述，说明这个项目是做什么的。

## ✨ 特性

- 🚀 快速
- 🛡️ 安全
- 🎨 美观
- 📱 响应式

## 📦 安装

\`\`\`bash
npm install project-name
# 或者
yarn add project-name
\`\`\`

## 🚀 使用

\`\`\`javascript
import { Project } from 'project-name'

const project = new Project()
project.doSomething()
\`\`\`

## 📖 文档

详细文档请访问：[文档链接](https://docs.example.com)

## 🤝 贡献

欢迎提交Issue和Pull Request！

1. Fork 本仓库
2. 创建特性分支 (\`git checkout -b feature/AmazingFeature\`)
3. 提交更改 (\`git commit -m 'Add some AmazingFeature'\`)
4. 推送到分支 (\`git push origin feature/AmazingFeature\`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

## 👥 作者

- **作者名** - [GitHub](https://github.com/author)

## 🙏 致谢

- 感谢所有贡献者
- 感谢开源社区

---

⭐ 如果这个项目对你有帮助，请给我们一个星标！`
          break
      }

      this.markdownContent = content
      this.fileInfo = {
        name: `example-${type}.md`,
        size: new Blob([content]).size,
        type: 'example'
      }
      this.lastUpdated = new Date().toLocaleString()
      this.updatePreview()
    },
    extractFilenameFromUrl(url) {
      try {
        return url.split('/').pop() || 'document.md'
      } catch {
        return 'document.md'
      }
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 B'
      const k = 1024
      const sizes = ['B', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
    },
    showError(message) {
      this.errorMessage = message
      setTimeout(() => {
        this.errorMessage = ''
      }, 5000)
    },
    showStatus(message) {
      // 这里可以显示成功状态提示
      console.log(message)
    }
  }
}
</script>