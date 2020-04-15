# INTRODUÇÃO

## EVOLUÇÃO DO HTML E CSS

### HTML

O HTML foi inventado em 1990 por Tim Berners-Lee. Foi inventado com o propósito da divulgação de trabalhos científicos.

Desde 1996 é mantido pela W3C
* HTML 1 (1991) - primeira versão, contava com 18 tags
* HTML 2 (1995) - upload de arquivos, tables
* HTML 3 (1997) - primeira versão sobre o comando da W3C
* HTML 4 (1997) - mecanismos para CSS, scripts, frames
* HTML 5 (2008) - mais semântica eacessibilidade na estrutura

### CSS
O CSS foi proposto em 1994 por Håkon Wium Lie, com influências de Bert Bos e da W3C.
Foi proposto como forma de "embelezar" mais as páginas HTML.

* CSS 1 (1996) - primeira versão
* CSS 2 (1997) - adicionou novas capacidades(:hover) e fez ela mais dinâmica
* CSS 3 (2011) - versão que utilizamos atualmente, adicionou media-queries
* CSS (2013) - Tab Atkins Jr., escreveu que não irá existir um CSS 4, será sempre o CSS.

## W3C E W3C Validator

### W3C

A W3C (The World Wide Web Consortium) é uma comunidade internacional responsável por desenvolver os padrões da Web.

Liderada por Tim Berners-Lee o o CEO Jeffrey Jaffe.

### W3C Validator
É um [serviço](https://validator.w3.org/) desenvolvido pela W3C para verificar se determinada URL está seguindo seus padrões

## Atomic Design 

### [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
> O Atomic Design é uma metodologia que nos ajuda a pensar na interface do usuário (UI) de maneira hierarquica e reforça a importancia da qualidade de petter libraries eficazes, e apresenta técnicas para otimizar o fluxo de trabalho de design e desenvolvimento em equipe. O Atomic Design também detalha o que acontece durante a criação e manutenção de sistemas de design, permitindo a implementação de UIs com mais consistência e qualidade.
> 

### Átomos

O Atomic Design é dividido em **Átomos** que são a menor para da matéria e servem como blocos de construção fundamentais que vão compor a inteface do usuário. Esses átomos incluem elementos básicos como `<label>`,`<input>`,`<button>` e outros elementos que não podem ser divididos sem deixar de ser funcionais.


### Moléculas
Já as moléculas são grupos relativamente simples de lementos da interface funcionando juntos como uma unidade. Por exemplo, um `<label>`, `<input>` de busca e um `<button>` podem se unir para criar a molécula **formulário de pesquisa**.

### Organismos
Os organismos são grupos de moléculas que formam uma parte distinda e relativamente complexa da interface. A molécula formulário de pesquisa,combinada com a molécula navegação, formam o organismo **header**.

### Templates
Templates são responsáveis poela estrutura da página onde distribuímos os componentes dando forma ao layout de definindo modelos a serem reutilizados eventualmente.

### Páginas 
São instâncias espefícias dos templates e mostram como é a interface do usuário com um conteúdo representativo real.