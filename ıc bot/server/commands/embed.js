/**
 * This file is part of zdiscord.
 * Copyright (C) 2021 Tony/zfbx
 * source: <https://github.com/zfbx/zdiscord>
 *
 * This work is licensed under the Creative Commons
 * Attribution-NonCommercial-ShareAlike 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
 * or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 */

module.exports = {
    name: "embed",
    description: "seçtigin  kanala(şekilli) mesaj atar",
    role: "god",

    options: [
        {
            type: "SUB_COMMAND",
            name: "simple",
            description: "Simple to use embed creator",
            options: [
                {
                    name: "kanal",
                    description: "mesaj atıcagın kanalı seç",
                    required: true,
                    type: "CHANNEL",
                },
                {
                    name: "mesaj",
                    description: "mesaj yazcan buraya",
                    required: true,
                    type: "STRING",
                },
                {
                    name: "başlık",
                    description: "embed'in başlıgı (short)",
                    required: false,
                    type: "STRING",
                },
                {
                    name: "resim",
                    description: "buraya resimin url'sini gircen",
                    required: false,
                    type: "STRING",
                },
                {
                    name: "thumbnail",
                    description: "url gir buraya",
                    required: false,
                    type: "STRING",
                },
                {
                    name: "footer",
                    description: "footer mesaj",
                    required: false,
                    type: "STRING",
                },
                {
                    name: "renk",
                    description: "embed color (örnek: #007bff)",
                    required: false,
                    type: "STRING",
                },
            ],
        },
        {
            type: "SUB_COMMAND",
            name: "complex",
            description: "json string'li bir mesaj atar",
            options: [
                {
                    name: "kanal",
                    description: "seç kanal",
                    required: true,
                    type: "CHANNEL",
                },
                {
                    name: "json",
                    description: "json string atmakt",
                    required: true,
                    type: "STRING",
                },
            ],
        },
    ],

    run: async (client, interaction, args) => {
        const channel = interaction.guild.channels.cache.get(args.channel);
        if (!channel || channel.type !== "GUILD_TEXT") return interaction.reply({ content: "This isn't a valid channel I can post in", ephemeral: true });
        if (args.simple) {
            const embed = new client.Embed();
            if (args.title) embed.setTitle(args.title);
            if (args.footer) embed.setFooter({ text: args.footer });
            if (args.image) {
                if (/^(http[s]?:\/\/.*\.(?:png|jpg|gif|jpeg))/i.test(args.image)) embed.setImage(args.image);
                else return interaction.reply({ content: "Image link seems to be invalid", ephemeral: true });
            }
            if (args.color) {
                if (/^#[0-9A-F]{6}$/i.test(args.color)) embed.setColor(args.color);
                else return interaction.reply({ content: "Color is invalid. Provide a hex value (example: #ff22cc)", ephemeral: true });
            }
            if (args.thumbnail) {
                if (/^(http[s]?:\/\/.*\.(?:png|jpg|gif|jpeg))/i.test(args.thumbnail)) embed.setThumbnail(args.thumbnail);
                else return interaction.reply({ content: "Thumbnail link seems to be invalid", ephemeral: true });
            }
            embed.setDescription(args.message.replace(/<br>/ig, "\n"));
            channel.send({ embeds: [ embed ] });
        } else if (args.complex) {
            let embed = args.json;
            try {
                embed = JSON.parse(args.json);
            } catch (e) {
                return interaction.reply({ content: "JSON seems invalid", ephemeral: true });
            }
            channel.send({ embeds: [ embed ] });
        }
        return interaction.reply({ content: "Embed Published", ephemeral: false });
    },
};
