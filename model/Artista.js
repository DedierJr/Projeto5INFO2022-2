const mongoose = require('../config/conexao');

const ArtistaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  genero: { type: String },
  albuns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }]
});

const Artista = mongoose.model('Artista', ArtistaSchema);

module.exports = Artista;