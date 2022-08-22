import { CommandOptions } from "../types/CommandOptions";
export class Command {
  id: string;
  name: string;
  description: string;
  commandFunction: Function;

  constructor(options: CommandOptions) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.commandFunction = options.commandFunction;
  }
}
