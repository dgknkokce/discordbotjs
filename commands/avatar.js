const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Brodcast someone's avatar",

    async run (client, message, args) {

        const user = message.mentions.users.first() || message.author;

        if(user){

            let avatar = user.displayAvatarURL({dynamic: false, format: "png"});


            const embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}'s avatar`)
            .setImage(avatar)
            .setColor("RANDOM")

            message.channel.send(embed);

        }else message.channel.send("There is no user here");
    }
}