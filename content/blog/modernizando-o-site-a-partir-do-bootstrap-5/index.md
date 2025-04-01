---
title: Modernizando o site a partir do Bootstrap 5
date: 2025-04-02T13:00:00-03:00
comment_term: modernizando-o-site-a-partir-do-bootstrap-5
author: Giovanni Bassi
featureImage: images/bootstrap-v5-new-logo.png
featureImageAlt: Logo do Bootstrap
feature_image_list_top_offset: "10%"
categories:
  - web
tags:
  - hugo
  - Bootstrap
  - FontAwesome
  - JavaScript
  - Sass
  - CSS
---

Nos últimos dias, atualizei este site para o
[Bootstrap 5](https://blog.getbootstrap.com/2021/05/05/bootstrap-5/),
acabei aproveitando diversas oportunidades e quero compartilhar como foi esse processo.

<!--more-->

Mais do que a
simples atualização, aproveitei a oportunidade para melhorar vários pontos do site, inclusive junto ao
[Hugo](https://gohugo.io).

### Bootstrap 5

A migração para o Bootstrap 5 foi muito mais tranquila do que eu imaginava. Eu acreditava que seria um processo
extremamente trabalhoso, mas, na prática, foi bem simples. Existem inúmeros artigos e a própria
[documentação oficial](https://getbootstrap.com/docs/5.3/migration/) explicando o passo a passo, então não vou me
aprofundar nos detalhes técnicos desta atualização em si. Durante o processo, percebi que podia melhorar outras partes
do site e decidi trabalhar nelas.

Se você quiser ver a atualização em si, o commit foi
[esse aqui](https://github.com/giggio/giggionet/commit/484dd97a07340bfcda0d77bd5e7ccc899b3e1bad).

### Módulos EcmaScript

O Bootstrap 5, lançado em meados de 2021 (3 anos e meio após a versão 4.0), trouxe suporte completo a _ES Modules_, que
já é amplamente suportado em 2025. Anteriormente, meu código utilizava scripts e estilos carregados via CDN. Isso
aproveitava os caches dos usuários, mas baixava a biblioteca inteira, incluindo código e estilos desnecessários, afinal,
nem tudo era usado. Além disso, não usava ESM.

Com ESM, pude aplicar o _tree shaking_ – a eliminação de código não utilizado. Por sorte, o Hugo já oferece a opção de
realizar esse processo, tornando tudo extremamente simples.

Criei um arquivo chamado
[vendor.mjs](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/assets/js/vendor.mjs)
para listar apenas as dependências que realmente vou utilizar. Esse é o arquivo que será compilado. Ele basicamente
exporta as libs, assim:

```js
export { Popover, Tooltip } from 'bootstrap';
```

Utilizando o método [js.Build](https://gohugo.io/functions/js/build/) do Hugo, o bundle é gerado automaticamente.
Simplificando, é isso aqui:

```go-html-template
{{ with resources.Get "/js/vendor.mjs" }}
  {{ $opts := dict
    "minify" hugo.IsProduction
    "sourceMap" "linked"
    "format" "esm"
  }}
  {{
    printf `<!-- Vendor file: %q -->`
    (js.Build $opts | fingerprint "sha256").RelPermalink | safeHTML
  }}
{{ end }}
```

Esse arquivo é então importado no meu script principal, o
[script.js](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/assets/js/script.mjs), com
um simples `import`. Ele inicia assim:

```js
import { Popover, Tooltip } from './vendor.mjs';
```

Eu apenas importo esse arquivo, sem fazer o build dele, o que significa que o arquivo de vendor não é incorporado. Surgiu
o desafio do nome do arquivo mudar (por causa do _fingerprint_), mas resolvi isso com um
[script importmap](https://developer.mozilla.org/docs/Web/HTML/Element/script/type/importmap).

Passei a usar o Bootstrap instalado via Npm, o que facilitou muito o processo, pois o `js.Build` do Hugo usa o
[esbuild](https://esbuild.github.io/) para procurar automaticamente no diretório `node_modules`.

Outra vantagem é que o arquivo de vendor permanece estático, o que permite uso amplo do cache dos navegadores. Isso só
muda quando atualizo as dependências. Quando isso acontece, o nome do arquivo compilado muda, solucionando problemas de
cache dos navegadores. O mesmo ocorre com o `script.mjs`, mas este tende a mudar mais, com a adição de novas
funcionalidades.

Curiosidade: a reescrita deste _script_ foi a única parte que o Github Copilot conseguiu automatizar durante essa
migração – inclusive gerando um bug que corrigi em seguida.

### Compilação do Sass

Eu já vinha realizando _tree shaking_ e analisando todo o meu Sass/CSS, mas o CSS do Bootstrap era carregado por
completo via CDN. Como o Sass do Bootstrap já está presente no `node_modules`, passei a integrá-lo diretamente,
eliminando todo o CSS __do Bootstrap__ que não uso. Perdi o possível cache que viria da CDN, mas acredito que o arquivo
de vendor resolverá isso.

O desafio foi ajustar minha função de análise de CSS inútil, pois grande parte do CSS que permanecia no arquivo final
(antes do _tree shaking_) não era de minha autoria. Esse script cruza o HTML gerado com o CSS e aponta seletores não
utilizados, possibilitando sua remoção manual depois. Com um pouco de Bash e ferramentas livres, consegui resolver isso.
Se tiver interesse, confira o script
[unused-css](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/package.json#L12) no
`package.json`.

### Adeus jQuery

Tenho uma gratidão enorme pelo jQuery – ele pagou muitas das minhas contas e foi um grande companheiro – mas em 2025 ele
já não faz mais sentido. Enquanto o Bootstrap 4 dependia do jQuery, o Bootstrap 5 não. Por isso, removi-o.

O problema foi que a biblioteca de lightbox que eu havia escolhido dependia do jQuery, e eu não queria mantê-lo só por
esse motivo. Optei por substituí-la pela [Photoswipe](https://photoswipe.com/), que já suporta ESM, facilitando a
implementação. Para importá-la, usei outro _script_ com `importmap`, apontando diretamente para a CDN. E, assim,
eliminei também os arquivos extras da lib anterior, que exigia que eu entregasse também suas imagens. Agora, vem tudo da
CDN.

### Mudança no FontAwesome para JS + SVG

Após otimizar o JavaScript e o CSS do Bootstrap, decidi otimizar outros pontos do site. Notei que os arquivos de web
fonts do [FontAwesome](https://fontawesome.com/) eram bem grandes – com três grupos de fontes gratuitas (_solid_,
regular e _brands_), totalizando mais de 300KB. Por outro lado, o FontAwesome oferece a opção de usar JavaScript + SVG
em vez das fontes, sem alterar o HTML. Essa abordagem permite, inclusive, aplicar _tree shaking_, conforme descrito na
[documentação](https://docs.fontawesome.com/apis/javascript/tree-shaking).

O maior desafio foi a documentação, que acaba sendo confusa, especialmente com a promoção constante de ícones premium.
Estou considerando trocar para os [ícones do próprio Bootstrap](https://icons.getbootstrap.com/) ou pelo menos mudar
para alguns deles, mas ainda estou avaliando. De toda forma, descobrir como utilizar as APIs JavaScript do FontAwesome
não foi simples, pois não há um exemplo completo.

Usei a mesma técnica com o arquivo `vendor.mjs`, incluindo apenas os ícones que preciso. A criação correta desse arquivo
foi desafiadora, mas com meu Bash-fu consegui resolver, gerando automaticamente um arquivo que tem como única função
importar os ícones que estou usando, o
[fontawesome.generated.mjs](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/assets/js/fontawesome.generated.mjs).
Se quiser ver como foi feito, todo o código Bash do projeto está concentrado em um único arquivo (e prometo fazer um
post detalhado sobre ele em breve):
[veja aqui](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/nix/h#L492-L556).

O arquivo gerado é, de forma simplificada, assim:

```js
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faMastodon } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faMastodon, faCheck);
export { dom, library };
```

No arquivo real, as linhas 2 e 3 contêm todos os ícones.

A utilização é super simples: criei outro arquivo chamado `fontawesome.mjs`, que importa o arquivo gerado e contém uma
única função, responsável por inicializar os ícones:

```js
import { dom } from './fontawesome.generated.mjs';
export function initFontawesome(...nodes) {
  if (nodes.length === 0)
    // essa chamada inicializa os ícones da página inteira:
    dom.i2svg();
  else
    for (const node of nodes)
      // essa chamada inicializa apenas os ícones dos
      // elementos recebidos e é usada quando um elemento
      // com ícone é adicionado dinamicamente à página:
      dom.i2svg({ node });
}
```

Por fim, esse arquivo é importado e exportado no `vendor.mjs`.

Você deve ter notado que a função `initFontawesome` aceita, opcionalmente, uma lista de nós. Para evitar ter que
chamá-la manualmente em todos os lugares, criei um
[MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) que a dispara sempre que um
elemento `<i>` é adicionado ao DOM. Assim, quando isso acontece, o `<i>` é removido pelo código do FontAwesome e
substituído por um `<svg>`.

### Modo escuro

Um dos motivos para atualizar o Bootstrap foi a nova implementação de temas claro e escuro, algo essencial para mim, que
sou fã do modo escuro. Meu site me incomodava com seu visual totalmente branco, então essa mudança era prioridade!

#### Movimentação de variáveis de Sass para CSS

A [documentação](https://getbootstrap.com/docs/5.3/customize/color-modes/) do Bootstrap explica bem o processo e a
implementação foi muito simples. O desafio foi que meu código, herdado de um tema, fazia amplo uso de
[variáveis Sass](https://sass-lang.com/documentation/variables/). Para uma implementação eficaz do modo escuro,
precisava migrar para
[variáveis CSS](https://developer.mozilla.org/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
(ou, mais corretamente, __propriedades customizadas do CSS__). Realizei essa migração
[nesse commit](https://github.com/giggio/giggionet/commit/26ca930e5169eb9b6c457cbab67afbce966023e0) – e foi super fácil.

#### Implementando o modo escuro

A implementação foi super fácil. Preferencialmente, o _Bootstrap_ não usa apenas o _media query_
[prefers-color-scheme](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme),
já que isso dificultaria a troca de tema pelo usuário sem alterar as configurações do
navegador ou do sistema operacional. Em seu lugar, usa o atributo `data-bs-theme-value`, que pode ser colocado
onde você quiser (normalmente no `<html>`).

Com isso feito, basta você criar uma seção de variáveis CSS
padrão (que no meu caso ficou sendo o tema claro), e outra para o tema alternativo (o escuro), mais ou menos assim:

```scss
:root {
  --body-color: white;
  --text-color: black;
}
@include bootstrap.color-mode(dark) {
  --body-color: black;
  --text-color: white;
}
```

A importância de ter migrado antes para variáveis CSS fica evidente aqui.

O mixin `color-mode` do Sass basicamente insere o conteúdo dentro do atributo mencionado, ficando assim:

```scss
@mixin color-mode($mode) {
  [data-bs-theme="#{$mode}"] {
    @content;
  }
}
```

E o código acima compila para:

```css
:root {
  --body-color: white;
  --text-color: black;
}
[data-bs-theme="dark"] {
  --body-color: black;
  --text-color: white;
}
```

Como o atributo `[data-bs-theme]` está definido no `<html>`, ele tem mais especificidade do que o `:root`, alterando as
variáveis CSS e, consequentemente, todas as cores do site.

A documentação do Bootstrap fornece um código base para essa funcionalidade, que usei e modifiquei levemente. Ele
utiliza o _media query_ apenas até que o usuário opte por trocar o tema, garantindo um sistema bastante flexível.

O maior desafio não foi implementar o modo escuro, mas sim encontrar um sistema de cores que me agradasse e ao mesmo
tempo respeitasse a identidade visual do tema claro, especialmente para a leitura dos posts do blog. Para isso, o fundo
predominante precisava ser preto – para mim, o tema escuro é, na verdade, preto. Em telas OLED, cada pixel apagado
conta! Nada de cinza escuro. No final, gostei do resultado, mas ainda preciso conviver um pouco com ele para ver se
realmente me agrada.

E vocês, curtiram o tema escuro? Alguma sugestão de melhoria? Deixe seu comentário lá embaixo!

#### Adaptando o tema gerado por ferramentas

Dois _widgets_ não se adaptaram automaticamente: os comentários do [Giscus](https://giscus.app/) e o
[syntax highlight do Hugo](https://gohugo.io/content-management/syntax-highlighting/). Ambos usavam temas fixos, mas
felizmente oferecem opções de customização com apenas algumas linhas de JavaScript. O Giscus dispõe de uma API para
ajustar o tema, enquanto o _syntax highlight_ do Hugo permite usar um CSS externo – bastou alterar o `href` do `<link>`
que carrega o CSS de _highlight_.

Estou pensando até em oferecer aos usuários a opção de alterar o tema somente do _syntax highlight_, com um detalhe
sutil na tela que permita essa mudança. É o tipo de personalização que só é possível quando você tem controle total
sobre o HTML, algo que seria bem trabalhoso no WordPress.

### Conclusão

Essa jornada me levou cerca de 30 horas, com boa parte do tempo dedicada à pesquisa. Se fosse refazer, com certeza seria
mais rápido, agora que aprendi as partes do trabalho que não conhecia. Foi uma experiência extremamente prazerosa voltar
a mexer com _frontend_ depois de alguns anos, sem depender de bibliotecas ou frameworks de SPA e nem de TypeScript. Ver
o quão modernos e acessíveis o CSS e o JavaScript se tornaram foi revigorante. Talvez, em breve, o próprio Sass nem seja
mais necessário. O JavaScript atende muito bem uma base de código desse porte, especialmente com o compilador do
TypeScript verificando o código constantemente, o que acaba ajudando muito.

Ainda tenho outras histórias dessa atualização para contar, mas, como não tem relação direta com a adoção do Bootstrap
5, elas ficarão para um próximo post.

E aí, você sabia que dava pra fazer tudo isso com um gerador de site estático? Já conhecia essas novidades do JavaScript
e do CSS? Comenta aí embaixo o que achou!

Divertido demais trabalhar com Hugo, _Bootstrap_, JavaScript e CSS modernos!
