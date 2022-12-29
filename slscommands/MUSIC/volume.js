const { PermissionsBitField, CommandInteraction, Client, EmbedBuilder } = require("discord.js");
const client = require("../..");
const queue = require("./queue");
const distube = client.player
// EM DESENVOLVIMENTO //
// const vol_btn = require('../../modules/secundary/buttons').volume();
// EM DESENVOLVIMENTO //

module.exports = {
  name: "volume",
  description: "[MÚSICA] Defina o Volume ",
  permission: [PermissionsBitField.Flags.Speak],
  type: 1,
  options: [
    {
      name: "volume",
      description: "Volume | Porcentagem",
      type: 4,
      required: true
    }
],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, info) => {
    const row = vol_btn;
    const queue = client.player.getQueue(interaction.guildId);
    const vol = interaction.options.get("volume")
    const vol_error = new EmbedBuilder()
        .setFields({name: "Erro", value: `Não foi possivel definir o volume em ${vol.value}%, selecione um valor entre 1% e 100%`});
    const vol_success = new EmbedBuilder()
        .setFields({name: "Definido com sucesso", value: `O volume foi definido em ${vol.value}%`})
    if (!queue || !queue.playing) return void interaction.channel.send({ content: "❌ | Nenhuma música está sendo reproduzida!" });
    if(!queue.autoplay)
    {
    if(queue.songs.length <1) return void interaction.channel.send({ content: "❌ | Fila vazia!! Adicione alguma música" });
    }
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        if(vol.value > 100 || vol.value < 1) {
            await interaction.editReply({embeds: [vol_error]});
        } else {
            await interaction.editReply({embeds: [vol_success]});
            queue.setVolume(vol.value);
        }
    } else {
        await interaction.editReply({embeds: [vol_success], components: [row]});
        queue.setVolume(vol.value);
    }
  },
};
