<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 头部导航 -->
    <AppHeader />

    <!-- 主要内容 -->
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>

    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>