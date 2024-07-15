---
{{- $title := (replace .File.ContentBaseName "-" " " | title) -}}
{{ if strings.Contains $title ":" }}
title: "{{ $title }}"
{{- else }}
title: {{ $title }}
{{- end }}
date: {{ .Date }}
description: TBD
link: https://...
participation_kinds:
  - uncategorized
draft: true
---
