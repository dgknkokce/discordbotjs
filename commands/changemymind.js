const canva = require('canvacord');
const Discord = require('discord.js');
const { changemymind } = require('canvacord/src/Canvacord');

module.exports = {
    name: "changemymind",
    description: "Trigegr yourself",


    async run (client, message, args) {

        let text = args.join(" ");

        if(!args[0]) return message.channel.send('Give me some argument man!');

        let image = await canva.Canvas.changemymind(text);

        let changeMyMind = new Discord.MessageAttachment(image, "cmm.png");

        message.channel.send(changeMyMind);
    }
}
