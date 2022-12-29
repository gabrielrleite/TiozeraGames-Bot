const { PermissionsBitField, CommandInteraction, Client, EmbedBuilder } = require("discord.js");
const client = require("../..");
const distube = client.player;
const fs = require("fs");
const emojiCharacters = require('../../modules/secundary/emojiCharacters');
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = {
  name: "queue",
  description: "[MÚSICA] Mostra a fila atual ",
  permission: [PermissionsBitField.Flags.Speak],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction) => {
    fs.writeFile("./modules/secundary/player/queue.txt", "", (err) => {});
    const queue = client.player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) return void interaction.channel.send({ content: "❌ | Nenhuma música está sendo reproduzida!" });
    const currentTrack = queue.songs[0];

    if(queue.songs.length > 10) {
        global.m = 0
        global.n = 0
        while (m < 10) {
            await sleep(100);
            if(m % 2 == 0) {
              await fs.appendFile("./modules/secundary/player/queue.txt", `${emojiCharacters[m + 1]} - **[${queue.songs[m].name}](${queue.songs[m].url})**\n`, (err) => {});
            } else {
              await fs.appendFile("./modules/secundary/player/queue.txt", `${emojiCharacters[m + 1]} - [${queue.songs[m].name}](${queue.songs[m].url})\n`, (err) => {});
            }
            n = n +1
            m = m + 1
        }
        await sleep(100);
        await fs.appendFile("./modules/secundary/player/queue.txt", `E mais ${queue.songs.length - 10} músicas`, (err) => {});
    }

    const queueList = new EmbedBuilder()
      .setTitle(`**Fila Atual | ${queue.songs.length} Músicas**`)
      .setDescription(`${fs.readFileSync("./modules/secundary/player/queue.txt", "utf8")} **E mais ${queue.songs.length - 10} músicas**`)

    await interaction.editReply({embeds: [queueList]});
    return fs.writeFile("./modules/secundary/player/queue.txt", "", (err) => {});
  },
};
