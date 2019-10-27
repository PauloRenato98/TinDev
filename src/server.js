const express = require ('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const server = express();



mongoose.connect('aqui vai a conexao com o bd user e senha', {
    useNewUrlParser:true
});


server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
