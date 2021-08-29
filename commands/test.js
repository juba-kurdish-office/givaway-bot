const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let bye = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setFooter('Kraken Balance Info!')
    .setThumbnail('https://media.discordapp.net/attachments/852987040659931248/871313810441510922/image0.gif')
    .setAuthor(user.tag, user.avatarURL({dynamic: true}))
    .addField(`Kraken Cash <a:emoji_56:874712610396844135> `,`__${toplam ? toplam +'':`0`}__`,true))

     
}

module.exports.help = {
  name: "test"
}
