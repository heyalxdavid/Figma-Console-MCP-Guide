# Design System Documentation Site Research

## Requirements

- Must support **live/interactive component demos** (not just screenshots or iframes)
- Nice, modern design aesthetic out of the box
- Suitable for documenting a design system with components, tokens, and guidelines

## Existing Sites Analyzed

| Site | Approach | Tool/Stack |
|---|---|---|
| [shadcn/ui](https://ui.shadcn.com) | Custom | Next.js + MDX + Vercel |
| [daisyUI](https://daisyui.com) | Custom | SvelteKit |
| [Figma Console MCP](https://docs.figma-console-mcp.southleft.com) | Hosted tool | [Mintlify](https://mintlify.com) |
| [Skyscanner Backpack](https://www.skyscanner.design) | Hosted tool | [Supernova](https://supernova.io) |
| [Mews Design System](https://www.mews.design) | Hosted tool | [Supernova](https://supernova.io) |

### Key Takeaways

- Open-source UI libraries (shadcn, daisyUI) build custom docs sites for full control over live component previews.
- Enterprise design systems (Backpack, Mews) use hosted platforms like Supernova that integrate with Figma but lack true live component rendering.
- API/developer docs (Figma Console MCP) use tools like Mintlify for speed, but these don't support live components either.

## Options Evaluated

### Docs Frameworks with Native Live Components

#### Fumadocs

- **Stack:** Next.js + MDX
- **Aesthetic:** Very polished, modern. One of the best-looking out of the box.
- **Live components:** Full MDX support, any React component renders inline.
- **Standout:** Built-in search (Orama), OpenAPI docs, TypeScript twoslash, code highlighting.
- **Site:** [fumadocs.vercel.app](https://fumadocs.vercel.app)

#### Nextra

- **Stack:** Next.js + MDX
- **Aesthetic:** Clean, Vercel-inspired.
- **Live components:** Full React component embedding via MDX.
- **Standout:** Simple config, great sidebar/search defaults. Used by Turbopack and SWR docs.
- **Site:** [nextra.site](https://nextra.site)

#### VitePress

- **Stack:** Vite + Vue
- **Aesthetic:** Clean, minimal. Vue ecosystem standard.
- **Live components:** Vue components render directly in Markdown.
- **Standout:** Extremely fast. Best fit for Vue-based design systems.
- **Site:** [vitepress.dev](https://vitepress.dev)

#### Astro Starlight

- **Stack:** Astro (supports React, Vue, Svelte, Solid via islands)
- **Aesthetic:** Professional, good defaults.
- **Live components:** Astro islands let you embed interactive components from any framework.
- **Standout:** Framework-agnostic. You can mix React and Vue components on the same page.
- **Site:** [starlight.astro.build](https://starlight.astro.build)

### Component Workshop Tools

#### Storybook

- **Stack:** Framework-agnostic (React, Vue, Svelte, Angular, Web Components)
- **Aesthetic:** Improved in v8, but still looks more like a dev tool than a polished docs site.
- **Live components:** Best-in-class. Interactive controls, viewport switching, accessibility audits.
- **Standout:** Industry standard. Can be embedded into other doc sites.
- **Site:** [storybook.js.org](https://storybook.js.org)

#### Histoire

- **Stack:** Vite (Vue, Svelte, Solid)
- **Aesthetic:** Beautiful defaults, feels modern and designed.
- **Live components:** Interactive stories with controls, similar to Storybook but lighter.
- **Standout:** Much nicer aesthetic than Storybook. Great for the Vue/Svelte ecosystem.
- **Site:** [histoire.dev](https://histoire.dev)

### Ruled Out

| Tool | Reason |
|---|---|
| Mintlify | No live component rendering. Great for API docs, not component libraries. |
| Supernova | Figma integration is strong, but components are static. No inline interactivity. |
| zeroheight | Embeds Storybook via iframe rather than rendering components natively. |

## Recommendation

| If you... | Use |
|---|---|
| Want the best aesthetic out of the box | **Fumadocs** |
| Use React and want maximum flexibility | **Fumadocs** or **Nextra** |
| Use Vue | **VitePress** or **Histoire** |
| Need framework-agnostic component rendering | **Astro Starlight** |
| Need deep component testing + docs in one tool | **Storybook** (embed into a docs framework for polish) |
| Want the "shadcn look" with full control | Custom build with Next.js + MDX |

### Top Pick: Fumadocs

For a React-based design system that needs live components and a polished aesthetic, **Fumadocs** is the strongest starting point. It provides the best balance of design quality, developer experience, and built-in features without requiring a fully custom build.

A common production pattern is to pair a docs framework (Fumadocs or Nextra) with **Storybook** running alongside for granular component exploration, embedding Storybook stories into the main docs pages where needed.
