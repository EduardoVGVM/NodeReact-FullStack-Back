const { TodosLivros, LivroPorId, InserirLivro, AtualizarLivro, ExcluirLivro } = require("../servicos/livro");

function getLivros(req, res) {
    try {
        const livros = TodosLivros();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function getLivroPorId(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const livroPorId = LivroPorId(id);
            res.status(200).json(livroPorId);
        } else {
            res.status(422).send("Id inválido!");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            InserirLivro(livroNovo);
            res.status(201).json(livroNovo);
        } else {
            res.status(422).send("O campo nome é obrigatório!");
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const body = req.body;
            livroAtualizado = AtualizarLivro(body, id);
            res.status(200).json(livroAtualizado);
        } else {
            res.status(422).send("Id inválido!");
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            ExcluirLivro(id);
            res.status(204);
        } else {
            res.status(422).send("Id inválido!");
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivroPorId,
    postLivro,
    patchLivro,
    deleteLivro
}