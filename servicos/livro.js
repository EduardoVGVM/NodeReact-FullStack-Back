const fs = require("fs");

function TodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function LivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroPorId = livros.filter(livro => livro.id == id);
    return livroPorId;
}

function InserirLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLista = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
    return novaLista;
}

function AtualizarLivro(conteudoAtualizado, id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))

    const indice = livros.findIndex(livro => livro.id === id)
    const livroAtualizado = { ...livros[indice], ...conteudoAtualizado }

    livros[indice] = livroAtualizado
    fs.writeFileSync("livros.json", JSON.stringify(livros))
    return livros;
}

function ExcluirLivro(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLista = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
    return livros;
}

module.exports = {
    TodosLivros, LivroPorId, InserirLivro, AtualizarLivro, ExcluirLivro
}