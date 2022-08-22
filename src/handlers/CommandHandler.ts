import { ApplicationCommandType, Client } from "discord.js";
import { loadCommands } from "../loaders/CommandLoader";
import { CommandOptions } from "../utils/types/CommandOptions";

export const commands: any[] = [];

export function handleCommands(Client: Client) {
  const commandsList: any[] = loadCommands("/commands");

  commandsList.map((eventPath: string) => {
    const commandFile = require(`../${eventPath}`);
    const command: CommandOptions = commandFile[Object.keys(commandFile)[0]];
    Client.application?.commands.create({
      name: command.name,
      type: ApplicationCommandType.ChatInput,
      description: command.description,
    });
    commands.push(command);
  });
}
