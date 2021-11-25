const Discord = require('discord.js');
const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS, //Servers
        Discord.Intents.FLAGS.GUILD_MESSAGES, //Server messages
        Discord.Intents.FLAGS.DIRECT_MESSAGES, // Private messages
        Discord.Intents.FLAGS.GUILD_BANS
    ]
});

const config = require("./config.json");
const fs = require('fs')
const web = require("./BotModules/web");
const gen = require("./BotModules/general");


const PREFIX = "?";

bot.on('ready', () => {
    console.log('TROPIBOT ENCLANCHÉ');
    bot.user.setActivity('Un bot TROPICOOL');
})

bot.on('messageCreate', message => {
    console.log("Message : "+ message.content + " | Channel ID : " + message.channel.id);
    if (message.author.bot) return;

    if(message.content.includes(bot.user.id)){
        message.reply("Tg");
    }

    if (message.content[0] === PREFIX) {
        let args = message.content.substring(PREFIX.length).split(" ");
        switch (args[0]) {
            case 'ping':
                message.channel.send('pong');
                break;
            case 'suicide':
                message.channel.send('OOF');
                bot.destroy();
                break;
            case 'help':
                gen.help(message);
                break;
            case 'curse':
                web.curse(message,args);
                break;
            case 'poll':
                gen.poll(bot, message, args);
                break;
            case 'roulette':
                gen.roulette(message);
                break;
            case 'stellaris':
                gen.stellaris(bot,message);
                break;
            default:
                console.log(args[0]);
                break;
        }
    }
});

//Si on est en local, besoin de token.json, sinon va chercher le token dans les variables config de Heroku. Un peu fait à la zob
try {
    if(fs.existsSync("./token.json")){
        const token = require("./token.json");
        const TOKEN = token.token
        bot.login(TOKEN).catch(console.error);
    }
    else {
        const TOKEN = process.env.TOKEN
        bot.login(TOKEN).catch(console.error);
    }
} catch (err) {
    console.error(err)
}
