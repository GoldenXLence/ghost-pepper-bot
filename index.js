const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = require('./token.json');

const fs = require('fs');
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.on('ready', () => {
    console.log("Ready!");
});
 
client.on('message', message => {
    let args = message.content.substring(config.prefix.length).split(" ");
    
    
    switch (args[0]) {
 
        case "ping":
            client.commands.get('ping').execute(message, args);
        break;

        case "version":
            client.commands.get('version').execute(message, args, config );
        break;

        case "kick":
            client.commands.get('kick').execute(message, args);
        break;
    }
 
});
 
client.login(token.token);