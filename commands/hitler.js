const canva = require('canvacord');
const Discord = require('discord.js');


module.exports = {
    name: "hitler",
    description: "worse than hitler!",


    async run (client, message, args) {

        const user = message.mentions.users.first() || message.author;


        if(user){

            let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

            let image = await canva.Canvas.hitler(avatar);     

            let hitler = new Discord.MessageAttachment(image, "hitler.png");

            message.channel.send(hitler);


        }else message.channel.send("There is no such user here");
    }
}