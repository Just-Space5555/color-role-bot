const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('+')) {
    if(msg.author != client.user){
        var messageSplited = msg.content.split(' ');
        if(messageSplited.length >= 2){
            if(messageSplited[0] == "+color" && messageSplited[1].startsWith('#')){
                msg.guild.createRole({
                  name: msg.author.id,
                  color: messageSplited[1],
                });
                        if(msg.guild.roles.find("name", msg.author.id) != null){
                            msg.guild.roles.find("name", msg.author.id).delete();
                        }
                        setTimeout(function(){
                            var role = msg.guild.roles.find("name", msg.author.id);
                            msg.member.addRole(role.id);
                        }, 1000)
                        msg.channel.send(":white_check_mark: **Successfully changed color** of user " + msg.author + " to " + messageSplited[1] + "!")
                       
            }
        }
    }
  }
});

client.login(process.env.token);
