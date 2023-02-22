const Discord = require("discord.js");

module.exports = {
  name: "ping", //Nome do comando
  description: "Ver o meu ping!", //Descrição do comando
  type: Discord.ApplicationCommandType.ChatInput, //Tipo de comando
  
  run: async (client, interaction) => { //Lógica do comando
    let ping = client.ws.ping;
    
    const embed = new Discord.EmbedBuilder();
    embed.setColor("Random")
      .setDescription(`🏓 Pong! meu ping está em \`${ping}\``)
      .setFooter({ text: "Sistema completamente feito por dg$" });
    
    interaction.reply({ embeds: [embed] });
  }
};
