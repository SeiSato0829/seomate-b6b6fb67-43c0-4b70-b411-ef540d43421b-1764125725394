import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rollback-test.example.com',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('Rollback Test Site'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('rollback-test.example.com'),
      'import.meta.env.THEME': JSON.stringify('minimal')
    }
  }
});
