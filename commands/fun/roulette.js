const Logger = require("../../utils/Logger");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roulette")
        .setDescription("Renvoies \"Pong! 🏓\""),
    async execute(interaction) {
        let x = Math.floor(Math.random()*6);
        Logger.info("Roulette");
        Logger.info(x);
        if(x === 0){
            interaction.reply("Perdu !");
            interaction.member.kick("Perdu !");
        } else {
            interaction.reply("Rien ne se passe.");
        }
    }
}
