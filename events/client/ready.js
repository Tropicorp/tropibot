const Logger = require("../../utils/Logger");

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        Logger.client("TROPIBOT ENCLANCHÉ");
        client.user.setActivity('Un bot TROPICOOL');
    }
}