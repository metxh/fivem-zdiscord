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
    name: "kıyafet-menu",
    description: "oyuncuya kıyafet menu verir",
    role: "admin",

    options: [
        {
            name: "id",
            description: "oyuncunun idsi",
            required: true,
            type: "INTEGER",
        },
    ],

    run: async (client, interaction, args) => {
        if (!GetPlayerName(args.id)) return interaction.reply({ content: "Bu id yanlış amk salagi.", ephemeral: true });
        emitNet("qb-clothing:client:openMenu", args.id);
        client.utils.log.info(`[${interaction.member.displayName}] gave ${args.id} the clothing menu`);
        return interaction.reply({ content: `${GetPlayerName(args.id)} (${args.id}) was given the clothing menu`, ephemeral: false });
    },
};
