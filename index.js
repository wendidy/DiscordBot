const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NzAxMTQ3NDI0NTY3MTk3Nzk4.Xpz70w.3FAnszxU8osgyJexzWNaSMZW9mI";
const PREFIX = ".";
const ms = require("ms");

bot.on("ready", () => {
  console.log("Tis Bot is online, yayyy");
});

bot.on("message", (m) => {
  //checking if the first char is '#'
  if (m.content[0] != ".") {
    return;
  }
  //length will always be 1, basically its splitting the string into words separated by space
  //meanwhile get rid of the prefix
  let args = m.content.slice(PREFIX.length).split(" ");
  console.log(args);
  //console.log(args);
  switch (args[0]) {
    // case t.toUpperCase() === "hi".toUpperCase(): //need to fix this
    //   m.reply("hi");
    //   break;
    case "mute":
      let person = m.mentions.members.first() || m.guild.members.fetch(args[1]); //m.guild.member(
      //console.log(person);
      if (!person) return m.reply("I don't know who this is, bro.");

      let mainrole = m.guild.roles.cache.find((role) => role.name === "Main");
      let muterole = m.guild.roles.cache.find((role) => role.name === "Mute");

      if (!muterole) return m.reply("Sorry they simply don't exsit.");

      let time = args[2];
      console.log(time);
      if (!time) return m.reply("That's not a time. How did you even do it?");

      person.removeRole(mainrole.id);
      person.addRole(muterole.id);
      // person.remove("Main");
      // person.add("Mute");

      m.channel.send(
        `@${person.user.tag} has now been mute for ${ms(ms(time))}`
      );

      setTimeout(() => {
        person.addRole(mainRole.id);
        person.removeRole(muterole.id); //switching the order and see how that looks like
        m.channel.send(`@${person.user.tag} has been unmuted, good job!`);
      }, ms(time));

    case "ping":
      m.channel.send("sup");
      break;
    case "info":
      //there is a difference between undefined and NULL
      if (args[1] != undefined) {
        return m.channel.send(
          "So here is the info for " +
            args[1] +
            ": unknown species. You are welcome."
          //*need to change the special char in front of the name,
          //e.g @onion
        );
      } else {
        m.reply(
          "I don't know what info you want, please specify with one more word"
        );
      }
      break;
    case "clear":
      if (!args[1]) return m.reply("please specify");
      //console.log(typeof args[1]); //returns a string ****
      else if (Number(args[1]) != Number(args[1])) {
        return m.reply("invalid");
      } else if (args[1] <= 0) {
        return m.reply("What do you think I am, put a positive number!");
      } else {
        console.log(args[1]);
        m.channel.bulkDelete(args[1]); //in this case, args[1] has to be an int
      }

      break;
    case "embed":
      const embed = new Discord.MessageEmbed()
        .addField("Name", m.author.username, true)
        .addField("Current server", m.guild.name, true)
        .setTitle("Info Embed")
        .setColor(0xd03716)
        .setFooter("So this is a footer")
        .setURL("https://discord.js.org/#/docs/main/stable/general/welcome")
        .setThumbnail(m.author.displayAvatarURL());
      m.channel.send(embed);
      break;
  }
  // if (m.content.toUpperCase() === "HELLO" || m.content.toUpperCase() === "HI") {
  //   m.reply("Wow you are not a bot, you talk?");
  // }
});

bot.login(token);
