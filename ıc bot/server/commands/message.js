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
    name: "özel mesaj",
    description: "seçtiğin oyuncuya özel dm atar",
    role: "mod",

    options: [
        {
            name: "id",
            description: "oyuncunun idsi",
            required: true,
            type: "INTEGER",
        },
        {
            name: "message",
            description: "Message oyuncu",
            required: true,
            type: "STRING",
        },
    ],

    run: async (client, interaction, args) => {
        if (!GetPlayerName(args.id)) return interaction.reply({ content: "Bu id yanlış amk salagi.", ephemeral: true });
        client.utils.chatMessage(args.id, client.z.locale.directMessage, args.message);
        client.utils.log.info(`[${interaction.member.displayName}] bu oyuncuya mesaj atıldı ${GetPlayerName(args.id)} (${args.id}): ${args.message}`);
        return interaction.reply({ content: `mesaj gönderildi ${GetPlayerName(args.id)} (${args.id}).`, ephemeral: false });
    },
};
