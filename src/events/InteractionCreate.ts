import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  Guild,
  Interaction,
  InteractionType,
  ModalActionRowComponentBuilder,
  ModalBuilder,
  TextChannel,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

import { commands } from "../handlers/CommandHandler";
import { Event } from "../utils/models/Event";
import { CommandOptions } from "../utils/types/CommandOptions";

const applicationButtonsBakery = new ActionRowBuilder<ButtonBuilder>().addComponents(
  new ButtonBuilder()
    .setCustomId(`acceptButtonApplicationBaker`)
    .setEmoji(`✅`)
    .setLabel(`Accept`)
    .setStyle(ButtonStyle.Success)
    .setDisabled(false),
  new ButtonBuilder()
    .setCustomId(`declineButtonApplicationBaker`)
    .setEmoji(`❎`)
    .setLabel(`Decline`)
    .setStyle(ButtonStyle.Danger)
    .setDisabled(false)
);

const applicationButtonsMedia = new ActionRowBuilder<ButtonBuilder>().addComponents(
  new ButtonBuilder()
    .setCustomId(`acceptButtonApplicationMedia`)
    .setEmoji(`✅`)
    .setLabel(`Accept`)
    .setStyle(ButtonStyle.Success)
    .setDisabled(false),
  new ButtonBuilder()
    .setCustomId(`declineButtonApplicationMedia`)
    .setEmoji(`❎`)
    .setLabel(`Decline`)
    .setStyle(ButtonStyle.Danger)
    .setDisabled(false)
);

export const interactionCreate = new Event({
  id: "interaction_create",
  name: "Interaction Create",
  description: "The function that is invoked when an interaction is created.",
  event: "interactionCreate",

  eventFunction: async (interaction: Interaction) => {
      if (interaction.isCommand()) {
          const command: any = commands.find((command: CommandOptions) => command.name === interaction.commandName);
          if (command) command.commandFunction(interaction);
      } else if (interaction.isButton()) {
          if (interaction.customId === `bakerappButton`) {
              const newModal = new ModalBuilder().setCustomId(`bakerappModal`).setTitle(`Baker Application`);
              const firstRow = new TextInputBuilder()
                .setCustomId(`bakerusernameInput`)
                .setLabel(`Username:`)
                .setStyle(TextInputStyle.Short)
                .setMinLength(1)
                .setPlaceholder(`Input`)
                .setRequired(true);
              const secondRow = new TextInputBuilder()
                .setCustomId(`bakertimeInput`)
                .setLabel(`How long have you been in Gibraltar?`)
                .setStyle(TextInputStyle.Short)
                .setMinLength(1)
                .setPlaceholder(`Input`)
                .setRequired(true);
              const thirdRow = new TextInputBuilder()
                .setCustomId(`bakerreasonsInput`)
                .setLabel(`Why do you want to join Dev_Pie's?`)
                .setStyle(TextInputStyle.Paragraph)
                .setMinLength(25)
                .setPlaceholder(`Input`)
                .setRequired(true);
      
              const firstActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(firstRow);
              const secondActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(secondRow);
              const thirdActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(thirdRow);
              newModal.addComponents(firstActionRow, secondActionRow, thirdActionRow);
              await interaction.showModal(newModal);
          } else if (interaction.customId === `supervisorappButton`) {
              const newModal = new ModalBuilder().setCustomId(`supervisorappModal`).setTitle(`Supervisor Application`);
              const firstRow = new TextInputBuilder()
                .setCustomId(`supervisorusernameInput`)
                .setLabel(`Username:`)
                .setStyle(TextInputStyle.Short)
                .setMinLength(1)
                .setPlaceholder(`Input`)
                .setRequired(true);
              const secondRow = new TextInputBuilder()
                .setCustomId(`supervisortimeInput`)
                .setLabel(`How long have you been in Gibraltar?`)
                .setStyle(TextInputStyle.Short)
                .setMinLength(1)
                .setPlaceholder(`Input`)
                .setRequired(true);
              const thirdRow = new TextInputBuilder()
                .setCustomId(`supervisorexperienceInput`)
                .setLabel(`Do you have any experience as a Supervisor?`)
                .setStyle(TextInputStyle.Paragraph)
                .setMinLength(1)
                .setPlaceholder(`Input`)
                .setRequired(true);
              const fourthRow = new TextInputBuilder()
                .setCustomId(`supervisorreasonInput`)
                .setLabel(`Why do you want to join Dev_Pie's?`)
                .setStyle(TextInputStyle.Paragraph)
                .setMinLength(50)
                .setPlaceholder(`Input`)
                .setRequired(true);
      
              const firstActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(firstRow);
              const secondActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(secondRow);
              const thirdActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(thirdRow);
              const fourthActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(fourthRow);
              newModal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourthActionRow);
              await interaction.showModal(newModal);
          } else if (interaction.customId === `photographerappButton`) {
              const newModal = new ModalBuilder().setCustomId(`photographerappModal`).setTitle(`Photographer Application`);
              const firstRow = new TextInputBuilder()
                .setCustomId(`photographernameInput`)
                .setLabel(`Username:`)
                .setStyle(TextInputStyle.Short)
                .setMinLength(1)
                .setPlaceholder(`Input`)
                .setRequired(true);
              const secondRow = new TextInputBuilder()
                .setCustomId(`photographertimeInput`)
                .setLabel(`How long have you been in Gibraltar?`)
                .setStyle(TextInputStyle.Short)
                .setMinLength(1)
                .setPlaceholder(`Input`)
                .setRequired(true);
              const thirdRow = new TextInputBuilder()
                .setCustomId(`photographerexperienceInput`)
                .setLabel(`Do you have any experience as a Photographer?`)
                .setStyle(TextInputStyle.Paragraph)
                .setMinLength(1)
                .setPlaceholder(`Input`)
                .setRequired(true);
      
              const firstActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(firstRow);
              const secondActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(secondRow);
              const thirdActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(thirdRow);
              newModal.addComponents(firstActionRow, secondActionRow, thirdActionRow);
              await interaction.showModal(newModal);
          } else if (interaction.customId === `acceptButtonApplicationBaker`) {
              applicationButtonsBakery.components[0].setDisabled(true);
              applicationButtonsBakery.components[1].setDisabled(true);
              interaction.message.edit({ content: `**Accepted.**`, embeds: [interaction.message.embeds[0]], components: [applicationButtonsBakery] });

              const noblox = require("noblox.js");
              let userId = `0`;
              let rUsername = `0`;
              const newSplit = interaction.message.embeds[0].data.author.name.split(`:`);
              const discordTag = newSplit[1].replace(/\s+/g, "");
              const discordUser = interaction.guild.members.cache.find((u) => u.user.tag === `${discordTag}`);

              interaction.message.embeds[0].data.fields.forEach(async (field) => {
                  if (field.name === `Username:`) {
                    userId = await noblox.getIdFromUsername(`${field.value}`);
                    rUsername = field.value;
                  }
              });
              noblox
              .setCookie(
                `_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_00C3B0B3DCA2ED72691BEE326DD72D72E6416726871DBCB8DED5BCEC8B8D4135FB7BC320985824F4A969C81FE230CAC854E1A4F0357AA92830F5CCCA0411538BCDB60358EDFACDB3CF7973A0609B21B3E797A0F0BB358189C75CBC509858BD8B6BDF80991EBDA8E16CCDF2B210DB999DFDD676EA20268F4091A61726A1DBB1E05954F44E354BB6123FF9FF052613A524E7A854C93B3C31F9C11DF75CBBDEC60ADDDB80023F1A7129C415AAB149631139892AF862898AAF3FDDBDD5369E61288F761BB988CC4CBE4804CCF994E2FF10001964A791F5011D5FAAF7A6091BB01FFFF48D31FB13F83641E6635EC597B1E4847133E433FF97728C6A63BC9C5D5E1C2C51A5CF17DAFDFC9A20D68753D745D24082305901AD9C03CD051968A310D89DD3756CB9F7A7FF924F82139BF01D3EFF95F2EEDA0E4D18C77D7BFD82E4608DBC319D77ABC77A7DEFB21D9812A1CA7D07F8E466F708C4FE47BE21BD7379C1EAF2DB987416382490A36EB44541B26C10A2C0BAB60B15C81C18D1A927346E819977C9C276B107`
              )
              .then(async function () {
                  const groupId = 15747919;
                  const joinRequest = await noblox.getJoinRequest(groupId, userId);
                  const staffRole = interaction.guild.roles.cache.find((role) => role.name === `Staff`);
                  const bakerRole = interaction.guild.roles.cache.find((role) => role.name === `Baker`);
                  const supervisorRole = interaction.guild.roles.cache.find((role) => role.name === `Supervising Baker`);
                  const roleAssignTo = await interaction.guild.members.fetch(discordUser.id);

                  if (joinRequest) {
                      await noblox.handleJoinRequest(groupId, userId, true);
                      if (discordUser) {
                          roleAssignTo.roles.add(staffRole);
                          roleAssignTo.roles.add(bakerRole);
                          discordUser.send({
                            content: `Thank you for submitting your application.\n\nManagement have had a chance to review your application and have decided to **accept** you in to the company!\nIf you have already sent a request to the group it will be accepted immediatly. However, if you have not already sent a request you will need to manually request you be accepted.\n\nSincerely,\nManagement Team\nhttps://www.roblox.com/groups/15747919/UK-Dev-Pies#!/about`,
                          });
                      };
                      if (interaction.message.embeds[0].description === `*Supervisor Application*`) {
                          noblox.changeRank(groupId, userId, 1);
                          roleAssignTo.roles.add(supervisorRole);
                      };
                      interaction.reply({ content: `Accepted ${rUsername}'s join request, they have been informed. Application accepted!`, ephemeral: true });
                  } else {
                      if (discordUser) {
                          roleAssignTo.roles.add(staffRole);
                          roleAssignTo.roles.add(bakerRole);
                          discordUser.send({
                            content: `Thank you for submitting your application.\n\nManagement have had a chance to review your application and have decided to **accept** you in to the company!\nWe noticed you have not already sent a request to the group, you will need to manually request you be accepted.\n\nSincerely,\nManagement Team\nhttps://www.roblox.com/groups/15747919/UK-Dev-Pies#!/about`,
                          });
                      };
                      if (interaction.message.embeds[0].description === `*Supervisor Application*`) {
                          roleAssignTo.roles.add(supervisorRole);
                      };
                      interaction.reply({
                          content: `Unable to find a join request for this user. They have been informed, application accepted!`,
                          ephemeral: true,
                      });
                  };
              });
          } else if (interaction.customId === `acceptButtonApplicationMedia`) {
            applicationButtonsMedia.components[0].setDisabled(true);
            applicationButtonsMedia.components[1].setDisabled(true);
            interaction.message.edit({ content: `**Accepted.**`, embeds: [interaction.message.embeds[0]], components: [applicationButtonsMedia] });

            const noblox = require("noblox.js");
            let userId = `0`;
            let rUsername = `0`;
            const newSplit = interaction.message.embeds[0].data.author.name.split(`:`);
            const discordTag = newSplit[1].replace(/\s+/g, "");
            const discordUser = interaction.guild.members.cache.find((u) => u.user.tag === `${discordTag}`);

            noblox
            .setCookie(
              `_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_00C3B0B3DCA2ED72691BEE326DD72D72E6416726871DBCB8DED5BCEC8B8D4135FB7BC320985824F4A969C81FE230CAC854E1A4F0357AA92830F5CCCA0411538BCDB60358EDFACDB3CF7973A0609B21B3E797A0F0BB358189C75CBC509858BD8B6BDF80991EBDA8E16CCDF2B210DB999DFDD676EA20268F4091A61726A1DBB1E05954F44E354BB6123FF9FF052613A524E7A854C93B3C31F9C11DF75CBBDEC60ADDDB80023F1A7129C415AAB149631139892AF862898AAF3FDDBDD5369E61288F761BB988CC4CBE4804CCF994E2FF10001964A791F5011D5FAAF7A6091BB01FFFF48D31FB13F83641E6635EC597B1E4847133E433FF97728C6A63BC9C5D5E1C2C51A5CF17DAFDFC9A20D68753D745D24082305901AD9C03CD051968A310D89DD3756CB9F7A7FF924F82139BF01D3EFF95F2EEDA0E4D18C77D7BFD82E4608DBC319D77ABC77A7DEFB21D9812A1CA7D07F8E466F708C4FE47BE21BD7379C1EAF2DB987416382490A36EB44541B26C10A2C0BAB60B15C81C18D1A927346E819977C9C276B107`
            )
            .then(async function () {
                const groupId = 15810102;
                const staffRole = interaction.guild.roles.cache.find((role) => role.name === `Staff`);
                const staffTeamRole = interaction.guild.roles.cache.find((role) => role.name === `Staff Team`);
                const roleAssignTo = await interaction.guild.members.fetch(discordUser.id);
        
            interaction.message.embeds[0].data.fields.forEach(async (field) => {
                if (field.name === `Username:`) {
                  userId = await noblox.getIdFromUsername(`${field.value}`);
                  rUsername = field.value;
                  const userGroups = await noblox.getGroups(userId);

                  userGroups.forEach(async (group) => {
                    if (group.Id === groupId){
                      noblox.promote(groupId, userId);
                      interaction.reply({
                        content: `Application accepted, the user has been informed!`,
                        ephemeral: true,
                      });
                      discordUser.send({
                        content: `Thank you for submitting your application.\n\nManagement have had a chance to review your application and have decided to **accept** you in to the company!\nIf you have already sent a request to the group it will be accepted immediatly. However, if you have not already sent a request you will need to manually request you be accepted.\n\nSincerely,\nManagement Team\nhttps://www.roblox.com/groups/15810102/UK-RED-Media#!/about?nl=true&nl=true`,
                      });
                      roleAssignTo.roles.add(staffRole);
                      roleAssignTo.roles.add(staffTeamRole);
                    } else{
                      interaction.reply({
                        content: `Unable to find a join request for this user. They have been informed, application accepted!`,
                        ephemeral: true,
                      });
                      discordUser.send({
                        content: `Thank you for submitting your application.\n\nManagement have had a chance to review your application and have decided to **accept** you in to the company!\nWe noticed you have not already sent a request to the group, you will need to manually request you be accepted.\n\nSincerely,\nManagement Team\nhttps://www.roblox.com/groups/15810102/UK-RED-Media#!/about?nl=true&nl=true`,
                      });
                      roleAssignTo.roles.add(staffRole);
                      roleAssignTo.roles.add(staffTeamRole);
                    };
                  });
                }
            });
          });
        };
      } else if (interaction.type === InteractionType.ModalSubmit) {
          const applicationEmbed = new EmbedBuilder()
          .setColor(`#ff5050`)
          .setTimestamp()

          if (interaction.customId === `bakerappModal`) {
              applicationButtonsBakery.components[0].setDisabled(false);
              applicationButtonsBakery.components[1].setDisabled(false);
              const applicationChannel = interaction.guild.channels.cache.get(`1011563286996733952`);
              const usernameGiven = interaction.fields.getTextInputValue(`bakerusernameInput`);
              const timeGiven = interaction.fields.getTextInputValue(`bakertimeInput`);
              const reasonsGiven = interaction.fields.getTextInputValue(`bakerreasonsInput`);

              applicationEmbed.addFields(
                  { name: `Username:`, value: `${usernameGiven}` },
                  { name: `How long have you been in Gibraltar?`, value: `${timeGiven}` },
                  { name: `Why do you want to join Dev_Pie's?`, value: `${reasonsGiven}` }
              );
              applicationEmbed.setAuthor({
                  name: `Application: ${interaction.user.tag}`,
                  iconURL: `https://cdn.discordapp.com/attachments/967447441953656832/1011344488079306852/testing13.png`,
              });
              applicationEmbed.setDescription(`*Baker Application*`);
              applicationEmbed.setThumbnail('https://cdn.discordapp.com/attachments/967447441953656832/1011344488079306852/testing13.png');
              (applicationChannel as TextChannel).send({ embeds: [applicationEmbed], components: [applicationButtonsBakery] });
              await interaction.reply({content: `Your application has been successfully submitted. Please ensure you have sent a request to the group located in <#1010063720950546534>.`, ephemeral: true});
          } else if (interaction.customId === `supervisorappModal`) {
              applicationButtonsBakery.components[0].setDisabled(false);
              applicationButtonsBakery.components[1].setDisabled(false);
              const applicationChannel = interaction.guild.channels.cache.get(`1011563286996733952`);
              const usernameGiven = interaction.fields.getTextInputValue(`supervisorusernameInput`);
              const timeGiven = interaction.fields.getTextInputValue(`supervisortimeInput`);
              const experienceGiven = interaction.fields.getTextInputValue(`supervisorexperienceInput`);
              const reasonsGiven = interaction.fields.getTextInputValue(`supervisorreasonInput`);

              applicationEmbed.addFields(
                  { name: `Username:`, value: `${usernameGiven}` },
                  { name: `How long have you been in Gibraltar?`, value: `${timeGiven}` },
                  { name: `Do you have any experience as a Supervisor?`, value: `${experienceGiven}` },
                  { name: `Why do you want to join Dev_Pie's?`, value: `${reasonsGiven}` }
              );
              applicationEmbed.setAuthor({
                  name: `Application: ${interaction.user.tag}`,
                  iconURL: `https://cdn.discordapp.com/attachments/967447441953656832/1011344488079306852/testing13.png`,
              });
              applicationEmbed.setDescription(`*Supervisor Application*`);
              applicationEmbed.setThumbnail('https://cdn.discordapp.com/attachments/967447441953656832/1011344488079306852/testing13.png');
              (applicationChannel as TextChannel).send({ embeds: [applicationEmbed], components: [applicationButtonsBakery] });
              await interaction.reply({content: `Your application has been successfully submitted. Please ensure you have sent a request to the group located in <#1010063720950546534>.`, ephemeral: true});
          } else if (interaction.customId === `photographerappModal`) {
              applicationButtonsMedia.components[0].setDisabled(false);
              applicationButtonsMedia.components[1].setDisabled(false);
              const applicationChannel = interaction.guild.channels.cache.get(`1011679299784409110`);
              const usernameGiven = interaction.fields.getTextInputValue(`photographernameInput`);
              const timeGiven = interaction.fields.getTextInputValue(`photographertimeInput`);
              const experienceGiven = interaction.fields.getTextInputValue(`photographerexperienceInput`);
      
              applicationEmbed.addFields(
                { name: `Username:`, value: `${usernameGiven}` },
                { name: `How long have you been in Gibraltar?`, value: `${timeGiven}` },
                { name: `Do you have any experience as a Photographer?`, value: `${experienceGiven}` }
              );
              applicationEmbed.setAuthor({
                name: `Application: ${interaction.user.tag}`,
                iconURL: `https://cdn.discordapp.com/attachments/972967327622652024/1011676206388752434/RedMediaV6.png`,
              });
              applicationEmbed.setDescription(`*Photographer Application*`);
              applicationEmbed.setThumbnail('https://cdn.discordapp.com/attachments/972967327622652024/1011676206388752434/RedMediaV6.png');
              (applicationChannel as TextChannel).send({ embeds: [applicationEmbed], components: [applicationButtonsMedia] });  
              await interaction.reply({content: `Your application has been successfully submitted. Please ensure you have sent a request to the group located in <#1011679299578892360>.`, ephemeral: true});
          };
      };
  },
});