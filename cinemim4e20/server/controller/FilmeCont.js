const Filme = require('../model/FilmeSchema');
module.exports = {
    listar: async (req, res) => {
        Filme.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },
   
    incluir: async (req, res) => {
        let obj = new Filme(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Filme(req.body);
        Filme.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Filme.deleteOne({ _id: req.params.id }, function (err) {
        (err ? res.status(400).send(err) : res.status(200).json("Filme deletado com seucesso!"));
        });
    },

    obterPeloId: async (req, res) => {
        Filme.findOne({ _id: req.params.id }, function (err, obj) {
            if (err)
                res.status(400).send(err);
            res.status(200).json(obj);
        });
        
    },

    filtrar: async (req, res) => {
       Filme.find({
            $or: [
                { nome: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err, objetos) {
            if (err)
                res.status(400).send(err);
                res.json(objetos);    
        }).sort({ nome: -1 }); // -1 decrescente 1 crescente
       
    },
};


