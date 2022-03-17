const express = require("express")
const app = express()
app.listen(3000,()=>{
console.log("Project is runnning!")
})

app.get("/", (req, res) => {
 res.send("Hello world!");
})


const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]});
client.on(`on`, () => {
  client.user.setStatus(`dnd`)
  console.log("Stats are good")
})
client.on('ready', () => {
 client.user.setActivity(' Your Status ', { type: 'WATCHING' })
})

client.on("message", message =>{
if(message.content === "!help") {
message.channel.send("commands are !tryout !Mod")
}
if(message.content === "!tryout") {
message.channel.send("Ask A Staff Or Admin For Trying Out ")
}
if(message.content === "!Mod") {
message.channel.send("https://docs.google.com/forms/d/e/1FAIpQLSfCnc87yoQvY29YFNPg38Vmj5WoYFO-m_Fjf6YiHhOAHqjwmA/viewform Sincerly Aj")
}
if(message.content === "!") {
message.channel.send("Hi You Can Use my Commands In This Chat ")
}
})

client.login(process.env.token);