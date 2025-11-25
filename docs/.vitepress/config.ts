import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
    ignoreDeadLinks: true, // 禁用死链检查

  outDir: '../dist',
  // base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',
  base: 'https://minecraftearthvillage.github.io/lezi',
  lang: 'zh-CN',
  title: '乐子档案',
  description: '不太聪明的地球村乐子记录之路，收录了大量沙雕玩家有趣的发言记录，包括但不限于作死、花式整活、骂街、迷惑言论等名场面，因其内容有趣而进行收录，切勿模仿其中的任何恶意行为',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/MinecraftEarthVillage/lezi' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present maomao',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'maomao1996.vitepress-nav-template',
    },

    comment: {
      repo: 'MinecraftEarthVillage/lezi',
      repoId: 'R_kgDONdxk_w',
      category: 'Announcements',
      categoryId: 'DIC_kwDONdxk_84CmNH4',
    },
  }
})