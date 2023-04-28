const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`.clear`', 'Purges messages')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`.ascii`', 'Converts text into ascii')
        .addField('`.avatar`', 'Shows a avatar of member from your server via mention')
        .addField('`.changemymind`', 'After this command write down something and see what happens :)')
        .addField('`.trigger`', 'Triggers that who wrote this command or mentioned user')
        .addField('`.cursed`', 'Gives a cursed image')
        .addField('`.trash`', 'Trash yourself or someone!')
        .addField('`.beauty`', 'Oh this, this is beautiful!')
        .addField('`.distracted`', 'Distracted boyfriend')
        .addField('`.hitler`', 'Worse than Hitler :(')
        .addField('`.rip`', '"F" in the chat')
        .addField('`.kepler`', 'Some quotes from Kepler-san')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`.ping`', 'Get the bot\'s API ping')
        .addField('`.insta`', 'Show insta adresses of users via their instagram usernames')
        .addField('`.help`', 'To see how each command works')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}