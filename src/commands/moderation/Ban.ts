import { ApplicationCommandOptionType, CommandInteraction, GuildMember, User } from "discord.js";
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
    const targetUser: User = <User>interaction.options.getUser("user");
    const targetMember: GuildMember = <GuildMember>await interaction.guild?.members.fetch(targetUser.id);
    const member: GuildMember = <GuildMember>interaction.member;
    const reason: string = <string>interaction.options.get("reason")?.name;

    if (member.roles.highest < targetMember?.roles?.highest) {
      interaction.reply({
        embeds: [
          CommandErrorEmbed(
            "They have a higher role than you,",
            "You are attempting to ban someone with a higher role than you, this is not allowed."
          ),
        ],
      });
      return;
    } else if (targetMember.bannable === false) {
      interaction.reply({
        embeds: [CommandErrorEmbed("I am unable to ban that user,", "My role is likely too low to ban the user,")],
      });
    } else if (
      (member.roles.highest === targetMember?.roles?.highest &&
        targetMember.permissions.has("Administrator") &&
        member.permissions.has("Administrator")) ||
      (member.roles.highest === targetMember?.roles?.highest && targetMember.permissions.has("Administrator"))
    ) {
      interaction.reply({
        embeds: [
          CommandErrorEmbed(
            "They have the same level role as you,",
            "You are attempting to ban someone with the same level role as you, this is not allowed."
          ),
        ],
      });
    } else {
      targetMember.ban({ reason: reason });
    }
  },
});
