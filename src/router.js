import { createRouter, createWebHistory } from 'vue-router'

// 工具组件
const MarkdownEditor = () => import('./components/MarkdownEditor.vue')
const MarkdownViewer = () => import('./components/MarkdownViewer.vue')
const MarkdownToHtml = () => import('./components/MarkdownToHtml.vue')
const MarkdownToPdf = () => import('./components/MarkdownToPdf.vue')
const HtmlToMarkdown = () => import('./components/HtmlToMarkdown.vue')
const MarkdownCheatsheet = () => import('./components/MarkdownCheatsheet.vue')

// 主页组件
const Home = () => import('./views/Home.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Markdown 工具集 | Markdown Tools' }
  },
  {
    path: '/editor',
    name: 'Editor',
    component: MarkdownEditor,
    meta: { title: 'Markdown 编辑器 | Markdown Editor' }
  },
  {
    path: '/viewer',
    name: 'Viewer',
    component: MarkdownViewer,
    meta: { title: 'Markdown 查看器 | Markdown Viewer' }
  },
  {
    path: '/to-html',
    name: 'ToHtml',
    component: MarkdownToHtml,
    meta: { title: 'Markdown 转 HTML | Markdown to HTML' }
  },
  {
    path: '/to-pdf',
    name: 'ToPdf',
    component: MarkdownToPdf,
    meta: { title: 'Markdown 转 PDF | Markdown to PDF' }
  },
  {
    path: '/html-to-md',
    name: 'HtmlToMd',
    component: HtmlToMarkdown,
    meta: { title: 'HTML 转 Markdown | HTML to Markdown' }
  },
  {
    path: '/cheatsheet',
    name: 'Cheatsheet',
    component: MarkdownCheatsheet,
    meta: { title: 'Markdown 速查表 | Markdown Cheatsheet' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫：设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router