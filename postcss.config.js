const autoprefixer = require('autoprefixer');
const purgeCSSPlugin = require('@fullhuman/postcss-purgecss').default;

const purgecss = purgeCSSPlugin({
  content: ['./hugo_stats.json'],
  defaultExtractor: content => {
    const els = JSON.parse(content).htmlElements;
    return [
      ...(els.tags || []),
      ...(els.classes || []),
      ...(els.ids || []),
    ];
  },
  // https://purgecss.com/safelisting.html
  safelist: {
    standard: [
      'nav-bg',
      'badge-secondary',
      'missing-alt',
      'entry-hint',
      'site-blog-post-share-modal-link',
      'fa-solid',
      'fa-share-from-square',
      'popover',
      'fade',
      'bs-popover-right',
      'show',
      'arrow',
      /popover-.*/,
      'modal',
      /modal-.*/,
      'sharebuttons',
      /sharebuttons-.*/,
      /share-button-.*/,
    ],
    deep: [
      /lightbox.*/,
      /lb-.*/,
    ]
  }
});

module.exports = {
  plugins: [
    process.env.HUGO_ENVIRONMENT !== 'development' ? purgecss : null,
    autoprefixer,
  ]
};
