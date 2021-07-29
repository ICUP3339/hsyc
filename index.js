const Discord = require("discord.js");
var client = new Discord.Client();

client.on("ready", function() {
        client.user.setActivity(`Provoco chat | .help`,{type: "LISTENING"});
        client.channels.cache.get("869916380475064360").send("Bot is up!")
});

var tfcrole = "869310095706718340"
var fnrole = "869331552188891146"
var wummyrole = "869303405460459520"
var bdsmrole = "869373802205818921"
var tdrrole = "869727243587440650"
var fakerole = "870033353372479488"
var rh = ""
var ownerclan = ""
var nameclan = ""
var battlechannel = ""
var battlerole = ""

var clanname = "";
var clanowner = "";
var clandiscord = "";
var clanlogo = "";
var clancolor = "";

client.on("message", message => {
    if(message.content.startsWith(".iam ") && !message.member.roles.cache.has("869257733776482324")){
        
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
            message.member.roles.remove(fakerole) //FaKe
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
            message.member.roles.remove(fakerole) //FaKe
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
            message.member.roles.remove(fakerole) //FaKe
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
            message.member.roles.remove(fakerole) //FaKe
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
            message.member.roles.remove(fakerole) //FaKe
            message.member.roles.add("869643087100657715");
        }
        if(message.content.split(".iam ") == ",FaKe" && !message.member.roles.cache.has("869643087100657715")){
            message.member.setNickname("[FaKe/Member] " + message.author.username)
            message.reply("you have joined **FaKe**.")
            message.member.roles.remove("868782125028098089")
            message.member.roles.add("869304724309045378")
            message.member.roles.remove(tfcrole) //TFC
            message.member.roles.remove(fnrole) //FN
            message.member.roles.remove(wummyrole) //Wummy
            message.member.roles.remove(bdsmrole) //BDSM
            message.member.roles.remove(tdrrole) //TDR
            message.member.roles.add(fakerole) //FaKe
            message.member.roles.add("869643087100657715");
        }

        //Quitting your current clan
        if(message.content.split(".iam ") == ",Clanless" && !message.member.roles.cache.has("868782125028098089")){
            message.member.setNickname("[Clanless] " + message.author.username)
            message.reply("you have quit your clan.")
            message.member.roles.add("868782125028098089")
            message.member.roles.remove("869304724309045378")
            message.member.roles.remove(tfcrole) //TFC
            message.member.roles.remove(fnrole) //FN
            message.member.roles.remove(wummyrole) //Wummy
            message.member.roles.remove(bdsmrole) //BDSM
            message.member.roles.remove(tdrrole) //TDR
            message.member.roles.remove(fakerole) //FaKe
        } else {
        }
    }
});

client.on("message", async function(message) {
if (message.author.equals(client.user)) return;


if (!message.content.startsWith(".")) return;
var args = message.content.substring(".".length).split(" ");
switch (args[0].toLowerCase()) {




    // HELP COMMANDS
			
    case "help":
        const embed1 = new Discord.MessageEmbed()
            .setColor("#1b82cc")
            .setTitle("Provoco Clan Bot: Commands")
            .addField(".iam [Clan]", "Command to join a clan.")
            .addField(".claninfo [Clan]", "Displays informations about a clan.")
            .addField(".clans", "Shows list of currently registered clans.")
            .addField(".ping", "Gives bot's exact ping latency.")
            .addField(".cohelp (For Clan Owners)", "Presents commands limited to clan owners.")
        message.channel.send(embed1)
    break;

    case "cohelp":
        if(message.member.roles.cache.has("869232215958097960")){
            const embed2 = new Discord.MessageEmbed()
                .setColor("#1b82cc")
                .setTitle("Provoco Clan Bot: Clan Owner")
                .addField(".setrep [User]", "Sets a member as a Rep in your clan.")
            message.channel.send(embed2)
        }
    break;
			
    case "staffhelp":
        if(message.member.roles.cache.has("869232215958097960")){
            const embed3 = new Discord.MessageEmbed()
                .setColor("#1b82cc")
                .setTitle("Provoco Clan Bot: Staff")
                .addField(".ba [Battlefield] [Clan]", "Gives access for a clan owner/rep to a battle channel.")
                .addField(".de [Battlefield] [Clan]", "Removes access from a clan owner/rep to a battle channel.")
                .addField(".verify [User]", "Confirms an unverified user.")
                .addField(".clear [Number]", "Purges a defined amount of messages.")
            message.channel.send(embed3)
        }
    break;




    // NORMAL COMMANDS

    case "claninfo":
        if(message.content.split(".claninfo ") == ",TFC"){
            clanname = "The Frost Core (TFC)";
            clanowner = "<@449051636896104448>";
            clandiscord = "https://discord.gg/DaTvhMMVFG";
            clancolor = "2c9fd0";
            clanlogo = "https://cdn.discordapp.com/attachments/869744024209195018/869979306846220318/frostcore_1_1.png"
        }
        if(message.content.split(".claninfo ") == ",Wummy" || message.content.split(".claninfo ") == ",wummy"){
            clanname = "Wummy";
            clanowner = "<@721895613809033237>";
            clandiscord = "https://discord.gg/544tUC7q";
            clancolor = "ee6951";
            clanlogo = "https://cdn.discordapp.com/attachments/869744024209195018/869979360688472084/197bc6f732498eb313029a108eb115d1.png"
        }
        if(message.content.split(".claninfo ") == ",FN"){
            clanname = "Fire Nation (FN)";
            clanowner = "<@721298502973390859>";
            clandiscord = "https://discord.gg/gBD63n6NSX";
            clancolor = "ae2020";
            clanlogo = "https://cdn.discordapp.com/attachments/869744024209195018/869979405546565704/FN_lofo.png"
        }
        if(message.content.split(".claninfo ") == ",BDSM"){
            clanname = "BDSM";
            clanowner = "<@494285581053067294>";
            clandiscord = "https://discord.gg/NyVAzCthEh";
            clancolor = "bf9944";
            clanlogo = "https://cdn.discordapp.com/attachments/869744024209195018/869979472609300500/image0.png"
        }
        if(message.content.split(".claninfo ") == ",TDR"){
            clanname = "The Death Realm (TDR)";
            clanowner = "<@710320340466925628>";
            clandiscord = "https://discord.gg/N8m4PQG4";
            clancolor = "ff3030";
            clanlogo = "https://cdn.discordapp.com/attachments/869744024209195018/869979567467683900/TDR_SIGN.png"
        }
        if(message.content.split(".claninfo ") == ",FaKe"){
            clanname = "FaKe";
            clanowner = "<@700323928014323792> & <@854447230568235048>";
            clandiscord = "https://discord.gg/NqPGBqqvhy";
            clancolor = "101020";
            clanlogo = "https://cdn.discordapp.com/attachments/869744024209195018/870036396667179028/fake.png"
        }

        const embed4 = new Discord.MessageEmbed()
            .setColor("#" + clancolor)
            .setTitle("" + clanname + "")
            .addField("**Clan Owner:**",clanowner)
            .addField("**Clan Server:**",clandiscord)
            .setThumbnail(clanlogo)
        message.channel.send(embed4)

        clancolor = ""
        clanname = ""
        clanowner = ""
        clandiscord = ""
        clanlogo = ""
    break;

    case "clans":
        const embed5 = new Discord.MessageEmbed()
            .setColor("#1b82cc")
            .setTitle("**Currently registered clans:**")
            .setDescription(`<@&869373802205818921>
<@&870033353372479488>
<@&869331552188891146>
<@&869727243587440650>
<@&869310095706718340>
<@&869303405460459520>`)
        message.channel.send(embed5)
    break;

    case "ping":
        const msg = await message.channel.send('Testing ping...')
        msg.edit(`Ping latency: **${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}` + "ms**!")
    break;


    // CLAN OWNERS COMMANDS

    case "setrep":
        var a = message.mentions.members.first();
        if(message.member.roles.cache.has("869257733776482324") || message.member.roles.cache.has("869232215958097960" && a)){
            message.delete();
            if(message.member.roles.cache.has(tdrrole) && a.roles.cache.has(tdrrole)){
                rh = "TDR"
                a.roles.add("869257648875380816")
                a.roles.remove("869304724309045378")
                a.setNickname("[" + rh + "/Rep]")
            }
            if(message.member.roles.cache.has(bdsmrole) && a.roles.cache.has(bdsmrole)){
                rh = "BDSM"
                a.roles.add("869257648875380816")
                a.roles.remove("869304724309045378")
                a.setNickname("[" + rh + "/Rep]")
            }
            if(message.member.roles.cache.has(fnrole) && a.roles.cache.has(fnrole)){
                rh = "FN"
                a.roles.add("869257648875380816")
                a.roles.remove("869304724309045378")
                a.setNickname("[" + rh + "/Rep]")
            }
            if(message.member.roles.cache.has(wummyrole) && a.roles.cache.has(wummyrole)){
                rh = "Wummy"
                a.roles.add("869257648875380816")
                a.roles.remove("869304724309045378")
                a.setNickname("[" + rh + "/Rep]")
            }
            if(message.member.roles.cache.has(tfcrole) && a.roles.cache.has(tfcrole)){
                rh = "TFC"
                a.roles.add("869257648875380816")
                a.roles.remove("869304724309045378")
                a.setNickname("[" + rh + "/Rep]")
            }
            if(message.member.roles.cache.has(tfcrole) && a.roles.cache.has(tfcrole)){
                rh = "FaKe"
                a.roles.add("869257648875380816")
                a.roles.remove("869304724309045378")
                a.setNickname("[" + rh + "/Rep]")
            }
        }
    break;


    // STAFF COMMANDS
    
    case "ba":
        if(message.member.roles.cache.has("869232215958097960")){
            if(args[1] == "1"){
                battlechannel = "<#869259094308032564>"
                battlerole = "869916373600567338"
            } if(args[1] == "2"){
                battlechannel = "<#869259116525268992>"
                battlerole = "869916399999516703"
            } if(args[1] == "3"){
                battlechannel = "<#869259132367155270>"
                battlerole = "869916417925980161"
            } if(args[1] == "4"){
                battlechannel = "<#869259151673540669>"
                battlerole = "869916436242509854"
            } if(args[1] == "5"){
                battlechannel = "<#869259169297993828>"
                battlerole = "869916456714911754"
            } if(args[1] == "6"){
                battlechannel = "<#869259191523606589>"
                battlerole = "869916480043626506"
            } if(args[1] == "7"){
                battlechannel = "<#869259208837718036>"
                battlerole = "869916497127034902"
            } if(args[1] == "8"){
                battlechannel = "<#869259229159129138>"
                battlerole = "869916519344242698"
            } if(args[1] == "9"){
                battlechannel = "<#869259256556322847>"
                battlerole = "869916550025588806"
            } if(args[1] == "10"){
                battlechannel = "<#869259281072001105>"
                battlerole = "869916579184382032"
            } if(args[1] == "11"){
                battlechannel = "<#869934958012137512>"
                battlerole = "869990176468918302"
            }
            if(args[2] == "FN"){
                ownerclan = "721298502973390859"
                nameclan = "FN"
            } if(args[2] == "TFC"){
                ownerclan = "449051636896104448"
                nameclan = "TFC"
            } if(args[2] == "BDSM"){
                ownerclan = "494285581053067294"
                nameclan = "BDSM"
            } if(args[2] == "TDR"){
                ownerclan = "710320340466925628"
                nameclan = "TDR"
            } if(args[2] == "Wummy" || args[2] == "wummy"){
                ownerclan = "721895613809033237"
                nameclan = "Wummy"
            } if(args[2] == "FaKe"){
                ownerclan = "700323928014323792"
                nameclan = "FaKe"
            }

            if(battlechannel.length > 0 && nameclan.length > 0){
                if(nameclan == "FN"){
                    let uu = message.guild.members.fetch('721298502973390859')
                    uu.then(function(vv){
                        vv.roles.add(battlerole)
                    })
                }
                if(nameclan == "TFC"){
                    let uu = message.guild.members.fetch('449051636896104448')
                    uu.then(function(vv){
                        vv.roles.add(battlerole)
                    })
                }
                if(nameclan == "BDSM"){
                    let uu = message.guild.members.fetch('494285581053067294')
                    uu.then(function(vv){
                        vv.roles.add(battlerole)
                    })
                }
                if(nameclan == "TDR"){
                    let uu = message.guild.members.fetch('710320340466925628')
                    uu.then(function(vv){
                        vv.roles.add(battlerole)
                    })
                }
                if(nameclan == "Wummy"){
                    let uu = message.guild.members.fetch('721895613809033237')
                    uu.then(function(vv){
                        vv.roles.add(battlerole)
                    })
                }
                if(nameclan == "FaKe"){
                    let uu = message.guild.members.fetch('700323928014323792')
                    uu.then(function(vv){
                        vv.roles.add(battlerole)
                    })
                }
                message.channel.send("**[" + nameclan + "]** was given access to " + battlechannel + ".")
            }
            battlechannel = ""
            nameclan = ""
        }
    break;
    
    case "de":
        if(message.member.roles.cache.has("869232215958097960")){
            if(args[1] == "1"){
                battlechannel = "<#869259094308032564>"
                battlerole = "869916373600567338"
            } if(args[1] == "2"){
                battlechannel = "<#869259116525268992>"
                battlerole = "869916399999516703"
            } if(args[1] == "3"){
                battlechannel = "<#869259132367155270>"
                battlerole = "869916417925980161"
            } if(args[1] == "4"){
                battlechannel = "<#869259151673540669>"
                battlerole = "869916436242509854"
            } if(args[1] == "5"){
                battlechannel = "<#869259169297993828>"
                battlerole = "869916456714911754"
            } if(args[1] == "6"){
                battlechannel = "<#869259191523606589>"
                battlerole = "869916480043626506"
            } if(args[1] == "7"){
                battlechannel = "<#869259208837718036>"
                battlerole = "869916497127034902"
            } if(args[1] == "8"){
                battlechannel = "<#869259229159129138>"
                battlerole = "869916519344242698"
            } if(args[1] == "9"){
                battlechannel = "<#869259256556322847>"
                battlerole = "869916550025588806"
            } if(args[1] == "10"){
                battlechannel = "<#869259281072001105>"
                battlerole = "869916579184382032"
            } if(args[1] == "11"){
                battlechannel = "<#869934958012137512>"
                battlerole = "869990176468918302"
            }
            if(args[2] == "FN"){
                ownerclan = "721298502973390859"
                nameclan = "FN"
            } if(args[2] == "TFC"){
                ownerclan = "449051636896104448"
                nameclan = "TFC"
            } if(args[2] == "BDSM"){
                ownerclan = "494285581053067294"
                nameclan = "BDSM"
            } if(args[2] == "TDR"){
                ownerclan = "710320340466925628"
                nameclan = "TDR"
            } if(args[2] == "Wummy" || args[2] == "wummy"){
                ownerclan = "721895613809033237"
                nameclan = "Wummy"
            } if(args[2] == "FaKe"){
                ownerclan = "700323928014323792"
                nameclan = "FaKe"
            }

            if(battlechannel.length > 0 && nameclan.length > 0){
                if(nameclan == "FN"){
                    let uu = message.guild.members.fetch('721298502973390859')
                    uu.then(function(vv){
                        vv.roles.remove(battlerole)
                    })
                }
                if(nameclan == "TFC"){
                    let uu = message.guild.members.fetch('449051636896104448')
                    uu.then(function(vv){
                        vv.roles.remove(battlerole)
                    })
                }
                if(nameclan == "BDSM"){
                    let uu = message.guild.members.fetch('494285581053067294')
                    uu.then(function(vv){
                        vv.roles.remove(battlerole)
                    })
                }
                if(nameclan == "TDR"){
                    let uu = message.guild.members.fetch('710320340466925628')
                    uu.then(function(vv){
                        vv.roles.remove(battlerole)
                    })
                }
                if(nameclan == "Wummy"){
                    let uu = message.guild.members.fetch('721895613809033237')
                    uu.then(function(vv){
                        vv.roles.remove(battlerole)
                    })
                }
                if(nameclan == "FaKe"){
                    let uu = message.guild.members.fetch('700323928014323792')
                    uu.then(function(vv){
                        vv.roles.remove(battlerole)
                    })
                }
                message.channel.send("**[" + nameclan + "]**'s access to " + battlechannel + " was removed.")
            }
            battlechannel = ""
            nameclan = ""
        }
    break;

    case "verify":
    var unv = message.mentions.members.first();    
    if(message.member.roles.cache.has("869232215958097960") && unv){
        message.delete();
        unv.roles.add("868782125028098089")
        unv.roles.remove("869237254466445353")
        unv.setNickname("[Clanless] " + member.user.username)
        message.channel.send("<@" + member + "> has been verified!")
    }
    break;

    case "clear":
        if(!args[1]) return;
        message.delete()
        message.channel.bulkDelete(args[1]);
    break;





    // TEMPORARY COMMANDS

    case "apply":
        message.delete();
        if(message.channel.id == "869635312396140644"){
            client.channels.cache.get("869637886910271528").send("https://tenor.com/view/rainbow-color-line-colorful-change-color-gif-17422882")
            client.channels.cache.get("869637886910271528").send("**`" + message.author.username + "#" + message.author.discriminator + "`'s Application:**" + `
            ` + message.content.split(".apply ").join(" "))
        }
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

    }

});

client.login(process.env.TOKEN);
