const canva = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "trigger",
    description: "Trigegr yourself",


    async run (client, message, args) {

        const user = message.mentions.users.first() || message.author;



        if(user){

            let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

            let image = await canva.Canvas.trigger(avatar);        

            let triggered = new Discord.MessageAttachment(image, "triggered.gif");

            message.channel.send(triggered);

        }else message.channel.send("There is no such user here");
    }
}