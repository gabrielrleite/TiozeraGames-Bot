const { Client, Message, EmbedBuilder, WebhookClient, Collection , fs} = require("./modules/primary/dependencies");
const config = require("./settings/config.json");
const { client } = require("./modules/primary/client");
require("./modules/primary/dependencies");
const player = fs.readdirSync('./modules/secundary/player').filter(file => file.endsWith('.js'));

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync("./commands/");

for (const file of player) {
    console.log(`Loading Distube event ${file}`);
    const event = require(`./modules/secundary/player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
}

["command_handler", "event_handler", "slash_handler"].forEach((handler) => {
    require(`./handlers/${handler}`)(client)
 });

client.login(process.env.TOKEN);