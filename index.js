const Discord = require('discord.js');

const fs = require('fs')
const Logger = require("./utils/Logger");

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS, //Servers
        Discord.Intents.FLAGS.GUILD_MESSAGES, //Server messages
        Discord.Intents.FLAGS.DIRECT_MESSAGES, // Private messages
        Discord.Intents.FLAGS.GUILD_BANS
    ]
});

client.commands = new Discord.Collection();

["CommandUtils", "EventUtils"].forEach((handler) => {
    require(`./utils/handlers/${handler}`)(client);
});

process.on("exit", (code) => {
    Logger.client(`Le processus s'est arrêté avec le code: ${code}!`);
});

process.on("uncaughtException", (err, origin) => {
    Logger.error(`UNCAUGHT_EXCEPTION: ${err}`);
    console.error(`Origine: ${origin}`);
});

process.on("unhandledRejection", (reason, promise) => {
    Logger.warn(`UNHANDLED_REJECTION: ${reason}`);
    console.log(promise);
});

process.on("warning", (...args) => Logger.warn(...args));

//Si on est en local, besoin de token.json, sinon va chercher le token dans les variables config de Heroku. Un peu fait à la zob
try {
    if(fs.existsSync("./token.json")){
        const token = require("./token.json");
        const TOKEN = token.token
        client.login(TOKEN).catch(console.error);
    }
    else {
        const TOKEN = process.env.TOKEN
        client.login(TOKEN).catch(console.error);
    }
} catch (err) {
    console.error(err)
}
