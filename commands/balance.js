const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  let cash = await db.get(`cash_${message.author.id}`)
  if(cash === null) return message.channel.send("JE Coin hesabı bulunamadı! `!hesapaç` yazarak hemen JE Coin hesabı oluşturun!")
  let embed = new Discord.MessageEmbed()
  .setTitle("Just Elite Ekonomi Sistemi")
  .setColor("RANDOM")
  .addField("Şuan mevcut olan JE Coin sayısı : ", cash, true)
  .setTimestamp()
  .setImage(message.author.avatarURL)
   message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "balance",
  description: "",
  usage: ""
};
