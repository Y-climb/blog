import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Yclimb 的博客",
  description: "个人技术学习笔记",
  // 如果部署到 GitHub Pages 的项目页（username.github.io/仓库名），
  // 需要把 base 改为 '/仓库名/'
  base: '/',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/mysql-basics' }
    ],
    sidebar: [
      {
        text: '数据库',
        items: [
          { text: 'MySQL 基础知识', link: '/posts/mysql-basics' }
        ]
      }
    ],
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    socialLinks: [],
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026 Yclimb'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新于'
    }
  },
  lastUpdated: true
})
