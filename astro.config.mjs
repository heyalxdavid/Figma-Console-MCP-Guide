import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';

export default defineConfig({
  site: 'https://github.intuit.com',
  base: '/pages/ajohnson39/alexs-ai-tips',
  integrations: [
    starlight({
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: 'Docs',
              link: '/getting-started/cursor-setup',
            },
          ],
        }),
      ],
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
          label: 'AI Tools',
          items: [
            { slug: 'getting-started/cursor-setup' },
            { slug: 'getting-started/claude-setup' },
          ],
        },
        {
          label: 'Prerequisites',
          items: [
            { slug: 'prerequisites/homebrew' },
            { slug: 'prerequisites/nodejs' },
          ],
        },
        {
          label: 'Figma MCPs',
          items: [
            { slug: 'getting-started/figma-mcp' },
            { slug: 'getting-started/figma-console-mcp' },
          ],
        },
        {
          label: 'Skills',
          autogenerate: { directory: 'skills' },
        },
        {
          label: 'Resources',
          items: [
            { slug: 'getting-started/github-enterprise' },
            { slug: 'getting-started/intuit-resources' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
