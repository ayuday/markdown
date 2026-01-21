import { defineConfig } from 'unocss'
import { presetUno, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        // 启用所有图标集合
        heroicons: () => import('@iconify-json/heroicons/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        tabler: () => import('@iconify-json/tabler/icons.json').then(i => i.default),
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,500,600,700',
        mono: 'JetBrains Mono:400,500,600',
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
  },
  shortcuts: {
    'btn': 'inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
    'btn-primary': 'btn text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
    'btn-secondary': 'btn text-gray-700 bg-white hover:bg-gray-50 border-gray-300 focus:ring-primary-500',
    'input': 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500',
    'card': 'bg-white rounded-lg shadow-sm border border-gray-200 p-6',
  },
})