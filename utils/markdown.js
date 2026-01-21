import { marked } from 'marked'
import TurndownService from 'turndown'

// 配置marked选项
marked.setOptions({
  breaks: true, // 将换行符转换为<br>
  gfm: true, // 启用GitHub风格Markdown
  headerIds: true, // 为标题添加ID
  mangle: false, // 不修改标题ID
})

// 创建Turndown服务实例
const turndownService = new TurndownService({
  headingStyle: 'atx', // 使用ATX风格的标题 (#)
  codeBlockStyle: 'fenced', // 使用围栏代码块
  bulletListMarker: '-', // 使用短横线作为列表标记
})

// 配置Turndown规则
turndownService.addRule('strikethrough', {
  filter: ['del', 's', 'strike'],
  replacement: function (content) {
    return '~~' + content + '~~'
  }
})

// 添加表格支持
turndownService.addRule('table', {
  filter: 'table',
  replacement: function (content, node) {
    const table = node
    const rows = Array.from(table.querySelectorAll('tr'))

    if (rows.length === 0) return ''

    // 获取所有行
    const headers = Array.from(rows[0].querySelectorAll('th, td')).map(cell => cell.textContent.trim())
    const bodyRows = rows.slice(1).map(row =>
      Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim())
    )

    // 创建Markdown表格
    let markdown = ''

    // 表头
    markdown += '| ' + headers.join(' | ') + ' |\n'
    markdown += '| ' + headers.map(() => '---').join(' | ') + ' |\n'

    // 表体
    bodyRows.forEach(row => {
      markdown += '| ' + row.join(' | ') + ' |\n'
    })

    return markdown
  }
})

/**
 * 将Markdown转换为HTML
 * @param {string} markdown - Markdown文本
 * @returns {string} HTML字符串
 */
export function markdownToHtml(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return ''
  }

  try {
    return marked.parse(markdown)
  } catch (error) {
    console.error('Markdown解析错误:', error)
    return '<p>Markdown解析失败</p>'
  }
}

/**
 * 将HTML转换为Markdown
 * @param {string} html - HTML字符串
 * @returns {string} Markdown文本
 */
export function htmlToMarkdown(html) {
  if (!html || typeof html !== 'string') {
    return ''
  }

  try {
    return turndownService.turndown(html)
  } catch (error) {
    console.error('HTML转Markdown错误:', error)
    return '转换失败'
  }
}

/**
 * 下载文本文件
 * @param {string} content - 文件内容
 * @param {string} filename - 文件名
 * @param {string} mimeType - MIME类型
 */
export function downloadFile(content, filename, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()

  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/**
 * 下载HTML文件
 * @param {string} htmlContent - HTML内容
 * @param {string} filename - 文件名（不含扩展名）
 */
export function downloadHtmlFile(htmlContent, filename = 'document') {
  const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${filename}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        pre {
            background-color: #f6f8fa;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
        }
        code {
            background-color: #f6f8fa;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 0.9em;
        }
        blockquote {
            border-left: 4px solid #ddd;
            padding-left: 16px;
            margin: 16px 0;
            color: #666;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 16px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px 12px;
            text-align: left;
        }
        th {
            background-color: #f6f8fa;
            font-weight: 600;
        }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>`

  downloadFile(fullHtml, `${filename}.html`, 'text/html')
}

/**
 * 将HTML转换为PDF并下载
 * @param {string} htmlContent - HTML内容
 * @param {string} filename - 文件名（不含扩展名）
 */
export async function htmlToPdf(htmlContent, filename = 'document') {
  // 这里需要动态导入html2pdf.js
  const html2pdf = (await import('html2pdf.js')).default

  const element = document.createElement('div')
  element.innerHTML = htmlContent
  element.style.padding = '20px'
  element.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

  // 隐藏元素添加到DOM中
  element.style.position = 'absolute'
  element.style.left = '-9999px'
  document.body.appendChild(element)

  const options = {
    margin: 10,
    filename: `${filename}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }

  try {
    await html2pdf().set(options).from(element).save()
  } catch (error) {
    console.error('PDF生成错误:', error)
    throw error
  } finally {
    document.body.removeChild(element)
  }
}

/**
 * 从URL加载Markdown内容
 * @param {string} url - Markdown文件URL
 * @returns {Promise<string>} Markdown内容
 */
export async function loadMarkdownFromUrl(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.text()
  } catch (error) {
    console.error('加载Markdown失败:', error)
    throw error
  }
}

/**
 * 读取文件内容
 * @param {File} file - 文件对象
 * @returns {Promise<string>} 文件内容
 */
export function readFileContent(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.onerror = (e) => reject(e)
    reader.readAsText(file)
  })
}

/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<boolean>} 是否成功
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('复制失败:', error)
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      return true
    } catch (fallbackError) {
      console.error('降级复制也失败:', fallbackError)
      return false
    } finally {
      document.body.removeChild(textArea)
    }
  }
}