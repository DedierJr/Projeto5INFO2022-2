const conexao = require('../config/conexao');

const postSchema = new mongoose.Schema({
    texto: String,
    data: Date,
    foto: String,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'usuario'
    }
});

const post = conexao.model('post', postSchema);

module.exports = post