import { Popover, Tooltip, initFontawesome } from './vendor.mjs';
document.addEventListener("DOMContentLoaded", function () {
  initFontawesome();
  const myDefaultAllowList = Tooltip.Default.allowList
  myDefaultAllowList['*'].push(/^data-[\w-]+/)

  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.forEach(function (popoverTriggerEl) {
    new Popover(popoverTriggerEl);
  });

  const shareModal = document.getElementById('shareModal');
  if (shareModal) {
    shareModal.addEventListener('show.bs.modal', function (event) {
      // @ts-ignore
      const related = event.relatedTarget;
      const title = related.getAttribute('data-title');
      const summary = related.getAttribute('data-summary');
      const url = related.getAttribute('data-url');
      const textBody = `${title}\n${summary}\n${url}\n`;

      const updateLink = (selector, replacements) => {
        const element = shareModal.querySelector(selector);
        if (!element)
          return;
        let href = element.getAttribute('href');
        for (const [key, value] of Object.entries(replacements))
          href = href.replace(key, encodeURIComponent(value));
        element.setAttribute('href', href);
      };

      updateLink('.share-button-bluesky', { '#text#': `${title} de @giggio.net\n${url}` });
      updateLink('.share-button-facebook', { '#title#': title, '#url#': url });
      updateLink('.share-button-twitter', { '#text#': `${title} de @giovannibassi`, '#url#': url });
      updateLink('.share-button-linkedin', { '#url#': url });
      updateLink('.share-button-whatsapp', { '#textBody#': textBody });
      updateLink('.share-button-mail', { '#title#': title, '#textBody#': textBody });
    });
  }

  window.addEventListener('scroll', function () {
    const windscroll = window.scrollY;
    const siteNavigation = document.querySelector('.site-navigation');
    if (siteNavigation) {
      if (windscroll >= 100) {
        siteNavigation.classList.add('nav-bg');
      } else {
        siteNavigation.classList.remove('nav-bg');
      }
    }
  });
  monitorIconsAdded();
});

function monitorIconsAdded() {
  const callback = (mutationList) => {
    const found = mutationList
      .flatMap(mutation =>
        mutation.type === "childList"
        ? mutation.addedNodes.values().flatMap(n => n.nodeType === 1
            ? [...n.querySelectorAll("i").values().toArray(), ...[n].filter(node => node.matches("i"))]
            : []).toArray()
        : []
      ).map(e => e.parentElement);
    if (found.length)
      initFontawesome(...found);
  };
  new MutationObserver(callback).observe(
    document.getElementsByTagName("body")[0],
    { attributes: false, childList: true, subtree: true }
  );
}
