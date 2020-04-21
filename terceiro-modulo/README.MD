# Conceitos de Javascript

## Evolução do Javascript

É uma linguagem de programação criada por Brendan Eich em 1995 para a Netscape.
Foi inspirada por Java, Scheme e Self. Tem sintaxe de chaves, tipagem dinâmica,
orientação a objetos baseada em protótipos e funções de primeira classe.

É um dos cores da web ao lado de HTML e CSS

Seu primeiro nome foi Mocha, depois LiveScript, porém antes do lançamento oficial
mudou seu nome para Javascript para aproveitar a popularidade do Java na época.

Em 1995 a Microsoft lança o IE com o JScript como linguagem de script, dando início
a guerra dos browsers.

Em novembro de 96 a Netscape envia o JS para a ECMA International, com o intuido
de padronizar o JS para todos os navegadores e tirar o monopólio da MS.

- Junho 1997 ECMSScript 1
- Junho 1998 ECMSScript 2
- Dezembro 1999 ECMSScript 3

No início de 2000 a popularidade do IE era de 95% tornando o JScript a linguagem
do frontend. Sem a colaboração da Microsoft a especificação de ECMAScript 4 nunca saiu.

Em 2004 a Mozzila, sucessora do Netscape, lança o Firefox, que foi bem recebido
pelo mercado. Em 2005 eles entram na ECMA International e participam do trabalho
para a próximo versão do ECMAScript.

Em 2005, Jesse James Garret lança um artigo com o termo Ajax e descreve as
tecnologias das quais o Javascript era a sustentação para criar web applications.
Alguns bibliotecas são lançadas, como o jQuery.

Em 2008 a Google lança o Chrome com a engine v8.

Em julho de 2008, na conferência de Oslo, há um acordo para a nova versão do ECMAScript,
que foi lançada em 2009 como ECMAScript 5.

Em 2009 foi lançada a plataforma Node.js, permitindo que o Javascript se tornasse
uma linguagem do lado do servidor.

Em 2016 a versão ECMAScript 6 é lançada, com uma coleção extensiva de adições e refinamentos.

De 2016-19, uma nova versão padrão do ECMAScript foi lançada por ano, tornando a linguagem madura.

## A Engine Javascript

É um programa de computador que executa um código Javascript.

As primeiras eram somente interpretadores, atualmente todos usam o just-int-time para melhorar a performance.

O primeiro navegador moderno com o just-in-time foi o v8 do Chrome.

Em 2017 os navegadores adicionaram suporte ao WebAssembly. A JS Engine executa o código WebAssemblu no mesmo
lugar que o código JS.

## Declaração de variáveis

Antes da versão 6, ECMAScript 2015, para se declarar uma variável no JS utilizavamos a palavra chave **var**

```js
var num = 12;
```

A **ECMAScript 2015** introduziu duas novas palavras chaves para declarar: `let` e `const`.

```js
let num = 45;
const pi = 3.141516;
```

`let` e `const` são do escopo de bloco. Uma variável declarada como let e const não pode ser
redeclarada dentro de um escopo.

`let` pode receber outro valor no decorrer do código, já `const` não pode ser reatribuída depois
de sua declaração.

## Tipos de dados primitivos

- Strings
- Numbers
- BigInts
- Booleans
- Null
- Undefined

## Valores e Inferência

Em ciência da computação, tipo de dado é uma combinação de valores e operações
que uma variável pode executar, varia de acordo com a linguagem e o S.O.

### Tipagem estática

É utilizado em linguagens com `C`, `C++`, `Java`, nele o programador **deve**
definir qual o tipo de dado da variável que ele está criando.

```c
int a = 12;
double b = 33.3;
```

### Tipagem dinâmica

Na tipagem dinâmica a responsabilidade de dizer o tipo de dado fica com o interpretador,
é utilizado em linguagens como Python, Javascript, Ruby...

```javascript
let a = 12;
let b = 12.55;
let c = "Vyctor";
```

## Tipos de dados não primitivos

### Object

A classe **Object** representa um dos tipos de dados do JS. Objetos podem ser declarados
utilizando o constructor Object() ou a sintaxe literal (utilizando o abre e fecha chaves)

```js
let o = new Object();

let Person = {
  name: "React",
};

console.log(Person.name);

let User = {
  email: "user@email",
  login: () => return "ok"
};

console.log(User.login());
```

### Array

A classe **Array** do JS é um objeto que é usado na construção de arrays.

Arrays são objetos tipo lista, não possuem tamnho e nem tipos fixos, podendo mudar durante a execução do programa.

```js
let fruits = ["maça", "banana"];
console.log(fruits[1]);
// result > banana
```

## Funções

No JS as funções são tratadas como membros de primeira classe, ou seja, podem ser passadas como parâmetro para outras funções.

Podemos declarar uma função usando a palavra chave **function** mais o nome da função:

```js
function soma(a, b) {
  return a + b;
}
```

Também podemos declarar uma função utilizando uma arrow function, introduzida na ECMAScript 2015.

```js
soma = (a, b) => a + b;
```
