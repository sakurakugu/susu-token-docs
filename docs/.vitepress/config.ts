import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '苏苏的词元 文档站',
  description: 'SusuToken 使用文档',
  base: '/',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quickstart' },
      { text: '常见问题', link: '/faq' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/quickstart' },
          { text: '常见问题', link: '/faq' }
        ]
      },
      {
        text: '客户端接入',
        items: [
          { text: 'Claude Code', link: '/clients/claude-code' },
          { text: 'Codex', link: '/clients/codex' }
        ]
      }
    ],

    search: {
      provider: 'local'
    }
  }
})
