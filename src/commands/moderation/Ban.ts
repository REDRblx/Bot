import { CommandInteraction } from "discord.js";
import { Command } from "../../utils/models/Command";
export const Ban = new Command({
  id: "ban",
  name: "ban",
  description: "Bans a user",
  commandFunction: (interaction: CommandInteraction) => {},
});
