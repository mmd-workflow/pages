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
      { text: 'About', link: '/content/about.md' },
      { text: 'Plugins', link: '/content/ffplugin/test.md' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About', link: '/content/about.md' }
        ]
      },
      {
        text: 'USD File Format Plugin',
        items: [
          {text: 'test', link: '/content/ffplugin/test.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mmd-workflow' }
    ]
  }
})