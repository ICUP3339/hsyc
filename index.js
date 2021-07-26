
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
			
            case "help":
			message.channel.send({embed: new Discord.RichEmbed()
            			.setColor("#1b82cc")
            			.setTitle("Feudal Clan Bot")
				.addField(".ba", "Gives access for a clan owner/rep to a battle channel.")
				.addField(".de", "Removes access from a clan owner/rep to a battle channel.")
        		})
            break;
                        
			
			
        }
});



client.login(process.env.TOKEN);
