const { Router } = require('express');
const RoleController = require('../controllers/roleController')

const router = Router();

router
  .post('/role/', RoleController.cadastrar)
  .get('/role/', RoleController.exibirTodos)
  .get('/role/:id', RoleController.exibirUm)
  .put('/role/:id', RoleController.atualizar)
  .delete('/role/:id', RoleController.deletar);

module.exports = router;
