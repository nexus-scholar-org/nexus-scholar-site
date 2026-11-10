// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The site is served by GitHub Pages at https://nexus-scholar-org.github.io/nexus-scholar-site/
export default defineConfig({
  site: 'https://nexus-scholar-org.github.io',
  base: '/nexus-scholar-site',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Nexus Scholar',
      description: 'A local-first tool for systematic literature reviews. Beta.',
      favicon: '/favicon.svg',
      customCss: [
        '@fontsource-variable/literata/opsz.css',
        '@fontsource-variable/public-sans',
        '@fontsource/ibm-plex-mono/400.css',
        '@fontsource/ibm-plex-mono/500.css',
        './src/styles/docs.css',
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/nexus-scholar-org/nexus-scholar-harness' },
      ],
      editLink: { baseUrl: 'https://github.com/nexus-scholar-org/nexus-scholar-site/edit/main/' },
      lastUpdated: false,
      pagination: true,
      credits: false,
      components: { Search: './src/components/Search.astro' },
      head: [
        {
          // Expressive Code marks a scrollable code block as a region at runtime; give each one a name so the landmarks are unique.
          tag: 'script',
          content: "(()=>{const name=(p)=>{if(!p.getAttribute('aria-label'))p.setAttribute('aria-label','Code: '+(p.textContent||'').trim().split('\\n')[0].slice(0,80));};const run=()=>document.querySelectorAll('.expressive-code pre[role=region]').forEach(name);addEventListener('load',run);new MutationObserver(run).observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['role','tabindex']});})();",
        },
      ],
      expressiveCode: { defaultProps: { wrap: true } },
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Getting started', slug: 'docs/getting-started' },
        {
          label: "The researcher's flow",
          items: [
            { label: 'Inception: the protocol', slug: 'docs/flow/inception' },
            { label: 'Discovery: the search', slug: 'docs/flow/discovery' },
            { label: 'Screening', slug: 'docs/flow/screening' },
            { label: 'Export and methods', slug: 'docs/flow/export' },
          ],
        },
        { label: 'Configuration', slug: 'docs/configuration' },
        { label: 'Data flow and privacy', slug: 'docs/data-flow' },
        { label: 'How the AI is used', slug: 'docs/ai' },
        { label: 'Known limits', slug: 'docs/known-limits' },
        {
          label: 'Release notes',
          items: [
            { label: '1.1.0b6', slug: 'docs/releases/1-1-0b6' },
            { label: '1.1.0b5', slug: 'docs/releases/1-1-0b5' },
            { label: '1.1.0b4', slug: 'docs/releases/1-1-0b4' },
            { label: '1.1.0b3', slug: 'docs/releases/1-1-0b3' },
          ],
        },
        { label: 'Contributing', slug: 'docs/contributing' },
        { label: 'Licence and credits', slug: 'docs/legal' },
      ],
    }),
  ],
});
