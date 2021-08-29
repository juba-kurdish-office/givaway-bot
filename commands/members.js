const discord = require("discord.js");

module.exports = {
  name: "members",
  category: "info",
  description: "Get your id",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(
    `
<a:k37:875462321609252864>TOTAL MEMBERS - ${message.guild.memberCount}

<a:emoji_81:881156652244541500>Humans - ${message.guild.members.cache.filter(m => !m.user.bot).size}

<:emoji_87:881604932271239240>Bots - ${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
  }
}
