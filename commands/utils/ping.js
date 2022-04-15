module.exports = {
    name: "ping",
    description: "Renvoies \"Pong! 🏓\"",
    async run(client, message, args) {
        message.reply('Pong! 🏓');
    }
}
