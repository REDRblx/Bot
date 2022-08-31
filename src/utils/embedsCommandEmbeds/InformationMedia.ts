import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, EmbedBuilder, Message } from "discord.js";

export const Embed = {
  id: "informationEmbedMedia",
  selectMenu: {
    label: "Information Embed Media",
    description: "An embed for the media information.",
    value: "informationEmbedMedia",
  },
  embeds: () => { 
    return [new EmbedBuilder()
      .setColor(`#ff5050`)
      .setImage(`https://cdn.discordapp.com/attachments/984888925782933595/1014166824969052201/Untitled_design_35.png`)
      .setTitle(`Information`)
      .setDescription(
        `Welcome to Red Media, a subsidiary of Red Group.\nRed Media has been operating since August 2022.\n\n**Company Chairman:** Dev_Pie\n**Executive(s):** Kieran2904`
      )
      .setTimestamp(),

      new EmbedBuilder()
      .setColor(`#ff5050`)
      .setTitle(`Key Links`)
      .setDescription(
        `Here is a list of all the useful links that you may need, ranging from groups, discords and social media.\n\n• Gibraltar Discord: https://discord.gg/sSDPXdaKWC\n• Red Group: https://discord.gg/VdPmr5XxXU`)
      .setTimestamp()]
  },
  components: () => {
    return [];
  },
  callback: (message: Message) => {},
};