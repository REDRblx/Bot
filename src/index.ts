import { Client as DiscordClient, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { connect } from "mongoose";
import { handleCommands } from "./handlers/CommandHandler";
import { handleEvents } from "./handlers/EventHandler";
config();

const database = connect(<string>process.env.MONGO_CONNECTION_URL);

const Client = new DiscordClient({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

Client.once("ready", (client) => {
  console.log("Ready");
  handleEvents(Client);
  handleCommands(Client);
});
Client.login(process.env.DISCORD_BOT_TOKEN);