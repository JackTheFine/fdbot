const Discord = module.require("discord.js");
const { MessageEmbed } = require('discord.js');
const simplydjs = require("simply-djs")

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ttt')
		.setDescription('TickTacToe'),
		
	async execute(interaction) {
    simplydjs.tictactoe(interaction)
  },
};
