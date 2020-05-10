const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async ()=> {

    console.log(`${client.user.username} is online of geupdate!`)
});

bot.login(process.env.token);
