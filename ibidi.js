const {Client} = require("discord.js"), client = new Client();const request = require("request");const fetch = require("node-fetch")

client.on("ready", () => {
let guild = client.guilds.cache.get("URLYİ ALACAĞINIZ SUNUCU ID");
setInterval(() => {

if(guild.vanityURLCode == "ALINACAK URL") return;
 fetch(`https://discord.com/api/guilds/${guild.id}/vanity-url`,{
        method: "PATCH",
        headers: { 'Authorization': 'Bot ' + client.token, 'Content-Type': 'application/json'},
        body: JSON.stringify({code:ayar.alıncakurl})

    }).then(res => res.json())
     .then(json => { console.log(json)})
     .catch(err => console.log(err))

}, 50);
})

client.login("TOKEN");
