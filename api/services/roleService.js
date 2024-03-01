const database = require('../models');
const uuid = require('uuid')

class RoleService {
  async cadastrar(dto) {
    const role = await database.roles.findOne({
      where: {
        nome: dto.nome,
      },
    });

    if (role) {
      throw new Error('Role já cadastrada.')
    }

    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      })

      return newRole;
    } catch (error) {
      throw new Error('Erro ao cadastrar.')
    }
  }

  async exibirTodos() {
    try {
      const roles = await database.roles.findAll()

      return roles;
    } catch (error) {
      throw new Error('Erro ao buscar roles.')
    }
  }

  async exibirUm(id) {
    try {
      const role = await database.roles.findOne({
        where: { id }
      })

      return role;
    } catch (error) {
      throw new Error('Erro ao buscar role.')
    }    
  }

  async atualizar(dto) {
    try {
      await database.roles.update({ 
        nome: dto.nome, 
        descricao: dto.descricao 
      }, {
        where: { id: dto.id }
      })
      return 'Role atualizada com sucesso.'
    } catch (error) {
      throw new Error('Erro ao atualizar role.')
    }    
  }

  async deletar(id) {
    try {
      await database.roles.destroy({
        where: { id }
      })
      return 'Role deletada com sucesso.'
    } catch (error) {
      throw new Error('Erro ao deletar role.')
    }    
  }
}

module.exports = RoleService;
