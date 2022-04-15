const config = require("../../config.json");

module.exports = {
    name: "stellaris",
    description: "Ptit stellaris ?",
    async run(client, message, args) {
        message.reply("C'est bon, personne n'y croyait mais Cerbear a joué à Stellaris.");
        const cerbear = bot.users.cache.get(config.cerbearId);
        if(cerbear != undefined) {
            cerbear.send("Bien joué gamin.");
        }  
    }
}
