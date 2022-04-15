module.exports = {
    name: "reload",
    description: "Relances le bot",
    async run(client, message, args) {
        message.reply('Bot relancé');
        return process.exit();
    }
}
