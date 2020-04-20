const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NzAxMTQ3NDI0NTY3MTk3Nzk4.XpxsKw.VBcdBjKA_L4I0R2KGG-2uNVPkLA";
const PREFIX = "#";

bot.on("ready", () => {
  console.log("Tis Bot is online, yayyy");
});

bot.on("message", (m) => {
  //length will always be 1, basically its splitting the string into words separated by space
  //meanwhile get rid of the prefix
  let args = m.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    case "ping":
      // m.reply("you think you are a ping pong or what");
      m.channel.send("sup");
      break;
  }
  // if (m.content.toUpperCase() === "HELLO" || m.content.toUpperCase() === "HI") {
  //   m.reply("Wow you are not a bot, you talk?");
  // }
});

bot.login(token);
