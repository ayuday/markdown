<template>
  <div class="max-w-6xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center py-16 mb-16">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Markdown <span class="text-primary-600">工具集</span>
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        强大的在线Markdown工具集合，包含编辑器、转换工具、速查表等实用功能。
        让您更高效地处理Markdown文档。
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/editor" class="btn-primary">
          开始使用编辑器
        </router-link>
        <router-link to="/cheatsheet" class="btn-secondary">
          查看速查表
        </router-link>
      </div>
    </section>

    <!-- 工具网格 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">工具列表</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Markdown 编辑器 -->
        <div class="card group hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Markdown 编辑器</h3>
          </div>
          <p class="text-gray-600 mb-4">
            实时预览编辑器，支持语法高亮和工具栏操作。左右分屏设计，编辑和预览同步显示。
          </p>
          <router-link to="/editor" class="text-primary-600 font-medium hover:text-primary-700 group-hover:translate-x-1 transition-transform inline-block">
            立即使用 →
          </router-link>
        </div>

        <!-- Markdown 查看器 -->
        <div class="card group hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Markdown 查看器</h3>
          </div>
          <p class="text-gray-600 mb-4">
            专业的只读预览工具，支持URL加载和文件上传。美观的样式展示，让文档阅读更舒适。
          </p>
          <router-link to="/viewer" class="text-primary-600 font-medium hover:text-primary-700 group-hover:translate-x-1 transition-transform inline-block">
            立即使用 →
          </router-link>
        </div>

        <!-- 转 HTML -->
        <div class="card group hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Markdown 转 HTML</h3>
          </div>
          <p class="text-gray-600 mb-4">
            将Markdown文本转换为HTML代码，支持实时转换和文件下载。保持格式完整性。
          </p>
          <router-link to="/to-html" class="text-primary-600 font-medium hover:text-primary-700 group-hover:translate-x-1 transition-transform inline-block">
            立即使用 →
          </router-link>
        </div>

        <!-- 转 PDF -->
        <div class="card group hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Markdown 转 PDF</h3>
          </div>
          <p class="text-gray-600 mb-4">
            将Markdown文档导出为PDF文件，保持排版美观，支持自定义样式和布局。
          </p>
          <router-link to="/to-pdf" class="text-primary-600 font-medium hover:text-primary-700 group-hover:translate-x-1 transition-transform inline-block">
            立即使用 →
          </router-link>
        </div>

        <!-- HTML 转 Markdown -->
        <div class="card group hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">HTML 转 Markdown</h3>
          </div>
          <p class="text-gray-600 mb-4">
            将HTML代码转换为Markdown格式，支持复杂的HTML结构和样式保持。
          </p>
          <router-link to="/html-to-md" class="text-primary-600 font-medium hover:text-primary-700 group-hover:translate-x-1 transition-transform inline-block">
            立即使用 →
          </router-link>
        </div>

        <!-- 速查表 -->
        <div class="card group hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Markdown 速查表</h3>
          </div>
          <p class="text-gray-600 mb-4">
            交互式语法速查表，点击查看示例和效果。快速掌握Markdown各种语法元素。
          </p>
          <router-link to="/cheatsheet" class="text-primary-600 font-medium hover:text-primary-700 group-hover:translate-x-1 transition-transform inline-block">
            立即使用 →
          </router-link>
        </div>
      </div>
    </section>

    <!-- 特性介绍 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">为什么选择我们？</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">快速高效</h3>
          <p class="text-gray-600">
            基于现代Web技术构建，响应迅速，无需安装软件，在浏览器中即可使用所有功能。
          </p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">功能丰富</h3>
          <p class="text-gray-600">
            提供完整的Markdown工具生态，从编辑到转换，从预览到导出，应有尽有。
          </p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">开源免费</h3>
          <p class="text-gray-600">
            完全开源的项目，采用MIT协议，您可以自由使用、修改和分发，无任何使用限制。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Markdown 工具集 | 强大的在线Markdown工具集合'
  }
}
</script>