import { defineConfig } from 'vitepress'

const base = process.env.SITE_BASE || '/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Kisaki',
  description: '你的桌面，多一个会聊天的伙伴。Kisaki AI 桌宠官网与使用文档。',
  base,
  cleanUrls: false,
  lastUpdated: true,
  markdown: { codeCopyButtonTitle: '复制代码' },
  head: [
    ['link', { rel: 'icon', href: `${base}assets/favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#faf8fd' }],
    ['meta', { property: 'og:title', content: 'Kisaki — AI 桌面伙伴' }],
    ['meta', { property: 'og:description', content: 'AI 对话、语音回应、个性角色。让陪伴发生在你的桌面。' }]
  ],
  themeConfig: {
    logo: { src: '/assets/images/kisaki_logo_alpha.png', alt: 'Kisaki 首页' },
    siteTitle: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '特性', link: '/#features' },
      { text: '角色', link: '/#characters' },
      { text: '使用文档', link: '/guide/getting-started', activeMatch: '/(guide|development)/' },
      { text: '下载', link: '/#download' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/AoralsFout/Kisaki' }],
    sidebar: {
      '/guide/': [
        { text: '开始使用', items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '配置 AI 服务', link: '/guide/ai' },
          { text: '对话与桌面操作', link: '/guide/conversation' }
        ] },
        { text: '让伙伴更有个性', items: [
          { text: '角色导入与管理', link: '/guide/characters' },
          { text: '制作角色包', link: '/guide/character-pack' },
          { text: 'Live2D 角色', link: '/guide/live2d' },
          { text: '语音与语言', link: '/guide/voice' }
        ] },
        { text: '更多帮助', items: [
          { text: '工具与权限', link: '/guide/tools' },
          { text: '数据与隐私', link: '/guide/privacy' },
          { text: '常见问题', link: '/guide/faq' },
          { text: '从源码运行应用', link: '/development/app' },
          { text: '官网开发与部署', link: '/development/website' }
        ] }
      ],
      '/development/': [
        { text: '开发指南', items: [
          { text: '从源码运行应用', link: '/development/app' },
          { text: '官网开发与部署', link: '/development/website' },
          { text: '返回使用文档', link: '/guide/getting-started' }
        ] }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: { root: { translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: { displayDetails: '显示详情', resetButtonTitle: '清空搜索', backButtonTitle: '关闭搜索', noResultsText: '没有找到相关内容', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } }
        } } }
      }
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'medium' } },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '文档导航',
    returnToTopLabel: '返回顶部',
    skipToContentLabel: '跳转到正文',
    footer: { message: '由 Vue 3 与 VitePress 构建 · 开源桌面伙伴', copyright: '© 2026 Kisaki · AoralsFout · MIT' }
  }
})
