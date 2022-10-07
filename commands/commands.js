const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('shows commands'),
		
	async execute(interaction) {
const exampleEmbed = new MessageEmbed()
	  .setColor('#0099ff')
	  .setTitle('Command list')
	  .setURL('')
	  .setAuthor({name: `Flight Deck Bot`})
	  .setDescription("See all the commands currently configured with the bot.")
      .addFields(
		{ name: '!suggest <SUGGESTION>', value: 'This will put a message of what you say after the command.' },
		{ name: ';remind <TIME> <REMINDER>', value: 'Will ping you and tell you what you put as the reminder.' },
    { name: ';userinfo (Aliases: ui)', value: 'Show a discord user account information.'},
		//{ name: '!echo <ECHO>', value: 'Will say back to you what you put as <ECHO>' },
		{ name: ';8ball', value: 'Gives an answer'},
        {name: ';connect4 <USER>', value: 'Plays connect4 against someone else.'},
    { name: ';commands', value: 'Will give this message.'},
        {name: ';hack <USER>', value: 'hacks the specified user.' },
        {name: ';nitro', value: 'makes a fake nitro'},
        {name: ';slap <USER>', value: 'slaps the user'},
        {name: ';snake', value: 'makes a game of snake'},
        //{name: ';ttt <USER>', value: 'Tic Tac Toe'},
        {name: ';clap <MESSAGE>', value: 'puts clap emoji between all words'},
        {name: ';reverse <MESSAGE>', value: 'Reverses the message.'},
        {name: ';yomama', value: 'puts yomama before your message'},
        {name: ';uptime', value: 'views the bot uptime'},
        {name: 'dadjoke', value: 'says a dadjoke'},
        
    
	)
	  .setTimestamp()
	  .setFooter({ text: 'Flight Deck Bot', });
    return interaction.reply({ embeds: [exampleEmbed] })

  }
}