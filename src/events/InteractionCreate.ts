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

const applicationButtons = new ActionRowBuilder<ButtonBuilder>().addComponents(
  new ButtonBuilder().setCustomId(`acceptButtonApplication`).setEmoji(`✅`).setLabel(`Accept`).setStyle(ButtonStyle.Success),
  new ButtonBuilder().setCustomId(`declineButtonApplication`).setEmoji(`❎`).setLabel(`Decline`).setStyle(ButtonStyle.Danger)
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
          .setCustomId(`supervisorusernameInpit`)
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
      } else if (interaction.customId === `acceptButtonApplication`) {
        const noblox = require(`noblox.js`);
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
            `_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_5241A50EEB8D87D356768944A030196761AD7663B87ABE657ACED9212AFB37023B82487168E167D9C6A2F0B7515F3B30567294E628DA211FC30F8215EA660D40D620C07FC1EAAC42EB638243115DFB62F8FB974236DDA185610280F47C26B510D1EBAC599692704CCC961E09E3E37CDDE33C80BA9E2F6450CE0A2AD7CA9E1A5A9A6F76557545445AB5F58055AF7E7480A942A81F25BD7BF5E73C70BE4A46AEB2992AF72302A163968BC86F0A8F08B0D87DFB17D054A03C94543CDBA24BA378DACF2F2989EAB81DC9275E87AA316FD173791A20B4991B07A3A371082EFA1502A97B73722D6CA69164E70C75E59165ECF17A3D7D7C6837C778C072EBA6446634842EB5210A4A46D03FB236E9578DFEB3B5B7264710A0EB8685427F8999911D6D01DA4EC3419713F6A99C977F3A1BDD07054FB78731D11FFB3CADE584A75B61C7492822934649D149ABE472C17B05CC88C316B817CAA0573FE6EBA91A8308E6A24E0EF6E65CB500D99CA69A38E4CEEE7AC042118478EEA11846B45D9886AF55A0AF7E32CBAE`
          )
          .then(async function () {
            const groupId = 15747919;
            const joinRequest = await noblox.getJoinRequest(groupId, userId);
            const staffRole = interaction.guild.roles.cache.find((role) => role.name === `Staff`);
            const bakerRole = interaction.guild.roles.cache.find((role) => role.name === `bakerRole`);
            const supervisorRole = interaction.guild.roles.cache.find((role) => role.name === `supervisorRole`);
            const roleAssignTo = await interaction.guild.members.fetch(discordUser.id);

            if (joinRequest) {
              await noblox.handleJoinRequest(groupId, userId, true);
              if (discordUser) {
                roleAssignTo.roles.add(staffRole);
                roleAssignTo.roles.add(bakerRole);
                discordUser.send({
                  content: `Thank you for submitting your application.\n\nManagement have had a chance to review your application and have decided to **accept** you in to the company!\nIf you have already sent a request to the group it will be accepted immediatly. However, if you have not already sent a request you will need to manually request you be accepted.\n\nSincerely,\nManagement Team\nhttps://www.roblox.com/groups/15747919/UK-Dev-Pies#!/about`,
                });
              }
              if (interaction.message.embeds[0].description === `*Supervisor Application*`) {
                noblox.changeRank(groupId, userId, 1);
                roleAssignTo.roles.add(supervisorRole);
              }
              interaction.reply({ content: `Accepted ${rUsername}'s join request, they have been informed. Application accepted!`, ephemeral: true });
            } else {
              if (discordUser) {
                roleAssignTo.roles.add(staffRole);
                roleAssignTo.roles.add(bakerRole);
                discordUser.send({
                  content: `Thank you for submitting your application.\n\nManagement have had a chance to review your application and have decided to **accept** you in to the company!\nWe noticed you have not already sent a request to the group, you will need to manually request you be accepted.\n\nSincerely,\nManagement Team\nhttps://www.roblox.com/groups/15747919/UK-Dev-Pies#!/about`,
                });
              }
              if (interaction.message.embeds[0].description === `*Supervisor Application*`) {
                roleAssignTo.roles.add(supervisorRole);
              }
              interaction.reply({
                content: `Unable to find a join request for this user. They have been informed, application accepted!`,
                ephemeral: true,
              });
            }
          });
      }
    } else if (interaction.type === InteractionType.ModalSubmit) {
      const applicationEmbed = new EmbedBuilder()
        .setColor(`#ff5050`)
        .setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/attachments/967447441953656832/1011344488079306852/testing13.png`);

      if (interaction.customId === `bakerappModal`) {
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
        (applicationChannel as TextChannel).send({ embeds: [applicationEmbed], components: [applicationButtons] });
      } else if (interaction.customId === `supervisorappModal`) {
        const applicationChannel = interaction.guild.channels.cache.get(`1011563286996733952`);
        const usernameGiven = interaction.fields.getTextInputValue(`supervisorusernameInpit`);
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
        (applicationChannel as TextChannel).send({ embeds: [applicationEmbed], components: [applicationButtons] });
      }
    }
  },
});
