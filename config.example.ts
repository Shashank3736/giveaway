export const configs = {
    // Your bot token goes here
    token: "",
    // The default prefix for your bot. Don't worry guilds can change this later.
    prefix: "!",
    // This isn't required but you can add bot list api keys here.
    botListTokens: {
      DISCORD_BOTS_CO: "",
      DISCORD_BOT_ORG: "",
      BOTS_ON_DISCORD: "",
      DISCORD_BOT_LIST: "",
      BOTS_FOR_DISCORD: "",
      DISCORD_BOATS: "",
      DISCORD_BOTS_GG: "",
      DISCORD_BOTS_GROUP: "",
    },
    // This is the server id for your bot's main server where users can get help/support
    supportServerID: "",
    // These are channel ids that will enable some functionality
    channelIDs: {
      // When a translation is missing this is the channel you will be alerted in.
      missingTranslation: "",
      // When an error occurs, we will try and log it to this channel
      errorChannelID: "",
    },
    // These are the role ids that will enable some functionality.
    roleIDs: {
      // If you have a patreon set up you can add the patreon vip role id here.
      patreonVIPRoleID: "",
    },
    // These are the user ids that will enable some functionality.
    userIDs: {
      // You can delete the `as string[]` when you add atleast 1 id in them.
      // The user ids for the support team
      botSupporters: [] as string[],
      // The user ids for the other devs on your team
      botDevs: [] as string[],
      // The user ids who have complete 100% access to your bot
      botOwners: [] as string[],
    },
  };