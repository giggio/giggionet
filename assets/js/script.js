// @ts-nocheck
$(function () {
  "use strict";
  var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList
  myDefaultWhiteList.td = ['data-option']
  var myCustomRegex = /^data-[\w-]+/
  myDefaultWhiteList.a.push(myCustomRegex)
  $('[data-toggle="popover"]').popover();
  $('#shareModal').on('show.bs.modal', function (event) {
    const related = $(event.relatedTarget);
    const title = related.data('title');
    const summary = related.data('summary');
    const url = related.data('url');
    const textBody = `${title}\n${summary}\n${url}\n`;
    const modal = $(this);
    const shareBluesky = modal.find('.share-button-bluesky');
    shareBluesky.attr('href', shareBluesky.attr('href')
      ?.replace('#text#', encodeURIComponent(`${title} de @giggio.net\n${url}`)));
    const shareFacebook = modal.find('.share-button-facebook');
    shareFacebook.attr('href', shareFacebook.attr('href')
      ?.replace('#title#', encodeURIComponent(title))
      .replace('#url#', encodeURIComponent(url)));
    const shareTwitter = modal.find('.share-button-twitter');
    shareTwitter.attr('href', shareTwitter.attr('href')
      ?.replace('#text#', encodeURIComponent(`${title} de @giovannibassi`))
      .replace('#url#', encodeURIComponent(url)));
    const shareLinkedin = modal.find('.share-button-linkedin');
    shareLinkedin.attr('href', shareLinkedin.attr('href')
      ?.replace('#url#', encodeURIComponent(url)));
    const shareWhatsapp = modal.find('.share-button-whatsapp');
    shareWhatsapp.attr('href', shareWhatsapp.attr('href')
      ?.replace('#textBody#', encodeURIComponent(textBody)));
    const shareMail = modal.find('.share-button-mail');
    shareMail.attr('href', shareMail.attr('href')
      ?.replace('#title#', encodeURIComponent(title))
      .replace('#textBody#', encodeURIComponent(textBody)));
  })
});

// menu bar animation
$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll && windscroll >= 100) {
    $('.site-navigation').addClass('nav-bg');
  } else {
    $('.site-navigation').removeClass('nav-bg');
  }
});
