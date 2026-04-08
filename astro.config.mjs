import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';

export default defineConfig({
  site: 'https://github.intuit.com',
  base: '/pages/ajohnson39/alexs-ai-tips',
  integrations: [
    starlight({
      plugins: [starlightThemeBlack({})],
      title: "Alex's AI Tips",
      description:
        'A getting-started guide for designers working with AI tools, MCPs, and Cursor.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ajohnson39',
        },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Getting Started',
          items: [
            { slug: 'getting-started/cursor-setup' },
            { slug: 'getting-started/figma-mcp' },
            { slug: 'getting-started/figma-console-mcp' },
            { slug: 'getting-started/github-enterprise' },
          ],
        },
        {
          label: 'Skills',
          autogenerate: { directory: 'skills' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
