import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "MMD Workflow",
  description: "MMD Workflow Tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/content/about.md' }
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'About', link: '/content/about.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mmd-workflow' }
    ]
  }
})