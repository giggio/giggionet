---
title: "Dicas de segurança com tecnologia"
date: 2022-02-07T13:00:00-03:00
author: Giovanni Bassi
tags:
  - e-mail
  - android
categories:
  - segurança
  - ti
---

### Introdução

De vez em quando eu posto [no meu Twitter](https://twitter.com/giovannibassi) alguma coisa sobre segurança e costumo ter
bastante retorno, muita gente comenta que as dicas são úteis. Vou resumir neste post algumas destas dicas. É importante
deixar claro que não sou especialista de segurança. Estas dicas são práticas que aprendi ao longo da vida, que eu uso
pessoalmente e que acho que podem ser úteis, principalmente para aquelas pessoas menos técnicas, mas convido quem me lê
a buscar suas próprias conclusões e validar tudo que estou expondo por aqui.

Meu foco principal será Windows e Android, mas algumas dicas independem de sistemas operacional, e todas se transportam
para outros sistemas.

Vou dividir as dicas em várias seções. Vamos lá.

### Segurança de contas e senhas

#### Não informe sua senha para ninguém

Esse é meio óbvio, mas muita gente faz. Alguém com sua senha pode se passar por você, entenda as implicações disso.

#### Não repita senhas ou use padrões

Não utilize a mesma senha para contas diferentes. Principalmente a senha do seu e-mail, nunca use ela em outros lugares.
Você ficaria surpresa(o) com a falta de segurança na maioria das aplicações. Imagine que sua senha pode estar gravada em
texto simples em uma planilha do Excel, podendo ser lida livremente pelo dono do site que você está se cadastrando. Em
muitos lugares, não é muito melhor que isso.

Ponto para observar: se um serviço oferece a opção de recuperar a senha, enviando-lhe a mesma por e-mail, isso quer
dizer que a sua segurança é baixa. Se ele pode te mandar a senha, ele pode ler tua senha. Evite este serviço, se puder.
O correto é que o serviço não consiga ler sua senha, ela deve ser armazenada criptografada, de forma que nem os técnicos
que operam o serviço conseguem lê-la. Um processo de troca de senha em caso de esquecimento deve ser com geração de uma
nova senha, nunca de envio da senha antiga por e-mail. Até porque e-mails não são criptografados por padrão.

Também não use padrões, por exemplo “nomedaminhamãe22”, e depois troque para “nomedaminhamãe23” e depois para
“nomedaminhamãe24”. Se a primeira senha vazar, a primeira coisa que vão tentar depois dela mesma serão pequenas
variações.

E como lembrar de todas essas senhas? Veja o próximo ponto.

#### Utilize um serviço/aplicativo gerenciador de senhas

Utilize um aplicativo gerenciador de senhas. Esse aplicativo vai guardar todas as suas senhas, e a única senha que você
vai precisar se lembrar é a dele.

Neste aplicativo, guarde todas as suas senhas. Este aplicativo inclusive vai preencher as senhas para você nos sites e
apps, tanto no smartphone quanto no computador.

Uma vez que você tem um aplicativo gerenciador de senhas, use somente senhas aleatórias. Todo gerenciador de senhas vai
ter um gerador de senhas, onde você informa se quer uma senha com caracteres minúsculos, maiúsculos, números e símbolos,
e qual o tamanho esperado da senha. Essa senha será totalmente aleatória. Gere senhas de 40 caracteres ou mais, e
guarde-as no gerenciador de senhas. A única exceção são os aplicativos que rodam em smart tvs e que exigem senha para
logar, e você precisa usar aquele tecladinho ruim da tv. Nesse caso, use senhas menores, mas igualmente aleatórias. Mas
muitos, hoje, permitem logar com um código que aparece na TV, ou um QR code.

Depois de adotado o gerenciador de senhas, troque suas senhas antigas por senhas aleatórias. Isso é importante.

Não há risco do serviço gerenciador de senhas ter acesso as suas senhas, porque elas ficam criptografadas no banco de
dados do provedor do serviço, e só são descriptografadas no seu dispositivo, com a sua senha. Exatamente por este
motivo, caso você esqueça a senha deste serviço, todas as senhas guardadas lá serão perdidas, porque serão impossíveis
de descriptografar.

Recomendo o uso do aplicativo [Bitwarden](https://bitwarden.com/), que é software livre e, portanto, auditável. O
serviço para uso pessoal é gratuito, e eles se monetizam oferecendo o serviço para empresas. Vai funcionar tanto no
smartphone quanto no computador, a custo zero.

Para a senha deste aplicativo escolha uma senha longa e que seja fácil de lembrar. Uma boa dica é usar “passphrases” em
vez de “passwords”, ou seja, frases em vez de palavras para as senhas. Por exemplo, se sua mãe é nascida em 4 de
setembro, você poderia usar a senha “Minha mãe é nascida em 4 de setembro!”, desse jeito mesmo, com espaços e tudo. Uma
senha dessa, com quase 40 caracteres, alguns acentuados, números, maiúsculas, minúsculas e um caractere especial, é
muito difícil de adivinhar ou usar um aplicativo de força bruta para quebrar, mas é fácil de lembrar. Anote ela em um
papel, até ter certeza que se lembra, e, em último caso, se achar que pode se esquecer, guarde esse papel em algum lugar
seguro, não exposto a ninguém. E utilize 2FA com o gerenciador de senhas, isso é imprescindível, abaixo explico como
fazer.

##### Desabilite o preenchedor de senhas do navegador

É comum que o navegador ofereça a opção de salvar senhas para você. Frequentemente isso não é seguro, e, se sua conta
for comprometida, as senhas também podem ser (alguns deles fazem backup junto com sua conta para que você utilize a
mesma senha guardada em dispositivos diferentes). Como você já estará utilizando o gerenciador de senhas mencionado
anteriormente, desabilite esta funcionalidade, e apague as senhas. Para fazer isso:

- [Edge](https://support.microsoft.com/pt-br/microsoft-edge/salvar-ou-remover-senhas-no-microsoft-edge-b4beecb0-f2a8-1ca0-f26f-9ec247a3f336)
- [Firefox](https://support.mozilla.org/pt-BR/kb/gerenciador-de-senhas-memorize-exclua-altere-contas-e-senhas)
- [Safari](https://support.apple.com/pt-br/HT211145)
- [Chrome](https://support.google.com/chrome/answer/95606?hl=pt-BR)

#### Habilite autenticação de dois fatores

Se alguma senha sua vazar, ela poderá ser usada para acessar a conta que deveria estar protegendo. Nesse caso, a pessoa
invadindo sua conta poderia usar o serviço como se fosse você. Imagine o risco disso em um aplicativo bancário, ou de
compras na internet, por exemplo? A pessoa poderia comprar no seu nome, te deixando no prejuízo. Pior, se ela acessar
seu e-mail, ela consegue roubar a maioria das suas senhas dos outros serviços usando a recuperação de senha por e-mail.

Para evitar isso, habilite a autenticação de dois (ou múltiplos) fatores. Isso vai exigir, além da sua senha, outra(s)
forma(s) de provar que você é você mesma(o). Há várias maneiras de fazer isso, e a mais prática e que oferece bastante
segurança é o uso de uma aplicação autenticadora. Nessa aplicação, o site que tem a senha vai te mostrar um QR Code, que
você vai ler com a aplicação autenticadora. Com isso configurado, ela passará a gerar códigos aleatórios que duram cerca
de um minuto, e que serão usados para logar nos sites.

Aí, o fluxo de login fica assim:

1. Você entra no site (ou na app) e coloca usuário e senha
2. O site ou app solicita o código
3. Você abre o aplicativo de autenticação, copia o código e cola no site/app, e consegue acesso.

Note que, em caso de roubo de senha, o ladrão não terá a app em mãos, e não conseguirá finalizar o processo de login.
Mesmo que tenha sua senha, ele não entra. E você será notificada(o) que sua senha vazou (pelo provedor de serviço) e
poderá trocar sua senha.

É comum os sites oferecerem também a autenticação de dois fatores (2FA – 2 factor authentication) usando mensagens de
texto (SMSs), mas isso é perigoso, se sua linha for clonada ou smartphone roubado a pessoa poderia conseguir acesso a
sua conta usando sua linha. Evite.

Também é comum utilizar e-mail como segundo fator de autenticação. Não recomendo. O e-mail também pode ser roubado, e
usado para entrar em todas as suas contas.

E-mail e SMS podem ser usados como terceiro ou quarto fatores, mas nunca como segundo. Nesse caso, é o que chamamos de
MFA (multi factor authentication).

Quando habilitar 2FA você deverá anotar/baixar códigos de recuperação. Esses códigos permitem que você entre na sua
conta sem o aplicativo de autenticação, caso, por exemplo, seu smartphone seja roubado. Baixe e guarde em lugar seguro,
como um pen drive, ou imprima e guarde em local que outras pessoas não tem acesso. Isso é muito importante, sem isso,
caso um roubo ocorra, você pode perder acesso ao serviço que estava protegendo.

Algumas apps de autenticação:

- [LastPass](https://lastpass.com/auth/) – faz backup na nuvem com sua conta da LastPass
- [Microsoft](https://www.microsoft.com/pt-br/security/mobile-authenticator-app) – faz backup na nuvem com sua conta da
  Microsoft
- [Google](https://support.google.com/accounts/answer/1066447?hl=pt-br) – app original de autenticação

Alguns serviços têm apps próprias, que também recomendo o uso. O Android integra com o Google, e Microsoft Authenticator
é ótimo como camada extra de autenticação, mesmo que você use outro aplicativo para isso.

##### Autenticação de dois fatores no WhatsApp e Telegram

WhatsApp e Telegram te registram com o número de telefone, ou seja, se roubarem teu número (clonarem ou roubaram teu
chip) a pessoa consegue roubar tua conta. Outro golpe muito comum é aquele em que a pessoa tenta roubar o código de
transferência do WhatsApp para se passar por você e dar um golpe nos seus amigos e parentes.

Para evitar esse tipo de problema, ambos os serviços oferecem autenticação de dois fatores, onde você coloca uma senha,
além do código recebido por SMS. Para ter acesso ao seu WhatsApp, a pessoa precisará, além do código, também da senha.

Para habilitar:

- [WhatsApp](https://faq.whatsapp.com/general/verification/about-two-step-verification/?lang=pt_br)
- [Telegram](https://telegram.org/blog/sessions-and-2-step-verification?setln=pt-br) ([em
  português](https://canaltech.com.br/apps/como-ativar-a-verificacao-de-duas-etapas-no-telegram/))

#### Verifique se alguma senha sua vazou

Alguns serviços oferecem uma forma de verificar se sua senha vazou. É importante para saber se você precisa trocar
algumas senhas. Quem faz isso bem:

- [Minha Senha](https://minhasenha.com/)
- [Have I been pwned](https://haveibeenpwned.com/) (em inglês)
- [Firefox Monitor](https://monitor.firefox.com/) (em inglês)
- [Serasa](https://www.serasa.com.br/premium/darkweb) (pago, mas verifica também vazamento de dados brasileiros, como
  CPF etc)

#### Desabilite reset de senha com SMS

Reset de senha por SMS pode ser perigoso se a pessoa tiver acesso ao seu número (chip roubado ou número clonado). Evite,
prefira por e-mail, idealmente um que você não leva a app dele instalada no smartphone.

#### Desabilite reset de um e-mail usando outro e-mail facilmente acessível

Reset de senha por e-mail é importante, mas não para o serviço de e-mail em si. Por exemplo, suponha que você tenha uma
conta no GMail e outra no [Outlook.com](https://Outlook.com), e ambas estão instaladas no smartphone, e uma registrada
como conta de recuperação da outra. Um ladrão com acesso ao seu smartphone poderia usar uma conta para trocar a senha da
outra.

O reset de senha do serviço de e-mail (GMail, Outlook etc) deve ser usado para uma conta que não está no seu smartphone.
Idealmente uma que você usa pouco, e que também está protegida por 2FA. Veja a recomendação abaixo sobre o Protonmail.

#### Não utilize “perguntas de segurança”

Sabe aqueles sites que te pedem para informar o nome da primeira rua que morou, ou do primeiro cachorro, a fim de
recuperar sua conta no futuro? Não use. Se for obrigatório, escolha uma pergunta qualquer e preencha o texto da resposta
digitando qualquer lixo livremente no teclado. Essas informações podem ser usadas para roubar sua conta.

E, se você usar, cuidado para não divulgar essas informações nas redes sociais.

### Segurança do seu smartphone

Se o seu smartphone for roubado, o ladrão teria acesso a toda a sua vida digital? Como evitar isso? A seguir algumas
dicas que podem te ajudar

#### Use o bloqueio de tela de forma inteligente

Sempre exija um padrão, PIN, senha ou biometria para desbloqueio. Padrão (aquele desenho de uma forma geométrica na
tela) é pouco seguro, pode ser facilmente decorado por outra pessoa. PIN também tem esse problema. Senha é pouco
prática. Recomendo dar preferência ao desbloqueio biométrico, com digital, íris ou outro. Verifique se a biometria
oferecida pelo fabricante do seu aparelho é segura, algumas apresentam falhas.

Sempre configure para bloqueio automático depois de um tempo sem uso, assim, se o aparelho ficar 30 segundos sem uso,
por exemplo, a tela bloqueia sozinha.

Não mostre o preview das notificações na tela de bloqueio, como texto de e-mails, SMSs etc. Eles podem ser usados para
roubar sua conta sem desbloquear o aparelho.

#### Coloque PIN no seu SIM card

Se o chip da sua linha (o SIM card) for roubado sua linha pode ser acessada livremente, inclusive para receber SMSs de
reset de senha e 2FA (veja o que falei sobre isso anteriormente). Mas ele pode ter uma senha, que chamamos de PIN.
Quando você compra o chip, ele vem desbloqueado e com um PIN padrão (depende da operadora). Você pode trocar esse PIN e
colocar um que vai manter o chip bloqueado, impedido de receber ou fazer ligações ou receber ou enviar SMSs.

O código vai ser exibido somente quando o aparelho for ligado, ou seja, se tentarem desligar o aparelho e colocarem o
chip em outro aparelho, não vão conseguir.

[Esse artigo](https://www.tudocelular.com/seguranca/noticias/n144795/ensina-como-ativar-bloqueio-chip-sim-celular.html)
mostra como fazer isso.

#### Instale uma app que bloqueia aplicativos

Caso seu smartphone seja roubado é importante que o ladrão não tenha acesso aos seus apps. Infelizmente, nem Android nem
iOS oferecem uma forma de colocar senhas em aplicativos que não o exigem. Por exemplo, na sua app de e-mail, para evitar
o roubo das suas outras contas.

No Android você pode utilizar aplicativos para isso. Um que uso e recomendo é o
[AppLock](https://play.google.com/store/apps/details?id=com.sp.protector.free) que é gratuito (mas eu paguei pelas
funcionalidades avançadas). Ele permite colocar senha para todas as apps, ou apenas para algumas. E também tem
automação, por exemplo, iniciar o bloqueio quando você conecta ou desconecta de um Wi-Fi ou dispositivo Bluetooth. No
meu caso, tenho configurado para que sempre que desconecto da senha de casa ou do trabalho ele inicia o bloqueio, assim
como quando conecto no Bluetooth do carro ou do capacete (uso um comunicador nele). Assim, caso eu seja roubado com o
smartphone desbloqueado, ou seja, forçado a desbloquear e informar o PIN de desbloqueio do aparelho, as apps estarão
sempre bloqueadas. Não use o PIN do AppLock igual ao PIN de desbloqueio, para evitar esse problema.

Instale também o [Helper do AppLock](https://play.google.com/store/apps/details?id=com.sp.protector.helper) que habilita
algumas extensões de segurança importantes.

Não sou usuário iOS, não sei se há alguma app semelhante por ali, mas imagino que sim.

#### Bloqueie o smartphone com macros

Hoje em dia tem sido comum roubarem o smartphone que está no carro sendo usado com o Waze. Para evitar que ele seja
roubado desbloqueado, criei uma automação que faz com que o aparelho bloqueie se ele for desconectado do carregador.
Para evitar que toda vez que estou em casa ou no trabalho carregando, ao desconectar ele bloqueie, coloquei uma exceção:
se estou no Wi-Fi de casa ou do trabalho, não realize a ação.

A macro também bloqueia se ele for conectado em um carregador, mas não está conectado em um Wi-Fi confiável. É útil caso
o aparelho seja roubado na rua, e o ladrão o coloque para carregar. [Baixe o
MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid&hl=pt_BR&gl=CH). [Instale a
macro](http://www.macrodroid.com/macrostore?id=11754) (clique direto do smartphone). Ou [baixe a
macro](https://gist.github.com/giggio/a1627bd276c7b23be9a991f0fa9c3bf0) e depois importe-a pelo botão Exportar/Importar
do MacroDroid.

#### Instale o gerenciador de senhas no smartphone

Instale o gerenciador de senhas recomendado anteriormente também no Smartphone. Cuidado, algumas apps/serviços não
permitem o uso no computador e smartphone ao mesmo tempo sem pagar pelo serviço (caso do LastPass). O Bitwarden permite.
Use PIN diferente do PIN do smartphone para desbloquear o aplicativo. Idealmente, nem use PIN, use entrada biométrica.

#### Desabilite o preview de mensagens de texto (SMSs) e e-mails nas notificações

Não exiba o preview das mensagens nas notificações. Se você usar o bloqueio com o AppLock mas permitir o preview, uma
pessoa poderia usá-lo para obter um código de acesso a sua conta.

E, como falado anteriormente, evite SMSs para reset de senhas.

#### Proteja o armazenamento do seu telefone

Algumas marcas de telefone permitem que o aparelho seja criptografado por completo. Escolha uma delas. Isso quer dizer
que, se o aparelho for aberto e o chip de armazenamento interno for acessado, seus dados não poderão ser lidos. Procure
saber disso antes de comprar um aparelho novo.

#### Não faça root ou jailbreak no aparelho

Esse vai junto com o anterior: se você fez jailbreak ou liberou root no aparelho ele poderá ser livremente acessado por
um ladrão. Não faça.

#### Segurança nas suas apps bancárias e afins

Esse é um assunto polêmico e difícil na realidade do brasileiro. Quase todas as apps de banco exigem senha, então já
estamos razoavelmente protegidos por causa disso (e é uma vergonha as que não o fazem por padrão). Porém, em uma
situação de sequestro relâmpago, você terá que entregar todos os seus dados, incluindo suas senhas de banco. Isso
significa que um ladrão poderá movimentar toda a sua conta corrente, investimentos etc. Imagine alguém roubar todo seu
investimento, que você levou anos guardando? E por falar nisso, evite colocar investimentos no mesmo banco que tem a
conta corrente, cartão etc, pelo mesmo motivo. Em uma dica paralela, não invista usando bancos, eles sempre vão ganhar
em cima de você – e algumas corretoras também, mas não vou me alongar nesse assunto.

Para evitar isso, a melhor solução é não instalar apps de banco no seu principal smartphone. Pegue aquele smartphone
antigo que você tem guardado e instale nele. Se você não tiver outro aparelho, alguns aparelhos oferecem uma forma de
“esconder” as apps, como a [Pasta
segura](https://www.samsung.com/br/support/mobile-devices/como-configurar-a-pasta-segura/) da Samsung. Coloque uma senha
na pasta segura, instale as apps de banco nela, e deixe-a desabilitada por padrão, assim ela nem aparece entre as apps
do aparelho. Se precisar acessar o banco, ligue ela novamente, acesse e use normalmente. Em breve o Windows 11 deverá
instalar apps de Android (chamado de [Windows Subsystem for
Android](https://docs.microsoft.com/en-us/windows/android/wsa/)) e não precisaremos de outro aparelho para isso.

Recomendo ainda algum banco digital que você usa pouco para deixar no smartphone. Em um sequestro relâmpago, ladrão
nenhum vai acreditar que você não tem conta em banco. Use um banco digital que não cobra taxa para ter conta e movimente
ele de vez em quando para dar a entender que ele é seu banco principal. Por exemplo, pague contas de luz por ele,
deposite uma parte do seu salário nele, use o cartão para algumas compras etc. Mantenha nesse banco um saldo menor, que
você não vai ficar desesperado se perder porque foi roubado. Isso é legal, também, porque permite que você tenha
flexibilidade na rua, se precisar pagar um boleto, fazer um Pix, o aplicativo daquele banco digital resolve.

### Segurança nos seus documentos

Caso sua máquina seja infectada por um ransomware os seus documentos podem ser criptografados, e o pagamento de um
resgate dos seus dados será exigido. Por esse motivo, é importante você ter uma cópia destes documentos em algum lugar.
Windows, Mac e Linux oferecem boas soluções de backup, mas melhor do que estas é armazenar os documentos na nuvem.
Utilize um serviço que se integre com sua pasta de documentos, imagens, vídeos, desktop etc. Dessa forma, sempre que
você salvar um arquivo ele vai para a nuvem automaticamente.

Para quem está no Windows recomendo o uso do OneDrive, que se integra muito bem. O [plano família do Microsoft
365](https://www.microsoft.com/pt-br/microsoft-365/onedrive/compare-onedrive-plans), que inclui o OneDrive, cobre 6
pessoas e custa hoje 45 reais por mês, ou seja, menos de 8 reais por pessoa, e te dá 1 TB de armazenamento por pessoa.
Se quiser para uma pessoa só custa menos, mas não vale a pena. Por 9 reais dá para ter 100GB, o que costuma ser
suficiente para a maior parte das pessoas, mas o plano família inclui também o pacote Office (as apps em si, para
instalar ou usar na web), minutos no Skype e alguns recursos avançados que valem a pena. O OneDrive é grátis até 5GB,
mas costuma ser pouco.

Outras opções interessantes são o Google One (7 reais por mês por 100GB) e Dropbox (12 dólares por mês por 2TB), mas não
incluem o Office nem o Skype.

Instale o aplicativo no smartphone, também.

### Segurança no seu computador

Há alguns pontos básicos que você precisa manter ligados, atualizados e funcionando:

- Antivírus
- Criptografia de disco
- Firewall
- UAC

A aplicação Segurança do Windows (“Windows Security” em inglês) te dá uma boa visão sobre todos estes pontos. Veja [na
sua
documentação](https://support.microsoft.com/pt-br/windows/ficar-protegido-com-a-seguran%C3%A7a-do-windows-2ae0363d-0ada-c064-8b56-6a39afb6a963)
como utilizá-la melhor.

#### Antivírus

No Windows, é fácil de se manter segura(o) com as ferramentas que vêm instalados por padrão e são gratuitos. Recomendo o
uso do Windows Defender para antivírus, e ele já vai verificar vários dos outros pontos abaixo também.

#### Criptografia

A criptografia de disco no Windows existe por padrão e chama-se Bitlocker. Se seu computador for roubado e não estiver
criptografado, a pessoa que o roubou consegue acessar todos os seus arquivos. Habilitar o Bitlocker é tão simples quanto
clicar um botão e vai impedir isso.

Atenção para computadores mais antigos: se o seu computador não possui um chip TPM ele precisará de uma senha para
utilizar o Bitlocker. Ao ligar o Bitlocker pela primeira vez ele vai te informar isso. Se isso acontecer, recomendo não
habilitar, e verificar se o seu computador possui um TPM, já que ele pode estar desabilitado. Neste caso, habilite-o na
BIOS, procure o manual do fabricante do computador (ou da placa mãe se o seu PC for montado) para entender como fazer
isso. Se não tiver TPM, você vai ter que habilitar com esta senha e toda vez que a máquina for ligada ela terá que ser
informada.

#### Firewall

O firewall do Windows também é habilitado por padrão. Apenas garanta que ele está funcionando.

#### UAC/Controle de acesso

O UAC te notifica quando algum aplicativo tenta alterar uma configuração do sistema. Por exemplo, um vírus, ao tentar se
instalar, vai precisar desse acesso.

O UAC deve estar ligado e com uma configuração recomendada. Para acessar, clica em “Start” e digite “UAC” ou “controle
de acesso”. O nível deve sempre ser o segundo mais alto, ou o primeiro mais alto. O segundo mais alto é o recomendado.

[Neste link](https://docs.microsoft.com/pt-br/mem/intune/user-help/you-need-to-enable-uac-windows) temos a documentação
oficial.

O UAC é importante porque ele nunca deve aparecer no dia a dia, só quando você instala alguma coisa aplicação ou altera
alguma configuração. Abriu um documento e a janela de permissão do UAC apareceu? Negue, e rode o antivírus
imediatamente. O UAC nos protege de nós mesmos, naquela hora em que acessamos algum conteúdo malicioso que não havíamos
percebido.

#### Proteja seu login

Use o Windows Hello para fazer login no Windows. O login com PIN é mais seguro que o login com senha. Se tiver um
computador mais moderno, faça login com biometria, utilizando a digital ou reconhecimento facial, e evite o PIN e a
senha. [Saiba mais sobre o Windows
Hello](https://support.microsoft.com/pt-br/windows/entrar-na-sua-conta-microsoft-com-o-windows-hello-ou-uma-chave-de-seguran%C3%A7a-800a8c01-6b61-49f5-0660-c2159bea4d84).

#### Proteja sua BIOS

Coloque uma senha na BIOS do seu computador. Se ele for roubado, não conseguirão alterar nenhuma configuração de
segurança. Procure como fazê-lo no manual da sua máquina, que você deve encontrar online.

#### Habilite o secure boot na BIOS

Se o seu computador suportar, habilite o Secure Boot/Inicialização segura. Isso vai te proteger de ataques externos, mas
também de vírus e outras ameaças. O Secure Boot vai analisar se os arquivos de inicialização foram corrompidos e te
informar. [Este
artigo](https://www.tecmundo.com.br/software/226377-habilitar-inicializacao-segura-instalar-windows-11.htm) mostra como
fazer, mencionando o Windows 11, mas também funciona no Windows 10, e no Linux.

#### Habilite a integridade de memória

Se sua máquina suportar, habilite a integridade de memória. Ela vai proteger os processos críticos do Windows com
virtualização. Veja como fazer [nos documentos
oficiais](https://support.microsoft.com/pt-br/windows/prote%C3%A7%C3%A3o-de-dispositivo-na-seguran%C3%A7a-do-windows-afa11526-de57-b1c5-599f-3a4c6a61c5e2).
Este documento também fala um pouco sobre Secure boot.

#### Área Restrita (Windows sandbox)

A área restrita do Windows cria um “Windows temporário” para você rodar coisas que acha que podem ser perigosas. Na
prática, ela é uma [máquina virtual](https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual) de vida curta. Use-a quando não
tiver certeza se o que vai fazer é seguro. O que rodar nela é incapaz de escapar para sua máquina, mas pode escapar para
sua rede, então tome cuidado.

Como depende de virtualização, precisa de Windows Pro ou Enterprise.

#### Mantenha seu computador atualizado

Esse é o maior terror dos invasores. Tanto quanto manter as configurações de segurança funcionando, manter seu PC
atualizado vai resolver a maior parte dos problemas. Dificilmente ele será invadido se estiver atualizado. Mantenha o
Windows Update ligado, deixe-o atualizar normalmente, e suas chances de problemas serão menores.

#### Use Linux

Essa vai pro pessoal técnico: use Linux. O domínio do Windows, com cerca de 90% do mercado de PCs no mundo, o torna o
principal foco para ataques. Usar Linux te tira desse foco. Mas fica o aviso: se você não conhece Linux, a curva de
aprendizado é alta. Para pessoas que não são de tecnologia, pode ser muito difícil. Comece com uma distribuição mais
amigável. Nesse caso, recomendo o [Ubuntu](https://ubuntu.com/).

Cuidado, porque manter tudo funcionando corretamente no Linux pode ser mais difícil do que você imagina. Desde fazer o
Wi-Fi funcionar, até manter firewall habilitado, ou até criptografia de disco, tudo é mais complexo. Esse último ponto é
um que me incomoda particularmente, a criptografia de disco inteiro, que o Windows resolve trivialmente e integrando com
o TPM, ainda é quase inexistente no Linux. O melhor que você terá hoje em dia, sem precisar reconfigurar o sistema todo
pela linha de comando é uma criptografia de disco inteiro com senha, sem integração com o TPM.

Fica parecendo que não gosto de Linux, mas é o contrário: gosto e entendo bastante, por isso faço a ressalva a quem
ainda não conhece.

### VPN e Tor browser

São opções tanto para o smartphone quanto para o computador. Vão te “esconder” do seu provedor de acesso. A VPN não é
anônima, então tome cuidado, o provedor de VPN pode estar vendo tudo que você está fazendo. Procure um provedor de VPN
que não mantenha logs e que esteja em um país que não tenha acordo de cooperação com a União Europeia, Brasil e Estados
Unidos (no mínimo). Dá trabalho encontrar um, faça sua pesquisa, não vou recomendar aqui porque esse assunto é polêmico.

O [Tor Browser](https://www.torproject.org/download/) é um navegador que, esse sim, é completamente anônimo. Use-o para
acessar sites sem ser identificado e para passar por proibições governamentais, por exemplo, acessar um site que foi
bloqueado no seu país.

### Proteja seu DNS

Habilite DNS over HTTPs (DoH) no Windows 11, isso fará com que o seu provedor de internet não veja quais sites você está
acessando. [Estes documentos](https://docs.microsoft.com/pt-br/windows-server/networking/dns/doh-client-support) mostram
como fazer, mencionam o Windows Server, mas o processo é igual para Windows 11. Acredito que não existe no Windows 10.
Lista também os servidores de DoH do Cloudflare, Google e Quad9 (recomendo o da Cloudflare).

#### Para pessoas mais técnicas

Instale um servidor próprio de DNS e conecte-o usando DoH ou DNS over TLS. Uma opção para fazer isso barato é um
Raspberry Pi (recomendo o 3 ou melhor) com [Pi-hole](https://pi-hole.net/).

### Entenda o que significa HTTPS

HTTPS significa que a comunicação com um site é privada, mas não que ela é segura, e nem que quem fez o site é quem diz
ser. Um site acessado via HTTPS impede que seu tráfego seja lido entre o seu computador e o site de destino, e é isso,
não há nenhuma outra garantia.

Cuidado com sites que fingem ser outros sites, até mesmo com HTTPS. Evite clicar em links de bancos que recebe por
e-mail, por exemplo, prefira digitar o endereço. Melhor que digitar é ter uma barra de favoritos, assim você evita
digitar errado e cair em um site malicioso. Mesmo que o site pareça ser o site certo, caracteres parecidos, mas não
idênticos, podem te enganar.

Por exemplo, você consegue ver a diferença entre estas duas palavras?

- meubanco
- meuᖯanco

Deu para ver que o segundo “b” é diferente? É, na verdade, um “ᖯ”, código 15F (o “b” certo é código 0062). Já imaginou
isso na barra do navegador? Você vai perceber a diferença?

Para ver outros caracteres parecidos, veja os [Confusables](https://util.unicode.org/UnicodeJsps/confusables.jsp) no
site do Unicode.

### Proteja seu e-mail

O e-mail nas principais plataformas é lido por processos automatizados para lhe oferecer propaganda. Além disso, sendo
hospedados nos Estados Unidos, podem ser lidos pela NSA livremente. A lei estadunidense atual impede os provedores de
informarem se estão passando os dados para a NSA, ou seja, sua negativa não implica que não estejam enviando estes
dados. Considero esse um passo para quem quer dar um passo extra na proteção, não é algo que uso para tudo. A
recomendação, neste caso, é usar o [Protonmail](https://protonmail.com/), que é de uma empresa Suíça. Todo o e-mail é
criptografado e eles colocam a proteção do usuário acima de tudo. Não tem como a NSA chegar lá. É uma boa opção para
aquele e-mail de reset de senha que havia mencionado mais cedo.

### Evite golpes

Te pediram dinheiro online? Não importa quem é, se o telefone está certo, o que for, confirme com a pessoa: peça uma
ligação, ou melhor ainda, uma chamada de vídeo. Pode não ser quem a pessoa diz que é.

E cuidado com a sua biometria. Se alguém que você não conhece quiser tirar uma foto sua, recuse. Pode ser a verificação
biométrica de um banco, que está sendo usada para realização de empréstimos ou algo parecido.

Se receber um código por SMS, e-mail, WhatsApp (ou qualquer outro meio, na verdade), nunca envie esse código para
ninguém. Podem estar usando o código para roubar sua conta em algum serviço.

### Não use software/conteúdo pirata

Software crackeado tem uma grade chance de trazer consigo um cavalo de Troia. Pode ser um vírus, um minerador de
criptomoedas, ou um keylogger, que grava tudo que você digita, ou coisa pior. O Brasil é um país que não lida bem com as
leis de propriedade intelectual, então é fato que você consegue usar sem o governo lhe incomodar, então fica só o aviso
para tomar cuidado e não ter seu computador invadido e seus dados roubados.

Isso também vale para uso de Torrent para vídeos e música piratas. Nesse caso, dificilmente um arquivo .avi, .mkv ou
.mp3 terá vírus, porque o vírus dependeria do programa executando o arquivo de mídia. Neste caso, no smartphone o risco
pode ser maior, por ser um ambiente mais restrito e com apps mais comuns.

### Para saber mais

O [Nic.br](https://www.nic.br/) oferece bastante conteúdo interessante no site
[internetsegura.br](https://internetsegura.br/). Tem conteúdo para jovens, adultos, conscientização e muito mais. Vale a
pena a visita.

### Conclusão

Dá trabalho ficar seguro, né? Espero que tenha sido útil. Se esqueci ou errei alguma coisa comentem abaixo. Quem sabe
não sai uma continuação deste post com as dicas de vocês?
