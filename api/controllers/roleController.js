const RoleService = require('../services/roleService')
const roleService = new RoleService();

class RoleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;

    try {
      const role = await roleService.cadastrar({ nome, descricao });
      res.status(201).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async exibirTodos(req, res) {
    try {
      const roles = await roleService.exibirTodos()
      res.status(200).send(roles);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async exibirUm(req, res) {
    const { id } = req.params
    try {
      const role = await roleService.exibirUm(id)
      res.status(200).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async atualizar(req, res) {
    const { nome, descricao } = req.body;
    const { id } = req.params;
    try {
      const roleAtualizada = await roleService.atualizar({ id, nome, descricao })
      res.status(200).send(roleAtualizada);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      const roleDeletada = await roleService.deletar(id)
      res.status(200).send(roleDeletada);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = RoleController;
