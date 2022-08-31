import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, EmbedBuilder, Message } from "discord.js";

export const Embed = {
  id: "informationEmbedPies",
  selectMenu: {
    label: "Information Embed Pies",
    description: "An embed for the Dev_Pie's information.",
    value: "informationEmbedPies",
  },
  embeds: () => { 
    return [new EmbedBuilder()
      .setColor(`#ff5050`)
      .setImage(`https://cdn.discordapp.com/attachments/967447441953656832/1011261659374964856/Untitled_design_27.png`)
      .setTitle(`Information`)
      .setDescription(
        `Welcome to Dev_Pie's, a subsidiary of Red Group.\nDev_Pie's has been operating since August 2022.\n\n**Company Chairman:** Dev_Pie\n**Executive(s):** Kieran2904`
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