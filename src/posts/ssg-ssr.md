---
title: 'Quando usar Geração Estática vs Renderização do lado do servidor'
date: '2020-01-02'
---

Recomendamos usar **Static Generation** (com e sem dados) sempre que possível, pois sua página pode ser criada uma vez e servida por CDN, o que torna muito mais rápido do que ter um servidor para renderizar a página em cada solicitação.

Você pode usar a geração estática para muitos tipos de páginas, incluindo:

- Páginas de marketing
- Postagens no blog
- Listas de produtos de comércio eletrônico
- Ajuda e documentação

Você deve se perguntar: "Posso pré-renderizar esta página **antes** da solicitação de um usuário?" Se a resposta for sim, você deve escolher Geração Estática.

Por outro lado, a geração estática **não** é uma boa ideia se você não puder pré-renderizar uma página antes da solicitação de um usuário. Talvez sua página mostre dados atualizados com frequência e o conteúdo da página mude a cada solicitação.

Nesse caso, você pode usar **Renderização do lado do servidor**. Será mais lento, mas a página pré-renderizada estará sempre atualizada. Ou você pode pular a pré-renderização e usar JavaScript do lado do cliente para preencher os dados.
