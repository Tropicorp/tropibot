const Discord = require('discord.js');

const helpEmbed = new Discord.MessageEmbed()
    .setTitle("HELP - ALED")
    .setColor("#00AE86")
    .setThumbnail("https://cdn.discordapp.com/attachments/846773549661552710/846773681174741032/No_fond_logo_tropicorp.png")
    .setURL("https://www.youtube.com/watch?v=kJQP7kiw5Fk")
    .addField("?ping","Renvoies Pong")
    .addField("?curse", "Envoie une cursed_image")
    .addField("?poll *question*", "Envoies un sondage")
    .setTimestamp();

const pollEmbed = new Discord.MessageEmbed()
    .setTitle("TUTO SONDAJ")
    .setColor("#00AE86")
    .setThumbnail("https://cdn.discordapp.com/attachments/846773549661552710/846773681174741032/No_fond_logo_tropicorp.png")
    .setURL("https://www.youtube.com/watch?v=kJQP7kiw5Fk")
    .setDescription("?poll (question)")
    .setTimestamp()
    .setAuthor("Tropibot", "");

exports.help = function (message) {
    message.channel.send({embeds : [helpEmbed]});
    message.channel.send("help");
}

exports.poll = function (bot, message, args) {
    if (!args[1]) {
        message.channel.send({embeds : [pollEmbed]});
        return;
    }
    let msgArgs = args.slice(1).join(" ");
    message.channel.send(msgArgs).then(messageReaction => {
        messageReaction.react("✅");
        messageReaction.react("❎");
        message.delete(3000);
    });
}



