const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NzAxMTQ3NDI0NTY3MTk3Nzk4.XpxsKw.VBcdBjKA_L4I0R2KGG-2uNVPkLA";

bot.on("ready", () => {
  console.log("Tis Bot is online, yayyy");
});

bot.login(token);
