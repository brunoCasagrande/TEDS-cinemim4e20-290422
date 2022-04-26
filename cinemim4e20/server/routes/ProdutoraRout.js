const express = require('express');
const routes = express.Router();
const controle = require('../controller/ProdutoraCont');

routes.route('/produtora').get(controle.listar);
routes.route('/produtora').post(controle.incluir);
routes.route('/produtora').put(controle.alterar);
routes.route('/produtora/:id').delete(controle.excluir);
routes.route('/produtora/:id').get(controle.obterPeloId);
routes.route('/produtora/filtro/:filtro').get(controle.filtrar);

module.exports = routes;