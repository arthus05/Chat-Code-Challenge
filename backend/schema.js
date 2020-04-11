var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    type: String,
    ticketCount: Number
});

const ticketSchema = new mongoose.Schema({
    id: String,
    id_user1: String,
    id_user2: String,
    names: Array,
    messages: Array
});

module.exports = {userSchema, ticketSchema};