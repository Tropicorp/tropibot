module.exports = {
    name: "poll",
    description: "Faire un sondage",
    async run(client, message, args) {
        if (!args[0]) {
            message.reply("ça s'utilise comme ça : ?poll *question*");
            return;
        }
        let msgArgs = args.slice(0).join(" ");
        message.channel.send(msgArgs).then(messageReaction => {
            messageReaction.react("✅");
            messageReaction.react("❎");
            message.delete(3000);
        });
    }
}