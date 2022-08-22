import { EmbedBuilder } from "discord.js";

export const EmbedsSelect = () => {
  const embed = new EmbedBuilder().setTitle(`Embed Sender,`).setDescription("Please select an embed to send in this channel.");
  return embed;
};
