const Discord = require('discord.js');
const https = require("https");
const xml2js = require('xml2js');
const rssparser = require('rss-parser');

let parser = new rssparser();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("curse")
        .setDescription("Renvoies une image maudite"),
    async execute(interaction) {
        (async () => {
    
            let feed = await parser.parseURL('https://www.reddit.com/r/cursedimages/.rss');
            console.log(feed.title);
            var i = 0;
            var rssArray = new Array();
        
            for (var j = 0; j < feed.items.length; j++) {
                rssArray[j] = feed.items[j].link;
                console.log(j + " : " + feed.items[j].link);
            }
            var randPost = Math.floor(Math.random() * rssArray.length) + 1;
            //console.log(rssArray.length + " : " + randPost);
            interaction.reply(rssArray[randPost]);
    
        })().catch(console.error);
    }
}