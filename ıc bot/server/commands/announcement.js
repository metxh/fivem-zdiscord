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
    name: "Duyuru at",
    description: "Sunucuya Duyuru gönderir",
    role: "mod", /// bunu ayarla seçenekler söyle mod / admin / god / god'da kalmasını tavsiye ederim

    options: [
        {
            name: "mesaj",
            description: "duyuru at",
            required: true,
            type: "STRING",
        },
    ],

    run: async (client, interaction, args) => {
        client.utils.chatMessage(-1, client.z.locale.announcement, args.message, { color: [ 255, 0, 0 ] });
        client.utils.log.info(`[${interaction.member.displayName}] Announcement: ${args.message}`);
        interaction.reply({ content: "duyuru atıldı", ephemeral: false });
    },
};
