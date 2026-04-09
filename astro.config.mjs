import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';

export default defineConfig({
  site: 'https://heyalxdavid.github.io',
  base: '/Figma-Console-MCP-Guide',
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
      title: 'Figma Console MCP Guide',
      description:
        'A getting-started guide for designers working with AI tools, Figma MCPs, and code assistants like Cursor and Claude.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/heyalxdavid/Figma-Console-MCP-Guide',
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
          label: 'Development Setup',
          items: [
            { slug: 'prerequisites/homebrew' },
            { slug: 'prerequisites/nodejs' },
            { slug: 'prerequisites/github-enterprise' },
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
          badge: { text: 'WIP', variant: 'caution' },
          autogenerate: { directory: 'skills' },
        },
        {
          label: 'Resources',
          items: [
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
