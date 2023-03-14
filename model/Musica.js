const mongoose = require('../config/conexao');

const MusicaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  artista: { type: String, required: true },
  genero: { type: String, required: true },
  duracao: { type: Number, required: true },
  anoLancamento: { type: Number, required: true },
  album: { type: String },
});

const Musica = mongoose.model('Musica', MusicaSchema);

module.exports = Musica;