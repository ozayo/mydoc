import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My DevNotes",
      locales: {
        root: {
          label: "Turkce",
          lang: "tr-TR",
        },
      },
      social: {
        github: "https://github.com/withastro/starlight",
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
              items: [{ label: "VsCode Nedir", link: "/tools/vscode/01/" }],
            },
            // terminal
            {
              label: "Terminal",
              collapsed: true,
              items: [
                { label: "What is the terminal?", link: "/tools/terminal/01/" },
                { label: "Terminal commands", link: "/tools/terminal/02/" },
                {
                  label: "Terminal commands list",
                  link: "/tools/terminal/03/",
                },
              ],
            },
            //Git
            {
              label: "Git",
              collapsed: true,
              items: [{ label: "What is Git", link: "/tools/git/01/" }],
            },
            //Git hub
            {
              label: "GitHub",
              collapsed: true,
              items: [{ label: "What is GitHub", link: "/tools/github/01/" }],
            },
            {
              label: "NPM",
              collapsed: true,
              items: [
                { label: "NPM", link: "/tools/npm/01/" },
                { label: "Npm Npx Farki", link: "/tools/npm/02/" },
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
          ],
        },
        {
          label: "JavaScript",
          autogenerate: { directory: "javascript" },
        },
        {
          label: "CSS",
          autogenerate: { directory: "css" },
        },
        {
          label: "React JS",
          autogenerate: { directory: "react" },
        },
        // {
        //   label: "OzayJS",
        //   autogenerate: { directory: "ozayjavascript" },
        // },
      ],
    }),
  ],
});
