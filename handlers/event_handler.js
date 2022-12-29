const { Client } = require('../modules/primary/dependencies');
const { readdirSync } = require('fs');

/**
   *
   * @param {Client} client
   */

module.exports = (client) => {
    try {
        readdirSync("./events").forEach((file) => {
            const events = readdirSync("./events/").filter((file) =>
              file.endsWith(".js")
            );
            for (let file of events) {
              let pull = require(`../events/${file}`);
              if (pull.name) {
                client.events.set(pull.name, pull);
              }
            }
            console.log((`Evento ${file} Carregado com Sucesso`));
          });
    } catch (e) {
        console.log(e.message);
    }
}