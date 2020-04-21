# Módulo 1

## Visão geral sobre a interação cliente / servidor

O ato de usar o navegador para acessar um site é o que chamamos de relação cliente/servidor.

O cliente é responsável por pedir e exibir as informações para o usuário - Front-end

O servidor é responsável por armazenar e gerar as informações e enviá-las ao cliente - Back-end

## Visão geral sobre o HTML e CSS

### HTML

As informações que o navegador recebe são arquivos textos do tipo HTML, CSS ou JS para renderizar o conteúdo na tela.
O HTML (Hypertext Markup Language) é uma linguagem de marcação que conteúdo que serve para estruturar conteúdo em uma página WEB.
Seus elementos são chamados de tags, e sua extensão é `.html`

#### Exemplo HTML

```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
  <body>
</html>
```

### CSS

CSS (Cascading Style Sheets) ou folhas de estilo em cascata, é uma linguagem para estilização. Utilizamos para aplicar estilos às tags HTML. Seus elementos são chamados de propriedade e sua extensão é `.css`

Permite controlar

- cores
- fontes
- posicionamente
- espaçamento
- tamanho
- decorações
- transições

#### Exemplo CSS

```css
body {
  padding: 0;
  margin: 0;
  background: #222;
}
```

### FlexBox

Especificação da W3C para como os elementos do layout devem ser alinhados.

Para utilizar => `display: flex`

Propriedades mais importantes:

- `flex-direction`
- `justify-content`
- `align-items`
- `flex-wrap`

## Browser rendering

### DOM

O Document Object Model é a representação do código HTML da nossa página que o navegador gera na memória.
Sua estrutura é uma árvore de objetos.

### CSSDOM

O CSSDOM é o Objeto que o navegador utiliza para representar os estilos css na memória. Ele é uma representação em árvore, assim como o DOM.
