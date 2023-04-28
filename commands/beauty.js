const canva = require('canvacord');
const Discord = require('discord.js');


module.exports = {
    name: "beauty",
    description: "oh this, this is beautiful!",


    async run (client, message, args) {

        const user = message.mentions.users.first() || message.author;

        if(user){

            let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

            let image = await canva.Canvas.beautiful(avatar);    

            let beauty = new Discord.MessageAttachment(image, "thisisbeautiful.png");

            message.channel.send(beauty);

        }else message.channel.send("There is no user here");
    }
}