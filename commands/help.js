const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Moon Light Gif")
      .setTitle("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon.")
      .addField("<a:emoji_84:881198203448475668> Giveaway <a:emoji_84:881198203448475668>","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("<a:emoji_2:872570903945441390> Examples <a:emoji_2:872570903945441390>", "g!start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing")
      .addField("<a:emoji_4:872571016612818994> Utility <a:emoji_4:872571016612818994>", "ping, invite", true)
      .addField("<a:emoji_5:872571053086503012> ℹ Information ℹ <a:emoji_5:872571053086503012>", "stats", true)
      .addField("Check out", "[This Channel](https://www.youtube.com/channel/UCU5OWSH6vuZ864TNuycvMzA) to make your own giveaway bot")
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Sent the commands in Direct Messages! <a:emoji_84:881198170850336788>, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
