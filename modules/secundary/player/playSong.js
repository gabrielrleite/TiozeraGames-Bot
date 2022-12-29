const { MessageActionRow, MessageButton } = require('discord.js');
const pause = require('../buttons').pause();
module.exports = (client, queue, song) => {
    const row = pause
    queue.textChannel.send({embeds:[{title:`🎶 | Tocando Agora`,description:`[${song.name}](${song.url}) em **${queue.voiceChannel.name}**!`,color:`${client.colour}`,thumbnail:{url:song.thumbnail}}],components: [row]});
}