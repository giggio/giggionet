---
{{- $title := (replace .File.ContentBaseName "-" " " | title) -}}
{{ if strings.Contains $title ":" }}
title: "{{ $title }}"
{{- else }}
title: {{ $title }}
{{- end }}
date: {{ .Date }}
comment_term: {{ .File.BaseFileName | anchorize }}
author: Giovanni Bassi
feature_image: images/add_post_feature_image_here.jpg
feature_image_alt: Placeholder alt text
categories:
  - uncategorized
tags:
  - untagged
draft: true
---

<!--more-->
