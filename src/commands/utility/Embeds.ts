import { ApplicationCommandOptionType, CommandInteraction, GuildMember, User } from "discord.js";
import { BanEmbed } from "../../utils/embeds/commands/BanEmbed";
import { CommandErrorEmbed } from "../../utils/embeds/CommandErrorEmbed";
import { Command } from "../../utils/models/Command";
import { EmbedsSelect } from "../../utils/embeds/commands/EmbedsSelect";
import { EmbedSelectMenu } from "../../utils/components/embedsCommand/EmbedSelectMenu";
import { load } from "../../loaders/Loader";
export const Embeds = new Command({
  id: "embeds",
  name: "embeds",
  description: "Sends an embed.",
  options: [],
  commandFunction: async (interaction: CommandInteraction) => {
    const options = [];

    const embedFileNames = load("/utils/embedsCommandEmbeds");
    embedFileNames.map((fileName) => {
      console.log(fileName);
      const embed = require(`../..${fileName}`);
      options.push({
        label: embed.selectMenu.label,
        description: embed.selectMenu.description,
        value: embed.selectMenu.value,
      });
    });

    const row = EmbedSelectMenu(options);
    interaction.reply({ embeds: [EmbedsSelect()], components: [row] });
  },
});
