import { ApplicationCommandOptionType, CommandInteraction, GuildMember, User } from "discord.js";
import { BanEmbed } from "../../utils/embeds/commands/BanEmbed";
import { CommandErrorEmbed } from "../../utils/embeds/CommandErrorEmbed";
import { Command } from "../../utils/models/Command";
export const Ban = new Command({
  id: "ban",
  name: "ban",
  description: "Bans a user",
  options: [
    {
      name: "user",
      description: "The user to ban,",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
    {
      name: "reason",
      description: "The reason to ban the user,",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
  ],
  commandFunction: async (interaction: CommandInteraction) => {
    const data = {
      member: <GuildMember>interaction.member,
      targetUser: <User>interaction.options.getUser("user"),
      reason: <string>interaction.options.get("reason")?.value || "No reason provided.",
      targetMember: <any>null,
    };

    try {
      data.targetMember = await interaction.guild?.members.fetch(data.targetUser.id);
    } catch (err) {
      interaction.reply({
        embeds: [
          CommandErrorEmbed(
            `${data.targetUser.username}#${data.targetUser.discriminator} is not a member of this guild,`,
            "They may have left, or been kicked or banned from the guild."
          ),
        ],
      });
      return;
    }
    if (data.member.roles.highest.position < data.targetMember.roles.highest.position) {
      interaction.reply({
        embeds: [
          CommandErrorEmbed(
            `${data.targetUser.username}#${data.targetUser.discriminator} has a higher role than you,`,
            "You are attempting to ban someone with a higher role than you, this is not allowed."
          ),
        ],
      });
      return;
    } else if (data.targetMember.bannable === false) {
      interaction.reply({
        embeds: [
          CommandErrorEmbed(
            `I am unable to ban ${data.targetUser.username}#${data.targetUser.discriminator},`,
            "My role is likely too low to ban the user,"
          ),
        ],
      });
    } else if (
      (data.member.roles.highest.position === data.targetMember.roles.highest.position &&
        data.targetMember.permissions.has("Administrator") &&
        data.member.permissions.has("Administrator")) ||
      (data.member.roles.highest.position === data.targetMember.roles.highest.position && data.targetMember.permissions.has("Administrator"))
    ) {
      interaction.reply({
        embeds: [
          CommandErrorEmbed(
            `${data.targetUser.username}#${data.targetUser.discriminator} has the same level role as you,`,
            "You are attempting to ban someone with the same level role as you, this is not allowed."
          ),
        ],
      });
    } else {
      data.targetMember.ban({ reason: data.reason });
      interaction.reply({
        embeds: [BanEmbed(interaction.user, data.targetUser, data.reason)],
      });
    }
  },
});
