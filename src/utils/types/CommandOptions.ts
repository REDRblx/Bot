import { ApplicationCommandOptionData, CommandInteractionOption } from "discord.js";

export type CommandOptions = {
  id: string;
  name: string;
  description: string;
  options: ApplicationCommandOptionData[];
  commandFunction: Function;
};
