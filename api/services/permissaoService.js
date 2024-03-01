const database = require('../models')
const uuid = require('uuid');

class PermissaoService {
  async cadastrar(dto) {
    try {
      const permissao = await database.permissoes.findOne({
        where: {
          nome: dto.nome
        }
      })
      if (permissao) {
        throw new Error('Permissão já cadastrada.')
      }
      const novaPermissao = await database.permissoes.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });

      return novaPermissao;
    } catch (error) {
      // throw new Error('Erro ao cadastrar permissão.')
      return error.message
    }
  }
}

module.exports = PermissaoService;
