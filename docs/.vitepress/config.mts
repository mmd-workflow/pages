import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/pages/',
  title: 'MMD Workflow',
  description: 'MMD Workflow Tools',
  head:[
    // OpenGraph Meta Tags
    ['meta', { property: 'og:title', content: 'MMD Workflow' }],
    ['meta', { property: 'og:description', content: 'MMD Workflow Tools' }],
    ['meta', { property: 'og:url', content: 'https://mmd-workflow.github.io/pages/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://mmd-workflow.github.io/pages/logo_og.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    // Twitter Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'MMD Workflow' }],
    ['meta', { name: 'twitter:description', content: 'MMD Workflow Tools' }],
    ['meta', { name: 'twitter:image', content: 'https://mmd-workflow.github.io/pages/logo_og.png' }],
  ],
  appearance: {
    initialValue: 'undefined'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/content/intro/about.md' },
      { text: 'Plugins', link: '/content/ffplugin/about.md' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About', link: '/content/intro/about.md' }
        ]
      },
      {
        text: 'USD File Format Plugin',
        items: [
          {text: 'Overview', link: '/content/ffplugin/about.md'},
          {text: 'Quick Start', link: '/content/ffplugin/quickstart.md'},
          {text: 'How to Build', link: '/content/ffplugin/build.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mmd-workflow' }
    ]
  }
})