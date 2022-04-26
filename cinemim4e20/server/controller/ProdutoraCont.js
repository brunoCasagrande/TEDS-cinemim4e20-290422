const Produtora = require('../model/ProdutoraSchema');
module.exports = {
    listar: async (req, res) => {
        Produtora.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },
   
    incluir: async (req, res) => {
        let obj = new Produtora(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Produtora(req.body);
        Produtora.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Produtora.deleteOne({ _id: req.params.id }, function (err) {
        (err ? res.status(400).send(err) : res.status(200).json("Produtora deletado com seucesso!"));
        });
    },

    obterPeloId: async (req, res) => {
        Produtora.findOne({ _id: req.params.id }, function (err, obj) {
            if (err)
                res.status(400).send(err);
            res.status(200).json(obj);
        });
        
    },

    filtrar: async (req, res) => {
       Produtora.find({
            $or: [
                { nome: { $regex: req.params.filtro, $options: "i" } },
                { email: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err, objetos) {
            if (err)
                res.status(400).send(err);
                res.json(objetos);    
        }).sort({ nome: -1 }); // -1 decrescente 1 crescente
       
    },
};