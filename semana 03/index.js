//1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a
// característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade
//array do objeto em uma mesma string. Utilize esta string no relatório.

const filme0 = {
    anime: "A viagem de chihiro",
    lancamento: 2001,
    oscar: true,
    orcamento: ["2 bilhões"]
}

const filme1 = {
    anime: "O serviço de entregas da kiki",
    lancamento: 1989,
    oscar: false,
    orcamento: ["800 milhões"]
}
const filme2 = {
    anime: "O castelo animado",
    lancamento: 2004,
    oscar: true,
    orcamento: ["1 milhão"]
}

let orcamentoString = ""
for (let i = 0; i < filme0.orcamento.length; i++) {
    orcamentoString += filme0.orcamento[i] + ","
}

let orcamento1String = ""
for (let i = 0; i < filme1.orcamento.length; i++) {
    orcamento1String += filme1.orcamento[i] + ","
}

let orcamento2String = ""
for (let i = 0; i < filme2.orcamento.length; i++) {
    orcamento2String += filme2.orcamento[i] + ","
}

console.log(orcamentoString, orcamento1String, orcamento2String)


//parte 2

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

//parte 3

function  parametro (objeto){
    for (i in objeto){
        console.log(`${i}: ${objeto[i]}`)
    }
    console.log("----------------------");
}

parametro(filme0)
parametro(filme1)
parametro(filme2)

//parte 4

const novoArray = [filme0, filme1, filme2]

function encontraFilme(array, string){
    const buscaFilme = array.filter((elemento) => {
        if(elemento.anime === string){
            return elemento
    }
})
    if(buscaFilme.length === 0){
        alert("Série não encontrada")
    }else{
        console.log(buscaFilme);
    }
}
encontraFilme(novoArray, "A viagem de chihiro")