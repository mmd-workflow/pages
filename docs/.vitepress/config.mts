import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/pages/",
  title: "MMD Workflow",
  description: "MMD Workflow Tools",
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