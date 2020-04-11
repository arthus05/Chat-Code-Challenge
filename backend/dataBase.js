const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = 'chatCodeChallengeDB';
const url = 'mongodb+srv://Arthus:125868@cluster0-0roca.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true';
const mongoOptions = {useNewUrlParser : true, useUnifiedTopology: true}

const state = {
    dataBase : null
};

const connect = (callBack) => {
    if(state.dataBase)
        callBack();
    else {
        MongoClient.connect(url, mongoOptions, (err, client) => {
            if(err)
                callBack(err);
            else {
                state.dataBase = client.db(dbname)
                callBack();
            }
        });
    }
}

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

const getDB = () => {
    return state.dataBase
}

module.exports = {getDB, connect, getPrimaryKey};