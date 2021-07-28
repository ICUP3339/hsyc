/*
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
*/

const Discord = require("discord.js");
var client = new Discord.Client();

client.on("ready", function() {
        console.log("Bot is up now.")
        client.user.setActivity(`Provoco chat | .help`,{type: "LISTENING"});
        client.channels.cache.get("834559120148267018").send("Bot is up.")
});

var tfcrole = "869310095706718340"
var fnrole = "869331552188891146"
var wummyrole = "869303405460459520"
var bdsmrole = "869373802205818921"
var tdrrole = "869727243587440650"

client.on("message", message => {
    if(message.content.startsWith(".iam ") && !message.member.nickname.includes("Owner")){
        
        if(message.content.split(".iam ") == ",TFC" && !message.member.roles.cache.has("869643087100657715")){
            message.member.setNickname("[TFC/Member] " + message.author.username)
            message.reply("you have joined **TFC**.")
            message.member.roles.remove("868782125028098089")
            message.member.roles.add("869304724309045378")
            message.member.roles.add(tfcrole) //TFC
            message.member.roles.remove(fnrole) //FN
            message.member.roles.remove(wummyrole) //Wummy
            message.member.roles.remove(bdsmrole) //BDSM
            message.member.roles.remove(tdrrole) //TDR
            message.member.roles.add("869643087100657715");
        }
        if(message.content.split(".iam ") == ",FN" && !message.member.roles.cache.has("869643087100657715")){
            message.member.setNickname("[FN/Member] " + message.author.username)
            message.reply("you have joined **FN**.")
            message.member.roles.remove("868782125028098089")
            message.member.roles.add("869304724309045378")
            message.member.roles.remove(tfcrole) //TFC
            message.member.roles.add(fnrole) //FN
            message.member.roles.remove(wummyrole) //Wummy
            message.member.roles.remove(bdsmrole) //BDSM
            message.member.roles.remove(tdrrole) //TDR
            message.member.roles.add("869643087100657715");
        }
        if(message.content.split(".iam ") == ",Wummy" || message.content.split(".iam ") == ",wummy" && !message.member.roles.cache.has("869643087100657715")){
            message.member.setNickname("[Wummy/Member] " + message.author.username)
            message.reply("you have joined **Wummy**.")
            message.member.roles.remove("868782125028098089")
            message.member.roles.add("869304724309045378")
            message.member.roles.remove(tfcrole) //TFC
            message.member.roles.remove(fnrole) //FN
            message.member.roles.add(wummyrole) //Wummy
            message.member.roles.remove(bdsmrole) //BDSM
            message.member.roles.remove(tdrrole) //TDR
            message.member.roles.add("869643087100657715");
        }
        if(message.content.split(".iam ") == ",BDSM" && !message.member.roles.cache.has("869643087100657715")){
            message.member.setNickname("[BDSM/Member] " + message.author.username)
            message.reply("you have joined **BDSM**.")
            message.member.roles.remove("868782125028098089")
            message.member.roles.add("869304724309045378")
            message.member.roles.remove(tfcrole) //TFC
            message.member.roles.remove(fnrole) //FN
            message.member.roles.remove(wummyrole) //Wummy
            message.member.roles.add(bdsmrole) //BDSM
            message.member.roles.remove(tdrrole) //TDR
            message.member.roles.add("869643087100657715");
        }
        if(message.content.split(".iam ") == ",TDR" && !message.member.roles.cache.has("869643087100657715")){
            message.member.setNickname("[TDR/Member] " + message.author.username)
            message.reply("you have joined **TDR**.")
            message.member.roles.remove("868782125028098089")
            message.member.roles.add("869304724309045378")
            message.member.roles.remove(tfcrole) //TFC
            message.member.roles.remove(fnrole) //FN
            message.member.roles.remove(wummyrole) //Wummy
            message.member.roles.remove(bdsmrole) //BDSM
            message.member.roles.add(tdrrole) //TDR
            message.member.roles.add("869643087100657715");
        }

        //Quitting your current clan
        if(message.content.split(".iam ") == ",Clanless" && !message.member.roles.cache.has("868782125028098089")){
            message.member.setNickname("[Clanless] " + message.author.username)
            message.reply("you have quit your clan.")
            message.member.roles.add("868782125028098089")
            message.member.roles.remove("869304724309045378")
            message.member.roles.remove(tfcrole) //TFC
            message.member.roles.remove("869609890220499034") //TSD
            message.member.roles.remove(fnrole) //FN
            message.member.roles.remove(wummyrole) //Wummy
            message.member.roles.remove(bdsmrole) //BDSM
        }

        else {
        //if(message.content.split(".iam ") != "TFC" && message.content.split(".iam ") != "TSD" && message.content.split(".iam ") != "FN" && message.content.split(".iam ") != "Wummy" && message.content.split(".iam ") != "wummy" &&  message.content.split(".iam ") != "BDSM"){
            //message.reply("this clan does not exist.")
        //}
        }
        /*message.member.setNickname("[" + message.content.split(".iam ").slice(1,7) + "/Member] " + realNick)
        message.reply("you have joined " + message.content.split(".iam ").slice(1,7))*/
        /*if(message.content.split(".iam ").slice(1,7) == "FN"){
            givenclanrole = fnrole
            givenclanmember = "869304724309045378";
        } if(message.content.split(".iam ").slice(1,7) == "TSD"){
            givenclanrole = "869370650828087386"
            givenclanmember = "869304724309045378";
        } if(message.content.split(".iam ").slice(1,7) == "TFC"){
            givenclanrole = tfcrole
            givenclanmember = "869304724309045378";
        } if(message.content.split(".iam ").slice(1,7) == "Wummy"){
            givenclanrole = wummyrole
            givenclanmember = "869304724309045378";
        } if(message.content.split(".iam ").slice(1,7) == "BDSM"){
            givenclanrole = bdsmrole
            givenclanmember = "869304724309045378";
        } if(message.content.split(".iam ").slice(1,7) != "TSD" && message.content.split(".iam ").slice(1,7) != "FN" && message.content.split(".iam ").slice(1,7) != "TFC" && message.content.split(".iam ").slice(1,7) != "wummy" && message.content.split(".iam ").slice(1,7) != "BDSM"){
            givenclanrole = "868782125028098089"
            givenclanmember = "868782125028098089";
        }*/
        /*message.member.roles.add(givenclanmember);
        message.member.roles.remove("868782125028098089");
        message.member.roles.add(givenclanrole);*/
    } /*if(message.content.startsWith(".iam ") && !message.member.nickname.includes("Member")){
        message.reply("you can't change clan as an Owner/Rep.")
    }*/
});

var clanname = "";
var clanowner = "";
var clandiscord = "";
var clanlogo = "";
var clancolor = "";
var clanmembers = ``;

client.on("message", async function(message) {
if (message.author.equals(client.user)) return;


if (!message.content.startsWith(".")) return;
var args = message.content.substring(".".length).split(" ");
switch (args[0].toLowerCase()) {




    // HELP COMMANDS
			
    case "help":
        const embedaaa = new Discord.MessageEmbed()
            .setColor("#1b82cc")
            .setTitle("Provoco Clan Bot: Commands")
            .addField(".iam [Clan]", "Command to join a clan.")
            .addField(".claninfo [Clan]", "Displays informations about a clan.")
            .addField(".clans", "Shows list of currently registered clans.")
            .addField(".ping", "Gives bot's exact ping latency.")
        message.channel.send(embedaaa)
    break;
			
    case "staffhelp":
        if(message.member.roles.cache.has("869232215958097960")){
            const embedaab = new Discord.MessageEmbed()
                .setColor("#1b82cc")
                .setTitle("Provoco Clan Bot: Moderators")
                .addField(".ba :warning:", "Gives access for a clan owner/rep to a battle channel.")
                .addField(".de :warning:", "Removes access from a clan owner/rep to a battle channel.")
                .addField(".verify [User]", "Confirms an unverified user.")
                .addField(".clear [Number]", "Purges a defined amount of messages.")
            message.channel.send(embedaab)
        }
    break;




    // NORMAL COMMANDS

    case "claninfo":
        if(message.content.split(".claninfo ") == ",TFC"){
            clanname = "The Frost Core (TFC)";
            clanowner = "<@449051636896104448>";
            clandiscord = "https://discord.gg/DaTvhMMVFG";
            clancolor = "2c9fd0";
            clanlogo = "https://cdn.discordapp.com/attachments/869302960990093312/869310012734980136/frostcore_1_1.png"
        }
        if(message.content.split(".claninfo ") == ",Wummy" || message.content.split(".claninfo ") == ",wummy"){
            clanname = "Wummy";
            clanowner = "<@721895613809033237>";
            clandiscord = "https://discord.gg/544tUC7q";
            clancolor = "ee6951";
            clanlogo = "https://media.discordapp.net/attachments/855789700538433557/869303110407954462/197bc6f732498eb313029a108eb115d1.png"
        }
        if(message.content.split(".claninfo ") == ",FN"){
            clanname = "Fire Nation (FN)";
            clanowner = "<@721298502973390859>";
            clandiscord = "Unavailable.";
            clancolor = "ae2020";
            clanlogo = "https://cdn.discordapp.com/attachments/866773686630481929/869346269519286272/FN_lofo.png"
        }
        if(message.content.split(".claninfo ") == ",BDSM"){
            clanname = "BDSM";
            clanowner = "<@494285581053067294>";
            clandiscord = "https://discord.gg/NyVAzCthEh";
            clancolor = "bf9944";
            clanlogo = "https://cdn.discordapp.com/attachments/869302960990093312/869431342054649886/image0.jpg"
        }
        if(message.content.split(".claninfo ") == ",TDR"){
            clanname = "The Death Realm (TDR)";
            clanowner = "<@710320340466925628>";
            clandiscord = "https://discord.gg/N8m4PQG4";
            clancolor = "ff3030";
            clanlogo = "https://cdn.discordapp.com/attachments/869743818998702101/869743873419800626/TDR_SIGN.png"
        }

        const newEmbeda = new Discord.MessageEmbed()
            .setColor("#" + clancolor)
            .setTitle("" + clanname + "")
            .addField("**Clan Owner:**",clanowner)
            .addField("**Clan Server:**",clandiscord)
            .setThumbnail(clanlogo)
        message.channel.send(newEmbeda)

        clancolor = ""
        clanname = ""
        clanowner = ""
        clandiscord = ""
        clanlogo = ""
    break;

    case "clans":
        message.channel.send("`.clans` is coming soon.")
    break;

    case "ping":
        const msg = await message.channel.send('Testing ping...')
        msg.edit(`Ping latency: **${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}` + "ms**!")
    break;


    // STAFF COMMANDS

    
    case "ba":
        if(message.member.roles.cache.has("869232215958097960")){
            message.channel.send("`.ba` is coming soon.")
        }
    break;
    
    case "de":
        if(message.member.roles.cache.has("869232215958097960")){
            message.channel.send("`.de` is coming soon.")
        }
    break;

    case "verify":
    var member = message.mentions.members.first();    
    if(message.member.roles.cache.has("869232215958097960") && member){
        message.delete();
        member.roles.add("868782125028098089")
        member.roles.remove("869237254466445353")
        member.setNickname("[Clanless] " + member.user.username)
        message.channel.send("<@" + member + "> has been verified!")
    }
    break;

    case "clear":
        if(!args[1]) return;
        message.delete()
        message.channel.bulkDelete(args[1]);
    break;







    // OWNER COMMANDS

    case "say":
        if(message.author.id == "634872299069374488"){
        message.delete();
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#6060FF")
            .setTitle(message.content.split(".say "))
        message.channel.send(newEmbed)
        }
    break;

    
    

    /*case "members":
        if(message.content.split(".members ") == ",TFC"){
            clanname = "The Frost Core (TFC)";
            clanmembers = `` + message.guild.roles.cache.get("");
            clancolor = "2c9fd0";
            clanlogo = "https://cdn.discordapp.com/attachments/869302960990093312/869310012734980136/frostcore_1_1.png"
        }
        if(message.content.split(".members ") == ",Wummy" || message.content.split(".members ") == ",wummy"){
            clanname = "Wummy";
            clanmembers = ``;
            clancolor = "ee6951";
            clanlogo = "https://media.discordapp.net/attachments/855789700538433557/869303110407954462/197bc6f732498eb313029a108eb115d1.png"
        }
        if(message.content.split(".members ") == ",FN"){
            clanname = "Fire Nation (FN)";
            clanmembers = ``;
            clancolor = "ae2020";
            clanlogo = "https://cdn.discordapp.com/attachments/866773686630481929/869346269519286272/FN_lofo.png"
        }
        if(message.content.split(".members ") == ",BDSM"){
            clanname = "BDSM";
            clanmembers = ``;
            clancolor = "bf9944";
            clanlogo = "https://cdn.discordapp.com/attachments/869302960990093312/869431342054649886/image0.jpg"
        }
        if(message.content.split(".claninfo ") == ",TDR"){
            clanname = "The Death Realm (TDR)";
            clanmembers = ``;
            clancolor = "ff3030";
            clanlogo = "https://cdn.discordapp.com/attachments/869743818998702101/869743873419800626/TDR_SIGN.png"
        }

        const newEmbeda1 = new Discord.MessageEmbed()
            .setColor("#" + clancolor)
            .setTitle("" + clanname + "")
            .setDescription(clanmembers)
            .setThumbnail(clanlogo)
        message.channel.send(newEmbeda1)

        clancolor = ""
        clanname  = ""
        clanmembers = ""
        clanlogo = ""
    break;*/

    }

});

client.login(process.env.TOKEN);
