const canva = require('canvacord');
const Discord = require('discord.js');


module.exports = {
    name: "distracted",
    description: "distracted boyfriend",


    async run (client, message, args) {

        const userArray = message.mentions.users.array();
        
        let user_for_redGirl;
        let user_for_boy;
        let user_for_otherGirl;
        let avatar_redGirl;
        let avatar_boy;
        let avatar_otherGirl;


        if((userArray.length < 2) || (userArray.length > 3)){
            message.channel.send("Please mention 2 or 3(optional) users");
        }else{
            user_for_redGirl = userArray[0];
            user_for_boy = userArray[1];

            avatar_redGirl = user_for_redGirl.displayAvatarURL({dynamic: false, format: "png"});
            avatar_boy = user_for_boy.displayAvatarURL({dynamic: false, format: "png"});


        
            if(userArray[2]){
                user_for_otherGirl = userArray[2];
                avatar_otherGirl = user_for_otherGirl.displayAvatarURL({dynamic: false, format: "png"});

            }
            
            let image = await canva.Canvas.distracted(avatar_redGirl, avatar_boy, avatar_otherGirl);    
            let distracted = new Discord.MessageAttachment(image, "distracted.png");
            message.channel.send(distracted);

        }


    }
}