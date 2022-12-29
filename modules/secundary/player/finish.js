module.exports = async (client, queue) => {
    try{
    queue.textChannel.send({embeds:[{description:`✅ | Não há mais músicas para tocar!`,color:`${client.colour}`}]});
    let x = client.config.discord.ne.find(e => e.guildId == queue.textChannel.guild.id);
    if (x) { 
        x.delete()
        let y = client.config.discord.ne.indexOf(x)
        client.config.discord.ne.splice(y, 1)
    }
}
catch {
    queue.textChannel.send({embeds:[{description:`❌ | Alguma coisa deu errado!`,color:`${client.colour}`}]});
}

}