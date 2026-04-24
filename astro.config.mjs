// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

import compress from 'astro-compress';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://devksingh.com',
  output: 'static',
  outDir: './build',
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  server: {
    port: 4321,
  },
  integrations: [
    mdx(),
    icon(),
    compress(),
    sitemap({
      filter: (page) => !page.startsWith('https://devksingh.com/admin/'),
    }),
  ],
  experimental: {
    svgo: true,
  },
});
