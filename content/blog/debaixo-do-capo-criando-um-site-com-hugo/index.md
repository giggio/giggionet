---
title: "Debaixo do capô: criando um site com Hugo"
date: 2025-03-24T15:00:00-03:00
comment_term: debaixo-do-capo-criando-um-site-com-hugo
author: Giovanni Bassi
featureImage: images/hugo-logo.svg
featureImageAlt: Logo do Hugo
feature_image_list_top_offset: "30%"
categories:
  - web
tags:
  - hugo
  - github
  - static
summary: |
  Abandonei a minha plataforma de publicação preferida e abracei o gerador de site estático Hugo.
  Neste post, conto o porquê.
---

### Avaliando as opções

Quando decidi criar um novo site, a primeira opção que me veio à mente foi o WordPress. Uso-o há muitos anos e gosto
dele. Como também conheço bem infraestrutura, subir um serviço na nuvem e rodá-lo é muito simples. É tentador.

Mas há desafios de desempenho. Enquanto mantive o site da Lambda3, enfrentamos diversos problemas. Inicialmente,
resolvemos com plugins de cache, mas com o tempo nem isso foi suficiente, e passamos a usar o cache da Cloudflare, que
de fato solucionou o problema definitivamente.

Era um pouco demais: PHP + MariaDB + Cloudflare, tudo isso para servir um site estático. E ainda precisava de plugins
para escrever em Markdown, que era o que eu queria desde o início. Não haveria uma solução melhor?

Meu principal argumento a favor do WordPress é seu ecossistema de plugins, que é imbatível. Mas, para um site estático,
isso parecia excessivo. Eu queria apenas um site com um blog e algumas seções. Precisava mesmo de tudo isso?

Abrir mão do WordPress significava ter que entregar tudo que ele e seus plugins fazem. Meus requisitos mínimos incluíam
páginas estáticas, blog e RSS. Ao longo da construção, surgiram outras necessidades: categorização e taggeamento dos
posts, bloqueio de robôs de IA gerativa, otimização de imagens, entre outros. Sem contar as necessidades comuns de
frontend, como a compilação de estilos feitos em Sass.

### Escolhendo Hugo

Decidido a usar um gerador de site estático, fui avaliar opções. Eu queria uma software rápido, em constante
desenvolvimento, maduro e livre. Precisava que atendesse minhas necessidades e oferecesse flexibilidade para o futuro. O
[Hugo](https://gohugo.io/) venceu, mas outras boas opções foram o [Astro](https://astro.build/), o
[Jekyll](https://jekyllrb.com/) e o [Zola](https://www.getzola.org/). Avaliei outras, mas essas foram as que mais
considerei. Faz tempo que tomei a decisão pelo Hugo, iniciei o projeto meses atrás, e ele ficou engavetado por um tempo.

O Hugo atendeu a tudo que eu precisava. Com quase [80 mil estrelas no GitHub](https://github.com/gohugoio/hugo), é uma
ferramenta em constante atualização, com quase 9 mil commits. Feito em Golang, tem boa documentação e um fórum ativo
para dúvidas.

Além disso, conta com [centenas de temas](https://themes.gohugo.io/) distribuídos pela internet. Como não sou designer,
isso foi essencial. Escolhi o tema [Roxo](https://github.com/StaticMania/roxo-hugo), que acabei customizando
completamente. A única coisa que ainda me dará trabalho é atualizar o Bootstrap 4 para a versão 5, algo que não é tão
trivial.

### O que é bom no Hugo

#### Experiência de desenvolvimento

A experiência de desenvolvimento com o Hugo é excelente. O servidor embutido, acionado com `hugo server`, roda o site e
faz hot reload sempre que um arquivo é alterado. Mudanças no CSS sequer recarregam a página, são aplicadas
dinamicamente. Na minha máquina, um post em Markdown leva 22ms para ser processado, e o site inteiro meio segundo. No
GitHub Actions, o build leva 2,5s, então YMMV. O desenvolvimento de templates é igualmente rápido, é salvar e já ver o
resultado imediatamente, sem espera. A experiência é a mesma de desenvolver um site dinâmico com server side rendering,
e com feedback imediato, algo melhor do que trabalhar com SPA em Angular ou React.

#### Flexibilidade

Com o Hugo, você tem controle total sobre o HTML, CSS e JavaScript. Não depende de quem escreveu um plugin adaptá-lo
para que o resultado fique como você gostaria.  Até existem de plugins para Hugo (chamados de módulos), mas o mais comum
é encontrar snippets de código para customizar conforme a necessidade. Como ele é muito extensível, isso é suficiente.
Gostei muito dessa abordagem, que dá uma liberdade enorme.

#### Sistema de templates

O Hugo usa templates HTML para estruturar o site e Markdown para o conteúdo. Isso é útil pois os metadados ficam no
[front matter](https://gohugo.io/content-management/front-matter/), facilitando traduções, RSS e outras funcionalidades.

Seu sistema de templates é poderoso. Os templates são divididos em [tipos](https://gohugo.io/templates/types/), como
seções (listas de páginas) e páginas individuais. Há suporte para partials, permitindo a componentização de elementos
reutilizáveis, como cabeçalho e rodapé.

Os templates podem gerar qualquer formato, como JSON, XML ou outros. Isso é essencial para funcionalidades como
[sitemap.xml](https://giggio.net/pt-br/sitemap.xml) e RSS.

#### Recursos de dados

Lá no rodapé há uma seção de podcasts que ouço e blogs que leio. As duas foram construídas usando um recurso do Hugo de
referenciar [fontes de dados](https://gohugo.io/content-management/data-sources/). Você pode criar arquivos CSV, JSON,
TOML, YAML e XML (usei YAML) e usá-los como fonte.

Por exemplo, criar um YAML de dados de podcasts, assim:

```yaml
- name: Medo e delírio em Brasília
  url: https://medoedelirioembrasilia.com.br/
- name: Hipsters.tech
  url: https://www.hipsters.tech/
```

E usá-lo depois, assim:

```go-html-template
{{ with site.Data.podcasts }}
  <li><a href="{{ .url }}">{{ .name }}</a></li>
{{ end }}
```

#### Shortcodes e code fences

Há ainda [shortcodes](https://gohugo.io/content-management/shortcodes/), que são maneiras de criar HTML com facilidade,
como embarcar um vídeo do YouTube, ou criar código com _syntax highlighting_.

```markdown
{{</* youtube EFAe8W3n2ks */>}}
```

Os códigos acima foram gerados somente com [_code fences_](https://gohugo.io/content-management/syntax-highlighting/) -
aqueles códigos com três ou quatro crases no markdown - e usa um shortcode por baixo dos panos. Esse é um exemplo de
code fences com `yaml`:

````markdown
```yaml
prop: true
```
````

#### Taxonomia

O Hugo tem um sistema de taxonomia, que é uma forma de categorizar suas páginas. O mais comum, e o que estou usando, são
categorias e tags para os posts do blog, mas você poderia usar para organizar qualquer coisa. Também usei para montar as
páginas de tipos de participações (por exemplo, as de [vídeos](http://giggio.net/participations/kinds/videos/) - veja
seu código no [Github](https://github.com/giggio/giggionet/tree/main/content/participationkinds).

O exemplo que eles usam na [documentação](https://gohugo.io/content-management/taxonomies/) é com filmes e atores.
Assim, uma página de um filme pode ter anotado quais são seus atores. Ator é a `taxonomia`, o nome do ator se torna o
`termo`. O legal é que você pode criar páginas para essas classificações, tanto pra taxonomia quanto pro termo. É assim
que tenho aqui a página de [categorias](https://giggio.net/blog/categories/), [tags](https://giggio.net/blog/tags/), e
cada termo delas, como por exemplo a tag [blog](https://giggio.net/blog/tags/blog/). As páginas, as taxonomias e os
termos são dados que você pode manipular.

#### Build

Durante o build todas as páginas são geradas, o site inteiro. Com o servidor de dev rodando você pode escolher se quer
refazer tudo ou só a página que mudou. Ele constrói as listas de páginas, as taxonomias, tudo. Ele ainda cacheia tudo
que fez, como as manipulações de imagens e arquivos que pode ter baixado.

O Hugo tem suporte a ambientes. Em dev, ele não otimiza nada (e isso é configurável). A build de prod, por outro lado,
já pode fazer uma série de coisas. Vejam só o que acontece no meu site:

- Compilação do Sass, concatenação de todo o CSS, tree shaking (com PostCSS), minificação e fingerprint.
- Otimização de todas as imagens, que são convertidas para webp e em alguns casos redimensionadas.
- Minificação do HTML

Eu ainda faço a análise do CSS crítico com a ferramenta [critical](https://github.com/addyosmani/critical), que é rodada
para cada página individualmente. Faço também a geração da busca com o [pagefind](http://pagefind.app/) (você pode
experimentá-la [aqui](https://giggio.net/search/) - e admito que gastei pouco tempo nisso, mas está funcionando).

Isso acontece localmente, caso eu queira testar, e também acontece usando o
[workflow](https://github.com/giggio/giggionet/blob/main/.github/workflows/build-hugo.yaml) do Github Actions, que
também faz linting e checagem ortográfica (com [cspell](https://cspell.org/)).

#### Outras funcionalidades

- O Hugo suporta múltiplos idiomas, e estou usando nesse site (clique na bandeirinha lá em cima no cabeçalho).
- O índice, no começo desse post, também foi montado usando um metadado da página, a
[.TableOfContents](https://gohugo.io/methods/page/tableofcontents/) (veja
[como fica o código fonte](https://github.com/giggio/giggionet/blob/b7be46d67eeb539459c4d51d5a16f15468f086d9/layouts/blog/single.html#L37)).
- Você pode utilizar recursos externos que podem ser baixados, como uma imagem, ou um arquivo CSS, ou JSON, e depois
processá-los e gerar conteúdo a partir deles. É assim que estou gerando o meu arquivo de
[robots.txt](http://giggio.net/robots.txt) (veja o fonte
[aqui](https://github.com/giggio/giggionet/blob/b7be46d67eeb539459c4d51d5a16f15468f086d9/layouts/robots.txt)), veja só:

  ```go-html-template
  {{- with try (resources.GetRemote "https://link/para/robots.json") -}}
  ```

  (notou o `try`?)

- A integração com recursos do Node.js é excelente, graças a capacidade de montar diretórios e arquivos. Você pode dizer
que qualquer diretório deve estar disponível para o site, e, ao acessar o recurso, ele copia os arquivos necessários. É
assim que estou fazendo com os arquivos do [Font Awesome](https://fontawesome.com/search), veja só como fica o
[arquivo de configuração](https://github.com/giggio/giggionet/blob/b7be46d67eeb539459c4d51d5a16f15468f086d9/config/_default/hugo.yaml#L147C3-L155):

  ```yaml
  module:
    mounts:
      - source: node_modules/@fortawesome/fontawesome-free
        target: assets/css/fontawesome
  ```

### O que pode melhorar

O principal problema do Hugo é a falta de debug. Quando você está muito mergulhado desenvolvendo os templates e algo não
funciona como você gostaria, o ideal seria poder debugar o problema enquanto o site está sendo gerado, mas a ferramenta
não oferece isso.

Ficamos sujeitos ao velho e bom "passei por aqui", usando a instrução `debug.Dump`, quando o resultado aparece
diretamente no HTML, ou a função `warnidf`, que gera um log no terminal. Ajuda, mas é uma experiência que pode melhorar.
Até eu descobrir que existiam eu penei um pouco, então fica a dica para quem está começando.

### Conclusão

Ainda tenho mais para falar sobre o Hugo, mas este post já está longo. O ponto principal é que o Hugo é uma ferramenta
excelente para sites estáticos. Resolveu perfeitamente meu problema, é um prazer de usar e, pelo que vejo, continuará me
atendendo por muito tempo.

Tenho ainda o que falar sobre toda a estrutura a sua volta, como usei o GitHub Pages, o uso de Nix para estruturas as
ferramentas e muito mais, e isso também vai ficar para os próximos posts.

O que você achou do Hugo? Comente abaixo!
