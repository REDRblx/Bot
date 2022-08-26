import { ActionRowBuilder, SelectMenuBuilder, SelectMenuComponentOptionData } from "discord.js";

export const EmbedSelectMenu = (options: any[]) => {
  const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
    new SelectMenuBuilder().setCustomId("embedSelectMenu").setPlaceholder("Nothing selected").addOptions(options)
  );

  return row;
};
