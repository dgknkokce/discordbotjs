module.exports = {
    name: "insta",
    description: "Show insta adresses of users.",

    async run (client, message, args) {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You don't have the permission.`);

        if(!args[0]) return message.channel.send('I need ur username.')
        //message.channel.send(`https://www.instagram.com/${args[0]}/`);


        const user = message.mentions.users.first() || message.author;
        console.log(user);
        
    }
}