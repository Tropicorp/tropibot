const Discord = require('discord.js');
const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS, //Servers
        Discord.Intents.FLAGS.GUILD_MESSAGES, //Server messages
        Discord.Intents.FLAGS.DIRECT_MESSAGES // Private messages
    ]
});

const config = require("./config.json");
const token = require("./token.json"); //à ajouter manuellement, info sensible
const web = require("./BotModules/web");
const gen = require("./BotModules/general");


const PREFIX = "?";

bot.on('ready', () => {
    console.log('TROPIBOT ENCLANCHÉ');
    bot.user.setActivity('Un bot TROPICOOL');
})

bot.on('messageCreate', message => {
    console.log(message.channel.id);
    if (message.author.bot) return;

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
            default:
                console.log(args[0]);
                break;
        }
    }
});

bot.login(token.token).catch(console.error);