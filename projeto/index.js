//PROJETO SEMANA 1

//Parte 1. 

//Estudio ghibli(nome do filme)
// Ano de lancamento
// Ganhou oscar?
//Orçamento (caracteristica)

//Parte 2 

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

//Parte 3 

const media = ((lancamento + lancamento1 + lancamento2) / 3)
console.log(`Cálculo média Lançamento: ${media}`)

//Parte 4

const verificaOscar = (oscar && oscar1 && oscar2);
console.log(verificaOscar)

//Parte 5 
//Acrescentei a caracteristica (Caracteristica) nas linhas 13, 18 e 23!

//Parte 6 

const animeMaiusculo = anime.toUpperCase()
const animeMaiusculo1 = anime1.toUpperCase()
const animeMaiusculo2 = anime2.toUpperCase()

console.log(`Qual anime: ${animeMaiusculo} \nAno de lançamento: ${lancamento} \nGanhou oscar? ${oscar} \nOrçamento: ${orcamento}`)
console.log(`Qual anime1: ${animeMaiusculo1} \nAno de lançamento: ${lancamento1} \nGanhou oscar? ${oscar1} \nOrçamento: ${orcamento1}`)
console.log(`Qual anime2: ${animeMaiusculo2} \nAno de lançamento: ${lancamento2} \nGanhou oscar? ${oscar2} \nOrçamento: ${orcamento2}`)

//SEMANA 02

//Parte 1 

const filme1 = {
    anime: "A viagem de chihiro",
    lancamento: 2001,
    oscar: true,
    orcamento: ["2 bilhões"]
}

const filme2 = {
    anime: "O serviço de entregas da kiki",
    lancamento: 1989,
    oscar: false,
    orcamento: ["800 milhões"]
}

const filme3 = {
    anime: "O castelo animado",
    lancamento: 2004,
    oscar: true,
    orcamento: ["1 milhão"]
}

//Parte 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const estudioGhibli = []

//Parte 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

//estudioGhibli.push(filme1, filme2, filme3)

//Parte 4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. 

//Parte 5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, 
//e não faça o push

if (filme1.oscar) {
    estudioGhibli.push(filme1)
} else {
    alert("O filme \" O castelo animado \" não foi encontrado")
}

if (filme2.oscar) {
    estudioGhibli.push(filme2)
} else {
   // alert("O filme \" O serviço de entregas da kiki \" não foi encontrado")
}

if (filme3.oscar) {
    estudioGhibli.push(filme3)
} else {
    alert("O filme \" A viagem de chihiro\" não foi encontrado")
}

console.log(estudioGhibli)

//PROJETO SEMANA 03

//Parte 1. 

const filmes0 = {
    anime: "A viagem de chihiro",
    lancamento: 2001,
    oscar: true,
    orcamento: ["2 bilhões"]
}

const filmes1 = {
    anime: "O serviço de entregas da kiki",
    lancamento: 1989,
    oscar: false,
    orcamento: ["800 milhões"]
}
const filmes2 = {
    anime: "O castelo animado",
    lancamento: 2004,
    oscar: true,
    orcamento: ["1 milhão"]
}

let orcamentoString = ""
for (let i = 0; i < filmes0.orcamento.length; i++) {
    orcamentoString += filmes0.orcamento[i] + ","
}

let orcamento1String = ""
for (let i = 0; i < filmes1.orcamento.length; i++) {
    orcamento1String += filmes1.orcamento[i] + ","
}

let orcamento2String = ""
for (let i = 0; i < filmes2.orcamento.length; i++) {
    orcamento2String += filmes2.orcamento[i] + ","
}

console.log(orcamentoString, orcamento1String, orcamento2String)


//Parte 2

let filmes = [{
    anime: "A viagem de chihiro",
    lancamento: 2001,
    oscar: true,
    orcamento: ["2 bilhões"],
},
{
    anime: "O serviço de entregas da kiki",
    lancamento: 1989,
    oscar: false,
    orcamento: ["800 milhões"],
},
{
    anime: "O castelo animado",
    lancamento: 2004,
    oscar: true,
    orcamento: ["1 milhão"]
}]

for (filme of filmes) {
    for (propriedade in filme) {
        console.log(`${propriedade}: ${filme[propriedade]}`)
    }
    console.log("----------------------");
}

//Parte 3

function parametro(objeto) {
    for (i in objeto) {
        console.log(`${i}: ${objeto[i]}`)
    }
    console.log("----------------------");
}

parametro(filmes0)
parametro(filme1)
parametro(filme2)

//Parte 4

const novoArray = [filmes0, filme1, filme2]

function encontraFilme(array, string) {
    const buscaFilme = array.filter((elemento) => {
        if (elemento.anime === string) {
            return elemento
        }
    })
    if (buscaFilme.length === 0) {
        alert("Série não encontrada")
    } else {
        console.log(buscaFilme);
    }
}
encontraFilme(novoArray, "A viagem de chihiro")








