const mongoose = require("mongoose");
const FilmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    sinopse: { type: String, required: true },
    dataEstreia: { type: Date, required: true },
    produtora: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produtora',
        require: true,
    },
       
});
module.exports = mongoose.model("Filme", FilmeSchema);