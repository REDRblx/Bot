import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, EmbedBuilder, Message } from "discord.js";

export const Embed = {
  id: "applicationEmbed",
  selectMenu: {
    label: "Application Embed",
    description: "An embed for the application.",
    value: "applicationEmbed",
  },
  embed: () => {
    return new EmbedBuilder()
      .setColor(`#ff5050`)
      .setImage(`https://cdn.discordapp.com/attachments/967447441953656832/1011261659374964856/Untitled_design_27.png`)
      .setTitle(`Application`)
      .setDescription(
        `*Become a Baker!*\n\n Do you want to become a Baker for Dev_Pie's, or do you want to become a Supervisor and manage the Store?\n\nWell, now you can! Press either button below and begin the application process, management will respond as soon as possible!`
      )
      .setTimestamp();
  },
  component: () => {
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId(`bakerappButton`).setEmoji(`🥧`).setLabel(`Baker Application`).setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId(`supervisorappButton`).setEmoji(`🗒️`).setLabel(`Supervisor Application`).setStyle(ButtonStyle.Success)
    );
  },
  callback: (message: Message) => {},
};
