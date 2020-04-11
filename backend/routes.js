const express = require('express');

const routes = express.Router();

const methods = require('./methods');

// Cadastrar usuário
routes.post('/cadastrarUsuario', methods.userCreate);
/*
// Atualizar usuário
routes.put('/atualizarUsuario', methods.userUpdate);

// Deletar usuário
routes.delete('/apagarUsuario', methods.userDelete);

*/


