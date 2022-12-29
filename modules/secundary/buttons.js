const {  ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
module.exports = {
     pause() {
        const r = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('pause/resumebtn')
                .setLabel(`⏸`)
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('skipbtn')
                .setLabel(`⏭`)
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('stopbtn')
                .setLabel(`⏹`)
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setCustomId('queuebtn')
                .setLabel('Mostrar Fila')
                .setStyle(ButtonStyle.Primary)
        );
        return r
    },
     resume() {
        const r = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('pause/resumebtn')
                .setLabel(`▶️`)
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('skipbtn')
                .setLabel(`⏭`)
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('stopbtn')
                .setLabel(`⏹`)
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setCustomId('queuebtn')
                .setLabel('Mostrar Fila')
                .setStyle(ButtonStyle.Primary)
        );
        return r
    }/*, // EM DESENVOLVIMENTO //
    volume() {
        const r = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('vol/down')
                .setLabel(`🔉`)
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('vol/mute')
                .setLabel(`🔈`)
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setCustomId('vol/up')
                .setLabel(`🔊`)
                .setStyle(ButtonStyle.Primary)
        );
        return r
    }*/ // EM DESENVOLVIMENTO //
}