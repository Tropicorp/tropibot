const Logger = require("../../utils/Logger");

module.exports = {
    name: "roulette",
    description: "Renvoies \"Pong! 🏓\"",
    async run(client, message, args) {
        let x = Math.floor(Math.random()*6);
        Logger.info("Roulette");
        Logger.info(x);
        if(x === 0){
            message.reply("Perdu !");
            message.member.kick("Perdu !");
        } else {
            message.reply("Rien ne se passe.");
        }
    }
}
