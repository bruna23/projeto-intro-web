
//1
const anime1 = {
    nome: "A viagem de chihiro",
    oscar: true,
    orcamento: ["2 bilhoes"],
    lancamento: 2001,
    foto: "A_Viagem_de_Chihiro.jpeg",
    link: "https://pt.wikipedia.org/wiki/A_Viagem_de_Chihiro",
}

const anime2 = {
    nome: "O serviço de entregas da Kiki",
    oscar: false,
    orcamento: ["800 milhoes"],
    lancamento: 1989,
    foto: "Majo_no_Takkyubin.jpg",
    link: "https://pt.wikipedia.org/wiki/Majo_no_Takky%C5%ABbin",
}

const anime3 = {
    nome: "O castelo animado",
    oscar: false,
    orcamento: ["1 milhao"],
    lancamento: 2004,
    foto: "Hauru_no_Ugoku_Shiro_(cartaz).jpg",
    link: "https://pt.wikipedia.org/wiki/Hauru_no_Ugoku_Shiro",
}

//1.3
let media = (anime1.lancamento + anime2.lancamento + anime3.lancamento) / 3
console.log("A média de avaliação dos animes é: " + media)

//1.4
console.log("Todos os animes ganharam oscar?\n" + (anime1.oscar && anime2.oscar && anime3.oscar))

//1.6 
anime1.nome = anime1.nome.toLocaleUpperCase()
anime2.nome = anime2.nome.toLocaleUpperCase()
anime3.nome = anime3.nome.toLocaleUpperCase()

//SEMANA 2
//2.2
const listaAnime = []
const listaAnimeGhibli = []

//2.3, 2.4 e 2.5
if (anime1.oscar == true) {
    listaAnime.push(anime1)
} else {
    alert(`A serie ${anime1.nome} já foi finalizada!`)
    listaAnimeGhibli.push(anime1)
}
if (anime2.oscar == false) {
    listaAnime.push(anime2)
} else {
    alert(`A serie ${anime2.nome} já foi finalizada!`)
    listaAnimeGhibli.push(anime2)
}
if (anime3.oscar == false) {
    listaAnime.push(anime3)
} else {
    alert(`A serie ${anime3.nome} já foi finalizada!`)
    listaAnimeGhibli.push(anime3)
}

//SEMANA 3
//3.1 - Retaforação
for (let i in listaAnime) {
    listaAnime[i].orcamento = listaAnime[i].orcamento.toString()
    console.log(listaAnime[i])
}

for (let i in listaAnimeGhibli) {
    listaAnimeGhibli[i].orcamento = listaAnimeGhibli[i].orcamento.toString()
    console.log(listaAnimeGhibli[i])
}

//3.2 - Novo relatório criado utilizando laço
for (let i = 0; i < listaAnime.length; i++) {
    console.log(`Série ${i + 1}`)
    console.log(listaAnime[i])
}

//3.3 - Função que receba como parametro um objeto e devolva a string
function recebeObj(anime) {

    return anime.nome + "\n" + anime.lancamento + "\n" + anime.oscar + "\n" + anime.orcamento
}

for (let i = 0; i < listaAnime.length; i++) {
    console.log("Lista de Filmes:\n" + recebeObj(listaAnime[i]))
}

for (let i = 0; i < listaAnimeGhibli.length; i++) {
    console.log("Lista de Filmes:\n" + recebeObj(listaAnimeGhibli[i]))
}

// DOM

const ghibli = document.querySelector(".img7")
listaAnime.filter(serie => {
    function listarAnimes() {
        ghibli.innerHTML += `<section class="nav-container1">
        <img src="./assets/${serie.foto} "alt="-Imagem-Filme">
        <ul><li class="li1"><a href=" ${serie.link} "target="_blank">${serie.nome}</a></li>
            <li>lancamento: ${serie.lancamento}</li>
            <li>Oscar: ${serie.oscar}</li>
            <li>orcamento: ${serie.orcamento}</li>
        </ul>
    </section>`
    }
    listarAnimes()
})

function buscaAnime(event) {
    event.preventDefault()
    let novaLista = document.getElementById('id-img7')
    let nomeAnime = document.getElementById('id-busca').value.toLocaleUpperCase()
    for (let i = 0; i < listaAnime.length; i++) {
        if (nomeAnime === listaAnime[i].nome) {

            return (novaLista.innerHTML = `<section class="nav-container1">
            <img src="./assets/${listaAnime[i].foto} "alt="-Imagem-Filme">
            <ul><li class="li1"><a href="${listaAnime[i].link} "target="_blank">${listaAnime[i].nome}</a></li>
                <li>lancamento: ${listaAnime[i].lancamento}</li>
                <li>Oscar: ${listaAnime[i].oscar}</li>
                <li>orcamento: ${listaAnime[i].orcamento}</li>
            </ul>
        </section>`)
        }

    }

    alert("Nada foi encontrado!");
    document.getElementById('id-busca').value = "";
    return;
}

buscaAnime()
