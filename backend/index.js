const express = require('express');
const bodyParser =  require('body-parser');
const routes = require('./routes');
const app = express();
const path = require('path');

const dataBase = require('./dataBase');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use(routes);

dataBase.connect((err) => {
    if(err){
        console.log('Não foi possível conecar ao banco de dados');
        process.exit(1);
    }
    else {
        app.listen(3333, () => {
            console.log('Conectado ao banco de dados')
        });
    }
})
