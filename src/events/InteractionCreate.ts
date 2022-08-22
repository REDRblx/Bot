import { Guild, Interaction } from "discord.js";
import { commands } from "../handlers/CommandHandler";
import { Event } from "../utils/models/Event";
import { CommandOptions } from "../utils/types/CommandOptions";

export const interactionCreate = new Event({
  id: "interaction_create",
  name: "Interaction Create",
  description: "The function that is invoked when an interaction is created.",
  event: "interactionCreate",
  eventFunction: (interaction: Interaction) => {
    if (interaction.isCommand()) {
      const command: any = commands.find((command: CommandOptions) => command.name === interaction.commandName);
      if (command) command.commandFunction(interaction);
    }
  },
});
