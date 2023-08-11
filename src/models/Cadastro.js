const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
  nome: String,
  nomeEmpresa: String,
  telefone: String,
  email: String,
  documento: String,
  autorização: Boolean,
})

const Cadastro = mongoose.model('Cadastro', cadastroSchema);

module.exports = Cadastro;
