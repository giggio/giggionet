import PhotoSwipeLightbox from "photoswipe";
const lightbox = new PhotoSwipeLightbox({
  gallery: ".lightbox-gallery",
  children: "a.lightbox",
  pswpModule: () => import("photoswipe-pswpModule"),
});
lightbox.on("uiRegister", function () {
  lightbox.pswp.ui.registerElement({
    name: "custom-caption",
    order: 9,
    isButton: false,
    appendTo: "root",
    html: "",
    onInit: (el) => {
      lightbox.pswp.on("change", () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        if (currSlideElement) {
          const captionHTML = currSlideElement.dataset.title;
          if (captionHTML && captionHTML.length > 0)
            el.innerHTML = captionHTML;
        }
      });
    },
  });
});
lightbox.init();
