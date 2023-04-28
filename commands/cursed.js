const fs = require('fs')
module.exports = {
    name: "cursed",
    description: "Gives you a cursed image.",

    

    async run (client, message, args) {
        
        var links = [];
        var usedLinks = [];

        try{

            const data = fs.readFileSync('/cursedLinks.txt', 'utf8')

            const lines = data.split(/\r?\n/);
            lines.forEach((line) => {
                links.push(line);
            });

        }catch (err){
            console.error(err)
        }

        var randomLink = links[Math.floor(Math.random() * links.length) + 1]

        message.channel.send(randomLink);

        //usedLinks.push(randomLink);

    }
}
