const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: "Guild Moderator"
};

exports.help = {
  name: "purge",
  category: "Miscellaneous",
  description: "A standard issue example command.",
  usage: "-purge"
};
