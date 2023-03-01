const mongoose = require('mongoose');
const banco = "mongodb://DedierJr:dedier2005@ac-hb4e1fd-shard-00-00.wemjdzs.mongodb.net:27017,ac-hb4e1fd-shard-00-01.wemjdzs.mongodb.net:27017,ac-hb4e1fd-shard-00-02.wemjdzs.mongodb.net:27017/?ssl=true&replicaSet=atlas-lr8u4x-shard-0&authSource=admin&retryWrites=true&w=majority"
//const banco = "mongodb://localhost:27017/aula"
//const banco = "mongodb+srv://diego:diego@cluster0.ajiapmy.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose;