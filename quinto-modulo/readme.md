# React I - Fundamentos e React OO

- Introdução a biblioteca React
- Criação de components com React

1. Frameworks e bibliotecas

Framework !== biblioteca

Framework controla o fluxo da aplicação, escrevemos a aplicação para rodar nele. Já a biblioteca é uma coleção de funções ou classes para reuso.


2. O que é o React? 

- Biblioteca Javascript utilizada para construção de interfaces. Funciona somente na interface do usuário, a View do MVC.

2.1 React e ReactDOM

- ReactDom é biblioteca para manipular o DOM. 

2.2 Virtual DOM

- O navegador cria um DOM para ser manipulado. 
- O React cria um outro DOM, chamado de Virtual DOM.
- O Virtual DOM se sincroniza com o DOM do navegador.
- A atualização da página fica a cargo do React.

2.3 SPA

- Aplicação que carrega apenas uma única página HTML
- Qualquer interação é realizada via JavaScript e este atualiza o conteúdo, com isso a página não é recarregada

2.4 Por quê o React?

- Trabalhar com a API do DOM é difícil
- Com React podemos descrever nossas interfaces como funções, modo declarativo
- Utiliza somente JavaScript.

3- Create React App

É uma CLI que inicializa uma aplicação React com todas as dependências configuradas.

4- JSX

O JSX é uma extensão de sintaxe para Javascript utilizada para escrever elementos de UI.
O JSX produz elementos do React.

5- Components e Props

- Components permitem dividir a UI em partes independentes, reutilizáveis e isolados.
- São como funções Javascript
- Elas podem receber parâmetros que no React chamamos de **PROPS**

6- Ciclo de vida

Um ciclo de vida são as fases de nascimento, crescimento e morte de uma componente.

- No React essas fases são definidas como:
  - Montagem
  - Atualização
  - Desmontagem

- Fase de criação do compenente na página
  - Chama a função constructor para inicilização dos valores das propriedades, é chamado apenas 1 vez.
  - Após o constructor o render é chamado, ele retorna o código do componente.
  - Quando o render termina o componentDidMount é chamado, nele utilizamos as chamadas a API, event listeners
- 