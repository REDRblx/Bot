import { Guild } from "discord.js";
import { Event } from "../utils/models/Event";

export const guildDelete = new Event({
  id: "guild_create",
  name: "Guild Delete",
  description: "The function that is invoked when a guild is deleted.",
  event: "guildDelete",
  eventFunction: (guild: Guild) => {},
});
