import { botCache } from "../../mod.ts";
import { stringToMilliseconds } from "../utils/helpers.ts";

botCache.arguments.set("duration", {
  name: "duration",
  execute: async function (_argument, parameters, message) {
    const [time] = parameters;
    if (!time) return;

		return stringToMilliseconds(time)
  },
});
