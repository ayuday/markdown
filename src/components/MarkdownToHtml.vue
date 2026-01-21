<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Markdown 转 HTML</h1>
      <p class="text-gray-600">将Markdown文本转换为HTML代码，支持实时转换和文件下载</p>
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
          @input="convertToHtml"
          placeholder="在此输入Markdown文本...

示例：
# 标题
**粗体文本** 和 *斜体文本*

- 无序列表项
1. 有序列表项

[链接](https://example.com)
![图片](image.jpg)

```javascript
console.log('Hello World')
```"
          class="w-full h-96 p-4 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
        ></textarea>

        <div class="mt-4 flex items-center justify-between">
          <div class="text-sm text-gray-500">
            {{ markdownInput.length }} 字符
          </div>
          <div class="flex space-x-2">
            <input
              v-model="filename"
              placeholder="文件名"
              class="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
            <button
              @click="downloadMarkdown"
              class="px-3 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              下载MD
            </button>
          </div>
        </div>
      </div>

      <!-- HTML输出区域 -->
      <div class="card">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-900">HTML 输出</h2>
          <div class="flex space-x-2">
            <button
              @click="copyHtml"
              :disabled="!htmlOutput"
              class="px-3 py-1 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              复制
            </button>
            <button
              @click="downloadHtml"
              :disabled="!htmlOutput"
              class="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              下载HTML
            </button>
          </div>
        </div>

        <div class="relative">
          <textarea
            v-model="htmlOutput"
            readonly
            placeholder="HTML输出将显示在这里..."
            class="w-full h-96 p-4 border border-gray-300 rounded-md resize-none bg-gray-50 font-mono text-sm"
          ></textarea>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <div class="text-sm text-gray-500">
            {{ htmlOutput.length }} 字符
          </div>
          <div class="flex items-center space-x-2">
            <label class="flex items-center">
              <input
                v-model="autoConvert"
                type="checkbox"
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              >
              <span class="ml-2 text-sm text-gray-600">自动转换</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- 预览区域 -->
    <div class="card mt-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-gray-900">实时预览</h2>
        <button
          @click="togglePreview"
          class="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          {{ showPreview ? '隐藏预览' : '显示预览' }}
        </button>
      </div>

      <div v-if="showPreview" class="border border-gray-200 rounded-md p-4 min-h-48">
        <div
          v-html="htmlOutput"
          class="markdown-preview prose prose-gray max-w-none"
        ></div>
      </div>
    </div>

    <!-- 使用提示 -->
    <div class="card mt-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">使用提示</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <h3 class="font-medium text-gray-900 mb-2">支持的语法</h3>
          <ul class="space-y-1">
            <li>• 标题 (H1-H6)</li>
            <li>• 粗体和斜体文本</li>
            <li>• 列表 (有序和无序)</li>
            <li>• 链接和图片</li>
            <li>• 代码块和行内代码</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-900 mb-2">快捷操作</h3>
          <ul class="space-y-1">
            <li>• Ctrl+V 粘贴内容</li>
            <li>• 实时自动转换</li>
            <li>• 一键复制HTML</li>
            <li>• 下载完整HTML文件</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markdownToHtml, downloadFile, downloadHtmlFile, copyToClipboard } from '../utils/markdown.js'

export default {
  name: 'MarkdownToHtml',
  data() {
    return {
      markdownInput: `# Markdown 转 HTML 示例

这是一个 **粗体文本** 和 *斜体文本* 的例子。

## 列表示例

### 无序列表
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2

### 有序列表
1. 第一项
2. 第二项
3. 第三项

## 其他语法

> 这是一个引用块

[这是一个链接](https://markdownlang.com)

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |`,
      htmlOutput: '',
      filename: 'document',
      autoConvert: true,
      showPreview: true
    }
  },
  mounted() {
    this.convertToHtml()
  },
  methods: {
    convertToHtml() {
      if (this.autoConvert) {
        this.htmlOutput = markdownToHtml(this.markdownInput)
      }
    },
    clearInput() {
      this.markdownInput = ''
      this.htmlOutput = ''
    },
    async pasteFromClipboard() {
      try {
        const text = await navigator.clipboard.readText()
        this.markdownInput = text
        this.convertToHtml()
      } catch (error) {
        console.error('粘贴失败:', error)
        alert('无法访问剪贴板，请手动粘贴')
      }
    },
    async copyHtml() {
      const success = await copyToClipboard(this.htmlOutput)
      if (success) {
        // 显示复制成功提示
        const button = event.target
        const originalText = button.textContent
        button.textContent = '已复制'
        button.classList.remove('bg-primary-600', 'hover:bg-primary-700')
        button.classList.add('bg-green-600', 'hover:bg-green-700')

        setTimeout(() => {
          button.textContent = originalText
          button.classList.remove('bg-green-600', 'hover:bg-green-700')
          button.classList.add('bg-primary-600', 'hover:bg-primary-700')
        }, 2000)
      }
    },
    downloadHtml() {
      downloadHtmlFile(this.htmlOutput, this.filename)
    },
    downloadMarkdown() {
      downloadFile(this.markdownInput, `${this.filename}.md`, 'text/markdown')
    },
    togglePreview() {
      this.showPreview = !this.showPreview
    }
  },
  watch: {
    markdownInput() {
      if (this.autoConvert) {
        this.convertToHtml()
      }
    }
  }
}
</script>