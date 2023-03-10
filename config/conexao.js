const mongoose = require('mongoose');
const banco = "mongodb+srv://DedierJr:dedier2005@cluster0.wemjdzs.mongodb.net/?retryWrites=true&w=majority"
//const banco = "mongodb://localhost:27017/aula"
//const banco = "mongodb+srv://diego:diego@cluster0.ajiapmy.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose;