module.exports = async (client, queue) => {
    queue.textChannel.send({embeds:[{description:`❌ | Me desconectei do seu canal de voz`,color:`${client.colour}`}]});
    try{
        let x = client.config.discord.ne.find(e => e.guildId == queue.textChannel.guild.id);
        if (x) { 
            x.delete()
            let y = client.config.discord.ne.indexOf(x)
            client.config.discord.ne.splice(y, 1)
        }
    }
    catch {
        queue.textChannel.send({embeds:[{description:`❌ | Alguma coisa deu errado!`,color:`${client.colour}`}]}).then(msg => setTimeout(() => msg.delete(), 5));
    }
}