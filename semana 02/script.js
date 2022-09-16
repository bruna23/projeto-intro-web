//1. Transforme os itens que criamos nas últimas semanas em objetos.

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

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const estudioGhibli = []

//3 Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

//estudioGhibli.push(filme1, filme2, filme3)

//4 Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. 
//A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

//5 Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, 
//e não faça o push


if(filme1.oscar){
    estudioGhibli.push(filme1)
}else{
    alert ("O filme \" O castelo animado \" não foi encontrado")
}

if(filme2.oscar){
    estudioGhibli.push(filme2)
}else{
    alert("O filme \" O serviço de entregas da kiki \" não foi encontrado")
}

if(filme3.oscar){
    estudioGhibli.push(filme3)
}else{
    alert("O filme \" A viagem de chihiro\" não foi encontrado")
}

console.log(estudioGhibli)










