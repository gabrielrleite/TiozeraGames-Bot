const { MongoClient } = require('mongodb');
require('dotenv').config()

const urlDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@tiozeradb.isaae.mongodb.net/?retryWrites=true&w=majority`;
const clientDB = new MongoClient(urlDB, { useNewUrlParser: true, useUnifiedTopology: true });
async function conectar() {
await clientDB.connect()
 }
conectar()
const collectionConfig = clientDB.db(process.env.DB_NAME).collection("Config");

module.exports = { collectionConfig };

console.log("Banco de Dados conectado com sucesso!");
