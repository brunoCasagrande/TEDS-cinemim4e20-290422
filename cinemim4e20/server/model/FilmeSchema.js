const mongoose = require("mongoose");
const FilmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    sinopse: { type: String, required: true },
    dataEstreia: { type: String, required: true },
    
    
});
module.exports = mongoose.model("Filme", FilmeSchema);