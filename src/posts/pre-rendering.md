---
title: 'Duas formas de pré-renderização'
date: '2020-01-01'
---

O Next.js tem duas formas de pré-renderização: **Static Generation** e **Server-side Rendering**. A diferença está em **quando** ele gera o HTML para uma página.

- **Static Generation** é o método de pré-renderização que gera o HTML no **tempo de compilação**. O HTML pré-renderizado é então _reutilizado_ em cada solicitação.
- **Renderização do lado do servidor** é o método de pré-renderização que gera o HTML em **cada solicitação**.

É importante ressaltar que o Next.js permite que você **escolha** qual formulário de pré-renderização usar para cada página. Você pode criar um aplicativo Next.js "híbrido" usando geração estática para a maioria das páginas e renderização do lado do servidor para outras.