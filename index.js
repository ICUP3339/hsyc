
const Discord = require("discord.js");
var client = new Discord.Client();

client.on("ready", function() {
        client.user.setActivity(`test`,{type: "LISTENING"});
	client.channels.cache.get("869262649580482641").send("Bot is up.")
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
		    
            case "lock":
                    message.delete()
                    message.channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
		    message.channel.send("[TEST] - This channel has been locked.")
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
