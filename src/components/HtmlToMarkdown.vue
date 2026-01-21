<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">HTML 转 Markdown</h1>
      <p class="text-gray-600">将HTML代码转换为Markdown格式，支持复杂的HTML结构</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- HTML输入区域 -->
      <div class="card">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-900">HTML 输入</h2>
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
          v-model="htmlInput"
          @input="convertToMarkdown"
          placeholder="<p>在此输入HTML代码...</p>

示例：
<h1>标题</h1>
<p><strong>粗体文本</strong> 和 <em>斜体文本</em></p>

<ul>
  <li>列表项1</li>
  <li>列表项2</li>
</ul>

<table>
  <tr>
    <th>表头1</th>
    <th>表头2</th>
  </tr>
  <tr>
    <td>数据1</td>
    <td>数据2</td>
  </tr>
</table>

<a href='https://example.com'>链接</a>
<img src='image.jpg' alt='图片'>"
          class="w-full h-96 p-4 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
        ></textarea>

        <div class="mt-4 flex items-center justify-between">
          <div class="text-sm text-gray-500">
            {{ htmlInput.length }} 字符
          </div>
          <div class="flex space-x-2">
            <input
              v-model="filename"
              placeholder="文件名"
              class="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
            <button
              @click="downloadHtml"
              class="px-3 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              下载HTML
            </button>
          </div>
        </div>
      </div>

      <!-- Markdown输出区域 -->
      <div class="card">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-900">Markdown 输出</h2>
          <div class="flex space-x-2">
            <button
              @click="copyMarkdown"
              :disabled="!markdownOutput"
              class="px-3 py-1 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              复制
            </button>
            <button
              @click="downloadMarkdown"
              :disabled="!markdownOutput"
              class="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              下载MD
            </button>
          </div>
        </div>

        <div class="relative">
          <textarea
            v-model="markdownOutput"
            readonly
            placeholder="Markdown输出将显示在这里..."
            class="w-full h-96 p-4 border border-gray-300 rounded-md resize-none bg-gray-50 font-mono text-sm"
          ></textarea>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <div class="text-sm text-gray-500">
            {{ markdownOutput.length }} 字符
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
            <button
              @click="convertToMarkdown"
              :disabled="!htmlInput.trim()"
              class="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              转换
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 预览区域 -->
    <div class="card mt-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-gray-900">预览</h2>
        <div class="flex items-center space-x-2">
          <label class="flex items-center">
            <input
              v-model="showPreview"
              type="checkbox"
              class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="ml-2 text-sm text-gray-600">显示预览</span>
          </label>
        </div>
      </div>

      <div v-if="showPreview && markdownOutput" class="border border-gray-200 rounded-md p-4 min-h-48">
        <div
          v-html="previewHtml"
          class="markdown-preview prose prose-gray max-w-none"
        ></div>
      </div>

      <div v-else-if="showPreview && !markdownOutput" class="text-center py-8 text-gray-500">
        暂无内容可预览
      </div>
    </div>

    <!-- HTML示例 -->
    <div class="card mt-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">HTML 示例</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button
          @click="loadHtmlExample('basic')"
          class="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
        >
          <h3 class="font-medium text-gray-900 mb-2">基础HTML</h3>
          <p class="text-sm text-gray-600">包含标题、段落、列表的基本HTML</p>
        </button>

        <button
          @click="loadHtmlExample('table')"
          class="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
        >
          <h3 class="font-medium text-gray-900 mb-2">表格HTML</h3>
          <p class="text-sm text-gray-600">复杂的表格结构HTML</p>
        </button>

        <button
          @click="loadHtmlExample('rich')"
          class="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-left"
        >
          <h3 class="font-medium text-gray-900 mb-2">富文本HTML</h3>
          <p class="text-sm text-gray-600">包含链接、图片、格式的富文本HTML</p>
        </button>
      </div>
    </div>

    <!-- 使用提示 -->
    <div class="card mt-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">使用提示</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <h3 class="font-medium text-gray-900 mb-2">支持的HTML元素</h3>
          <ul class="space-y-1">
            <li>• 标题 (h1-h6)</li>
            <li>• 段落和文本格式</li>
            <li>• 列表 (ul, ol, li)</li>
            <li>• 链接和图片</li>
            <li>• 表格 (table, tr, td, th)</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-900 mb-2">转换特性</h3>
          <ul class="space-y-1">
            <li>• 保持原有结构</li>
            <li>• 智能格式识别</li>
            <li>• 支持嵌套元素</li>
            <li>• 清理多余标签</li>
          </ul>
        </div>
      </div>

      <div class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
        <div class="flex items-start space-x-2">
          <svg class="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
          <div>
            <h4 class="text-sm font-medium text-yellow-800">注意事项</h4>
            <ul class="text-sm text-yellow-700 mt-1 space-y-1">
              <li>• 复杂的CSS样式可能无法完全转换</li>
              <li>• 内联样式会被忽略，建议使用语义化HTML</li>
              <li>• JavaScript代码不会被转换</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { htmlToMarkdown, downloadFile, markdownToHtml, copyToClipboard } from '../utils/markdown.js'

export default {
  name: 'HtmlToMarkdown',
  data() {
    return {
      htmlInput: `<h1>HTML 转 Markdown 示例</h1>

<p>这是一个 <strong>粗体文本</strong> 和 <em>斜体文本</em> 的例子。</p>

<h2>列表示例</h2>

<h3>无序列表</h3>
<ul>
  <li>项目 1</li>
  <li>项目 2
    <ul>
      <li>子项目 2.1</li>
      <li>子项目 2.2</li>
    </ul>
  </li>
  <li>项目 3</li>
</ul>

<h3>有序列表</h3>
<ol>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ol>

<h2>其他元素</h2>

<blockquote>
  <p>这是一个引用块。</p>
  <p>可以包含多行内容。</p>
</blockquote>

<p>这是一个 <code>行内代码</code> 示例。</p>

<pre><code>// 代码块
function hello() {
  console.log("Hello, World!");
}
</code></pre>

<h2>链接和图片</h2>

<p><a href="https://markdownlang.com">Markdown官网</a></p>

<p><img src="https://markdownlang.com/img/markdown-logo.png" alt="Markdown Logo" /></p>`,
      markdownOutput: '',
      previewHtml: '',
      filename: 'document',
      autoConvert: true,
      showPreview: true
    }
  },
  mounted() {
    this.convertToMarkdown()
  },
  methods: {
    convertToMarkdown() {
      if (this.autoConvert && this.htmlInput.trim()) {
        try {
          this.markdownOutput = htmlToMarkdown(this.htmlInput)
          this.updatePreview()
        } catch (error) {
          console.error('转换错误:', error)
          this.markdownOutput = '转换失败，请检查HTML格式'
        }
      }
    },
    updatePreview() {
      if (this.markdownOutput) {
        this.previewHtml = markdownToHtml(this.markdownOutput)
      }
    },
    clearInput() {
      this.htmlInput = ''
      this.markdownOutput = ''
      this.previewHtml = ''
    },
    async pasteFromClipboard() {
      try {
        const text = await navigator.clipboard.readText()
        this.htmlInput = text
        this.convertToMarkdown()
      } catch (error) {
        console.error('粘贴失败:', error)
        alert('无法访问剪贴板，请手动粘贴')
      }
    },
    async copyMarkdown() {
      const success = await copyToClipboard(this.markdownOutput)
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
    downloadMarkdown() {
      downloadFile(this.markdownOutput, `${this.filename}.md`, 'text/markdown')
    },
    downloadHtml() {
      downloadFile(this.htmlInput, `${this.filename}.html`, 'text/html')
    },
    loadHtmlExample(type) {
      let html = ''

      switch (type) {
        case 'basic':
          html = `<h1>基础HTML示例</h1>

<h2>标题和段落</h2>
<p>这是一个段落文本，包含<strong>粗体</strong>和<em>斜体</em>格式。</p>

<h3>列表</h3>
<ul>
  <li>无序列表项1</li>
  <li>无序列表项2</li>
  <li>无序列表项3</li>
</ul>

<ol>
  <li>有序列表项1</li>
  <li>有序列表项2</li>
  <li>有序列表项3</li>
</ol>

<h2>引用和代码</h2>
<blockquote>
  <p>这是一个引用块，用于突出显示重要内容。</p>
</blockquote>

<p>代码示例：<code>console.log('Hello World');</code></p>`
          break

        case 'table':
          html = `<h1>表格HTML示例</h1>

<h2>简单表格</h2>
<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>职位</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>28</td>
      <td>工程师</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>32</td>
      <td>设计师</td>
    </tr>
    <tr>
      <td>王五</td>
      <td>25</td>
      <td>产品经理</td>
    </tr>
  </tbody>
</table>

<h2>复杂表格</h2>
<table>
  <caption>员工信息表</caption>
  <thead>
    <tr>
      <th rowspan="2">部门</th>
      <th colspan="2">基本信息</th>
      <th rowspan="2">薪资</th>
    </tr>
    <tr>
      <th>姓名</th>
      <th>工龄</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>技术部</td>
      <td>张三</td>
      <td>3年</td>
      <td>15000</td>
    </tr>
    <tr>
      <td>设计部</td>
      <td>李四</td>
      <td>2年</td>
      <td>12000</td>
    </tr>
  </tbody>
</table>`
          break

        case 'rich':
          html = `<h1>富文本HTML示例</h1>

<h2>格式化文本</h2>
<p>这是一个包含多种格式的段落：<strong>粗体</strong>、<em>斜体</em>、<u>下划线</u>、<del>删除线</del>。</p>

<h2>链接和媒体</h2>
<p>访问我们的<a href="https://markdownlang.com" target="_blank">官方网站</a>了解更多信息。</p>

<p><img src="https://markdownlang.com/img/markdown-logo.png" alt="Markdown Logo" style="max-width: 200px;" /></p>

<h2>代码和引用</h2>
<pre><code class="language-javascript">function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));</code></pre>

<blockquote>
  <p>Markdown是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的HTML文档。</p>
  <footer>—— Markdown 官方文档</footer>
</blockquote>

<h2>嵌套列表</h2>
<ul>
  <li>前端技术
    <ul>
      <li>HTML/CSS</li>
      <li>JavaScript
        <ul>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>后端技术
    <ul>
      <li>Node.js</li>
      <li>Python</li>
      <li>Java</li>
    </ul>
  </li>
</ul>`
          break
      }

      this.htmlInput = html
      this.convertToMarkdown()
    }
  },
  watch: {
    htmlInput() {
      if (this.autoConvert) {
        this.convertToMarkdown()
      }
    },
    markdownOutput() {
      this.updatePreview()
    }
  }
}
</script>