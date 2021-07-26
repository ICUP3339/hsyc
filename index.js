
const Discord = require("discord.js");
var client = new Discord.Client();

client.on("ready", function() {
        client.user.setActivity(`test`,{type: "LISTENING"});
});

client.on("message", async function(message) {
        if (message.author.equals(client.user)) return;
        if (!message.content.startsWith(".")) return;
        var args = message.content.substring(".".length).split(" ");
        switch (args[0].toLowerCase()) {
            case "clear":
                if(!args[1]) return;
                message.delete()
                message.channel.bulkDelete(args[1]);
            break;
            case "dnd":
                message.delete()
                client.user.setStatus("dnd")
                message.channel.send(":red_circle: **Do Not Disturb** status was set.")
                lm = message.channel.lastMessageID; message.guild.
                delMsg = true;
            break;
		    
            case "lock":
                    message.delete()
                    message.channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
            break;
                            
        }
});

var s = 0;
var dms = 0;
var delMsg = false;
var lm;

function t(){
        s++;
        if(delMsg == true){
                dms++;
                if(dms == 4){
                        client.channels.get("")
                }
        }
}

setInterval(t,1000);


client.login(process.env.TOKEN);
