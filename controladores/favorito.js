const { TodosFavoritos, InserirFavorito, ExcluirFavorito } = require("../servicos/favorito");

function getFavoritos(req, res) {
    try {
        const favoritos = TodosFavoritos();
        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id;
        InserirFavorito(id);
        res.status(201).send("Favorito inserido com sucesso!");
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            ExcluirFavorito(id);
            res.status(204);
        } else {
            res.status(422).send("Id inválido!");
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}