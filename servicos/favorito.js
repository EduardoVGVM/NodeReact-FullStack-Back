const fs = require("fs");

function TodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

function InserirFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    
    const novoFavorito = livros.find( livro => livro.id === id);
    const novaLista = [...favoritos, novoFavorito];

    fs.writeFileSync("favoritos.json", JSON.stringify(novaLista))
    return novaLista;
}

function ExcluirFavorito(id) {
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )
    const novaLista = favoritos.filter( livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(novaLista))
}

module.exports = {
    TodosFavoritos,
    InserirFavorito,
    ExcluirFavorito
}