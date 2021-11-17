import { Client, ClientEvents } from "discord.js";

export type EventHandler<E extends keyof ClientEvents> = (
    client: Client,
    ...args: ClientEvents[E]
) => Promise<unknown> | unknown;