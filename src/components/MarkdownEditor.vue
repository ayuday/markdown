<template>
  <div class="max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Markdown 编辑器</h1>
      <p class="text-gray-600">实时预览编辑器，支持语法高亮和快捷工具栏</p>
    </div>

    <!-- 工具栏 -->
    <div class="card mb-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center space-x-2">
          <span class="text-sm font-medium text-gray-700">格式:</span>
          <div class="flex space-x-1">
            <button @click="insertFormat('bold')" class="toolbar-btn" title="粗体 (Ctrl+B)">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h8a4 4 0 110 8H6m0-8V4a2 2 0 012-2h4a2 2 0 012 2v8m0 0v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-4"></path>
              </svg>
            </button>
            <button @click="insertFormat('italic')" class="toolbar-btn" title="斜体 (Ctrl+I)">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </button>
            <button @click="insertFormat('strikethrough')" class="toolbar-btn" title="删除线">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>
              </svg>
            </button>
            <button @click="insertFormat('code')" class="toolbar-btn" title="行内代码">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <span class="text-sm font-medium text-gray-700">标题:</span>
          <div class="flex space-x-1">
            <button @click="insertHeading(1)" class="toolbar-btn text-xs">H1</button>
            <button @click="insertHeading(2)" class="toolbar-btn text-xs">H2</button>
            <button @click="insertHeading(3)" class="toolbar-btn text-xs">H3</button>
            <button @click="insertHeading(4)" class="toolbar-btn text-xs">H4</button>
            <button @click="insertHeading(5)" class="toolbar-btn text-xs">H5</button>
            <button @click="insertHeading(6)" class="toolbar-btn text-xs">H6</button>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <span class="text-sm font-medium text-gray-700">列表:</span>
          <div class="flex space-x-1">
            <button @click="insertList('unordered')" class="toolbar-btn" title="无序列表">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
            </button>
            <button @click="insertList('ordered')" class="toolbar-btn" title="有序列表">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 12h.01M7 17h.01M12 7h.01M12 12h.01M12 17h.01M17 7h.01M17 12h.01M17 17h.01"></path>
              </svg>
            </button>
            <button @click="insertList('task')" class="toolbar-btn" title="任务列表">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <span class="text-sm font-medium text-gray-700">插入:</span>
          <div class="flex space-x-1">
            <button @click="insertLink" class="toolbar-btn" title="链接">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </button>
            <button @click="insertImage" class="toolbar-btn" title="图片">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </button>
            <button @click="insertCodeBlock" class="toolbar-btn" title="代码块">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </button>
            <button @click="insertTable" class="toolbar-btn" title="表格">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </button>
            <button @click="insertQuote" class="toolbar-btn" title="引用">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 编辑器主体 -->
    <div class="editor-container">
      <!-- 编辑区 -->
      <div class="editor-panel">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-sm font-semibold text-gray-700">编辑</h2>
          <div class="flex items-center space-x-2 text-xs text-gray-500">
            <span>{{ markdownContent.length }} 字符</span>
            <span>{{ lineCount }} 行</span>
          </div>
        </div>
        <textarea
          ref="editorTextarea"
          v-model="markdownContent"
          @input="handleInput"
          @keydown="handleKeydown"
          @scroll="handleScroll"
          placeholder="在此输入Markdown内容..."
          class="editor-textarea"
          spellcheck="false"
        ></textarea>
      </div>

      <!-- 预览区 -->
      <div class="preview-panel">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-sm font-semibold text-gray-700">预览</h2>
          <button
            @click="togglePreviewMode"
            class="px-2 py-1 text-xs text-gray-600 hover:text-gray-900 border border-gray-300 rounded hover:bg-gray-50"
          >
            {{ previewMode === 'rendered' ? '源码' : '渲染' }}
          </button>
        </div>
        <div class="h-full overflow-y-auto">
          <div
            v-if="previewMode === 'rendered'"
            v-html="renderedHtml"
            class="markdown-preview"
          ></div>
          <pre
            v-else
            class="whitespace-pre-wrap text-sm font-mono text-gray-800 p-4"
          >{{ renderedHtml }}</pre>
        </div>
      </div>
    </div>

    <!-- 底部操作栏 -->
    <div class="card mt-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <input
              v-model="filename"
              placeholder="文件名"
              class="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
            <span class="text-sm text-gray-500">.md</span>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <button
            @click="clearContent"
            class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            清空
          </button>
          <button
            @click="copyContent"
            class="px-4 py-2 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            复制
          </button>
          <button
            @click="downloadMarkdown"
            class="px-4 py-2 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            下载MD
          </button>
          <button
            @click="downloadHtml"
            class="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            下载HTML
          </button>
        </div>
      </div>

      <!-- 状态信息 -->
      <div v-if="statusMessage" class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p class="text-sm text-blue-600">{{ statusMessage }}</p>
      </div>
    </div>

    <!-- 快捷键提示 -->
    <div class="card mt-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">快捷键</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <h3 class="font-medium text-gray-900 mb-2">格式</h3>
          <ul class="space-y-1 text-gray-600">
            <li><kbd>Ctrl+B</kbd> 粗体</li>
            <li><kbd>Ctrl+I</kbd> 斜体</li>
            <li><kbd>Ctrl+`</kbd> 行内代码</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-900 mb-2">标题</h3>
          <ul class="space-y-1 text-gray-600">
            <li><kbd>Ctrl+1-6</kbd> H1-H6</li>
            <li><kbd>Ctrl+Shift+7</kbd> 有序列表</li>
            <li><kbd>Ctrl+Shift+8</kbd> 无序列表</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-900 mb-2">插入</h3>
          <ul class="space-y-1 text-gray-600">
            <li><kbd>Ctrl+K</kbd> 链接</li>
            <li><kbd>Ctrl+Shift+I</kbd> 图片</li>
            <li><kbd>Ctrl+Shift+K</kbd> 代码块</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-900 mb-2">其他</h3>
          <ul class="space-y-1 text-gray-600">
            <li><kbd>Ctrl+Z</kbd> 撤销</li>
            <li><kbd>Ctrl+Y</kbd> 重做</li>
            <li><kbd>Ctrl+A</kbd> 全选</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markdownToHtml, downloadFile, downloadHtmlFile, copyToClipboard } from '../utils/markdown.js'

export default {
  name: 'MarkdownEditor',
  data() {
    return {
      markdownContent: `# Markdown 编辑器

欢迎使用这个强大的Markdown实时预览编辑器！

## 功能特性

- **实时预览**：边写边看效果
- **语法高亮**：代码块语法高亮
- **快捷工具栏**：一键插入各种格式
- **键盘快捷键**：高效编辑体验
- **多种导出**：支持MD和HTML格式

## 快速开始

### 1. 基本格式

**粗体文本** 和 *斜体文本*

~~删除线文本~~

\`行内代码\`

### 2. 标题层级

# 一级标题
## 二级标题
### 三级标题
#### 四级标题

### 3. 列表

#### 无序列表
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2

#### 有序列表
1. 第一项
2. 第二项
3. 第三项

#### 任务列表
- [x] 已完成任务
- [ ] 待完成任务
- [ ] 另一个任务

### 4. 链接和图片

[Markdown官网](https://markdownlang.com)

![Markdown Logo](https://markdownlang.com/img/markdown-logo.png)

### 5. 引用

> 这是一个引用块
>
> 可以包含多行内容

### 6. 代码块

\`\`\`javascript
function hello() {
  console.log("Hello, Markdown!");
}
\`\`\`

### 7. 表格

| 语法 | 说明 | 示例 |
|------|------|------|
| 标题 | 内容居中 | \`\|---\|\` |
| 文本 | 左对齐 | 默认 |
| 数字 | 右对齐 | \`\|---:\|\` |

---

> **提示**: 使用工具栏按钮或键盘快捷键可以更快地格式化文本！

现在就开始编辑你的Markdown文档吧！`,
      renderedHtml: '',
      filename: 'document',
      previewMode: 'rendered', // 'rendered' 或 'source'
      statusMessage: '',
      statusTimeout: null
    }
  },
  computed: {
    lineCount() {
      return this.markdownContent.split('\n').length
    }
  },
  mounted() {
    this.updatePreview()
    this.setupKeyboardShortcuts()
  },
  beforeUnmount() {
    if (this.statusTimeout) {
      clearTimeout(this.statusTimeout)
    }
  },
  methods: {
    updatePreview() {
      this.renderedHtml = markdownToHtml(this.markdownContent)
    },
    handleInput() {
      this.updatePreview()
    },
    handleScroll() {
      // 可以添加同步滚动功能
    },
    handleKeydown(event) {
      // 处理Tab键缩进
      if (event.key === 'Tab') {
        event.preventDefault()
        this.insertText('  ')
      }
    },
    setupKeyboardShortcuts() {
      document.addEventListener('keydown', (event) => {
        if (event.ctrlKey || event.metaKey) {
          switch (event.key) {
            case 'b':
              event.preventDefault()
              this.insertFormat('bold')
              break
            case 'i':
              event.preventDefault()
              this.insertFormat('italic')
              break
            case '`':
              event.preventDefault()
              this.insertFormat('code')
              break
            case 'k':
              event.preventDefault()
              if (event.shiftKey) {
                this.insertCodeBlock()
              } else {
                this.insertLink()
              }
              break
          }

          // 数字键标题
          if (event.key >= '1' && event.key <= '6') {
            event.preventDefault()
            this.insertHeading(parseInt(event.key))
          }
        }
      })
    },
    insertText(text, selectText = '') {
      const textarea = this.$refs.editorTextarea
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = this.markdownContent.substring(start, end)

      const beforeText = this.markdownContent.substring(0, start)
      const afterText = this.markdownContent.substring(end)

      this.markdownContent = beforeText + text + afterText

      // 设置光标位置
      this.$nextTick(() => {
        const newCursorPos = start + text.length
        textarea.setSelectionRange(newCursorPos, newCursorPos)
        textarea.focus()
      })
    },
    insertFormat(type) {
      const textarea = this.$refs.editorTextarea
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = this.markdownContent.substring(start, end)

      let wrapper = ''
      switch (type) {
        case 'bold':
          wrapper = '**'
          break
        case 'italic':
          wrapper = '*'
          break
        case 'strikethrough':
          wrapper = '~~'
          break
        case 'code':
          wrapper = '`'
          break
      }

      if (selectedText) {
        this.insertText(wrapper + selectedText + wrapper)
      } else {
        this.insertText(wrapper + wrapper)
        // 将光标移动到中间
        this.$nextTick(() => {
          const newPos = start + wrapper.length
          textarea.setSelectionRange(newPos, newPos)
        })
      }
    },
    insertHeading(level) {
      const textarea = this.$refs.editorTextarea
      const start = textarea.selectionStart
      const lineStart = this.markdownContent.lastIndexOf('\n', start - 1) + 1
      const lineEnd = this.markdownContent.indexOf('\n', start)

      const currentLine = this.markdownContent.substring(
        lineStart,
        lineEnd === -1 ? this.markdownContent.length : lineEnd
      )

      // 检查是否已经是标题
      const existingHashes = currentLine.match(/^#+/)?.[0] || ''
      const newHashes = '#'.repeat(level)

      let newLine
      if (existingHashes) {
        // 替换现有的标题级别
        newLine = currentLine.replace(/^#+\s*/, newHashes + ' ')
      } else {
        // 添加新的标题
        newLine = newHashes + ' ' + currentLine.trim()
      }

      this.markdownContent = this.markdownContent.substring(0, lineStart) +
                           newLine +
                           this.markdownContent.substring(lineEnd === -1 ? this.markdownContent.length : lineEnd)

      this.updatePreview()
    },
    insertList(type) {
      const textarea = this.$refs.editorTextarea
      const start = textarea.selectionStart
      const lineStart = this.markdownContent.lastIndexOf('\n', start - 1) + 1

      let insertText = ''
      switch (type) {
        case 'unordered':
          insertText = '- 项目\n'
          break
        case 'ordered':
          insertText = '1. 项目\n'
          break
        case 'task':
          insertText = '- [ ] 任务\n'
          break
      }

      this.markdownContent = this.markdownContent.substring(0, lineStart) +
                           insertText +
                           this.markdownContent.substring(lineStart)

      this.updatePreview()
    },
    insertLink() {
      const linkText = '[链接文本](https://example.com)'
      this.insertText(linkText, '链接文本')
    },
    insertImage() {
      const imageText = '![替代文本](image-url.jpg)'
      this.insertText(imageText, '替代文本')
    },
    insertCodeBlock() {
      const codeBlock = '\n```language\n代码内容\n```\n'
      this.insertText(codeBlock, '代码内容')
    },
    insertTable() {
      const table = '\n| 表头1 | 表头2 | 表头3 |\n|-------|-------|-------|\n| 数据1 | 数据2 | 数据3 |\n| 数据4 | 数据5 | 数据6 |\n'
      this.insertText(table)
    },
    insertQuote() {
      const quote = '\n> 引用内容\n'
      this.insertText(quote, '引用内容')
    },
    clearContent() {
      if (confirm('确定要清空所有内容吗？')) {
        this.markdownContent = ''
        this.updatePreview()
      }
    },
    async copyContent() {
      const success = await copyToClipboard(this.markdownContent)
      if (success) {
        this.showStatus('内容已复制到剪贴板')
      } else {
        this.showStatus('复制失败')
      }
    },
    downloadMarkdown() {
      downloadFile(this.markdownContent, `${this.filename}.md`, 'text/markdown')
      this.showStatus('Markdown文件下载完成')
    },
    downloadHtml() {
      downloadHtmlFile(this.renderedHtml, this.filename)
      this.showStatus('HTML文件下载完成')
    },
    togglePreviewMode() {
      this.previewMode = this.previewMode === 'rendered' ? 'source' : 'rendered'
    },
    showStatus(message) {
      this.statusMessage = message
      if (this.statusTimeout) {
        clearTimeout(this.statusTimeout)
      }
      this.statusTimeout = setTimeout(() => {
        this.statusMessage = ''
      }, 3000)
    }
  },
  watch: {
    markdownContent() {
      this.updatePreview()
    }
  }
}
</script>