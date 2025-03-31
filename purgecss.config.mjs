export const content = ['./hugo_stats.json'];
export function defaultExtractor(content) {
  const els = JSON.parse(content).htmlElements;
  return {
    classes: els.classes || [],
    ids: els.ids || [],
    tags: els.tags || [],
  };
}
export const safelist = {
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
    'pswp__custom-caption',
    'h5',
    'h6',
    'site-page-description', // todo: remove when it is first used
    'data-bs-theme',
  ],
  deep: [
    /lightbox.*/,
    /lb-.*/,
    /site-blog-pagination/, // todo: remove when it is first used
  ]
};
