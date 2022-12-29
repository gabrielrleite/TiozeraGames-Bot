const { GuildMember, PermissionsBitField, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const client = require("..");
var config = require("../settings/config.json");
var ee = require("../settings/embed.json");
const skip = require("../slscommands/MUSIC/skip");
const stop = require("../slscommands/MUSIC/stop");
const queue = require("../slscommands/MUSIC/queue");
const pp = require('../modules/secundary/buttons');
const volume = require("../slscommands/MUSIC/volume");

//var replace = JSON.stringify(JSON.parse(cmd.permission)).replace(536870912, "Permissão").replace(2, "Permiss")

client.on('interactionCreate', async interaction => {
    const query = client.player.getQueue(interaction.guildId);
    // Slash Command Handling
    //if (!interaction.isChatInputCommand()) return;
    if(interaction.isButton()) {
        if(interaction.customId == "pause/resumebtn")
        {
            if(query.paused) {
                if (!(interaction.member instanceof GuildMember) || !interaction.member.voice.channel) {
                    return void interaction.reply({ content: "You are not in a voice channel!", ephemeral: true });
                }
            
                if (interaction.guild.me?.voice?.channelId && interaction.member?.voice?.channelId !== interaction.guild.me?.voice?.channelId) {
                    return void interaction.reply({ content: "You are not in my voice channel!", ephemeral: true });
                }
                        if (!query|| !query.paused) return void interaction.reply({ content: "❌ | No music is being played!" });
                        query.resume();
                        return void  interaction.update({
                            components:[pp.pause()]
                        })
               }
            else {
                if (!(interaction.member instanceof GuildMember) || !interaction.member.voice.channel) {
                    return void interaction.reply({ content: "You are not in a voice channel!", ephemeral: true });
                }
            
                if (interaction.guild.me?.voice?.channelId && interaction.member?.voice?.channelId !== interaction.guild.me?.voice?.channelId) {
                    return void interaction.reply({ content: "You are not in my voice channel!", ephemeral: true });
                }
                        if (!query|| !query.playing) return void interaction.reply({ content: "❌ | No music is being played!" });
                        query.pause();
                        return void  interaction.update({
                            components:[pp.resume()]
                        })
            }
        }
        else if(interaction.customId == "skipbtn")
        {
            skip.run(client,interaction);
        }
        else if(interaction.customId == "stopbtn")
        {
            stop.run(client,interaction);
        }
        else if(interaction.customId == "queuebtn")
        {
            queue.run(client,interaction);
        }
        /* // EM DESENVOLVIMENTO //
        else if(interaction.customId == "vol/down")
        {
            global.volu = 50
            volume.run(client, interaction, interaction.options.volume = 50);
        }
        */ // EM DESENVOLVIMENTO //
    }
    if (interaction.isChatInputCommand) {
        await interaction.deferReply({ ephemeral: false }).catch(() => { });

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "." }).then(msg => setTimeout(() => msg.delete(), 5));

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        const permissionRequired = cmd.permission;
        //console.log(PermissionsBitField.All)
        //console.log(permissionRequired)
        if (cmd) {
            if(interaction.member.permissions.has(cmd.permission) == false) {
                const Error = new EmbedBuilder()
                .setDescription("🚨 | Desculpe, mas você não tem permissão para isso. (Permissão necessária: " + JSON.stringify(JSON.parse(cmd.permission)).replace(536870912, "Permissão").replace(2, "Permiss") + ")")
                .setColor("Red")
                interaction.editReply({embeds: [Error]}).then(msg => setTimeout(() => msg.delete(), 5000));
            } else {
                if (interaction.isContextMenuCommand) {
                    const command = client.slashCommands.get(interaction.commandName);
                    if (command) command.run(client, interaction);
                }
            }
            
        }
        
        
    }

    // Context Menu Handling
    
})