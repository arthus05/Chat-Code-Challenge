const data = require('./data/users.json');
const schema = require('./schema');
const mongoose = require("mongoose");

let User = mongoose.model("User", schema.userSchema)
let Ticket = mongoose.model("Ticket", schema.ticketSchema)


function userCreate(req, res) {
    let user = new User(req.body);

    user.save()
        .then(item => {
            res.send("Usuário cadastrado com sucesso");
        })
        .catch(err => {
            res.status(400).send("Não foi possível cadastrar o usuário no banco de dados");
        });

    return res.send(data);
}

module.exports = { userCreate }