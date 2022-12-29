const { PermissionsBitField, CommandInteraction, Client } = require("discord.js");
const client = require("../..");
const distube = client.player

module.exports = {
  name: "play",
  description: "[MÚSICA] Reproduz músicas ",
  permission: [PermissionsBitField.Flags.Speak],
    type: 1,
    options: [
      {
        name: "musica",
        description: "Link/Nome da Música ( Spotify/Youtube/Soundcloud/Dezeer )",
        type: 3,
        required: true
      }
    ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const Music = interaction.options.getString("musica");
    const voice_channel = interaction.member.voice.channel;
    distube.play(voice_channel, Music,{textChannel: interaction.channel});


    await interaction.editReply(".");
    setTimeout(() => interaction.deleteReply(), 100);
  },
};
