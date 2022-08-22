import { CommandInteractionOption } from "discord.js";
import { CommandOptions } from "../types/CommandOptions";
export class Command {
  id: string;
  name: string;
  description: string;
  options: CommandInteractionOption[];
  commandFunction: Function;

  constructor(options: CommandOptions) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.options = options.options;
    this.commandFunction = options.commandFunction;
  }
}
