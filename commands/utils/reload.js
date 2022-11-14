const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reload")
        .setDescription("Relances le bot"),
    async execute(interaction) {
        interaction.reply('Bot relancé');
        return process.exit();
    }
}
