module.exports = (client, queue) => {
    queue.textChannel.send({embeds:[{description:`❌ | O canal de voz está vazio, saindo...`,color:`${client.colour}`}]});
}