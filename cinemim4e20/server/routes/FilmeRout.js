const express = require('express');
const routes = express.Router();
const controle = require('../controller/FilmeCont');

routes.route('/filme').get(controle.listar);
routes.route('/filme').post(controle.incluir);
routes.route('/filme').put(controle.alterar);
routes.route('/filme/:id').delete(controle.excluir);
routes.route('/filme/:id').get(controle.obterPeloId);
routes.route('/filme/filtro/:filtro').get(controle.filtrar);

module.exports = routes;