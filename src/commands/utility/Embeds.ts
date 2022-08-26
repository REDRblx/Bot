import { ApplicationCommandOptionType, CommandInteraction, ComponentType, GuildMember, User } from "discord.js";
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
    const embeds = [];
    const embedFileNames = load("/utils/embedsCommandEmbeds");
    embedFileNames.map((fileName) => {
      const embed = require(`../..${fileName}`).Embed;
      embeds.push(embed);
      options.push({
        label: embed.selectMenu.label,
        description: embed.selectMenu.description,
        value: embed.selectMenu.value,
      });
    });

    const row = EmbedSelectMenu(options);
    interaction.reply({ embeds: [EmbedsSelect()], components: [row], fetchReply: true }).then((message) => {
      const collector = message.createMessageComponentCollector({ componentType: ComponentType.SelectMenu, time: 15000 });

      collector.on("collect", (i) => {
        if (i.customId !== "embedSelectMenu") return;
        const embed = embeds.find((embed) => embed.id === i.values[0]);
        i.deferUpdate();
        message.delete();
        interaction.channel.send({ embeds: [embed.embed()], components: [embed.component()] }).then((message) => {
          embed.callback(message);
        });
      });
    });
  },
});
