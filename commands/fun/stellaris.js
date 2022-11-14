const config = require("../../config.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stellaris")
        .setDescription("Ptit stellaris ?"),
    async run(interaction) {
        interaction.reply("C'est bon, personne n'y croyait mais Cerbear a joué à Stellaris.");
        const cerbear = bot.users.cache.get(config.cerbearId);
        if(cerbear != undefined) {
            cerbear.send("Bien joué gamin.");
        }  
    }
}
