module.exports = (client, queue, playlist) => {
    queue.textChannel.send({embeds:[{description:`🎶 | Playlist [${playlist.name}](${playlist.url}) adicionado em **${queue.voiceChannel.name}** (${playlist.songs.length} músicas)`,color:`${client.colour}`}]});
}