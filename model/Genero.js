const mongoose = require('../config/conexao');

const GeneroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String }
});

const Genero = mongoose.model('Genero', GeneroSchema);

module.exports = Genero;