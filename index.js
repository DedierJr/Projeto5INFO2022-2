const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')
var Usuario = require('./model/usuario')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))

app.get('/', function(req,res) {
    Usuario.find({}).exec()
        .then(function(docs){
            res.render('index.ejs',{Usuarios:docs})
        })
        .catch(function(err){
            console.log(err);
            res.status(500).send("Erro ao buscar usuários");
        })
})

app.post('/', function(req, res) {
    Usuario.find({nome: new RegExp(req.body.txtPesquisa,'gi')})
        .exec()
        .then(function(docs) {
            res.render('index.ejs', {Usuarios: docs});
        })
        .catch(function(err) {
            console.log(err);
            res.status(500).send("Erro ao buscar usuários");
        });
});


app.get('/add',function(req,res) {
    res.render('adiciona.ejs')
})

app.post('/add',function(req,res) {
    var usuario = new Usuario({
        nome: req.body.txtNome,
        email: req.body.txtEmail,
        senha: req.body.txtSenha,
        foto: req.body.txtFoto
    })
    usuario.save().then(()=>{
        res.redirect('/');
    }).catch((err)=>{
        console.log(err);
    })
})

app.get('/del/:id', function(req, res) {
    Usuario.findByIdAndDelete(req.params.id)
        .then(function() {
            res.redirect('/');
        })
        .catch(function(err) {
            console.log(err);
            res.status(500).send("Erro ao excluir usuário");
        });
    console.log(req.params.id);
});

app.get('/edit/:id', function(req, res) {
    Usuario.findById(req.params.id)
        .then(function(docs) {
            res.render('edita.ejs', {Usuario: docs});
        })
        .catch(function(err) {
            console.log(err);
            res.status(500).send("Erro ao buscar usuário");
        });
});

app.post('/edit/:id/', function(req, res) {
    Usuario.findByIdAndUpdate(req.params.id, {
        nome: req.body.txtNome, 
        email: req.body.txtEmail, 
        senha: req.body.txtsenha, 
        foto: req.body.txtFoto
    })
        .then(function(docs) {
            res.redirect('/');
        })
        .catch(function(err) {
            console.log(err);
            res.status(500).send("Erro ao atualizar usuário");
        });
});

app.listen(3000,function() {
    console.log("Conexão inicializada")
})
