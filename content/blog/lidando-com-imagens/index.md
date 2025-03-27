---
title: Lidando com imagens
date: 2025-02-24T20:02:14-03:00
comment_term: lidando-com-imagens
author: Giovanni Bassi
feature_image: images/add_post_feature_image_here.jpg
feature_image_alt: Placeholder alt text
categories:
  - uncategorized
tags:
  - untagged
---

Esse post mostra algumas imagens e seus shortcodes.

<!--more-->

Imagem:

{{< img src="images/rust-code.png" alt="My rust code" >}}

Lightbox:

lightbox src="images/rust-code.png" title="My rust code in a syntax highlighter"
  alt="ALT My rust code in a syntax highlighter"
{{< lightbox src="images/rust-code.png" title="My rust code in a syntax highlighter"
  alt="ALT My rust code in a syntax highlighter" >}}

lightbox src="images/rust-code.png" title="My rust code in a syntax highlighter 2" thumb_width="300"
{{< lightbox src="images/rust-code.png" title="My rust code in a syntax highlighter 2" thumb_width="300" >}}

lightbox src="images/rust-code.png" alt="My rust code in a syntax highlighter 3" thumb_width="200" width="500"
{{< lightbox src="images/rust-code.png" alt="My rust code in a syntax highlighter 3" thumb_width="200" width="500" >}}

lightbox src="images/rust-code.png" alt="My rust code in a syntax highlighter 4" thumb_width="200" width="300"
{{< lightbox src="images/rust-code.png" alt="My rust code in a syntax highlighter 4" thumb_width="200" width="300" >}}

lightbox src="https://gulfof.mapquest.com/img/map?theme=dark&name=Giggio" title="Gulf of Giggio"
{{< lightbox src="https://gulfof.mapquest.com/img/map?theme=dark&name=Giggio" title="Gulf of Giggio" >}}

lightbox src="https://gulfof.mapquest.com/img/map?theme=dark&name=Giggio" title="Gulf of Giggio" thumb_width="200"
{{< lightbox src="https://gulfof.mapquest.com/img/map?theme=dark&name=Giggio" title="Gulf of Giggio"
thumb_width="200" >}}

lightbox src="https://gulfof.mapquest.com/img/map?theme=dark&name=Giggio" title="Gulf of Giggio"
thumb_width="300" nodownload=true
{{< lightbox src="https://gulfof.mapquest.com/img/map?theme=dark&name=Giggio" title="Gulf of Giggio"
  thumb_width="300" nodownload=true >}}

Gallery:

lightbox src="images/rust-code.png" title="Gallery: 1. my rust code in a syntax highlighter" thumb_width="300"
lightbox src="https://gulfof.mapquest.com/img/map?theme=dark&name=Giggio" title="Gallery: 2. Golf of giggio"
thumb_width="300"
{{< lightbox-gallery >}}
  {{< lightbox src="images/rust-code.png" title="Gallery: 1. my rust code in a syntax highlighter" thumb_width="300" >}}
  {{< lightbox src="https://gulfof.mapquest.com/img/map?theme=dark&name=Giggio" title="Gallery: 2. Golf of giggio"
  thumb_width="300" >}}
{{</ lightbox-gallery >}}
