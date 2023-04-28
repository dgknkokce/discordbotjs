const canva = require('canvacord');
const Discord = require('discord.js');


module.exports = {
    name: "rip",
    description: "F in the chat",


    async run (client, message, args) {

        const userArray = message.mentions.users.array();

        if((userArray.length > 1)){
            message.channel.send("You can mention only 1 user");
        }else{

            const user = message.mentions.users.first() || message.author;


            if(user){

                let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

                let image = await canva.Canvas.rip(avatar);        

                let rip = new Discord.MessageAttachment(image, "rip.png");

                message.channel.send(rip);

            }else message.channel.send("There is no such user in here.");

        }

    }
}