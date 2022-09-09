/*1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. 
Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;*/

//Estudio ghibli(nome do filme)
// Ano de lancamento
// Ganhou oscar?
//Orçamento (caracteristica)


/*2. Agora, crie três conjuntos de variáveis utilizando as características 
que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, 
com três conjuntos de dados diferentes.*/

const anime = "A viagem de chihiro"
const lancamento = 2001
const oscar = true
const orcamento = ["2 bilhões"]

const anime1 = "O serviço de entregas da Kiki"
const lancamento1 = 1989
const oscar1 = false
const orcamento1 = ["800 milhões"]

const anime2 = "O castelo animado"
const lancamento2 = 2004
const oscar2 = false
const orcamento2 = ["1 milhão"]


/*3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
A média deve ser igual à soma dos itens, dividida pelo total de itens.*/


const media = ((lancamento + lancamento1 + lancamento2) /3)
console.log(`Cálculo média Lançamento: ${media}`)


/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores 
de variáveis booleanas criadas até aqui são verdadeiras.*/


const verificaOscar = (oscar && oscar1 && oscar2);
console.log(verificaOscar)


//5. Crie pelo menos mais uma característica para o item que você criou. 
//Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é,
//se é um array de strings, só deve receber strings.

//Acrescentei a caracteristica (Caracteristica) nas linhas 21, 26 e 31!

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

const animeMaiusculo = anime.toUpperCase()
const animeMaiusculo1 = anime1.toUpperCase()
const animeMaiusculo2 = anime2.toUpperCase()


console.log(`Qual anime: ${animeMaiusculo} \nAno de lançamento: ${lancamento} \nGanhou oscar? ${oscar} \nOrçamento: ${orcamento}`)
console.log(`Qual anime1: ${animeMaiusculo1} \nAno de lançamento: ${lancamento1} \nGanhou oscar? ${oscar1} \nOrçamento: ${orcamento1}`)
console.log(`Qual anime2: ${animeMaiusculo2} \nAno de lançamento: ${lancamento2} \nGanhou oscar? ${oscar2} \nOrçamento: ${orcamento2}`)






