<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <span class="text-xl font-bold text-gray-900">Markdown 工具集</span>
        </router-link>

        <!-- 导航菜单 -->
        <nav class="hidden md:flex items-center space-x-6">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            :class="{ 'text-primary-600 bg-primary-50': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            :class="{ 'text-primary-600 bg-primary-50': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMobileMenuOpen: false,
      navItems: [
        { name: '首页', path: '/' },
        { name: '编辑器', path: '/editor' },
        { name: '查看器', path: '/viewer' },
        { name: '转HTML', path: '/to-html' },
        { name: '转PDF', path: '/to-pdf' },
        { name: 'HTML转MD', path: '/html-to-md' },
        { name: '速查表', path: '/cheatsheet' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>