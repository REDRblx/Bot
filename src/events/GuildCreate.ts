import { Guild } from "discord.js";
import { Event } from "../utils/models/Event";

export const GuildCreate = new Event({
  id: "guild_create",
  name: "Guild Create",
  description: "The function that is invoked when a guild is created.",
  event: "guildCreate",
  eventFunction: (guild: Guild) => {},
});
