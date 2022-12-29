const { PermissionsBitField, CommandInteraction, Client } = require("discord.js");
const client = require("../..");
const distube = client.player

module.exports = {
  name: "skip",
  description: "[MÚSICA] Pula a música atual ",
  permission: [PermissionsBitField.Flags.Speak],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) return void interaction.channel.send({ content: "❌ | Nenhuma música está sendo reproduzida!" });
    const currentTrack = queue.songs[0];
    if(!queue.autoplay)
    {
    if(queue.songs.length <=1) return void interaction.channel.send({ content: "❌ | Fila vazia!! Adicione alguma música" });
    }
    const success = queue.skip();

    return void interaction.editReply({embeds: success ? [{description:`✅ | Pulada **${currentTrack.name}**!`,color:`${client.colour}`}] : [{description:`❌ | Alguma coisa deu errado!`,color:`${client.colour}`}]})
  },
};
