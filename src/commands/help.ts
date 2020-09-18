import { botCache } from "../../mod.ts";
import { sendMessage } from "../../deps.ts";
import { translate } from "../utils/i18next.ts";
import { Embed } from "../utils/Embed.ts";

botCache.commands.set(`help`, {
  name: `help`,
  arguments: [
    {
      name: "command",
      type: "string",
      lowercase: true,
    },
  ],
  execute: function (message, args: HelpArgs) {
    if (!args.command) {
      return sendMessage(message.channel, `No command provided.`);
    }

    const command = botCache.commands.get(args.command);
    if (!command) {
      return sendMessage(message.channel, `Command ${args.command} not found.`);
    }

    const description = translate(
      message.guildID!,
      `commands/${args.command}:DESCRIPTION`,
    );

    const embed = new Embed()
      .setAuthor(
        translate(
          message.guildID!,
          `commands/help:AUTHOR`,
          { name: args.command },
        ),
      )
      .setDescription(
        description === "DESCRIPTION" ? command.description : description,
      );

    sendMessage(
      message.channel,
      { embed },
    );
  },
});

interface HelpArgs {
  command?: string;
}
