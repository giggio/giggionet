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
featureImage: images/blog-placeholder-post-feature.jpg
featureImageAlt: Placeholder alt text
categories:
  - uncategorized
tags:
  - untagged
draft: true
---

<!--more-->
