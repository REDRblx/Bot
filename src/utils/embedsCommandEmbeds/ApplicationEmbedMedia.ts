import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, EmbedBuilder, Message } from "discord.js";

export const Embed = {
  id: "applicationEmbedMedia",
  selectMenu: {
    label: "Application Embed Media",
    description: "An embed for the application.",
    value: "applicationEmbedMedia",
  },
  embeds: () => { 
    return [new EmbedBuilder()
    .setColor(`#ff5050`)
    .setImage(`https://cdn.discordapp.com/attachments/984888925782933595/1014166824969052201/Untitled_design_35.png`)
    .setTitle(`Application`)
    .setDescription(
      `*Become a Photographer!*\n\nDo you want to become a Journalist for Red Media, or do you want to become a Photographer and take photos?\n\nWell, now you can! Press either button below and begin the application process, management will respond as soon as possible!`
    )
    .setTimestamp()]
  },
  components: () => {
    return [new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId(`photographerappButton`).setEmoji(`📸`).setLabel(`Photographer Application`).setStyle(ButtonStyle.Success)
    )];
  },
  callback: (message: Message) => {},
};