//expres - módulo para tratamento de rotas
const express = require('express');
//mongoDB -  ORM
const mongoose = require('mongoose');
//Evita ficar fazendo a requisição para cada modelo criado
const requireDir =  require('require-dir');
//Permite a utilização da api externamente
const cors = require('cors');

//Iniciando o app
const app =  express();

//Permite que eu envie dados para minha aplicação no formato JSON
app.use(express.json());

//Cors - customizável
app.use(cors());

//Base de dados não relacional
mongoose.connect('mongodb://huntweb:huntweb123@ds033106.mlab.com:33106/huntweb', {
    useNewUrlParser: true
});
//Enxerga os models apenas passando o diretório
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);