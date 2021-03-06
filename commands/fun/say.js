const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'say',
  aliases: ['bc, broadcast'],
  category: 'fun',
  description: 'The bot will say whatever you say',
  usage: '<input>',
  run: async (client, message, args) => {
    if (message.deletable) message.delete();
    if (args.length === 0)
      return message.reply('Nothing to say?').then((m) => m.delete(5000));
    const roleColor =
      message.guild.me.displayHexColor === '#000000'
        ? '#579DB3'
        : message.guild.me.displayHexColor;
    if (args[0].toLowerCase() === 'embed') {
      const embed = new MessageEmbed()
        .setColor(roleColor)
        // .setThumbnail(client.user.displayAvatarURL())
        .setDescription(args.slice(1).join(' '));
      message.channel.send(embed);
    } else {
      message.channel.send(args.join(' '));
    }
  },
};
