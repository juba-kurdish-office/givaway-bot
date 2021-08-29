const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );

    let Embed = new MessageEmbed()
            .setAuthor(
              `Commands of ${client.user.username}`,
              client.botconfig.IconURL
            )
            .setColor("RANDOM")
            .setFooter(
              `To get info of each command type ${
                GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
              }help [Command] | Have a nice day!`
            ).setDescription(`
<a:emoji_83:881181556604018780> music command
<a:emoji_80:881156593578827786> play    |     <a:emoji_80:881156593578827786> stop
<a:emoji_80:881156593578827786> skip    |     <a:emoji_80:881156593578827786> loop
<a:emoji_80:881156593578827786> resume  |     <a:emoji_80:881156593578827786> np
<a:emoji_80:881156593578827786> volume  |     <a:emoji_80:881156593578827786> lyrice
<a:emoji_81:881156652244541500> text command
<a:emoji_81:881156652244541500> clear   |     <a:emoji_81:881156652244541500> about
<a:emoji_81:881156652244541500> config  |     <a:emoji_81:881156652244541500> help
<a:emoji_81:881156652244541500> invite  |     <a:emoji_81:881156652244541500> bassboost
  
  Discord Music Bot Version: v${require("../package.json").version}
  [✨ Support Server](${
    client.botconfig.SupportServer
  }) | By [SudhanPlayz](https://github.com/juba-kurdish-offic)`);
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(message.channel, `❌ | Unable to find that command.`);

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .addField(
          "Permissions",
          "Member: " +
            cmd.permissions.member.join(", ") +
            "\nBot: " +
            cmd.permissions.channel.join(", "),
          true
        )
        .setFooter(
          `Prefix - ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }`
        );

      message.channel.send(embed);
    }
  },

SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false
      },
    ],
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
      );
  
      let Embed = new MessageEmbed()
            .setAuthor(
              `Commands of ${client.user.username}`,
              client.botconfig.IconURL
            )
            .setColor("RANDOM")
            .setFooter(
              `To get info of each command type ${
                GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
              }help [Command] | Have a nice day!`
            ).setDescription(`
            
            
  
  Discord Music Bot Version: v${require("../package.json").version}
  [✨ Support Server](${
    client.botconfig.SupportServer
  }) | [GitHub](https://github.com/SudhanPlayz/Discord-MusicBot) | By [SudhanPlayz](https://github.com/SudhanPlayz)`);
      if (!args) return interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find((x) => x.aliases && x.aliases.includes(args[0].value));
        if (!cmd)
          return client.sendTime(interaction, `❌ | Unable to find that command.`);
  
        let embed = new MessageEmbed()
          .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
          .setDescription(cmd.description)
          .setColor("GREEN")
          //.addField("Name", cmd.name, true)
          .addField("Aliases", cmd.aliases.join(", "), true)
          .addField(
            "Usage",
            `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
          )
          .addField(
            "Permissions",
            "Member: " +
              cmd.permissions.member.join(", ") +
              "\nBot: " +
              cmd.permissions.channel.join(", "),
            true
          )
          .setFooter(
            `Prefix - ${
              GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
            }`
          );
  
        interaction.send(embed);
      }
  },
}};
