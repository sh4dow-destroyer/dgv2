const { Client, GatewayIntentBits, InteractionType } = require('discord.js');

const Discord = require('discord.js');

const config = require('./config.json');

const client = new Client({ 	
  intents: [ 		
    GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildVoiceStates,
  ],
});

module.exports = client;

const dc = require("discord.js");
const ms = require("ms");
const moment = require("moment");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

client.on('interactionCreate', (interaction) => {
  if(InteractionType === Discord.InteractionType.ApplicationCommand) {
    
    const cmd = client.slashCommands.get(interaction.commandName)
    
    if(!xmd) return interaction.reply('Error');
    
    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
    
    cmd.run(client, interaction)
  }
})

client.on('ready', () => {
  console.log("✅ Estou conectado em ${client.user.username}")
})

client.slashCommands = new Discord.Collection();

require('./handler')(client)

client.login(config.token)