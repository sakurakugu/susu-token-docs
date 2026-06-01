import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'SusuToken Docs',
  description: 'SusuToken 使用文档',
  base: '/',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quickstart' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/quickstart' },
          { text: 'FAQ', link: '/faq' }
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sakurakugu/susu-token-docs' }
    ]
  }
})
