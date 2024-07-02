/*
    zdiscord - by Tony/zfbx - https://github.com/zfbx/zdiscord - License: CC BY-NC-SA 4.0
    Docs for this file available at https://zfbx.github.io/zdiscord/config or in docs/config.md
*/


/** ******************************
 * GENEL.CONFIG.AYARLARI
 ********************************/

const LanguageLocaleCode = "en";

// PUBLIC DEĞERLER
const FiveMServerName = "My FiveM Server";   /// SUNUCU ADI
const DiscordInviteLink = "https://discord.gg/fivem";  /// DAVET BAGLANTISI ORN : discord.gg/eyecore
const FiveMServerIP = "127.0.0.1";   /// sunucu ipsi örn . 257.213.23.21

// BUNU TRUE YAPARSAN CONSOLA SPAM ATIYOR
const DebugLogs = false;


/** ********************
 * DISCORD BOT AYARLARI
 ***********************/

const EnableDiscordBot = true;

// DISCORD BOT
const DiscordBotToken = "CHANGE";   /// DISCORD BOT TOKENI BUNU  https://discord.com/developers/docs/intro burdan alacaksın
const DiscordGuildId = "000000000000000000";   ///  SUNUCUNUN IDSINI KOPYALA 

// STAFF METIN ODASI
const EnableStaffChatForwarding = false;
const DiscordStaffChannelId = "000000000000000000";  /// STAFF METIN ODASININ IDSINI KOPYALICAKSIN
const AdditionalStaffChatRoleIds = [  /// YETKILI ROLLERININ IDSI GIRIN
    // "000000000000000",
];

// WHITELIST / BEYAZ LISTE PERMI
const EnableWhitelistChecking = true;
const DiscordWhitelistRoleIds = "000000000000000000, 000000000000000000"; /// 1 TANESİNİ GİRİP VİRGULU SILMEN YETERLİ (0000000 YAZAN YERIDE SILCEKSIN)

// SLASH KOMUTLARI 
const EnableDiscordSlashCommands = true;
const DiscordModRoleId = "000000000000000000"; /// MODERATOR YETKISININ IDSINI YAZ
const DiscordAdminRoleId = "000000000000000000";  /// ADMIN ROLUNUN IDSINI GIR
const DiscordGodRoleId = "000000000000000000";   /// BUNDA OWNERINKINI GIR YOKSA PATLATABILIRLER SUNUCUYU

// DISCORD BOT STATUS
const EnableBotStatusMessages = true;
const BotStatusMessages = [
    "{servername}",   /// BURDA SUNUCU ADI YAZICAK ELLEME
    "{playercount} online",  /// BURDADA SUNUCUDAKI OYUNCULAR ELLEME
];

// ACE PERMISSIONS
const EnableAutoAcePermissions = false;
const AutoAcePermissions = {
    // "example": "000000000000000000",
    // "example2": [ "000000000000000000", "000000000000000000"],
};

// ALINAN SSLERI LOGLAR BILMIYORSAN ACMA
const SaveScreenshotsToServer = false;


/** ************************
 * WEBHOOK LOG AYARLARI
**************************/

const EnableLoggingWebhooks = false;
const LoggingWebhookName = "zLogs";  /// LOGLARIN ADI zLogs OLARAK CIKAR DEGISMESSEN
// put "&" in front of the id if you're to ping a role
const LoggingAlertPingId = "&000000000000000000";  /// LOG GELDIGINDE ID'SINI YAZDIGIN ROLU ETIKETLER
// ORNEK : "banka": "https://discord.com/webhook/...", // webhook yazacak solda
const LoggingWebhooks = {
    "ornek": "https://discord.com/api/webhooks/000000000/sEcRRet-ToK3n_5tUfF_tH8t_YUo-S40u1d-n07-sHar3", /// linke webhook gir adınıda degisirsin
};


/** !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! NAPTIGINI BILMIYORSAN AŞAGIYI ELLEME !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

module.exports = {
    EnableDiscordBot: getConBool("discord_enable_bot", EnableDiscordBot),
    EnableStaffChatForwarding: getConBool("discord_enable_staff_chat", EnableStaffChatForwarding),
    EnableLoggingWebhooks: getConBool("discord_enable_logging_webhooks", EnableLoggingWebhooks),
    DebugLogs: getConBool("discord_debug", DebugLogs),
    DiscordBotToken: GetConvar("discord_token", DiscordBotToken),
    DiscordGuildId: GetConvar("discord_guild_id", DiscordGuildId),
    LanguageLocaleCode: GetConvar("discord_lang", LanguageLocaleCode),
    FiveMServerName: GetConvar("discord_server_name", FiveMServerName),
    DiscordInviteLink: GetConvar("discord_invite", DiscordInviteLink),
    FiveMServerIP: GetConvar("discord_server_ip", FiveMServerIP),
    EnableWhitelistChecking: getConBool("discord_enable_whitelist", EnableWhitelistChecking),
    DiscordWhitelistRoleIds: getConList("discord_whitelist_roles", DiscordWhitelistRoleIds),
    EnableDiscordSlashCommands: getConBool("discord_enable_commands", EnableDiscordSlashCommands),
    DiscordModRoleId: GetConvar("discord_mod_role", DiscordModRoleId),
    DiscordAdminRoleId: GetConvar("discord_admin_role", DiscordAdminRoleId),
    DiscordGodRoleId: GetConvar("discord_god_role", DiscordGodRoleId),
    EnableBotStatusMessages: getConBool("discord_enable_status", EnableBotStatusMessages),
    BotStatusMessages: BotStatusMessages,
    EnableAutoAcePermissions: getConBool("discord_enable_ace_perms", EnableAutoAcePermissions),
    AutoAcePermissions: AutoAcePermissions,
    SaveScreenshotsToServer: getConBool("discord_save_screenshots", SaveScreenshotsToServer),
    DiscordStaffChannelId: GetConvar("discord_staff_channel_id", DiscordStaffChannelId),
    LoggingWebhooks: LoggingWebhooks,
    LoggingAlertPingId: GetConvar("discord_logging_ping_id", LoggingAlertPingId),
    LoggingWebhookName: GetConvar("discord_logging_name", LoggingWebhookName),
    StaffChatRoleIds: [
        GetConvar("discord_mod_role", DiscordModRoleId),
        GetConvar("discord_admin_role", DiscordAdminRoleId),
        GetConvar("discord_god_role", DiscordGodRoleId),
        ...AdditionalStaffChatRoleIds,
    ],
};

/** Returns convar or default value fixed to a true/false boolean
 * @param {boolean|string|number} con - Convar name
 * @param {boolean|string|number} def - Default fallback value
 * @returns {boolean} - parsed bool */
function getConBool(con, def) {
    if (typeof def == "boolean") def = def.toString();
    const ret = GetConvar(con, def);
    if (typeof ret == "boolean") return ret;
    if (typeof ret == "string") return ["true", "on", "yes", "y", "1"].includes(ret.toLocaleLowerCase().trim());
    if (typeof ret == "number") return ret > 0;
    return false;
}

/** returns array of items or default array provided
 * @param {string} con - string of comma separated values
 * @param {string|Array} def - string of comma separated values
 * @returns {object} - array of discord ids */
function getConList(con, def) {
    const ret = GetConvar(con, def);
    if (typeof ret == "string") return ret.replace(/[^0-9,]/g, "").replace(/(,$)/g, "").split(",");
    if (Array.isArray(ret)) return ret;
    if (!ret) return [];
}
