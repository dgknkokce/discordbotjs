const canva = require('canvacord');
const Discord = require('discord.js');


module.exports = {
    name: "trash",
    description: "trash yourself!",


    async run (client, message, args) {

        const user = message.mentions.users.first() || message.author;


        if(user){

            let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

            let image = await canva.Canvas.trash(avatar);        

            let trash = new Discord.MessageAttachment(image, "trash.png");

            message.channel.send(trash);

        }else message.channel.send("There is no such user in here.");
    }
}