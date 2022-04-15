const { MessageEmbed } = require("discord.js");

let author = {
    name: "Tropibot",
    url: "https://github.com/Tropicorp/tropibot",
    iconURL: "https://cdn.discordapp.com/attachments/621261357852917780/913837273487933460/logo_tropibot_2.png"
}

const helpEmbed = new MessageEmbed()
    .setTitle("HELP - ALED")
    .setColor("#00AE86")
    .setThumbnail("https://cdn.discordapp.com/attachments/846773549661552710/846773681174741032/No_fond_logo_tropicorp.png")
    .setURL("https://www.youtube.com/watch?v=kJQP7kiw5Fk")
    .setDescription("Report un bug ou demander une feature : https://github.com/Tropicorp/tropibot/issues")
    .addField("?ping","Renvoies Pong")
    .addField("?curse", "Envoie une cursed_image")
    .addField("?poll *question*", "Envoies un sondage")
    .addField("?roulette", "1 chance sur 6 de se faire kick")
    .addField("?stellaris", "Juste un petit rappel...")
    .setTimestamp()
    .setAuthor(author);

module.exports = {
    name: "help",
    description: "Renvoies un message d'aide",
    async run(client, message, args) {
        message.channel.send({embeds : [helpEmbed]});
    }
}
