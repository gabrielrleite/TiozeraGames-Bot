module.exports = (client, queue, song) => {
    queue.textChannel.send({embeds:[{description:`[${song.name}](${song.url}) Adicionado a Fila`,color:`${client.colour}`}]})
}
