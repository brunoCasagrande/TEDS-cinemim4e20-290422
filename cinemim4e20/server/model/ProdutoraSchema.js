const mongoose = require("mongoose");
const ProdutoraSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cidade: { type: String, required: true },
    fundador: { type: String, required: true },
       
});
module.exports = mongoose.model("Produtora", ProdutoraSchema);