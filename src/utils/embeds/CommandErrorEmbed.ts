import { EmbedBuilder } from "discord.js";

export const CommandErrorEmbed = (title: string, description: string) => {
  const embed = new EmbedBuilder().setTitle(title).setDescription(description);
  return embed;
};
