const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3000'}));

const usuarioRout = require("./UsuarioRout");
routes.use("/api", usuarioRout);

const filmeRout = require("./FilmeRout");
routes.use("/api", filmeRout);

const produtoraRout = require("./ProdutoraRout");
routes.use("/api", produtoraRout);



module.exports = routes;