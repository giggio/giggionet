---
title: Data Centers and Digital Sovereignty
date: 2025-07-02T15:00:00-03:00
slug: data-centers-and-digital-sovereignty
comment_term: data-centers-and-digital-sovereignty
author: Giovanni Bassi
featureImage: images/dc-deserto.png
featureImageAlt: A data center in the middle of the desert
feature_image_list_top_offset: "23%"
categories:
  - politics
tags:
  - data center
  - artificial intelligence
  - sustainability
  - cloud
summary: |
  The data center initiative proposed by the federal government has many problems. Let's dive deep into them and
  explore alternatives.
---

The Brazilian government, in May 2025, was in the USA to meet with big techs and discuss investments in data
centers in Brazil. I will argue why the proposals presented by the government are bad for the Brazilian people and
for the national economy, as well as point to a possible alternative path for an initiative of this kind.

### Federal government proposals

The federal government's project can be summarized in five main points:

1. Exemptions from IPI, PIS/Cofins, and Import taxes for 5 years
    > Named Redata, the program provides exemptions from IPI, PIS/Cofins, and import tax on equipment for
    > five years. According to estimates from the Ministry of Finance, the framework can boost up to R$ 2 trillion in
    > investments over the next decade. [^CNN-Haddad-apresenta-proposta-para-atração-de-data-centers-nos-eua]
2. No study presented
    > The departments limited themselves to saying that "the national data center policy is being developed, still in
    > study phase, by the federal government based on the joint work of various sectors and ministries" and that
    > "technical meetings are being held with all involved sectors and there is no conclusion at the moment." [^Haddad-foi-aos-eua-atrair-investimentos-em-data-centers]
3. Expectation of R$ 2 trillion investment in 10 years
    > The department led by Haddad has repeatedly stated that this new policy can unlock about R$ 2 trillion in
    > investments over the next ten years. [^Haddad-foi-aos-eua-atrair-investimentos-em-data-centers]
4. Transfers of gross revenue
    > As anticipated counterparts in the policy, the government plans to require data center companies to transfer
    > 2% to 8% of their gross revenue to the National Fund for Industrial and Technological Development (FNDIT). The
    > fund aims to foster domestic technological development. [^Haddad-foi-aos-eua-atrair-investimentos-em-data-centers]
5. 10% capacity reserved for the domestic market
    > Another counterpart would be the requirement that 10% of the data centers' processing capacity be reserved for
    > the domestic market. The intention is to prevent foreign companies from coming to Brazil only to take advantage
    > of the benefits while continuing to serve international demand. But, according to experts, verifying whether
    > this requirement is being met is technically difficult. [^Haddad-foi-aos-eua-atrair-investimentos-em-data-centers]

**Official sources:**

* Haddad details Data Center Policy at conference in the USA (Agência gov) [^gov-Haddad-detalha]
* Haddad presents sustainable growth plan and announces Data Center Policy at conference in the USA
  (Ministry of Finance) [^MF-Haddad-apresenta]

At first glance, the initiative sounds great: trillions of reais in investments in a cutting-edge industry. But the
proposal inflates the numbers — far from business reality and Brazil’s actual needs — and ignores the fact that, if
implemented as-is, it would result in yet another case of capital outflow, exploiting our natural resources and labor,
with no real compensation in return.

### Unrealistic promises

#### R$ 2 trillion investment

The figure of R$ 2 trillion over ten years (roughly US$ 350 billion), or R$ 200 billion per year (US$ 35 billion),
is unrealistic. Here’s why:

1. A modern data center costs between US$ 500 million and US$ 1.5 billion. I’ll use the average of US$ 1 billion in
   this article for cost and output estimates.
2. Combined, the three largest cloud providers operate over 500 data centers ([117
   AWS](https://web.archive.org/web/20250613020146/https://aws.amazon.com/about-aws/global-infrastructure/), [300
Azure](https://web.archive.org/web/20250618000637/https://news.microsoft.com/datacenters/), [127
GCP](https://web.archive.org/web/20250615205748/https://cloud.google.com/about/locations)), and Brazil has 163 (MDIC
[^Neofeed-entrevista]).
3. To reach R$ 2 trillion, Brazil would need 350 new data centers in ten years — a 64% increase over the global
   infrastructure of the top three clouds, and 214% more than the number of data centers currently in Brazil.
4. If we considered smaller data centers at US$ 100 million each, we’d need 3,500 of them.

If such an investment were to happen, the project’s assumptions wouldn’t hold: sustainability, allocating part of the
processing power to Brazil, job creation, and so on. I’ll dig deeper into these and other aspects of the project,
showing that the numbers are unachievable, and that even if we got close, the result would be dysfunctional — in some
cases going in the opposite direction of what the project claims to want. I’ll work with 50% of the proposed figure —
175 data centers in ten years — an optimistic scenario, but already strategically unfeasible based on the arguments that
follow. Even far below the proposed value, the negative impact would already be substantial.

#### Job creation

The government hasn’t shared job creation estimates, but the Secretary of the Ministry of Development, Industry,
Commerce, and Services said that "on average, each data center creates 166 direct jobs," according to Neofeed
[^Neofeed-entrevista].

They already know the impact on this front is small. And it’s true: modern data centers require modest staffing. They
are industrially operated, need little constant intervention, and a large part of operations can be done remotely.

This is confirmed by countries more advanced than Brazil in this area:

> In the United States, for example, employment numbers have shown that data centers don't generate as many jobs as
> expected. While a larger workforce is needed to build these structures, the number shrinks when it comes to the
> operation of data centers. In Abilene, Texas, around 1,500 people are building Stargate's first data center. But after
> it is completed, only 100 full-time employees will work at the facility, according to a Wall Street Journal report
> from February. [^tech-policy]

So maybe Brazilians will participate in the technological development of these data centers, right? Not really. That
investment is globalized, managed by teams built up over the past decades. We might get some peripheral demand, but
nothing central to the operation.

A large data center might generate up to 300 direct jobs — an optimistic figure — which I’ll use in the estimates below.
I’ll disregard indirect jobs, such as in R\&D, for reasons already discussed in the previous paragraph.

Even if 175 data centers were built (they won’t be), assuming twice the number estimated by the MDIC (300 jobs per data
center), only 53,000 direct jobs would be created. With around 110 million economically active people in Brazil (PEA -
Dec/24) [^pan-macro], that represents a measly 0.05% growth in the current workforce. Unemployment in Brazil is
currently low (historically speaking), but even if it were high, the impact would be negligible.

It’s important to remember that it’s demand — not companies — that creates jobs. The demand for data center labor
already exists, as the world needs more of them, but under the current project, even if the center is built in Brazil,
that demand will remain concentrated abroad and highly mechanized (even there). For the demand to appear in Brazil, we’d
need to develop and run the high-tech needs of these data centers ourselves. I’ll expand on this in the alternative
proposals at the end, but it’s important to remember that not all job demand is necessarily good. If we started a
project to cut down the entire Amazon, we’d employ thousands of people — but that’s not work that benefits the Brazilian
people. It’s not about generating demand, but about what kind of demand we want to encourage.

#### Technology transfer

We shouldn’t expect access to cutting-edge technologies, which are closely guarded secrets by data center operators.
These companies don’t share their industrial secrets with potential competitors — let alone with a foreign government.

If we want to develop our own data centers, it won’t be using the technology of the Silicon Valley companies the
government spoke with.

Brazil also doesn’t develop advanced logic or memory chips, the kind required by this type of data center — they would
all be imported tax-free. Developing an industry in this area would take decades anyway, and it’s not on the agenda of
any influential politician today.

#### Tax revenue gains

We’re also not going to collect much in taxes from these foreign-owned data centers. The government is
proposing exemptions from IPI, PIS, Cofins, and import taxes. It’s set for five years, but we know how these benefits
tend to get renewed indefinitely — the government is currently facing a crisis on this front, trying to revoke past
benefits, without success.

Even the purchase of equipment — servers, switches, etc. — could be made abroad, with funds transferred from one
multinational to another, never passing through Brazil, never paying IOF or any other tax. And import taxes would be
exempt (but not when you buy a processor for your home or business).

BNDES is even planning to finance part of the effort. So not only would we fail to collect taxes, Brazilian society
would actually be financing foreign companies in their extractive efforts with billions of reais [^BNDES-FUST]
[^MC-BNDES], and even donating half a billion reais to build data centers and other infrastructure for AI initiatives
[^ia-bem-todos].

The proposed 2% to 8% revenue transfer to FNDIT is a good idea and perhaps the only real counterpart offered so far, but
it’s clearly not enough.

#### Reserving 10% for domestic processing

Today, there are only a few public cloud regions in Brazil: two from Azure, and one each from AWS and GCP — all launched
years ago, with a good portion of their processing already targeting Brazil and South America.

We also have other data center companies operating here. Numbers vary, but there are around 175 publicly offered and
another 100 or so private [^brazil-data-center-portfolio] [^data-centers-in-brazil]
[^brazil-data-center-market-growth]. MDIC estimates 163 data centers in Brazil [^Neofeed-entrevista]. The number
varies because the methodology for counting a data center varies too (private, public, size, etc.).

This is already a mature market. New data centers operating here, at the proposed scale, would have almost all of their
processing aimed abroad. To be blunt: exported.

### Environmental impacts

If there’s one glaring omission in this project, it’s the Ministry of the Environment. As we’ll see next, the
environmental impacts are significant, and without careful attention to the sustainability of these initiatives, we put
the future of Brazilians at risk. We’re talking about the exploitation of natural resources — and the ministry
responsible for overseeing this area is absent from the project [^intercept-boiada]. Why?

#### Electricity demand

According to Empresa de Pesquisa Energética (EPE – a state-owned company), in its 2024 national energy report
[^balanço-energético] and executive summary [^balanço-energético-síntese], Brazil generated 708 TWh (terawatt-hours)
of electricity in 2023. A cloud data center from one of the three major providers consumes on average 100 MW, which adds
up to about 876 GWh per year. In other words, just 808 of these data centers would consume the entirety of Brazil’s
electricity production. The (unrealistic) government projection of building about 350 data centers would require a 43%
increase in electricity generation — and that’s not even considering the needs of the population or other industries.
Between 2014 and 2023 (ten years), growth was only 18%, or 112 TWh, while GDP growth in the same period was 5.7%. So,
while energy production has outpaced economic growth, it still falls far short of what would be needed to meet such
demand.

Even if only half of the government’s proposed investment were realized, production would still need to increase by
21.7% — in a country that already frequently faces blackout threats. We’re talking about an additional annual demand of
153 TWh, which is 36% more than the growth of the last decade — and again, that’s without factoring in other sectors or
the data centers already in the pipeline.

The National Electric System Operator (ONS) also identified data centers as major upcoming consumers in its medium-term
energy studies for 2025–2029 [^sumário-ONS]. According to the report:

> Forecasts from the Ministry of Mines and Energy (MME) project 10.5 GW of electricity demand from data centers by 2037,
> in the Southeast, Northeast, and South regions.

This forecast doesn’t even include the new projects that would be spurred by the government’s proposed policy. Again, if
175 new data centers were built, the added demand would reach 17.5 GW, or 153.3 TWh per year. That’s 166% beyond the
forecast for the next 12 years — squeezed into just 10 — and current demand is already heavily concentrated in São
Paulo, which hosts nearly 70% of existing data centers. Meanwhile, half of the forecasted electricity demand is
concentrated in Rio Grande do Sul, creating bottleneck challenges (data from EPE [^webinar-data-center]).

We also need to consider that building a data center — even when starting from the planning phase — typically takes
significantly less time than building the required energy infrastructure. A large data center usually takes around
three years to complete, while smaller ones can be ready in under a year. In contrast, building power transmission lines
— from planning to deployment — takes at least four and a half years (58 months), and can stretch to nearly nine years
(104 months), again according to EPE [^webinar-data-center]. The uncertainty around this potential growth is one of
the biggest planning challenges, according to EPE, and it puts both residential and industrial consumers at risk — as
well as the viability of the data center projects themselves.

#### Water demand

Microsoft claims to be highly focused on minimizing environmental impact. On its page about sustainability and data
center efficiency [^energy-efficiency-microsoft], it publishes a table stating that it uses, on average, 0.3325 liters
of water per kWh.

Given that a modern data center consumes around 876 GWh per year, this translates to 291 million liters of water
annually (876 million kWh times 0.3325). According to a UOL article [^lucro-Sabesp], Sabesp produced 815 million liters
of water in the first quarter of 2025. Extrapolating, that’s 3.2 billion liters per year, supplying 29 million people
across 375 municipalities [^perfil-Sabesp].

A *single* data center would require almost 9% of that total. Half of the government’s goal — 175 data centers — would
be devastating. There simply isn’t enough water.

There are lower-impact water recirculation technologies available — but they are more expensive. In a public program
with no incentives for investment, in a peripheral country exploited by multinationals seeking deregulation, it’s highly
unlikely these would be adopted.

### Who benefits?

An analogy illustrates well what’s being proposed. Imagine the government owns a vast rural property, suitable for
agricultural and livestock investments, but currently inactive. Seeing all this potential going to waste, it decides to
stimulate the economy. It talks to foreign investors and offers all sorts of incentives for them to occupy this idle
land. They agree and, in return, offer to pay 2% to 8% of the revenue generated from using the property — and all
production will be mechanized. Our land would be used to feed the world, our natural resources — which belong to all
Brazilians — would be handed over to foreign nations, enriching only a few intermediaries along the way.

Back to the real scenario: with no significant job creation, no technology transfer, and no meaningful tax revenue, but
enormous pressure on our natural resources, it becomes clear that the only real winners would be the foreign companies
that take the deal — along with those who profit from the commercialization of natural resources, like companies trading
in energy and water. There would be some secondary, non-strategic gains — for example, low-value suppliers of products
and services. But it’s not as if selling and maintaining air conditioners is going to change Brazil’s situation in any
meaningful way.

So once again we return to the core question: What is Brazil’s strategic interest in this project?

**This is a debate about the exploitation of our natural resources.**

> Around 12% of the planet’s freshwater is in Brazilian territory. While the North region holds roughly 80% of the
> country’s available water, regions near the Atlantic Ocean hold less than 3% of Brazil’s water resources. [^ebc-água]

Our energy matrix is mostly renewable, lowering the environmental compensation costs for the companies that own the data
centers. But the destruction caused by hydroelectric plants — and all other externalities — is borne by the Brazilian
people. If we’re going to exploit this potential, the question is: why? What does Brazil gain?

**This is a debate about capital outflow.**

These companies are looking for cheap water and energy in Brazil to export processing capacity — a modern version of
soybean exports, with far greater demands and no real benefits in return.

> So you process the data here and send it abroad. Folks, this is nothing more than exporting energy. Right now we have
> a 20% energy surplus in an industry that's only just starting to recover, and still slowly. This is our chance to grow
> our energy consumption by exporting clean energy, which is exactly what this industry demands. [^webinar-data-center]

Gustavo Estrella - CEO of CPFL Energia

### Real need

As we’ve already seen in the section on electricity demand, the Ministry of Mines and Energy (MME) is forecasting a 10.5
GW increase over the next 12 years — without *any* additional incentives. Assuming 100 MW per data center, that comes
out to just over 100 new data centers in the period — or roughly ten per year. This already represents a 64% growth,
based on the current number of 163 data centers, according to the Ministry of Development, Industry, Trade and Services
(MDIC) [^Neofeed-entrevista].

The numbers vary, and it’s hard to be precise, but other sources confirm [^brazil-dc-portfolio] this level of growth.
While there may be some shortage in this market, it’s already being addressed. There’s already immense interest in
Brazil’s data center market, with concrete investments underway, such as Scala Data Centers’ project in Rio Grande do
Sul [^Scala-RS], currently one of the largest in the country.

Industry players claim processing costs are high in Brazil, arguing it’s due to an imbalance between supply and demand.
In reality, the imbalance comes mainly from other causes — the infamous “Brazil cost” also affects the tech sector. It’s
no surprise that the country with the highest real interest rate in the world also faces high operational costs. The
real issue isn’t a lack of incentives for data centers — it’s how Brazilian society is structured, choosing to reward
rent-seekers rather than labor and innovation.

There is national demand, and we already have projects underway to meet it. What’s really at stake in the new federal
proposal is whether Brazil wants to serve foreign demand by exporting capital while exploiting its own natural
resources.

### Railroading through

When data centers in Brazil became a topic of public debate, a range of actors began lobbying to influence related
matters. And it’s showing results — some authorities are already echoing those interests.

One example is the discussion around artificial intelligence regulation — or any sort of regulation on technology at
all. The data center sector is actively pushing for no regulation [^dc-retirada], claiming that a deregulated
environment is essential for the installation of these extractive data centers.

Some relevant statements from these areas:

> In December 2024, while the Senate was debating a bill to regulate artificial intelligence, the data center sector
> published a letter requesting the removal of an article that would have mandated payment of royalties to content
> owners for material used to train AI. [^intercept-boiada]
<!-- markdownlint-disable-line MD028 -->
> According to Alckmin, the main bottleneck for AI worldwide
> is energy, and Brazil, he said, “has abundant and renewable energy”. [^valor-Alckmin]
<!-- markdownlint-disable-line MD028 -->
> Technology and digital
> infrastructure are a win-win agenda for Brazil and the US. Our role is to help ensure the regulatory environment keeps
> pace with that ambition.  [^CNN-Haddad-apresenta-proposta-para-atração-de-data-centers-nos-eua]

Fabrizio Panzini, Director of Public Policy at Amcham

This kind of initiative is opportunistic — it has no real connection to building data centers in Brazil. If the
government’s proposal only requires 10% of processing to stay local, then the vast majority — the other 90% — would be
exported and not subject to Brazilian regulation.

The processing of Brazilian citizens’ data should be governed by strict legal standards and aligned with the values of
Brazilian society — which doesn’t want to see its data mined by foreign companies. The demand for data centers in Brazil
already exists under current regulations, and the argument that deregulation is necessary to attract interest is
simply false. The interest is already here.

### Brazilian AI

The federal government is already planning the creation and promotion of a Brazilian artificial intelligence initiative
[^ia-bem-todos]. While such an effort does require computing resources, it has no direct connection to the proposal of
bringing in foreign companies to exploit our resources through a data center project.

First, it’s important to distinguish between training an AI model and running it. Running a model scales like any
other computing service — it grows with demand. Training, on the other hand, requires a large upfront investment before
any result can be seen. And as companies like China’s DeepSeek have already demonstrated, it’s possible to train models
more cheaply using distilled (derived) models, and there are also already-pretrained models available.

But the bigger issue here is something else — and I’ll only touch on it briefly: building an AI isn’t something you pay
for once and then it’s done. It needs constant updates; it’s a continuous investment project. The Brazilian state is
currently struggling to maintain fiscal balance, and it needs to seriously consider whether this should be a priority.
The way this topic is being discussed, it gives the impression that it would be a one-time expense. It’s not.

Some are concerned that Brazil will miss the opportunity to join the AI race. But if Brazilian companies or the
government decide to enter this market and compete on equal footing with global leaders, the main challenge won’t be the
current or future supply of processing power. The current market is already mature.

### Alternative proposals

There are several ways to invest in data centers in Brazil. Let’s go through the alternatives, from worst to best.

#### “National champions”

This is the model China has adopted. Unsurprisingly, they now compete with Western cloud providers on equal footing.
This model involves incentivizing private companies, within a strategic framework. There are serious distortions in this
kind of setup, as it creates a new tech oligarchy — or reinforces an existing one — and Brazil has been ruled by the
same oligarchies since the time of slavery.

But there’s a problem with copying the Chinese model: the Brazilian state does not steer the economy strategically like
China does. There’s a high risk that such investment would fail and end up enriching a few capitalists in another
chapter of accumulation and patrimonialism (*br: patrimonialismo*). There’s a world of difference between a country that
plans 25 years ahead and one that fights every week to push through basic state policies. So we’d have to accept the
creation of large, functional companies that would be corrupt and uninterested in improving life for the Brazilian
people — though at least the investments would remain here. Until, of course, a new government came along and allowed
those companies to be sold to foreign capitalists — exactly what happened to our aerospace industry
[^capital-estrangeiro-aéreas], once considered strategic for national defense and sovereignty, until it wasn’t anymore.

This is a bad model — one we’ve tried before and that is doomed to fail because it relies on the good will of oligarchs
and monopolists.

#### Foreign companies + real counterparts

Assuming we are willing to hand over our natural resources to foreign companies, we can still demand something in return
that isn’t pure surrender and could actually benefit the Brazilian people. Let’s remember: we are under no obligation to
give up our resources. If there’s external interest, we have the sovereign right to negotiate.

The first steps are obvious: undo the harmful proposals already outlined — reinstate taxes, enforce regulation, require
technology transfer. But we can go further. For example, to offset water and energy consumption, we could require that
data centers be built alongside sustainable infrastructure, such as solar panels and closed-loop water cooling systems —
more expensive, yes, but far less wasteful.

We could also require partnerships with national companies, just as China does. Foreign firms could operate here, but at
least 51% of the capital and operation would need to be held by a company with domestic ownership. This would also help
drive technology transfer. But it’s important to recall what I pointed out earlier: large cloud providers are not
interested in sharing their technology or forming joint ventures. Measures like this would push them away. Just look at
how many don’t operate in China for precisely this reason — not because of so-called censorship. We know by now that the
West is willing to work with any (so called) authoritarian regime that makes strategic sense — but sharing technology
never does.

This model might be beneficial, but it doesn’t move the country forward strategically. Brazil would act like a landlord
renting property to an entrepreneur at a fair rate: we wouldn’t be the entrepreneurs ourselves, and we wouldn’t advance
in terms of sovereignty or national development. Still a bad deal.

#### Public investment in data centers

This could be done with or without private partnerships, and it’s the model we adopted with Petrobras. Drawing that
parallel, it’s important to remember that Petrobras is constantly under attack — politicians often want to privatize it,
and both domestic and foreign oligarchies dream of owning this market. We saw the consequences of that recently with the
sale of refineries, which led to higher fuel prices (and increased inflation), and the sell-off of BR Distribuidora,
which stripped the state of its ability to pass on international oil price reductions to consumers. As a result, lower
oil prices benefited only a few, rather than the majority — and once again, the government lost an important tool of
monetary policy.

Now imagine what would have happened if Petrobras and its predecessors had not been created. Brazil would never have
found oil and would now be completely dependent on imports, unbalancing its already fragile trade balance. Or, if the
oil had been found, its exploration would be in foreign hands, and we’d receive little from the exploitation of our own
natural resources — the outcome would have been purely financial.

The parallels are obvious. This is the only option that truly makes sense. The creation of a competent, national,
state-owned tech industry — just like we did with oil — would ensure that the benefits of exploiting Brazilian natural
resources with technology actually stay in Brazil. It would face the same challenges as Petrobras: corruption,
inefficiency, and so on. But it’s still better than the alternatives.

That said, the oil-data center analogy has its limits. The data center market is very different. Petrobras is a
monopolist in a protected market, while a state-owned data center initiative would face fierce competition from
established domestic and foreign players. Any such project would need to be designed with that reality in mind.

This is the best alternative if Brazil’s long-term interests are taken seriously — but it’s not an easy path. It’s made
harder by the fact that such a project would only bear fruit in decades. It would require commitment from successive
governments — often from opposing parties and ideologies. How do you ensure a 25-year plan in a country facing constant
political instability? This kind of initiative requires a state policy, not a government policy.

### Sovereignty and cutting-edge technological development

Brazil must decide whether it wants to be part of cutting-edge technological development — in areas like logic
processors, memory, and software — or remain dependent on foreign partners. Today, such development happens in countries
that do not see us as partners, but as consumers. The current hardware production network is concentrated in just a few
countries, like the Netherlands, Taiwan, the U.S., and South Korea, with China pushing ahead and showing it may become
the leader in this field within a decade, more or less — and doing so with less reliance on foreign suppliers. China
took 40 years to reach this position, always through centralized planning, where companies are expected to execute
what’s laid out in national strategic plans that serve the needs of the country. Without a similar strategic direction,
any effort on our part is doomed to fail.

Forget about any partnership for strategic technology transfer with ASML, TSMC, Samsung, Intel, AMD, Microsoft, Google,
or any other similar company — such initiatives are simply not in their interest. But there is the possibility of
discussing a partnership with China. Perhaps the BRICS framework can also open space for such a relationship, and this
kind of alliance could allow Brazil to take a leading role in just over a decade. That is the only viable option I see
in the current global context, and it depends entirely on China’s willingness — which, it’s worth noting, has shown
signs of interest [^green-push].

Such an initiative would allow the creation of a national hardware and software market that could support the
development of sovereign data centers in Brazil, while also advancing the country’s overall sovereignty. Any other
effort might yield short-term economic benefits, but would lock us into dependence, with no real autonomy, since all the
technology would come from abroad. And if we’re going to accept such dependence, it makes no sense to do it with
countries that don’t consider us part of their bloc (e.g., the U.S., Europe, Japan, etc.).

Meanwhile, the Brazilian government has already launched a plan to build a sovereign cloud and has invested R$1.2
billion in it [^repatriar-dados]. That initiative could be positive — if it weren’t relying on foreign software
[^nuvem-Serpro] to manage the data centers. Leaving aside the (unnecessary) costs of such a project, one thing must be
made clear: there is no such thing as sovereignty when the brain of the so-called sovereign cloud is built with foreign
technology, which may contain strategically placed vulnerabilities — usable to extract data from Brazilians or even shut
down the entire operation in a scenario of conflict or sanctions. This kind of infrastructure must be treated as a
matter of national security, like military technology.

Relying on foreign proprietary software for something this strategic is lazy. There are open-source-based technologies
available to build a national solution, and Brazil has enough talent to make that work — as demonstrated by Magazine
Luiza when it repatriated several Brazilians to build its own cloud infrastructure.

Another topic that should be central to this conversation about technology and sovereignty is education — yet it's
absent from all the plans mentioned by those involved in the federal government’s data center project. Brazil already
suffers from a serious shortage of tech professionals and a significant brain drain. Not only do we fail to train enough
people for high-tech fields, we also lose a big chunk of those we do train to foreign countries — yet another form of
capital export. There is no future for technological sovereignty without brains, and yet this issue is shockingly left
out of the conversation. The Ministry of Education is just as absent from this debate as the Ministry of the
Environment.

### Conclusion

Brazil has had a mature data center market for decades. It is a competitive industry with a large number of new projects
currently underway — many of which pay taxes and are operated by companies with Brazilian capital.

The current proposal is a disaster for Brazil. The government needs to listen to our experts and build a long-term
strategy that guarantees sovereignty and sustainability — rather than behaving like a servant to foreign interests. We
are a globally valued market; we must develop our potential based on our sovereign interests, generating positive
outcomes for the entire Brazilian population — not at their expense.

### To learn more

* [Why do data centers consume so much water and energy? (Intercept Brasil)](https://youtu.be/lHYyRY1Zm4Y?si=df-aF6MHYK-IbO-M)
* [Breaking Barriers to Data Center Growth (Boston Consulting Group)](https://www.bcg.com/publications/2025/breaking-barriers-data-center-growth)
* [Data centers in the Northeast, minerals in Africa, profits in Silicon Valley (Le Monde Diplomatique Brasil)](https://diplomatique.org.br/data-centers-no-nordeste-minerios-na-africa-lucros-no-vale-do-silicio/)
* [Experts warn Congress about environmental deadlock with AI advances (Agência Senado)](https://www12.senado.leg.br/noticias/materias/2025/05/30/especialistas-alertam-congresso-sobre-impasse-ambiental-com-avanco-da-ia)
* [The Strategic Role of EPE Amidst the Data Center Boom (EPE)](https://open.spotify.com/episode/6rGtPxoWhb5qx0vOsgZTbO)
* [“AI City”: Billion-dollar Data Center Project Advances in Eldorado do Sul (Intercept Brasil)](https://youtu.be/zOR9l5XMPgE?si=_laSvOTLhd5MLWf7)
* [Draining cities dry: the giant tech companies queueing up to build data centers in drought-hit Latin America (The Guardian)](https://www.theguardian.com/global-development/2025/may/22/datacentre-drought-chinese-social-media-supercomputers-brazil-latin-america)
* [Power struggle: will Brazil’s booming data center industry leave ordinary people in the dark? (The Guardian)](https://www.theguardian.com/global-development/2025/mar/04/brazil-power-electricity-energy-poverty-datacentre-boom)
* [Reducing the energy footprint of data centres: sustainable solutions for a global challenge (European Sustainable Energy Week - EUSEW)](https://www.youtube.com/live/iAKpxrvXgq4?si=cAE1zpQO5oCIcRIO)
* [Conversation about the data center project (Tecnologia e Classe - TeClas)](https://youtu.be/nGid6Om96ZM?si=qVp-tJmY2gve2KmW)
* [Panel on the data center project (Inimigos do hAIpe)](https://youtu.be/LXRrzAKNtpk?si=_I4vz82E8e2spGyl)

### References

[^brazil-data-center-portfolio]: [Brazil Existing & Upcoming Data Center Portfolio (Arizton)](https://web.archive.org/web/20250419115457/https://www.arizton.com/market-reports/brazil-data-center-portfolio)
[^data-centers-in-brazil]: [Data centers in Brazil (Cloudscene)](https://archive.ph/Mfoc3)
[^brazil-data-center-market-growth]: [Brazil Data Center Market Growth Analysis Report 2025-2030 (Research and markets)](https://web.archive.org/web/20250327140431/https://www.globenewswire.com/news-release/2025/03/27/3050435/0/en/Brazil-Data-Center-Market-Growth-Analysis-Report-2025-2030-5-95-Bn-Investment-Opportunities-in-IT-Electrical-Mechanical-Infrastructure-General-Construction-and-Tier-Standards.html)
[^webinar-data-center]: [Webinar - Data Center Energy Planning (EPE)](https://youtu.be/X_yfhHr45kI?si=77E5gqq9ZFqJYhMT)
[^BNDES-FUST]: [FUST BNDES – Telecommunication Services Universalization Fund – Data Center and Core Network (BNDES)](https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/fust-datacenter)
[^MC-BNDES]: [New credit line for data centers will include FUST and BNDES resources (Ministry of Communications)](https://www.gov.br/mcom/pt-br/noticias/2024/setembro/nova-linha-de-credito-para-data-centers-contara-com-recursos-do-fust-e-bndes)
[^ia-bem-todos]: [AI for the Good of All (Ministry of Science, Technology and Innovation)](https://web.archive.org/web/20250201140149/https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2024/07/plano-brasileiro-de-ia-tera-supercomputador-e-investimento-de-r-23-bilhoes-em-quatro-anos/ia_para_o_bem_de_todos.pdf/view)
[^CNN-Haddad-apresenta-proposta-para-atração-de-data-centers-nos-eua]: [Haddad presents proposal to attract data centers to the USA (CNN)](https://archive.ph/BaRYR)
[^Haddad-foi-aos-eua-atrair-investimentos-em-data-centers]: [Haddad went to the USA to attract data center investments without showing what Brazil gains (Intercept Brasil)](https://archive.ph/tE5KN)
[^Neofeed-entrevista]: [Government prepares plan to make Brazil a “data center powerhouse” in 10 years (Neofeed)](https://archive.ph/B7RQV)
[^tech-policy]: [Brazil is Handing Out Generous Incentives for Data Centers, But What it Stands to Gain is Still Unclear (Tech Policy Press)](https://web.archive.org/web/20250522234821/https://www.techpolicy.press/brazil-is-handing-out-generous-incentives-for-data-centers-but-what-it-stands-to-gain-from-it-is-still-unclear/)
[^valor-Alckmin]: [Alckmin says government will launch Redata soon, policy to attract data centers and AI (Valor)](https://archive.ph/ZlbsS)
[^intercept-boiada]: [The AI push-through (Intercept Brasil)](https://archive.ph/OIc6a)
[^ebc-água]: [Where is the water in Brazil? (EBC)](https://www.ebc.com.br/especiais-agua/agua-no-brasil/)
[^pan-macro]: [Macroeconomic Overview (Ministry of Finance - Feb/25)](https://web.archive.org/web/20250625152321/https://www.gov.br/fazenda/pt-br/central-de-conteudo/publicacoes/conjuntura-economica/panorama-macroeconomico/2025/panmacro_spe_slides_-fevereiro2025.pdf)
[^balanço-energético]: [National Energy Balance 2024 (EPE)](https://web.archive.org/web/20250602182652/https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/balanco-energetico-nacional-2024)
[^balanço-energético-síntese]: [Summary Report of the National Energy Balance 2024 (EPE)](https://web.archive.org/web/20250619213633/https://www.epe.gov.br/sites-pt/publicacoes-dados-abertos/publicacoes/PublicacoesArquivos/publicacao-819/topico-715/BEN_S%C3%ADntese_2024_PT.pdf)
[^sumário-ONS]: [Executive Summary PAR/PEL 2024 - Cycle 2025-2029 (ONS)](https://web.archive.org/web/20250625152946/https://www.ons.org.br/AcervoDigitalDocumentosEPublicacoes/Apresenta%C3%A7%C3%A3o%20Sum%C3%A1rio%20Executivo%20PARPEL%202024.pdf)
[^energy-efficiency-microsoft]: [Measuring energy and water efficiency for Microsoft data centers (Microsoft)](https://datacenters.microsoft.com/sustainability/efficiency/)
[^lucro-Sabesp]: [Sabesp’s net accounting profit grows 80% in 1Q (UOL)](https://archive.ph/mwd3E)
[^perfil-Sabesp]: [Profile (Sabesp)](https://web.archive.org/web/20250426202805/https://ri.sabesp.com.br/a-companhia/perfil/)
[^brazil-dc-portfolio]: [Brazil Existing & Upcoming Data Center Portfolio (Research and markets)](https://web.archive.org/web/20250624225321/https://www.researchandmarkets.com/reports/5983079/brazil-existing-and-upcoming-data-center-portfolio)
[^dc-retirada]: [Data centers request removal of copyright protections in AI regulation in Brazil (Folha)](https://web.archive.org/web/20250515194246/https://www1.folha.uol.com.br/tec/2024/12/data-centers-pedem-retirada-de-protecao-de-direitos-autorais-da-regulacao-de-ia-no-brasil.shtml)
[^capital-estrangeiro-aéreas]: [Government authorizes 100% foreign capital in Brazilian airlines (Ministry of Tourism)](https://www.gov.br/turismo/pt-br/assuntos/ultimas-noticia/governo-edita-mp-para-abertura-total-do-capital-estrangeiro-em-aereas-brasileiras)
[^green-push]: [Brazil looks to China for green push (China Daily)](https://web.archive.org/web/20250529073914/https://www.chinadaily.com.cn/a/202505/28/WS683661cba310a04af22c1e31.html)
[^repatriar-dados]: [Lula government has already spent R$ 1.2 billion to repatriate Brazilian data and build a “sovereign cloud” (Folha de São Paulo)](https://archive.ph/q9Txi)
[^nuvem-Serpro]: [Serpro’s sovereign cloud uses Google Cloud (Baguete)](https://web.archive.org/web/20250202172125/https://www.baguete.com.br/noticias/nuvem-soberana-do-serpro-usa-google-cloud)
[^gov-Haddad-detalha]: [Haddad details Data Center Policy at conference in the USA (Agência gov)](https://agenciagov.ebc.com.br/noticias/202505/haddad-apresenta-plano-de-crescimento-sustentavel-e-anuncia-politica-de-data-centers-em-conferencia-nos-eua)
[^MF-Haddad-apresenta]: [Haddad presents sustainable growth plan and announces Data Center Policy at conference in the USA (Ministry of Finance)](https://www.gov.br/fazenda/pt-br/assuntos/noticias/2025/Maio/haddad-apresenta-plano-de-crescimento-sustentavel-e-anuncia-politica-de-data-centers-em-conferencia-nos-eua)
[^Scala-RS]: [With R$ 3 billion investment, State and Scala Data Centers sign agreement for the largest digital infrastructure project in RS](https://web.archive.org/web/20250503134116/https://www.estado.rs.gov.br/com-investimento-inicial-de-r-3-bilhoes-governo-do-rs-e-scala-data-centers-assinam-acordo-para-o-maior-projeto-de-infraestrutu)
