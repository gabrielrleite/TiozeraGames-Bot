const Discord = require("discord.js");
const { PermissionsBitField } = require("discord.js");

module.exports = {
    name: "play",
    aliases: ["tocar", "reproduzir"],
    category: "MUSIC",
    permission: [PermissionsBitField.Flags.Speak],
    run: async(client, message, args) => {
        const query = args[0];
        if(!message.member.voice.channel) {
            return void message.reply("Você não está em um canal de voz.");
        }

            const success = client.player.play(message.member.voice.channel, `${query}`,{textChannel: message.channel})
            
}};