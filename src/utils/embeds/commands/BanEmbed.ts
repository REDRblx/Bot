import { EmbedBuilder, User } from "discord.js";

export const BanEmbed = (user: User, targetUser: User, reason: string) => {
  const embed = new EmbedBuilder().setTitle(`Banned ${targetUser.username}#${targetUser.discriminator},`).addFields(
    {
      name: "Banned By:",
      value: `<@${user.id}>`,
      inline: false,
    },
    { name: "Reason:", value: reason, inline: false }
  );
  return embed;
};
