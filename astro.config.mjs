import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      head: [
        // Umami Analytics for analytics.netnet.nu
        {
          tag: 'script',
          attrs: {
            src: 'https://analytics.netnet.nu/script.js',
            'data-website-id': '08e24c2b-5462-4729-9e23-4dd784e6d22d',
            defer: true,
          },
        },
      ],
      title: "My DevNotes",
      locales: {
        root: {
          label: "Turkce",
          lang: "tr-TR",
        },
      },
      social: {
        github: "https://github.com/ozayo/mydoc",
        twitter: 'https://twitter.com/ozayozdemir',
        linkedin: 'https://www.linkedin.com/in/ozay-ozdemir/',
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Hoşgeldiniz?",
          items: [{ label: "Nedir?", link: "/welcome/01/" }],
        },
        {
          label: "Tools",
          collapsed: false,
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Önemli araçlar", link: "/tools/01/" },
            // a nested group links
            //Vsc
            {
              label: "Visual Studio Code",
              collapsed: true,
              items: [
                { label: "VsCode Nedir", link: "/tools/vscode/01/" },
                { label: "macOS için VS Code kısayolları", link: "/tools/vscode/02/" }
              ],
            },
            // terminal
            {
              label: "Terminal",
              collapsed: true,
              items: [
                { label: "Terminal Nedir?", link: "/tools/terminal/01/" },
                { label: "Terminal Komutları", link: "/tools/terminal/02/" },
              ],
            },
            //Git
            {
              label: "Git",
              collapsed: true,
              items: [
                { label: "Git Nedir", link: "/tools/git/01/" },
                { label: ".gitignore", link: "/tools/git/02/" },
                { label: "Açıklamalı git komutları", link: "/tools/git/03/" },
                { label: "Komut tablosu", link: "/tools/git/04/" },
                { label: "Git Rebase", link: "/tools/git/05/" },
              ],
            },
            //Git hub
            {
              label: "GitHub",
              collapsed: true,
              items: [{ label: "GitHub nedir?", link: "/tools/github/01/" }],
            },
            {
              label: "NPM",
              collapsed: true,
              items: [
                { label: "NPM", link: "/tools/npm/01/" },
                { label: "Npm Npx Farki", link: "/tools/npm/02/" },
                { label: "Npm komutları", link: "/tools/npm/03/" },
              ],
            },
            {
              label: "Markdown",
              collapsed: true,
              items: [{ label: "Markdown", link: "/tools/markdown/01/" }],
            },
            {
              label: "Vite",
              collapsed: true,
              items: [{ label: "Vite", link: "/tools/vite/01/" }],
            },
            {
              label: "Docker",
              collapsed: true,
              items: [{ label: "Docker nedir?", link: "/tools/docker/01/" }],
            },
          ],
        },
        {
          label: "Kavramlar",
          autogenerate: { directory: "sozluk" },
          badge: { text: 'Devam ediyor', variant: 'caution' },
        },
        {
          label: "JavaScript",
          autogenerate: { directory: "javascript" },
          badge: { text: 'Devam ediyor', variant: 'caution' },
        },
        {
          label: "TypeScript",
          autogenerate: { directory: "typescript" },
        },
        {
          label: "CSS",
          autogenerate: { directory: "css" },
          badge: { text: 'Devam ediyor', variant: 'caution' },
        },
        {
          label: "React JS",
          autogenerate: { directory: "react" },
          badge: { text: 'Devam ediyor', variant: 'caution' },
        },
        {
          label: "Next JS",
          autogenerate: { directory: "nextjs" },
          badge: { text: 'Devam ediyor', variant: 'caution' },
        },
        {
          label: "ReactNative",
          autogenerate: { directory: "reactnative" },
          badge: { text: 'Devam ediyor', variant: 'caution' },
        },
        {
          label: "Databases",
          collapsed: false,
          items: [
            // a nested group links
            //postgres
            {
              label: "PostgreSQL",
              collapsed: true,
              autogenerate: { directory: "postgres" },
            },
            // mysql
            // {
            //   label: "MySQL",
            //   collapsed: true,
            //   autogenerate: { directory: "mysql" },
            // },
          ],
        },
        // {
        //   label: "OzayJS",
        //   autogenerate: { directory: "ozayjavascript" },
        // },
      ],
    }),
  ],
});
