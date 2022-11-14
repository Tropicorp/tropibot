const { SlashCommandBuilder } = require('@discordjs/builders');
const { execute } = require('./reload');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("poll")
        .setDescription("Faire un sondage")
        .addStringOption(option =>
            option.setName("question")
                .setDescription("La question du sondage")
                .setRequired(true)),
    async execute(interaction) {
        message.channel.send(interaction.options.getString('question')).then(messageReaction => {
            messageReaction.react("✅");
            messageReaction.react("❎");
            message.delete(3000);
        });
    }
}