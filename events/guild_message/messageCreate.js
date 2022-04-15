const PREFIX = "?";

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, message) {
        if (message.author.bot) return;

        if(message.content.includes(client.user.id)){
            message.reply("Tg");
        }

        if(!message.content.startsWith(PREFIX)) return;

        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if(cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if (cmd) cmd.run(client, message, args);
    }
}