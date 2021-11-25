const Discord = require('discord.js');

const helpEmbed = new Discord.MessageEmbed()
    .setTitle("HELP - ALED")
    .setColor("#00AE86")
    .setThumbnail("https://cdn.discordapp.com/attachments/846773549661552710/846773681174741032/No_fond_logo_tropicorp.png")
    .setURL("https://www.youtube.com/watch?v=kJQP7kiw5Fk")
    .addField("?ping","Renvoies Pong")
    .addField("?curse", "Envoie une cursed_image")
    .addField("?poll *question*", "Envoies un sondage")
    .addField("?roulette", "1 chance sur 6 de se faire kick")
    .setTimestamp()
    .setAuthor("Tropibot", "https://cdn.discordapp.com/attachments/846773549661552710/846773670806683699/Logo_Tropicorp.png", "https://github.com/Tropicorp/tropibot");


const pollEmbed = new Discord.MessageEmbed()
    .setTitle("TUTO SONDAJ")
    .setColor("#00AE86")
    .setThumbnail("https://cdn.discordapp.com/attachments/846773549661552710/846773681174741032/No_fond_logo_tropicorp.png")
    .setURL("https://www.youtube.com/watch?v=kJQP7kiw5Fk")
    .setDescription("?poll (question)")
    .setTimestamp()
    .setAuthor("Tropibot", "https://cdn.discordapp.com/attachments/846773549661552710/846773670806683699/Logo_Tropicorp.png", "https://github.com/Tropicorp/tropibot");

exports.help = function (message) {
    message.channel.send({embeds : [helpEmbed]});
}

exports.poll = function (bot, message, args) {
    if (!args[1]) {
        message.reply("ça s'utilise comme ça : ?poll *question*");
        return;
    }
    let msgArgs = args.slice(1).join(" ");
    message.channel.send(msgArgs).then(messageReaction => {
        messageReaction.react("✅");
        messageReaction.react("❎");
        message.delete(3000);
    });
}

exports.roulette = function (message) {
    if(Math.floor(Math.random()*6) === 0){
        message.reply("Perdu !");
        message.member.kick("Perdu !");
    } else {
        message.reply("Rien ne se passe.");
    }
}



