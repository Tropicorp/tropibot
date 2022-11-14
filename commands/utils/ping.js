const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Renvoies \"Pong! 🏓\""),
    async run(client, message, args) {
        message.reply('Pong! 🏓');
    }
}
