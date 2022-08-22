import { Client as DiscordClient, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { connect } from "mongoose";
config();

const database = connect(<string>process.env.MONGO_CONNECTION_URL);

const Client = new DiscordClient({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

Client.once("ready", (client) => {
  console.log(client);
});
Client.login(process.env.DISCORD_BOT_TOKEN);
