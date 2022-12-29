const client = require("..");
var config = require("../settings/config.json");
var ee = require("../settings/embed.json");
const { EmbedBuilder } = require("discord.js");
const { collectionConfig } = require("../modules/primary/mongo_login");
let permconvert = require("discord_perm_convert");

client.on('messageCreate', async (message) => {
    const configdb = await collectionConfig.find({}).toArray();
    const prefixodb = configdb[0].prefix;
    const prefixes = [config.prefix, `${prefixodb}`];
    if (!message.guild) return;
    if (message.author.bot) return;
    if (message.channel.partial) await message.channel.fetch();
    if (message.partial) await message.fetch();
    var prefix = "+" || prefixodb;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    

    if (message.content == `<@909537944581308416>`) {
        message.channel.send({
            embeds: [new EmbedBuilder()
                .setColor(ee.embed_color)
                .setAuthor({name: `Hey, Você me mencionou.. 😉`})
                .setThumbnail(`${client.user.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
                .setDescription(`Fui desenvolvido por <@737039257709051925> \n\n Meu nome é **${client.user.username}** \n Meus prefixos são \`${prefixodb}\` e \`${config.prefix}\` \n Você pode ver todos os meus comandos digitando \`+ajuda\``)
                .setFooter({text: `${ee.embed_footertext}`, iconURL: `${ee.embed_footericon}`})
            ]
        });
    }

    let hasPrefix = false;
    prefixes.some(p => message.content.startsWith(p)) ? hasPrefix = true : null;
    if(!hasPrefix) return;

    if(message.content.length <= 1) {
        return;
    }

    const command = client.commands.get(cmd.toLowerCase()) ||  client.commands.find((cmds) => cmds.aliases && cmds.aliases.includes(cmd));
    //if (!command) {message.channel.send(`Em Manutenção 👷🏻`)};
    if (!command) {
        message.delete();
        message.channel.send(`Esse comando não existe! Para saber quais são os comandos utilize \`${config.prefix}ajuda\``).then(msg => setTimeout(() => msg.delete(), 5000));
    };
    if (command) {
        if(message.member.permissions.has(command.permission) == false) {
            const Error = new EmbedBuilder()
            .setDescription(`🚨 | Desculpe, mas você não tem permissão para isso. (Permissão necessária: ${permconvert(command.permission)})`)
            .setColor(`#ff0000`)
            message.reply({embeds: [Error]}).then(msg => setTimeout(() => msg.delete(), 5000)).then(setTimeout(() => message.delete(), 5000));
        } else {
            command.run(client, message, args, prefix);
        }
    }
        
});