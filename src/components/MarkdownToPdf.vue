<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Markdown 转 PDF</h1>
      <p class="text-gray-600">将Markdown文档转换为PDF文件，支持自定义样式和布局</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Markdown输入区域 -->
      <div class="card">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-900">Markdown 输入</h2>
          <div class="flex space-x-2">
            <button
              @click="clearInput"
              class="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              清空
            </button>
            <button
              @click="pasteFromClipboard"
              class="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              粘贴
            </button>
          </div>
        </div>

        <textarea
          v-model="markdownInput"
          placeholder="在此输入Markdown文本...

示例：
# PDF文档标题

## 简介
这是一个将要转换为PDF的Markdown文档示例。

## 内容
- **粗体文本** 和 *斜体文本*
- [链接示例](https://example.com)
- 代码块：

```javascript
function hello() {
  console.log('Hello, PDF!');
}
```

### 表格示例
| 名称 | 描述 | 状态 |
|------|------|------|
| 项目1 | 描述1 | ✅ |
| 项目2 | 描述2 | 🔄 |
| 项目3 | 描述3 | ❌ |"
          class="w-full h-96 p-4 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
        ></textarea>

        <div class="mt-4 text-sm text-gray-500">
          {{ markdownInput.length }} 字符
        </div>
      </div>

      <!-- 设置和预览区域 -->
      <div class="space-y-6">
        <!-- PDF设置 -->
        <div class="card">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">PDF 设置</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                文件名
              </label>
              <input
                v-model="filename"
                placeholder="document"
                class="input"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                页面大小
              </label>
              <select v-model="pageSize" class="input">
                <option value="a4">A4</option>
                <option value="a3">A3</option>
                <option value="letter">Letter</option>
                <option value="legal">Legal</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                方向
              </label>
              <select v-model="orientation" class="input">
                <option value="portrait">纵向</option>
                <option value="landscape">横向</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                边距 (mm)
              </label>
              <input
                v-model.number="margin"
                type="number"
                min="0"
                max="50"
                class="input"
              >
            </div>
          </div>

          <div class="mt-4 space-y-2">
            <label class="flex items-center">
              <input
                v-model="includeHeader"
                type="checkbox"
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              >
              <span class="ml-2 text-sm text-gray-600">包含页眉</span>
            </label>

            <label class="flex items-center">
              <input
                v-model="includeFooter"
                type="checkbox"
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              >
              <span class="ml-2 text-sm text-gray-600">包含页脚</span>
            </label>

            <label class="flex items-center">
              <input
                v-model="autoBreakPage"
                type="checkbox"
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              >
              <span class="ml-2 text-sm text-gray-600">自动分页</span>
            </label>
          </div>
        </div>

        <!-- 预览区域 -->
        <div class="card">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-900">预览</h2>
            <button
              @click="togglePreview"
              class="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {{ showPreview ? '隐藏预览' : '显示预览' }}
            </button>
          </div>

          <div v-if="showPreview" class="border border-gray-200 rounded-md p-4 min-h-48 max-h-96 overflow-y-auto">
            <div
              v-html="htmlPreview"
              class="markdown-preview prose prose-gray max-w-none text-sm"
            ></div>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="card">
          <div class="flex space-x-3">
            <button
              @click="generatePdf"
              :disabled="!markdownInput.trim() || isGenerating"
              class="flex-1 btn-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <svg v-if="isGenerating" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isGenerating ? '生成中...' : '生成PDF' }}
            </button>

            <button
              @click="downloadMarkdown"
              :disabled="!markdownInput.trim()"
              class="px-4 py-2 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              下载MD
            </button>
          </div>

          <div v-if="errorMessage" class="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
            <p class="text-sm text-red-600">{{ errorMessage }}</p>
          </div>

          <div v-if="successMessage" class="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
            <p class="text-sm text-green-600">{{ successMessage }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 使用提示 -->
    <div class="card mt-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">使用提示</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <h3 class="font-medium text-gray-900 mb-2">PDF特性</h3>
          <ul class="space-y-1">
            <li>• 支持多种页面大小 (A4, A3, Letter, Legal)</li>
            <li>• 可选择纵向或横向布局</li>
            <li>• 自定义边距设置</li>
            <li>• 可选页眉和页脚</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-900 mb-2">注意事项</h3>
          <ul class="space-y-1">
            <li>• 图片链接需要是完整的URL</li>
            <li>• 复杂的表格可能需要调整</li>
            <li>• 建议预览后再生成PDF</li>
            <li>• 大文档可能需要一些时间</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markdownToHtml, downloadFile, htmlToPdf } from '../utils/markdown.js'

export default {
  name: 'MarkdownToPdf',
  data() {
    return {
      markdownInput: `# PDF文档示例

## 欢迎使用Markdown转PDF工具

这是一个专业的Markdown转PDF转换工具，具有以下特性：

### ✨ 主要功能
- **高质量输出**：清晰的文本和布局
- **多种格式支持**：A4、A3、Letter、Legal
- **灵活布局**：纵向和横向选择
- **自定义边距**：0-50mm可调
- **页眉页脚**：可选添加

### 📊 数据表格

| 功能 | 状态 | 说明 |
|------|------|------|
| 文本转换 | ✅ | 支持所有Markdown文本语法 |
| 图片显示 | ✅ | 需要有效的图片URL |
| 代码高亮 | ✅ | 保持代码格式 |
| 表格布局 | ✅ | 自动调整表格样式 |
| 链接处理 | ✅ | 转换为可点击链接 |

### 💻 代码示例

以下是一个简单的JavaScript函数示例：

\`\`\`javascript
function generatePDF(markdown) {
  // 将Markdown转换为HTML
  const html = markdownToHtml(markdown);

  // 配置PDF选项
  const options = {
    margin: 10,
    filename: 'document.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4' }
  };

  // 生成并下载PDF
  return html2pdf().set(options).from(html).save();
}
\`\`\`

### 🔗 链接和引用

> 这是一个引用块示例，用于突出显示重要信息。

访问我们的[官方网站](https://markdownlang.com)了解更多信息。

### 📝 列表

#### 无序列表
- 项目一：基础功能
- 项目二：高级特性
- 项目三：定制选项

#### 有序列表
1. 准备Markdown内容
2. 配置PDF参数
3. 点击生成PDF
4. 下载完成的文件

---

*生成时间：{{ new Date().toLocaleString() }}*`,
      htmlPreview: '',
      filename: 'document',
      pageSize: 'a4',
      orientation: 'portrait',
      margin: 10,
      includeHeader: false,
      includeFooter: false,
      autoBreakPage: true,
      showPreview: true,
      isGenerating: false,
      errorMessage: '',
      successMessage: ''
    }
  },
  mounted() {
    this.updatePreview()
  },
  methods: {
    updatePreview() {
      this.htmlPreview = markdownToHtml(this.markdownInput)
    },
    clearInput() {
      this.markdownInput = ''
      this.htmlPreview = ''
    },
    async pasteFromClipboard() {
      try {
        const text = await navigator.clipboard.readText()
        this.markdownInput = text
        this.updatePreview()
      } catch (error) {
        console.error('粘贴失败:', error)
        this.showError('无法访问剪贴板，请手动粘贴')
      }
    },
    async generatePdf() {
      if (!this.markdownInput.trim()) {
        this.showError('请输入Markdown内容')
        return
      }

      this.isGenerating = true
      this.errorMessage = ''
      this.successMessage = ''

      try {
        // 创建带有样式的HTML
        const styledHtml = this.createStyledHtml(this.htmlPreview)

        // 配置PDF选项
        const options = {
          margin: this.margin,
          filename: `${this.filename}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: true
          },
          jsPDF: {
            unit: 'mm',
            format: this.pageSize,
            orientation: this.orientation
          }
        }

        // 如果需要页眉页脚，添加相应的样式
        if (this.includeHeader || this.includeFooter) {
          options.jsPDF = {
            ...options.jsPDF,
            ...this.getHeaderFooterOptions()
          }
        }

        await htmlToPdf(styledHtml, this.filename)
        this.showSuccess('PDF生成成功！')

      } catch (error) {
        console.error('PDF生成失败:', error)
        this.showError('PDF生成失败，请重试')
      } finally {
        this.isGenerating = false
      }
    },
    createStyledHtml(htmlContent) {
      const styles = `
        <style>
          body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
          }

          h1, h2, h3, h4, h5, h6 {
            color: #2c3e50;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            page-break-after: avoid;
          }

          h1 { font-size: 28px; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
          h2 { font-size: 24px; border-bottom: 1px solid #bdc3c7; padding-bottom: 5px; }
          h3 { font-size: 20px; }
          h4 { font-size: 18px; }
          h5 { font-size: 16px; }
          h6 { font-size: 14px; }

          p {
            margin-bottom: 1em;
            text-align: justify;
          }

          code {
            background-color: #f8f9fa;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.9em;
          }

          pre {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin: 1em 0;
            page-break-inside: avoid;
          }

          pre code {
            background-color: transparent;
            padding: 0;
          }

          blockquote {
            border-left: 4px solid #3498db;
            padding-left: 15px;
            margin: 1em 0;
            color: #555;
            font-style: italic;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin: 1em 0;
            page-break-inside: avoid;
          }

          th, td {
            border: 1px solid #bdc3c7;
            padding: 8px 12px;
            text-align: left;
          }

          th {
            background-color: #f8f9fa;
            font-weight: bold;
          }

          tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          ul, ol {
            margin: 1em 0;
            padding-left: 2em;
          }

          li {
            margin-bottom: 0.5em;
          }

          img {
            max-width: 100%;
            height: auto;
            page-break-inside: avoid;
          }

          a {
            color: #3498db;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          hr {
            border: none;
            border-top: 1px solid #bdc3c7;
            margin: 2em 0;
          }

          ${this.autoBreakPage ? `
          h1, h2, h3 {
            page-break-before: always;
          }

          h1:first-child {
            page-break-before: avoid;
          }
          ` : ''}
        </style>
      `

      return `${styles}<body>${htmlContent}</body>`
    },
    getHeaderFooterOptions() {
      // 这里可以扩展页眉页脚功能
      return {}
    },
    downloadMarkdown() {
      if (!this.markdownInput.trim()) return
      downloadFile(this.markdownInput, `${this.filename}.md`, 'text/markdown')
    },
    togglePreview() {
      this.showPreview = !this.showPreview
    },
    showError(message) {
      this.errorMessage = message
      this.successMessage = ''
      setTimeout(() => {
        this.errorMessage = ''
      }, 5000)
    },
    showSuccess(message) {
      this.successMessage = message
      this.errorMessage = ''
      setTimeout(() => {
        this.successMessage = ''
      }, 3000)
    }
  },
  watch: {
    markdownInput() {
      this.updatePreview()
    }
  }
}
</script>