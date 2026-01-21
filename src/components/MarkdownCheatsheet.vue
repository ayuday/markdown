<template>
  <div class="max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Markdown 速查表</h1>
      <p class="text-gray-600">交互式语法速查表，点击查看示例和效果</p>
    </div>

    <!-- 搜索和过滤 -->
    <div class="card mb-6">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索语法..."
            class="input"
          >
        </div>
        <div class="flex space-x-2">
          <select v-model="selectedCategory" class="input">
            <option value="">所有分类</option>
            <option value="basic">基础语法</option>
            <option value="extended">扩展语法</option>
            <option value="advanced">高级语法</option>
          </select>
          <button
            @click="resetFilters"
            class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            重置
          </button>
        </div>
      </div>
    </div>

    <!-- 语法卡片网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div
        v-for="syntax in filteredSyntaxes"
        :key="syntax.id"
        class="card group hover:shadow-lg transition-all duration-200 cursor-pointer"
        :class="{ 'ring-2 ring-primary-500': selectedSyntax?.id === syntax.id }"
        @click="selectSyntax(syntax)"
      >
        <div class="flex items-start justify-between mb-3">
          <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {{ syntax.title }}
          </h3>
          <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
            {{ syntax.category }}
          </span>
        </div>

        <p class="text-gray-600 mb-3 text-sm">
          {{ syntax.description }}
        </p>

        <div class="bg-gray-50 rounded-md p-3 font-mono text-sm text-gray-800 mb-3">
          {{ syntax.example }}
        </div>

        <div class="flex items-center justify-between text-xs text-gray-500">
          <span>点击查看效果</span>
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- 详细预览面板 -->
    <div v-if="selectedSyntax" class="card">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-900">{{ selectedSyntax.title }}</h2>
        <button
          @click="closePreview"
          class="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Markdown源码 -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Markdown 源码</h3>
          <div class="bg-gray-50 rounded-md p-4 font-mono text-sm text-gray-800 border">
            <pre>{{ selectedSyntax.example }}</pre>
          </div>
          <button
            @click="copySyntax(selectedSyntax.example)"
            class="mt-3 px-3 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            复制源码
          </button>
        </div>

        <!-- 渲染效果 -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">渲染效果</h3>
          <div class="border border-gray-200 rounded-md p-4 min-h-32">
            <div
              v-html="selectedSyntax.rendered"
              class="markdown-preview prose prose-gray max-w-none"
            ></div>
          </div>
        </div>
      </div>

      <!-- 使用说明 -->
      <div class="mt-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">使用说明</h3>
        <div class="bg-blue-50 border border-blue-200 rounded-md p-4">
          <div class="flex items-start space-x-3">
            <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="text-sm text-blue-800">
              <p class="font-medium mb-1">{{ selectedSyntax.title }} 的使用说明：</p>
              <p>{{ selectedSyntax.usage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 语法分类统计 -->
    <div class="card mt-8">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">语法统计</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center">
          <div class="text-2xl font-bold text-primary-600">{{ syntaxes.filter(s => s.category === '基础语法').length }}</div>
          <div class="text-sm text-gray-600">基础语法</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-green-600">{{ syntaxes.filter(s => s.category === '扩展语法').length }}</div>
          <div class="text-sm text-gray-600">扩展语法</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-purple-600">{{ syntaxes.filter(s => s.category === '高级语法').length }}</div>
          <div class="text-sm text-gray-600">高级语法</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-gray-600">{{ syntaxes.length }}</div>
          <div class="text-sm text-gray-600">总计</div>
        </div>
      </div>
    </div>

    <!-- 学习路径 -->
    <div class="card mt-8">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">学习路径</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="text-xl font-bold text-primary-600">1</span>
          </div>
          <h3 class="font-medium text-gray-900 mb-2">基础语法</h3>
          <p class="text-sm text-gray-600">掌握标题、段落、列表、链接等基本语法</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="text-xl font-bold text-green-600">2</span>
          </div>
          <h3 class="font-medium text-gray-900 mb-2">扩展语法</h3>
          <p class="text-sm text-gray-600">学习表格、代码块、脚注等高级功能</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="text-xl font-bold text-purple-600">3</span>
          </div>
          <h3 class="font-medium text-gray-900 mb-2">高级用法</h3>
          <p class="text-sm text-gray-600">探索图表、数学公式、自定义扩展等</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markdownToHtml, copyToClipboard } from '../utils/markdown.js'

export default {
  name: 'MarkdownCheatsheet',
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      selectedSyntax: null,
      syntaxes: [
        // 基础语法
        {
          id: 'heading',
          title: '标题',
          category: '基础语法',
          description: '创建不同级别的标题',
          example: '# 一级标题\n## 二级标题\n### 三级标题',
          usage: '使用 # 符号创建标题，# 数量决定标题级别。标题前后建议空行。',
          rendered: ''
        },
        {
          id: 'paragraph',
          title: '段落',
          category: '基础语法',
          description: '创建段落和换行',
          example: '这是第一段。\n\n这是第二段。\n这是同一段的第二行。',
          usage: '段落间用空行分隔。行尾两个空格可换行。',
          rendered: ''
        },
        {
          id: 'bold',
          title: '粗体',
          category: '基础语法',
          description: '创建粗体文本',
          example: '**粗体文本**\n__粗体文本__',
          usage: '使用 ** 或 __ 包围文本创建粗体。',
          rendered: ''
        },
        {
          id: 'italic',
          title: '斜体',
          category: '基础语法',
          description: '创建斜体文本',
          example: '*斜体文本*\n_斜体文本_',
          usage: '使用 * 或 _ 包围文本创建斜体。',
          rendered: ''
        },
        {
          id: 'strikethrough',
          title: '删除线',
          category: '基础语法',
          description: '创建删除线文本',
          example: '~~删除线文本~~',
          usage: '使用 ~~ 包围文本创建删除线。',
          rendered: ''
        },
        {
          id: 'inline-code',
          title: '行内代码',
          category: '基础语法',
          description: '创建行内代码',
          example: '使用 `console.log()` 函数',
          usage: '使用 ` 包围代码创建行内代码。',
          rendered: ''
        },
        {
          id: 'link',
          title: '链接',
          category: '基础语法',
          description: '创建超链接',
          example: '[链接文本](https://example.com)\n[带标题的链接](https://example.com "链接标题")',
          usage: '使用 [文本](URL) 创建链接，可选添加标题。',
          rendered: ''
        },
        {
          id: 'image',
          title: '图片',
          category: '基础语法',
          description: '插入图片',
          example: '![替代文本](image.jpg)\n![带标题的图片](image.jpg "图片标题")',
          usage: '使用 ![文本](URL) 插入图片，可选添加标题。',
          rendered: ''
        },
        {
          id: 'unordered-list',
          title: '无序列表',
          category: '基础语法',
          description: '创建无序列表',
          example: '- 项目 1\n- 项目 2\n  - 子项目\n- 项目 3',
          usage: '使用 -、* 或 + 创建列表项，支持嵌套。',
          rendered: ''
        },
        {
          id: 'ordered-list',
          title: '有序列表',
          category: '基础语法',
          description: '创建有序列表',
          example: '1. 第一项\n2. 第二项\n   1. 子项\n3. 第三项',
          usage: '使用数字加点创建有序列表，支持嵌套。',
          rendered: ''
        },
        {
          id: 'blockquote',
          title: '引用',
          category: '基础语法',
          description: '创建引用块',
          example: '> 这是一个引用\n>\n> 可以多行',
          usage: '使用 > 创建引用块，每行开头都可加 >。',
          rendered: ''
        },
        {
          id: 'code-block',
          title: '代码块',
          category: '基础语法',
          description: '创建代码块',
          example: '```\nfunction hello() {\n  console.log("Hello!");\n}\n```',
          usage: '使用 ``` 包围多行代码，可指定语言。',
          rendered: ''
        },

        // 扩展语法
        {
          id: 'table',
          title: '表格',
          category: '扩展语法',
          description: '创建表格',
          example: '| 表头1 | 表头2 | 表头3 |\n|-------|-------|-------|\n| 数据1 | 数据2 | 数据3 |\n| 数据4 | 数据5 | 数据6 |',
          usage: '使用 | 分隔列，第二行用 - 分隔表头和数据。',
          rendered: ''
        },
        {
          id: 'fenced-code',
          title: '围栏代码块',
          category: '扩展语法',
          description: '带语法高亮的代码块',
          example: '```javascript\nfunction hello() {\n  console.log("Hello!");\n}\n```',
          usage: '使用 ```language 指定编程语言获得语法高亮。',
          rendered: ''
        },
        {
          id: 'task-list',
          title: '任务列表',
          category: '扩展语法',
          description: '创建任务清单',
          example: '- [x] 已完成任务\n- [ ] 未完成任务\n- [ ] 另一个任务',
          usage: '使用 - [x] 表示完成，- [ ] 表示未完成。',
          rendered: ''
        },
        {
          id: 'footnote',
          title: '脚注',
          category: '扩展语法',
          description: '添加文档脚注',
          example: '这是一个脚注引用[^1]。\n\n[^1]: 这是脚注的内容。',
          usage: '使用 [^label] 添加引用，底部添加对应内容。',
          rendered: ''
        },
        {
          id: 'highlight',
          title: '高亮',
          category: '扩展语法',
          description: '高亮显示文本',
          example: '==高亮文本==',
          usage: '使用 == 包围文本创建高亮效果。',
          rendered: ''
        },
        {
          id: 'definition-list',
          title: '定义列表',
          category: '扩展语法',
          description: '创建定义列表',
          example: '术语 1\n: 定义 1\n\n术语 2\n: 定义 2',
          usage: '术语后空行，定义前加冒号。',
          rendered: ''
        },

        // 高级语法
        {
          id: 'math',
          title: '数学公式',
          category: '高级语法',
          description: '添加数学公式',
          example: '行内公式: $E = mc^2$\n\n块级公式:\n$$\n\\sum_{i=1}^n a_i = 0\n$$',
          usage: '使用 $ 包围行内公式，$$ 包围块级公式。',
          rendered: ''
        },
        {
          id: 'mermaid',
          title: 'Mermaid图表',
          category: '高级语法',
          description: '创建流程图和图表',
          example: '```mermaid\ngraph TD\n    A[开始] --> B{判断}\n    B -->|是| C[执行]\n    B -->|否| D[结束]\n```',
          usage: '使用 ```mermaid 包围Mermaid代码创建图表。',
          rendered: ''
        },
        {
          id: 'frontmatter',
          title: 'Frontmatter',
          category: '高级语法',
          description: '文档元数据',
          example: '---\ntitle: 文档标题\ndescription: 文档描述\ndate: 2024-01-01\n---\n\n# 文档内容',
          usage: 'YAML格式的元数据，放在文档开头。',
          rendered: ''
        }
      ]
    }
  },
  computed: {
    filteredSyntaxes() {
      return this.syntaxes.filter(syntax => {
        const matchesSearch = !this.searchQuery ||
          syntax.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          syntax.description.toLowerCase().includes(this.searchQuery.toLowerCase())

        const matchesCategory = !this.selectedCategory || syntax.category === this.selectedCategory

        return matchesSearch && matchesCategory
      })
    }
  },
  mounted() {
    // 预渲染所有语法示例
    this.syntaxes.forEach(syntax => {
      syntax.rendered = markdownToHtml(syntax.example)
    })
  },
  methods: {
    selectSyntax(syntax) {
      this.selectedSyntax = syntax
      // 滚动到预览区域
      this.$nextTick(() => {
        const previewElement = this.$el.querySelector('.card:last-child')
        if (previewElement) {
          previewElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    },
    closePreview() {
      this.selectedSyntax = null
    },
    resetFilters() {
      this.searchQuery = ''
      this.selectedCategory = ''
    },
    async copySyntax(text) {
      const success = await copyToClipboard(text)
      if (success) {
        // 简单的成功提示
        console.log('已复制到剪贴板')
      }
    }
  }
}
</script>