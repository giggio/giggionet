import autoprefixer from 'autoprefixer';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
const purgeCSSConfig = await import('./purgecss.config.mjs');

const purgecss = purgeCSSPlugin(purgeCSSConfig);

export default {
  plugins: [
    process.env.HUGO_ENVIRONMENT !== 'development' ? purgecss : null,
    autoprefixer,
  ],
}
