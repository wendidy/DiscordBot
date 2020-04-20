const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NzAxMTQ3NDI0NTY3MTk3Nzk4.Xpz70w.3FAnszxU8osgyJexzWNaSMZW9mI";
const PREFIX = "#";

bot.on("ready", () => {
  console.log("Tis Bot is online, yayyy");
});

bot.on("message", (m) => {
  //length will always be 1, basically its splitting the string into words separated by space
  //meanwhile get rid of the prefix
  let args = m.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    // case t.toUpperCase() === "hi".toUpperCase(): //need to fix this
    //   m.reply("hi");
    //   break;
    case "ping":
      m.channel.send("sup");
      break;
    case "info":
      //there is a difference between undefined and NULL
      if (args[1] != undefined) {
        return m.channel.send(
          "so here is the info for " +
            args[1] +
            ": unknown species. you are welcome"
        );
      } else {
        m.reply(
          "I don't know what info you want, please specify with one more word"
        );
      }
      break;
    case "clear":
      if (!args[1]) return m.reply("please specify");
      m.channel.bulkDelete(args[1]);
      break;
  }
  // if (m.content.toUpperCase() === "HELLO" || m.content.toUpperCase() === "HI") {
  //   m.reply("Wow you are not a bot, you talk?");
  // }
});

bot.login(token);
